const full = document.querySelector('#main')
console.log(full);
document.addEventListener('mousemove',function(detail){
    gsap.to(cursor,{
        left: detail.clientX,
        top: detail.clientY
    })

})