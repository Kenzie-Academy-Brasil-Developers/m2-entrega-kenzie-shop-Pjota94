class API {
    
    static containerCards = document.querySelector("#container-children")

    static requisicao(){
        const retorno = fetch('https://m2-kenzie-shop.herokuapp.com/products')
        .then(res => res.json())
        .then((data) => {
            for(let i = 0; i < data.products.length; i++){
      
            }
            return data.products
        })

        return retorno
    }

    static async template(){
        
        const arrrayProducts = await this.requisicao()
        
        for(let i = 0; i < arrrayProducts.length; i++){
       
            const cardProduct = document.createElement('div');
            cardProduct.classList.add('card-product')
            cardProduct.innerHTML = `<img class="img-product" src="https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint3/img/consumindo-api-produtos/${arrrayProducts[i].id}/Image.png" alt="">
                    
            <div class="stars"> 
                <img src="./src/IMG/ESTRELA.png" alt="">
                <img src="./src/IMG/ESTRELA.png" alt="">
                <img src="./src/IMG/ESTRELA.png" alt="">
                <img src="./src/IMG/ESTRELA.png" alt="">
                <img src="./src/IMG/Vector.png" alt=""> 
            </div>  
            
            <p class="description">${arrrayProducts[i].productName}</p>
            
            <p class="price">R$${arrrayProducts[i].promotionStatus ? arrrayProducts[i].price.productPromotionPrice : arrrayProducts[i].price.productPrice}</p>
            
            <button class="btn-buy">COMPRAR</button>`
            
            this.containerCards.appendChild(cardProduct)       
        }
    }
}

API.template()


