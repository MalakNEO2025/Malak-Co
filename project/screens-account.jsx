/* Villa Igiea app — Account / stay. Exposes window.VillaAccount = { Account }. */
(function () {
  const NS = window.NEOLIFEDesignSystem_08f245;
  const { Button, Badge, Avatar } = NS;
  const I = window.VIcons;
  const U = window.VUI;

  function Account({ go, guest, loyalty, bookings, folio, nightsLeft, onSignOut }) {
    const folioTotal = folio.reduce((s, f) => s + f.amount, 0);
    return (
      <div style={{ minHeight: '100%', background: 'var(--bg-app)', paddingBottom: 130 }}>
        <U.TopBar title="Your stay" sub="Guest profile" onBack={() => go('home')} />

        <div style={{ padding: '0 30px' }}>
          {/* Guest header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 18, padding: '20px 22px', borderRadius: 20, background: 'var(--surface-card)', border: '1px solid var(--border-subtle)' }}>
            <Avatar name={guest.name} size={64} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: 'var(--font-elegant)', fontWeight: 700, fontSize: 22, color: 'var(--text-primary)' }}>{guest.name}</div>
              <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 4 }}>Room {guest.room} · Executive Suite</div>
            </div>
            <Badge style={{ background: 'rgba(213,0,0,.14)', color: 'var(--hotel-red)' }}>Gold</Badge>
          </div>

          {/* Stay window */}
          <div style={{ display: 'flex', gap: 12, marginTop: 14 }}>
            {[
              { l: 'Check-in', v: 'Thu, 12 Jun', ic: I.calendar },
              { l: 'Check-out', v: 'Sun, 15 Jun', ic: I.calendar },
              { l: 'Nights left', v: String(nightsLeft), ic: I.key },
            ].map((s, i) => (
              <div key={i} style={{ flex: 1, padding: '16px 14px', borderRadius: 16, background: 'var(--surface-card)', border: '1px solid var(--border-subtle)' }}>
                <span style={{ color: 'var(--brand)' }}>{s.ic({ size: 19 })}</span>
                <div style={{ fontSize: 11.5, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.05em', marginTop: 10 }}>{s.l}</div>
                <div style={{ fontWeight: 600, fontSize: 14.5, color: 'var(--text-primary)', marginTop: 3 }}>{s.v}</div>
              </div>
            ))}
          </div>

          {/* Loyalty */}
          <div style={{ marginTop: 14, borderRadius: 20, padding: '22px 24px', position: 'relative', overflow: 'hidden',
            background: 'linear-gradient(135deg, var(--brand-strong), #2a0c0c)', color: '#F5F2EE' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', opacity: .8 }}>{I.sparkle({ size: 15 })} Avelar Circle</div>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: 12 }}>
              <div style={{ fontFamily: 'var(--font-elegant)', fontWeight: 700, fontSize: 38, lineHeight: 1 }}>{loyalty.toLocaleString()}<span style={{ fontSize: 15, opacity: .8, marginLeft: 8 }}>pts</span></div>
              <span style={{ color: 'rgba(255,255,255,.85)' }}>{I.gift({ size: 26 })}</span>
            </div>
            <div style={{ marginTop: 16, height: 6, borderRadius: 99, background: 'rgba(255,255,255,.18)' }}>
              <div style={{ width: '68%', height: '100%', borderRadius: 99, background: '#F5F2EE' }} />
            </div>
            <div style={{ fontSize: 12.5, opacity: .82, marginTop: 10 }}>1,150 points to Platinum status</div>
          </div>

          {/* Upcoming bookings */}
          {bookings.length > 0 && (
            <React.Fragment>
              <U.SectionTitle action={<button onClick={() => go('spa')} style={{ background: 'none', border: 'none', color: 'var(--brand)', cursor: 'pointer', fontSize: 13, fontWeight: 600 }}>Add</button>}>Upcoming</U.SectionTitle>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {bookings.map((b, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px', borderRadius: 16, background: 'var(--surface-card)', border: '1px solid var(--border-subtle)' }}>
                    <span style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--brand-soft)', color: 'var(--brand)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{I.spa({ size: 21 })}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 600, fontSize: 14.5, color: 'var(--text-primary)' }}>{b.name}</div>
                      <div style={{ fontSize: 12.5, color: 'var(--text-secondary)', marginTop: 3 }}>{b.day ? b.day.dow + ' ' + b.day.num : ''} · {b.time} · {b.guests} {b.guests > 1 ? 'guests' : 'guest'}</div>
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 14, color: 'var(--text-primary)' }}>{b.total === 0 ? 'Free' : U.fmt(b.total)}</span>
                  </div>
                ))}
              </div>
            </React.Fragment>
          )}

          {/* Folio */}
          <U.SectionTitle>Room folio</U.SectionTitle>
          <div style={{ borderRadius: 18, background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', overflow: 'hidden' }}>
            {folio.map((f, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', borderBottom: '1px solid var(--border-subtle)' }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-primary)' }}>{f.label}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 2 }}>{f.when}</div>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 14.5, color: 'var(--text-primary)' }}>{U.fmt(f.amount)}</span>
              </div>
            ))}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', background: 'var(--surface-raised)' }}>
              <span style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--text-primary)' }}>Current balance</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 18, color: 'var(--text-primary)' }}>{U.fmt(folioTotal)}</span>
            </div>
          </div>

          <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Button variant="primary" size="lg" fullWidth iconRight={I.arrowR({ size: 20 })} onClick={() => go('room')}>Express checkout</Button>
            <Button variant="ghost" icon={I.logout({ size: 19 })} onClick={onSignOut}>Sign out</Button>
          </div>
        </div>
      </div>
    );
  }

  window.VillaAccount = { Account };
})();
