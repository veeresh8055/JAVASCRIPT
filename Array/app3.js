let prices = [110,150,200,450,750,900]
// before discount 
console.log("before discount")
for(let i of prices){
    console.log(i)
}

let dis = prices.map( (e) => {
    let disPrice = e - (e * 0.1);
    return disPrice;
})
console.log("after  discount")
for(let i of dis){
    console.log(i)
}
// 99
// 135
// 180
// 405
// 675
// 810
