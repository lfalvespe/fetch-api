//Utilizando ASYNC/AWAIT:

/* 
async function consulta(url) {
    result = await fetch(url);
    return result.json();
}

urlGit = "https://api.github.com/users/lfalvespe";
const res = consulta(urlGit);

res.then(data => {
    console.log(data);
    const fotoBox = document.querySelector('.foto_box');
    const descBox = document.querySelector('.desc_box');
    const img = document.createElement('img');
    img.setAttribute('src', `${data.avatar_url}`);
    fotoBox.appendChild(img);

    descBox.innerHTML += `<strong>Name</strong>: ${data.name}<br>
                          <strong>Profile</strong>: ${data.login}<br>
                          <strong>Bio</strong>: ${data.bio}<br>
                          <strong>Company</strong>: ${data.company}<br>
                          <strong>Folowers</strong>: ${data.followers}<br>
                          <strong>Following</strong>: ${data.following}<br>
                          <strong>Public Repos</strong>: ${data.public_repos}<br>
                          <strong>URL</strong>: ${data.url}`;       
})

*/

//Utilizando o FETCH API:

const urlGit = "https://api.github.com/users/lfalvespe";

fetch(urlGit).then(
    result => result.json()).then(data => {
        console.log(data)
        const fotoBox = document.querySelector('#foto_box');
        const descBox = document.querySelector('#desc_box');
        const img = document.createElement('img');
        img.setAttribute('src', `${data.avatar_url}`);
        fotoBox.appendChild(img)
    
        descBox.innerHTML += `<strong>Name</strong>: ${data.name}<br>
                              <strong>Profile</strong>: ${data.login}<br>
                              <strong>Bio</strong>: ${data.bio}<br>
                              <strong>Company</strong>: ${data.company}<br>
                              <strong>Folowers</strong>: ${data.followers}<br>
                              <strong>Following</strong>: ${data.following}<br>
                              <strong>Public Repos</strong>: ${data.public_repos}<br>
                              <strong>URL</strong>: ${data.url}`
    });


