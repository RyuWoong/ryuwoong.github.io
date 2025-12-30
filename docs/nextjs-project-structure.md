# Next.js 프로젝트 구조 설계

## 개요

FSD(Feature-Sliced Design)의 핵심 철학인 "기능 단위 응집도"를 참고하되, 과도한 레이어 분리를 피한 실용적인 구조입니다. Next.js App Router 기반으로 설계되었습니다.

---

## 전체 구조

```
├── app/                        # Next.js App Router (라우팅)
├── components/                 # 공용 컴포넌트
├── models/                     # 도메인 모델 (타입, DTO, 변환)
├── services/                   # API 레이어 (호출, 쿼리)
├── stores/                     # 클라이언트 상태 (Zustand)
├── hooks/                      # 공용 훅
├── utils/                      # 유틸리티 함수
├── config/                     # 환경 설정
├── constants/                  # 상수
├── styles/                     # 전역 스타일, 토큰
├── public/                     # 정적 에셋
└── locales/                    # 다국어
```

---

## 상세 구조

### app/

Next.js App Router 기반 라우팅입니다. 페이지와 레이아웃만 배치하고, 비즈니스 로직은 외부로 분리합니다.

```
app/
├── layout.tsx                  # 루트 레이아웃
├── page.tsx                    # 홈페이지
├── globals.css                 # 전역 스타일
├── (auth)/                     # 인증 관련 그룹
│   ├── login/
│   │   └── page.tsx
│   └── register/
│       └── page.tsx
├── (main)/                     # 메인 레이아웃 그룹
│   ├── layout.tsx
│   ├── dashboard/
│   │   ├── page.tsx
│   │   └── components/         # 페이지 전용 컴포넌트
│   └── profile/
│       ├── page.tsx
│       ├── page.module.css     # 페이지 전용 스타일
│       └── components/
└── api/                        # Route Handlers
    └── [domain]/
        └── route.ts
```

**App Router 규칙:**
- `page.tsx`: 라우트의 UI
- `layout.tsx`: 공유 레이아웃
- `loading.tsx`: 로딩 UI
- `error.tsx`: 에러 UI
- `not-found.tsx`: 404 UI

### components/

공용 컴포넌트를 관리합니다.

```
components/
├── common/                     # 범용 UI (Button, Input, Modal 등)
│   ├── Button/
│   │   ├── index.tsx
│   │   ├── Button.module.css
│   │   └── Button.test.tsx
│   └── Input/
├── layout/                     # 레이아웃 컴포넌트 (Header, Footer 등)
└── [domain]/                   # 도메인별 공용 컴포넌트
    └── [ComponentName]/
        ├── index.tsx
        └── [ComponentName].module.css
```

### models/

도메인 모델의 형태를 정의합니다. "무엇"을 다루는가에 집중합니다.

```
models/
└── [domain]/
    ├── types.ts                # 도메인 타입 (앱 내부용)
    ├── dto.ts                  # API 요청/응답 DTO
    └── mapper.ts               # DTO ↔ Entity 변환
```

### services/

데이터를 가져오는 방법을 정의합니다. "어떻게" 가져오는가에 집중합니다.

```
services/
├── api-client.ts               # fetch 래퍼 (또는 axios)
└── [domain]/
    ├── api.ts                  # 순수 API 함수
    ├── queries.ts              # TanStack Query 훅 (클라이언트)
    └── actions.ts              # Server Actions (서버)
```

**models vs services 역할 분리:**

| models | services |
|--------|----------|
| 데이터의 "형태" 정의 | 데이터를 "가져오는 방법" |
| 순수 타입 정의 | 비동기 로직, 사이드 이펙트 |
| 변경 빈도 낮음 | API 스펙 변경 시 수정 |

**의존성 흐름:**

```
services/queries.ts (또는 actions.ts)
    ↓ import
services/api.ts
    ↓ import
models/dto.ts, models/mapper.ts
    ↓ import
models/types.ts
```

### stores/

Zustand를 사용한 클라이언트 상태를 관리합니다.

```
stores/
├── common/                     # 공용 UI 상태 (toast, modal, theme 등)
│   ├── useThemeStore.ts
│   └── useToastStore.ts
└── [domain]/                   # 도메인별 클라이언트 상태
```

### hooks/

공용 훅과 도메인별 조합 훅을 관리합니다.

```
hooks/
├── common/                     # 공용 유틸 훅
│   ├── useDebounce.ts
│   ├── useLocalStorage.ts
│   └── useMediaQuery.ts
└── [domain]/                   # 도메인별 조합 훅
```

### utils/

유틸리티 함수를 관리합니다.

```
utils/
├── common/                     # 순수 유틸 함수
│   ├── format.ts               # 포맷팅 (날짜, 숫자 등)
│   ├── validation.ts           # 유효성 검사
│   └── cn.ts                   # className 병합
└── server/                     # 서버 전용 유틸
    └── auth.ts                 # 인증 관련
```

### config/

환경 설정과 앱 설정을 관리합니다.

