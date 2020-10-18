'use strict'
const containerCategories = document.getElementById("categories")
const categories = document.createElement("h1");
categories.innerHTML = "Categorías"
categories.classList.add("ml-2", "color3", "titlesandbtns")
containerCategories.appendChild(categories);
const containerFavs = document.getElementById("favorites-list")
const favsTitle = document.createElement("div");
favsTitle.classList.add("titlesandbtns","dropdown-header", "text-center","bg-color1","color6","mt-0");
favsTitle.style.fontSize="large"
favsTitle.innerHTML="Lista de favoritos"
containerFavs.appendChild(favsTitle);
const URL = 'http://localhost:3000/peliculas';


let cats = ['Comedia', 'Terror', 'Drama', 'Acción', 'Ficción'];
for (let i = 0; i < cats.length; i++) {
    const cat = document.createElement('h2');
    const carrousel = document.createElement("div");
    cat.innerHTML = cats[i] + '...';
    cat.style.marginLeft = "20px"
    carrousel.id = cats[i];
    carrousel.innerHTML = `
    <button class="angle-left h-50 btn"><i class="fas fa-angle-left fa-2x angle-left color6"></i></button>
    <div class="d-flex p-5 carrousel-${cats[i]}">
    </div>
    <button class="angle-right h-50 btn"><i class="fas fa-angle-right fa-2x angle-right color6"></i></button>
    `
    carrousel.classList.add("d-flex", "align-items-center", "carrousel", "mt-0");
    cat.classList.add("color6", "commontexts", "mb-0");
    containerCategories.appendChild(cat);
    containerCategories.appendChild(carrousel);
}

async function getMovies() {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
}
async function getMovie(id) {
    const newURL = `${URL}/${id}`
    const response = await fetch(newURL);
    const data = await response.json();
    return data;
}

async function editMovie(id, newData) {
    const newURL = `${URL}/${id}`;
    const response = await fetch(newURL, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
    });
    const data = await response.json();
    return data;
}
const com = document.querySelector('.carrousel-Comedia');
const ter = document.querySelector('.carrousel-Terror');
const dra = document.querySelector('.carrousel-Drama');
const acc = document.querySelector('.carrousel-Acción');
const cie = document.querySelector('.carrousel-Ficción');

