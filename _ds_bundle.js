/* @ds-bundle: {"format":4,"namespace":"ImmersiveStudioCDADesignSystem_38ffa6","components":[{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"Field","sourcePath":"components/content/Field.jsx"},{"name":"StepItem","sourcePath":"components/content/StepItem.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"IconNames","sourcePath":"components/icons/Icon.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"DotField","sourcePath":"components/layout/DotField.jsx"},{"name":"LogoLockup","sourcePath":"components/layout/LogoLockup.jsx"},{"name":"Rule","sourcePath":"components/layout/Rule.jsx"},{"name":"Section","sourcePath":"components/layout/Section.jsx"},{"name":"SiteCta","sourcePath":"ui_kits/website/SiteCta.jsx"},{"name":"SiteFaq","sourcePath":"ui_kits/website/SiteFaq.jsx"},{"name":"SiteFooter","sourcePath":"ui_kits/website/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"ui_kits/website/SiteHeader.jsx"},{"name":"SiteHero","sourcePath":"ui_kits/website/SiteHero.jsx"},{"name":"SiteProcess","sourcePath":"ui_kits/website/SiteProcess.jsx"},{"name":"SiteProof","sourcePath":"ui_kits/website/SiteProof.jsx"},{"name":"SiteUseCases","sourcePath":"ui_kits/website/SiteUseCases.jsx"},{"name":"SiteWhat","sourcePath":"ui_kits/website/SiteWhat.jsx"},{"name":"WaitlistDialog","sourcePath":"ui_kits/website/WaitlistDialog.jsx"},{"name":"Website","sourcePath":"ui_kits/website/Website.jsx"}],"sourceHashes":{"components/content/Accordion.jsx":"40ac8d974179","components/content/Card.jsx":"ea5dba57e480","components/content/Field.jsx":"97224b7e6581","components/content/StepItem.jsx":"27431f3acf3f","components/core/Button.jsx":"337c18943db9","components/core/Eyebrow.jsx":"68de523ae1a7","components/core/Stat.jsx":"b7124e31b112","components/core/Tag.jsx":"33dd0e5261f8","components/icons/Icon.jsx":"f307df5be9b9","components/layout/DotField.jsx":"3fdd04959366","components/layout/LogoLockup.jsx":"8e478f24d86e","components/layout/Rule.jsx":"c8b11132fc22","components/layout/Section.jsx":"eb9463e46100","ui_kits/website/SiteCta.jsx":"2d46c7381af0","ui_kits/website/SiteFaq.jsx":"998ccca5fe37","ui_kits/website/SiteFooter.jsx":"11cab191ff62","ui_kits/website/SiteHeader.jsx":"de296561c687","ui_kits/website/SiteHero.jsx":"4093d19b9dfb","ui_kits/website/SiteProcess.jsx":"ac9e1cc4cb1f","ui_kits/website/SiteProof.jsx":"c29c1d6705ad","ui_kits/website/SiteUseCases.jsx":"6b7240625d2e","ui_kits/website/SiteWhat.jsx":"9946c2da2541","ui_kits/website/WaitlistDialog.jsx":"e8d148f0117a","ui_kits/website/Website.jsx":"d3bc484406be"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ImmersiveStudioCDADesignSystem_38ffa6 = window.ImmersiveStudioCDADesignSystem_38ffa6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Accordion({
  items = [],
  defaultOpen = -1,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderTop: '1px solid var(--border-hairline)',
      ...style
    }
  }, rest), items.map((item, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: '1px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      "aria-expanded": isOpen,
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-6)',
        padding: 'var(--space-6) 0',
        background: 'transparent',
        border: 0,
        cursor: 'pointer',
        textAlign: 'left',
        fontSize: 'var(--text-md)',
        fontWeight: 'var(--weight-regular)',
        letterSpacing: 'var(--tracking-heading)',
        color: 'var(--text-primary)'
      }
    }, /*#__PURE__*/React.createElement("span", null, item.q), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        color: 'var(--text-muted)',
        fontSize: 'var(--text-lg)',
        lineHeight: 1,
        transform: isOpen ? 'rotate(180deg)' : 'none',
        transition: 'transform var(--duration-base) var(--ease-standard)'
      }
    }, '\u2193')), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: isOpen ? '1fr' : '0fr',
        transition: 'grid-template-rows var(--duration-base) var(--ease-standard)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: 'var(--space-8)',
        maxWidth: 'var(--measure)',
        fontSize: 'var(--text-sm)',
        lineHeight: 'var(--leading-body)',
        color: 'var(--text-secondary)'
      }
    }, item.a))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/content/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  hint,
  error,
  as = 'input',
  style,
  inputStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const Tag = as;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: 'var(--space-2)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--weight-medium)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)',
      color: 'var(--text-secondary)'
    }
  }, label) : null, /*#__PURE__*/React.createElement(Tag, _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: as === 'textarea' ? undefined : 'var(--control-h-md)',
      minHeight: as === 'textarea' ? '120px' : undefined,
      padding: as === 'textarea' ? 'var(--space-3) var(--space-4)' : '0 var(--space-4)',
      background: 'var(--surface-raised)',
      color: 'var(--text-primary)',
      border: '1px solid ' + (error ? 'var(--signal-critical)' : focus ? 'var(--border-strong)' : 'var(--border-subtle)'),
      borderRadius: 'var(--radius-sm)',
      outline: focus ? '2px solid var(--focus-ring)' : 'none',
      outlineOffset: '2px',
      fontSize: 'var(--text-sm)',
      fontFamily: 'var(--font-sans)',
      transition: 'border-color var(--duration-fast) var(--ease-standard)',
      ...inputStyle
    }
  }, rest)), error || hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 'var(--space-2)',
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--signal-critical)' : 'var(--text-muted)'
    }
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Field.jsx", error: String((e && e.message) || e) }); }

