"use client";

import { useState } from "react";
import Link from "next/link";
import { profile, nav } from "../data/site";

const CSS = `
  .land{ --deep-1:#1a5c88; --deep-2:#2683b4; --aqua:#86e5f2; --aqua-soft:#c9f2f8; --text:#f4fcff; --muted:#c6e4f0; --line:rgba(214,242,250,.34);
    --sans:"Apple SD Gothic Neo","Pretendard",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;
    position:fixed; inset:0; overflow:hidden; font-family:var(--sans); color:var(--text); }
  .land *{ margin:0; padding:0; box-sizing:border-box; }
  .land .ocean{ position:absolute; inset:0; background:radial-gradient(125% 95% at 50% -8%, #6cbfe6 0%, var(--deep-2) 46%, var(--deep-1) 84%); }
  .land .caustic{ position:absolute; inset:-20%; pointer-events:none; filter:blur(8px); animation:qDrift 22s ease-in-out infinite alternate;
    background:radial-gradient(38% 32% at 30% 28%, rgba(150,232,245,.22), transparent 60%),radial-gradient(30% 26% at 72% 62%, rgba(90,190,225,.22), transparent 62%),radial-gradient(26% 24% at 52% 88%, rgba(180,240,250,.15), transparent 60%); }
  @keyframes qDrift{ 0%{transform:translate3d(-3%,-2%,0) scale(1.05);} 100%{transform:translate3d(4%,3%,0) scale(1.12);} }
  .land .rays{ position:absolute; inset:0; pointer-events:none; opacity:.5; background:repeating-linear-gradient(102deg, transparent 0 42px, rgba(190,235,248,.06) 42px 44px, transparent 44px 96px); -webkit-mask-image:linear-gradient(to bottom, rgba(0,0,0,.9), transparent 70%); mask-image:linear-gradient(to bottom, rgba(0,0,0,.9), transparent 70%); }
  .land .bubbles{ position:absolute; inset:0; pointer-events:none; overflow:hidden; }
  .land .bubbles span{ position:absolute; bottom:-40px; border-radius:50%; background:radial-gradient(circle at 30% 30%, rgba(255,255,255,.6), rgba(200,240,250,.1) 60%, transparent 70%); animation:qRise linear infinite; }
  @keyframes qRise{ 0%{transform:translateY(0) translateX(0); opacity:0;} 12%{opacity:.7;} 100%{transform:translateY(-110vh) translateX(24px); opacity:0;} }
  .land .stage{ position:relative; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:40px 24px 120px; }
  .land .emblem{ width:78px; height:78px; margin-bottom:28px; animation:qUp .9s cubic-bezier(.2,.7,.3,1) both; }
  .land .emblem svg{ width:100%; height:100%; }
  .land h1{ font-size:clamp(38px,8vw,60px); font-weight:800; letter-spacing:-.03em; line-height:1; animation:qUp .9s cubic-bezier(.2,.7,.3,1) .06s both; }
  .land .kr{ margin-top:12px; font-size:15px; letter-spacing:.32em; color:var(--muted); font-weight:500; padding-left:.32em; animation:qUp .9s cubic-bezier(.2,.7,.3,1) .12s both; }
  .land .divider{ width:46px; height:1px; background:var(--line); margin:24px 0 20px; animation:qGrow .9s ease .2s both; }
  @keyframes qGrow{ from{width:0; opacity:0;} to{width:46px; opacity:1;} }
  .land .tagline{ font-size:14px; letter-spacing:.06em; color:var(--aqua-soft); font-weight:500; animation:qUp .9s cubic-bezier(.2,.7,.3,1) .26s both; }
  .land nav{ margin-top:36px; display:flex; flex-direction:column; align-items:center; gap:14px; animation:qUp .9s cubic-bezier(.2,.7,.3,1) .34s both; }
  .land .navlink{ color:var(--text); text-decoration:none; font-size:16px; font-weight:600; position:relative; padding-bottom:3px; background:none; border:0; cursor:pointer; font-family:inherit; }
  .land .navlink::after{ content:""; position:absolute; left:0; right:100%; bottom:0; height:1.5px; background:var(--aqua); transition:right .28s cubic-bezier(.2,.7,.3,1); }
  .land .navlink:hover{ color:var(--aqua-soft); }
  .land .navlink:hover::after{ right:0; }
  .land .navlink:focus-visible{ outline:2px solid var(--aqua); outline-offset:4px; border-radius:3px; }
  .land .blogrow{ display:flex; align-items:center; gap:7px; }
  .land .caret{ font-size:10px; color:var(--muted); transition:transform .22s; }
  .land .caret.open{ transform:rotate(90deg); }
  .land .subnav{ display:flex; flex-direction:column; align-items:center; gap:9px; overflow:hidden; max-height:0; opacity:0; transition:max-height .3s ease, opacity .3s ease, margin .3s ease; }
  .land .subnav.open{ max-height:220px; opacity:1; margin-top:4px; }
  .land .subnav a{ color:var(--muted); text-decoration:none; font-size:14px; letter-spacing:.02em; }
  .land .subnav a:hover{ color:var(--aqua-soft); }
  .land .socials{ position:absolute; bottom:40px; left:0; right:0; display:flex; gap:22px; justify-content:center; animation:qUp .9s ease .5s both; }
  .land .socials a{ color:var(--muted); transition:color .2s, transform .2s; display:grid; place-items:center; }
  .land .socials a:hover{ color:var(--text); transform:translateY(-2px); }
  .land .socials svg{ width:21px; height:21px; }
  @keyframes qUp{ from{opacity:0; transform:translateY(14px);} to{opacity:1; transform:none;} }
  @media (prefers-reduced-motion: reduce){ .land *{ animation:none !important; } }
`;

