
//used by the button group to hide and show images
$(document).ready(function () { //this page will display at first which is why it uses document.ready
    $("#menu button").on('click', function (evt) {
        var page = $(this).data('page');
        $("#pages .page:not('.hide')").stop().fadeOut('slow', function () {
            $(this).addClass('hide');
            $('#pages .page[data-page="' + page + '"]').fadeIn('slow').removeClass('hide');
            console.log(evt);
        });
    });

    $(".showmoreInfo").hide();

    //Not compatabile with ie. so changed to a javascript function



   // $(".showtextInfo ").click(function(){    
    //    $(this).parent().find('.showmoreInfo').slideToggle(1000);
       // $(this).html($(this).html() == 'More Information' ? 'Hide  Information' : 'More Information');
   // });
    $(".stadiumDescription").hide();
    $('.showtext').click(function () {
        $(this).parent().find('.stadiumDescription').slideToggle(1000);
        $(this).html($(this).html() == 'See Full Description' ? 'Hide Description' : 'See Full Description');


    });

});






// Create a JSON Object................
var json_obj = {

    "stats": [{

        "name": "Germany",
        "players": [" Mesut Ozil", " Juilian Draxler", " Mario Gotze"],
        "goals": ["2", "3", "5"],
        "Assists": ["2", "3", "5"],
        "Minutes": ["720", "321", "556"],
        "Distance": ["54km", "14km", "89km"],
    }, {
        "name": "France",
        "players": [" Paul Pogba", " Anythony Martial", " Killian mbappe"],
        "goals": ["2", "3", "5"],
        "Assists": ["2", "3", "5"],
        "Minutes": ["712", "311", "652"],
        "Distance": ["23km", "52km", "76km"],
    }, {
        "name": "Spain",
        "players": [" David sliva", " Sergio ramos", " Alvaro Morata"],
        "goals": ["2", "3", "5"],
        "Assists": ["2", "3", "5"],
        "Minutes": ["200", "322", "775"],
        "Distance": ["4km", "3km", "74km"],
    }]
}
//JSON Object End

//Create table and fetch data from JSON Object.
$(document).ready(function () {


    $.getJSON("../pru/js/data.json", function (result) {
        $.each(result, function (i, field) {
            $("div").append(field + " ");

        });
    });

    var number_of_rows = json_obj.stats.length;
    var k = 0;
    var table_body = '<table id="ffff"class="table table-striped-lightest-blue table-hover"><thead><tr><th>players</th><th>Team </th><th>goals</th><th> Assists</th><th> Minutes</th><th>km Covered</th></tr></thead><tbody>';
    for (j in json_obj.stats) {
        for (i = 0; i < json_obj.stats.length; i++) {
            table_body += '<tr>';
            table_body += '<td>';
            table_body += json_obj.stats[k].players[i]; //print players

            table_body += '<td>';
            table_body += json_obj.stats[k]["name"]; //print team
            table_body += '</td>';

            table_body += '<td>';
            table_body += json_obj.stats[k].goals[i]; //print goals
            table_body += '</td>';

            table_body += '<td>';
            table_body += json_obj.stats[k].Assists[i]; //print Assists
            table_body += '</td>';

            table_body += '<td>';
            table_body += json_obj.stats[k].Minutes[i]; //print minutes
            table_body += '</td>';

            table_body += '<td>';
            table_body += json_obj.stats[k].Distance[i]; //print distance
            table_body += '</td>';

        }
        k++;
    }

    table_body += '</tbody></table>';
    $('#tableDiv').html(table_body);
    //display data..........

    // for search function
    $("#search").on("keyup", function () {//keyup fucntion is used to search quickly and dynamically
        var value = $(this).val().toLowerCase();
        $("table tr").filter(function (index) {
            if (index > 0) {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)//plave text to lowercase and search table

            }
        });
    });

});


