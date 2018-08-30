$(function () {

    function myfunction(){
        var x = document.getElementById("Logo");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


    function hover(ContinentHover) {
        var elem = document.getElementsByClassName(ContinentHover);
        var test = document.getElementsByClassName('continent-container');
        for (var i = 0; i < elem.length; i++) {
            elem[i].addEventListener('mouseover', mouseOver);
            elem[i].addEventListener('mouseout', mouseOut);
        }

        function mouseOver(evt) {

            console.log(evt);
            var container = evt.currentTarget;
            var detailsPanelId = container.getAttribute('data-details');
            var detailsPanel = document.getElementById(detailsPanelId);
            console.log('Panel Info', detailsPanel);
            console.log('panel Id', detailsPanelId);
            detailsPanel.classList.remove('hide');
        }

        function mouseOut(evt) {
            console.log(evt);
            var container = evt.currentTarget;
            var detailsPanelId = container.getAttribute('data-details');
            var detailsPanel = document.getElementById(detailsPanelId);
            console.log('Panel Info', detailsPanel);
            console.log('panel Id', detailsPanelId);
            detailsPanel.classList.add('hide');
        }

    }

    hover('continent-container');

    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the image and insert it inside the modal
    var img = document.getElementById('myImg');
    var modalImg = document.getElementById("img01");

    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        console.log('I just ran');

    }

    var span = document.getElementsByClassName("close")[0];


    // Get the modal
    var modal = document.getElementById('myModal2');

    // Get the image and insert it inside the modal
    var img = document.getElementById('myImg2');
    var modalImg = document.getElementById("img02");

    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        console.log('I just ran');

    }

    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal


    $(window).scroll(function () {
        var hT = $('#counter').offset().top, // once you scroll past the div counter the script will start
            hH = $('#counter').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();

        if (wS > (hT + hH - wH)) {

            $('.count').each(function () {

                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text() //the number will start to increment
                }, {
                        duration: 4000, //for 4  seconds

                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
            }); {
                $('.count').removeClass('count').addClass('counted'); //ensures that the numbers dont go back down to 0 by changing class name

            };
        }
    });
})();


function closeModal() {
    document.getElementById('myModal2').style.display = "none";
}

