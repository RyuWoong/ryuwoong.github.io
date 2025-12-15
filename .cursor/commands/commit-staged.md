# Commit Staged Files

Staging된 파일들을 분석하여 Conventional Commits 형식의 커밋 메시지를 자동 생성하고, 확인 후 커밋합니다.

## 사용 방법

이 명령어는 staging된 파일들을 확인하고, 변경 내용을 분석하여 적절한 커밋 메시지를 생성합니다.

## 동작 방식

1. Staging된 파일 목록 확인
2. 변경 내용 분석 및 커밋 타입 결정
3. 커밋 메시지 생성 및 확인
4. 커밋 분할 제안 (필요시)
5. 사용자 확인 후 커밋 실행

```bash
#!/bin/bash

# 색상 정의
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}📋 Staging된 파일 확인 중...${NC}\n"

# Staging된 파일이 있는지 확인
STAGED_FILES=$(git diff --cached --name-status)

if [ -z "$STAGED_FILES" ]; then
    echo -e "${RED}❌ Staging된 파일이 없습니다.${NC}"
    echo -e "${YELLOW}💡 git add 명령어로 파일을 staging 해주세요.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Staging된 파일:${NC}\n"
echo "$STAGED_FILES" | while IFS=$'\t' read -r status file; do
    case "$status" in
        A) echo -e "  ${GREEN}+${NC} $file (추가)" ;;
        M) echo -e "  ${YELLOW}~${NC} $file (수정)" ;;
        D) echo -e "  ${RED}-${NC} $file (삭제)" ;;
        R*) echo -e "  ${BLUE}→${NC} $file (이름 변경)" ;;
        C*) echo -e "  ${BLUE}→${NC} $file (복사)" ;;
        *) echo -e "  ${BLUE}?${NC} $file" ;;
    esac
done

echo ""

# 파일 변경 내용 분석
COMMIT_TYPE=""
COMMIT_SCOPE=""
COMMIT_SUBJECT=""

# 파일 경로와 확장자 기반으로 타입 결정
ADDED_FILES=$(echo "$STAGED_FILES" | grep "^A" | cut -f2)
MODIFIED_FILES=$(echo "$STAGED_FILES" | grep "^M" | cut -f2)
DELETED_FILES=$(echo "$STAGED_FILES" | grep "^D" | cut -f2)

# 변경된 파일들 분석
ALL_CHANGED_FILES=$(echo "$STAGED_FILES" | cut -f2)

# 커밋 타입 결정 로직
HAS_DOCS=false
HAS_STYLE=false
HAS_FEAT=false
HAS_FIX=false
HAS_REFACTOR=false
HAS_TEST=false
HAS_CHORE=false

for file in $ALL_CHANGED_FILES; do
    # 문서 관련
    if [[ "$file" == *.md ]] || [[ "$file" == *README* ]] || [[ "$file" == *CHANGELOG* ]] || [[ "$file" == *docs/* ]]; then
        HAS_DOCS=true
    fi
    
    # 스타일 관련 (CSS, 스타일 파일)
    if [[ "$file" == *.css ]] || [[ "$file" == *.module.css ]] || [[ "$file" == *styles* ]]; then
        HAS_STYLE=true
    fi
    
    # 테스트 관련
    if [[ "$file" == *test* ]] || [[ "$file" == *spec* ]] || [[ "$file" == *.test.* ]] || [[ "$file" == *.spec.* ]]; then
        HAS_TEST=true
    fi
    
    # 설정 파일 (chore)
    if [[ "$file" == package.json ]] || [[ "$file" == package-lock.json ]] || [[ "$file" == pnpm-lock.yaml ]] || \
       [[ "$file" == tsconfig.json ]] || [[ "$file" == next.config.* ]] || [[ "$file" == eslint.config.* ]] || \
       [[ "$file" == .gitignore ]] || [[ "$file" == .prettierrc* ]] || [[ "$file" == .cursor/* ]]; then
        HAS_CHORE=true
    fi
done

# diff 내용 분석으로 더 정확한 타입 결정
DIFF_CONTENT=$(git diff --cached)

# 버그 수정 키워드 확인
if echo "$DIFF_CONTENT" | grep -qiE "(fix|bug|error|issue|problem|resolve|correct)"; then
    HAS_FIX=true
fi

# 새 기능 키워드 확인
if echo "$DIFF_CONTENT" | grep -qiE "(add|new|feature|implement|create)"; then
    HAS_FEAT=true
fi

# 리팩토링 키워드 확인
if echo "$DIFF_CONTENT" | grep -qiE "(refactor|restructure|reorganize|cleanup|optimize)"; then
    HAS_REFACTOR=true
fi

# 우선순위에 따라 커밋 타입 결정
if [ "$HAS_FIX" = true ]; then
    COMMIT_TYPE="fix"
elif [ "$HAS_FEAT" = true ] && [ "$HAS_FIX" = false ]; then
    COMMIT_TYPE="feat"
elif [ "$HAS_REFACTOR" = true ]; then
    COMMIT_TYPE="refactor"
elif [ "$HAS_DOCS" = true ] && [ "$HAS_FEAT" = false ] && [ "$HAS_FIX" = false ]; then
    COMMIT_TYPE="docs"
elif [ "$HAS_STYLE" = true ] && [ "$HAS_FEAT" = false ] && [ "$HAS_FIX" = false ]; then
    COMMIT_TYPE="style"
elif [ "$HAS_TEST" = true ]; then
    COMMIT_TYPE="test"
elif [ "$HAS_CHORE" = true ]; then
    COMMIT_TYPE="chore"
else
    COMMIT_TYPE="feat"  # 기본값
fi

# Scope 결정 (주로 변경된 주요 디렉토리)
SCOPE=""
if echo "$ALL_CHANGED_FILES" | grep -q "^app/"; then
    SCOPE="app"
elif echo "$ALL_CHANGED_FILES" | grep -q "^components/"; then
    SCOPE="components"
elif echo "$ALL_CHANGED_FILES" | grep -q "^api/"; then
    SCOPE="api"
elif echo "$ALL_CHANGED_FILES" | grep -q "^public/"; then
    SCOPE="public"
fi

# Subject 생성 (변경된 주요 파일명 기반)
FIRST_FILE=$(echo "$ALL_CHANGED_FILES" | head -n1)
FILE_NAME=$(basename "$FIRST_FILE" | sed 's/\.[^.]*$//')

# 파일명을 기반으로 간단한 subject 생성
if [ ${#ALL_CHANGED_FILES} -lt 100 ]; then
    # 파일이 적으면 파일명들을 나열
    FILE_COUNT=$(echo "$ALL_CHANGED_FILES" | wc -l | tr -d ' ')
    if [ "$FILE_COUNT" -eq 1 ]; then
        SUBJECT="$FILE_NAME"
    else
        SUBJECT="multiple files"
    fi
else
    SUBJECT="multiple files"
fi

# 커밋 메시지 생성
if [ -n "$SCOPE" ]; then
    COMMIT_MESSAGE="$COMMIT_TYPE($SCOPE): $SUBJECT"
else
    COMMIT_MESSAGE="$COMMIT_TYPE: $SUBJECT"
fi

echo -e "${BLUE}📝 생성된 커밋 메시지:${NC}\n"
echo -e "${GREEN}$COMMIT_MESSAGE${NC}\n"

# 변경 내용 요약 표시
echo -e "${BLUE}📊 변경 내용 요약:${NC}"
echo -e "  타입: ${YELLOW}$COMMIT_TYPE${NC}"
if [ -n "$SCOPE" ]; then
    echo -e "  범위: ${YELLOW}$SCOPE${NC}"
fi
echo -e "  변경된 파일 수: ${YELLOW}$(echo "$ALL_CHANGED_FILES" | wc -l | tr -d ' ')${NC}개\n"

# 커밋 분할 제안
FILE_COUNT=$(echo "$ALL_CHANGED_FILES" | wc -l | tr -d ' ')
if [ "$FILE_COUNT" -gt 5 ]; then
    echo -e "${YELLOW}⚠️  변경된 파일이 많습니다 ($FILE_COUNT개).${NC}"
    echo -e "${YELLOW}💡 커밋을 더 작은 단위로 나누는 것을 고려해보세요.${NC}\n"
    
    read -p "커밋을 나누시겠습니까? (y/N): " SPLIT_COMMIT
    if [[ "$SPLIT_COMMIT" =~ ^[Yy]$ ]]; then
        echo -e "${BLUE}💡 git reset HEAD~ 명령어로 커밋을 취소하고 파일을 다시 staging한 후,${NC}"
        echo -e "${BLUE}   더 작은 단위로 나누어 커밋하세요.${NC}"
        exit 0
    fi
fi

# 사용자 확인
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
read -p "위 커밋 메시지로 커밋하시겠습니까? (Y/n): " CONFIRM

if [[ "$CONFIRM" =~ ^[Nn]$ ]]; then
    echo -e "${YELLOW}❌ 커밋이 취소되었습니다.${NC}"
    exit 0
fi

# 커밋 메시지 수정 옵션
read -p "커밋 메시지를 수정하시겠습니까? (y/N): " EDIT_MESSAGE

if [[ "$EDIT_MESSAGE" =~ ^[Yy]$ ]]; then
    read -p "새로운 커밋 메시지를 입력하세요: " CUSTOM_MESSAGE
    COMMIT_MESSAGE="$CUSTOM_MESSAGE"
    echo -e "${GREEN}✅ 커밋 메시지가 '$COMMIT_MESSAGE'로 변경되었습니다.${NC}\n"
fi

# 커밋 실행
echo -e "${BLUE}🚀 커밋 실행 중...${NC}\n"

if git commit -m "$COMMIT_MESSAGE"; then
    echo -e "\n${GREEN}✅ 커밋이 완료되었습니다!${NC}"
    echo -e "${GREEN}📝 커밋 메시지: $COMMIT_MESSAGE${NC}\n"
    
    # 최근 커밋 정보 표시
    echo -e "${BLUE}📋 최근 커밋 정보:${NC}"
    git log -1 --pretty=format:"  %h - %s (%an, %ar)" 
    echo -e "\n"
else
    echo -e "\n${RED}❌ 커밋 중 오류가 발생했습니다.${NC}"
    exit 1
fi

