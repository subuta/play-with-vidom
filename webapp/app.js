import * as vidom from 'vidom';
const {mount} = vidom;

const renderHello = ({ name }) => {
  return <div>Hello { name }</div>;
}

const render = () => {
  mount(
    document.getElementById('app-container'),
    renderHello({name: 'World!'})
  );
}

if (document.readyState === 'complete' || document.readyState !== 'loading') {
  render();
} else {
  document.addEventListener('DOMContentLoaded', render);
}
