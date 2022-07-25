
import { showDigimon } from './card.js';
import { addListeners } from './listener.js';
import { pageChange } from './pageNav.js';
import { createCartTable } from './table.js';


import { digimons } from './db.js';
import { cardFilter } from './filter.js';
import { checkStorage } from './checkLocalStorage.js';


document.addEventListener('DOMContentLoaded', ()=>{
    cardFilter()
    createCartTable();
    showDigimon(digimons);
    addListeners(digimons);
    checkStorage()
} )


