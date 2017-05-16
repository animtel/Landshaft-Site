/**
 * Created by chacaroon on 08.04.17.
 */
document.body.insertBefore(document.querySelector('link[rel=import]').import.querySelector('#top-menu').cloneNode(true), document.body.firstChild);
document.body.appendChild(document.querySelector('link[rel=import]').import.querySelector('#footer').cloneNode(true));
document.body.appendChild(document.querySelector('link[rel=import]').import.querySelector('#topBtn').cloneNode(true));
document.body.appendChild(document.querySelector('link[rel=import]').import.querySelector('#scripts').cloneNode(true));