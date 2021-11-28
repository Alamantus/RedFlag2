import html from 'choo/html';
import choo from 'choo';

import homeView from './views/home';

const app = choo({ href: false });
app.use((state, emitter) => {
  state.selections = [];
  emitter.on('addSelection', (selection) => {
    if (state.selections.length < 3) {
      const selections = new Set(state.selections);
      selections.add(selection);
      state.selections = Array.from(selections);
      emitter.emit('render');
    }
  });
  emitter.on('removeSelection', (selection) => {
    if (state.selections.length > 0) {
      const selections = new Set(state.selections);
      selections.delete(selection);
      state.selections = Array.from(selections);
      emitter.emit('render');
    }
  });
});
app.route('/', (state, emit) => homeView(state, emit));
app.route('/warn.html', (state, emit) => warnView(state, emit));
app.mount('#main');