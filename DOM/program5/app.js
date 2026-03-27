let body = document.body;

let number = Number(prompt("Enter the number"));

if(!number.isNan){

    let h4 = document.createElement('h3');
    h4.textContent = ` tables of ${number}`;
    body.append(h4);
    for(let i = 1;i<=10 ;i++){
        let p = document.createElement('p');
        let val = `${number} * ${i} = ${number*i}`
        p.textContent = val;
        body.appendChild(p)
    }
}else{
    console.log("eneter valid number ")
}
