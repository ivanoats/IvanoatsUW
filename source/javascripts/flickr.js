function jsonFlickrApi(rsp) {
 if (rsp.stat != "ok"){
  return;
 }

 var selected = "";
 var i = Math.random();
 i = i * rsp.photos.photo.length;
 i = Math.ceil(i);

 photo = rsp.photos.photo[ i ];

 t_url = "http://farm" + photo.farm +
 ".static.flickr.com/" + photo.server + "/" +
 photo.id + "_" + photo.secret + "_" + "m.jpg";

 p_url = "http://www.flickr.com/photos/" +
 photo.owner + "/" + photo.id;

 selected =  '<a href="'+ p_url + '"><img alt="'+ photo.title + '"src="' + t_url + '"/></a>'  ;
 document.writeln(selected);
}
