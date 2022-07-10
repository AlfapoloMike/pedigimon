
import { showDigimon } from './card.js';
import { addListeners } from './listener.js';
import { pageChange } from './pageNav.js';
import { createCartTable } from './table.js';


document.addEventListener('DOMContentLoaded', ()=>{
    showDigimon();
    addListeners();
    createCartTable();
    pageChange();
} )




