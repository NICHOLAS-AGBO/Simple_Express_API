'use script';

const mailBtn = document.querySelector('#sendMsg');

mailBtn.addEventListener('click', mailMe);

async function mailMe() {
    const res = await fetch('/mail');
    const data = await res.json();
    alert("Hello, "+data);
}