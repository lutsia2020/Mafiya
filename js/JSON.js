//типо это мы получили json
const playerData = [
    {
        name : "Злодей",
        avatar : "https://pbs.twimg.com/profile_images/950420544129613824/NCr3E0Qo.jpg",
        display : "https://cutewallpaper.org/21/backtrack-wallpaper/The-Wallpaper-Thread-Water-Cooler.jpg",

        programs : [
            {
                name : "Троян",
                ikon : "https://st4.depositphotos.com/9625262/22794/v/600/depositphotos_227944174-stock-video-danger-alert-warning-attack-on.jpg",
                discription : "Отправить троян-программу по почте"
            },

            {
                name : "Почта",
                ikon : "https://www.shareicon.net/data/256x256/2016/07/08/117227_envelope_512x512.png",
                discription : "Сделаем фишинговую рассылку по поче"
            }
        ]
    },

    {
        name : "Специалист ИБ",
        avatar : "https://i1.wp.com/abuomar.ae/wp-content/uploads/reddit.png?resize=700%2C350&ssl=1",
        display : "https://i.pinimg.com/736x/7c/74/9f/7c749f29ccc96a65154d6bc80091d7b1.jpg",

        programs : [
            {
                name : "Антивирус",
                ikon : "https://lh3.googleusercontent.com/jj8s4nRM1RoWx-ztabZZl0f_5aSZ76jn6c-HbfPDg9XasVOLZFyfWpqC0fMfBpGZ9EEF7w=s137",
                discription : "Обновить или установить антивирусное средство"
            },

            {
                name : "Рекоммендации",
                ikon : "https://www.meria.kg/assets/img/posts/1592471822_large.jpeg",
                discription : "Раздать памятки соттрудникам"
            }
        ]
    },

    {
        name : "Сотрудник",
        avatar : "https://lh3.googleusercontent.com/vBoy7ntZqQfrIkFmOk5rKER79_kxRQezkGDlnzXRA9YcZiU2858Wn2mbFunws1QsRFSbOg=s85",
        display : "https://www.numerama.com/wp-content/uploads/2017/05/windows-10s-2.jpg",
        
    }
]

  function press_on_ikon(notice) {
      return `<div class = "window">Hello</div>`,
      alert ('Вы решились. Вы нажали на' + notice.name + 'Вы сделали следующее:'+notice.discription );
  }
  
  function program (program) {
    return `
    <div class="work_table_top_tool"><h5> Fri 20:25 </h5></div>
    <div class="work_table_left_tool"></div>

    <div class="programms">
    ${program.map(function(prog
    ){
      return ` <div class="programm_ikon"> 
               <img src="${prog.ikon}" onclick="press_on_ikon(${prog})" type="button"> 
               <div class="notice">
              <p align="center"> ${prog.discription} </p>
            </div>
               <p>${prog.name}</p></div>`
    }).join('')}
   </div>
  `;
  }
  
  function playerTemplate(player) {
    return `
    
      <div class="work_table_image">
        <div class="work_table">
            <img src="${player.display}">
            <div class="avatar"><img src="${player.avatar}"> </div>
             <div class="name_status">
                <span><small>Статyc</small> <br><b class = "name"> ${player.name}</b></span></div> 
                   
            
            ${player.programs ? program (player.programs) : ""}
        
        </div>
       </div>
    `;
  }
  
  document.getElementById("app").innerHTML = `
    ${playerData.map(playerTemplate).join("")}
  `;
 
  