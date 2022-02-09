window.onload = function() {
    countUpFromTime('2019,07,23');
};

function countUpFromTime(countFrom) {
    // Set the date we're counting up to
    var startDate = new Date(countFrom).getTime();

    // Update the count up every 1 second
    setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count up date
        var distance = now - startDate;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerHTML = days + ' Days';
        document.getElementById('timer').innerHTML = hours + ' Hour ' + minutes + ' Minutes ' + seconds + ' Seconds';
        document.getElementById('continue').innerHTML = '<i class="icon-heart4"></i> #shmily #thuvi #been_together #to_be_continued <i class="icon-heart4"></i>';
    }, 1000);
}
