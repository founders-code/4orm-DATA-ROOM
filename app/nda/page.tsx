'use client';

import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';

const CSS = `
.nda-root{--bg:#FFFFFF;--bg-2:#F7F9FC;--surface:#FFFFFF;--border:#E6EBF3;--border-strong:#CCD6E4;
--tx:#142036;--tx-2:#46556E;--tx-3:#5E6E88;--blue:#2E6BF2;--blue-dp:#1B4ABE;--blue-50:#EAF1FE;
--sans:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
--mono:'JetBrains Mono',ui-monospace,'SF Mono',Menlo,monospace;--r-lg:26px;--sh-lg:0 28px 70px rgba(16,32,64,.14);
min-height:100vh;font-family:var(--sans);color:var(--tx);line-height:1.6;-webkit-font-smoothing:antialiased;position:relative;}
.nda-root *{margin:0;padding:0;box-sizing:border-box;}
.nda-wash{position:fixed;inset:0 0 auto 0;height:420px;z-index:0;pointer-events:none;background:
radial-gradient(900px 420px at 20% -10%,rgba(46,107,242,.14),transparent 60%),
radial-gradient(760px 360px at 92% -12%,rgba(91,140,255,.12),transparent 62%),
linear-gradient(180deg,var(--bg-2),var(--bg) 72%);}
.nda-wrap{position:relative;z-index:1;max-width:720px;margin:0 auto;padding:40px 24px 60px;}
.nda-brand{display:flex;align-items:center;gap:12px;justify-content:center;margin-bottom:26px;}
.nda-brand img{height:34px;width:auto;display:block;}
.nda-brand .sep{color:var(--border-strong);}
.nda-brand .sub{color:var(--tx-2);font-weight:600;font-size:.95rem;}
.nda-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);box-shadow:var(--sh-lg);overflow:hidden;}
.nda-hd{padding:30px 34px 22px;border-bottom:1px solid var(--border);}
.nda-eyebrow{font-family:var(--mono);font-size:.68rem;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--blue);}
.nda-hd h1{margin-top:12px;font-size:1.72rem;font-weight:800;letter-spacing:-.03em;line-height:1.1;}
.nda-hd p{margin-top:10px;color:var(--tx-2);font-size:.98rem;max-width:52ch;}
.nda-terms{padding:24px 34px 8px;}
.nda-terms .lead{font-size:.95rem;color:var(--tx-2);margin-bottom:16px;}
.nda-term{display:flex;gap:13px;padding:12px 0;border-top:1px solid var(--border);}
.nda-term:first-of-type{border-top:none;}
.nda-term .n{flex:0 0 26px;height:26px;border-radius:8px;background:var(--blue-50);color:var(--blue);
font-family:var(--mono);font-weight:800;font-size:.8rem;display:flex;align-items:center;justify-content:center;}
.nda-term .t{font-size:.93rem;color:var(--tx-2);line-height:1.58;}
.nda-term .t b{color:var(--tx);font-weight:700;}
.nda-form{padding:22px 34px 30px;background:var(--bg-2);border-top:1px solid var(--border);}
.nda-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
.nda-fld{display:flex;flex-direction:column;gap:6px;}
.nda-fld.full{grid-column:1 / -1;}
.nda-fld label{font-family:var(--mono);font-size:.62rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--tx-3);}
.nda-fld input{font-family:var(--sans);font-size:.98rem;color:var(--tx);background:var(--surface);
border:1px solid var(--border-strong);border-radius:12px;padding:12px 14px;outline:none;}
.nda-fld input:focus{border-color:var(--blue);box-shadow:0 0 0 3px var(--blue-50);}
.nda-fld input[readonly]{background:#EFF3F9;color:var(--tx-2);}
.nda-fld .hint{font-size:.74rem;color:var(--tx-3);}
.nda-sig input{font-family:'Segoe Script','Snell Roundhand',cursive;font-size:1.3rem;}
.nda-agree{display:flex;align-items:flex-start;gap:11px;margin-top:18px;padding:14px 16px;background:var(--surface);
border:1px solid var(--border);border-radius:14px;}
.nda-agree input{margin-top:3px;width:18px;height:18px;accent-color:var(--blue);flex:0 0 18px;}
.nda-agree label{font-size:.9rem;color:var(--tx-2);line-height:1.5;cursor:pointer;}
.nda-btn{margin-top:18px;width:100%;background:var(--blue);color:#fff;border:none;border-radius:999px;
padding:15px;font-weight:800;font-size:1rem;cursor:pointer;box-shadow:0 10px 30px rgba(46,107,242,.3);}
.nda-btn:hover{background:var(--blue-dp);}
.nda-btn:disabled{opacity:.55;cursor:default;}
.nda-err{margin-top:12px;color:#B42334;font-size:.86rem;}
.nda-meta{margin-top:16px;display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;
font-family:var(--mono);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--tx-3);}
.nda-fine{margin-top:14px;font-size:.76rem;color:var(--tx-3);line-height:1.55;}
@media(max-width:560px){.nda-grid{grid-template-columns:1fr;}}
`;

