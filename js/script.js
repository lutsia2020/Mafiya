const imageAvatar = document.querySelector('.avatar');
const imageWorkTable = document.querySelector('.work_table');
const imageIkons = document.querySelector('.programm_ikon');
const getName = document.querySelector('.name');
const getNameIkons = document.querySelector('.name_ikon');


let WHO ="w";// h(hero) e(evil) w(woker)

for (let key in images) {
    let img = document.createElement('img');
    img.setAttribute('data-key', key);
    img.src = 'img/' + key + '.png';
    
    if(key.includes("avatar_"+WHO)){
        imageAvatar.append(img);
        getName.textContent = images[key]['name'];
    }
    if(key.includes("display_"+WHO))
        imageWorkTable.append(img);

    if (key.includes("programm_"+WHO)){
        imageIkons.append(img);
        getNameIkons.textContent = images[key]['name'];
    }
        
   
};