// components/content/StepItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StepItem({
  number,
  title,
  children,
  layout = 'row',
  style,
  ...rest
}) {
  const row = layout === 'row';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: row ? 'grid' : 'block',
      gridTemplateColumns: row ? '96px 1fr' : undefined,
      gap: row ? 'var(--space-8)' : undefined,
      padding: 'var(--space-8) 0',
      borderTop: '1px solid var(--border-hairline)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-2xl)',
      fontWeight: 'var(--weight-extralight)',
      letterSpacing: 'var(--tracking-display)',
      lineHeight: 1,
      color: 'var(--text-muted)'
    }
  }, number), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: row ? 0 : 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-lg)',
      letterSpacing: 'var(--tracking-heading)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-secondary)',
      maxWidth: '48ch'
    }
  }, children)));
}
Object.assign(__ds_scope, { StepItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StepItem.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-3)',
  fontFamily: 'var(--font-sans)',
  fontWeight: 'var(--weight-medium)',
  letterSpacing: '0.04em',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  border: '1px solid transparent',
  borderRadius: 'var(--radius-sm)',
  cursor: 'pointer',
  transition: 'background-color var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)'
};
const sizes = {
  sm: {
    height: 'var(--control-h-sm)',
    padding: '0 var(--control-pad-x-sm)',
    fontSize: 'var(--text-xs)'
  },
  md: {
    height: 'var(--control-h-md)',
    padding: '0 var(--control-pad-x-md)',
    fontSize: 'var(--text-sm)'
  },
  lg: {
    height: 'var(--control-h-lg)',
    padding: '0 var(--control-pad-x-lg)',
    fontSize: 'var(--text-base)'
  }
};
const variants = {
  solid: {
    background: 'var(--accent)',
    color: 'var(--text-on-accent)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-primary)',
    borderColor: 'var(--border-subtle)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-primary)'
  },
  link: {
    background: 'transparent',
    color: 'var(--text-primary)',
    height: 'auto',
    padding: 0,
    borderRadius: 0,
    borderBottom: '1px solid var(--border-subtle)',
    paddingBottom: '3px'
  }
};
const hovers = {
  solid: {
    background: 'var(--accent-hover)'
  },
  outline: {
    borderColor: 'var(--border-strong)'
  },
  ghost: {
    background: 'var(--accent-quiet)'
  },
  link: {
    borderBottomColor: 'var(--border-strong)'
  }
};
function Button({
  variant = 'solid',
  size = 'md',
  href,
  arrow,
  disabled,
  fullWidth,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  const s = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...(fullWidth ? {
      width: '100%'
    } : null),
    ...(disabled ? {
      opacity: 0.4,
      pointerEvents: 'none'
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: !href && disabled ? true : undefined,
    style: s,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children, arrow ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontWeight: 'var(--weight-regular)'
    }
  }, arrow === 'down' ? '\u2193' : '\u2192') : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  children,
  as: Tag = 'div',
  tone = 'secondary',
  wide,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: wide ? 'var(--text-sm)' : 'var(--type-eyebrow-size)',
      fontWeight: wide ? 'var(--weight-light)' : 'var(--type-eyebrow-weight)',
      textTransform: 'uppercase',
      letterSpacing: wide ? 'var(--tracking-widest)' : 'var(--type-eyebrow-tracking)',
      color: tone === 'primary' ? 'var(--text-primary)' : 'var(--text-secondary)',
      lineHeight: 1.4,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  eyebrow,
  title,
  children,
  media,
  interactive,
  tone = 'raised',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: tone === 'flat' ? 'transparent' : 'var(--surface-raised)',
      border: '1px solid ' + (interactive && hover ? 'var(--border-subtle)' : 'var(--border-hairline)'),
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      transition: 'border-color var(--duration-fast) var(--ease-standard)',
      ...style
    }
  }, rest), media ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-sunken)'
    }
  }, media) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-8)'
    }
  }, eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    style: {
      marginBottom: 'var(--space-4)'
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--weight-regular)',
      letterSpacing: 'var(--tracking-heading)',
      lineHeight: 'var(--leading-heading)'
    }
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: title ? 'var(--space-4)' : 0,
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-secondary)'
    }
  }, children) : null));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Stat({
  value,
  label,
  size = 'md',
  style,
  ...rest
}) {
  const sizes = {
    sm: 'var(--text-3xl)',
    md: 'var(--text-4xl)',
    lg: 'var(--text-5xl)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: sizes[size],
      fontWeight: 'var(--type-numeral-weight)',
      letterSpacing: 'var(--tracking-display)',
      lineHeight: 1,
      color: 'var(--text-primary)',
      whiteSpace: 'nowrap'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-secondary)',
      maxWidth: '26ch'
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  tone = 'neutral',
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      background: 'var(--accent-quiet)',
      color: 'var(--text-secondary)',
      borderColor: 'transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      borderColor: 'var(--border-subtle)'
    },
    solid: {
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      borderColor: 'transparent'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: '26px',
      padding: '0 var(--space-3)',
      border: '1px solid',
      borderRadius: 'var(--radius-pill)',
      fontSize: 'var(--text-3xs)',
      fontWeight: 'var(--weight-medium)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide (ISC), stroke-width normalised to 1.5 to match the mark's line quality.
   Source: github.com/lucide-icons/lucide @ main. Geometry unmodified otherwise.
   The same files live as standalone SVGs in assets/icons/ for copy-out use. */
const PATHS = {
  'arrow-down': '<path d="M12 5v14"></path> <path d="m19 12-7 7-7-7"></path>',
  'arrow-left': '<path d="m12 19-7-7 7-7"></path> <path d="M19 12H5"></path>',
  'arrow-right': '<path d="M5 12h14"></path> <path d="m12 5 7 7-7 7"></path>',
  'arrow-up-right': '<path d="M7 7h10v10"></path> <path d="M7 17 17 7"></path>',
  'blend': '<circle cx="9" cy="9" r="7"></circle> <circle cx="15" cy="15" r="7"></circle>',
  'box': '<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path> <path d="m3.3 7 8.7 5 8.7-5"></path> <path d="M12 22V12"></path>',
  'building-2': '<path d="M10 12h4"></path> <path d="M10 8h4"></path> <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path> <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path> <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>',
  'calendar': '<path d="M8 2v3"></path> <path d="M16 2v3"></path> <rect x="3" y="3" width="18" height="18" rx="2"></rect> <path d="M3 9h18"></path>',
  'check': '<path d="M20 6 9 17l-5-5"></path>',
  'chevron-down': '<path d="m6 9 6 6 6-6"></path>',
  'chevron-right': '<path d="m9 18 6-6-6-6"></path>',
  'circle-check': '<circle cx="12" cy="12" r="10"></circle> <path d="m9 12 2 2 4-4"></path>',
  'clock': '<circle cx="12" cy="12" r="10"></circle> <path d="M12 6v6l4 2"></path>',
  'compass': '<circle cx="12" cy="12" r="10"></circle> <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path>',
  'door-open': '<path d="M11 20H2"></path> <path d="M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z"></path> <path d="M11 4H8a2 2 0 0 0-2 2v14"></path> <path d="M14 12h.01"></path> <path d="M22 20h-3"></path>',
  'external-link': '<path d="M15 3h6v6"></path> <path d="M10 14 21 3"></path> <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>',
  'eye': '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path> <circle cx="12" cy="12" r="3"></circle>',
  'file-text': '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path> <path d="M14 2v5a1 1 0 0 0 1 1h5"></path> <path d="M10 9H8"></path> <path d="M16 13H8"></path> <path d="M16 17H8"></path>',
  'footprints': '<path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"></path> <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"></path> <path d="M16 17h4"></path> <path d="M4 13h4"></path>',
  'frame': '<line x1="22" x2="2" y1="6" y2="6"></line> <line x1="22" x2="2" y1="18" y2="18"></line> <line x1="6" x2="6" y1="2" y2="22"></line> <line x1="18" x2="18" y1="2" y2="22"></line>',
  'grid-2x2': '<path d="M12 3v18"></path> <path d="M3 12h18"></path> <rect x="3" y="3" width="18" height="18" rx="2"></rect>',
  'hard-hat': '<path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"></path> <path d="M14 6a6 6 0 0 1 6 6v3"></path> <path d="M4 15v-3a6 6 0 0 1 6-6"></path> <rect x="2" y="15" width="20" height="4" rx="1"></rect>',
  'house': '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path> <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>',
  'lamp': '<path d="M12 12v6"></path> <path d="M4.077 10.615A1 1 0 0 0 5 12h14a1 1 0 0 0 .923-1.385l-3.077-7.384A2 2 0 0 0 15 2H9a2 2 0 0 0-1.846 1.23Z"></path> <path d="M8 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z"></path>',
  'layers': '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path> <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path> <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>',
  'mail': '<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path> <rect x="2" y="4" width="20" height="16" rx="2"></rect>',
  'map-pin': '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path> <circle cx="12" cy="10" r="3"></circle>',
  'maximize': '<path d="M8 3H5a2 2 0 0 0-2 2v3"></path> <path d="M21 8V5a2 2 0 0 0-2-2h-3"></path> <path d="M3 16v3a2 2 0 0 0 2 2h3"></path> <path d="M16 21h3a2 2 0 0 0 2-2v-3"></path>',
  'menu': '<path d="M4 5h16"></path> <path d="M4 12h16"></path> <path d="M4 19h16"></path>',
  'message-square': '<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>',
  'minus': '<path d="M5 12h14"></path>',
  'move-3d': '<path d="M5 3v16h16"></path> <path d="m5 19 6-6"></path> <path d="m2 6 3-3 3 3"></path> <path d="m18 16 3 3-3 3"></path>',
  'pencil-ruler': '<path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"></path> <path d="m8 6 2-2"></path> <path d="m18 16 2-2"></path> <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"></path> <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path> <path d="m15 5 4 4"></path>',
  'phone': '<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>',
  'play': '<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>',
  'plus': '<path d="M5 12h14"></path> <path d="M12 5v14"></path>',
  'presentation': '<path d="M2 3h20"></path> <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path> <path d="m7 21 5-5 5 5"></path>',
  'projector': '<path d="M5 7 3 5"></path> <path d="M9 6V3"></path> <path d="m13 7 2-2"></path> <circle cx="9" cy="13" r="3"></circle> <path d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17"></path> <path d="M16 16h2"></path>',
  'ruler': '<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"></path> <path d="m14.5 12.5 2-2"></path> <path d="m11.5 9.5 2-2"></path> <path d="m8.5 6.5 2-2"></path> <path d="m17.5 15.5 2-2"></path>',
  'scan': '<path d="M3 7V5a2 2 0 0 1 2-2h2"></path> <path d="M17 3h2a2 2 0 0 1 2 2v2"></path> <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path> <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>',
  'search': '<path d="m21 21-4.34-4.34"></path> <circle cx="11" cy="11" r="8"></circle>',
  'sofa': '<path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"></path> <path d="M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"></path> <path d="M4 18v2"></path> <path d="M20 18v2"></path> <path d="M12 4v9"></path>',
  'square-dashed': '<path d="M5 3a2 2 0 0 0-2 2"></path> <path d="M19 3a2 2 0 0 1 2 2"></path> <path d="M21 19a2 2 0 0 1-2 2"></path> <path d="M5 21a2 2 0 0 1-2-2"></path> <path d="M9 3h1"></path> <path d="M9 21h1"></path> <path d="M14 3h1"></path> <path d="M14 21h1"></path> <path d="M3 9v1"></path> <path d="M21 9v1"></path> <path d="M3 14v1"></path> <path d="M21 14v1"></path>',
  'upload': '<path d="M12 3v12"></path> <path d="m17 8-5-5-5 5"></path> <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>',
  'users': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path> <path d="M16 3.128a4 4 0 0 1 0 7.744"></path> <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path> <circle cx="9" cy="7" r="4"></circle>',
  'x': '<path d="M18 6 6 18"></path> <path d="m6 6 12 12"></path>'
};
const IconNames = Object.keys(PATHS);
function Icon({
  name,
  size = 20,
  strokeWidth,
  label,
  style,
  ...rest
}) {
  const d = PATHS[name];
  if (!d) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth || 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    role: label ? 'img' : undefined,
    "aria-label": label,
    "aria-hidden": label ? undefined : 'true',
    focusable: "false",
    style: {
      display: 'block',
      flex: 'none',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: d
    }
  }, rest));
}
Icon.names = Object.keys(PATHS);
Object.assign(__ds_scope, { IconNames, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/layout/DotField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DotField({
  opacity = 0.5,
  size = 14,
  perspective = true,
  edge = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      color: 'currentColor',
      opacity,
      backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
      backgroundSize: size + 'px ' + size + 'px',
      maskImage: perspective ? 'linear-gradient(90deg, currentColor 0%, rgba(0,0,0,0.25) 70%, transparent 100%)' : undefined,
      WebkitMaskImage: perspective ? 'linear-gradient(90deg, currentColor 0%, rgba(0,0,0,0.25) 70%, transparent 100%)' : undefined
    }
  }), edge ? /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      width: '1px',
      background: 'var(--off-white)',
      boxShadow: 'var(--glow-edge)'
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, children));
}
Object.assign(__ds_scope, { DotField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/DotField.jsx", error: String((e && e.message) || e) }); }

// components/layout/LogoLockup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const files = {
  lockup: {
    light: 'logo-lockup-black.png',
    dark: 'logo-lockup-offwhite.png',
    white: 'logo-lockup-white.png'
  },
  'lockup-glow': {
    light: 'logo-lockup-glow-black.png',
    dark: 'logo-lockup-glow-offwhite.png',
    white: 'logo-lockup-glow-white.png'
  },
  mark: {
    light: 'mark-black.png',
    dark: 'mark-offwhite.svg',
    white: 'mark-offwhite.svg'
  },
  wordmark: {
    light: 'wordmark-black.svg',
    dark: 'wordmark-white.svg',
    white: 'wordmark-white.svg'
  }
};
function LogoLockup({
  variant = 'lockup',
  tone = 'dark',
  height,
  width = 220,
  basePath = 'assets/logo',
  style,
  ...rest
}) {
  const src = basePath.replace(/\/$/, '') + '/' + files[variant][tone];
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: "Immersive Studio cda",
    style: {
      display: 'block',
      height: height || 'auto',
      width: height ? 'auto' : width,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { LogoLockup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/LogoLockup.jsx", error: String((e && e.message) || e) }); }

// components/layout/Rule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Rule({
  tone = 'hairline',
  vertical,
  style,
  ...rest
}) {
  const color = tone === 'strong' ? 'var(--border-strong)' : tone === 'subtle' ? 'var(--border-subtle)' : 'var(--border-hairline)';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    style: vertical ? {
      width: '1px',
      alignSelf: 'stretch',
      background: color,
      ...style
    } : {
      height: '1px',
      width: '100%',
      background: color,
      border: 0,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Rule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Rule.jsx", error: String((e && e.message) || e) }); }

// components/layout/Section.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const widths = {
  sm: 'var(--container-sm)',
  md: 'var(--container-md)',
  lg: 'var(--container-lg)',
  xl: 'var(--container-xl)'
};
function Section({
  eyebrow,
  width = 'lg',
  tone = 'inherit',
  density = 'normal',
  divider,
  children,
  style,
  ...rest
}) {
  const pad = {
    tight: 'var(--section-y-tight)',
    normal: 'var(--section-y)',
    loose: 'var(--section-y-loose)'
  }[density];
  return /*#__PURE__*/React.createElement("section", _extends({
    "data-theme": tone === 'dark' ? 'dark' : tone === 'light' ? undefined : undefined,
    style: {
      background: tone === 'inherit' ? 'transparent' : 'var(--surface-page)',
      color: tone === 'inherit' ? 'inherit' : 'var(--text-primary)',
      borderTop: divider ? '1px solid var(--border-hairline)' : 'none',
      paddingTop: pad,
      paddingBottom: pad,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: widths[width],
      margin: '0 auto',
      paddingLeft: 'var(--gutter-lg)',
      paddingRight: 'var(--gutter-lg)'
    }
  }, eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    style: {
      marginBottom: 'var(--space-8)'
    }
  }, eyebrow) : null, children));
}
Object.assign(__ds_scope, { Section });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Section.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteCta.jsx
try { (() => {
function SiteCta({
  onJoin
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.DotField, {
    opacity: 0.06,
    style: {
      background: 'var(--void)',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-lg)',
      margin: '0 auto',
      padding: 'var(--section-y-loose) var(--gutter-lg)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-4xl)',
      fontWeight: 'var(--weight-light)',
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-display)',
      maxWidth: '16ch',
      margin: 0
    }
  }, "The room does the talking. ", /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 'var(--weight-bold)'
    }
  }, "Be there first.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-12)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    onClick: onJoin
  }, "Join the list"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "link",
    href: "https://www.instagram.com/immersivestudiocda/",
    arrow: "right"
  }, "Just curious? Follow the build @immersivestudiocda")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-10)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "Seven founding spots. Downtown Coeur d'Alene.")));
}
Object.assign(__ds_scope, { SiteCta });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteCta.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteFaq.jsx
try { (() => {
const ITEMS = [{
  q: 'What is Immersive Studio?',
  a: "A projection studio where projects are experienced before they're built. Your floor plan is projected at true 1:1 scale and you walk the space room by room. The decisions that usually wait for framing get made in the room instead, while changes are still inexpensive."
}, {
  q: 'Who is it for?',
  a: 'Architects, builders, designers, realtors, and developers. Anyone whose clients struggle to picture a space from drawings. If approvals drag and change orders sting, this room is for you.'
}, {
  q: 'How do I get in early?',
  a: 'Seven founding memberships open before opening day: first access to the floor, your firm on the founding wall. Join the list.'
}];
function SiteFaq() {
  return /*#__PURE__*/React.createElement(__ds_scope.Section, {
    eyebrow: "Questions, answered",
    width: "md",
    divider: true
  }, /*#__PURE__*/React.createElement(__ds_scope.Accordion, {
    items: ITEMS,
    defaultOpen: 0
  }));
}
Object.assign(__ds_scope, { SiteFaq });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteFaq.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteFooter.jsx
try { (() => {
function SiteFooter({
  assets = '../../assets/logo'
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border-hairline)',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-lg)',
      margin: '0 auto',
      padding: 'var(--space-12) var(--gutter-lg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-8)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.LogoLockup, {
    variant: "wordmark",
    tone: "dark",
    width: 160,
    basePath: assets
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-8)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:contact@immersivestudiocda.com"
  }, "contact@immersivestudiocda.com"), /*#__PURE__*/React.createElement("span", null, "Downtown Coeur d'Alene, Idaho"))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHeader.jsx
try { (() => {
function SiteHeader({
  onJoin,
  assets = '../../assets/logo'
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(10,10,10,.72)',
      backdropFilter: 'var(--blur-chrome)',
      WebkitBackdropFilter: 'var(--blur-chrome)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-lg)',
      margin: '0 auto',
      padding: 'var(--space-4) var(--gutter-lg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.LogoLockup, {
    variant: "wordmark",
    tone: "dark",
    height: 26,
    basePath: assets
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#what",
    style: {
      fontSize: 'var(--text-2xs)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)',
      color: 'var(--text-secondary)',
      border: 0,
      whiteSpace: 'nowrap'
    }
  }, "What happens here"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    onClick: onJoin
  }, "Join the list"))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHero.jsx
try { (() => {
function SiteHero({
  onJoin,
  assets = '../../assets/logo'
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.DotField, {
    opacity: 0.07,
    edge: true,
    style: {
      background: 'var(--void)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-lg)',
      margin: '0 auto',
      padding: 'var(--section-y-loose) var(--gutter-lg)',
      minHeight: '68vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.LogoLockup, {
    variant: "lockup-glow",
    tone: "dark",
    width: 520,
    basePath: assets,
    style: {
      marginLeft: '-2%',
      marginBottom: 'var(--space-10)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--weight-light)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-secondary)',
      maxWidth: '52ch',
      margin: '0 0 var(--space-12)'
    }
  }, "An immersive design experience for architects, builders, designers, and creatives. Coming this summer to downtown Coeur d'Alene."), /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, "Coming Soon"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    onClick: onJoin
  }, "Be the first. Join the list"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "Founding spots are limited.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "link",
    href: "#what",
    arrow: "down",
    style: {
      fontSize: 'var(--text-2xs)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)',
      color: 'var(--text-secondary)'
    }
  }, "What happens here"))));
}
Object.assign(__ds_scope, { SiteHero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteProcess.jsx
try { (() => {
const STEPS = [['01', 'Upload', 'Send your drawings. We handle the projection-ready prep.'], ['02', 'Project', 'The plan is projected on the floor. Elevations take the wall.'], ['03', 'Walk', 'Your client stands in the space and feels the design.'], ['04', 'Refine', "Changes marked in the room, while they're still inexpensive."], ['05', 'Confirm', 'Decisions made before construction, not during.']];
function SiteProcess() {
  return /*#__PURE__*/React.createElement(__ds_scope.Section, {
    eyebrow: "How a session works",
    divider: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, STEPS.map(([n, t, d]) => /*#__PURE__*/React.createElement(__ds_scope.StepItem, {
    key: n,
    number: n,
    title: t
  }, d))));
}
Object.assign(__ds_scope, { SiteProcess });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteProcess.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteProof.jsx
try { (() => {
function SiteProof() {
  return /*#__PURE__*/React.createElement(__ds_scope.Section, {
    density: "tight"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Stat, {
    size: "sm",
    value: "1:1",
    label: "True-scale floor and elevation projection"
  }), /*#__PURE__*/React.createElement(__ds_scope.Stat, {
    size: "sm",
    value: "Any size",
    label: "Your plan panned across 2,800\xB1 sq ft of floor"
  }), /*#__PURE__*/React.createElement(__ds_scope.Stat, {
    size: "sm",
    value: "$5K to $25K",
    label: "Typical cost of one field change order"
  })));
}
Object.assign(__ds_scope, { SiteProof });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteProof.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteUseCases.jsx
try { (() => {
const USES = ["See the design with a client before it's real.", 'Walk your future home before it\u2019s framed.', "Sell the units before they're built.", 'Preview a buildout before you sign the lease.', 'Host an immersive event inside the plan.', 'Throw a party the whole floor lights up for.', 'Launch a product in a room built for the reveal.'];
function SiteUseCases() {
  const [active, setActive] = React.useState(0);
  return /*#__PURE__*/React.createElement(__ds_scope.Section, {
    eyebrow: "More than one use",
    divider: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-hairline)'
    }
  }, USES.map((u, i) => /*#__PURE__*/React.createElement("div", {
    key: u,
    onMouseEnter: () => setActive(i),
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-8)',
      padding: 'var(--space-6) 0',
      borderBottom: '1px solid var(--border-hairline)',
      color: active === i ? 'var(--text-primary)' : 'var(--text-secondary)',
      transition: 'color var(--duration-fast) var(--ease-standard)',
      cursor: 'default'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-muted)',
      letterSpacing: 'var(--tracking-wide)',
      width: 28
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xl)',
      fontWeight: 'var(--weight-light)',
      letterSpacing: 'var(--tracking-heading)'
    }
  }, u)))));
}
Object.assign(__ds_scope, { SiteUseCases });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteUseCases.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteWhat.jsx
try { (() => {
function SiteWhat() {
  return /*#__PURE__*/React.createElement(__ds_scope.Section, {
    id: "what",
    eyebrow: "What happens here",
    density: "normal"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-4xl)',
      fontWeight: 'var(--weight-light)',
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-display)',
      maxWidth: '18ch',
      margin: 0
    }
  }, "Step inside your project ", /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 'var(--weight-bold)'
    }
  }, "before it exists.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-8)',
      maxWidth: '58ch',
      fontSize: 'var(--text-md)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-secondary)'
    }
  }, "A projection studio in downtown Coeur d'Alene. Your floor plan is projected at", ' ', /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-primary)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, "true 1:1 scale"), ", your elevations on the wall, and your client walking the design with you when changes are still inexpensive."), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 'var(--space-16) 0 0'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.DotField, {
    opacity: 0.09,
    edge: true,
    style: {
      background: 'var(--surface-sunken)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      aspectRatio: '16 / 7',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      color: 'var(--text-muted)',
      padding: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-2xs)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)'
    }
  }, "Image not supplied with the brand kit"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      fontSize: 'var(--text-sm)',
      maxWidth: '44ch'
    }
  }, "The live site places its concept render of the studio floor here."))), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      fontStyle: 'italic'
    }
  }, "Concept render \xB7 the studio floor at 1:1")));
}
Object.assign(__ds_scope, { SiteWhat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteWhat.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WaitlistDialog.jsx
try { (() => {
function WaitlistDialog({
  open,
  onClose
}) {
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    if (open) setSent(false);
  }, [open]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      background: 'var(--surface-scrim)',
      backdropFilter: 'var(--blur-scrim)',
      WebkitBackdropFilter: 'var(--blur-scrim)',
      display: 'grid',
      placeItems: 'center',
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    role: "dialog",
    "aria-modal": "true",
    style: {
      width: 'min(520px, 100%)',
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-overlay)',
      padding: 'var(--space-10)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, "You're on the list"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-6)',
      fontSize: 'var(--text-md)',
      lineHeight: 'var(--leading-body)'
    }
  }, "We'll write when the floor is ready to walk. Seven founding spots."), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    onClick: onClose,
    style: {
      marginTop: 'var(--space-6)'
    }
  }, "Close")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, "Founding spots are limited"), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--text-xl)',
      fontWeight: 'var(--weight-light)',
      letterSpacing: 'var(--tracking-heading)'
    }
  }, "Be the first inside."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Name",
    placeholder: "Jeremy Decker",
    required: true
  }), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Email",
    type: "email",
    placeholder: "you@studio.com",
    required: true
  }), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Project",
    as: "textarea",
    placeholder: "Where is it in the design process?",
    hint: "Optional. It helps us prepare."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    fullWidth: true
  }, "Join the list"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "button",
    variant: "ghost",
    onClick: onClose
  }, "Cancel")))));
}
Object.assign(__ds_scope, { WaitlistDialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WaitlistDialog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Website.jsx
try { (() => {
function Website({
  assets = '../../assets/logo'
}) {
  const [open, setOpen] = React.useState(false);
  const join = () => setOpen(true);
  return /*#__PURE__*/React.createElement("div", {
    "data-theme": "dark",
    style: {
      background: 'var(--surface-page)',
      color: 'var(--text-primary)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SiteHeader, {
    onJoin: join,
    assets: assets
  }), /*#__PURE__*/React.createElement(__ds_scope.SiteHero, {
    onJoin: join,
    assets: assets
  }), /*#__PURE__*/React.createElement(__ds_scope.SiteWhat, null), /*#__PURE__*/React.createElement(__ds_scope.SiteProcess, null), /*#__PURE__*/React.createElement(__ds_scope.SiteProof, null), /*#__PURE__*/React.createElement(__ds_scope.SiteFaq, null), /*#__PURE__*/React.createElement(__ds_scope.SiteUseCases, null), /*#__PURE__*/React.createElement(__ds_scope.SiteCta, {
    onJoin: join
  }), /*#__PURE__*/React.createElement(__ds_scope.SiteFooter, {
    assets: assets
  }), /*#__PURE__*/React.createElement(__ds_scope.WaitlistDialog, {
    open: open,
    onClose: () => setOpen(false)
  }));
}
Object.assign(__ds_scope, { Website });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Website.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.StepItem = __ds_scope.StepItem;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.IconNames = __ds_scope.IconNames;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.DotField = __ds_scope.DotField;

__ds_ns.LogoLockup = __ds_scope.LogoLockup;

__ds_ns.Rule = __ds_scope.Rule;

__ds_ns.Section = __ds_scope.Section;

__ds_ns.SiteCta = __ds_scope.SiteCta;

__ds_ns.SiteFaq = __ds_scope.SiteFaq;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.SiteHero = __ds_scope.SiteHero;

__ds_ns.SiteProcess = __ds_scope.SiteProcess;

__ds_ns.SiteProof = __ds_scope.SiteProof;

__ds_ns.SiteUseCases = __ds_scope.SiteUseCases;

__ds_ns.SiteWhat = __ds_scope.SiteWhat;

__ds_ns.WaitlistDialog = __ds_scope.WaitlistDialog;

__ds_ns.Website = __ds_scope.Website;

})();
