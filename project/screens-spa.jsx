/* Villa Igiea app — Spa & experiences flow. Exposes window.VillaSpa = { Spa, Booking, BookingConfirmed }. */
(function () {
  const NS = window.NEOLIFEDesignSystem_08f245;
  const { Button, Badge, Chip } = NS;
  const I = window.VIcons;
  const U = window.VUI;
  const D = window.VData;

  const days = (() => {
    const out = [];
    const base = new Date();
    const dn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (let i = 0; i < 5; i++) { const d = new Date(base); d.setDate(base.getDate() + i); out.push({ key: i, dow: i === 0 ? 'Today' : dn[d.getDay()], num: d.getDate() }); }
    return out;
  })();

  // ---------- Experiences list ----------
  function Spa({ go, openExp }) {
    const [cat, setCat] = React.useState('All');
    const items = D.experiences.filter((x) => cat === 'All' || x.cat === cat);
    return (
      <div style={{ minHeight: '100%', background: 'var(--bg-app)', paddingBottom: 130 }}>
        <U.TopBar title="Experiences" sub="Spa & adventures" onBack={() => go('home')} />

        {/* Featured */}
        <div style={{ margin: '0 30px', borderRadius: 22, overflow: 'hidden', position: 'relative',
          background: 'linear-gradient(135deg, var(--brand-strong), #2a0c0c)', color: '#F5F2EE', padding: '26px 26px 28px' }}>
          <Badge style={{ background: 'rgba(255,255,255,.18)', color: '#fff' }}>Featured</Badge>
          <div style={{ fontFamily: 'var(--font-elegant)', fontWeight: 700, fontSize: 28, marginTop: 14, maxWidth: 360, lineHeight: 1.08 }}>Acquamarina Spa Ritual</div>
          <div style={{ fontSize: 13.5, opacity: .85, marginTop: 10, maxWidth: 380, lineHeight: 1.5 }}>90 minutes of Mediterranean restoration, ending in our seafront hammam.</div>
          <div style={{ marginTop: 18 }}>
            <Button variant="secondary" onClick={() => openExp('x1')} style={{ background: 'rgba(255,255,255,.14)', color: '#fff', border: '1px solid rgba(255,255,255,.4)' }} iconRight={I.arrowR({ size: 18 })}>Reserve the ritual</Button>
          </div>
          <span style={{ position: 'absolute', right: -10, bottom: -10, color: 'rgba(255,255,255,.12)' }}>{I.spa({ size: 140 })}</span>
        </div>

        {/* Categories */}
        <div style={{ display: 'flex', gap: 10, overflowX: 'auto', padding: '18px 30px 4px', scrollbarWidth: 'none' }}>
          {D.expCats.map((c) => <Chip key={c} selected={cat === c} onClick={() => setCat(c)}>{c}</Chip>)}
        </div>

        {/* List */}
        <div style={{ padding: '12px 30px 0', display: 'flex', flexDirection: 'column', gap: 14 }}>
          {items.map((x) => (
            <button key={x.id} onClick={() => openExp(x.id)} style={{ textAlign: 'left', cursor: 'pointer', display: 'flex', gap: 16, padding: 16, borderRadius: 18,
              background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}>
              <span style={{ width: 56, height: 56, flexShrink: 0, borderRadius: 14, background: 'var(--brand-soft)', color: 'var(--brand)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{React.cloneElement(I[x.icon]({ size: 26 }))}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontWeight: 600, fontSize: 16 }}>{x.name}</span>
                </div>
                <div style={{ fontSize: 12.5, color: 'var(--text-secondary)', marginTop: 5, lineHeight: 1.4 }}>{x.desc}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 10, fontSize: 13 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, color: 'var(--text-secondary)' }}>{I.clock({ size: 14 })} {x.dur}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-primary)' }}>{x.price === 0 ? 'Complimentary' : U.fmt(x.price)}</span>
                </div>
              </div>
              <span style={{ alignSelf: 'center', color: 'var(--text-muted)' }}>{I.chevron({ size: 22 })}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ---------- Booking form ----------
  function Booking({ go, id, addBooking }) {
    const x = D.experiences.find((e) => e.id === id) || D.experiences[0];
    const [day, setDay] = React.useState(0);
    const [time, setTime] = React.useState('09:30');
    const [guests, setGuests] = React.useState(1);
    const total = x.price * guests;

    return (
      <div style={{ minHeight: '100%', background: 'var(--bg-app)', paddingBottom: 150 }}>
        <U.TopBar title={x.name} sub={x.cat + ' · ' + x.dur} onBack={() => go('spa')} />
        <div style={{ padding: '0 30px' }}>
          {/* Hero strip */}
          <div style={{ borderRadius: 18, padding: '22px 22px', display: 'flex', alignItems: 'center', gap: 16,
            background: 'linear-gradient(135deg, var(--brand-strong), #2a0c0c)', color: '#F5F2EE' }}>
            <span style={{ width: 56, height: 56, borderRadius: 16, background: 'rgba(255,255,255,.16)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{I[x.icon]({ size: 28 })}</span>
            <div style={{ fontSize: 13.5, opacity: .9, lineHeight: 1.45 }}>{x.desc}</div>
          </div>

          {/* Date */}
          <U.SectionTitle>Choose a date</U.SectionTitle>
          <div style={{ display: 'flex', gap: 10 }}>
            {days.map((d) => {
              const on = day === d.key;
              return (
                <button key={d.key} onClick={() => setDay(d.key)} style={{ flex: 1, cursor: 'pointer', padding: '14px 0', borderRadius: 14,
                  background: on ? 'var(--brand)' : 'var(--surface-card)', color: on ? 'var(--brand-contrast)' : 'var(--text-primary)',
                  border: on ? '1px solid var(--brand)' : '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: 11.5, opacity: .85, letterSpacing: '.04em' }}>{d.dow}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 19, marginTop: 4 }}>{d.num}</div>
                </button>
              );
            })}
          </div>

          {/* Time */}
          <U.SectionTitle>Available times</U.SectionTitle>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {D.times.map((t) => <Chip key={t} selected={time === t} onClick={() => setTime(t)}>{t}</Chip>)}
          </div>

          {/* Guests */}
          <U.SectionTitle>Guests</U.SectionTitle>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderRadius: 16, background: 'var(--surface-card)', border: '1px solid var(--border-subtle)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12, fontSize: 15, color: 'var(--text-primary)' }}><span style={{ color: 'var(--brand)' }}>{I.users({ size: 22 })}</span> Number of guests</span>
            <U.Qty value={guests} onAdd={() => setGuests((g) => Math.min(8, g + 1))} onRemove={() => setGuests((g) => Math.max(1, g - 1))} />
          </div>

          {/* Total */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 24, padding: '18px 20px', borderRadius: 16, background: 'var(--surface-raised)', border: '1px solid var(--border-subtle)' }}>
            <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}>Total {x.price > 0 && '· ' + guests + ' × ' + U.fmt(x.price)}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 24, color: 'var(--text-primary)' }}>{total === 0 ? 'Free' : U.fmt(total)}</span>
          </div>
        </div>

        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 96, padding: '0 30px' }}>
          <Button variant="primary" size="lg" fullWidth iconRight={I.arrowR({ size: 20 })}
            onClick={() => { addBooking({ name: x.name, day: days[day], time, guests, total }); go('bookingConfirmed'); }}>
            Confirm booking
          </Button>
        </div>
      </div>
    );
  }

  // ---------- Booking confirmed ----------
  function BookingConfirmed({ go, lastBooking }) {
    const b = lastBooking || {};
    const ref = React.useMemo(() => 'EX-' + Math.floor(1000 + Math.random() * 9000), []);
    return (
      <div style={{ minHeight: '100%', background: 'var(--bg-app)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 36px', textAlign: 'center' }}>
        <div style={{ width: 96, height: 96, borderRadius: 999, background: 'var(--status-success)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 36px rgba(0,197,144,.4)' }}>{I.checkBig({ size: 48 })}</div>
        <div style={{ fontFamily: 'var(--font-elegant)', fontWeight: 700, fontSize: 30, color: 'var(--text-primary)', marginTop: 26, lineHeight: 1.1, whiteSpace: 'nowrap' }}>You're booked</div>
        <div style={{ fontSize: 15, color: 'var(--text-secondary)', marginTop: 10, maxWidth: 380, lineHeight: 1.5 }}>A confirmation has been added to your stay. Our team will meet you at the appointed time.</div>

        <div style={{ marginTop: 28, width: '100%', maxWidth: 420, borderRadius: 18, background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', overflow: 'hidden', textAlign: 'left' }}>
          <div style={{ padding: '18px 20px', borderBottom: '1px solid var(--border-subtle)' }}>
            <div style={{ fontFamily: 'var(--font-elegant)', fontWeight: 700, fontSize: 19, color: 'var(--text-primary)' }}>{b.name}</div>
          </div>
          {[
            { ic: I.calendar, l: 'Date', v: (b.day ? (b.day.dow + ' ' + b.day.num) : '') + ' · ' + (b.time || '') },
            { ic: I.users, l: 'Guests', v: (b.guests || 1) + (b.guests > 1 ? ' guests' : ' guest') },
            { ic: I.bell, l: 'Reference', v: ref, mono: true },
          ].map((r, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 20px', borderBottom: i < 2 ? '1px solid var(--border-subtle)' : 'none' }}>
              <span style={{ color: 'var(--brand)' }}>{r.ic({ size: 20 })}</span>
              <span style={{ flex: 1, fontSize: 13, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.06em' }}>{r.l}</span>
              <span style={{ fontFamily: r.mono ? 'var(--font-mono)' : 'var(--font-ui)', fontWeight: 600, fontSize: 14.5, color: 'var(--text-primary)' }}>{r.v}</span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 26, width: '100%', maxWidth: 420, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Button variant="primary" size="lg" fullWidth onClick={() => go('home')}>Back to your stay</Button>
          <Button variant="ghost" onClick={() => go('spa')}>Browse more experiences</Button>
        </div>
      </div>
    );
  }

  window.VillaSpa = { Spa, Booking, BookingConfirmed };
})();
