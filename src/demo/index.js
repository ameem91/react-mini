import ReactMini from "../react-mini/ReactMini";

const element = ReactMini.createElement("h1",{className:"myHeader", customProps: "hi"}, "Some text");
console.log(element);