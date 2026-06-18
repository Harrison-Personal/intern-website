# intern-website

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="./support.js"></script>
</head>
<body>
<x-dc>
<helmet>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Caveat:wght@500;700&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box}
html,body{margin:0;padding:0}
@keyframes blink{0%,49%{opacity:1}50%,100%{opacity:0}}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}
</style>
</helmet>

<div style="background:#FFFBEB;font-family:'Montserrat',sans-serif;min-height:100vh;width:100%">

  <!-- nav -->
  <div style="display:flex;align-items:center;justify-content:space-between;padding:22px 8vw;border-bottom:1px solid #F1E6C4;position:sticky;top:0;background:rgba(255,251,235,.92);z-index:10">
    <div style="display:flex;align-items:center;gap:10px">
      <div style="width:28px;height:28px;border-radius:50%;background:#F5C518"></div>
      <span style="font-family:'Caveat',cursive;font-weight:700;font-size:26px;color:#1A1A1A">sunny's corner</span>
    </div>
    <div style="display:flex;gap:30px;font-size:14px;font-weight:500;color:#57534E">
      <span style="cursor:pointer">Home</span><span style="cursor:pointer">About me</span><span style="color:#1A1A1A;font-weight:600;cursor:pointer">Say hi</span>
    </div>
  </div>

  <!-- hero -->
  <div data-reveal style="opacity:0;transform:translateY(18px);transition:opacity .55s cubic-bezier(.2,.6,.2,1),transform .55s cubic-bezier(.2,.6,.2,1);max-width:1080px;margin:0 auto;display:grid;grid-template-columns:1.25fr 1fr;gap:48px;align-items:center;padding:80px 8vw 64px">
    <div>
      <div style="display:inline-block;font-size:13px;font-weight:600;color:#A8852E;background:#FCEFC0;padding:6px 13px;border-radius:999px;margin-bottom:22px">welcome, friend</div>
      <h1 style="font-size:56px;line-height:1.04;font-weight:800;color:#1A1A1A;margin:0 0 16px;letter-spacing:-0.02em">Hi, come on in.</h1>
      <div style="font-size:25px;font-weight:600;color:#3A3A3A;margin-bottom:24px;min-height:34px">This is my <span id="hero-type" style="color:#C99400"></span><span style="display:inline-block;width:2px;height:25px;background:#F5C518;margin-left:2px;vertical-align:-4px;animation:blink 1s steps(1) infinite"></span></div>
      <p style="font-size:17px;line-height:1.6;color:#57534E;margin:0 0 30px;max-width:440px">No agenda, nothing to sell. Just a warm little place I made for fun. Wander around, stay as long as you like.</p>
      <div style="display:flex;gap:14px">
        <a href="#joy" style="text-decoration:none;background:#F5C518;color:#1A1A1A;font-weight:700;font-size:15px;padding:14px 26px;border-radius:10px;cursor:pointer;transition:background .2s cubic-bezier(.2,.6,.2,1)" style-hover="background:#E0A800">Cheer me up</a>
        <a href="#wander" style="text-decoration:none;border:1.5px solid #E4D7A8;color:#1A1A1A;font-weight:600;font-size:15px;padding:14px 26px;border-radius:10px;cursor:pointer;transition:border-color .2s,background .2s" style-hover="border-color:#1A1A1A;background:#FCEFC0">Take a look around</a>
      </div>
    </div>
    <div style="display:flex;justify-content:center">
      <div style="width:250px;height:250px;border-radius:50%;background:#FFCE2E;display:flex;align-items:center;justify-content:center;position:relative;box-shadow:0 18px 40px rgba(229,180,0,.30);animation:bob 4s ease-in-out infinite">
        <div style="position:absolute;inset:-30px;border-radius:50%;border:2px dashed #FBE08A;animation:spin 30s linear infinite"></div>
        <div style="width:136px;height:136px;border-radius:50%;background:#FFFBEB"></div>
      </div>
    </div>
  </div>

  <!-- press for joy -->
  <div id="joy" data-reveal style="opacity:0;transform:translateY(18px);transition:opacity .55s cubic-bezier(.2,.6,.2,1),transform .55s cubic-bezier(.2,.6,.2,1);background:#FCEFC0;border-top:1px solid #F1E6C4;border-bottom:1px solid #F1E6C4;padding:72px 8vw">
    <div style="max-width:680px;margin:0 auto;text-align:center;position:relative">
      <div style="position:absolute;left:-10px;top:0;width:64px;height:64px;border-radius:50%;border:2px dashed #F0D680"></div>
      <div style="position:absolute;right:0;bottom:30px;width:42px;height:42px;border-radius:50%;background:#FFD98A"></div>
      <div style="font-family:'Caveat',cursive;font-size:24px;color:#C99400;margin-bottom:4px">having a meh day?</div>
      <h2 style="font-size:38px;line-height:1.08;font-weight:800;color:#1A1A1A;margin:0 0 10px;letter-spacing:-0.02em">Give the button a press.</h2>
      <p style="font-size:16px;color:#57534E;margin:0 0 36px">It'll hand you something nice. As many times as you need.</p>

      <div onClick="{{ pressJoy }}" style="width:180px;height:180px;border-radius:50%;background:#F5C518;margin:0 auto 30px;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 16px 34px rgba(229,180,0,.38);user-select:none;transition:transform .15s cubic-bezier(.2,.6,.2,1),background .2s" style-hover="background:#FFD94A" style-active="transform:scale(.93)">
        <span style="font-weight:800;font-size:21px;color:#1A1A1A;text-align:center;line-height:1.2">press<br>for joy</span>
      </div>

      <div id="joy-msg" style="font-family:'Caveat',cursive;font-size:32px;color:#1A1A1A;min-height:44px;max-width:520px;margin:0 auto 8px;transition:opacity .2s">You look lovely today, by the way.</div>
      <div style="font-size:13px;color:#A99E7E;margin-bottom:36px"><span id="joy-count">0</span> bits of joy handed out so far</div>

      <div style="max-width:460px;margin:0 auto;text-align:left">
        <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:10px"><span style="font-weight:700;font-size:14px;color:#1A1A1A">Today's happiness meter</span><span style="font-family:'Caveat',cursive;font-size:19px;color:#C99400">keep pressing!</span></div>
        <div style="height:18px;border-radius:999px;background:#fff;border:1px solid #EFE2B6;overflow:hidden"><div id="joy-meter" style="height:100%;width:18%;background:#F5C518;border-radius:999px;transition:width .4s cubic-bezier(.2,.6,.2,1)"></div></div>
      </div>
    </div>
  </div>

  <!-- wander around -->
  <div id="wander" style="max-width:1080px;margin:0 auto;padding:76px 8vw 20px">
    <div data-reveal style="opacity:0;transform:translateY(18px);transition:opacity .5s cubic-bezier(.2,.6,.2,1),transform .5s cubic-bezier(.2,.6,.2,1);font-family:'Caveat',cursive;font-size:30px;color:#1A1A1A;margin-bottom:20px">wander around →</div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px">
      <div data-reveal style="opacity:0;transform:translateY(18px);transition:opacity .5s cubic-bezier(.2,.6,.2,1),transform .5s cubic-bezier(.2,.6,.2,1);background:#fff;border:1px solid #EFE2B6;border-radius:16px;padding:26px;cursor:pointer;transition:transform .2s,border-color .2s" style-hover="transform:translateY(-4px);border-color:#1A1A1A">
        <div style="width:38px;height:38px;border-radius:10px;background:#FFE9A8;margin-bottom:16px"></div>
        <div style="font-weight:700;font-size:18px;color:#1A1A1A;margin-bottom:6px">Today's playlist</div>
        <p style="font-size:14px;line-height:1.5;color:#57534E;margin:0">Songs on repeat this week.</p>
      </div>
      <div data-reveal style="opacity:0;transform:translateY(18px);transition:opacity .5s cubic-bezier(.2,.6,.2,1) .05s,transform .5s cubic-bezier(.2,.6,.2,1) .05s;background:#fff;border:1px solid #EFE2B6;border-radius:16px;padding:26px;cursor:pointer;transition:transform .2s,border-color .2s" style-hover="transform:translateY(-4px);border-color:#1A1A1A">
        <div style="width:38px;height:38px;border-radius:10px;background:#FFD98A;margin-bottom:16px"></div>
        <div style="font-weight:700;font-size:18px;color:#1A1A1A;margin-bottom:6px">Photo dump</div>
        <p style="font-size:14px;line-height:1.5;color:#57534E;margin:0">Little moments worth keeping.</p>
      </div>
      <div data-reveal style="opacity:0;transform:translateY(18px);transition:opacity .5s cubic-bezier(.2,.6,.2,1) .1s,transform .5s cubic-bezier(.2,.6,.2,1) .1s;background:#fff;border:1px solid #EFE2B6;border-radius:16px;padding:26px;cursor:pointer;transition:transform .2s,border-color .2s" style-hover="transform:translateY(-4px);border-color:#1A1A1A">
        <div style="width:38px;height:38px;border-radius:10px;background:#FFE9A8;margin-bottom:16px"></div>
        <div style="font-weight:700;font-size:18px;color:#1A1A1A;margin-bottom:6px">Currently loving</div>
        <p style="font-size:14px;line-height:1.5;color:#57534E;margin:0">Books, snacks, tiny obsessions.</p>
      </div>
      <div data-reveal style="opacity:0;transform:translateY(18px);transition:opacity .5s cubic-bezier(.2,.6,.2,1),transform .5s cubic-bezier(.2,.6,.2,1);background:#fff;border:1px solid #EFE2B6;border-radius:16px;padding:26px;cursor:pointer;transition:transform .2s,border-color .2s" style-hover="transform:translateY(-4px);border-color:#1A1A1A">
        <div style="width:38px;height:38px;border-radius:10px;background:#FFD98A;margin-bottom:16px"></div>
        <div style="font-weight:700;font-size:18px;color:#1A1A1A;margin-bottom:6px">Tiny blog</div>
        <p style="font-size:14px;line-height:1.5;color:#57534E;margin:0">Half-formed thoughts, weekly.</p>
      </div>
      <div data-reveal style="opacity:0;transform:translateY(18px);transition:opacity .5s cubic-bezier(.2,.6,.2,1) .05s,transform .5s cubic-bezier(.2,.6,.2,1) .05s;background:#fff;border:1px solid #EFE2B6;border-radius:16px;padding:26px;cursor:pointer;transition:transform .2s,border-color .2s" style-hover="transform:translateY(-4px);border-color:#1A1A1A">
        <div style="width:38px;height:38px;border-radius:10px;background:#FFE9A8;margin-bottom:16px"></div>
        <div style="font-weight:700;font-size:18px;color:#1A1A1A;margin-bottom:6px">Sign the guestbook</div>
        <p style="font-size:14px;line-height:1.5;color:#57534E;margin:0">Leave a hello. I read them all.</p>
      </div>
      <div data-reveal style="opacity:0;transform:translateY(18px);transition:opacity .5s cubic-bezier(.2,.6,.2,1) .1s,transform .5s cubic-bezier(.2,.6,.2,1) .1s;background:#1A1A1A;border-radius:16px;padding:26px;cursor:pointer;display:flex;flex-direction:column;justify-content:center;transition:transform .2s" style-hover="transform:translateY(-4px)">
        <div style="font-family:'Caveat',cursive;font-size:24px;color:#FFCE2E;margin-bottom:4px">psst…</div>
        <div style="font-weight:700;font-size:18px;color:#fff;margin-bottom:6px">A secret page</div>
        <p style="font-size:14px;line-height:1.5;color:#C9C4B8;margin:0">If you can find it.</p>
      </div>
    </div>
  </div>

  <!-- jar of good things -->
  <div style="max-width:1080px;margin:0 auto;padding:64px 8vw 40px">
    <h2 data-reveal style="opacity:0;transform:translateY(18px);transition:opacity .5s cubic-bezier(.2,.6,.2,1),transform .5s cubic-bezier(.2,.6,.2,1);font-size:32px;font-weight:800;color:#1A1A1A;margin:0 0 6px;letter-spacing:-0.01em">A jar of good things</h2>
    <p data-reveal style="opacity:0;transform:translateY(18px);transition:opacity .5s cubic-bezier(.2,.6,.2,1) .05s,transform .5s cubic-bezier(.2,.6,.2,1) .05s;font-size:15px;color:#57534E;margin:0 0 28px">Tiny reminders worth holding onto.</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
      <div data-reveal style="opacity:0;transform:translateY(18px);transition:opacity .5s cubic-bezier(.2,.6,.2,1),transform .5s cubic-bezier(.2,.6,.2,1);display:flex;gap:14px;align-items:center;background:#fff;border:1px solid #EFE2B6;border-radius:14px;padding:18px 22px"><div style="width:12px;height:12px;border-radius:50%;background:#F5C518;flex:none"></div><span style="font-size:15px;color:#3A3A3A">The smell of rain on a warm day.</span></div>
      <div data-reveal style="opacity:0;transform:translateY(18px);transition:opacity .5s cubic-bezier(.2,.6,.2,1) .05s,transform .5s cubic-bezier(.2,.6,.2,1) .05s;display:flex;gap:14px;align-items:center;background:#fff;border:1px solid #EFE2B6;border-radius:14px;padding:18px 22px"><div style="width:12px;height:12px;border-radius:50%;background:#FFCE2E;flex:none"></div><span style="font-size:15px;color:#3A3A3A">Finding money in an old coat.</span></div>
      <div data-reveal style="opacity:0;transform:translateY(18px);transition:opacity .5s cubic-bezier(.2,.6,.2,1) .1s,transform .5s cubic-bezier(.2,.6,.2,1) .1s;display:flex;gap:14px;align-items:center;background:#fff;border:1px solid #EFE2B6;border-radius:14px;padding:18px 22px"><div style="width:12px;height:12px;border-radius:50%;background:#F5C518;flex:none"></div><span style="font-size:15px;color:#3A3A3A">A dog that wants to say hello.</span></div>
      <div data-reveal style="opacity:0;transform:translateY(18px);transition:opacity .5s cubic-bezier(.2,.6,.2,1) .15s,transform .5s cubic-bezier(.2,.6,.2,1) .15s;display:flex;gap:14px;align-items:center;background:#fff;border:1px solid #EFE2B6;border-radius:14px;padding:18px 22px"><div style="width:12px;height:12px;border-radius:50%;background:#FFCE2E;flex:none"></div><span style="font-size:15px;color:#3A3A3A">The first sip of coffee.</span></div>
    </div>
  </div>

  <!-- footer -->
  <div style="border-top:1px solid #F1E6C4;padding:34px 8vw;text-align:center">
    <div style="font-family:'Caveat',cursive;font-size:20px;color:#A99E7E">made with love and a lot of sunshine · 2026</div>
  </div>

