// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import getJoke from '../api/jokeData';
import showJokes from '../pages/jokes';
import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1>Welcome to Joke Generator</h1>
    <h5>Where you can laugh alone in your room.</h5><br />
    <button class="btn btn-danger" id="click-me">Get a Joke!</button><br />
    <hr />`;
  document.querySelector('#click-me').addEventListener('click', () => {
    getJoke().then(showJokes);
  });
  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

init();
