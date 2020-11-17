import "../index.html";
import dataStr from "./date.js";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
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