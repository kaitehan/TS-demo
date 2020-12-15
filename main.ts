var div = document.createElement('div');
div.id = 'demo'
document.body.appendChild(div);

div.addEventListener('mousedown',(e)=>{
    console.log(e.clientX,e.clientY);
    
})
