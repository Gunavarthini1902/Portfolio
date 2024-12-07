
window.onload = function() {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(function(bar) {
      const skill = bar.getAttribute('data-skill');
      bar.style.setProperty('--progress', skill);
      bar.querySelector('::before').style.width = skill;
    });
  };
  