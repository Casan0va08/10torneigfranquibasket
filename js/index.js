// document.addEventListener("DOMContentLoaded", function()
// {
//     var menuItems = document.querySelectorAll(".menunavegacio li a");

//     menuItems.forEach(function(item)
//     {
//         item.addEventListener("mouseover", function()
//         {
//             this.style.transform = "scale(1.1)";
//             this.style.transition = "transform 0.3s ease";
//         });

//         item.addEventListener("mouseout", function()
//         {
//             this.style.transform = "scale(1)";
//         });
//     });
// });

const idiomaActual = document.getElementById('idioma');
const listaIdiomas = document.getElementById('idiomas');
const idiomas = document.getElementsByClassName('opcion');

// Cambiar idiomas
const titulo = document.getElementById('titulo');
const h1 = document.getElementById('h1');
const navinici = document.getElementById('indexinici');
const navcalendari = document.getElementById('indexcalendari');
const navresultats = document.getElementById('indexresultats');
const navfotos = document.getElementById('indexfotos');
const navpavellons = document.getElementById('indexpavellons');
const navhoraris = document.getElementById('indexhoraris');
const rcadmasc = document.getElementById('resultatscadetmasculi');
const rcadfem = document.getElementById('resultatscadetfemeni');
const rinfmasc = document.getElementById('resultatsinfantilmasculi');
const rinffem = document.getElementById('resultatsinfantilfemeni');
const ubicacionfranqueses = document.getElementById('ubicacionfranqueses');
const ubicacioncanprat = document.getElementById('ubicacioncanprat');
const ubicaciongranollers = document.getElementById('ubicaciongranollers');
const ubicacioncanbassa = document.getElementById('ubicacioncanbassa');

// Toggle lista idiomas
idiomaActual.addEventListener('click', () =>{
    listaIdiomas.classList.toggle('toggle');
})

const opcionesArray = Array.from(idiomas);
opcionesArray.forEach((opcion)=>{
    opcion.addEventListener('click', ()=>{
        const idioma = opcion.getElementsByTagName('span')[0].textContent.toLowerCase();
        establecerIdioma(idioma);
    });
})

