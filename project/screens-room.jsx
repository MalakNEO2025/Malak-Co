/* Villa Igiea app — Room controls. Exposes window.VillaRoom = { Room }. */
(function () {
  const NS = window.NEOLIFEDesignSystem_08f245;
  const { Badge } = NS;
  const I = window.VIcons;
  const U = window.VUI;

  function Toggle({ on, onClick }) {
    return (
      <button onClick={onClick} aria-pressed={on} style={{ width: 52, height: 30, borderRadius: 999, border: 'none', cursor: 'pointer',
        background: on ? 'var(--brand)' : 'var(--border-strong)', position: 'relative', transition: 'background var(--dur-base) var(--ease-out)', flexShrink: 0 }}>
        <span style={{ position: 'absolute', top: 3, left: on ? 25 : 3, width: 24, height: 24, borderRadius: 999, background: '#fff', transition: 'left var(--dur-base) var(--ease-out)', boxShadow: '0 1px 3px rgba(0,0,0,.3)' }} />
      </button>
    );
  }

  function ToggleRow({ icon, label, sub, on, onClick }) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px' }}>
        <span style={{ width: 42, height: 42, flexShrink: 0, borderRadius: 12, background: on ? 'var(--brand-soft)' : 'var(--surface-raised)', color: on ? 'var(--brand)' : 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: 'all var(--dur-base)' }}>{icon}</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 600, fontSize: 15, color: 'var(--text-primary)' }}>{label}</div>
          {sub && <div style={{ fontSize: 12.5, color: 'var(--text-secondary)', marginTop: 2 }}>{sub}</div>}
        </div>
        <Toggle on={on} onClick={onClick} />
      </div>
    );
  }

  function Room({ go, room, setRoom, guest, notify }) {
    const scenes = [
      { k: 'bright', label: 'Bright', icon: I.sun },
      { k: 'ambient', label: 'Ambient', icon: I.sparkle },
      { k: 'reading', label: 'Reading', icon: I.search },
      { k: 'off', label: 'Off', icon: I.moon },
    ];
    const set = (patch) => setRoom({ ...room, ...patch });
    const services = [
      { k: 'house', label: 'Housekeeping', sub: 'Tidy the suite', icon: I.towel },
      { k: 'towels', label: 'Extra towels', sub: 'Delivered to door', icon: I.towel },
      { k: 'wake', label: 'Wake-up call', sub: 'Set for 7:00 AM', icon: I.bell },
      { k: 'valet', label: 'Valet parking', sub: 'Bring the car round', icon: I.car },
    ];

    return (
      <div style={{ minHeight: '100%', background: 'var(--bg-app)', paddingBottom: 130 }}>
        <U.TopBar title={'Room ' + guest.room} sub="Executive Suite" onBack={() => go('home')}
          right={<Badge tone={room.dnd ? 'offer' : 'success'} size="sm">{room.dnd ? 'Do not disturb' : 'Welcoming'}</Badge>} />

        <div style={{ padding: '0 30px' }}>
          {/* Master toggles */}
          <div style={{ borderRadius: 18, background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', overflow: 'hidden' }}>
            <ToggleRow icon={I.moon({ size: 21 })} label="Do Not Disturb" sub="Hold all visits & calls" on={room.dnd} onClick={() => set({ dnd: !room.dnd })} />
            <div style={{ height: 1, background: 'var(--border-subtle)', margin: '0 18px' }} />
            <ToggleRow icon={I.wifi({ size: 21 })} label="In-room Wi-Fi" sub="VillaIgiea_Suite412" on={room.wifi} onClick={() => set({ wifi: !room.wifi })} />
          </div>

          {/* Lighting scenes */}
          <U.SectionTitle>Lighting</U.SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
            {scenes.map((s) => {
              const on = room.scene === s.k;
              return (
                <button key={s.k} onClick={() => set({ scene: s.k })} style={{ cursor: 'pointer', padding: '18px 0', borderRadius: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
                  background: on ? 'var(--brand)' : 'var(--surface-card)', color: on ? 'var(--brand-contrast)' : 'var(--text-secondary)',
                  border: on ? '1px solid var(--brand)' : '1px solid var(--border-subtle)', transition: 'all var(--dur-fast)' }}>
                  {s.icon({ size: 24 })}
                  <span style={{ fontSize: 12.5, fontWeight: 600 }}>{s.label}</span>
                </button>
              );
            })}
          </div>

          {/* Climate */}
          <U.SectionTitle>Climate</U.SectionTitle>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '22px 24px', borderRadius: 18, background: 'var(--surface-card)', border: '1px solid var(--border-subtle)' }}>
            <span style={{ width: 48, height: 48, borderRadius: 14, background: 'var(--brand-soft)', color: 'var(--brand)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{I.thermo({ size: 24 })}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12.5, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.06em' }}>Temperature</div>
              <div style={{ fontFamily: 'var(--font-elegant)', fontWeight: 700, fontSize: 34, color: 'var(--text-primary)', lineHeight: 1, marginTop: 4 }}>{room.temp}°<span style={{ fontSize: 16, color: 'var(--text-secondary)' }}>C</span></div>
            </div>
            <U.Qty value={room.temp} onAdd={() => set({ temp: Math.min(28, room.temp + 1) })} onRemove={() => set({ temp: Math.max(16, room.temp - 1) })} />
          </div>

          {/* Quick toggles */}
          <U.SectionTitle>Suite</U.SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { k: 'curtains', label: 'Curtains', icon: I.curtain },
              { k: 'tv', label: 'Television', icon: I.tv },
            ].map((t) => {
              const on = room[t.k];
              return (
                <div key={t.k} role="button" tabIndex={0} onClick={() => set({ [t.k]: !on })} style={{ cursor: 'pointer', textAlign: 'left', padding: '18px 18px', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  background: 'var(--surface-card)', border: '1px solid var(--border-subtle)' }}>
                  <span style={{ display: 'inline-flex', flexDirection: 'column', gap: 12 }}>
                    <span style={{ color: on ? 'var(--brand)' : 'var(--text-secondary)' }}>{t.icon({ size: 24 })}</span>
                    <span style={{ fontWeight: 600, fontSize: 14.5, color: 'var(--text-primary)' }}>{t.label}</span>
                  </span>
                  <Toggle on={on} onClick={(e) => { e.stopPropagation(); set({ [t.k]: !on }); }} />
                </div>
              );
            })}
          </div>

          {/* Service requests */}
          <U.SectionTitle>Request service</U.SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {services.map((s) => (
              <button key={s.k} onClick={() => notify(s.label + ' requested')} style={{ cursor: 'pointer', textAlign: 'left', padding: 16, borderRadius: 16, display: 'flex', flexDirection: 'column', gap: 12,
                background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}>
                <span style={{ width: 42, height: 42, borderRadius: 12, background: 'var(--brand-soft)', color: 'var(--brand)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{s.icon({ size: 21 })}</span>
                <span><span style={{ display: 'block', fontWeight: 600, fontSize: 14.5 }}>{s.label}</span><span style={{ display: 'block', fontSize: 12, color: 'var(--text-secondary)', marginTop: 2 }}>{s.sub}</span></span>
              </button>
            ))}
          </div>

          {/* Concierge call CTA */}
          <button onClick={() => notify('Connecting you to the concierge…')} style={{ marginTop: 16, width: '100%', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 14, padding: '18px 20px', borderRadius: 16,
            background: 'linear-gradient(135deg, var(--brand-strong), #2a0c0c)', color: '#F5F2EE', border: 'none' }}>
            <span style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(255,255,255,.16)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{I.phone({ size: 21 })}</span>
            <span style={{ textAlign: 'left', flex: 1 }}><span style={{ display: 'block', fontWeight: 600, fontSize: 15 }}>Call the concierge</span><span style={{ display: 'block', fontSize: 12.5, opacity: .8, marginTop: 2 }}>Available 24 hours</span></span>
            {I.chevron({ size: 22 })}
          </button>
        </div>
      </div>
    );
  }

  window.VillaRoom = { Room };
})();
