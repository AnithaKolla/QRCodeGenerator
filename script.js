let image =document.getElementById("image");
let inpVal =document.getElementById("inpVal");
let btn =document.getElementById("btn");
btn.addEventListener("click",e=>{
    let result = inpVal.value;
    console.log(result);
    let linkQR = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
    image.src=linkQR +result
})
