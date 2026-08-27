import Link from "next/link";
import { about, profile } from "../../data/site";

export const metadata = { title: "About · 손현빈" };

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
  .sub h1{ font-size:clamp(26px,4.5vw,36px); font-weight:800; letter-spacing:-.02em; margin:10px 0 18px; text-wrap:balance; }
  .sub .para{ color:var(--soft); font-size:16px; line-height:1.7; margin-bottom:12px; max-width:62ch; }
  .sub .panel{ background:var(--surface); border:1px solid var(--line); border-radius:16px; padding:22px 24px; box-shadow:0 6px 22px rgba(15,44,66,.05); margin-top:18px; }
  .sub .panel h2{ font-size:14px; font-weight:800; margin:0 0 14px; letter-spacing:-.01em; }
  .sub .grp{ margin-bottom:14px; }
  .sub .grp:last-child{ margin-bottom:0; }
  .sub .gl{ font-family:ui-monospace,Menlo,monospace; font-size:10.5px; letter-spacing:.1em; text-transform:uppercase; color:var(--muted); display:block; margin-bottom:7px; }
  .sub .tags{ display:flex; flex-wrap:wrap; gap:7px; }
  .sub .chip{ font-family:ui-monospace,Menlo,monospace; font-size:11.5px; color:var(--soft); background:#f2f7fa; border:1px solid var(--line); border-radius:7px; padding:3px 9px; }
  .sub .li{ padding:8px 0; border-top:1px solid var(--line); font-size:14.5px; color:var(--soft); }
  .sub .li:first-child{ border-top:0; }
  .sub .grid2{ display:grid; grid-template-columns:1fr 1fr; gap:16px; }
  @media (max-width:640px){ .sub .grid2{ grid-template-columns:1fr; } }
`;

export default function About() {
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
        <div className="lead">About</div>
        <h1>{about.headline}</h1>
        {about.paragraphs.map((p, i) => <p className="para" key={i}>{p}</p>)}

        <div className="panel">
          <h2>Skills</h2>
          {about.skills.map((sg) => (
            <div className="grp" key={sg.group}>
              <span className="gl">{sg.group}</span>
              <div className="tags">{sg.items.map((s) => <span className="chip" key={s}>{s}</span>)}</div>
            </div>
          ))}
        </div>

        <div className="grid2">
          <div className="panel">
            <h2>자격증 · 수상</h2>
            {[...about.certs, ...about.awards].map((x) => <div className="li" key={x}>{x}</div>)}
          </div>
          <div className="panel">
            <h2>활동 · 학력</h2>
            {[...about.activities, ...about.education].map((x) => <div className="li" key={x}>{x}</div>)}
          </div>
        </div>
      </div>
    </div>
  );
}
