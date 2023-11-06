
// For Hovering Text

$(document).ready(function() {
  $('#hoverText').hover(
    function() {
      // Mouse enter animation
      $(this).animate({
        fontSize: '24px',
        opacity: 0.8
      }, 200);
    },
    function() {
      // Mouse leave animation
      $(this).animate({
        fontSize: '16px',
        opacity: 1
      }, 200);
    }
  );
});

// For Scrolling Down

$('#scrollBtn').click(function() {
      $('html, body').animate({
        scrollTop: $('#features').offset().top
      }, 800); // Adjust the speed if needed
    });

// script.js
$(document).ready(function() {
    // Hover effect
    $("#hoverLearn").hover(
        function() {
            $(this).css("background-color", "white");
        },
        function() {
            $(this).css("background-color", "black");
        }
    );

    // Tooltip
    $("#tooltipElement").hover(
        function() {
            $(".tooltip").css("display", "block");
        },
        function() {
            $(".tooltip").css("display", "none");
        }
    );

    // Click event
    $("#clickParagraph").click(function() {
        $(this).toggle();
    });
});


// script.js
$(document).ready(function() {
    $(".animated-logo").each(function(index) {
        setTimeout(function() {
            $(this).css("opacity", "1");
        }.bind(this), 300 * index);

        $(this).on("mouseover", function() {
            $(this).css("transform", "rotate(10deg)").css("transition", "transform 0.5s");
        });

        $(this).on("mouseout", function() {
            $(this).css("transform", "rotate(0deg)");
        });
    });
});


