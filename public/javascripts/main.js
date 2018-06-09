import compress from './compress.js'
import loadImg from './loadImg.js'
import loadUsername from './loadUsername.js'


// console.log('loadsuccess');
// console.log(loadImg);

// window.loadImg = loadImg;
// window.loadUsername = loadUsername;

document.getElementById('camera_image').addEventListener('change', loadImg)
document.getElementById('username').addEventListener('change', loadUsername)
