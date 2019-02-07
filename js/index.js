var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} //Redux:
var ADD = "ADD";
var defaultState = {
  text: 'defaultText',
  author: 'defaultAuthor' };

var generateQuote = function generateQuote() {
  return {
    text: Math.random().toString(36).substr(2, 5),
    author: Math.random().toString(36).substr(2, 5) };

};

var addQuote = function addQuote() {
  var newQuote = generateQuote();
  return {
    type: ADD,
    text: newQuote.text,
    author: newQuote.author };

};

var quoteReducer = function quoteReducer() {var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;var action = arguments[1];
  switch (action.type) {
    case ADD:
      return {
        text: action.text,
        author: action.author };


    default:
      return state;}

};

var store = Redux.createStore(
quoteReducer,
Redux.applyMiddleware(ReduxThunk.default));


//React:
var Provider = ReactRedux.Provider;
var connect = ReactRedux.connect;var

Quote = function (_React$Component) {_inherits(Quote, _React$Component);
  function Quote(props) {_classCallCheck(this, Quote);var _this = _possibleConstructorReturn(this, (Quote.__proto__ || Object.getPrototypeOf(Quote)).call(this,
    props));
    _this.addQuote = _this.addQuote.bind(_this);return _this;
  }_createClass(Quote, [{ key: 'addQuote', value: function addQuote(
    event) {
      this.props.addNewQuote();
    } }, { key: 'render', value: function render()
    {
      return (
        React.createElement('div', { id: 'wrapper' },
          React.createElement('div', { id: 'quote-box' },
            React.createElement('p', { id: 'text' }, this.props.text),
            React.createElement('p', { id: 'author' }, this.props.author),
            React.createElement('button', { id: 'new-quote', onClick: this.addQuote }, 'Add Quote'),
            React.createElement('br', null),
            React.createElement('br', null),
            React.createElement('a', { id: 'tweet-quote', href: 'twitter.com/intent/tweet' }, 'Tweet'))));



    } }]);return Quote;}(React.Component);


var mapStateToProps = function mapStateToProps(state) {
  return {
    text: state.text,
    author: state.author };

};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addNewQuote: function addNewQuote() {
      dispatch(addQuote());
    } };

};

var Container = connect(
mapStateToProps,
mapDispatchToProps)(
Quote);

ReactDOM.render(
React.createElement(Provider, { store: store },
  React.createElement(Container, null)),

document.getElementById("root"));