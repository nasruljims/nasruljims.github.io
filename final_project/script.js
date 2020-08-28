function login(){
    let username = document.getElementById("username").value
    alert(`Welcome ${username}`)
    localStorage.setItem("textvalue", username)
}   

let show = document.getElementById("show")
show.innerHTML = localStorage.getItem("textvalue")

let money = 200000
let moneyTbl = document.getElementById("money")

let produkTbl = document.getElementById("produk")
let produkTbl2 = document.getElementById("produk2")
let produkTbl3 = document.getElementById("produk3")

let hargaTbl = document.getElementById("harga")
let hargaTbl2 = document.getElementById("harga2")
let hargaTbl3 = document.getElementById("harga3")

let totalTbl = document.getElementById("total")

let belanja = {}
let total = 0

let hasBuy = false

moneyTbl.innerHTML = money

function buy(){
    let item1 = document.getElementById("item1").value
    let name1 = 'Mama Jeruk'

    if(money !== 0 && money >= item1){
        hasBuy = true
        money -= item1
        moneyTbl.innerHTML = money

        if(belanja[name1] === undefined){
            belanja[name1] = 1
        }else{
            belanja[name1] += 1
        }

        
        produkTbl.innerHTML = `${name1} * ${belanja[name1]}`
        hargaTbl.innerHTML = `${item1 * belanja[name1]}`

        total += Number(item1)
        totalTbl.innerHTML = total
    }else{
        alert('Maaf Uang yang anda miliki tidak cukup')
    }
    
}

function buy2(){
    let item2 = document.getElementById("item2").value
    let name2 = 'Sunlay'

    if(money !== 0 && money >= item2){
        hasBuy = true
        money -= item2
        moneyTbl.innerHTML = money

        if(belanja[name2] === undefined){
            belanja[name2] = 1
        }else{
            belanja[name2] += 1
        }

        produkTbl2.innerHTML = `${name2} * ${belanja[name2]}`
        hargaTbl2.innerHTML = `${item2 * belanja[name2]}`

        total += Number(item2)
        totalTbl.innerHTML = total
    }else{
        alert('Maaf Uang yang anda miliki tidak cukup')
    }
}

function buy3(){
    let item3 = document.getElementById("item3").value
    let name3 = 'Lifeboy'

    if(money !== 0 && money >= item3){
        hasBuy = true
        money -= item3
        moneyTbl.innerHTML = money

        if(belanja[name3] === undefined){
            belanja[name3] = 1
        }else{
            belanja[name3] += 1
        }

        produkTbl3.innerHTML = `${name3} * ${belanja[name3]}`
        hargaTbl3.innerHTML = `${item3 * belanja[name3]}`

        total += Number(item3)
        totalTbl.innerHTML = total
    }else{
        alert('Maaf Uang yang anda miliki tidak cukup')
    }
}

function validate(){

    if(hasBuy === true){
        alert(`Anda telah berbelanja sebesar: Rp. ${total}\n Terimakasih telah berbelanja di Soapie`)
    
        location.href="index.html"
    }else{
        alert('Anda belum berbelanja apapun')
    }
    
}