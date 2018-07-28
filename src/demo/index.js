import { createElement } from "../react-mini/ReactMiniElement";

const element = createElement("h1",{className:"myHeader", customProps: "hi"}, "Some text");
console.log(element);
console.log(typeof element);