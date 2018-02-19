$(document).ready(function() {
    
    $('#submitFormButton').click(function() {
        $('#message').html('<h4>Page for ' + $('#subjectName').val() + ' added!</h4>');
        $('#submitMessage').show();
        $('#addSubjectForm').hide();

        $('#addSubjectForm').find('.subjectForm').each(function(){
            $(this).val('');
        });
    });

    $('#addAnotherSubject').click(function() {
        $('#submitMessage').hide();
        $('#addSubjectForm').show();
    });
});