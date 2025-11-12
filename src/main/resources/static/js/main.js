function navigateTo(page) {
    event.currentTarget.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        switch(page) {
            case 'intro':
                window.location.href = 'intro.html';
                break;
            case 'articles':
                window.location.href = 'catalogue.html';
                break;
            case 'fun':
                window.location.href = 'fun.html';
                break;
            case 'about':
                window.location.href = 'about.html';
                break;
            default:
                console.log('未知页面');
        }
    }, 150);
}

function goBack() {
    if (document.referrer) {
        window.history.back();
    } else {
        window.location.href = 'index.html';
    }
}

window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        goBack();
    }
});