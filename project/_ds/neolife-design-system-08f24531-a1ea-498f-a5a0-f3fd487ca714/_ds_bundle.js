/* @ds-bundle: {"format":3,"namespace":"NEOLIFEDesignSystem_08f245","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"BottomNav","sourcePath":"components/navigation/BottomNav.jsx"},{"name":"Stepper","sourcePath":"components/navigation/Stepper.jsx"},{"name":"MenuCard","sourcePath":"components/patterns/MenuCard.jsx"},{"name":"ServiceTile","sourcePath":"components/patterns/ServiceTile.jsx"},{"name":"StatCard","sourcePath":"components/patterns/StatCard.jsx"},{"name":"SummaryCard","sourcePath":"components/patterns/SummaryCard.jsx"},{"name":"VenueCard","sourcePath":"components/patterns/VenueCard.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"2453bd4efe5c","components/core/Badge.jsx":"027d8175ac4b","components/core/Button.jsx":"71a9a51a0be9","components/core/Card.jsx":"5f180c498a8c","components/core/Chip.jsx":"0b8fe207c7d3","components/forms/Checkbox.jsx":"c8465b6fc3df","components/forms/Input.jsx":"5e2b187eccc2","components/navigation/BottomNav.jsx":"14457f3b5a44","components/navigation/Stepper.jsx":"5840b5559736","components/patterns/MenuCard.jsx":"abbf3a74388f","components/patterns/ServiceTile.jsx":"e280c9bc836b","components/patterns/StatCard.jsx":"f2b0ccc2a961","components/patterns/SummaryCard.jsx":"bd0f5ed34488","components/patterns/VenueCard.jsx":"e8b507f3687d","ui_kits/hotel/screens.jsx":"b25ec114ec7c","ui_kits/landing/screens.jsx":"c1831ab8f1a1","ui_kits/medical/screens.jsx":"1c87fc6a8761","ui_kits/restaurant/screens.jsx":"4dd4597027dc"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NEOLIFEDesignSystem_08f245 = window.NEOLIFEDesignSystem_08f245 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NEOLIFE Avatar — circular identity token. Renders an image, or
 * initials on a tinted disc when no src is given.
 */
function Avatar({
  src,
  name = '',
  size = 40,
  tone = 'brand',
  style = {},
  ...rest
}) {
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join('');
  const tones = {
    brand: {
      bg: 'var(--brand-soft)',
      fg: 'var(--brand)'
    },
    neutral: {
      bg: 'var(--slate-100)',
      fg: 'var(--slate-500)'
    },
    dark: {
      bg: 'var(--base-black-2)',
      fg: '#fff'
    }
  };
  const t = tones[tone] || tones.brand;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      flexShrink: 0,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: src ? 'transparent' : t.bg,
      color: t.fg,
      fontFamily: 'var(--font-ui)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: Math.round(size * 0.4),
      lineHeight: 1,
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '?');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NEOLIFE Badge — small status / promo pill.
 * Used for menu offers ("10% Off", "25% Cashback"), statuses, counts.
 */
function Badge({
  children,
  tone = 'neutral',
  size = 'md',
  solid = true,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      bg: 'var(--brand-soft)',
      fg: 'var(--brand)'
    },
    brand: {
      bg: 'var(--brand)',
      fg: 'var(--brand-contrast)'
    },
    offer: {
      bg: 'var(--status-error-soft)',
      fg: '#fff'
    },
    success: {
      bg: 'var(--status-success)',
      fg: '#fff'
    },
    cashback: {
      bg: 'var(--rest-green, #4D701F)',
      fg: '#fff'
    },
    warning: {
      bg: 'var(--status-warning)',
      fg: '#fff'
    },
    dark: {
      bg: 'rgba(20,17,15,0.7)',
      fg: '#fff'
    }
  };
  const t = tones[tone] || tones.neutral;
  const pad = size === 'sm' ? '3px 8px' : '5px 12px';
  const fs = size === 'sm' ? 'var(--fs-3xs)' : 'var(--fs-xs)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      padding: pad,
      borderRadius: 'var(--r-pill)',
      fontFamily: 'var(--font-ui)',
      fontWeight: 'var(--fw-bold)',
      fontSize: fs,
      lineHeight: 1,
      letterSpacing: '0.01em',
      background: solid ? t.bg : 'transparent',
      color: solid ? t.fg : t.bg,
      border: solid ? 'none' : `1px solid ${t.bg}`,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NEOLIFE Button — pill-shaped action used across every vertical.
 * Re-themes automatically via --brand on a .theme-* scope.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  shape = 'pill',
  icon = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '0 14px',
      height: 34,
      fontSize: 'var(--fs-xs)',
      gap: 6
    },
    md: {
      padding: '0 22px',
      height: 44,
      fontSize: 'var(--fs-body)',
      gap: 8
    },
    lg: {
      padding: '0 30px',
      height: 56,
      fontSize: 'var(--fs-body-lg)',
      gap: 10
    }
  };
  const radius = shape === 'pill' ? 'var(--r-pill)' : 'var(--r-md)';
  const variants = {
    primary: {
      background: 'var(--brand)',
      color: 'var(--brand-contrast)',
      border: 'none'
    },
    gradient: {
      background: 'var(--neo-gradient)',
      color: '#fff',
      border: 'none'
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--brand)',
      border: 'none'
    },
    outline: {
      background: 'transparent',
      color: 'var(--brand)',
      border: '1.5px solid var(--brand)'
    },
    dark: {
      background: 'var(--base-black-2)',
      color: '#fff',
      border: 'none'
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      width: fullWidth ? '100%' : 'auto',
      fontFamily: 'var(--font-ui)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: s.fontSize,
      lineHeight: 1,
      letterSpacing: '0.01em',
      borderRadius: radius,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'filter var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
      whiteSpace: 'nowrap',
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.filter = 'none';
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = 'brightness(0.94)';
    }
  }, rest), icon, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NEOLIFE Card — generic rounded surface. The base container behind
 * menu items, service tiles, info panels. Three elevation levels.
 */
