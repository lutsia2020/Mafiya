fetch("https://randomuser.me/api/")
    .then (res => res.json())
    .then (data => 
        document.getElementById('root').innerHTML=
        JSON.stringify(data)
        ).catch(error => {
            console.log(error)
        }) 

     


