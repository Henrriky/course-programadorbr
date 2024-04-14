const root = document.querySelector("#root");

const title1 = React.createElement("h1", { id: "Título principal" }, "Hello World");
const title2 = React.createElement("h2", { id: "Título principal" }, "Subtítulo");

const headline = React.createElement("div", null, title1, title2);

ReactDOM.render(headline, root)