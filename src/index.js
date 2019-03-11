import $ from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";

const copy = fs.readFileSync(__dirname + '/copyright.txt', 'utf8');

$('#copy').text(copy);

$("#reset").click(function(){
    document.location.reload(true) });