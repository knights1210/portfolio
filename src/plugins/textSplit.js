// import ScrollObserver from "./scroll";

 const splitText = function(el) {
  const text = document.querySelector(el);
  const chars = text.innerHTML.trim().split("");
  text.innerHTML = chars.reduce((accu, curr) => {
    curr = curr.replace(/\s+/, "&nbsp;");
    return `${accu}<span class="char">${curr}</span>`;
  }, "");
  // ScrollObserver(".char");
}

export default splitText;