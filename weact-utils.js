function isClass(func) {
  return typeof func === 'function'
    && /^class\s/.test(Function.prototype.toString.call(func));
}

function isStateLessComponent(element) {
  return !isClass(element) && typeof element === 'function';
}

function handleClass(clazz, props) {
  const component = new clazz(props);
  return component.render();
}

function handleHtmlElement(element, children) {
  const anElement = document.createElement(element);
  for (let i=0; i<children.length; i++) {
    if (typeof(children[i]) === 'object') {
      anElement.appendChild(children[i]);
    } else {
      anElement.innerHTML += children[i];
    }
  }
  return anElement;
}