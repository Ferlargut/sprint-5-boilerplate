//objeto donde se guardan las url que utilizare a lo largo del proyecto
var url = {
    url:" http://examen-laboratoria-sprint-5.herokuapp.com/topics",    
};
//lugar donde se mostraran las tareas
var $topics =$("#topics");
//funcion que al cargar ejecutara las demas funciones
var cargarPagina = function () {
    cargarTopics();   
    $("#add-form").submit(newTopic);  
    $("#search-topic").click(filterTopic);  
    
};
//hago una peticion para obtener el json con el qeu trabajare
//asi como ejecutar funcion de crear topicos y mostrar 
var cargarTopics = function () {
    $.getJSON(url.url,function (topics) {
    topics.forEach(crearTopics);
    });
};
// creo la plantilla que voy a usar para mostrarlo en el html 
var plantillaTopic =    
        
        "<article class='row' data-id='__id__'>"+
            "<h3 class='col s 3 dir'>'__nameauthor__'</h3>"+
            "<a href='__url2__'>"+
            "<h4 class='col s 3'>'__content__'</h4>"+
            "</a>"+
        "</article>";        
// funcion en la  que obtengo datos de los objetos y los ingraso en la plantilla
//para posteriormente ingresarlos al html
var crearTopics = function (topic) {
    var name = topic.author_name;
    var content = topic.content;
    var topic_id =topic.id;
    var topic ="";
    var ingresarUrl= url.url+"/"+id;
          
    
    topic = plantillaTopic.replace("__nameauthor__",name).replace("__content__",content).replace("__id__",id).replace("__url2__","/verTopic.html?id=" + topic_id);
    $topics.append(topic);   
    
};
//funcion para crear un nuevo topic en el JSON
var newTopic = function (e) {
    e.preventDefault();
    var nameN = $("#name-author").val();
    var contentN =$("#content").val();
        
    $.post(url.url,
        {
          author_name: nameN,
          content: contentN,
        },
        function(topic){
            crearTopics(topic);            
        });    
};

var filterTopic = function (){
    $.getJSON(url.url,function (topics) {
    var topicsSearch =  $("#search").val().toLowerCase();
    var topicFS=[];           
    var topicFilter = topics.filter(function (topic) {             
        var fer = topic.author_name.toLowerCase()== topicsSearch; 
        if(fer==true){
            console.log (topic);
            topicSearch(topic);
        }
    });   
    topicFilter.forEach(topicSearch);
   
    });
};
var topicSearch = function (topic) {
    var $search = $("#show-search");
    console.log($search);
    var name = topic.author_name;
    var content = topic.content;
    var id =topic.id;
    var topic ="";
    var ingresarUrl= url.url+"/"+id;        
    
    topic = plantillaTopic.replace("__nameauthor__",name).replace("__content__",content).replace("__id__",id).replace("__url__","/verTopic.html?id=" + topic_id);
    $search.append(topic);       
}


$(document).ready(cargarPagina);
