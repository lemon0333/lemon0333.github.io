import Link from "next/link";
import { blogCategories, profile } from "../../data/site";

export const metadata = { title: "Blog · 손현빈" };

const CSS = `
  .sub{ --bg:#eef5f9; --surface:#fff; --ink:#0f2c42; --soft:#3d5b70; --muted:#7793a5; --line:#dce8ef; --accent:#12658f;
    --sans:"Apple SD Gothic Neo","Pretendard",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;
    min-height:100vh; background:linear-gradient(180deg,#dcecf4 0%, var(--bg) 240px); color:var(--ink); font-family:var(--sans); }
  .sub *{ box-sizing:border-box; }
  .sub .bar{ position:sticky; top:0; z-index:5; display:flex; align-items:center; justify-content:space-between; padding:16px 24px; backdrop-filter:blur(8px); background:rgba(238,245,249,.7); border-bottom:1px solid var(--line); }
  .sub .home{ display:flex; align-items:center; gap:8px; text-decoration:none; color:var(--ink); font-weight:800; }
  .sub .home .lm{ font-size:20px; }
  .sub .bar nav{ display:flex; gap:20px; }
  .sub .bar nav a{ color:var(--soft); text-decoration:none; font-size:14px; font-weight:600; }
  .sub .bar nav a:hover{ color:var(--accent); }
  .sub .wrap{ max-width:760px; margin:0 auto; padding:44px 24px 90px; }
  .sub .lead{ font-size:12px; letter-spacing:.16em; text-transform:uppercase; color:var(--accent); font-weight:700; font-family:ui-monospace,Menlo,monospace; }
  .sub h1{ font-size:clamp(26px,4.5vw,36px); font-weight:800; letter-spacing:-.02em; margin:10px 0 28px; }
  .sub .cat{ scroll-margin-top:80px; background:var(--surface); border:1px solid var(--line); border-radius:14px; padding:20px 22px; margin-bottom:14px; box-shadow:0 6px 22px rgba(15,44,66,.05); display:flex; align-items:center; justify-content:space-between; gap:16px; }
  .sub .cat h2{ font-size:18px; font-weight:800; margin:0 0 4px; text-transform:lowercase; }
  .sub .cat p{ margin:0; color:var(--muted); font-size:14px; }
  .sub .soon{ font-family:ui-monospace,Menlo,monospace; font-size:11px; letter-spacing:.08em; text-transform:uppercase; color:var(--accent); border:1px solid var(--line); border-radius:999px; padding:5px 12px; white-space:nowrap; }
`;

export default function Blog() {
  return (
    <div className="sub">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="bar">
        <Link href="/" className="home"><span className="lm">🍋</span> {profile.name}</Link>
        <nav>
          <Link href="/about">about</Link>
          <Link href="/portfolio">portfolio</Link>
          <Link href="/blog">blog</Link>
        </nav>
      </div>
      <div className="wrap">
        <div className="lead">Blog</div>
        <h1>기록</h1>
        {blogCategories.map((c) => (
          <section className="cat" id={c.id} key={c.id}>
            <div>
              <h2>{c.label}</h2>
              <p>{c.desc}</p>
            </div>
            <span className="soon">준비 중</span>
          </section>
        ))}
      </div>
    </div>
  );
}
