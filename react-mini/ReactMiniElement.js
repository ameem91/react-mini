const hasOwnProperty = Object.prototype.hasOwnProperty;

const ReactMiniElement = function(type, props) {
  const element = {
    type,
    props
  };
  return element;
};

module.exports = function createElement(type, config, ...children) {
  const props = {};
  for (prop in config) {
    if (hasOwnProperty.call(config, prop)) {
      props[prop] = config[prop];
    }
  }
  const childrenLength = children.length;
  props.children = children.length === 1 ? children[0] : children;

  return ReactMiniElement(type, props);
}