function Card({
  children,
  elevation = 'card',
  padding = 16,
  radius = 'var(--r-lg)',
  style = {},
  ...rest
}) {
  const shadows = {
    flat: 'none',
    card: 'var(--shadow-card)',
    raised: 'var(--shadow-md)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      borderRadius: radius,
      padding,
      boxShadow: shadows[elevation] ?? shadows.card,
      border: elevation === 'flat' ? '1px solid var(--border-subtle)' : 'none',
      boxSizing: 'border-box',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NEOLIFE Chip — selectable filter / category token with optional icon.
 * Mirrors the restaurant filter list ("Vegan", "Halal", "Spicy").
 */
function Chip({
  children,
  icon = null,
  selected = false,
  onClick,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 14px',
      borderRadius: 'var(--r-pill)',
      fontFamily: 'var(--font-ui)',
      fontWeight: 'var(--fw-medium)',
      fontSize: 'var(--fs-xs)',
      lineHeight: 1,
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      transition: 'all var(--dur-fast) var(--ease-out)',
      background: selected ? 'var(--brand)' : 'var(--surface-card)',
      color: selected ? 'var(--brand-contrast)' : 'var(--text-secondary)',
      border: selected ? '1px solid var(--brand)' : '1px solid var(--border-subtle)',
      ...style
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NEOLIFE Checkbox — rounded-square check used in the menu filter list.
 * Brand-filled when checked.
 */
function Checkbox({
  checked = false,
  label,
  onChange,
  icon = null,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-secondary)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 18,
      height: 18,
      flexShrink: 0,
      borderRadius: 5,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: checked ? 'var(--brand)' : 'var(--surface-card)',
      border: checked ? '1px solid var(--brand)' : '1px solid var(--border-strong)',
      transition: 'all var(--dur-fast) var(--ease-out)'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2L4.8 8.5L9.5 3.5",
    stroke: "#fff",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), icon, label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NEOLIFE Input — rounded text field. Supports a leading prefix slot
 * (e.g. the "+216" country tag on the hotel loyalty form) and icons.
 */
function Input({
  prefix = null,
  icon = null,
  size = 'md',
  style = {},
  containerStyle = {},
  ...rest
}) {
  const heights = {
    sm: 40,
    md: 52,
    lg: 60
  };
  const h = heights[size] || heights.md;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: h,
      padding: prefix ? '6px 6px 6px 6px' : '0 18px',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--r-md)',
      boxSizing: 'border-box',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      ...containerStyle
    },
    onFocusCapture: e => {
      e.currentTarget.style.borderColor = 'var(--focus-ring)';
      e.currentTarget.style.boxShadow = 'var(--shadow-focus)';
    },
    onBlurCapture: e => {
      e.currentTarget.style.borderColor = 'var(--border-subtle)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: '100%',
      padding: '0 14px',
      background: 'var(--slate-100)',
      borderRadius: 'calc(var(--r-md) - 4px)',
      fontFamily: 'var(--font-ui)',
      fontWeight: 'var(--fw-medium)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-secondary)',
      whiteSpace: 'nowrap'
    }
  }, prefix), icon, /*#__PURE__*/React.createElement("input", _extends({
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-primary)',
      height: '100%',
      ...style
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomNav.jsx
try { (() => {
/**
 * NEOLIFE BottomNav — the floating pill tab bar used at the base of
 * every guest app. Active item gets a brand-tinted disc.
 *
 * `items`: [{ key, icon, label? }]. Pass `variant="bar"` for the flat,
 * full-width clinic style; default "pill" is the floating restaurant style.
 */
function BottomNav({
  items = [],
  active,
  onChange,
  variant = 'pill',
  style = {}
}) {
  const isPill = variant === 'pill';
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: isPill ? 'space-around' : 'space-between',
      gap: isPill ? 24 : 0,
      padding: isPill ? '10px 26px' : '12px 36px',
      margin: isPill ? '0 auto' : 0,
      width: isPill ? 'fit-content' : '100%',
      background: 'var(--surface-card)',
      borderRadius: isPill ? 'var(--r-pill)' : 'var(--r-xl) var(--r-xl) 0 0',
      boxShadow: isPill ? 'var(--shadow-nav)' : '0 -2px 12px rgba(0,0,0,0.04)',
      boxSizing: 'border-box',
      ...style
    }
  }, items.map(it => {
    const isActive = it.key === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.key,
      onClick: () => onChange && onChange(it.key),
      style: {
        display: 'flex',
        flexDirection: variant === 'bar' ? 'column' : 'row',
        alignItems: 'center',
        gap: variant === 'bar' ? 4 : 0,
        border: 'none',
        cursor: 'pointer',
        background: 'transparent',
        padding: 0,
        color: isActive ? 'var(--brand)' : 'var(--text-muted)',
        fontFamily: 'var(--font-ui)',
        fontSize: 'var(--fs-2xs)',
        fontWeight: isActive ? 'var(--fw-semibold)' : 'var(--fw-medium)',
        transition: 'color var(--dur-fast) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: isPill ? 52 : 28,
        height: isPill ? 52 : 28,
        borderRadius: '50%',
        background: isPill && isActive ? 'var(--brand-soft)' : 'transparent',
        color: isActive ? 'var(--brand)' : 'var(--text-muted)'
      }
    }, it.icon), variant === 'bar' && it.label);
  }));
}
Object.assign(__ds_scope, { BottomNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Stepper.jsx
try { (() => {
/**
 * NEOLIFE Stepper — horizontal progress journey (clinic check-in,
 * order tracking). `steps`: [{ label }]. `current` is the 0-based index
 * of the in-progress step; earlier steps render complete.
 */
function Stepper({
  steps = [],
  current = 0,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      width: '100%',
      ...style
    }
  }, steps.map((s, i) => {
    const done = i < current;
    const active = i === current;
    const reached = done || active;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        flexShrink: 0,
        width: 96
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30,
        height: 30,
        borderRadius: '50%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-ui)',
        fontSize: 'var(--fs-sm)',
        fontWeight: 'var(--fw-semibold)',
        background: done ? 'var(--status-success)' : active ? 'var(--surface-card)' : 'var(--surface-card)',
        color: done ? '#fff' : active ? 'var(--brand)' : 'var(--text-muted)',
        border: done ? 'none' : active ? '2px solid var(--brand)' : '1.5px solid var(--slate-200)',
        transition: 'all var(--dur-base) var(--ease-out)'
      }
    }, done ? /*#__PURE__*/React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 12 12",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M2.5 6.2L4.8 8.5L9.5 3.5",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })) : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: 'var(--fs-xs)',
        fontWeight: reached ? 'var(--fw-semibold)' : 'var(--fw-regular)',
        color: reached ? 'var(--text-primary)' : 'var(--text-muted)',
        textAlign: 'center',
        lineHeight: 1.2
      }
    }, s.label)), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 2,
        marginTop: 14,
        borderRadius: 2,
        background: i < current ? 'var(--status-success)' : 'var(--slate-200)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/patterns/MenuCard.jsx
