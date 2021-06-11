const ScrollObserver = (el) => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  };

  const els = document.querySelectorAll(el);
  els.forEach((target) => onIntersect(target, options));

  function onIntersect(target, options = {}) {
    const observer = new IntersectionObserver(addClass, options);
    observer.observe(target);
  }
  function addClass(entries) {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("inview");
      }
    }
  }
};

export default ScrollObserver;