</div>
</x-dc>
<script type="text/x-dc" data-dc-script>
class Component extends DCLogic {
  componentDidMount() {
    const reveal = (el) => { el.style.opacity = '1'; el.style.transform = 'none'; };
    try {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { reveal(e.target); obs.unobserve(e.target); } });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      document.querySelectorAll('[data-reveal]').forEach((el) => obs.observe(el));
    } catch (err) {
      document.querySelectorAll('[data-reveal]').forEach(reveal);
    }
    setTimeout(() => document.querySelectorAll('[data-reveal]').forEach(reveal), 1800);

    this._typers = [];
    this.startTyping('hero-type', ['happy little place', 'sunny corner', 'cozy hideout', 'slice of the internet']);
    this._joyCount = 0;
  }

  startTyping(id, words) {
    const el = document.getElementById(id);
    if (!el) return;
    let w = 0, c = 0, deleting = false;
    const tick = () => {
      if (!document.getElementById(id)) return;
      const word = words[w];
      if (!deleting) { c++; el.textContent = word.slice(0, c); if (c >= word.length) { deleting = true; this._typers.push(setTimeout(tick, 1300)); return; } }
      else { c--; el.textContent = word.slice(0, Math.max(c, 0)); if (c <= 0) { deleting = false; w = (w + 1) % words.length; } }
      this._typers.push(setTimeout(tick, deleting ? 45 : 85));
    };
    tick();
  }

  renderVals() {
    const messages = [
      "You look lovely today, by the way.",
      "Whatever you're worried about, you've got this.",
      "Somewhere, a cat is yawning. Adorable.",
      "Take a deep breath. There you go.",
      "You're doing better than you think.",
      "This is your sign to drink some water.",
      "The sun came up for you today, too.",
      "Be honest, you're kind of great.",
      "A tiny win counts. Celebrate it.",
      "You made it this far. That's something."
    ];
    const pressJoy = () => {
      const msgEl = document.getElementById('joy-msg');
      const countEl = document.getElementById('joy-count');
      const meter = document.getElementById('joy-meter');
      if (!msgEl) return;
      let next = messages[Math.floor(Math.random() * messages.length)];
      if (msgEl.textContent === next) next = messages[(messages.indexOf(next) + 1) % messages.length];
      msgEl.style.opacity = '0';
      setTimeout(() => { msgEl.textContent = next; msgEl.style.opacity = '1'; }, 160);
      this._joyCount = (this._joyCount || 0) + 1;
      if (countEl) countEl.textContent = this._joyCount;
      if (meter) meter.style.width = Math.min(100, 18 + this._joyCount * 9) + '%';
    };
    return { pressJoy };
  }

  componentWillUnmount() { (this._typers || []).forEach(clearTimeout); }
}
</script>
</body>
</html>


```