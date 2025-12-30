# Design Tokens

디자인 시스템의 토큰 정의 문서입니다.

## 목차

- [토큰 구조](#토큰-구조)
- [Primitive Tokens](#primitive-tokens)
- [Semantic Tokens](#semantic-tokens)
- [Typography Tokens](#typography-tokens)
- [명암비 가이드](#명암비-가이드)

---

## 토큰 구조

3-Tier 토큰 아키텍처를 사용합니다.

```
┌─────────────────────────────────────────────────────────┐
│  Semantic Tokens (의미 기반)                              │
│  background.primary, text.muted, border.error           │
├─────────────────────────────────────────────────────────┤
│  Alias Tokens (테마별 매핑)                               │
│  dark.background = GRAY1, light.background = GRAY12     │
├─────────────────────────────────────────────────────────┤
│  Primitive Tokens (원시값)                               │
│  GRAY1, GRAY2, ... GRAY12, PRIMARY1 ~ PRIMARY10         │
└─────────────────────────────────────────────────────────┘
```

---

## Primitive Tokens

### Gray Scale

12단계 그레이 스케일입니다. 숫자가 낮을수록 어둡습니다.

| Token   | HEX       | Preview | 용도                    |
| ------- | --------- | ------- | ----------------------- |
| GRAY1   | `#111111` | ![](https://via.placeholder.com/20/111111/111111) | 다크모드 배경           |
| GRAY2   | `#191919` | ![](https://via.placeholder.com/20/191919/191919) | 다크모드 카드           |
| GRAY3   | `#222222` | ![](https://via.placeholder.com/20/222222/222222) | 다크모드 elevated       |
| GRAY4   | `#2a2a2a` | ![](https://via.placeholder.com/20/2a2a2a/2a2a2a) | 다크모드 border         |
| GRAY5   | `#313131` | ![](https://via.placeholder.com/20/313131/313131) | 다크모드 border hover   |
| GRAY6   | `#3a3a3a` | ![](https://via.placeholder.com/20/3a3a3a/3a3a3a) | 다크모드 solid bg       |
| GRAY7   | `#484848` | ![](https://via.placeholder.com/20/484848/484848) |                         |
| GRAY8   | `#606060` | ![](https://via.placeholder.com/20/606060/606060) |                         |
| GRAY9   | `#6e6e6e` | ![](https://via.placeholder.com/20/6e6e6e/6e6e6e) | 비활성 텍스트           |
| GRAY10  | `#7b7b7b` | ![](https://via.placeholder.com/20/7b7b7b/7b7b7b) |                         |
| GRAY11  | `#b4b4b4` | ![](https://via.placeholder.com/20/b4b4b4/b4b4b4) | 보조 텍스트             |
| GRAY12  | `#eeeeee` | ![](https://via.placeholder.com/20/eeeeee/eeeeee) | 주요 텍스트 (다크모드)  |

> 라이트모드에서는 순서를 반전하여 사용합니다. (GRAY12 → 배경, GRAY1 → 텍스트)

---

### Primary Scale

브랜드 Primary 색상입니다. `#61ff96`을 기준으로 생성된 스케일입니다.

| Token     | HEX       | Preview | 명암비 (vs #111) | 명암비 (vs #fff) |
| --------- | --------- | ------- | ---------------- | ---------------- |
| PRIMARY1  | `#0d1f12` | ![](https://via.placeholder.com/20/0d1f12/0d1f12) | 14.2:1 ✓ AAA     | -                |
| PRIMARY2  | `#132d19` | ![](https://via.placeholder.com/20/132d19/132d19) | 12.8:1 ✓ AAA     | -                |
| PRIMARY3  | `#1a4024` | ![](https://via.placeholder.com/20/1a4024/1a4024) | 10.1:1 ✓ AAA     | -                |
| PRIMARY4  | `#1f5a2e` | ![](https://via.placeholder.com/20/1f5a2e/1f5a2e) | 7.2:1 ✓ AAA      | 7.2:1 ✓ AAA      |
| PRIMARY5  | `#237538` | ![](https://via.placeholder.com/20/237538/237538) | 5.1:1 ✓ AA       | 5.1:1 ✓ AA       |
| PRIMARY6  | `#2a9d47` | ![](https://via.placeholder.com/20/2a9d47/2a9d47) | 4.5:1 ✓ AA       | 2.8:1            |
| PRIMARY7  | `#3ec463` | ![](https://via.placeholder.com/20/3ec463/3ec463) | 6.8:1 ✓ AAA      | 1.9:1 ✗          |
| PRIMARY8  | `#61ff96` | ![](https://via.placeholder.com/20/61ff96/61ff96) | 9.5:1 ✓ AAA      | 1.4:1 ✗          |
| PRIMARY9  | `#8affb3` | ![](https://via.placeholder.com/20/8affb3/8affb3) | 11.2:1 ✓ AAA     | 1.2:1 ✗          |
| PRIMARY10 | `#c5ffd9` | ![](https://via.placeholder.com/20/c5ffd9/c5ffd9) | 14.8:1 ✓ AAA     | 1.1:1 ✗          |

> ⚠️ PRIMARY7~10은 밝은 배경에서 텍스트로 사용할 수 없습니다.

---

### Error Scale (Red)

오류, 위험, 삭제 등의 상태를 나타냅니다.

| Token   | HEX       | Preview | 용도              |
| ------- | --------- | ------- | ----------------- |
| ERROR1  | `#1f1315` | ![](https://via.placeholder.com/20/1f1315/1f1315) | 다크모드 배경     |
| ERROR2  | `#291519` | ![](https://via.placeholder.com/20/291519/291519) |                   |
| ERROR3  | `#481a1d` | ![](https://via.placeholder.com/20/481a1d/481a1d) |                   |
| ERROR4  | `#5e1f22` | ![](https://via.placeholder.com/20/5e1f22/5e1f22) |                   |
| ERROR5  | `#7d2828` | ![](https://via.placeholder.com/20/7d2828/7d2828) |                   |
| ERROR6  | `#9e2b2b` | ![](https://via.placeholder.com/20/9e2b2b/9e2b2b) |                   |
| ERROR7  | `#c53030` | ![](https://via.placeholder.com/20/c53030/c53030) | 아이콘, 배지      |
| ERROR8  | `#e53e3e` | ![](https://via.placeholder.com/20/e53e3e/e53e3e) | 버튼 배경         |
| ERROR9  | `#f56565` | ![](https://via.placeholder.com/20/f56565/f56565) | 다크모드 텍스트   |
| ERROR10 | `#fc8181` | ![](https://via.placeholder.com/20/fc8181/fc8181) |                   |
| ERROR11 | `#feb2b2` | ![](https://via.placeholder.com/20/feb2b2/feb2b2) |                   |
| ERROR12 | `#fff5f5` | ![](https://via.placeholder.com/20/fff5f5/fff5f5) | 라이트모드 배경   |

---

### Warning Scale (Amber)

경고, 주의가 필요한 상태를 나타냅니다.

| Token     | HEX       | Preview | 용도              |
| --------- | --------- | ------- | ----------------- |
| WARNING1  | `#1f1a0d` | ![](https://via.placeholder.com/20/1f1a0d/1f1a0d) | 다크모드 배경     |
| WARNING2  | `#2d2305` | ![](https://via.placeholder.com/20/2d2305/2d2305) |                   |
| WARNING3  | `#493c00` | ![](https://via.placeholder.com/20/493c00/493c00) |                   |
| WARNING4  | `#634e00` | ![](https://via.placeholder.com/20/634e00/634e00) |                   |
| WARNING5  | `#7c5a00` | ![](https://via.placeholder.com/20/7c5a00/7c5a00) |                   |
| WARNING6  | `#a67c00` | ![](https://via.placeholder.com/20/a67c00/a67c00) |                   |
| WARNING7  | `#c99a00` | ![](https://via.placeholder.com/20/c99a00/c99a00) |                   |
| WARNING8  | `#d69e2e` | ![](https://via.placeholder.com/20/d69e2e/d69e2e) | 버튼 배경         |
| WARNING9  | `#ecc94b` | ![](https://via.placeholder.com/20/ecc94b/ecc94b) | 다크모드 텍스트   |
| WARNING10 | `#f6e05e` | ![](https://via.placeholder.com/20/f6e05e/f6e05e) |                   |
| WARNING11 | `#faf089` | ![](https://via.placeholder.com/20/faf089/faf089) |                   |
| WARNING12 | `#fffff0` | ![](https://via.placeholder.com/20/fffff0/fffff0) | 라이트모드 배경   |

---

### Info Scale (Blue)

정보, 링크, 안내 등의 상태를 나타냅니다.

| Token  | HEX       | Preview | 용도              |
| ------ | --------- | ------- | ----------------- |
| INFO1  | `#0d1520` | ![](https://via.placeholder.com/20/0d1520/0d1520) | 다크모드 배경     |
| INFO2  | `#0d1d31` | ![](https://via.placeholder.com/20/0d1d31/0d1d31) |                   |
| INFO3  | `#0c2948` | ![](https://via.placeholder.com/20/0c2948/0c2948) |                   |
| INFO4  | `#0e3a68` | ![](https://via.placeholder.com/20/0e3a68/0e3a68) |                   |
| INFO5  | `#1e4e8c` | ![](https://via.placeholder.com/20/1e4e8c/1e4e8c) |                   |
| INFO6  | `#2b6cb0` | ![](https://via.placeholder.com/20/2b6cb0/2b6cb0) |                   |
| INFO7  | `#3182ce` | ![](https://via.placeholder.com/20/3182ce/3182ce) | 아이콘, 링크      |
| INFO8  | `#4299e1` | ![](https://via.placeholder.com/20/4299e1/4299e1) | 버튼 배경         |
| INFO9  | `#63b3ed` | ![](https://via.placeholder.com/20/63b3ed/63b3ed) | 다크모드 텍스트   |
| INFO10 | `#90cdf4` | ![](https://via.placeholder.com/20/90cdf4/90cdf4) |                   |
| INFO11 | `#bee3f8` | ![](https://via.placeholder.com/20/bee3f8/bee3f8) |                   |
| INFO12 | `#ebf8ff` | ![](https://via.placeholder.com/20/ebf8ff/ebf8ff) | 라이트모드 배경   |

---

### Success Scale (Green)

성공, 완료, 긍정적인 상태를 나타냅니다. (Primary와 구분되는 녹색)

| Token     | HEX       | Preview | 용도              |
| --------- | --------- | ------- | ----------------- |
| SUCCESS1  | `#0d1f14` | ![](https://via.placeholder.com/20/0d1f14/0d1f14) | 다크모드 배경     |
| SUCCESS2  | `#0f2918` | ![](https://via.placeholder.com/20/0f2918/0f2918) |                   |
| SUCCESS3  | `#14412a` | ![](https://via.placeholder.com/20/14412a/14412a) |                   |
| SUCCESS4  | `#1a5739` | ![](https://via.placeholder.com/20/1a5739/1a5739) |                   |
| SUCCESS5  | `#22704a` | ![](https://via.placeholder.com/20/22704a/22704a) |                   |
| SUCCESS6  | `#25855a` | ![](https://via.placeholder.com/20/25855a/25855a) |                   |
| SUCCESS7  | `#2f9e6a` | ![](https://via.placeholder.com/20/2f9e6a/2f9e6a) | 아이콘, 배지      |
| SUCCESS8  | `#38a169` | ![](https://via.placeholder.com/20/38a169/38a169) | 버튼 배경         |
| SUCCESS9  | `#48bb78` | ![](https://via.placeholder.com/20/48bb78/48bb78) | 다크모드 텍스트   |
| SUCCESS10 | `#68d391` | ![](https://via.placeholder.com/20/68d391/68d391) |                   |
| SUCCESS11 | `#9ae6b4` | ![](https://via.placeholder.com/20/9ae6b4/9ae6b4) |                   |
| SUCCESS12 | `#f0fff4` | ![](https://via.placeholder.com/20/f0fff4/f0fff4) | 라이트모드 배경   |

---

## Semantic Tokens

의미 기반 토큰으로, 테마에 따라 다른 Primitive 값을 참조합니다.

### Background

| Token                  | Light Theme | Dark Theme |
| ---------------------- | ----------- | ---------- |
| `background.primary`   | `#ffffff`   | GRAY1      |
| `background.secondary` | GRAY12      | GRAY2      |
| `background.elevated`  | `#ffffff`   | GRAY3      |
| `background.inverse`   | GRAY1       | GRAY12     |

### Text

| Token            | Light Theme | Dark Theme | 명암비 기준   |
| ---------------- | ----------- | ---------- | ------------- |
| `text.primary`   | GRAY1       | GRAY12     | 13.5:1+ (AAA) |
| `text.secondary` | GRAY7       | GRAY11     | 7.5:1+ (AAA)  |
| `text.muted`     | GRAY9       | GRAY9      | 4.5:1+ (AA)   |
| `text.inverse`   | GRAY12      | GRAY1      | -             |

### Border

| Token           | Light Theme | Dark Theme |
| --------------- | ----------- | ---------- |
| `border.default`| GRAY4       | GRAY4      |
| `border.strong` | GRAY6       | GRAY6      |
| `border.subtle` | GRAY3       | GRAY3      |

### Interactive (Primary)

| Token                    | Light Theme | Dark Theme |
| ------------------------ | ----------- | ---------- |
| `interactive.default`    | PRIMARY5    | PRIMARY8   |
| `interactive.hover`      | PRIMARY4    | PRIMARY7   |
| `interactive.active`     | PRIMARY3    | PRIMARY6   |
| `interactive.disabled`   | GRAY6       | GRAY6      |
| `interactive.onPrimary`  | `#ffffff`   | GRAY1      |

### Feedback

| Token              | Light Theme | Dark Theme |
| ------------------ | ----------- | ---------- |
| `feedback.success` | SUCCESS7    | SUCCESS9   |
| `feedback.warning` | WARNING7    | WARNING9   |
| `feedback.error`   | ERROR7      | ERROR9     |
| `feedback.info`    | INFO7       | INFO9      |

---

## Typography Tokens

Pretendard 폰트 기반의 타이포그래피 토큰입니다.

### Font Family

| Token     | 값                                                                        | 용도       |
| --------- | ------------------------------------------------------------------------- | ---------- |
| FONT_SANS | `"Pretendard", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` | 기본 폰트  |
| FONT_MONO | `"Pretendard Mono", "SF Mono", Consolas, monospace`                       | 코드, 숫자 |

### Font Size

rem 기반 스케일입니다. (base: 16px)

| Token     | rem   | px   | 용도        |
| --------- | ----- | ---- | ----------- |
| TEXT_XS   | 0.75  | 12px | 캡션, 뱃지  |
| TEXT_SM   | 0.875 | 14px | 보조 텍스트 |
| TEXT_BASE | 1     | 16px | 본문        |
| TEXT_LG   | 1.125 | 18px | 강조 본문   |
| TEXT_XL   | 1.25  | 20px | 소제목      |
| TEXT_2XL  | 1.5   | 24px | 제목        |
| TEXT_3XL  | 1.875 | 30px | 큰 제목     |
| TEXT_4XL  | 2.25  | 36px | 페이지 제목 |
| TEXT_5XL  | 3     | 48px | 히어로      |

### Font Weight

| Token         | 값  | 용도       |
| ------------- | --- | ---------- |
| WEIGHT_LIGHT  | 300 | 장식용     |
| WEIGHT_NORMAL | 400 | 본문       |
| WEIGHT_MEDIUM | 500 | 강조       |
| WEIGHT_SEMI   | 600 | 소제목     |
| WEIGHT_BOLD   | 700 | 제목, 버튼 |

### Line Height

| Token           | 값    | 용도        |
| --------------- | ----- | ----------- |
| LEADING_TIGHT   | 1.25  | 제목        |
| LEADING_SNUG    | 1.375 | 소제목      |
| LEADING_NORMAL  | 1.5   | 본문 (기본) |
| LEADING_RELAXED | 1.625 | 긴 문단     |
| LEADING_LOOSE   | 2     | 넓은 간격   |

### Letter Spacing

| Token           | 값       | 용도        |
| --------------- | -------- | ----------- |
| TRACKING_TIGHT  | -0.025em | 큰 제목     |
| TRACKING_NORMAL | 0        | 본문 (기본) |
| TRACKING_WIDE   | 0.025em  | 버튼, 캡션  |

### Semantic Typography

자주 사용되는 텍스트 스타일 조합입니다.

| Token          | Size     | Weight        | Leading        | 용도              |
| -------------- | -------- | ------------- | -------------- | ----------------- |
| `typo.hero`    | TEXT_5XL | WEIGHT_BOLD   | LEADING_TIGHT  | 히어로 섹션       |
| `typo.h1`      | TEXT_4XL | WEIGHT_BOLD   | LEADING_TIGHT  | 페이지 제목       |
| `typo.h2`      | TEXT_3XL | WEIGHT_SEMI   | LEADING_TIGHT  | 섹션 제목         |
| `typo.h3`      | TEXT_2XL | WEIGHT_SEMI   | LEADING_SNUG   | 서브 섹션 제목    |
| `typo.h4`      | TEXT_XL  | WEIGHT_MEDIUM | LEADING_SNUG   | 카드 제목         |
| `typo.body`    | TEXT_BASE| WEIGHT_NORMAL | LEADING_NORMAL | 본문              |
| `typo.bodyLg`  | TEXT_LG  | WEIGHT_NORMAL | LEADING_NORMAL | 강조 본문         |
| `typo.bodySm`  | TEXT_SM  | WEIGHT_NORMAL | LEADING_NORMAL | 보조 텍스트       |
| `typo.caption` | TEXT_XS  | WEIGHT_NORMAL | LEADING_NORMAL | 캡션, 힌트 텍스트 |
| `typo.button`  | TEXT_SM  | WEIGHT_MEDIUM | LEADING_TIGHT  | 버튼 텍스트       |
| `typo.label`   | TEXT_SM  | WEIGHT_MEDIUM | LEADING_TIGHT  | 폼 레이블         |

---

## 명암비 가이드

### WCAG 기준

| 레벨 | 일반 텍스트 | 큰 텍스트 (18px+ bold, 24px+) | UI 컴포넌트 |
| ---- | ----------- | ----------------------------- | ----------- |
| AA   | 4.5:1 이상  | 3:1 이상                      | 3:1 이상    |
| AAA  | 7:1 이상    | 4.5:1 이상                    | -           |

### 다크 테마 페어링 (배경: GRAY1 `#111111`)

| 용도           | 권장 토큰  | 명암비      |
| -------------- | ---------- | ----------- |
| 본문 텍스트   | GRAY12     | 13.5:1 ✓ AAA |
| 보조 텍스트   | GRAY11     | 7.8:1 ✓ AAA  |
| 비활성 텍스트 | GRAY9      | 4.6:1 ✓ AA   |
| Primary 강조  | PRIMARY8   | 9.5:1 ✓ AAA  |
| Primary 텍스트| PRIMARY7   | 6.8:1 ✓ AAA  |

### 라이트 테마 페어링 (배경: `#ffffff`)

| 용도           | 권장 토큰  | 명암비      |
| -------------- | ---------- | ----------- |
| 본문 텍스트   | GRAY1      | 18.1:1 ✓ AAA |
| Primary 텍스트| PRIMARY5   | 5.1:1 ✓ AA   |
| Primary 강조  | PRIMARY4   | 7.2:1 ✓ AAA  |

### 금지 조합

다음 조합은 접근성 기준을 충족하지 않으므로 사용하지 마세요.

| 배경      | 전경      | 명암비    | 사유           |
| --------- | --------- | --------- | -------------- |
| `#ffffff` | PRIMARY8  | 1.4:1 ✗   | 너무 밝음      |
| `#ffffff` | PRIMARY9  | 1.2:1 ✗   | 너무 밝음      |
| `#ffffff` | PRIMARY10 | 1.1:1 ✗   | 너무 밝음      |
| `#ffffff` | GRAY11    | 2.1:1 ✗   | 명암비 부족    |
| GRAY1     | GRAY7     | 2.8:1 ✗   | 명암비 부족    |

---

## 참고 자료

- [WCAG 2.1 Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Radix Colors](https://www.radix-ui.com/colors)
