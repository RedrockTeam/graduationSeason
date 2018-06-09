export default function loadUsername(){
    const username = $('#username')[0].value;
    localStorage.setItem('username', username);
    console.log(localStorage);
}