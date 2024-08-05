window.addEventListener('DOMContentLoaded', function() {
        //  http://localhost:8888/   В МАМП preferences
    //  npx json-server db.json запуск сервера
    const tabs = require('./modules/tabs'),
    modal = require('./modules/modal'),
    timer = require('./modules/timer'),
    cards = require('./modules/cards'),
    calc = require('./modules/calc'),
    forms = require('./modules/forms'),
    slider = require('./modules/slider');

tabs();
modal();
timer();
cards();
calc();
forms();
slider();
});