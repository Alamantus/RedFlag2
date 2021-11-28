import html from 'choo/html';

import { warnings } from '../constants';

export default (state, emit) => {
    return html`<main id="main" class="c">
    <form onsubmit=${e => e.preventDefault()} action="warn.html">
      <p>
        <label class="bold" for="warnings">
          Warnings
        </label>
        ${state.selections.map(selection => {
          return html`<button class="small pill btn error ph2 pv1 mr2" title="Click to remove" onclick=${event => emit('removeSelection', selection)}>
            ${selection} \u00D7
          </button>`;
        })}
        <select id="warnings" name="about" onchange=${event => emit('addSelection', event.target.value)} class="card w-100">
          ${warnings.map(warning => html`<option>${warning.text}</option>`)}
        </select>
      </p>
      <p>
        <label class="bold" for="url">
          URL
        </label>
        <input id="url" name="at" class="card w-100" placeholder="Link to Warn About" />
      </p>
      <p>
        <button class="rounded btn primary">
          Get Link!
        </button>
      </p>
    </form>
  </main>`;
}