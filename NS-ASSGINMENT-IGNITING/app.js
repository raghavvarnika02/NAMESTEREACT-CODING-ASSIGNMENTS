import React from "react";
import ReactDOM from "react-dom/client";

/* single tag element called as react element

  const reactElement = React.createElement(
    "h2",
    { id: "title2", key: "h2" },
    "Heading 2"
  );

*/

//this is also a react element
const reactElement = (
  <h3 id="title2" key="h2">
    Nameste React using react element
  </h3>
);

//Components:
//Functional Component: JavaScript function
//Class based component

//1: Functional Component
//2. Name of component starts with capital letter though its not mandatory
const HeaderComponent = () => {
  return <h4>1. Hi I am functional component using arrow function</h4>;
};

//2.1 : Writing complicated structure using ()
const HeaderComponentWithSubTitle = () => {
  //right way
  return (
    <div>
      <h1>2. Hi I am functional component using arrow function</h1>
      <h2>2. I am a complex subtitle as I use return</h2>
    </div>
  );
};

//2.2 : Writing complicated structure using () but no return
const HeaderComponentWithSubTitleAndNoReturn = () => (
  <div>
    <h1>3. Hi I am functional component using arrow function</h1>
    <h2>3. I am a complex subtitle as I use return</h2>
  </div>
);

//2.3 : Writing complicated structure using react element
//Here we are also using Component composition: Passing component into component
const HeaderComponentUsingReactElement = () => {
  //right way
  return (
    <div>
      {1 + 2}
      {reactElement}
      {HeaderComponent()}
      <HeaderComponentWithSubTitle />
      <h1>4. Hi I am functional component using Main arrow function</h1>
      <h2>4. I am a complex subtitle as I use return</h2>
    </div>
  );
};

//2.3 : Writing complicated structure using react element
const HeaderComponentUsingAnotherFunctionComponent = () => {
  //right way
  return (
    <div>
      {reactElement}
      <h1>5. Hi I am functional component using arrow function</h1>
      <h2>5. I am a complex subtitle as I use return</h2>
    </div>
  );
};

const ReactFragmentInsideOtherReactFragment = () => {
  //Not work way
  <>
    <>
      {reactElement}
      <h1>5. Hi I am functional component using arrow function</h1>
      <h2>5. I am a complex subtitle as I use return</h2>
    </>
  </>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

/*Change in syntax when we use functinal components:
old syntax: root.render(reactElement);
*/

//RECOMMENDED: new
root.render(<HeaderComponentUsingReactElement />);

//This will also work since its a function
//root.render(HeaderComponentUsingReactElement());
