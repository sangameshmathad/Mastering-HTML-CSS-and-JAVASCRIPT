const onRepeat=()=>{ 

const tempload = () =>{
    let temp = document.getElementById('thermometer');
    temp.innerHTML='<i class="fa fa-thermometer-empty fa-5x" aria-hidden="true"></i>';
}
const tempLoad50=()=>{
    let temp = document.getElementById('thermometer');
    temp.innerHTML='<i class="fa fa-thermometer-half fa-5x" aria-hidden="true"></i>';
}
const tempLoad100=()=>{
    let temp = document.getElementById('thermometer');
    temp.innerHTML='<i class="fa fa-thermometer-full fa-5x" aria-hidden="true"></i>';
}
setTimeout(tempload,500);
setTimeout(tempLoad50,1500);
setTimeout(tempLoad100,2000);
}
setInterval(onRepeat,3000);
