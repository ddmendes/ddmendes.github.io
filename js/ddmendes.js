$(document).ready(function() {
    $('#btn_en').show().click(btn_en_click);
    $('#btn_resume').show().click(btn_resume_click);
    $('#btn_download').show().click(btn_download_click);

    $('#btn_pt').click(btn_pt_click);
    $('#btn_code').click(btn_code_click);
    $('#btn_download').click(btn_download_click);
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

    return false;
}

function btn_code_click() {
    $('#btn_resume').show();
    $('#btn_code').hide();

    return false;
}

function btn_download_click() {
    return false;
}
