import React from 'react';
import I from '../components/Icons';

const { Button, Badge, Avatar } = window.NEOLIFEDesignSystem_08f245;

function QuickTile({ icon, label, sub, onClick }) {
  return (
    <button onClick={onClick} style={{ flex: 1, minWidth: 0, textAlign: 'left', cursor: 'pointer',
      background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 18,
      padding: '16px 16px 18px', display: 'flex', flexDirection: 'column', gap: 22, color: 'var(--text-primary)',
      transition: 'transform var(--dur-fast) var(--ease-out), border-color var(--dur-fast)' }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = 'var(--border-strong)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}>
      <span style={{ width: 40, height: 40, borderRadius: 12, background: 'var(--brand-soft)', color: 'var(--brand)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</span>
      <div>
        <div style={{ fontWeight: 600, fontSize: 15 }}>{label}</div>
        <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 3 }}>{sub}</div>
      </div>
    </button>
  );
}

export function Home({ go, venue, guest, loyalty, nightsLeft }) {
  const hour = new Date().getHours();
  const greet = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
  const first = (guest.name || 'Guest').split(' ')[0];
  return (
    <div style={{ minHeight: '100%', background: 'var(--bg-app)', paddingBottom: 130 }}>
      {/* Header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, padding: '30px 30px 0' }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: 'var(--font-elegant)', fontSize: 13, letterSpacing: '.06em', color: 'var(--text-secondary)' }}>{venue.name} · {venue.place}</div>
          <div style={{ fontFamily: 'var(--font-elegant)', fontWeight: 700, fontSize: 32, color: 'var(--text-primary)', marginTop: 8, lineHeight: 1.1, whiteSpace: 'nowrap' }}>{greet},</div>
          <div style={{ fontFamily: 'var(--font-elegant)', fontWeight: 700, fontSize: 32, color: 'var(--brand)', lineHeight: 1.1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{first}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 12, color: 'var(--text-secondary)', fontSize: 13.5 }}>
            <span style={{ color: 'var(--brand)' }}>{I.key({ size: 17 })}</span>
            Room {guest.room} <span style={{ width: 5, height: 5, borderRadius: 99, background: 'var(--text-muted)' }} /> Executive Suite
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button aria-label="Notifications" style={{ width: 44, height: 44, borderRadius: 999, border: '1px solid var(--border-subtle)', background: 'var(--surface-card)', color: 'var(--text-primary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', position: 'relative' }}>
            {I.bell({ size: 20 })}
            <span style={{ position: 'absolute', top: 11, right: 12, width: 7, height: 7, borderRadius: 99, background: 'var(--hotel-red)' }} />
          </button>
          <button onClick={() => go('account')} aria-label="Profile" style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
            <Avatar name={guest.name} size={44} />
          </button>
        </div>
      </header>

      {/* Tonight hero */}
      <div style={{ margin: '24px 30px 0', height: 280, borderRadius: 24, overflow: 'hidden', position: 'relative' }}>
        <img src="/assets/hotel-bar-hero.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(18,16,15,.9) 12%, rgba(18,16,15,.25) 72%)' }} />
        <div style={{ position: 'absolute', left: 28, top: 28, right: 28, color: '#F5F2EE' }}>
          <Badge tone="dark" style={{ background: 'rgba(255,255,255,.16)', backdropFilter: 'blur(4px)' }}>Tonight at {venue.name}</Badge>
          <div style={{ fontFamily: 'var(--font-elegant)', fontWeight: 700, fontSize: 34, lineHeight: 1.05, marginTop: 14, maxWidth: 360 }}>Rooftop dinner under the stars</div>
          <div style={{ fontSize: 14, opacity: .85, marginTop: 10, maxWidth: 380, lineHeight: 1.45 }}>A six-course tasting at Aaila, our 14th-floor rooftop. Seatings from 7:30 PM.</div>
        </div>
        <div style={{ position: 'absolute', left: 28, bottom: 24, right: 28 }}>
          <Button variant="primary" onClick={() => go('dining')} iconRight={I.arrowR({ size: 18 })}>Reserve a table</Button>
        </div>
      </div>

      {/* Quick actions */}
      <div style={{ padding: '24px 30px 0' }}>
        <div style={{ display: 'flex', gap: 14 }}>
          <QuickTile icon={I.dining({ size: 21 })} label="In-room dining" sub="Order to Suite 412" onClick={() => go('dining')} />
          <QuickTile icon={I.spa({ size: 21 })} label="Spa & experiences" sub="Book your stay" onClick={() => go('spa')} />
        </div>
        <div style={{ display: 'flex', gap: 14, marginTop: 14 }}>
          <QuickTile icon={I.room({ size: 21 })} label="Room controls" sub="Lights · climate" onClick={() => go('room')} />
          <QuickTile icon={I.bell({ size: 21 })} label="Concierge" sub="We're here 24/7" onClick={() => go('room')} />
        </div>
      </div>

      {/* Your stay strip */}
      <div style={{ padding: '20px 30px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '18px 20px', borderRadius: 18,
          background: 'var(--surface-card)', border: '1px solid var(--border-subtle)' }}>
          <span style={{ width: 46, height: 46, borderRadius: 14, background: 'var(--brand-soft)', color: 'var(--brand)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{I.calendar({ size: 22 })}</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600, fontSize: 15, color: 'var(--text-primary)' }}>{nightsLeft} nights remaining</div>
            <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 2 }}>Checkout Sunday · 11:00 AM</div>
          </div>
          <button onClick={() => go('account')} style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--brand)', display: 'inline-flex' }}>{I.chevron({ size: 22 })}</button>
        </div>
      </div>

      {/* Loyalty card */}
      <div style={{ padding: '14px 30px 0' }}>
        <div style={{ borderRadius: 20, padding: '22px 24px', position: 'relative', overflow: 'hidden',
          background: 'linear-gradient(135deg, var(--brand-strong), #2a0c0c)', color: '#F5F2EE' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', opacity: .8 }}>{I.sparkle({ size: 15 })} Avelar Circle</div>
              <div style={{ fontFamily: 'var(--font-elegant)', fontWeight: 700, fontSize: 38, marginTop: 12 }}>{loyalty.toLocaleString()}</div>
              <div style={{ fontSize: 13, opacity: .82, marginTop: 2 }}>points · Gold member</div>
            </div>
            <Badge style={{ background: 'rgba(255,255,255,.18)', color: '#fff' }}>Gold</Badge>
          </div>
          <div style={{ marginTop: 18, height: 6, borderRadius: 99, background: 'rgba(255,255,255,.18)' }}>
            <div style={{ width: '68%', height: '100%', borderRadius: 99, background: '#F5F2EE' }} />
          </div>
          <div style={{ fontSize: 12.5, opacity: .8, marginTop: 10 }}>1,150 points to Platinum — earn on tonight's dining automatically.</div>
        </div>
      </div>
    </div>
  );
}
