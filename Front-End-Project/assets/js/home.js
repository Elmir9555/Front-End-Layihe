var clock = $('.clock').FlipClock({
    clockFace: 'DailyCounter',
    autoStart: false,
    callbacks: {
      stop: function() {
        $('.message').html('The clock has stopped!')
      }
    }
});

// set time
clock.setTime(220880);

// countdown mode
clock.setCountdown(true);

// start the clock
clock.start();