(() => {
  function anElement(element, props,children) {
    if (isClass(element)) {
      handleClass(element);
    } else if (isStateLessComponent(element)) {
      return element(props);
    } else {
      return handleHtmlElement(element, children);
    }
  }
  function createElement(element, props, ...children) {
    return anElement(element, props, children);
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