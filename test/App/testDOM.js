import { JSDOM } from 'jsdom';

const { document } = new JSDOM('').window;
global.document = document;
global.window = document.defaultView;
global.navigator = global.window.navigator;
