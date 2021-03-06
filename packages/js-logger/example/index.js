import Logger from '../src/index';

let message = '';

const getMessage = () => {
    message = document.getElementById('print-test').value;
};

window.jsDebug = () => {
    getMessage();
    Logger.debug(message);
};

window.jsInfo = () => {
    getMessage();
    Logger.info(message);
};

window.jsLog = () => {
    getMessage();
    Logger.log(message);
};

window.jsWarn = () => {
    getMessage();
    Logger.warn(message);
};

window.jsError = () => {
    getMessage();
    Logger.error(message);
};

window.jsTable = () => {
    getMessage();
    Logger.table(message);
};

window.JsLogger = Logger;

window.jsInit = (e) => {
    e.preventDefault();
    const level = Array.from(e.target.querySelectorAll('input[type="checkbox"]')).reduce((obj, input) => {
        obj[input.name] = input.checked;
        return obj;
    }, {});
    Logger.init({
        enable: true,
        level,
    });
};
