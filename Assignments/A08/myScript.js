/**
 * Created by SlyMongoose on 9/27/2015.
 */
var boolOne = "true";
var boolTwo = true;
var boolThree = true;
var boolFour = true;

$(document).ready(function(){
    $("dd").hide();

    $(".11").addClass("question") .click(function() {
        $(this).next().toggle();

        if (Boolean(boolOne)) {
            $(this).text("Question 1 (+)");
            boolOne = 0;
        }
        else {
            $(this).text("Question 1 (-)");
            boolOne = true;
        }
        $(this).text("Question 1 (+)");
    });

    $(".12").addClass("question") .click(function() {
        $(this).next().toggle();
        $(this).text("Question 1 (+)");
    });

    $(".21").addClass("question") .click(function() {
        $(this).next().toggle();
        $(this).text("Question 1 (+)");
    });

    $(".22").addClass("question") .click(function() {
        $(this).next().toggle();
        $(this).text("Question 1 (+)");
    });
});

function countLinks() {
    var address = document.forms["myForm"]["url"].value;
    var info;

    $.get(address, function(data, status){
        var res = data.match(/href/g).length;
        document.getElementById("something").innerHTML = res;
    });

    return false;
}