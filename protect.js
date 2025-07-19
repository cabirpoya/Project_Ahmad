// src/protect.js

// 🚫 Disable right-click context menu
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

// 🛡️ Disable specific keys: F12, Ctrl+Shift+I, Ctrl+U, Ctrl+S, Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
document.addEventListener('keydown', function (e) {
  const forbidden = [
    'F12',
    'u', 's', 'a', 'c', 'v', 'x',
  ];
  if (
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && e.key === 'I') ||
    (e.ctrlKey && forbidden.includes(e.key.toLowerCase()))
  ) {
    e.preventDefault();
  }
});

// 🧲 Disable drag and drop
document.addEventListener('dragstart', function (e) {
  e.preventDefault();
});

// 🔒 Disable print screen
document.addEventListener('keyup', function (e) {
  if (e.key === 'PrintScreen') {
    navigator.clipboard.writeText('');
  }
});

// 👁️‍🗨️ Blur body if devtools is suspected to be open
setInterval(function () {
  const devtoolsOpen = window.outerHeight - window.innerHeight > 160;
  document.body.style.filter = devtoolsOpen ? 'blur(5px)' : 'none';
}, 500);
