"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logic_js_1 = __importDefault(require("./logic.js"));
const keyboard_js_1 = __importDefault(require("./keyboard.js"));
function renderPage(questionsArray) {
    const body = document.querySelector('body');
    // canvas
    const canvasWrap = document.createElement('div');
    canvasWrap.classList.add('canvas-wrap');
    const canvas = document.createElement('canvas');
    canvas.id = 'canvas';
    canvas.width = 355;
    canvas.height = 490;
    // modal
    const modalWrap = document.createElement('div');
    modalWrap.classList.add('modal-wrap');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const resultText = document.createElement('h3');
    resultText.classList.add('modal-result');
    const secretWord = document.createElement('p');
    secretWord.classList.add('modal-secret-word');
    secretWord.innerHTML = `<span class="modal-secret-word"></span>`;
    const button = document.createElement('button');
    button.classList.add('modal-btn');
    // page
    const wrap = document.createElement('div');
    wrap.classList.add('wrap');
    const content = document.createElement('div');
    content.classList.add('content');
    const chars = document.createElement('ul');
    chars.classList.add('word-items');
    const hintWrap = document.createElement('div');
    hintWrap.classList.add('hint-wrap');
    const hint = document.createElement('p');
    const mistakesWrap = document.createElement('div');
    mistakesWrap.classList.add('mistakes-wrap');
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    hintWrap.append(hint, mistakesWrap);
    content.append(chars, hintWrap, keyboard);
    canvasWrap.append(canvas);
    wrap.append(canvasWrap, content);
    modal.append(resultText, secretWord, button);
    modalWrap.append(modal);
    body.append(wrap, modalWrap);
    (0, keyboard_js_1.default)();
    (0, logic_js_1.default)(questionsArray);
}
exports.default = renderPage;
