/* import dataStr from "./date.js";
import "../styles/styles.css";
document
    .querySelector('.js-content')
    .innerHTML = `It's ${ dataStr() }`;


 */

import "../index.html";
import dataStr from "./date.js";
import $ from "jquery";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.css";
import "bootstrap";
$(document).ready(() => {

    //print the current time
    $(".js-content").html(`It's ${dataStr()}`);
    $('.js-modal').modal({
        show: true,
        keyboard: true
    });
});