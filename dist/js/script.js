    // navigation

    // tabs
function opentab(evt, tabNumber) {
    const tabcontent = document.getElementsByClassName('tabcontent');
    const tablink = document.getElementById(tabNumber);
    
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove('showtab');
    }

    const tablinks = document.getElementsByClassName('tablinks');
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(' active', '');
        }

    tablink.className +=' showtab';
    evt.currentTarget.className += ' active';
}