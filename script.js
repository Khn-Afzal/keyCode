(() => {
  // GRAB THE ELEMENT
  const keyEl = document.querySelector('#key');
  const keyCodeEl = document.querySelector('#keycode');
  const codeEl = document.querySelector('#code');

  // BIND LISTENERS
  window.addEventListener('keydown', (e) => {
    keyEl.setAttribute('value', e.key === ' ' ? 'Space' : e.key);
    keyCodeEl.setAttribute('value', e.which);
    codeEl.setAttribute('value', e.code);
  });
})();
