function openModal(mn){
    let modal = document.getElementById(mn);
    let lang = document.getElementById('changeLang');
    if(typeof modal == 'undefined' || modal == null) return;
    modal.style.display = 'Block';
    lang.style.position = 'absolute';
    lang.style.opacity = 0;
}
function closeModal(mn){
    let modal = document.getElementById(mn);
    let lang = document.getElementById('changeLang');
    if(typeof modal == 'undefined' || modal == null) return;
    modal.style.display = 'none';
    lang.style.position = 'fixed';
    lang.style.opacity = 1;
}

function openMenu(mn){
    let modal = document.getElementById(mn);
    if(typeof modal == 'undefined' || modal == null) return;
    modal.style.display = 'Block';
}

function closeMenu(mn, mn2, mn3, mn4){
    let modal = document.getElementById(mn);
    let modal2 = document.getElementById(mn2);
    let modal3 = document.getElementById(mn3);
    let modal4 = document.getElementById(mn4);
    let lang = document.getElementById('changeLang');
    if(typeof modal == 'undefined' || modal == null) return;
    modal.style.display = 'none';
    modal2.style.display = 'none';
    modal3.style.display = 'none';
    modal4.style.display = 'none';
    lang.style.position = 'fixed';
    lang.style.opacity = 1;
}

function changeLang(mn, mn2){
    let body = document.getElementById(mn);
    let body2 = document.getElementById(mn2);
    if(typeof body == 'undefined' || body == null) return;
    body.style.display = 'Block';
    body2.style.display = 'none';
}