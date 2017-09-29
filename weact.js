(() => {
  function anElement(element, props,children) {
    if (isClass(element)) {
      return handleClass(element, props);
    } else if (isStateLessComponent(element)) {
      return element(props);
    } else {
      return handleHtmlElement(element, children);
    }
  }
  function createElement(element, props, ...children) {
    return anElement(element, props, children);
  }
  class Component {
    constructor(props) {
      this.props = props;
    }
  }
  window.Weact = {
    createElement,
    Component
  };
  window.WeactDOM = {
    render: (el, dom) => {
      dom.appendChild(el);
    }
  }
})();