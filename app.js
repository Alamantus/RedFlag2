import html from 'choo/html';
import choo from 'choo';

import homeView from './views/home';

const app = choo();
app.route('/', (state, emit) => homeView(state, emit));
app.mount('#main');