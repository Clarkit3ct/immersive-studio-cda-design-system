import React from 'react';

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

export const IconNames = Object.keys(PATHS);

export function Icon({ name, size = 20, strokeWidth, label, style, ...rest }) {
  const d = PATHS[name];
  if (!d) return null;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}
      fill="none" stroke="currentColor" strokeWidth={strokeWidth || 1.5}
      strokeLinecap="round" strokeLinejoin="round"
      role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : 'true'}
      focusable="false"
      style={{ display: 'block', flex: 'none', ...style }}
      dangerouslySetInnerHTML={{ __html: d }}
      {...rest}
    />
  );
}

Icon.names = Object.keys(PATHS);
