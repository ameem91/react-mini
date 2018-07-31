function legacyCreateRootFromDOMContainer(container) {
    //TODO
}

function legacyRenderSubtreeIntoContainer(
  parentComponent,
  children,
  container
) {
  const root = (container._reactRootContainer = legacyCreateRootFromDOMContainer(
    container
  ));

  //TODO unbatched updates
}

const ReactDOM = {
  render(element, container) {
    return legacyRenderSubtreeIntoContainer(null, element, container);
  }
};
