var topicId = getParameterByName('topic_id');
var url = {
    url:" http://examen-laboratoria-sprint-5.herokuapp.com/topics",    
};
var id= location.search.replace("?id=","");
var idurl=url.url+"/"+id;
var cargarPagina = function () {
  $.getJSON(idurl,function (topic) {
    var name = topic.author_name;
    var content = topic.content;
    console.log(name,content);
   topic = plantillaTopic.replace("__nombre__",name).replace("__contenido__",content) ;
    $topics.append(topic);   
    });
};
var plantillaTopic =   
        
  "<h1>__nombre__<h1>"+
  "<h4>__contenido__<h4>";




$(document).ready(cargarPagina);
