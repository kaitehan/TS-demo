var div = document.createElement('div');
div.id = 'demo'
document.body.appendChild(div);

div.addEventListener('mousedown', (e) => {
    // console.log(e.clientX,e.clientY);
    var x = e.pageX - div.offsetLeft;
    var y = e.pageY - div.offsetTop;
    console.log(111);

    document.addEventListener('mousemove', move);

    function move(e) {
        div.style.top = e.pageY - y + 'px';
        div.style.left = e.pageX - x + 'px';
        document.addEventListener('selectstart', (e) => {
            e.preventDefault();
        })
    }

    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', move);
    })

})