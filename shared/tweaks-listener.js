// Shared tweak-applier for the 3 phone prototypes.
// Listens for postMessage from the parent canvas and applies theme/density/font-scale/gentle.
// Each prototype includes this with <script src="../shared/tweaks-listener.js"></script>.

(function () {
  function apply(state) {
    var root = document.documentElement;
    if (state.theme) root.setAttribute('data-theme', state.theme);
    if (state.density) root.setAttribute('data-density', state.density);
    if (state.scale) root.setAttribute('data-scale', state.scale);
    if (state.gentle !== undefined) root.setAttribute('data-gentle', state.gentle ? 'on' : 'off');
  }

  // Initial state from URL hash (so iframe can be reloaded with last state)
  try {
    var h = window.location.hash;
    if (h && h.length > 1) {
      var s = JSON.parse(decodeURIComponent(h.slice(1)));
      apply(s);
    }
  } catch (e) {}

  // Defaults if nothing set
  var root = document.documentElement;
  if (!root.getAttribute('data-theme'))   root.setAttribute('data-theme', 'light');
  if (!root.getAttribute('data-density')) root.setAttribute('data-density', 'standard');
  if (!root.getAttribute('data-scale'))   root.setAttribute('data-scale', 'default');
  if (!root.getAttribute('data-gentle'))  root.setAttribute('data-gentle', 'off');

  window.addEventListener('message', function (ev) {
    var d = ev.data;
    if (!d || d.type !== '__trip_tweaks') return;
    apply(d.state || {});
  });

  // Tell parent we're ready so it can re-send latest state
  try {
    window.parent.postMessage({ type: '__trip_ready' }, '*');
  } catch (e) {}
})();
