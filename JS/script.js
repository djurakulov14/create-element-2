axios.get("http://localhost:3001/recomended")
    .then(res => {
        console.log(res.data);
        recomend(res.data)
    })

axios.get("http://localhost:3001/sales")
    .then(res => {
        console.log(res.data);
        sales(res.data)
    })
    
axios.get("http://localhost:3001/think")
    .then(res => {
        console.log(res.data);
        think(res.data)
    })
    
axios.get("http://localhost:3001/more_info")
    .then(res => {
        console.log(res.data);
        more_info(res.data)
    })

    
axios.get("http://localhost:3001/footer")
    .then(res => {
        console.log(res.data);
        footer(res.data)
    })


    
const recomend = (arr) => {
    const container = document.querySelector('.cont')
    for(let item of arr) {
        container.innerHTML += `
            <div class="box">
                <div class="${item.img}">
                    <div class="like">
                        <img src="./img/like.svg" alt="">
                    </div>
                </div>
                <div class="display">
                    <p class="title">${item.desc}</p>
                    <p class="price">${item.price}грн</p>
                </div>
            </div>
        `
    }
} 



const sales = (arr) => {
    const conrainer_2 = document.querySelector('.cont2')

    for(let item of arr){
        let sale = item.price / item.sale
        sale = item.price - sale
        conrainer_2.innerHTML += `
                <div class="box">
                    <div class="${item.img}">
                        <div class="like">
                            <img src="./img/like.svg" alt="">
                        </div>
                        <p class="sale">SALE</p>
                    </div>
                    <div class="display">
                        <p class="title">${item.desc}</p>
                        <div class="price_div">
                            <div></div>
                            <p class="l_price">${item.price} грн</p>
                            <p class="s_price">${sale} грн</p>
                        </div>
                    </div>
                </div>
        `
    }
}

const think = (arr) => {
    let conrainer_3 = document.querySelector('.cont3')

    for(let item of arr) {
        
        conrainer_3.innerHTML += `
                <div class="block">
                    <img src="./img/${item.img}.png">
                    <p class="name">${item.name}</p>
                    <p class="dsc">${item.desc}</p>
                    <p class="data">${item.date}</p>
                </div>
        `
    }
}




const more_info = (arr) => {
    let conrainer_4 = document.querySelector('.cont4')

    for(let item of arr) {
        conrainer_4.innerHTML += `
            <div class="karopka">
                <div class="img"></div>
                <p class="title_2">${item.title}</p>
                <p class="dsc_2">${item.desc}</p>
                <a href="#" class="link">Читать больше</a>
            </div>
        `
    }
}



const footer = (arr) => {
    let right = document.querySelector('.right')

    for(let item of arr){
        right.innerHTML += `
        <div class="row">
            <p class="title">${item.title}</p>
            <a href="#">${item.p1}</a>
            <a href="#">${item.p2}</a>
            <a href="#">${item.p3}</a>
            <a href="#">${item.p4}</a>
            <a href="#">${item.p5}</a>
        </div>
        `
    }
}