```
config/
├── env.ts                      # 환경변수 래핑 + 타입 안전성
├── app.ts                      # 앱 설정 (타임아웃, 페이지네이션 등)
└── site.ts                     # 사이트 메타데이터
```

### constants/

변하지 않는 상수값을 관리합니다.

```
constants/
├── common/
│   ├── regex.ts                # 정규식 패턴
│   ├── keys.ts                 # storage key, query key prefix 등
│   └── routes.ts               # 라우트 경로 상수
└── [domain]/
    └── user.ts                 # 도메인별 상수
```

### styles/

전역 스타일과 디자인 토큰을 관리합니다.

```
styles/
├── tokens/
│   ├── colors.css              # 색상 토큰
│   └── typography.css          # 타이포그래피 토큰
└── globals.css                 # 전역 스타일 (app/에서 import)
```

### locales/

다국어 지원을 위한 번역 파일을 관리합니다.

```
locales/
├── index.ts                    # i18n 설정 + 초기화
├── types.ts                    # 번역 키 타입 정의
├── ko/
│   ├── index.ts
│   ├── common.json
│   └── [domain].json
└── en/
    ├── index.ts
    ├── common.json
    └── [domain].json
```

---

## 핵심 설계 원칙

### 1. 서버 컴포넌트 vs 클라이언트 컴포넌트

| Server Component (기본) | Client Component ("use client") |
|------------------------|--------------------------------|
| 데이터 페칭 | 이벤트 핸들러 (onClick 등) |
| 민감한 정보 접근 | useState, useEffect 사용 |
| 큰 의존성 서버에 유지 | 브라우저 API 사용 |
| SEO에 유리 | 인터랙티브 UI |

**규칙:** 가능한 Server Component를 사용하고, 필요한 부분만 Client Component로 분리합니다.

### 2. 사용처 근접 배치

- 특정 페이지에서만 사용하는 요소는 해당 폴더 내에 배치
- `app/dashboard/components/` → 대시보드 전용 컴포넌트

### 3. 승격 규칙

- **3곳 이상**에서 사용되면 공용 레벨로 승격
- 페이지 전용 → 도메인 공용 → 전역 공용 순으로 승격

### 4. 서버 상태 vs 클라이언트 상태 분리

| 서버 상태 | 클라이언트 상태 |
|----------|----------------|
| API에서 받아온 데이터 | UI 상태 (모달 열림, 탭 선택) |
| 다른 사용자와 공유됨 | 이 세션에서만 유효 |
| TanStack Query 또는 Server Component | useState, Zustand |

**핵심 규칙:** 서버에서 온 데이터는 절대 클라이언트 스토어에 복사하지 않습니다.

### 5. Data Fetching 전략

| 방식 | 사용 시점 |
|------|----------|
| Server Component + fetch | 정적/동적 페이지 렌더링 |
| Server Actions | 폼 제출, 데이터 뮤테이션 |
| TanStack Query | 클라이언트 캐싱, 실시간 업데이트 |
| Route Handlers | 외부 API 프록시, Webhook |

### 6. config vs constants 구분

| config | constants |
|--------|-----------|
| 환경/배포에 따라 달라질 수 있음 | 절대 안 바뀜 |
| 런타임에 참조 | 코드에 고정 |
| `env.ts`, `app.ts` | 정규식, enum, 고정 키 |

### 7. DTO vs 도메인 타입 분리

| DTO | 도메인 타입 |
|-----|------------|
| API 스펙에 종속 | 앱 로직에 최적화 |
| snake_case 가능 | camelCase 통일 |
| string 날짜 | Date 객체 |
| API 바뀌면 여기만 수정 | 앱 전체에서 안정적 사용 |

**핵심 규칙:** API 응답을 그대로 사용하지 않고, mapper를 통해 도메인 타입으로 변환 후 사용합니다.

---

## 코드 예시

### API 클라이언트

#### services/api-client.ts

```typescript
import { env } from '@/config/env';
import { appConfig } from '@/config/app';

export class ApiError extends Error {
  constructor(
    public code: string,
    public message: string,
    public status?: number,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

interface RequestOptions extends RequestInit {
  params?: Record<string, string>;
}

async function request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  const { params, ...init } = options;

  const url = new URL(endpoint, env.apiBaseUrl);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
  }

  const response = await fetch(url.toString(), {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...init.headers,
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new ApiError(
      error.code ?? 'UNKNOWN_ERROR',
      error.message ?? '알 수 없는 오류가 발생했습니다',
      response.status,
    );
  }

  return response.json();
}

export const apiClient = {
  get: <T>(endpoint: string, options?: RequestOptions) =>
    request<T>(endpoint, { ...options, method: 'GET' }),

  post: <T>(endpoint: string, data?: unknown, options?: RequestOptions) =>
    request<T>(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data),
    }),

  patch: <T>(endpoint: string, data?: unknown, options?: RequestOptions) =>
    request<T>(endpoint, {
      ...options,
      method: 'PATCH',
      body: JSON.stringify(data),
    }),

  delete: <T>(endpoint: string, options?: RequestOptions) =>
    request<T>(endpoint, { ...options, method: 'DELETE' }),
};
```

