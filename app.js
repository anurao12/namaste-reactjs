import React from "react";
import ReactDOM from "react-dom/client";

// react.createElement = ReactElement-js Object => HTML element(render)

// jsx => babels transpiled to (React.createElement)=> js object=> render to dom as htmlElement

//React element => its more like a variable
const Element = (<h1>This is an element</h1>)

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX 🚀
  </h1>
);

//React component
//componnet composition => component can have another component
const HeadingComponent = () => (
  <div id="container">
    {Element}
    <Title /> 
    <h1 className="heading">Namaste React functional component</h1>
  </div>
);

// we can use react component inside element and element inside component.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
