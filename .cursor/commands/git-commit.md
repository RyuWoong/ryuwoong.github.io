# Commit Staged Files with GitHub MCP

Staging된 파일들을 분석하여 Conventional Commits 형식의 커밋 메시지를 자동 생성하고, GitHub MCP를 사용하여 확인 후 커밋합니다.

## 사용 방법

이 명령어는 staging된 파일들을 확인하고, 변경 내용을 분석하여 적절한 커밋 메시지를 생성한 후, GitHub MCP를 통해 커밋합니다.

## 동작 방식

1. Staging된 파일 목록 확인
2. 변경 내용 분석 및 커밋 타입 결정
3. 커밋 메시지 생성 및 확인
4. 커밋 분할 제안 (필요시)
5. 커밋 실행

## 지시사항

다음 단계를 따라 staging된 파일들을 분석하고 GitHub MCP를 사용하여 커밋하세요:

1. **Staging된 파일 확인**

   - `git diff --cached --name-status` 명령어로 staging된 파일 목록을 확인합니다.
   - 파일이 없으면 사용자에게 알리고 종료합니다.

2. **저장소 정보 확인**

   - `git remote get-url origin`으로 GitHub 저장소 URL을 가져옵니다.
   - URL에서 owner와 repo를 추출합니다 (예: `github.com/owner/repo`).
   - `git branch --show-current`로 현재 브랜치를 확인합니다.

3. **커밋 타입 결정**

   - staging된 파일들을 분석하여 Conventional Commits 형식의 타입을 결정합니다:
     - `feat`: 새 기능 추가
     - `fix`: 버그 수정
     - `docs`: 문서 변경
     - `style`: 코드 스타일 변경 (CSS 등)
     - `refactor`: 리팩토링
     - `test`: 테스트 추가/수정
     - `chore`: 설정 파일 변경 (package.json, tsconfig.json 등)
   - 파일 확장자와 경로를 기반으로 타입을 결정합니다.
   - `git diff --cached`의 내용을 분석하여 키워드(fix, bug, feature, refactor 등)를 확인합니다.

4. **Scope 결정**

   - 변경된 파일들의 경로를 분석하여 scope를 결정합니다:
     - `app/` 디렉토리 → `app`
     - `components/` 디렉토리 → `components`
     - `api/` 디렉토리 → `api`
     - `public/` 디렉토리 → `public`

5. **Subject 생성**

   - 파일이 1개면 파일명을 사용합니다.
   - 파일이 여러 개면 "multiple files"를 사용합니다.

6. **커밋 메시지 생성 및 확인**

   - 생성된 커밋 메시지를 사용자에게 보여줍니다.
   - 형식: `{type}({scope}): {subject}` 또는 `{type}: {subject}`
   - 사용자에게 확인을 받습니다.
   - 필요시 커밋 메시지를 수정할 수 있도록 합니다.

7. **커밋 분할 제안**

   - 변경된 파일이 5개 이상이면 커밋을 나눌지 물어봅니다.

8. **GitHub MCP를 사용하여 커밋**

   - `mcp_github_push_files` 도구를 사용하여 커밋합니다.
   - staging된 각 파일의 내용을 읽어서 `path`와 `content`를 포함한 배열을 만듭니다.
   - 삭제된 파일(D)은 빈 content로 처리합니다.
   - 다음 파라미터로 `mcp_github_push_files`를 호출합니다:
     - `owner`: 저장소 owner
     - `repo`: 저장소 이름
     - `branch`: 현재 브랜치
     - `message`: 생성된 커밋 메시지
     - `files`: 파일 배열 (각 파일은 `{path: string, content: string}` 형식)

9. **결과 확인**
   - 커밋이 성공하면 사용자에게 알립니다.
   - 실패하면 오류 메시지를 표시합니다.

## 중요 사항

- **반드시 사용자 확인을 받은 후에만 커밋하세요.**
- 커밋 메시지를 사용자에게 보여주고 확인을 받아야 합니다.
- 파일이 많으면 커밋을 나눌지 물어봐야 합니다.
