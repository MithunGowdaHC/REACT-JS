const parent = React.createElement(
    "div",
     {id:"parent"}, 
    React.createElement("div", {id:"children"},[
    React.createElement("h1",{}, "i am an h1 tag"),
    React.createElement("h2",{}, "i am an h2 tag")])
    );
    console.log(parent);
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);
    
    