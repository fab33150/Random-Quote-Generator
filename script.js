function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const API = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      quotes: [{
        quote: "Life isn't about getting and having, it's about giving and being.",
        author: "Kevin Kruse" }],

      index: 0 });_defineProperty(this, "getRandomIndex",











    () => {
      const { quotes } = this.state;

      if (quotes.length > 0) {
        const index = Math.floor(Math.random() * quotes.length);
        this.setState({
          index });

      }
    });}componentDidMount() {fetch(API).then(res => res.json()).then(res => {this.setState({ quotes: res.quotes }, this.getRandomIndex);});}

  render() {
    const { quotes, index } = this.state;
    const quote = quotes[index];
    const tweetURL = `https://twitter.com/intent/tweet?text=${quote.quote} - ${quote.author}`;

    return (
      React.createElement("div", { className: "wrapper align-items-center d-flex justify-content-center vh-100 " },
      React.createElement("div", { className: "col-6 box p-5 rounded", id: "quote-box" },

      quote &&
      React.createElement("div", { className: "mb-3" },
      React.createElement("p", { id: "text" }, React.createElement("i", { className: "fas fa-quote-left" }), quote.quote), " ", React.createElement("cite", { id: "author", className: "text right" }, "-", quote.author)),





      React.createElement("div", { className: "d-flex justify-content-between" },
      React.createElement("a", { className: "btn btn-primary", id: "tweet-quote", href: tweetURL, target: "_blank" }, React.createElement("i", { className: "fab fa-twitter" }), "Tweet"),
      React.createElement("button", { className: "btn btn-primary",
        onClick: this.getRandomIndex, id: "new-quote" }, "Get Quote")))));




  }}


ReactDOM.render(React.createElement(App, null), document.getElementById('app'));