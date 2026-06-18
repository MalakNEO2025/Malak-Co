import React from 'react';
import { useTweaks, TweaksPanel, TweakSection, TweakColor, TweakRadio, TweakText } from './components/TweaksPanel';
import I from './components/Icons';
import { SignIn } from './screens/SignIn';
import { Home } from './screens/Home';
import { Dining, MenuDetail, Cart, OrderConfirmed } from './screens/Dining';
import { Spa, Booking, BookingConfirmed } from './screens/Spa';
import { Room } from './screens/Room';
import { Account } from './screens/Account';

const { BottomNav } = window.NEOLIFEDesignSystem_08f245;

const FONTS = {
  Georama: "'Georama', 'Inter', sans-serif",
  'Bricolage Grotesque': "'Bricolage Grotesque', 'Inter', sans-serif",
  Montserrat: "'Montserrat', 'Inter', sans-serif",
};

const TWEAK_DEFAULTS = {
  accent: ['#C0392B', '#8B1A1A'],
  displayFont: 'Bricolage Grotesque',
  venueName: 'Villa Igiea',
  venuePlace: 'Palermo, Sicily',
};

const ACCENTS = [
  ['#C0392B', '#8B1A1A'],
  ['#3B969A', '#035256'],
  ['#B08D57', '#7A5C2E'],
  ['#2F5D50', '#1C3B33'],
  ['#3E4C6B', '#222B40'],
];

const STORE_KEY = 'villa-igiea-app-v1';
const loadState = () => { try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch { return {}; } };
const DEFAULT_ROOM = { dnd: false, wifi: true, scene: 'ambient', temp: 22, curtains: true, tv: false };
const FOLIO = [
  { label: 'Executive Suite', when: '3 nights · 12–15 Jun', amount: 2940 },
  { label: 'Minibar', when: 'Yesterday · 21:40', amount: 48 },
  { label: 'Acquamarina Spa', when: 'Wednesday', amount: 220 },
];

