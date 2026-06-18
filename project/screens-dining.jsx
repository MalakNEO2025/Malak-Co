/* Villa Igiea app — Dining flow. Exposes window.VillaDining = { Dining, MenuDetail, Cart, OrderConfirmed }. */
(function () {
  const NS = window.NEOLIFEDesignSystem_08f245;
  const { Button, Badge, Input, Chip, SummaryCard } = NS;
  const I = window.VIcons;
  const U = window.VUI;
  const D = window.VData;

  const dishIcon = (img) => {
    if (img === 'wine' || img === 'spark') return I.glass({ size: 22 });
    if (img === 'cannoli' || img === 'cassata') return I.sparkle({ size: 22 });
    return I.dining({ size: 22 });
  };
  const tagTone = (t) => t === 'Vegan' ? 'success' : t === "Chef's" ? 'offer' : 'neutral';

  // ---------- Dining list ----------
  function Dining({ go, cart, addItem, removeItem, openItem }) {
    const [q, setQ] = React.useState('');
    const [cat, setCat] = React.useState('All');
    const items = D.dining.filter((d) =>
      (cat === 'All' || d.cat === cat) &&
      (d.name.toLowerCase().includes(q.toLowerCase()) || d.desc.toLowerCase().includes(q.toLowerCase())));
    const count = Object.values(cart).reduce((a, b) => a + b, 0);
    const total = D.dining.reduce((s, d) => s + (cart[d.id] || 0) * d.price, 0);

    return (
      <div style={{ minHeight: '100%', background: 'var(--bg-app)', paddingBottom: count ? 200 : 130 }}>
        <U.TopBar title="Dining" sub="Florio Restaurant" onBack={() => go('home')} />

        {/* Restaurant banner */}
        <div style={{ margin: '0 30px', height: 168, borderRadius: 22, overflow: 'hidden', position: 'relative' }}>
          <img src="assets/hotel-bar-hero.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(18,16,15,.2), rgba(18,16,15,.85))' }} />
          <div style={{ position: 'absolute', left: 22, bottom: 18, right: 22, color: '#F5F2EE' }}>
            <div style={{ fontFamily: 'var(--font-elegant)', fontWeight: 700, fontSize: 26 }}>Florio Restaurant</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 6, fontSize: 13, opacity: .9 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, color: 'var(--status-warning)' }}>{I.star({ size: 14 })} 4.9</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>{I.clock({ size: 14 })} Open · until 23:30</span>
            </div>
          </div>
        </div>

        {/* Search */}
        <div style={{ padding: '18px 30px 0' }}>
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search the menu" icon={<span style={{ color: 'var(--text-muted)', display: 'inline-flex' }}>{I.search({ size: 19 })}</span>} />
        </div>

        {/* Category chips */}
        <div style={{ display: 'flex', gap: 10, overflowX: 'auto', padding: '16px 30px 4px', scrollbarWidth: 'none' }}>
          {D.diningCats.map((c) => <Chip key={c} selected={cat === c} onClick={() => setCat(c)}>{c}</Chip>)}
        </div>

        {/* Items */}
        <div style={{ padding: '12px 30px 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {items.map((d) => {
            const qn = cart[d.id] || 0;
            return (
              <div key={d.id} style={{ display: 'flex', gap: 14, padding: 14, borderRadius: 18,
                background: 'var(--surface-card)', border: '1px solid var(--border-subtle)' }}>
                <button onClick={() => openItem(d.id)} aria-label={d.name} style={{ width: 64, height: 64, flexShrink: 0, borderRadius: 14, border: '1px solid var(--border-subtle)',
                  background: 'var(--surface-raised)', color: 'var(--brand)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  {dishIcon(d.img)}
                </button>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div onClick={() => openItem(d.id)} style={{ cursor: 'pointer' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontWeight: 600, fontSize: 15.5, color: 'var(--text-primary)' }}>{d.name}</span>
                      {d.tag && <Badge tone={tagTone(d.tag)} size="sm">{d.tag}</Badge>}
                    </div>
                    <div style={{ fontSize: 12.5, color: 'var(--text-secondary)', marginTop: 4, lineHeight: 1.4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{d.desc}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 16, color: 'var(--text-primary)' }}>{U.fmt(d.price)}</span>
                    {qn === 0
                      ? <U.IconPill icon={I.plus({ size: 20 })} label={'Add ' + d.name} onClick={() => addItem(d.id)} />
                      : <U.Qty value={qn} small onAdd={() => addItem(d.id)} onRemove={() => removeItem(d.id)} />}
                  </div>
                </div>
              </div>
            );
          })}
          {items.length === 0 && <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '40px 0', fontSize: 14 }}>No dishes match your search.</div>}
        </div>

        {count > 0 && <ViewOrderBar count={count} total={total} onClick={() => go('cart')} />}
      </div>
    );
  }

  function ViewOrderBar({ count, total, onClick }) {
    return (
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 96, display: 'flex', justifyContent: 'center', padding: '0 24px', pointerEvents: 'none' }}>
        <button onClick={onClick} style={{ pointerEvents: 'auto', width: '100%', maxWidth: 520, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '14px 18px 14px 22px', borderRadius: 999, border: 'none', cursor: 'pointer',
          background: 'var(--brand)', color: 'var(--brand-contrast)', boxShadow: '0 10px 30px rgba(0,0,0,.4)' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12, fontWeight: 600, fontSize: 15 }}>
            <span style={{ width: 28, height: 28, borderRadius: 99, background: 'rgba(255,255,255,.22)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontFamily: 'var(--font-mono)' }}>{count}</span>
            View order
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 16 }}>{U.fmt(total)} {I.arrowR({ size: 18 })}</span>
        </button>
      </div>
    );
  }

  // ---------- Menu detail ----------
  function MenuDetail({ go, id, cart, addItem, removeItem }) {
    const d = D.dining.find((x) => x.id === id) || D.dining[0];
    const qn = cart[d.id] || 0;
    return (
      <div style={{ minHeight: '100%', background: 'var(--bg-app)', paddingBottom: 150 }}>
        <div style={{ position: 'relative', height: 300 }}>
          <div style={{ width: '100%', height: '100%', background: 'linear-gradient(150deg, var(--surface-raised), var(--surface-card))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand)' }}>
            {React.cloneElement(dishIcon(d.img), { size: 86 })}
          </div>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(18,16,15,.35), transparent 30%)' }} />
          <button onClick={() => go('dining')} aria-label="Back" style={{ position: 'absolute', top: 28, left: 30, width: 44, height: 44, borderRadius: 999, border: 'none', background: 'rgba(18,16,15,.55)', backdropFilter: 'blur(6px)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>{I.back({ size: 22 })}</button>
        </div>

        <div style={{ padding: '24px 30px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Badge size="sm">{d.cat}</Badge>
            {d.tag && <Badge tone={tagTone(d.tag)} size="sm">{d.tag}</Badge>}
          </div>
          <div style={{ fontFamily: 'var(--font-elegant)', fontWeight: 700, fontSize: 30, color: 'var(--text-primary)', marginTop: 14, lineHeight: 1.05 }}>{d.name}</div>
          <div style={{ fontSize: 15, color: 'var(--text-secondary)', marginTop: 12, lineHeight: 1.55 }}>{d.desc}</div>

          <div style={{ marginTop: 22, padding: '16px 18px', borderRadius: 16, background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ color: 'var(--brand)' }}>{I.glass({ size: 20 })}</span>
            <span style={{ fontSize: 13.5, color: 'var(--text-secondary)' }}>Sommelier pairing: <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Etna Bianco DOC</span>, by the glass</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 26 }}>
            <div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', letterSpacing: '.06em', textTransform: 'uppercase' }}>Price</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 26, color: 'var(--text-primary)', marginTop: 4 }}>{U.fmt(d.price)}</div>
            </div>
            {qn > 0 && <U.Qty value={qn} onAdd={() => addItem(d.id)} onRemove={() => removeItem(d.id)} />}
          </div>
        </div>

        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 96, padding: '0 30px' }}>
          <Button variant="primary" size="lg" fullWidth onClick={() => { addItem(d.id); go('cart'); }} iconRight={I.arrowR({ size: 20 })}>
            Add to order · {U.fmt(d.price * (qn || 1))}
          </Button>
        </div>
      </div>
    );
  }

  // ---------- Cart ----------
  function Cart({ go, cart, addItem, removeItem, guest }) {
    const lines = D.dining.filter((d) => cart[d.id]);
    const subtotal = lines.reduce((s, d) => s + cart[d.id] * d.price, 0);
    const service = Math.round(subtotal * 0.12);
    const total = subtotal + service;
    const [time, setTime] = React.useState('As soon as possible');
    const times = ['As soon as possible', 'In 30 minutes', 'In 1 hour', 'At 8:00 PM'];

    if (lines.length === 0) {
      return (
        <div style={{ minHeight: '100%', background: 'var(--bg-app)' }}>
          <U.TopBar title="Your order" sub="Room service" onBack={() => go('dining')} />
          <div style={{ textAlign: 'center', padding: '90px 40px', color: 'var(--text-secondary)' }}>
            <div style={{ color: 'var(--text-muted)', display: 'flex', justifyContent: 'center' }}>{I.dining({ size: 48 })}</div>
            <div style={{ fontFamily: 'var(--font-elegant)', fontWeight: 700, fontSize: 22, color: 'var(--text-primary)', marginTop: 18 }}>Your order is empty</div>
            <div style={{ fontSize: 14, marginTop: 8 }}>Browse Florio's menu to begin.</div>
            <div style={{ marginTop: 22 }}><Button variant="primary" onClick={() => go('dining')}>Open the menu</Button></div>
          </div>
        </div>
      );
    }

    return (
      <div style={{ minHeight: '100%', background: 'var(--bg-app)', paddingBottom: 150 }}>
        <U.TopBar title="Your order" sub="Room service" onBack={() => go('dining')} />
        <div style={{ padding: '0 30px' }}>
          {/* Lines */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {lines.map((d) => (
              <div key={d.id} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 14, borderRadius: 16, background: 'var(--surface-card)', border: '1px solid var(--border-subtle)' }}>
                <span style={{ width: 48, height: 48, flexShrink: 0, borderRadius: 12, background: 'var(--surface-raised)', color: 'var(--brand)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{dishIcon(d.img)}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: 14.5, color: 'var(--text-primary)' }}>{d.name}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13.5, color: 'var(--text-secondary)', marginTop: 3 }}>{U.fmt(d.price)} each</div>
                </div>
                <U.Qty value={cart[d.id]} small onAdd={() => addItem(d.id)} onRemove={() => removeItem(d.id)} />
              </div>
            ))}
          </div>

          {/* Delivery time */}
          <U.SectionTitle>Deliver</U.SectionTitle>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {times.map((t) => <Chip key={t} selected={time === t} onClick={() => setTime(t)}>{t}</Chip>)}
          </div>

          {/* Summary */}
          <div style={{ marginTop: 24 }}>
            <SummaryCard title="Order summary"
              rows={[{ label: 'Subtotal', value: U.fmt(subtotal) }, { label: 'Service (12%)', value: U.fmt(service) }, { label: 'Delivery', value: 'Complimentary' }]}
              total={U.fmt(total)} totalLabel="Charge to room" />
          </div>

          <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 12, padding: '14px 18px', borderRadius: 16, background: 'var(--surface-card)', border: '1px solid var(--border-subtle)' }}>
            <span style={{ color: 'var(--brand)' }}>{I.key({ size: 20 })}</span>
            <span style={{ fontSize: 13.5, color: 'var(--text-secondary)' }}>Billed to <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Room {guest.room}</span> · settled at checkout</span>
          </div>
        </div>

        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 96, padding: '0 30px' }}>
          <Button variant="primary" size="lg" fullWidth onClick={() => go('orderConfirmed')} iconRight={I.arrowR({ size: 20 })}>
            Confirm order · {U.fmt(total)}
          </Button>
        </div>
      </div>
    );
  }

  // ---------- Order confirmed ----------
  function OrderConfirmed({ go, guest, clearCart }) {
    const ref = React.useMemo(() => 'FL-' + Math.floor(1000 + Math.random() * 9000), []);
    return (
      <div style={{ minHeight: '100%', background: 'var(--bg-app)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 36px', textAlign: 'center' }}>
        <div style={{ width: 96, height: 96, borderRadius: 999, background: 'var(--status-success)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 36px rgba(0,197,144,.4)' }}>{I.checkBig({ size: 48 })}</div>
        <div style={{ fontFamily: 'var(--font-elegant)', fontWeight: 700, fontSize: 30, color: 'var(--text-primary)', marginTop: 26, lineHeight: 1.1, whiteSpace: 'nowrap' }}>Order confirmed</div>
        <div style={{ fontSize: 15, color: 'var(--text-secondary)', marginTop: 10, maxWidth: 380, lineHeight: 1.5 }}>Florio is preparing your dinner. It will arrive at Suite {guest.room} shortly.</div>

        <div style={{ marginTop: 28, width: '100%', maxWidth: 420, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px', borderRadius: 16, background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', textAlign: 'left' }}>
            <span style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--brand-soft)', color: 'var(--brand)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{I.clock({ size: 22 })}</span>
            <div><div style={{ fontSize: 12, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.06em' }}>Estimated delivery</div><div style={{ fontWeight: 600, fontSize: 15, color: 'var(--text-primary)', marginTop: 3 }}>35–45 minutes</div></div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px', borderRadius: 16, background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', textAlign: 'left' }}>
            <span style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--brand-soft)', color: 'var(--brand)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{I.bell({ size: 22 })}</span>
            <div><div style={{ fontSize: 12, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.06em' }}>Reference</div><div style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 15, color: 'var(--text-primary)', marginTop: 3 }}>{ref}</div></div>
          </div>
        </div>

        <div style={{ marginTop: 28, width: '100%', maxWidth: 420 }}>
          <Button variant="primary" size="lg" fullWidth onClick={() => { clearCart(); go('home'); }}>Back to your stay</Button>
        </div>
      </div>
    );
  }

  window.VillaDining = { Dining, MenuDetail, Cart, OrderConfirmed };
})();