const resultBox = document.getElementById('result')
const messages = ["3,240 adidas balls, including both training and match balls, were used during the tournament.",
    "280,000 kilometres were flown by the teams during the tournament - the equivalent of seven laps around the world",
    "There were fewer red cards at the 2014 World Cup than any other edition since 1986 (8)",
    "171 goals, an average of 2.67 per game, made Brazil 2014 the joint-highest-scoring World Cup of all time, level with France 1998",
    "Belgium reached the quarter-final stage, despite only holding a lead for 52 minutes in their five matches combined",
    "Brazil committed 31 fouls in their quarter-final win over Colombia; the most fouls that they had made in a single World Cup game since records began in 1966",
    "Miroslav Klose became the top scoring player in World Cup history with his strike against Brazil in the semi-finals (16 goals).",
    "Germany are the first European team to win the World Cup in Latin America"
];
const length = messages.length;

const getNextIdx = (idx = 0, length, direction) => {
    switch (direction) {
        case 'next': return (idx + 1) % length;
        case 'prev': return (idx == 0) && length - 1 || idx - 1;
        default: return idx;
    }
}

let idx; // idx is undefined, so getNextIdx will take 0 as default
const getNewIndexAndRender = (direction) => {
    idx = getNextIdx(idx, length, direction);
    result.innerHTML = messages[idx]
}

getNewIndexAndRender();

/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) { //when height is more then 100 button will fade in 
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function () {
    $("#back2Top").click(function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, "slow"); //onlick button will sloly go to the top of page
        return false;
    });

});





