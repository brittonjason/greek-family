$(document).ready(function() {
    
    function openTab(button, contentName) {
        $('.tabcontent').hide();
        $('.tablinks active').attr('class', 'tablinks');
        $(contentName).show();
        button.attr('class', 'tablinks active');
    }

    $('#parentsButton').click(function() {
        openTab($(this), '#Parents')
    });

    $('#consortButton').click(function() {
        openTab($(this), '#Consort')
    });

    $('#childrenButton').click(function() {
        openTab($(this), '#Children')
    });

    $('#siblingsButton').click(function() {
        openTab($(this), '#Siblings')
    });


});