function buildMovieCards(movies) {
    movies.map(movie => {
        if (movie.publicada === true) {
            switch (movie.genero) {
                case 'Comedia':
                    const movieCardco = document.createElement("div");
                    movieCardco.classList.add("movie-card")
                    movieCardco.innerHTML = `
                <div id="${movie.id}" class="movie d-flex flex-column" style="background-image:url('${movie.imagen}');">
                <div class="resume">
                <h5 class="movie-title color6 m-2 pt-1 text-center border-bottom titlesandbtns">${movie.nombre}</h5>
                <p class="color6 movie-resume mb-0 mt-3 mx-3 text-center commontexts">${movie.descripcion}</p>
                <div class="d-flex justify-content-center mb-5">
                <div>
                <a href="detail.html#${movie.id}" class="btn text-light"><i class="far fa-play-circle fa-2x"></i></a>
                <a href="#" class="btn text-light fav-btn"><i class="fas fa-star fa-2x fav-btn"></i></a>
                </div>
                </div>
                </div>
                </div>
                `;
                    com.appendChild(movieCardco);
                    break;
                case 'Terror':
                    const movieCardte = document.createElement("div");
                    movieCardte.classList.add("movie-card")
                    movieCardte.innerHTML = `
                <div id="${movie.id}" class="movie d-flex flex-column" style="background-image:url('${movie.imagen}');">
                <div class="resume">
                <h5 class="movie-title text-light m-2 pt-1 text-center color6 border-bottom titlesandbtns">${movie.nombre}</h5>
                <p class="text-light movie-resume mb-1 mt-3 mx-3 text-center color6 commontexts">${movie.descripcion}</p>
                <div class="d-flex justify-content-center mb-5">
                <div>
                <a href="detail.html#${movie.id}" class="btn text-light"><i class="far fa-play-circle fa-2x"></i></a>
                <a href="#" class="btn text-light fav-btn"><i class="fas fa-star fa-2x fav-btn"></i></a>
                </div>
                </div>
                </div>
                </div>
                `;
                    ter.appendChild(movieCardte);
                    break;
                case 'Drama':
                    const movieCarddr = document.createElement("div");
                    movieCarddr.classList.add("movie-card")
                    movieCarddr.innerHTML = `
                <div id="${movie.id}" class="movie d-flex flex-column" style="background-image:url('${movie.imagen}');">
                <div class="resume">
                <h5 class="movie-title text-light m-2 pt-1 text-center color6 border-bottom titlesandbtns">${movie.nombre}</h5>
                <p class="text-light movie-resume mb-1 mt-3 mx-3 text-center color6 commontexts">${movie.descripcion}</p>
                <div class="d-flex justify-content-center mb-5">
                <div>
                <a href="detail.html#${movie.id}" class="btn text-light"><i class="far fa-play-circle fa-2x"></i></a>
                <a href="#" class="btn text-light fav-btn"><i class="fas fa-star fa-2x fav-btn"></i></a>
                </div>
                </div>
                </div>
                </div>
                `;
                    dra.appendChild(movieCarddr);
                    break;
                case 'Acción':
                    const movieCardac = document.createElement("div");
                    movieCardac.classList.add("movie-card")
                    movieCardac.innerHTML = `
                <div id="${movie.id}" class="movie d-flex flex-column" style="background-image:url('${movie.imagen}');">
                <div class="resume">
                <h5 class="movie-title text-light m-2 pt-1 text-center color6 border-bottom titlesandbtns">${movie.nombre}</h5>
                <p class="text-light movie-resume mb-1 mt-3 mx-3 text-center color6 commontexts">${movie.descripcion}</p>
                <div class="d-flex justify-content-center mb-5">
                <div>
                <a href="detail.html#${movie.id}" class="btn text-light"><i class="far fa-play-circle fa-2x"></i></a>
                <a href="#" class="btn text-light fav-btn"><i class="fas fa-star fa-2x fav-btn"></i></a>
                </div>
                </div>
                </div>
                </div>
                `;
                    acc.appendChild(movieCardac);
                    break;
                case 'Ciencia Ficcion':
                    const movieCardci = document.createElement("div");
                    movieCardci.classList.add("movie-card")
                    movieCardci.innerHTML = `
                <div id="${movie.id}" class="movie d-flex flex-column" style="background-image:url('${movie.imagen}');">
                <div class="resume">
                <h5 class="movie-title text-light m-2 pt-1 text-center color6 border-bottom titlesandbtns">${movie.nombre}</h5>
                <p class="text-light movie-resume mb-1 mt-3 mx-3 text-center color6 commontexts">${movie.descripcion}</p>
                <div class="d-flex justify-content-center mb-5">
                <div>
                <a href="detail.html#${movie.id}" class="btn text-light"><i class="far fa-play-circle fa-2x"></i></a>
                <a href="#" class="btn text-light fav-btn"><i class="fas fa-star fa-2x fav-btn"></i></a>
                </div>
                </div>
                </div>
                </div>
                `;
                    cie.appendChild(movieCardci);
                    break;
            }
        }
        com.scrollLeft = ter.scrollLeft = dra.scrollLeft = acc.scrollLeft = cie.scrollLeft = 28;
    })
}

getMovies()
.then(movies => buildMovieCards(movies))

containerCategories.addEventListener("click",(event)=>{
    if(event.target.classList.contains("angle-right"))
    {   
        if(event.target.parentElement.id === 'Comedia' || event.target.parentElement.parentElement.id === 'Comedia' )
        {
            com.scrollLeft+=260;
        }else if(event.target.parentElement.id === 'Terror' || event.target.parentElement.parentElement.id === 'Terror')
        {
            ter.scrollLeft+=260;
        } else if(event.target.parentElement.id === 'Drama' || event.target.parentElement.parentElement.id === 'Drama')
        {
            console.log("hola");
            dra.scrollLeft+=260;
        } else if(event.target.parentElement.id === 'Acción' || event.target.parentElement.parentElement.id === 'Acción')
        {
            acc.scrollLeft+=260;
        } else
        {
            cie.scrollLeft+=260;
        }
    }
})
containerCategories.addEventListener("click", (event) => {
    if (event.target.classList.contains("angle-left")) {
        if (event.target.parentElement.id === 'Comedia' || event.target.parentElement.parentElement.id === 'Comedia') {
            com.scrollLeft += -260;
        } else if (event.target.parentElement.id === 'Terror' || event.target.parentElement.parentElement.id === 'Terror') {
            ter.scrollLeft += -260;
        } else if (event.target.parentElement.id === 'Drama' || event.target.parentElement.parentElement.id === 'Drama') {
            dra.scrollLeft += -260;
        } else if (event.target.parentElement.id === 'Acción' || event.target.parentElement.parentElement.id === 'Acción') {
            acc.scrollLeft += -260;
        } else{
            cie.scrollLeft += -260;
        }
    }
})

