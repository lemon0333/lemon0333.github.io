// 사이트 콘텐츠는 이 파일 한 곳에서 관리합니다 (컴포넌트에 하드코딩 금지).
// 추후 admin/CMS 로 이 데이터를 코드 수정 없이 갱신하도록 확장 예정.

export const profile = {
  name: "Son Hyunbin",
  kr: "손현빈",
  tagline: "Backend · AI · Cloud Engineer",
  email: "andyhyunbin@gmail.com",
  github: "https://github.com/lemon0333",
  linkedin: "https://linkedin.com/in/",
};

export type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

export const nav: NavItem[] = [
  { label: "about", href: "/about" },
  { label: "portfolio", href: "/portfolio" },
  {
    label: "blog",
    children: [
      { label: "dev", href: "/blog#dev" },
      { label: "cs", href: "/blog#cs" },
      { label: "java", href: "/blog#java" },
      { label: "cloud", href: "/blog#cloud" },
      { label: "do", href: "/blog#do" },
    ],
  },
];

export type Project = {
  title: string;
  tag: string;
  result: string;
  resultSub: string;
  problem: string;
  approach: string;
  outcome: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    title: "AI 견적서 생성 에이전트",
    tag: "AI · Backend",
    result: "10→1분",
    resultSub: "per estimate",
    problem:
      "사고 견적서를 만들려면 AOS·사내 API·정비소 연락을 오가며 차대번호·보험사·부품을 수기 입력해 건당 10분이 걸렸다.",
    approach:
      "Claude API와 ReAct 기법으로 판단과 실행을 분리했다. AI는 다음 작업만 결정하고 실제 조회는 Python이 수행한 뒤 결과를 되돌려주는 루프로 설계했다.",
    outcome: "차량번호만 입력하면 견적서가 자동 작성되고 사람은 검수만 하는 흐름 완성. 작성 시간 10분 → 1분.",
    stack: ["Python", "FastAPI", "Claude API", "ReAct", "SSE"],
  },
  {
    title: "eficlens 이미지 처리 병렬화",
    tag: "Performance",
    result: "84% ↓",
    resultSub: "100s → 16s",
    problem: "카메라 10대를 순차 처리하며 베스트샷 단계에 약 100초가 소요됐다.",
    approach:
      "병목이 연산이 아니라 API 응답을 기다리는 I/O 대기임을 진단, ThreadPoolExecutor로 병렬화하고 temperature=0으로 일관성을 확보했다.",
    outcome: "처리 시간 100초 → 16초, 84% 단축 (10대 동시 시작 후 16초 내 완료 실측).",
    stack: ["Python", "ThreadPoolExecutor", "Claude API"],
  },
  {
    title: "Text2SQL 자연어 데이터 조회",
    tag: "AI · Data",
    result: "셀프 조회",
    resultSub: "+ API cost ↓",
    problem:
      "대시보드에 없는 쿼리를 매번 개발자에게 요청했고, 표현이 조금만 달라도 엉뚱한 테이블을 참조했다.",
    approach:
      "PGVector 기반 kNN 벡터 검색으로 의미가 비슷하면 올바른 테이블을 찾게 하고, 쿼리 캐싱으로 API 호출을 줄였다. 메타데이터·샘플 쿼리로 정확도를 높였다.",
    outcome: "비개발자가 자연어로 데이터를 직접 조회, 반복 질문의 AI 비용 절감.",
    stack: ["Python", "PGVector", "Claude API", "LangSmith"],
  },
  {
    title: "운영 DB 보안 접속 인프라",
    tag: "Infra · Cloud",
    result: "리스크 제거",
    resultSub: "IaC 배포",
    problem:
      "private subnet의 운영 RDS 접속이 번거롭고, 웹 접근 구조는 로그인만 뚫리면 DB를 삭제할 수 있는 보안 리스크가 있었다.",
    approach:
      "AWS SSM 포트포워딩으로 원클릭 보안 터널을 만들고, Metabase를 EC2에 올려 Terraform으로 배포 자동화했다. 읽기 전용 계정을 분리해 조회 권한만 부여.",
    outcome: "안전한 접근 경로 2종 구축, 운영 DB 직접 노출 리스크 제거.",
    stack: ["AWS SSM", "Terraform", "EC2", "Metabase"],
  },
  {
    title: "AWS CDK CLI 신뢰성 개선 기여",
    tag: "Open Source · OSSCA",
    result: "5 PRs",
    resultSub: "merged to AWS",
    problem:
      "배포 검증이 일찍 실패하면 CloudFormation 변경 계획이 정리되지 않아, 새 스택이 검토 중 상태에 갇히는 문제가 있었다.",
    approach:
      "성공·실패 여부와 무관하게 뒤처리가 반드시 수행되도록 흐름을 바꾸되 원래 오류는 보존했고, 조기 실패를 재현하는 회귀 테스트를 추가했다.",
    outcome: "배포 실패에도 스택이 갇히지 않게 되어 AWS 공식 저장소에 5건 머지.",
    stack: ["TypeScript", "Go", "Jest", "GitHub Actions"],
  },
  {
    title: "Yorkie 협업 엔진 수렴성 검증 기여",
    tag: "Open Source · CRDT",
    result: "10 PRs",
    resultSub: "merged to yorkie",
    problem: "동시 편집이 결국 같은 상태로 수렴하는지를, 손으로 짠 테스트가 놓치는 경우가 있었다.",
    approach:
      "무작위 연산을 대량으로 던지는 property-based 테스트를 만들어 '이동' 연산의 수렴 불일치를 발견, 원인을 좁혀 알려진 한계임을 규명했다.",
    outcome: "테스트 머지 + 최소 재현 예시로 이슈 리포트.",
    stack: ["Property-based Testing", "CRDT"],
  },
];

export const about = {
  headline: "AI를 안정적인 서비스로 구현하는 백엔드·클라우드 개발자",
  paragraphs: [
    "성능 문제는 증상이 아니라 병목의 근본 원인에서 진단하고, AI에게는 판단을 맡기되 실행은 시스템이 통제하도록 경계를 설계합니다.",
    "잘 되는 경우가 아니라 실패했을 때 무엇이 남는지까지 책임지는 개발을 지향합니다.",
  ],
  skills: {
    Language: ["Python", "Java", "TypeScript", "SQL"],
    "Backend · AI": ["FastAPI", "Spring", "Claude API", "MCP", "ReAct", "PGVector"],
    "Cloud · Infra": ["AWS (EC2·RDS·SSM)", "Terraform", "Docker", "PostgreSQL", "Git"],
  },
  certs: ["AWS SAA", "AWS AI Practitioner", "SQLD", "TOPCIT Lv.3"],
  awards: ["AI NoCode MCP 해커톤 시즌2 · 대상 (2025.11)", "UMC 7기 데모데이 · 우수상 (2025.02)"],
  activities: ["AWS Cloud Club (ACC) 4기 회장", "OSSCA · Yorkie 멘티", "GDGoC Core Member", "UMC 7기 Backend"],
  education: [
    "경희대학교 컴퓨터공학과 · 응용수학과 (2022–2026)",
    "Software Engineer Intern · 에픽카 (2026.03–06)",
  ],
};

export const blogCategories = [
  { id: "dev", label: "dev", desc: "개발 기록과 트러블슈팅" },
  { id: "cs", label: "cs", desc: "컴퓨터 사이언스 기초" },
  { id: "java", label: "java", desc: "자바 · 스프링" },
  { id: "cloud", label: "cloud", desc: "AWS · 인프라 · 클라우드" },
  { id: "do", label: "do", desc: "회고와 기록" },
];
