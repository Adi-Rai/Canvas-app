window.addEventListener("load",()=>{
    const canvas= document.getElementById("canvas");

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerHeight;
    canvas.height = window.innerHeight;

    let painting = false;

    canvas.addEventListener("mousedown",(e)=>{
        painting=true;
        ctx.moveTo(e.clientX,e.clientY);
        ctx.beginPath();
    });

    canvas.addEventListener("mousemove",(e)=>{
        if(painting){
            ctx.lineTo(e.clientX,e.clientY);
            ctx.stroke();
        }     
    });

    canvas.addEventListener("mouseup",(e)=>{
        painting=false;
        ctx.closePath() ;
        
    })
});

window.addEventListener("resize",()=>{
    canvas.width = window.innerHeight;
    canvas.height = window.innerHeight;
});
