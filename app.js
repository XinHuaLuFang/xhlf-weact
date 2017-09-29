// Stateless component props
const Hello = ({ name }) => {
  return Weact.createElement('div', null, `Hello ${name}`);
};
const helloWorld = Weact.createElement(Hello, {name: '大幂幂'});
WeactDOM.render(helloWorld, document.getElementById('root'));