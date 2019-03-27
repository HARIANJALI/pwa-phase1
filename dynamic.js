function loadJson(file,callback) {
  var xhr=new XMLHttpRequest();
 xhr.overrideMimeType("application/json");
 xhr.open("GET",file,true);
 xhr.onreadystatechange=function(){
   if(xhr.readyState===4 && xhr.status=="200"){
     callback(xhr.responseText);

   }
 }
 xhr.send();
}
loadJson("dynamic.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  Profile(data.profile);
  Career(data.Career);
  education(data.education);
  skills(data.skills);
})

var profile=document.querySelector(".profile");
function Profile(p){
  var image=document.createElement("img");
image.src=p.image;
profile.append(image);

var h1=document.createElement("h1");
h1.textContent=p.name;
profile.append(h1);
var h2=document.createElement("h2");
h2.textContent=p.Designation;
profile.append(h2);
var h3=document.createElement("h3");
h3.textContent=p.College;
profile.append(h3);
var h4=document.createElement("h4");
h4.textContent=p.email;
profile.append(h4);
var h5=document.createElement("h5");
h5.textContent=p.mobile;
profile.append(h5);
}

var career=document.querySelector(".academic");
function Career(ca){
  var h1=document.createElement("h1");
  h1.textContent="Career Objective";
  career.append(h1);
  var hr=document.createElement("hr");
  career.append(hr);
  var p=document.createElement("p");
  p.textContent=ca.info;
  career.append(p);
}
function education(ed){
  var h1=document.createElement("h1");
  h1.textContent="Education Details";
  career.append(h1);
  var hr=document.createElement("hr");
  career.append(hr);
var table=document.createElement("table");
table.border="2";
career.append(table);
var tr1="<tr><th>qualification</th><th>Institute</th><th>percent</th><th>passingyear</th></tr>";
var tr2="";
for(var i=0;i<ed.length;i++)
{
tr2=tr2+"<tr><td>"+ed[i].qualification+"</td><td>"+ed[i].Institute+"</td><td>"+ed[i].percent+"</td><td>"+ed[i].passingyear+"</td></tr>";

}
table.innerHTML=tr1+tr2;
career.append(table);
var hr=document.createElement("hr");
career.append(hr);

}
function skills(sk){
  var h1=document.createElement("h1");
  h1.textContent="Skills";
  career.append(h1);
  var hr=document.createElement("hr");
  career.append(hr);
  var ul=document.createElement("ul");
  for(var i in sk){
    var li=document.createElement("li");
  li.innerHTML=sk[i].name+":"+sk[i].info;
  ul.append(li);

  }
  career.append(ul);

}