//----------------------FAVORITOS CON LOCAL STORAGE--------------------

// SE SUPONE QUE DESDE EL LOGIN ME TRAE EN LOCAL STORAGE LOS FAVS (IMAGEN Y NOMBRE) APARTE DEL USER
function getFavsLS() {
    return JSON.parse(localStorage.getItem('favs'));
}

function saveFavLS(favInfo)
{
    let favs = getFavsLS();
    favs.push(favInfo);
    localStorage.setItem('favs', JSON.stringify(favs));
}
function addFav(favInfo)
{
    const favorite=document.createElement("div")
    favorite.id=`fav-${favInfo.id}`
    favorite.style.width= "350px";
    favorite.classList.add(`fav-${favInfo.id}`,"dropdown-item");
    favorite.innerHTML=`
    <div class="row no-gutters">
        <div class="col-md-4" style="height:100px">
            <img src="${favInfo.imagen}" class="card-img h-100" alt="...">
        </div>
        <div class="col-md-7">
            <a href="detail.html#${favInfo.id}" class="text-decoration-none color1"><h5 class="card-title">${favInfo.nombre}</h5></a>
        </div>
        <div class="col-md-1">
            <h3 class="delete-fav color2 ml-2" role="button">&times</h3>
        </div>
    </div>
    <hr>
    `;
    containerFavs.appendChild(favorite);
}
function renderFavsLS()
{
    setTimeout(() => {
        let favs = getFavsLS();
        favs.forEach((fav)=>{
            const favorite=document.createElement("div")
            favorite.id=`fav-${fav.id}`
            favorite.style.width= "350px";
            favorite.classList.add(`fav-${fav.id}`,"dropdown-item");
            favorite.innerHTML=`
            <div class="row no-gutters">
                <div class="col-md-4" style="height:100px">
                    <img src="${fav.imagen}" class="card-img h-100" alt="...">
                </div>
                <div class="col-md-7">
                    <a href="detail.html#${fav.id}" class="text-decoration-none color1"><h5 class="card-title">${fav.nombre}</h5></a>
                </div>
                <div class="col-md-1">
                    <h3 class="delete-fav color2 ml-2" role="button">&times</h3>
                </div>
            </div>
            <hr>
            `;
            containerFavs.appendChild(favorite);
            document.getElementById(`${fav.id}`).querySelector('.fa-star').classList.add('color3');
        })
    },2000);
}
function deleteFav(e)
{
    e.preventDefault();
    if(e.target.classList.contains("delete-fav"))
    {
        const removedElement = e.target.parentElement.parentElement.parentElement
        const deleteId= removedElement.id.slice(4);
        removedElement.remove();
        deleteFavLS(deleteId);
        document.getElementById(`${deleteId}`).querySelector('.fa-star').classList.remove('color3');
    }
}
function deleteFavLS(deleteId)
{
    let favs = getFavsLS();
    favs.forEach((fav,index)=>{
        if(fav.id === deleteId)
        {
            favs.splice(index,1);
        }
    })
    localStorage.setItem("favs",JSON.stringify(favs));
}
document.addEventListener("DOMContentLoaded",renderFavsLS);
containerCategories.addEventListener("click",(e)=>{
    e.preventDefault();
    if(e.target.classList.contains("fav-btn"))
    {
        let favInfo=e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
        if(favInfo.classList.contains("movie"))
        {
            if (e.target.classList.contains("color3"))
            {
                e.target.classList.remove("color3")
                containerFavs.querySelector(`.fav-${favInfo.id}`).remove()
                deleteFavLS(favInfo.id)
            }  
            else{
                e.target.classList.add("color3")
                favInfo=
                {
                    imagen: favInfo.style.backgroundImage.slice(5,-2),
                    nombre: favInfo.querySelector(".movie-title").textContent,
                    id: favInfo.id
                }
                addFav(favInfo)
                saveFavLS(favInfo)
            }
        }
        else
        {
            favInfo=favInfo.querySelector(".movie");
            if(e.target.children.classList.contains("color3"))
            {
                e.target.classList.remove("color3")
                containerFavs.querySelector(`.fav-${favInfo.id}`).remove()
                deleteFavLS(favInfo.id)
            }
            else
            {
                e.target.children.classList.add("color3")
                favInfo=
                {
                    imagen: favInfo.style.backgroundImage.slice(5,-2),
                    nombre: favInfo.querySelector(".movie-title").textContent,
                    id: favInfo.id
                }
                addFav(favInfo)
                saveFavLS(favInfo)
            }
        }
    }
})
containerFavs.addEventListener("click",deleteFav);
