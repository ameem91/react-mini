const hasOwnProperty = Object.prototype.hasOwnProperty;

const ReactElement = function(type, props) {
  const element = {
    type,
    props
  };
  return element;
};

export function createElement(type, config, ...children) {
  const props = {};
  for (const prop in config) {
    if (hasOwnProperty.call(config, prop)) {
      props[prop] = config[prop];
    }
  }
  const childrenLength = children.length;
  props.children = children.length === 1 ? children[0] : children;

  return ReactElement(type, props);
}
