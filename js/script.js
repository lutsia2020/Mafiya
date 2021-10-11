const imageAvatar = document.querySelector('.avatar');
const imageWorkTable = document.querySelector('.work_table');
const imageIkons = document.querySelector('.programm_ikon');
const getName = document.querySelector('.name');
const getNameIkons = document.querySelector('.name_ikon');

for (let key in images) {
    let img = document.createElement('img');
    img.setAttribute('data-key', key);
    img.src = 'img/' + key + '.png';
    
    if(key=='avatar_hero'){
        imageAvatar.append(img);
        getName.textContent = images[key]['name'];
    }
    if(key=='display_hero') 
        imageWorkTable.append(img);

    if (key.includes("programm_h")){
        imageIkons.append(img);
        getNameIkons.textContent = images[key]['name'];
    }
        
   
}

