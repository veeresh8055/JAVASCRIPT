let p = document.querySelector('.otpdisp')
let btn = document.querySelector('button')

btn.addEventListener('click',()=>{
    let otp =    Math.floor((Math.random() * (9999-1000))+1000)
    console.log(otp)
    p.textContent = otp
})