$(document).ready(function() {
            // Show/Hide content button
            $("#showContentBtn").click(function() {
                $("#extraContent").slideToggle(); // Toggle content with slide animation
                $(this).text(function(i, text){
                    return text === "Show More" ? "Show Less" : "Show More";
                });
            });

            // Hamburger menu toggle
            $('#hamburgerBtn').click(function() {
                $('#navMenu').toggleClass('active');
                $(this).toggleClass('active');
            });
        });