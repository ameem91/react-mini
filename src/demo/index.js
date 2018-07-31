import React from "../react/React";

const element1 = React.createElement("h1",{className:"myHeader", customProps: "hi"}, "Some text");
const element2 = React.createElement("h1",{className:"myHeader", customProps: "hi"}, "Some text", "Some more text");
console.log(element1);
console.log(element2);