---

### DTO와 도메인 타입

#### models/user/dto.ts

```typescript
// 응답 DTO - API가 주는 형태 그대로
export interface UserResponseDto {
  user_id: string;
  user_name: string;
  created_at: string;
}

// 요청 DTO
export interface CreateUserRequestDto {
  user_name: string;
  email: string;
}
```

#### models/user/types.ts

```typescript
// 앱 내부에서 사용하는 도메인 타입
export interface User {
  id: string;
  name: string;
  createdAt: Date;
}
```

#### models/user/mapper.ts

```typescript
import { UserResponseDto } from './dto';
import { User } from './types';

export const userMapper = {
  toEntity: (dto: UserResponseDto): User => ({
    id: dto.user_id,
    name: dto.user_name,
    createdAt: new Date(dto.created_at),
  }),

  toEntityList: (dtos: UserResponseDto[]): User[] =>
    dtos.map(userMapper.toEntity),
};
```

---

### API 레이어

#### services/user/api.ts

```typescript
import { apiClient } from '@/services/api-client';
import { UserResponseDto, CreateUserRequestDto } from '@/models/user/dto';

export const userApi = {
  getById: (id: string) =>
    apiClient.get<UserResponseDto>(`/users/${id}`),

  getList: () =>
    apiClient.get<UserResponseDto[]>('/users'),

  create: (data: CreateUserRequestDto) =>
    apiClient.post<UserResponseDto>('/users', data),
};
```

#### services/user/queries.ts (클라이언트)

```typescript
import { queryOptions } from '@tanstack/react-query';
import { userApi } from './api';
import { userMapper } from '@/models/user/mapper';

export const userQueries = {
  detail: (id: string) => queryOptions({
    queryKey: ['user', id],
    queryFn: async () => {
      const dto = await userApi.getById(id);
      return userMapper.toEntity(dto);
    },
  }),

  list: () => queryOptions({
    queryKey: ['users'],
    queryFn: async () => {
      const dtos = await userApi.getList();
      return userMapper.toEntityList(dtos);
    },
  }),
};
```

#### services/user/actions.ts (서버)

```typescript
'use server';

import { revalidatePath } from 'next/cache';
import { userApi } from './api';
import { CreateUserRequestDto } from '@/models/user/dto';

export async function createUser(data: CreateUserRequestDto) {
  const result = await userApi.create(data);
  revalidatePath('/users');
  return result;
}
```

---

### 환경 설정

#### config/env.ts

```typescript
const getEnv = (key: string, required = true): string => {
  const value = process.env[key];
  if (required && !value) {
    throw new Error(`Missing env: ${key}`);
  }
  return value ?? '';
};

export const env = {
  apiBaseUrl: getEnv('NEXT_PUBLIC_API_BASE_URL'),
  appEnv: getEnv('NEXT_PUBLIC_APP_ENV') as 'dev' | 'staging' | 'prod',
  // 서버 전용 (NEXT_PUBLIC_ 없음)
  databaseUrl: getEnv('DATABASE_URL', false),
} as const;
```

#### config/site.ts

```typescript
export const siteConfig = {
  name: 'My App',
  description: 'My awesome Next.js app',
  url: 'https://example.com',
  ogImage: 'https://example.com/og.png',
  links: {
    github: 'https://github.com/username',
  },
} as const;
```

---

### 클라이언트 상태

#### stores/common/useThemeStore.ts

```typescript
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark';

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggle: () => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: 'dark',
      setTheme: (theme) => set({ theme }),
      toggle: () => set((state) => ({
        theme: state.theme === 'dark' ? 'light' : 'dark'
      })),
    }),
    { name: 'theme-storage' }
  )
);
```

---

### 커스텀 훅

#### hooks/user/useUser.ts

```typescript
'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { userQueries } from '@/services/user/queries';
import { userApi } from '@/services/user/api';

export const useUser = (id: string) => {
  const queryClient = useQueryClient();
  const { data: user, isLoading } = useQuery(userQueries.detail(id));
  const [isEditing, setIsEditing] = useState(false);

  const { mutate: updateUser } = useMutation({
    mutationFn: (data) => userApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user', id] });
      setIsEditing(false);
    },
  });

  return {
    user,
    isLoading,
    isEditing,
    startEdit: () => setIsEditing(true),
    cancelEdit: () => setIsEditing(false),
    save: updateUser,
  };
};
```

---

## 기술 스택

- **프레임워크:** Next.js 14+ (App Router)
- **데이터 페칭:** Server Components + TanStack Query
- **HTTP 클라이언트:** fetch (또는 axios)
- **클라이언트 상태:** Zustand
- **스타일링:** CSS Modules + CSS Variables (Design Tokens)
- **다국어:** next-intl 또는 타입 안전한 i18n

---

## 향후 논의 사항

- [ ] 인증/인가 구조 (NextAuth.js)
- [ ] 테스트 전략 (Unit, Integration, E2E)
- [ ] CI/CD 설정
- [ ] 모니터링/에러 트래킹 (Sentry)
- [ ] 코드 컨벤션 문서화
