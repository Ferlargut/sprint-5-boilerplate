//objeto donde se guardan las url que utilizare a lo largo del proyecto
var url = {
    url:" http://examen-laboratoria-sprint-5.herokuapp.com/topics",
};
//lugar donde se mostraran las tareas
var $topics =$("#topics");
//funcion que al cargar ejecutara las demas funciones
var cargarPagina = function () {
    cargarTopics();    
};
//hago una peticion para obtener el json con el qeu trabajare
//asi como ejecutar funcion de crear topicos y mostrar 
var cargarTopics = function () {
    $.getJSON(url.url,function (topics) {
        topics.forEach(crearTopics);
    });
};
var plantillaTopic =    
        
        "<article class='row' data-id='__id__'>"+
            "<h3 class='col s 3'>'__nameauthor__'</h3>"+
            "<h4 class='col s 3'>'__content__'</h4>"+
        "</article>";        

var crearTopics = function (topic) {
    var name = topic.author_name;
    var content = topic.content;
    var id =topic.id;
    var topic ="";

    topic = plantillaTopic.replace("__nameauthor__",name).replace("__content__",content).replace("__id__",id);
    $topics.append(topic);   
};

$(document).ready(cargarPagina);
