let phones = [
    {
        img: './img/11 pro.jpeg',
        name: '11 pro',
        color: 'spacegreen',
        price: '400$'
    },
    {
        img: './img/11 pro max.png',
        name: '11 pro max',
        color: 'gold',
        price: '500$'
    },
    {
        img: './img/12 pro.jpeg',
        name: '12 pro',
        color: 'dark',
        price: '600$'
    },
    {
        img: './img/12 pro max .jpeg',
        name: '12 pro max',
        color: 'gold',
        price: '700$'
    },
    {
        img: './img/13 pro.jpeg',
        name: '13 pro',
        color: 'blue',
        price: '800$'
    },
]
let laptop =[
    {
        img : './img/asus.jpeg',
        name :'Asus',
        color : 'black',
        price: '300$'
    },
    {
        img : './img/macBook air.jpg',
        name :'MacBook air',
        color : 'dark',
        price: '900$'
    },
    {
        img : './img/macBook pro .jpeg',
        name :'MacBook pro',
        color : 'space-gray',
        price: '1400$'
    },
    {
        img : './img/hp.jpeg',
        name :'HP',
        color : 'black',
        price: '500$'
    },
    {
        img : './img/lennovo.jpeg',
        name :'Lennovo',
        color : 'black',
        price: '400$'
    },
]
let ps = [
    {
        img : './img/ps1.jpeg',
        name : 'PS1',
        color : 'white',
        price : '200$'
    },
    {
        img : './img/ps2.webp',
        name : 'PS2',
        color : 'gray',
        price : '300$'
    },
    {
        img : './img/ps3.webp',
        name : 'PS3',
        color : 'black',
        price : '400$'
    },
    {
        img : './img/ps4.jpeg',
        name : 'PS4',
        color: 'black',
        price : '500$'
    },
    {
        img : './img/ps5.jpeg',
        name : 'PS5',
        color : 'white',
        price : '600$'
    },
]
let tv = [
    {
        img : './img/samsung.jpeg',
        name : 'Samsung',
        color : '40 Inch',
        price : '400$'
    },
    {
        img : './img/avalon.jpeg',
        name : 'Avalon',
        color : '42 Inch',
        price : '500$'
    },
    {
        img : './img/artel.png',
        name : 'Artel',
        color: '43 Inch',
        price : '200$'
    },
    {
        img : './img/Elg.webp',
        name : 'EL G',
        color : '44 Inch',
        price : '450$'
    },
    {
        img : './img/ziffler.jpeg',
        name : 'Ziffler',
        color : '45 Inch',
        price : '700$'
    },
]

let fridge = [
    {
        img : './img/D1.webp',
        name : 'D1',
        color: 'Gray',
        price : '800$'
    },
    {
        img : './img/EL G.webp',
        name : 'EL G 30',
        color : 'Black',
        price : '1200$'
    },
    {
        img : './img/samsung 21.jpeg',
        name : 'Samsung 21',
        color : 'Black',
        price : '1200$'
    },
    {
        img : './img/amazon.jpg',
        name : 'Samsung 2',
        color : 'White',
        price : '500$'
    },
    {
        img : './img/severin.jpeg',
        name: 'Severin',
        color : 'Space-gray',
        price : '400$'
    },
]
let div = document.querySelector('.phones_card')
let phone = document.querySelector('#first')
let tv_div = document.querySelector('#four')
let ps_card = document.querySelector('#third')
let laptop_card = document.querySelector('#second')
let fridge_div = document.querySelector('#five')
function choose() {
    div.innerHTML = ""
    for (let item of phones) {
        let card = document.createElement('div')
        let img = document.createElement('img')
        let p_name = document.createElement('p')
        let p_color = document.createElement('p')
        let p_price = document.createElement('p')
        let btn = document.createElement('button')
        let span = document.createElement('span')


        card.classList.add('card')
        img.src = item.img
        p_name.classList.add('pro')
        p_name.innerHTML = item.name
        p_color.innerHTML = item.color
        p_price.innerHTML = item.price
        btn.classList.add('btn')
        btn.innerHTML = "buy"


        div.append(card)
        card.append(img, p_name, span, btn)
        span.append(p_color, p_price)
    }
}
function choose2() {
    div.innerHTML = ""
    for (let item of laptop) {
        let card = document.createElement('div')
        let img = document.createElement('img')
        let p_name = document.createElement('p')
        let p_color = document.createElement('p')
        let p_price = document.createElement('p')
        let btn = document.createElement('button')
        let span = document.createElement('span')


        card.classList.add('card')
        img.src = item.img
        p_name.classList.add('pro')
        p_name.innerHTML = item.name
        p_color.innerHTML = item.color
        p_price.innerHTML = item.price
        btn.classList.add('btn')
        btn.innerHTML = "buy"


        div.append(card)
        card.append(img, p_name, span, btn)
        span.append(p_color, p_price)
    }
}
function choose3() {
    div.innerHTML = ""
    for (let item of ps) {
        let card = document.createElement('div')
        let img = document.createElement('img')
        let p_name = document.createElement('p')
        let p_color = document.createElement('p')
        let p_price = document.createElement('p')
        let btn = document.createElement('button')
        let span = document.createElement('span')


        card.classList.add('card')
        img.src = item.img
        p_name.classList.add('pro')
        p_name.innerHTML = item.name
        p_color.innerHTML = item.color
        p_price.innerHTML = item.price
        btn.classList.add('btn')
        btn.innerHTML = "buy"


        div.append(card)
        card.append(img, p_name, span, btn)
        span.append(p_color, p_price)
    }
}
function choose4() {
    div.innerHTML = ""
    for (let item of tv) {
        let card = document.createElement('div')
        let img = document.createElement('img')
        let p_name = document.createElement('p')
        let p_color = document.createElement('p')
        let p_price = document.createElement('p')
        let btn = document.createElement('button')
        let span = document.createElement('span')


        card.classList.add('card')
        img.src = item.img
        p_name.classList.add('pro')
        p_name.innerHTML = item.name
        p_color.innerHTML = item.color
        p_price.innerHTML = item.price
        btn.classList.add('btn')
        btn.innerHTML = "buy"


        div.append(card)
        card.append(img, p_name, span, btn)
        span.append(p_color, p_price)
    }
}
function choose5() {
    div.innerHTML = ""
    for (let item of fridge) {
        let card = document.createElement('div')
        let img = document.createElement('img')
        let p_name = document.createElement('p')
        let p_color = document.createElement('p')
        let p_price = document.createElement('p')
        let btn = document.createElement('button')
        let span = document.createElement('span')


        card.classList.add('card')
        img.src = item.img
        p_name.classList.add('pro')
        p_name.innerHTML = item.name
        p_color.innerHTML = item.color
        p_price.innerHTML = item.price
        btn.classList.add('btn')
        btn.innerHTML = "buy"


        div.append(card)
        card.append(img, p_name, span, btn)
        span.append(p_color, p_price)
    }
}
phone.onclick = () => {
    choose(phones)
}
laptop_card.onclick = () => {
    choose2(laptop)
}
ps_card.onclick=()=>{
    choose3(ps)
}
tv_div.onclick=()=>{
    choose4(tv)
}
fridge_div.onclick=()=>{
    choose5(fridge)
}