// Implementa las Solicitudes con Fetch
const fetchBtn = document.getElementById('fetch-btn');
const dataContainer = document.getElementById('data-container');

function pokerand(){
    let rand
    do{
        rand=Math.floor(Math.random()*10000)
    }while(!(rand>=0&&rand<=1301));
    if(rand>1024) rand=rand+8975
    return rand+1
}

fetchBtn.addEventListener('click', () => {
    fetch('https://pokeapi.co/api/v2/pokemon/'+pokerand()+'/')
    .then(response => {
      if (!response.ok) throw new Error('Error en la solicitud');
      return response.json();
    })
    .then(data => {
        const pokeimg=document.createElement('img')
        pokeimg.class='pokeimg'
        pokeimg.src=data.sprites.front_default

        const name=document.createElement('h2')
        name.class='pokename'
        name.innerText=data.name.replace("-", " ")

        const num=document.createElement('h5')
        num.class='pokenum'
        num.textContent=data.id

        const tipo=document.createElement('p')
        tipo.class='poketypes'
        data.types.forEach(element => {
          tipo.innerText+=element.type.name+" "
        });

        dataContainer.replaceChildren(pokeimg, name, num, tipo)
        dataContainer.style.visibility='visible'
        })

    .catch(error => {
    console.error('Error:', error);
    dataContainer.textContent = 'Hubo un error al obtener los datos.';
    });
});

const axiosBtn = document.getElementById('axios-btn');

axiosBtn.addEventListener('click', () => {
  axios.get('https://pokeapi.co/api/v2/pokemon/'+pokerand()+'/').then(response => {
      const data = response.data;

      const pokeimg=document.createElement('img')
      pokeimg.class='pokeimg'
      pokeimg.src=data.sprites.front_default

      const name=document.createElement('h2')
      name.class='pokename'
      name.innerText=data.name.replace("-", " ")

      const num=document.createElement('h5')
      num.class='pokenum'
      num.textContent=data.id

      const tipo=document.createElement('p')
      tipo.class='poketypes'
      data.types.forEach(element => {
        tipo.innerText+=element.type.name+" "
      });

      dataContainer.replaceChildren(pokeimg, name, num, tipo)
      dataContainer.style.visibility='visible'
    }).catch(error => {
      console.error('Error:', error);
      dataContainer.textContent = 'Hubo un error al obtener los datos.';
    });

});