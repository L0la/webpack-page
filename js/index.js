import dateStr from "./date.js";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import './styles/styles.css';
import '../index.html';

$(document).ready(() => {
    $(".js-content").html(`It's ${dateStr()}`);

    $('.js-modal').modal({
        show: true,
        keyboard: true
    });
});