function establecerIdioma(idioma)
{
    idiomaActual.getElementsByTagName('img')[0].src = `../img/banderas/${idioma}.png`;
    
    switch(idioma)
    {
        // CASTELLANO
        case 'esp':
            titulo.textContent = '10º Torneo FranquiBasket';        // Titulo Pagina Web
            h1.textContent = '10º Torneo FranquiBasket';            // H1 Index
            navinici.textContent = 'Inicio';                        // Opcion Inicio Nav
            navcalendari.textContent = 'Calendario';                // Opcion Calendario Nav
            navresultats.textContent = 'Resultados';                // Opcion Resultados Nav
            navfotos.textContent = 'Fotos';                         // Opcion Fotos Nav
            navpavellons.textContent = 'Pabellones';                // Opcion Pabellones Nav
            navhoraris.textContent = 'Horarios Comida';             // Opcion Horarios Nav
            rcadmasc.textContent = 'Cadete Masculino';              // Opcion Cadete Masculino Resultados
            rcadfem.textContent = 'Cadete Femenino';                // Opcion Cadete Femenino Resultados
            rinfmasc.textContent = 'Infantil Masculino';            // Opcion Infantil Masculino Resultados
            rinffem.textContent = 'Infantil Femenino';              // Opcion Infantil Femenino Resultados
            ubicacionfranqueses.textContent = 'UBICACIÓN: 41.62449879844874, 2.29608325536488';
            ubicacioncanprat.textContent = 'UBICACIÓN: 41.631310979242556, 2.2994822553651137';
            ubicaciongranollers.textContent = 'UBICACIÓN: 41.616848565348235, 2.293624550353278';
            ubicacioncanbassa.textContent = 'UBICACIÓN: 41.5926543822744, 2.2888304384269347';
        break;

        //CATALAN
        case 'cat':
            titulo.textContent = '10è Torneig FranquiBasket';       // Titulo Pagina Web
            h1.textContent = '10è Torneig FranquiBasket';           // H1 Index
            navinici.textContent = 'Inici';                         // Opcion Inicio Nav
            navcalendari.textContent = 'Calendari';                 // Opcion Calendario Nav
            navresultats.textContent = 'Resultats';                 // Opcion Resultados Nav
            navfotos.textContent = 'Fotos';                         // Opcion Fotos Nav
            navpavellons.textContent = 'Pavellons';                 // Opcion Pabellones Nav
            navhoraris.textContent = 'Horaris Menjar';              // Opcion Horarios Nav
            rcadmasc.textContent = 'Cadet Masculí';                 // Opcion Cadete Masculino Resultados
            rcadfem.textContent = 'Cadet Femení';                   // Opcion Cadete Femenino Resultados
            rinfmasc.textContent = 'Infantil Masculí';              // Opcion Infantil Masculino Resultados
            rinffem.textContent = 'Infantil Femení';                // Opcion Infantil Femenino Resultados
            ubicacionfranqueses.textContent = 'UBICACIÓ: 41.62449879844874, 2.29608325536488';
            ubicacioncanprat.textContent = 'UBICACIÓ: 41.631310979242556, 2.2994822553651137';
            ubicaciongranollers.textContent = 'UBICACIÓ: 41.616848565348235, 2.293624550353278';
            ubicacioncanbassa.textContent = 'UBICACIÓ: 41.5926543822744, 2.2888304384269347';
        break;

        // INGLES
        case 'eng':
            titulo.textContent = '10th FranquiBasket Tournament';   // Titulo Pagina Web
            h1.textContent = '10th FranquiBasket Tournament';       // H1 Index
            navinici.textContent = 'Home';                          // Opcion Inicio Nav
            navcalendari.textContent = 'Calendar';                  // Opcion Calendario Nav
            navresultats.textContent = 'Results';                   // Opcion Resultados Nav
            navfotos.textContent = 'Photos';                        // Opcion Fotos Nav
            navpavellons.textContent = 'Pavilions';                 // Opcion Pabellones Nav
            navhoraris.textContent = 'Lunch times';                 // Opcion Horarios Nav
            rcadmasc.textContent = 'U15 Cadet Boys';                // Opcion Cadete Masculino Resultados
            rcadfem.textContent = 'U15 Cadet Girls';                // Opcion Cadete Femenino Resultados
            rinfmasc.textContent = 'U13 Junior Boys';               // Opcion Infantil Masculino Resultados
            rinffem.textContent = 'U13 Junior Girls';               // Opcion Infantil Femenino Resultados
            ubicacionfranqueses.textContent = 'LOCATION: 41.62449879844874, 2.29608325536488';
            ubicacioncanprat.textContent = 'LOCATION: 41.631310979242556, 2.2994822553651137';
            ubicaciongranollers.textContent = 'LOCATION: 41.616848565348235, 2.293624550353278';
            ubicacioncanbassa.textContent = 'LOCATION: 41.5926543822744, 2.2888304384269347';    
        break;

        // FRANCES
        case 'fra':
            titulo.textContent = '10ème Tournoi FranquiBasquet';    // Titulo Pagina Web
            h1.textContent = '10ème Tournoi FranquiBasquet';        // H1 Index
            navinici.textContent = 'Maison';                        // Opcion Inicio Nav
            navcalendari.textContent = 'Calendrier';                // Opcion Calendario Nav
            navresultats.textContent = 'Résultats';                 // Opcion Resultados Nav
            navfotos.textContent = 'Photos';                        // Opcion Fotos Nav
            navpavellons.textContent = 'Pavillons';                 // Opcion Pabellones Nav
            navhoraris.textContent = 'Heures de déjeuner';          // Opcion Horarios Nav
            rcadmasc.textContent = 'U15 Masculin';                  // Opcion Cadete Masculino Resultados
            rcadfem.textContent = 'U15 Féminin';                    // Opcion Cadete Femenino Resultados
            rinfmasc.textContent = 'U13 Masculin';                  // Opcion Infantil Masculino Resultados
            rinffem.textContent = 'U13 Féminin';                    // Opcion Infantil Femenino Resultados
            ubicacionfranqueses.textContent = 'EMPLACEMENT: 41.62449879844874, 2.29608325536488';
            ubicacioncanprat.textContent = 'EMPLACEMENT: 41.631310979242556, 2.2994822553651137';
            ubicaciongranollers.textContent = 'EMPLACEMENT: 41.616848565348235, 2.293624550353278';
            ubicacioncanbassa.textContent = 'EMPLACEMENT: 41.5926543822744, 2.2888304384269347';        
        break;
    }
}