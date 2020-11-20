const navbar = document.querySelectorAll('nav ul li');
const toggle_themes_checkbox = document.querySelector('.toggle-themes-checkbox');
const html = document.querySelector('html');
const effect = document.querySelector('.effect');
const btn = document.querySelector('.btn-social');
const social_panel = document.querySelector('.social__panel');
const close_panel = document.querySelector('.close-panel');
let flag_social = false;

[...navbar].forEach(cur =>{
    cur.firstElementChild.addEventListener('click', ()=>{
        removeActiveLink();
        cur.firstElementChild.classList.add('active');
        effect
    });
});

function removeActiveLink(){
    [...navbar].forEach(cur =>{
        cur.firstElementChild.classList.remove('active');
    });
}

toggle_themes_checkbox.checked = true;

toggle_themes_checkbox.addEventListener('change', ({target})=>{
    if(!target.checked){
        html.style.setProperty('--color-bg', '#FFF');
        html.style.setProperty('--color-big-text', '#FFF');
        html.style.setProperty('--color-normal-text', '#000');
        html.style.setProperty('--color-footer', '#FFF');
        html.style.setProperty('--color-line', '#EFEDED');
        html.style.setProperty('--invert-effect', 0);
        html.style.setProperty('--color-card', '#FFF');
        html.style.setProperty('--color-description-text', '#878686');
        html.style.setProperty('--color-footer-text', '#878686');
        html.style.setProperty('--color-card-shadow', '0 0 .4rem rgba(0,0,0,.2)');
        html.style.setProperty('--filter-value', 'brightness(0) invert(0)');

    }else{
        html.style.setProperty('--color-bg', '#1D1D1D');

        html.style.setProperty('--color-big-text', '#000');
        html.style.setProperty('--color-normal-text', '#E2E2E2');
        html.style.setProperty('--color-footer', '#000');
        html.style.setProperty('--color-line', '#343434');
        html.style.setProperty('--invert-effect', 1);
        html.style.setProperty('--color-card', ' #252525');
        html.style.setProperty('--color-description-text', '#AAAAAA');
        html.style.setProperty('--color-footer-text', '#AAAAAA');
        html.style.setProperty('--color-card-shadow', '0 0 .6rem #464646');
        html.style.setProperty('--filter-value', 'brightness(0) invert(1)');

        // let value = getComputedStyle(html);
        // console.log(value.getPropertyValue('--color-big-text'));
    }
});


window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

btn.addEventListener('click',()=>{
    social_panel.classList.toggle('on',flag_social);
    flag_social = !flag_social;
});


close_panel.addEventListener('click',()=>{
    social_panel.classList.add('on');
    flag_social = !flag_social;
});

function sendEmail() {
	Email.send({
    SecureToken : "<your generated token>",
    To : 'recipient@example.com',
    From : "sender@example.com",
    Subject : "Test Email",
    Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
    }).then(
        message => alert("mail sent successfully")
    );
}