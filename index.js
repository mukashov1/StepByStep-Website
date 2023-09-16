$(document).ready(function () {
    $('.selectpicker').selectpicker();
    // Get references to the checkbox and header-right elements
    var $menuToggle = $('#menu-toggle');
    var $headerRight = $('.header-right');

    // Listen for changes in the checkbox state
    $menuToggle.on('change', function () {
        if ($menuToggle.is(':checked')) {
            // If the checkbox is checked, set display to 'flex' for header-right
            $headerRight[0].style.display = 'flex';
        } else {
            // If the checkbox is unchecked, set display to 'none' for header-right
            $headerRight[0].style.display = 'none';
        }
    });


    function updateHeaderVisibility() {
        var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if (screenWidth > 700) {
            // If the screen width is less than 700px, hide header-right and show the menu toggle
            $headerRight[0].style.display = 'flex';
        } else {
            // If the screen width is 700px or more, show header-right and hide the menu toggle
            $headerRight[0].style.display = 'none';
        }
    }

    const scriptURL = "https://script.google.com/macros/s/AKfycbyKpKfuypYqFCFPJb3zPCx8AIAcC1Yfzwx425U2Wl39yNpcZlVqdwjbYj6RtCZvr6XJ/exec"
    const form = document.forms['google-sheet']

    // ... (your existing code)

    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            if (response.ok) {
                // If the submission was successful, clear the form values
                alert("JIBERILDI");
            } else {
                console.log('Submission failed.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
        form.reset();
    });

    // ... (your existing code)


    console.log(new FormData(form))

    window.addEventListener('resize', updateHeaderVisibility);
});
