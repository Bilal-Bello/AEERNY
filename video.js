// AEERNY — video.js
// Autoplay mid-page video when it enters viewport (IntersectionObserver)

(function () {
  var video = document.getElementById('midVideo');
  var fallback = document.getElementById('videoFallback');

  if (!video) return;

  // If no video src file exists, keep the fallback visible
  video.addEventListener('error', function () {
    video.style.display = 'none';
    if (fallback) fallback.classList.remove('hidden');
  });

  // Only proceed with observer if video can potentially play
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise
              .then(function () {
                video.classList.add('playing');
                if (fallback) fallback.classList.add('hidden');
              })
              .catch(function () {
                // Autoplay blocked — keep fallback
                video.classList.remove('playing');
              });
          }
        } else {
          video.pause();
          video.classList.remove('playing');
        }
      });
    },
    { threshold: 0.4 }
  );

  observer.observe(video);
})();