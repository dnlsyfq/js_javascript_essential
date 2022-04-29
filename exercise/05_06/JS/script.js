
const fig = document.querySelector('.featured-image');
const img = fig.querySelector('img');
const altImg  = img.getAttribute('alt');
// console.log(altImg);
const figCap = document.createElement('figcaption');
const figCapText = document.createTextNode(altImg);
// figCap.textContent = 'Earthrise on the moon!';

figCap.appendChild(figCapText);
fig.appendChild(figCap);

