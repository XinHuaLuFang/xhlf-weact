// Stateless component props
const Hello = ({ name }) => {
  return Weact.createElement('div', null, `Hello ${name}`);
};
const helloWorld = Weact.createElement(Hello, {name: '大幂幂'});
WeactDOM.render(helloWorld, document.getElementById('root'));

// Class component props
class CHello extends Weact.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return Weact.createElement('div', null, `Hello ${this.props.name}`);
  }
}
const CHelloWorld = Weact.createElement(CHello, {name: '大幂幂'});
WeactDOM.render(CHelloWorld, document.getElementById('root'));