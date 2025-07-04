import renderPage from './scripts/renderPage.js';
import { questions } from './scripts/questions.js';
import getRandomIndex from './scripts/getRandomIndex.js';

getRandomIndex(questions);
renderPage(questions);
