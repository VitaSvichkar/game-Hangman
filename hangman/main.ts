import renderPage from './scripts/renderPage.js';
import { questions } from './scripts/questions.js';
import shuffleArray from './scripts/shuffleArray.js';

const shuffledArray = shuffleArray(questions);
renderPage(shuffledArray);