try { (() => {
/**
 * NEOLIFE MenuCard — the restaurant menu item. Food image on top,
 * promo badge, name + description, add-button and price row.
 */
function MenuCard({
  image,
  name,
  description,
  price,
  oldPrice,
  badge,
  badgeTone = 'offer',
  onAdd,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      background: 'var(--surface-card)',
      borderRadius: 'var(--r-md)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-card)',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 150,
      background: 'var(--slate-100)'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : null, badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 10,
      left: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: badgeTone
  }, badge))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-ui)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-primary)'
    }
  }, name), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--fs-xs)',
      lineHeight: 1.35,
      color: 'var(--text-secondary)',
      minHeight: 32
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onAdd,
    "aria-label": `Add ${name}`,
    style: {
      width: 38,
      height: 38,
      borderRadius: 'var(--r-sm)',
      border: 'none',
      cursor: 'pointer',
      background: 'var(--brand)',
      color: 'var(--brand-contrast)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 22,
      lineHeight: 1
    }
  }, "+"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, oldPrice && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)',
      textDecoration: 'line-through'
    }
  }, oldPrice), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 'var(--fw-extrabold)',
      fontSize: 'var(--fs-h3)',
      color: 'var(--text-primary)'
    }
  }, price)))));
}
Object.assign(__ds_scope, { MenuCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/MenuCard.jsx", error: String((e && e.message) || e) }); }

// components/patterns/ServiceTile.jsx
try { (() => {
/**
 * NEOLIFE ServiceTile — icon-led quick action (clinic "Call for a nurse",
 * hotel "Wakeup Call"). Icon sits in a brand-tinted rounded square.
 */
function ServiceTile({
  icon,
  label,
  sublabel,
  onClick,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 12,
      padding: 16,
      width: '100%',
      textAlign: 'left',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--r-md)',
      cursor: 'pointer',
      transition: 'box-shadow var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
      boxSizing: 'border-box'
    },
    onMouseEnter: e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-card)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--r-sm)',
      background: 'var(--brand-soft)',
      color: 'var(--brand)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-primary)'
    }
  }, label), sublabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-secondary)'
    }
  }, sublabel)));
}
Object.assign(__ds_scope, { ServiceTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/ServiceTile.jsx", error: String((e && e.message) || e) }); }

// components/patterns/StatCard.jsx
try { (() => {
/**
 * NEOLIFE StatCard — glassy metric block from the landing hero
 * ("+10k / Happy customers"). Designed to sit on dark imagery.
 */
function StatCard({
  value,
  label,
  glass = true,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: 28,
      padding: '20px 18px',
      minHeight: 130,
      borderRadius: 'var(--r-lg)',
      background: glass ? 'rgba(255,255,255,0.08)' : 'var(--surface-card)',
      border: glass ? '1px solid rgba(255,255,255,0.12)' : '1px solid var(--border-subtle)',
      backdropFilter: glass ? 'blur(8px)' : 'none',
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-extrabold)',
      fontSize: 'var(--fs-display)',
      lineHeight: 1,
      color: glass ? '#fff' : 'var(--text-primary)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-body)',
      lineHeight: 1.2,
      color: glass ? 'rgba(255,255,255,0.85)' : 'var(--text-secondary)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/patterns/SummaryCard.jsx
try { (() => {
/**
 * NEOLIFE SummaryCard — the teal-gradient payment / total card shared
 * across checkout flows in every vertical. Rows of label/value plus a
 * highlighted total.
 */
function SummaryCard({
  title = 'Summary',
  rows = [],
  total,
  totalLabel = 'Total',
  footer,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--r-lg)',
      padding: 20,
      color: '#fff',
      background: 'var(--neo-gradient)',
      boxShadow: 'var(--shadow-md)',
      boxSizing: 'border-box',
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-title)',
      marginBottom: 14
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--fs-body)',
      color: 'rgba(255,255,255,0.82)'
    }
  }, /*#__PURE__*/React.createElement("span", null, r.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      color: '#fff'
    }
  }, r.value)))), total != null && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      paddingTop: 14,
      borderTop: '1px solid rgba(255,255,255,0.22)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-body-lg)'
    }
  }, totalLabel), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-h2)'
    }
  }, total)), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, footer));
}
Object.assign(__ds_scope, { SummaryCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/SummaryCard.jsx", error: String((e && e.message) || e) }); }

// components/patterns/VenueCard.jsx
try { (() => {
/**
 * NEOLIFE VenueCard — the landing "what kind of venue" category card.
 * Full-bleed image, dark protection gradient, eyebrow badge + title + copy.
 */
function VenueCard({
  image,
  eyebrow,
  title,
  description,
  onClick,
  height = 300,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      position: 'relative',
      display: 'block',
      width: '100%',
      height,
      padding: 0,
      border: 'none',
      cursor: 'pointer',
      borderRadius: 'var(--r-lg)',
      overflow: 'hidden',
      textAlign: 'left',
      background: 'var(--base-black-2)',
      ...style
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(20,17,15,0.15) 0%, rgba(20,17,15,0.35) 45%, rgba(20,17,15,0.92) 100%)'
    }
  }), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 14,
      left: 14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "dark",
    size: "sm"
  }, eyebrow)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-title)',
      color: '#fff',
      lineHeight: 1.15
    }
  }, title), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--fs-xs)',
      color: 'rgba(255,255,255,0.82)',
      lineHeight: 1.35
    }
  }, description)));
}
Object.assign(__ds_scope, { VenueCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/VenueCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hotel/screens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Villa Igiea — Hotel UI kit screens. Composes the NEOLIFE bundle.
   Exposes window.VillaScreens = { Home }. */
const HNS = window.NEOLIFEDesignSystem_08f245;
const {
  Button,
  Badge,
  Input,
  BottomNav
} = HNS;
const hsvg = (d, o = {}) => p => /*#__PURE__*/React.createElement("svg", _extends({
  width: o.w || 24,
  height: o.w || 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: o.sw || 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, p), d);
const hi = {
  key: hsvg(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "7.5",
    cy: "15.5",
    r: "4.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m10.5 12.5 8-8M16 6l2 2M19 3l2 2"
  }))),
  moon: hsvg(/*#__PURE__*/React.createElement("path", {
    d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"
  })),
  towel: hsvg(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "5",
    y: "3",
    width: "14",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 3v18"
  }))),
  phone: hsvg(/*#__PURE__*/React.createElement("path", {
    d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z"
  })),
  home: hsvg(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 10.5 12 3l9 7.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 9.5V21h14V9.5"
  }))),
  bell: hsvg(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.3 21a1.94 1.94 0 0 0 3.4 0"
  }))),
  spark: hsvg(/*#__PURE__*/React.createElement("path", {
    d: "M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"
  })),
  user: hsvg(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 21a8 8 0 0 1 16 0"
  })))
};
function VillaLogo() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-elegant)',
      fontWeight: 700,
      fontSize: 28,
      color: 'var(--hotel-maroon)',
      letterSpacing: '.02em'
    }
  }, "RF"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-elegant)',
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '.34em',
      color: 'var(--text-primary)',
      marginTop: 4
    }
  }, "VILLA\xA0IGIEA"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-elegant)',
      fontSize: 9,
      letterSpacing: '.5em',
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, "PALERMO"));
}
function RoomTile({
  icon,
  label,
  code = 'ROOM 412',
  onClick,
  active
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      flex: 1,
      minHeight: 150,
      borderRadius: 18,
      cursor: 'pointer',
      textAlign: 'left',
      background: active ? 'linear-gradient(150deg, var(--hotel-maroon), #5a1010)' : 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      padding: 16,
      position: 'relative',
      color: 'var(--text-primary)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      border: '1px solid var(--border-strong)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-secondary)'
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      letterSpacing: '.12em',
      color: 'var(--text-muted)'
    }
  }, code)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      color: active ? '#fff' : 'var(--text-secondary)'
    }
  }, React.cloneElement(icon, {
    width: 34
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, label));
}
function Home() {
  const [sheet, setSheet] = React.useState(true);
  const [dnd, setDnd] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      background: 'var(--bg-app)',
      position: 'relative',
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      padding: '30px 30px 0'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-elegant)',
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, "Villa Igiea \xB7 Palermo, Sicily"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-elegant)',
      fontWeight: 700,
      fontSize: 34,
      color: 'var(--text-primary)',
      marginTop: 6
    }
  }, "Good afternoon,"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-elegant)',
      fontWeight: 700,
      fontSize: 34,
      color: 'var(--hotel-maroon)'
    }
  }, "Sami"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 12,
      color: 'var(--text-secondary)',
      fontSize: 14
    }
  }, hi.key({
    width: 18
  }), " Room 412 ", /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 99,
      background: 'var(--hotel-red)'
    }
  }), " Executive Suite")), /*#__PURE__*/React.createElement(VillaLogo, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '24px 30px 0',
      height: 260,
      borderRadius: 24,
      overflow: 'hidden',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/hotel-bar-hero.png",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, rgba(20,17,15,.85) 14%, rgba(20,17,15,.2) 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 28,
      top: 30,
      right: 28,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      opacity: .8,
      textTransform: 'capitalize'
    }
  }, "Tonight at Villa Igiea"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-elegant)',
      fontWeight: 700,
      fontSize: 36,
      lineHeight: 1.05,
      marginTop: 8,
      maxWidth: 340
    }
  }, "Rooftop dinner under the stars"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      opacity: .82,
      marginTop: 10,
      maxWidth: 360
    }
  }, "A six-course tasting menu at Aaila, our 14th-floor rooftop. Seatings from 7:30 PM."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    style: {
      background: 'rgba(255,255,255,.14)',
      color: '#fff',
      border: '1px solid rgba(255,255,255,.4)'
    }
  }, "Reserve a table")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      padding: '22px 30px 0'
    }
  }, /*#__PURE__*/React.createElement(RoomTile, {
    icon: hi.moon(),
    label: "Do Not Disturb",
    active: dnd,
    onClick: () => setDnd(!dnd)
  }), /*#__PURE__*/React.createElement(RoomTile, {
    icon: hi.towel(),
    label: "Housekeeping",
    onClick: () => {}
  }), /*#__PURE__*/React.createElement(RoomTile, {
    icon: hi.phone(),
    label: "Wakeup Call",
    onClick: () => {}
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: sheet ? 300 : 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      transform: sheet ? 'translateY(0)' : 'translateY(calc(100% - 64px))',
      transition: 'transform .4s var(--ease-out)',
      background: 'var(--warm-white)',
      borderRadius: '28px 28px 0 0',
      padding: '20px 30px 30px',
      boxShadow: '0 -10px 40px rgba(0,0,0,.4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setSheet(!sheet),
    style: {
      width: 54,
      height: 5,
      borderRadius: 99,
      background: 'rgba(20,17,15,.2)',
      margin: '0 auto 18px',
      cursor: 'pointer'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-elegant)',
      fontWeight: 700,
      fontSize: 30,
      color: '#181818'
    }
  }, "Collect points on this stay"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#6E6161',
      fontSize: 15,
      marginTop: 8,
      maxWidth: 520
    }
  }, "Add your mobile number to link your Avelar Circle account \u2014 or start a new one. Points apply to tonight automatically."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    prefix: "+216",
    placeholder: "Add your number"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    size: "lg",
    fullWidth: true
  }, "Send code"))));
}
window.VillaScreens = {
  Home
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hotel/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/screens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* NEOLIFE — Landing / presentation screen. Composes the bundle.
   Exposes window.NeoLanding = { Landing }. */
const LNS = window.NEOLIFEDesignSystem_08f245;
const {
  Button,
  Badge,
  StatCard,
  VenueCard
} = LNS;
const lsvg = (d, o = {}) => p => /*#__PURE__*/React.createElement("svg", _extends({
  width: o.w || 22,
  height: o.w || 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: o.sw || 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, p), d);
const li = {
  prev: lsvg(/*#__PURE__*/React.createElement("path", {
    d: "m15 18-6-6 6-6"
  })),
  next: lsvg(/*#__PURE__*/React.createElement("path", {
    d: "m9 18 6-6-6-6"
  }))
};
const VENUES = [{
  title: 'Restaurants & Coffee',
  eyebrow: 'DINING',
  desc: 'Full-service dining, cafés, and specialty coffee experiences',
  href: '../restaurant/index.html',
  img: '../../assets/images/category-tile.png'
}, {
  title: 'Hotels',
  eyebrow: 'HOSPITALITY',
  desc: 'Luxury stays, boutique properties, and resort experiences',
  href: '../hotel/index.html',
  img: '../../assets/images/hotel-bar-hero.png'
}, {
  title: 'Clinics',
  eyebrow: 'HEALTHCARE',
  desc: 'Healthcare facilities, dental offices, and wellness centers',
  href: '../medical/index.html',
  img: '../../assets/images/landing-spa-hero.png'
}, {
  title: 'Gym & Fitness',
  eyebrow: 'WELLNESS',
  desc: 'Studios, training floors, and recurring member experiences',
  img: '../../assets/images/landing-spa-hero.png'
}, {
  title: 'Food Trucks',
  eyebrow: 'DINING',
  desc: 'Street food, pop-ups, and mobile kitchens on the move',
  img: '../../assets/images/category-tile.png'
}, {
  title: 'Retail & Boutiques',
  eyebrow: 'RETAIL',
  desc: 'Storefronts, concept shops, and seasonal pop-up retail',
  img: '../../assets/images/hotel-bar-hero.png'
}];
function Landing() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      background: 'var(--bg-app)',
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 24,
      overflow: 'hidden',
      minHeight: 470,
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/landing-spa-hero.png",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(87deg, #14110F 17%, rgba(20,17,15,.6) 49%, rgba(20,17,15,0) 74%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: 40,
      maxWidth: 440
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      backgroundColor: 'var(--neo-teal)',
      WebkitMask: 'url(../../assets/logos/neolife-mark.svg) center/contain no-repeat',
      mask: 'url(../../assets/logos/neolife-mark.svg) center/contain no-repeat'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-brand)',
      fontSize: 25,
      color: '#fff'
    }
  }, "NeoLIFE")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 800,
      fontSize: 40,
      lineHeight: 1.08,
      color: '#fff',
      marginTop: 28
    }
  }, "What kind of venue are you setting up?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,.82)',
      fontSize: 16,
      lineHeight: 1.5,
      marginTop: 16
    }
  }, "Choose your business category to get a tailored guest-experience app \u2014 designed specifically for your industry."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "gradient",
    size: "lg"
  }, "Discover the venue")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: "+10k",
    label: "Happy customers"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "+5k",
    label: "Active branches"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "+50",
    label: "Successful partners"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 24,
      bottom: 24,
      display: 'flex',
      gap: 12
    }
  }, [li.prev, li.next].map((Ic, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      border: '1px solid rgba(255,255,255,.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      cursor: 'pointer'
    }
  }, Ic({
    width: 20
  }))))), /*#__PURE__*/React.createElement("h2", {
    style: {
      textAlign: 'center',
      fontWeight: 700,
      fontSize: 24,
      color: 'var(--base-black)',
      margin: '40px 0 28px'
    }
  }, "What kind of venue are you setting up?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, VENUES.map(v => /*#__PURE__*/React.createElement(VenueCard, {
    key: v.title,
    image: v.img,
    eyebrow: v.eyebrow,
    title: v.title,
    description: v.desc,
    onClick: () => {
      if (v.href) window.location.href = v.href;
    }
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'var(--base-grey)',
      fontSize: 13,
      marginTop: 24
    }
  }, "Tap ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--neo-teal)'
    }
  }, "Restaurants"), ", ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--neo-teal)'
    }
  }, "Hotels"), " or ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--neo-teal)'
    }
  }, "Clinics"), " to open the live app."));
}
window.NeoLanding = {
  Landing
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/medical/screens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Andalus — Medical clinic UI kit screens. Composes the NEOLIFE bundle.
   Exposes window.AndalusScreens = { Home, Booking }. */
const MNS = window.NEOLIFEDesignSystem_08f245;
const {
  Button,
  Badge,
  Avatar,
  ServiceTile,
  Stepper,
  BottomNav,
  Card,
  Chip
} = MNS;
const msvg = (d, o = {}) => p => /*#__PURE__*/React.createElement("svg", _extends({
  width: o.w || 22,
  height: o.w || 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: o.sw || 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, p), d);
const mi = {
  bell: msvg(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.3 21a1.94 1.94 0 0 0 3.4 0"
  }))),
  menu: msvg(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18M3 12h18M3 18h18"
  }))),
  home: msvg(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 10.5 12 3l9 7.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 9.5V21h14V9.5"
  }))),
  cal: msvg(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 9h18M8 2v4M16 2v4"
  }))),
  msg: msvg(/*#__PURE__*/React.createElement("path", {
    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
  })),
  user: msvg(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 21a8 8 0 0 1 16 0"
  }))),
  phone: msvg(/*#__PURE__*/React.createElement("path", {
    d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z"
  })),
  meal: msvg(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 2v7c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2V2M5 2v9M11 2v20M11 8h3a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2"
  }))),
  tv: msvg(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "7",
    width: "20",
    height: "13",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m7 3 5 4 5-4"
  }))),
  broom: msvg(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m13 11 6-6M16 8l4-4M9 15l-4 4M14 12l-2 6-7-7 6-2z"
  }))),
  clock: msvg(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7v5l3 2"
  }))),
  chev: msvg(/*#__PURE__*/React.createElement("path", {
    d: "m9 18 6-6-6-6"
  }))
};
function Home({
  tab,
  setTab,
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      background: 'var(--bg-app)',
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 28px 0'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    elevation: "flat",
    padding: 18,
    radius: "var(--r-lg)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      background: 'var(--slate-900)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 600
    }
  }, "A"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 20,
      color: 'var(--slate-900)'
    }
  }, "Andalus Medical Center \xB7 Riyadh"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--slate-500)'
    }
  }, "Your trusted healthcare partner"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      color: 'var(--slate-500)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: iconBtn
  }, mi.bell({
    width: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: iconBtn
  }, mi.menu({
    width: 18
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 30,
      color: 'var(--slate-900)'
    }
  }, "Good morning, Sami"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 8,
      fontSize: 14,
      color: 'var(--slate-900)',
      fontWeight: 600
    }
  }, "Room 308 ", /*#__PURE__*/React.createElement(Dot, null), " Dr. Al-Rashid ", /*#__PURE__*/React.createElement(Dot, null), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--slate-500)',
      fontWeight: 400
    }
  }, "Tue, October 24, 2023"))), /*#__PURE__*/React.createElement(Avatar, {
    name: "Sami",
    size: 48,
    tone: "brand"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 28px 0'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--slate-900)',
      marginBottom: 18
    }
  }, "Your check-in journey"), /*#__PURE__*/React.createElement(Stepper, {
    current: 2,
    steps: [{
      label: 'Arrival & Check-In'
    }, {
      label: 'Vital & triage'
    }, {
      label: 'Consultation'
    }, {
      label: 'Diagnostics'
    }, {
      label: 'Discharge'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      background: 'var(--med-blue-soft)',
      borderRadius: 14,
      padding: 16,
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 10,
      background: 'var(--brand)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, mi.clock()), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--slate-900)'
    }
  }, "Up Next"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--brand)'
    }
  }, "Consultation \xB7 10:10 AM \xB7 Room 308")), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand)'
    }
  }, mi.chev())))), /*#__PURE__*/React.createElement(Section, {
    title: "Our Services"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(ServiceTile, {
    icon: mi.phone(),
    label: "Call a nurse"
  }), /*#__PURE__*/React.createElement(ServiceTile, {
    icon: mi.meal(),
    label: "Meal service"
  }), /*#__PURE__*/React.createElement(ServiceTile, {
    icon: mi.tv(),
    label: "Comfort & TV"
  }), /*#__PURE__*/React.createElement(ServiceTile, {
    icon: mi.broom(),
    label: "Housekeeping"
  }))), /*#__PURE__*/React.createElement(Section, {
    title: "Care & Facilities"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, [['Appointments', 'Book & manage visits'], ['Pharmacy', 'Prescriptions to room'], ['Lab Results', 'Bloodwork & imaging'], ['Physiotherapy', 'Recovery sessions']].map(([t, s], i) => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => go('booking'),
    style: facilityCard(i)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(140deg, var(--brand), var(--brand-strong))',
      opacity: .92
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: 18,
      color: '#fff',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 18
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      opacity: .85
    }
  }, s)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0
    }
  }, /*#__PURE__*/React.createElement(BottomNav, {
    variant: "bar",
    active: tab,
    onChange: setTab,
    items: [{
      key: 'home',
      icon: mi.home(),
      label: 'Home'
    }, {
      key: 'appts',
      icon: mi.cal(),
      label: 'Appointments'
    }, {
      key: 'msgs',
      icon: mi.msg(),
      label: 'Messages'
    }, {
      key: 'profile',
      icon: mi.user(),
      label: 'Profile'
    }]
  })));
}
const Dot = () => /*#__PURE__*/React.createElement("span", {
  style: {
    width: 6,
    height: 6,
    borderRadius: 99,
    background: 'var(--brand)',
    display: 'inline-block'
  }
});
const iconBtn = {
  width: 34,
  height: 34,
  borderRadius: '50%',
  border: '1px solid var(--border-subtle)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  background: '#fff'
};
const facilityCard = i => ({
  position: 'relative',
  height: 140,
  borderRadius: 16,
  overflow: 'hidden',
  border: 'none',
  cursor: 'pointer',
  textAlign: 'left',
  padding: 0
});
function Section({
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '24px 28px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontWeight: 700,
      fontSize: 20,
      color: 'var(--slate-900)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--brand)',
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, "View all")), children);
}
function Booking({
  go
}) {
  const [slot, setSlot] = React.useState('10:10 AM');
  const slots = ['09:00 AM', '09:40 AM', '10:10 AM', '11:00 AM', '01:30 PM', '02:15 PM'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      background: 'var(--bg-app)',
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('home'),
    style: {
      ...iconBtn,
      width: 40,
      height: 40,
      borderRadius: 12,
      fontSize: 18
    }
  }, "\u2190"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontWeight: 800,
      fontSize: 26,
      color: 'var(--slate-900)'
    }
  }, "Book appointment")), /*#__PURE__*/React.createElement(Card, {
    padding: 20,
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Dr A",
    size: 52,
    tone: "brand"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--slate-900)'
    }
  }, "Dr. Layla Al-Rashid"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--slate-500)'
    }
  }, "Internal Medicine \xB7 Andalus Tower B")), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "Available")))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--slate-900)',
      margin: '8px 0 12px'
    }
  }, "Select a time \u2014 Tue, Oct 24"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 12
    }
  }, slots.map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => setSlot(s),
    style: {
      padding: '14px 0',
      borderRadius: 12,
      cursor: 'pointer',
      fontWeight: 600,
      fontSize: 14,
      border: slot === s ? '1.5px solid var(--brand)' : '1px solid var(--border-subtle)',
      background: slot === s ? 'var(--brand)' : '#fff',
      color: slot === s ? '#fff' : 'var(--slate-900)'
    }
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => go('home')
  }, "Confirm ", slot)));
}
window.AndalusScreens = {
  Home,
  Booking
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/medical/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/restaurant/screens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Rola — Restaurant UI kit screens. Composes the NEOLIFE bundle.
   Exposes window.RolaScreens = { Home, Cart, Confirmed, data, icons }. */
const NS = window.NEOLIFEDesignSystem_08f245;
const {
  Button,
  Badge,
  Chip,
  Avatar,
  MenuCard,
  BottomNav,
  SummaryCard,
  Input
} = NS;
const svg = (d, o = {}) => p => /*#__PURE__*/React.createElement("svg", _extends({
  width: o.w || 22,
  height: o.w || 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: o.sw || 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, p), d);
const icons = {
  home: svg(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 10.5 12 3l9 7.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 9.5V21h14V9.5"
  }))),
  fork: svg(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 3v7a2 2 0 0 0 2 2 2 2 0 0 0 2-2V3M8 12v9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 3c-1.5 0-2.5 2-2.5 5s1 4 2.5 4 2.5-1 2.5-4-1-5-2.5-5zM17 16v5"
  }))),
  clip: svg(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "8",
    y: "3",
    width: "8",
    height: "4",
    rx: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3"
  }))),
  game: svg(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 12h4M8 10v4M15 11h.01M18 13h.01"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "6",
    width: "20",
    height: "12",
    rx: "6"
  }))),
  cart: svg(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "20",
    r: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "20",
    r: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 3h2l2.4 12.5a2 2 0 0 0 2 1.5h8.7a2 2 0 0 0 2-1.5L22 7H5"
  }))),
  search: svg(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  }))),
  menu: svg(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18M3 12h18M3 18h18"
  }))),
  arrow: svg(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M7 17 17 7M7 7h10v10"
  }))),
  check: svg(/*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }), {
    w: 40,
    sw: 2
  })
};
const DISHES = [{
  id: 1,
  name: 'Truffle Mushroom Tagliatelle',
  desc: 'Fresh truffle, wild mushrooms, parmesan cream, chives',
  price: 40.2,
  old: 50,
  badge: '10% Off',
  img: '../../assets/images/dish-pasta.png'
}, {
  id: 2,
  name: 'Lasagna alla Bolognese',
  desc: 'Layers of pasta, slow-cooked beef ragu, bechamel, parmesan',
  price: 68,
  img: '../../assets/images/dish-pasta.png'
}, {
  id: 3,
  name: 'Burrata Caprese',
  desc: 'Burrata, heirloom tomatoes, basil pesto, balsamic glaze',
  price: 55,
  badge: '25% Cashback',
  badgeTone: 'cashback',
  img: '../../assets/images/dish-pasta.png'
}, {
  id: 4,
  name: 'Penne Arrabbiata',
  desc: 'Penne, spicy tomato sugo, garlic, chili, fresh basil',
  price: 30,
  badge: 'Spicy',
  img: '../../assets/images/dish-pasta.png'
}, {
  id: 5,
  name: 'Salmone alla Griglia',
  desc: 'Grilled salmon, lemon butter, seasonal greens',
  price: 68,
  img: '../../assets/images/dish-pasta.png'
}, {
  id: 6,
  name: 'Veggie Deluxe',
  desc: 'Roast vegetables, mozzarella, rocket, chipotle mayo',
  price: 42,
  img: '../../assets/images/dish-pasta.png'
}];
const CATS = ['Main Course', 'Pizza', 'Antipasta', 'Pasta', 'Desserts', 'Drinks'];
const FILTERS = ['Vegan', 'Organic', 'Gluten-Free', 'Spicy', 'Keto', 'Halal'];
function Logo() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      color: '#4D701F'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 40,
      backgroundColor: 'currentColor',
      WebkitMask: 'url(../../assets/logos/rola-mark.svg) center/contain no-repeat',
      mask: 'url(../../assets/logos/rola-mark.svg) center/contain no-repeat'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-elegant)',
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: '.18em',
      color: '#6E6161'
    }
  }, "ITALIAN\xA0RESTAURANT")));
}
function Home({
  go,
  cart,
  addItem
}) {
  const [cat, setCat] = React.useState('Pasta');
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      background: 'var(--bg-app)',
      paddingBottom: 110
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '22px 26px'
    }
  }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      color: '#6E6161'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Table N\xB012"), icons.search({
    style: {
      color: '#6E6161',
      cursor: 'pointer'
    }
  }), /*#__PURE__*/React.createElement("span", {
    onClick: () => go('cart'),
    style: {
      position: 'relative',
      cursor: 'pointer',
      color: '#6E6161'
    }
  }, icons.cart(), count > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -6,
      right: -8,
      background: '#4D701F',
      color: '#fff',
      fontSize: 10,
      fontWeight: 700,
      borderRadius: 99,
      minWidth: 16,
      height: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 4px'
    }
  }, count)), icons.menu({
    style: {
      color: '#6E6161'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '0 20px',
      height: 200,
      borderRadius: 'var(--r-hero)',
      overflow: 'hidden',
      position: 'relative',
      background: '#ddd'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/category-tile.png",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(0deg, rgba(0,0,0,.5), rgba(0,0,0,0) 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 28,
      bottom: 22,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 34,
      lineHeight: 1
    }
  }, "Chef's specials, tonight"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      opacity: .85,
      marginTop: 6
    }
  }, "Hand-made pasta from our Sicilian kitchen"))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '24px 26px 4px'
    }
  }, /*#__PURE__*/React.createElement(Row, {
    title: "Choose by category"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      overflowX: 'auto',
      paddingBottom: 6
    }
  }, CATS.map(c => /*#__PURE__*/React.createElement(Chip, {
    key: c,
    selected: c === cat,
    onClick: () => setCat(c)
  }, c)))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '14px 26px'
    }
  }, /*#__PURE__*/React.createElement(Row, {
    title: "Our Menu"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 150,
      flexShrink: 0,
      background: 'var(--surface-card)',
      borderRadius: 12,
      padding: 14,
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      marginBottom: 10
    }
  }, "Filter"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, FILTERS.map((f, i) => /*#__PURE__*/React.createElement("label", {
    key: f,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: 5,
      border: i === 5 ? 'none' : '1px solid var(--border-strong)',
      background: i === 5 ? '#4D701F' : '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, i === 5 && /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 12 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2 4.8 8.5 9.5 3.5",
    stroke: "#fff",
    strokeWidth: "1.8",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), f)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 14
    }
  }, DISHES.map(d => /*#__PURE__*/React.createElement(MenuCard, {
    key: d.id,
    image: d.img,
    name: d.name,
    description: d.desc,
    price: '$' + d.price,
    oldPrice: d.old ? '$' + d.old : undefined,
    badge: d.badge,
    badgeTone: d.badgeTone || 'offer',
    onAdd: () => addItem(d.id)
  }))))), /*#__PURE__*/React.createElement(FloatingNav, {
    active: "home",
    go: go
  }));
}
function Row({
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 22,
      color: '#4D701F'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 12,
      color: 'var(--text-primary)',
      cursor: 'pointer'
    }
  }, "See All ", icons.arrow({
    width: 15
  })));
}
function FloatingNav({
  active,
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 22,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(BottomNav, {
    active: active,
    onChange: k => go(k === 'cart' ? 'cart' : 'home'),
    items: [{
      key: 'home',
      icon: icons.home()
    }, {
      key: 'fork',
      icon: icons.fork()
    }, {
      key: 'orders',
      icon: icons.clip()
    }, {
      key: 'game',
      icon: icons.game()
    }, {
      key: 'cart',
      icon: icons.cart()
    }]
  }));
}
function Cart({
  go,
  cart,
  addItem,
  removeItem
}) {
  const lines = DISHES.filter(d => cart[d.id]);
  const subtotal = lines.reduce((s, d) => s + d.price * cart[d.id], 0);
  const service = subtotal * 0.07;
  const total = subtotal + service;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      background: 'var(--bg-app)',
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '22px 26px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('home'),
    style: {
      border: 'none',
      background: '#fff',
      width: 40,
      height: 40,
      borderRadius: 12,
      cursor: 'pointer',
      boxShadow: 'var(--shadow-card)',
      fontSize: 18
    }
  }, "\u2190"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 28,
      color: '#4D701F'
    }
  }, "My Cart")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 26px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, lines.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-secondary)',
      padding: 40,
      textAlign: 'center'
    }
  }, "Your cart is empty \u2014 add a dish from the menu."), lines.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      background: 'var(--surface-card)',
      borderRadius: 14,
      padding: 12,
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: d.img,
    style: {
      width: 64,
      height: 64,
      borderRadius: 10,
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14
    }
  }, d.name), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#4D701F',
      fontWeight: 800,
      fontSize: 16
    }
  }, "$", d.price)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => removeItem(d.id),
    style: qtyBtn
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 18,
      textAlign: 'center',
      fontWeight: 700
    }
  }, cart[d.id]), /*#__PURE__*/React.createElement("button", {
    onClick: () => addItem(d.id),
    style: {
      ...qtyBtn,
      background: '#4D701F',
      color: '#fff',
      border: 'none'
    }
  }, "+")))), lines.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(SummaryCard, {
    title: "Order summary",
    rows: [{
      label: 'Subtotal',
      value: '$' + subtotal.toFixed(2)
    }, {
      label: 'Service (7%)',
      value: '$' + service.toFixed(2)
    }],
    total: '$' + total.toFixed(2),
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      fullWidth: true,
      onClick: () => go('confirmed')
    }, "Pay now")
  }))));
}
const qtyBtn = {
  width: 30,
  height: 30,
  borderRadius: 8,
  border: '1px solid var(--border-strong)',
  background: '#fff',
  cursor: 'pointer',
  fontSize: 16,
  color: '#4D701F'
};
function Confirmed({
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      background: 'var(--bg-app)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: 40,
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 84,
      height: 84,
      borderRadius: '50%',
      background: '#4D701F',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, icons.check()), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 32,
      color: '#4D701F'
    }
  }, "Order confirmed!"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-secondary)',
      maxWidth: 320
    }
  }, "Your order is on the way to Table N\xB012. Sit back and enjoy your evening."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go('home')
  }, "Back to menu"));
}
window.RolaScreens = {
  Home,
  Cart,
  Confirmed,
  icons
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/restaurant/screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.BottomNav = __ds_scope.BottomNav;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.MenuCard = __ds_scope.MenuCard;

__ds_ns.ServiceTile = __ds_scope.ServiceTile;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.SummaryCard = __ds_scope.SummaryCard;

__ds_ns.VenueCard = __ds_scope.VenueCard;

})();
