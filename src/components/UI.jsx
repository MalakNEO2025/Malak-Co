import React from 'react';
import I from './Icons';

export const fmt = (n) => '$' + Number(n).toFixed(0);

export function Screen({ children, pad = true, style = {} }) {
  return (
    <div style={{ minHeight: '100%', background: 'var(--bg-app)', paddingBottom: 130, ...style }}>
      <div style={{ padding: pad ? '0 30px' : 0 }}>{children}</div>
    </div>
  );
}

export function TopBar({ title, sub, onBack, right }) {
  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 5, background: 'var(--bg-app)',
      display: 'flex', alignItems: 'center', gap: 14, padding: '26px 30px 16px' }}>
      {onBack && (
        <button onClick={onBack} aria-label="Back" style={{ width: 44, height: 44, flexShrink: 0, borderRadius: 999,
          border: '1px solid var(--border-strong)', background: 'var(--surface-card)', color: 'var(--text-primary)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          {I.back({ size: 22 })}
        </button>
      )}
      <div style={{ flex: 1, minWidth: 0 }}>
        {sub && <div style={{ fontFamily: 'var(--font-elegant)', fontSize: 12, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{sub}</div>}
        <div style={{ fontFamily: 'var(--font-elegant)', fontWeight: 700, fontSize: 28, color: 'var(--text-primary)', marginTop: sub ? 4 : 0, lineHeight: 1.05 }}>{title}</div>
      </div>
      {right}
    </div>
  );
}

export function SectionTitle({ children, action }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', margin: '28px 0 14px' }}>
      <div style={{ fontFamily: 'var(--font-elegant)', fontWeight: 700, fontSize: 21, color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>{children}</div>
      {action}
    </div>
  );
}

export function Qty({ value, onAdd, onRemove, small }) {
  const s = small ? 30 : 36;
  const btn = {
    width: s, height: s, borderRadius: 999, border: '1px solid var(--border-strong)',
    background: 'transparent', color: 'var(--text-primary)', cursor: 'pointer',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
  };
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: small ? 10 : 14 }}>
      <button style={btn} onClick={onRemove} aria-label="Remove one">{I.minus({ size: small ? 16 : 18 })}</button>
      <span style={{ minWidth: 18, textAlign: 'center', fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 16, color: 'var(--text-primary)' }}>{value}</span>
      <button style={{ ...btn, background: 'var(--brand)', color: 'var(--brand-contrast)', border: '1px solid var(--brand)' }} onClick={onAdd} aria-label="Add one">{I.plus({ size: small ? 16 : 18 })}</button>
    </div>
  );
}

export function IconPill({ icon, onClick, label, brand = true }) {
  return (
    <button onClick={onClick} aria-label={label} style={{ width: 44, height: 44, borderRadius: 999, cursor: 'pointer',
      border: brand ? '1px solid var(--brand)' : '1px solid var(--border-strong)',
      background: brand ? 'var(--brand)' : 'var(--surface-card)', color: brand ? 'var(--brand-contrast)' : 'var(--text-primary)',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      {icon}
    </button>
  );
}
