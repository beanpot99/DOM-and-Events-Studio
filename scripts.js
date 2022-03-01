// Write your JavaScript code here.
// Remember to pay attention to page loading!
let apple = 6;
window.addEventListener('load',function(){
let takeoff=document.getElementById('takeoff');
let landing=document.getElementById('landing');
let missionAbort=document.getElementById('missionAbort');
let status = document.getElementById('flightStatus');
let background =document.getElementById('shuttleBackground');
let shuttleHeight = document.getElementById('spaceShuttleHeight');
takeoff.addEventListener('click',function(){
    let clickReady = window.confirm('Confirm that the shuttle is ready for takeoff');
    if(clickReady){
        status.innerHTML='Shuttle in flight';
        background.style.backgroundColor = 'blue';
        shuttleHeight.innerHTML =parseInt(shuttleHeight.innerHTML)+10000;
    }
});
landing.addEventListener('click',function(){

});
missionAbort.addEventListener('click',function(){

});
});