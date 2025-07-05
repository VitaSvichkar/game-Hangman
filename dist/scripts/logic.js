"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const refreshGame_js_1 = __importDefault(require("./refreshGame.js"));
const checks_js_1 = require("./checks.js");
const drawBody_js_1 = __importDefault(require("./drawBody.js"));
function logic(arr) {
    const modalBtn = document.querySelector('.modal-btn');
    const modalWrap = document.querySelector('.modal-wrap');
    const keyboard = document.querySelector('.keyboard');
    const updateGame = (0, refreshGame_js_1.default)(arr);
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let drawBody = (0, drawBody_js_1.default)(ctx);
    let gameState = updateGame();
    gameState.draw = drawBody; //
    gameState.sound = addSound;
    const audio = new Audio('./click.mp3');
    window.addEventListener('keydown', (e) => {
        if (modalWrap.classList.contains('modal-visible')) {
            if (e.key === 'Enter') {
                newGame();
            }
        }
        (0, checks_js_1.checkChar)(e, gameState);
    });
    modalBtn.addEventListener('click', () => {
        newGame();
    });
    keyboard.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('key')) {
            (0, checks_js_1.checkChar)(e, gameState);
        }
    });
    function addSound() {
        audio.currentTime = 0;
        audio.play();
    }
    function newGame() {
        addSound();
        modalWrap.classList.remove('modal-visible');
        gameState = updateGame();
        gameState.draw = drawBody;
        gameState.sound = addSound;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBody = (0, drawBody_js_1.default)(ctx);
        const keyKeyboard = Array.from(document.querySelectorAll('.key'));
        keyKeyboard.forEach((item) => {
            item.classList.remove('key-inactive');
        });
    }
}
exports.default = logic;
