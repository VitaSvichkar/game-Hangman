"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const renderPage_js_1 = __importDefault(require("./scripts/renderPage.js"));
const questions_js_1 = require("./scripts/questions.js");
const shuffleArray_js_1 = __importDefault(require("./scripts/shuffleArray.js"));
const shuffledArray = (0, shuffleArray_js_1.default)(questions_js_1.questions);
(0, renderPage_js_1.default)(shuffledArray);
