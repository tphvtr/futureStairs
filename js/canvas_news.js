var canvas=document.getElementById('canvas_light-blue');
var ctx = canvas.getContext('2d');
var canvas_white=document.getElementById('canvas_light-blue');
var ctr = canvas_white.getContext('2d');

ctr.strokeStyle = "#FFF";
ctr.lineWidth = 20;
ctr.beginPath();
ctr.arc(100,100,95,0,Math.PI*2,true);
ctr.stroke();
ctx.lineWidth = 8;
ctx.strokeStyle="#0D96B4";
ctx.beginPath();
ctx.arc(100,100,100,Math.PI*1.1,Math.PI*3.25/(-8),true);
ctx.stroke();
ctx.beginPath(); 
ctx.arc(100,100,100,Math.PI*7/(-16),Math.PI*5.25/(-8),true); 
ctx.stroke();
ctx.beginPath();
ctx.arc(100,100,100,Math.PI*11/(-16),Math.PI*12.5/(-16),true);
ctx.stroke();
ctx.beginPath();
ctx.arc(100,100,100,Math.PI*12.75/(-16),Math.PI*13.4/(-16),true);
ctx.stroke();

var canvas = document.getElementById('canvas_green');
var ctx = canvas.getContext('2d');
var canvas_white=document.getElementById('canvas_green');
var ctr = canvas_white.getContext('2d');

ctr.strokeStyle = "#FFF";
ctr.lineWidth = 20;
ctr.beginPath();
ctr.arc(100,100,95,0,Math.PI*2,true);
ctr.stroke();
ctx.lineWidth = 8;
ctx.strokeStyle="#52A747";
ctx.beginPath();
ctx.arc(100,100,100,Math.PI*1.1,Math.PI*3.25/(-8),true);
ctx.stroke();
ctx.beginPath(); 
ctx.arc(100,100,100,Math.PI*7/(-16),Math.PI*5.25/(-8),true); 
ctx.stroke();
ctx.beginPath();
ctx.arc(100,100,100,Math.PI*11/(-16),Math.PI*12.5/(-16),true);
ctx.stroke();
ctx.beginPath();
ctx.arc(100,100,100,Math.PI*12.75/(-16),Math.PI*13.4/(-16),true);
ctx.stroke();

var canvas = document.getElementById('canvas_dark-blue');
var ctx = canvas.getContext('2d');
var canvas_white=document.getElementById('canvas_dark-blue');
var ctr = canvas_white.getContext('2d');

ctr.strokeStyle = "#FFF";
ctr.lineWidth = 20;
ctr.beginPath();
ctr.arc(100,100,95,0,Math.PI*2,true);
ctr.stroke();
ctx.lineWidth = 8;
ctx.strokeStyle="#396183";
ctx.beginPath();
ctx.arc(100,100,100,Math.PI*1.1,Math.PI*3.25/(-8),true);
ctx.stroke();
ctx.beginPath(); 
ctx.arc(100,100,100,Math.PI*7/(-16),Math.PI*5.25/(-8),true); 
ctx.stroke();
ctx.beginPath();
ctx.arc(100,100,100,Math.PI*11/(-16),Math.PI*12.5/(-16),true);
ctx.stroke();
ctx.beginPath();
ctx.arc(100,100,100,Math.PI*12.75/(-16),Math.PI*13.4/(-16),true);
ctx.stroke();