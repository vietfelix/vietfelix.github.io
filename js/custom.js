window.onload = function() {
    countUpFromTime();
    countdownToDate();
};

function countUpFromTime() {
    // Set the date we're counting up to
    // new Date auto plus one month
    var startDate = new Date(2019, 6, 23); // 2019/07/23

    // Update the count up every 1 second
    setInterval(function() {

        // Get today's date and time
        var now = new Date();

        // Find the tiem difference between now and the count up date
        var timeDifference  = now - startDate;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('days').innerHTML = days + ' Days';
        document.getElementById('timer').innerHTML = hours + ' Hour ' + minutes + ' Minutes ' + seconds + ' Seconds';
        document.getElementById('continue').innerHTML = '<i class="icon-heart4"></i> #shmily #thuvi #been_together #to_be_continued <i class="icon-heart4"></i>';
    }, 1000);
}

function countdownToDate() {
    var now = new Date();
    var date = new Date(2025, 3, 23);

    var timeDiff = date.getTime() - now.getTime();

    var days = Math.ceil(timeDiff / (1000 * 3600 * 24));

    document.getElementById('countdown').innerHTML = days;
}