export default function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const saved = React.useRef(loadState());
  const TOP = ['signin', 'home', 'dining', 'spa', 'room', 'account'];
  const initScreen = TOP.includes(saved.current.screen) ? saved.current.screen : (saved.current.authed ? 'home' : 'signin');

  const [screen, setScreen] = React.useState(initScreen);
  const [authed, setAuthed] = React.useState(!!saved.current.authed);
  const [guest, setGuest] = React.useState(saved.current.guest || { room: '412', name: 'Sami Al-Rashid' });
  const [cart, setCart] = React.useState(saved.current.cart || {});
  const [room, setRoom] = React.useState(saved.current.room || DEFAULT_ROOM);
  const [bookings, setBookings] = React.useState(saved.current.bookings || []);
  const [loyalty] = React.useState(4850);
  const [activeDish, setActiveDish] = React.useState('d1');
  const [activeExp, setActiveExp] = React.useState('x1');
  const [lastBooking, setLastBooking] = React.useState(null);
  const [toast, setToast] = React.useState(null);
  const [scale, setScale] = React.useState(1);
  const scrollRef = React.useRef(null);

  React.useEffect(() => {
    localStorage.setItem(STORE_KEY, JSON.stringify({ screen, authed, guest, cart, room, bookings }));
  }, [screen, authed, guest, cart, room, bookings]);

  React.useEffect(() => {
    const fit = () => {
      const m = 32;
      const s = Math.min((window.innerWidth - m) / 744, (window.innerHeight - m) / 1040, 1);
      setScale(s);
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);

  React.useEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = 0; }, [screen]);

  const go = React.useCallback((s) => setScreen(s), []);
  const notify = React.useCallback((msg) => { setToast(msg); }, []);
  React.useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 2400);
    return () => clearTimeout(id);
  }, [toast]);

  const addItem = (id) => setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
  const removeItem = (id) => setCart((c) => { const n = { ...c }; if (n[id] > 1) n[id]--; else delete n[id]; return n; });
  const clearCart = () => setCart({});
  const openItem = (id) => { setActiveDish(id); setScreen('menu'); };
  const openExp = (id) => { setActiveExp(id); setScreen('booking'); };
  const addBooking = (b) => { setLastBooking(b); setBookings((bs) => [...bs, b]); };
  const onAuth = (g) => setGuest((cur) => ({ ...cur, ...g, name: g.name && g.name.includes(' ') ? g.name : 'Sami ' + (g.name || 'Al-Rashid') }));
  const onSignOut = () => { setAuthed(false); setScreen('signin'); };

  const venue = { name: t.venueName, place: t.venuePlace };
  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  const navMap = { home: 'home', dining: 'dining', menu: 'dining', cart: 'dining', orderConfirmed: 'dining',
    spa: 'spa', booking: 'spa', bookingConfirmed: 'spa', room: 'room', account: 'account' };
  const showNav = ['home', 'dining', 'spa', 'room', 'account'].includes(screen);

  let content;
  switch (screen) {
    case 'signin':         content = <SignIn go={go} venue={venue} onAuth={(g) => { onAuth(g); setAuthed(true); }} />; break;
    case 'home':           content = <Home go={go} venue={venue} guest={guest} loyalty={loyalty} nightsLeft={2} />; break;
    case 'dining':         content = <Dining go={go} cart={cart} addItem={addItem} removeItem={removeItem} openItem={openItem} />; break;
    case 'menu':           content = <MenuDetail go={go} id={activeDish} cart={cart} addItem={addItem} removeItem={removeItem} />; break;
    case 'cart':           content = <Cart go={go} cart={cart} addItem={addItem} removeItem={removeItem} guest={guest} />; break;
    case 'orderConfirmed': content = <OrderConfirmed go={go} guest={guest} clearCart={clearCart} />; break;
    case 'spa':            content = <Spa go={go} openExp={openExp} />; break;
    case 'booking':        content = <Booking go={go} id={activeExp} addBooking={addBooking} />; break;
    case 'bookingConfirmed': content = <BookingConfirmed go={go} lastBooking={lastBooking} />; break;
    case 'room':           content = <Room go={go} room={room} setRoom={setRoom} guest={guest} notify={notify} />; break;
    case 'account':        content = <Account go={go} guest={guest} loyalty={loyalty} bookings={bookings} folio={FOLIO} nightsLeft={2} onSignOut={onSignOut} />; break;
    default:               content = <Home go={go} venue={venue} guest={guest} loyalty={loyalty} nightsLeft={2} />;
  }

  const navItems = [
    { key: 'home', icon: I.home({ size: 24 }) },
    { key: 'dining', icon: I.dining({ size: 24 }) },
    { key: 'spa', icon: I.spa({ size: 24 }) },
    { key: 'room', icon: I.room({ size: 24 }) },
    { key: 'account', icon: I.user({ size: 24 }) },
  ];

  const themeVars = {
    '--brand': t.accent[0],
    '--brand-strong': t.accent[1],
    '--hotel-red': t.accent[0],
    '--hotel-maroon': t.accent[1],
    '--brand-soft': t.accent[0] + '24',
    '--focus-ring': t.accent[0],
    '--font-elegant': FONTS[t.displayFont] || FONTS.Georama,
  };

  return (
    <>
      <div className="stage">
        <div className="device theme-hotel" style={{ transform: `scale(${scale})`, ...themeVars }}>
          <div className="scroll" ref={scrollRef}>{content}</div>

          {showNav && (
            <div className="navwrap">
              <BottomNav
                variant="pill"
                items={navItems}
                active={navMap[screen]}
                onChange={(k) => go(k === 'dining' && cartCount ? 'dining' : k)}
                style={{ background: 'rgba(35,32,32,.9)', backdropFilter: 'blur(16px)', border: '1px solid var(--border-subtle)' }}
              />
            </div>
          )}

          {toast && (
            <div style={{ position: 'absolute', top: 26, left: '50%', transform: 'translateX(-50%)', zIndex: 40,
              background: 'rgba(35,32,32,.96)', backdropFilter: 'blur(12px)', color: '#F5F2EE', borderRadius: 999,
              padding: '12px 22px', fontSize: 14, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 10,
              border: '1px solid var(--border-subtle)', boxShadow: '0 12px 36px rgba(0,0,0,.5)', animation: 'toastIn .28s var(--ease-out)', whiteSpace: 'nowrap' }}>
              <span style={{ color: 'var(--status-success)', display: 'inline-flex' }}>{I.check({ size: 18 })}</span>{toast}
            </div>
          )}
        </div>
      </div>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Brand" />
        <TweakColor label="Accent" value={t.accent} options={ACCENTS} onChange={(v) => setTweak('accent', v)} />
        <TweakSection label="Typography" />
        <TweakRadio label="Display font" value={t.displayFont}
          options={['Georama', 'Bricolage Grotesque', 'Montserrat']} onChange={(v) => setTweak('displayFont', v)} />
        <TweakSection label="Venue" />
        <TweakText label="Name" value={t.venueName} onChange={(v) => setTweak('venueName', v)} />
        <TweakText label="Location" value={t.venuePlace} onChange={(v) => setTweak('venuePlace', v)} />
      </TweaksPanel>
    </>
  );
}
