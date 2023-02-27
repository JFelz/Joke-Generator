import renderToDOM from '../utils/renderToDom';

const showJokes = (array) => {
  let domString = '';
  array.forEach((item) => {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${item.setup}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Joke Generator</h6>
      <p class="card-text">${item.delivery}</p>
    </div>
  </div>`;
  });
  renderToDOM('#Joke-Show', domString);
};

export default showJokes;
