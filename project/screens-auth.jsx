/* Villa Igiea app — Sign in / welcome. Exposes window.VillaAuth = { SignIn }. */
(function () {
  const NS = window.NEOLIFEDesignSystem_08f245;
  const { Button, Input } = NS;
  const I = window.VIcons;

  function SignIn({ go, venue, onAuth }) {
    const [room, setRoom] = React.useState('');
    const [name, setName] = React.useState('');
    const ready = room.trim() && name.trim();
    return (
      <div style={{ minHeight: '100%', position: 'relative', display: 'flex', flexDirection: 'column',
        justifyContent: 'flex-end', background: 'var(--bg-app)' }}>
        {/* Cinematic backdrop */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="assets/hotel-bar-hero.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(18,16,15,.55) 0%, rgba(18,16,15,.4) 38%, rgba(18,16,15,.92) 82%)' }} />
        </div>

        {/* Brand mark, top */}
        <div style={{ position: 'absolute', top: 40, left: 30, right: 30, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', color: '#F5F2EE' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-brand)', fontSize: 12, letterSpacing: '.32em', textTransform: 'uppercase', opacity: .82 }}>
            <span style={{ width: 22, height: 22, display: 'inline-block', WebkitMask: 'url(assets/neolife-mark.svg) center/contain no-repeat', mask: 'url(assets/neolife-mark.svg) center/contain no-repeat', background: 'currentColor' }} />
            NEOLIFE
          </div>
          <div style={{ textAlign: 'right', lineHeight: 1 }}>
            <div style={{ fontFamily: 'var(--font-elegant)', fontWeight: 700, fontSize: 24, color: 'var(--hotel-red)' }}>RF</div>
          </div>
        </div>

        {/* Sign-in card content */}
        <div style={{ position: 'relative', padding: '0 36px 46px', color: '#F5F2EE' }}>
          <div style={{ fontFamily: 'var(--font-elegant)', fontSize: 13, letterSpacing: '.34em', textTransform: 'uppercase', opacity: .7 }}>{venue.place}</div>
          <div style={{ fontFamily: 'var(--font-elegant)', fontWeight: 700, fontSize: 46, lineHeight: 1.02, marginTop: 14, letterSpacing: '.02em' }}>{venue.name}</div>
          <div style={{ fontSize: 15, opacity: .82, marginTop: 14, maxWidth: 440, lineHeight: 1.5 }}>
            Welcome back. Sign in with your room to unlock dining, the spa, and your in-room concierge.
          </div>

          <div style={{ marginTop: 30, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Input value={room} onChange={(e) => setRoom(e.target.value)} placeholder="Room number" inputMode="numeric"
              icon={<span style={{ color: 'rgba(245,242,238,.6)', display: 'inline-flex' }}>{I.key({ size: 19 })}</span>}
              containerStyle={{ background: 'rgba(255,255,255,.1)', border: '1px solid rgba(245,242,238,.25)' }}
              style={{ color: '#fff' }} />
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Surname on reservation"
              containerStyle={{ background: 'rgba(255,255,255,.1)', border: '1px solid rgba(245,242,238,.25)' }}
              style={{ color: '#fff' }} />
          </div>

          <div style={{ marginTop: 18 }}>
            <Button variant="primary" size="lg" fullWidth disabled={!ready}
              iconRight={I.arrowR({ size: 20 })} onClick={() => { if (ready) { onAuth({ room: room.trim(), name: name.trim() }); go('home'); } }}>
              Enter your stay
            </Button>
          </div>
          <button onClick={() => { onAuth({ room: '412', name: 'Al-Rashid' }); go('home'); }}
            style={{ marginTop: 16, width: '100%', background: 'none', border: 'none', cursor: 'pointer',
              color: 'rgba(245,242,238,.7)', fontFamily: 'var(--font-ui)', fontSize: 13, letterSpacing: '.02em' }}>
            Explore as a guest of Suite 412
          </button>
        </div>
      </div>
    );
  }

  window.VillaAuth = { SignIn };
})();
