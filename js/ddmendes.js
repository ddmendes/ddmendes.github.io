$(document).ready(function() {
    $('#resume').show();

    $('#btn_en').show().click(btn_en_click);
    $('#btn_code').show().click(btn_code_click);
    $('#btn_download').show();

    $('#btn_pt').click(btn_pt_click);
    $('#btn_resume').click(btn_resume_click);
});

function btn_en_click() {
    $('#btn_en').hide();
    $('#btn_pt').show();

    return false;
}

function btn_pt_click() {
    $('#btn_en').show();
    $('#btn_pt').hide();

    return false;
}

function btn_resume_click() {
    $('#btn_resume').hide();
    $('#btn_code').show();

    $('#editor').hide();
    $('#resume').show();

    return false;
}

function btn_code_click() {
    $('#btn_resume').show();
    $('#btn_code').hide();

    $('#editor').show();
    $('#resume').hide();

    return false;
}

function btn_download_click() {
    return false;
}
