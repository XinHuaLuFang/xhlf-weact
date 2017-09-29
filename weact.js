(() => {
  function anElement(el, children) {
    if (isClass(el)) {
      const component = new el();
      return component.render();
    } else if (typeof el === 'function') {
      return el();
    } else {
      const elem = document.createElement(el);
      for (let i = 0; i < children.length; i++) {
        if (typeof children[i] === 'object') {
          elem.appendChild(children[i]);
        } else {
          elem.innerHTML += children[i];
        }
      }
      return elem;
    }
  }
  function createElement(el, props, ...children) {
    return anElement(el, children);
  }
  function isClass(func) {
    return typeof func === 'function'
      && /^class\s/.test(Function.prototype.toString.call(func));
  }
  window.Weact = {
    createElement
  };
  window.WeactDOM = {
    render: (el, dom) => {
      dom.appendChild(el);
    }
  }
})();