export default function NdaPage() {
  const { user, isLoaded } = useUser();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [sig, setSig] = useState('');
  const [agree, setAgree] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');

  const email = user?.primaryEmailAddress?.emailAddress ?? '';

  useEffect(() => {
    if (user) {
      const n = [user.firstName, user.lastName].filter(Boolean).join(' ');
      if (n) setName(n);
    }
  }, [user]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErr('');
    if (!name.trim() || !phone.trim() || !sig.trim() || !agree) {
      setErr('Please complete every field, type your name to sign, and check the box.');
      return;
    }
    setBusy(true);
    try {
      const r = await fetch('/api/nda', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), phone: phone.trim(), signature: sig.trim() }),
      });
      if (!r.ok) throw new Error('save failed');
      window.location.href = '/data-room.html';
    } catch {
      setBusy(false);
      setErr('Something went wrong saving your agreement. Please try again.');
    }
  }

  return (
    <div className="nda-root">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="nda-wash" />
      <div className="nda-wrap">
        <div className="nda-brand">
          <img src="/assets/4orm-logo-color.png?v=20260903" alt="4orm Finance" />
          <span className="sep">|</span>
          <span className="sub">Investor Data Room</span>
        </div>

        <div className="nda-card">
          <div className="nda-hd">
            <span className="nda-eyebrow">Before you enter</span>
            <h1>One quick step: confidentiality.</h1>
            <p>The materials inside this room are confidential. Please read the short agreement below and sign to enter. This takes about a minute, and you only do it once.</p>
          </div>

          <div className="nda-terms">
            <p className="lead">In plain terms, by entering the 4orm Finance data room you agree that:</p>
            <div className="nda-term"><span className="n">1</span><span className="t"><b>It&rsquo;s confidential.</b> Everything in this room &mdash; the documents, the figures, the plans, the team &mdash; is confidential information of 4orm Finance.</span></div>
            <div className="nda-term"><span className="n">2</span><span className="t"><b>You&rsquo;ll keep it private.</b> You will not share it with anyone else, and you&rsquo;ll use it only to consider a possible investment in or relationship with 4orm Finance.</span></div>
            <div className="nda-term"><span className="n">3</span><span className="t"><b>No rights, no offer.</b> Seeing these materials gives you no ownership or other rights in 4orm, and nothing here is an offer to sell securities.</span></div>
            <div className="nda-term"><span className="n">4</span><span className="t"><b>Figures are estimates.</b> The materials include forward-looking plans and estimates. They are not guarantees of any result.</span></div>
            <div className="nda-term"><span className="n">5</span><span className="t"><b>It lasts two years, and you&rsquo;ll delete on request.</b> This agreement runs for two years, is governed by the laws of Alberta, Canada, and if 4orm asks, you&rsquo;ll stop using and delete the materials.</span></div>
          </div>

          <form className="nda-form" onSubmit={submit}>
            <div className="nda-grid">
              <div className="nda-fld"><label>Full name</label><input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" /></div>
              <div className="nda-fld"><label>Phone</label><input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Your phone number" /></div>
              <div className="nda-fld full"><label>Email</label><input type="email" value={isLoaded ? email : ''} readOnly /><span className="hint">From your 4orm account.</span></div>
              <div className="nda-fld full nda-sig"><label>Signature &middot; type your full name</label><input type="text" value={sig} onChange={(e) => setSig(e.target.value)} placeholder="Type your name to sign" /></div>
            </div>
            <div className="nda-agree"><input id="agree" type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} /><label htmlFor="agree">I have read and agree to the confidentiality terms above, and I confirm the details I have entered are mine.</label></div>
            {err ? <div className="nda-err">{err}</div> : null}
            <button className="nda-btn" type="submit" disabled={busy}>{busy ? 'Saving…' : 'Agree and enter the data room →'}</button>
            <div className="nda-meta"><span>4orm Finance &middot; Calgary, AB</span><span>NDA v1.0 &middot; October 2026</span></div>
            <p className="nda-fine">A record of this agreement (your name, email, phone and the time you signed) is kept on your account. This is a plain-language summary intended to be simple; the governing wording is confirmed by 4orm&rsquo;s counsel.</p>
          </form>
        </div>
      </div>
    </div>
  );
}
