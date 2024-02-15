window.addEventListener('mousemove',function(detail){
    gsap.to(cursor,{
        left: detail.clientX,
        top: detail.clientY
    })

})