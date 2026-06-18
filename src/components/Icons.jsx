import React from 'react';

const mk = (paths, o = {}) => (p) => (
  <svg width={(p && p.size) || o.size || 24} height={(p && p.size) || o.size || 24}
    viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth={o.sw || 1.6} strokeLinecap="round" strokeLinejoin="round"
    style={p && p.style} className={p && p.className}>{paths}</svg>
);

const VIcons = {
  key:      mk(<><circle cx="7.5" cy="15.5" r="4.5"/><path d="m10.5 12.5 8-8M16 6l2 2M19 3l2 2"/></>),
  home:     mk(<><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/></>),
  dining:   mk(<><path d="M3 2v7a3 3 0 0 0 6 0V2M6 2v20M16 2c-1.5 0-3 1.5-3 5s1.5 5 3 5v8"/></>),
  spa:      mk(<><path d="M12 22c4-3 8-7 8-12a8 8 0 0 0-16 0c0 5 4 9 8 12Z"/><path d="M12 22V10M9 13l3-3 3 3"/></>),
  room:     mk(<><rect x="3" y="11" width="18" height="9" rx="1.5"/><path d="M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M8 11V9h8v2"/></>),
  user:     mk(<><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>),
  moon:     mk(<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>),
  towel:    mk(<><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 3v18"/></>),
  phone:    mk(<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z"/>),
  bell:     mk(<><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></>),
  search:   mk(<><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></>),
  plus:     mk(<path d="M12 5v14M5 12h14"/>),
  minus:    mk(<path d="M5 12h14"/>),
  chevron:  mk(<path d="m9 6 6 6-6 6"/>),
  back:     mk(<path d="m15 6-6 6 6 6"/>),
  star:     mk(<path d="M12 3l2.6 5.6 6.1.7-4.5 4.1 1.2 6L12 16.9 6.6 19.4l1.2-6L3.3 9.3l6.1-.7L12 3z"/>),
  clock:    mk(<><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>),
  calendar: mk(<><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></>),
  users:    mk(<><circle cx="9" cy="8" r="3.2"/><path d="M3 20a6 6 0 0 1 12 0M16 5.5a3 3 0 0 1 0 5.8M21 20a5 5 0 0 0-3.5-4.8"/></>),
  check:    mk(<path d="M5 12.5l4.5 4.5L19 7"/>),
  checkBig: mk(<path d="M4 12.5l5 5L20 6.5"/>, { sw: 2 }),
  sun:      mk(<><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5.6 5.6 4.2 4.2M19.8 19.8l-1.4-1.4M18.4 5.6l1.4-1.4M4.2 19.8l1.4-1.4"/></>),
  thermo:   mk(<><path d="M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0Z"/><path d="M12 9v6"/></>),
  curtain:  mk(<><path d="M3 3h18M4 3v18c3 0 5-3 5-9S6 3 4 3M20 3v18c-3 0-5-3-5-9s3-9 5-9"/></>),
  tv:       mk(<><rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8M12 17v4"/></>),
  wifi:     mk(<><path d="M2 8.8a16 16 0 0 1 20 0M5 12.5a11 11 0 0 1 14 0M8.5 16a6 6 0 0 1 7 0"/><circle cx="12" cy="19.5" r=".6" fill="currentColor"/></>),
  car:      mk(<><path d="M5 13l1.5-4.5A2 2 0 0 1 8.4 7h7.2a2 2 0 0 1 1.9 1.5L19 13M5 13h14v4H5zM5 17v2M19 17v2"/><circle cx="8" cy="15" r=".7" fill="currentColor"/><circle cx="16" cy="15" r=".7" fill="currentColor"/></>),
  map:      mk(<><path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z"/><path d="M9 4v14M15 6v14"/></>),
  gift:     mk(<><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M5 12v9h14v-9M12 8v13M12 8S10.5 3 8 4.5 9.5 8 12 8ZM12 8s1.5-5 4-3.5S14.5 8 12 8Z"/></>),
  logout:   mk(<><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/></>),
  sparkle:  mk(<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/>),
  leaf:     mk(<><path d="M11 20A7 7 0 0 1 4 13c0-5 5-9 16-9 0 11-4 16-9 16Z"/><path d="M11 20c0-5 2-8 6-11"/></>),
  glass:    mk(<><path d="M6 3h12l-1 7a5 5 0 0 1-10 0L6 3ZM12 15v5M8 21h8"/></>),
  flame:    mk(<path d="M12 3s5 4 5 9a5 5 0 0 1-10 0c0-2 1-3 1-3s2 1 2 3c1-2 0-5 2-9Z"/>),
  arrowR:   mk(<path d="M5 12h14M13 6l6 6-6 6"/>),
};

export default VIcons;
