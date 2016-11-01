import { node, mount } from 'vidom';

mount(
  document.getElementById('app-container'),
  node('div').children('Hellso world!'));
