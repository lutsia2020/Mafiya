const imageAvatar = document.querySelector('.avatar');
const imageWorkTable = document.querySelector('.work_table');
const leftToolColumn = document.querySelector('.work_table_left_tool');
const imageIkons = document.querySelector('.programm_ikon');
const getName = document.querySelector('.name');
const nameIkons = document.querySelector('.programm_ikon');
const getNotice = document.querySelector('.notice');


let WHO ="h";// h(hero) e(evil) w(woker)

for (let key in images) {
    let img = document.createElement('img');
    img.setAttribute('data-key', key);
    img.src = 'img/' + key + '.png';

    let name_img = document.createElement('p');
    name_img.setAttribute('data-key', key);
    name_img.textContent=images[key]['name'];
       

    if(key.includes("avatar_"+WHO)){
        imageAvatar.append(img);
        getName.textContent = images[key]['name'];
    }
    if(key.includes("display_"+WHO))
        imageWorkTable.append(img);

    if((key.includes("left_tool_column"))&&(!(WHO=="w")))
        leftToolColumn.append(img);
    
   
    if (key.includes("programm_"+WHO)){
        imageIkons.append(img);
        imageIkons.addEventListener('click', showInfo);
        imageIkons.addEventListener('mouseover', hoverInfo);
        nameIkons.append(name_img);
        
    }
 
}



function showInfo(event) {
        const key=event.target.dataset['key'];
        //console.dir(event.target);
        //console.log(key);
        if (key === undefined){
            return false;
        }

        document.querySelectorAll('.programm_ikon img').forEach(item=>item.classList.remove('active'));
        event.target.classList.add('active'); 
        alert ("Вы нажали на приложение " + images[key]['name']);
}

function hoverInfo(event){
    const key=event.target.dataset['key'];
    //console.log(key);
        if (key === undefined){
            return false;
        }
   
    document.querySelectorAll('.programm_ikon img').forEach(item=>item.classList.remove('shadow'));
    event.target.classList.add('shadow'); 

    getNotice.textContent=images[key]['description'];
    document.querySelector('.notice');
    //event.target.classList.add('openWindow'); 
    console.log(key);

}

(function(){
    if (WHO=="w"){
        var div=getElementById('not');
        style=div.style;
        style.display="none";
    }
})


