let body = document.body;

let number = Number(prompt("Enter the number"));

// console.log(Number.isNaN(number))

if(!Number.isNaN(number)){

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
    alert("Enter a valid number ")
}

console.log(0.1 + 0.2 === 0.3)