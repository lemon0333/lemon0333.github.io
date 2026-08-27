// 사이트 콘텐츠는 /content/*.json 에서 옵니다 (Decap CMS 로 편집 → 컴포넌트 하드코딩 없음).
import profileJson from "../../content/profile.json";
import aboutJson from "../../content/about.json";
import projectsJson from "../../content/projects.json";
import blogJson from "../../content/blog.json";

export const profile = profileJson;

export type SkillGroup = { group: string; items: string[] };
export const about = aboutJson as {
  headline: string;
  paragraphs: string[];
  skills: SkillGroup[];
  certs: string[];
  awards: string[];
  activities: string[];
  education: string[];
};

export type Project = {
  title: string;
  tag: string;
  result: string;
  resultSub: string;
  problem: string;
  approach: string;
  outcome: string;
  stack: string[];
  slides?: string[];
};
export const projects: Project[] = projectsJson.items as Project[];

export type BlogPost = {
  title: string;
  category: string;
  date: string;
  summary: string;
  body: string;
};
export const blogPosts: BlogPost[] = blogJson.items as BlogPost[];

// --- 구조적 상수 (콘텐츠 아님) ---
export type NavItem = { label: string; href?: string; children?: { label: string; href: string }[] };
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

export const blogCategories = [
  { id: "dev", label: "dev", desc: "개발 기록과 트러블슈팅" },
  { id: "cs", label: "cs", desc: "컴퓨터 사이언스 기초" },
  { id: "java", label: "java", desc: "자바 · 스프링" },
  { id: "cloud", label: "cloud", desc: "AWS · 인프라 · 클라우드" },
  { id: "do", label: "do", desc: "회고와 기록" },
];