function ValidateForm() {

    "use strict";
    //reference a variable to the form elements
    var firstname = document.ContactForm.firstname;
    var namelast = document.ContactForm.namelast;
    var Town = document.ContactForm.Town;
    var Street = document.ContactForm.Street;
    var city = document.ContactForm.city;
    var state = document.ContactForm.state;
    var phoneprimary = document.ContactForm.phoneprimary;
    var phonesecondary = document.ContactForm.phonesecondary;
    var email = document.ContactForm.email;
    var email2 = document.ContactForm.email2;
    var feedback = document.ContactForm.feedback;

    /// regular exprerssion for the form valdation
    var letters = /^[A-Za-z]+$/;
    var numbers = /^[0-9]+$/;
    var apt = /^[0-9A-Za-z]+$/;
    var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
    var illegalChars = /[\(\)\<\>\,\;\:\\\"\[\]]/;

    //Name ///////////////////////////////////



    if (firstname.value.length < '3') {

        document.getElementById('fname').innerHTML = 'Must be more then 3 ';
        return false;

    } else if (firstname.value.length > '255') {

        document.getElementById('fname').innerHTML = 'Name is too big ';
        return false;

    } else if (!letters.test(firstname.value)) {

        document.getElementById('fname').innerHTML = 'illegall charathers ';
        return false;

    } else {
        document.getElementById('fname').innerHTML = '';

    }

    // last Name ///////////////////////////////////
    var lname = document.getElementById('lname')
    var innerHTML = '';

    if (namelast.value.length < '3') {

        lname.innerHTML = errornameshort;
        return false;

    } else if (namelast.value.length > '255') {

        lname.innerHTML = 'Name is too big ';
        return false;

    } else if (!letters.test(namelast.value)) {

        lname.innerHTML = 'illegall charathers ';
        return false;

    } else {
        document.getElementById('lname').innerHTML = '';


    }
    document.getElementById('lname').innerHTML = innerHTML;

    //Town ///////////////////////////////////

    if (Town.value.length < '3') {

        document.getElementById('addr').innerHTML = 'Must be more then 3 ';
        return false;

    } else if (Town.value.length > '255') {

        document.getElementById('addr').innerHTML = 'Name is too big ';
        return false;

    } else if (!letters.test(Town.value)) {

        document.getElementById('addr').innerHTML = 'illegall charathers ';
        return false;

    } else {
        document.getElementById('addr').innerHTML = '';

    }

    //aptsuite ///////////////////////////////////

      if (Street.value.length > '55') {

        document.getElementById('house').innerHTML = 'Name is too big ';
        return false;

    } else if (!apt.test(Street.value)) {

        document.getElementById('house').innerHTML = 'illegall charathers ';
        return false;

    } else {
        document.getElementById('house').innerHTML = '';
    }

    //city ///////////////////////////////////

     if (city.value.length < '3') {

        document.getElementById('cty').innerHTML = 'Must be more then 3 ';
        return false;

    } else if (city.value.length > '255') {

        document.getElementById('cty').innerHTML = 'Name is too big ';
        return false;

    } else if (!letters.test(city.value)) {

        document.getElementById('cty').innerHTML = 'illegall charathers ';
        return false;

    } else {
        document.getElementById('cty').innerHTML = '';
    }

    //Phone number ///////////////////////////////////

   if (phoneprimary.value.length < '9') {

        document.getElementById('pnumber').innerHTML = 'Number too small ';
        return false;

    } else if (phoneprimary.value.length > '9') {

        document.getElementById('pnumber').innerHTML = 'Number is too big ';
        return false;

    } else if (!numbers.test(phoneprimary.value)) {

        document.getElementById('pnumber').innerHTML = 'illegall charathers ';
        return false;

    } else {
        document.getElementById('pnumber').innerHTML = '';
        sessionStorage.setItem('number', phoneprimary.value);
    }

    //Second Phone number ///////////////////////////////////
   if (phonesecondary.value.length < '3') {

        document.getElementById('snumber').innerHTML = 'Must be more then 3 ';
        return false;

    } else if (phonesecondary.value.length > '255') {

        document.getElementById('snumber').innerHTML = 'Name is too big ';
        return false;

    } else if (!numbers.test(phonesecondary.value)) {

        document.getElementById('snumber').innerHTML = 'illegall charathers ';
        return false;

    } else {
        document.getElementById('snumber').innerHTML = '';
        sessionStorage.setItem('number', phonesecondary.value);
    }

    //email  ///////////////////////////////////
    if (email.value.length < '3') {

        document.getElementById('emailaddr').innerHTML = 'Must be more then 3 ';
        return false;

    } else if (email.value.length > '255') {

        document.getElementById('emailaddr').innerHTML = 'Email is too big ';
        return false;

    } else if (!emailFilter.test(email.value)) {

        document.getElementById('emailaddr').innerHTML = 'Must have the @ Symbol ';
        return false;

    } else {
        document.getElementById('emailaddr').innerHTML = '';
        sessionStorage.setItem('email1', email.value);

    }

    //email  2  ///////////////////////////////////
   if (email2.value.length < '3') {

        document.getElementById('emailaddr2').innerHTML = 'cant be less then 3';
        return false;

    } else if (email2.value.length < '3') {

        document.getElementById('emailaddr2').innerHTML = 'Must be more then 3 ';
        return false;

    } else if (email2.value.length > '255') {

        document.getElementById('emailaddr2').innerHTML = 'Name is too big ';
        return false;

    } else if (!emailFilter.test(email2.value)) {
        document.getElementById('emailaddr2').innerHTML = 'Must have the @ symbol ';
        return false;


    } else {
        document.getElementById('emailaddr2').innerHTML = '';
        sessionStorage.setItem('email2', email2);


    }


    if (email.value === email2.value) {

    } else {//if emails dont match
        document.getElementById('emailaddr2').innerHTML = 'emails dont match';
        document.getElementById('emailaddr').innerHTML = 'emails dont match';
        return false;
    }


    if (feedback.value < '5') {

        document.getElementById('comments').innerHTML = 'Cannot be empty';
        return false;

    }

    return true;//once form correct show alert

}

function Resegt() {
    document.getElementById("ContactForm").reset();
   
}