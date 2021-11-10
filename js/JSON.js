fetch("https://randomuser.me/api/")
    .then (res => res.json())
    .then (data => 
        document.getElementById('root').innerHTML=
        JSON.stringify(data)
        ).catch(error => {
            console.log(error)
        }) 

        
async function getResponse(){
    let response = await fetch ('https://randomuser.me/api/')
    let content = await response.json()
    content = content["results"][0]

    let list = document.querySelector('.name')
    let key;

    for (key in content){
        console.log(key)
        list.innerHTML+=` 
            <li class="post">
                <h4>${key}</h4> 
                <img src="${content[key].large}}" width="300"></img>
                
            </li>
            `
    }

}

getResponse()
