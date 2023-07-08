const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnLogin = document.querySelector('.btnLogin-popup');
const btnClose = document.querySelector('.icon-close');

registerlink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnLogin.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});

btnClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});
