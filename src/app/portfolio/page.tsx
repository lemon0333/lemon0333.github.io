import Link from "next/link";
import { projects, profile } from "../../data/site";

export const metadata = { title: "Portfolio · 손현빈" };

const CSS = `
  .sub{ --bg:#eef5f9; --surface:#fff; --ink:#0f2c42; --soft:#3d5b70; --muted:#7793a5; --line:#dce8ef; --accent:#12658f;
    --sans:"Apple SD Gothic Neo","Pretendard",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;
    min-height:100vh; background:linear-gradient(180deg,#dcecf4 0%, var(--bg) 240px); color:var(--ink); font-family:var(--sans); }
  .sub *{ box-sizing:border-box; }
  .sub .bar{ position:sticky; top:0; z-index:5; display:flex; align-items:center; justify-content:space-between; padding:16px 24px; backdrop-filter:blur(8px); background:rgba(238,245,249,.7); border-bottom:1px solid var(--line); }
  .sub .home{ display:flex; align-items:center; gap:8px; text-decoration:none; color:var(--ink); font-weight:800; letter-spacing:-.01em; }
  .sub .home .lm{ font-size:20px; }
  .sub .bar nav{ display:flex; gap:20px; }
  .sub .bar nav a{ color:var(--soft); text-decoration:none; font-size:14px; font-weight:600; }
  .sub .bar nav a:hover{ color:var(--accent); }
  .sub .wrap{ max-width:860px; margin:0 auto; padding:44px 24px 90px; }
  .sub .lead{ font-size:12px; letter-spacing:.16em; text-transform:uppercase; color:var(--accent); font-weight:700; font-family:ui-monospace,Menlo,monospace; }
  .sub h1{ font-size:clamp(28px,5vw,40px); font-weight:800; letter-spacing:-.02em; margin:10px 0 6px; }
  .sub .sub-tag{ color:var(--muted); font-size:15px; margin-bottom:34px; }
  .sub .cards{ display:flex; flex-direction:column; gap:16px; }
  .sub .card{ background:var(--surface); border:1px solid var(--line); border-radius:16px; padding:24px; box-shadow:0 6px 22px rgba(15,44,66,.05); display:grid; grid-template-columns:1fr auto; gap:6px 22px; }
  .sub .tag{ font-family:ui-monospace,Menlo,monospace; font-size:11px; letter-spacing:.1em; text-transform:uppercase; color:var(--accent); }
  .sub .card h3{ font-size:20px; font-weight:800; letter-spacing:-.02em; margin:8px 0 0; }
  .sub .body{ grid-column:1; margin-top:14px; display:flex; flex-direction:column; gap:8px; }
  .sub .row{ display:grid; grid-template-columns:56px 1fr; gap:12px; }
  .sub .row .k{ font-family:ui-monospace,Menlo,monospace; font-size:11px; letter-spacing:.05em; text-transform:uppercase; color:var(--muted); padding-top:2px; }
  .sub .row p{ margin:0; font-size:14.5px; color:var(--soft); line-height:1.6; }
  .sub .stacks{ grid-column:1; display:flex; flex-wrap:wrap; gap:7px; margin-top:15px; }
  .sub .chip{ font-family:ui-monospace,Menlo,monospace; font-size:11.5px; color:var(--soft); background:#f2f7fa; border:1px solid var(--line); border-radius:7px; padding:3px 9px; }
  .sub .res{ grid-column:2; grid-row:1 / span 2; align-self:stretch; display:flex; flex-direction:column; justify-content:center; align-items:flex-end; text-align:right; min-width:110px; padding-left:20px; border-left:1px solid var(--line); }
  .sub .res .big{ font-size:26px; font-weight:800; letter-spacing:-.02em; color:var(--accent); line-height:1; }
  .sub .res .rs{ font-size:11px; color:var(--muted); margin-top:7px; font-family:ui-monospace,Menlo,monospace; }
  .sub .slides{ grid-column:1 / -1; display:grid; grid-template-columns:repeat(auto-fill,minmax(220px,1fr)); gap:10px; margin-top:16px; }
  .sub .slides img{ width:100%; border-radius:10px; border:1px solid var(--line); display:block; }
  @media (max-width:600px){ .sub .card{ grid-template-columns:1fr; } .sub .res{ grid-column:1; grid-row:auto; border-left:0; padding-left:0; align-items:flex-start; text-align:left; margin-top:14px; padding-top:14px; border-top:1px solid var(--line); flex-direction:row; gap:12px; align-items:baseline; } .sub .res .rs{ margin-top:0; } }
`;

export default function Portfolio() {
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
        <div className="lead">Selected Work</div>
        <h1>Portfolio</h1>
        <div className="sub-tag">정량 성과 중심의 프로젝트 모음입니다.</div>
        <div className="cards">
          {projects.map((p) => (
            <article className="card" key={p.title}>
              <div>
                <div className="tag">{p.tag}</div>
                <h3>{p.title}</h3>
              </div>
              <div className="res">
                <div className="big">{p.result}</div>
                <div className="rs">{p.resultSub}</div>
              </div>
              <div className="body">
                <div className="row"><span className="k">문제</span><p>{p.problem}</p></div>
                <div className="row"><span className="k">접근</span><p>{p.approach}</p></div>
                <div className="row"><span className="k">결과</span><p>{p.outcome}</p></div>
              </div>
              <div className="stacks">
                {p.stack.map((s) => <span className="chip" key={s}>{s}</span>)}
              </div>
              {p.slides && p.slides.length > 0 && (
                <div className="slides">
                  {p.slides.map((src, i) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img key={i} src={src} alt={`${p.title} slide ${i + 1}`} />
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
