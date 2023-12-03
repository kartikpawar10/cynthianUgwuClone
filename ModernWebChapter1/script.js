const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function meneKhattiTofiKhaiHai(){
    window.addEventListener("mousemove",function(dets){
        let x = dets.clientX;
        let y = dets.clientY;
        document.getElementById("minicircle").style.transform = `translate(${x}px,${y}px)`
        console.log("sdifjsj")
    })
}

meneKhattiTofiKhaiHai()
// el aapka top level Element hota h jese idhar main h