const BUBBLES = Array.from({ length: 14 }, (_, i) => ({
  size: 4 + (i % 5) * 3 + (i % 3),
  left: 6 + ((i * 6.4) % 92),
  dur: 9 + (i % 6) * 2.5,
  delay: -(i * 1.3),
}));

export default function Home() {
  const [blogOpen, setBlogOpen] = useState(false);

  return (
    <div className="land">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="ocean" />
      <div className="caustic" />
      <div className="rays" />
      <div className="bubbles">
        {BUBBLES.map((b, i) => (
          <span key={i} style={{ width: `${b.size}px`, height: `${b.size}px`, left: `${b.left}%`, animationDuration: `${b.dur}s`, animationDelay: `${b.delay}s` }} />
        ))}
      </div>

      <main className="stage">
        <div className="emblem" aria-hidden="true">
          <svg viewBox="0 0 100 100" fill="none">
            <defs>
              <linearGradient id="lem" x1="0" y1="0" x2="0.3" y2="1">
                <stop offset="0" stopColor="#FFEE8C" />
                <stop offset="1" stopColor="#FFCE3A" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="46" stroke="rgba(220,244,251,.55)" strokeWidth="1.5" />
            <g transform="rotate(-16 50 43)">
              <path d="M30 43 C31 35 40 31 50 31 C60 31 69 35 70 43 C69 51 60 55 50 55 C40 55 31 51 30 43 Z" fill="url(#lem)" stroke="#E9A70C" strokeWidth="1.3" />
              <circle cx="29.4" cy="43" r="1.9" fill="#E9A70C" />
              <circle cx="70.6" cy="43" r="1.9" fill="#E9A70C" />
              <ellipse cx="43" cy="39" rx="6.5" ry="3" fill="rgba(255,255,255,.5)" transform="rotate(-18 43 39)" />
              <path d="M56 31 C60 24 68 24 71 26 C69 33 61 34 56 31 Z" fill="#69C05A" />
            </g>
            <path d="M22 68 c6 0 6 -4.5 12 -4.5 s6 4.5 12 4.5 6 -4.5 12 -4.5 6 4.5 12 4.5" stroke="#86e5f2" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M26 75 c5.5 0 5.5 -4 11 -4 s5.5 4 11 4 5.5 -4 11 -4 5.5 4 11 4" stroke="rgba(214,242,250,.6)" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        <h1>{profile.name}</h1>
        <div className="kr">{profile.kr}</div>
        <div className="divider" />
        <div className="tagline">{profile.tagline}</div>

        <nav>
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <button className="navlink" aria-expanded={blogOpen} onClick={() => setBlogOpen((v) => !v)}>
                  <span className="blogrow">{item.label}<span className={`caret${blogOpen ? " open" : ""}`}>▶</span></span>
                </button>
                <div className={`subnav${blogOpen ? " open" : ""}`}>
                  {item.children.map((c) => (
                    <Link key={c.label} href={c.href}>{c.label}</Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.label} className="navlink" href={item.href!}>{item.label}</Link>
            )
          )}
        </nav>

        <div className="socials">
          <a href={profile.github} aria-label="GitHub" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.34 9.34 0 0 1 2.5-.34c.85 0 1.71.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" /></svg>
          </a>
          <a href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" /></svg>
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m3.5 7 8.5 6 8.5-6" strokeLinecap="round" /></svg>
          </a>
        </div>
      </main>
    </div>
  );
}
