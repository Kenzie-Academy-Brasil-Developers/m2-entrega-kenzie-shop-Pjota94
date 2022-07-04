export class App{
    
    static kenzieNewsGet(){
        const url = "https://kenzie-news-api.herokuapp.com/api/news";
        const options = {
            method: "GET"
        };

        return fetch(url,options).then((response) => response.json())
    }

    static async requisicaoGet(){
        const result = await this.kenzieNewsGet()
        result.forEach((elem)=>{
            App.templateDesktop(elem.imagem,elem.categoria,elem.noticia_completa,elem.titulo,elem.resumo,elem.fonte);
            App.templateMobile(elem.categoria,elem.noticia_completa,elem.titulo,elem.resumo,elem.fonte);
        })
    }

    static templateDesktop(imagem,categoria,link,titulo,resumo,fonte){
        const selectArticleDesktop = document.querySelector('#article-desktop')
        //Criando elements
        const createDivPai    = document.createElement('div');
        const createDivImg    = document.createElement('div');
        const createImg       = document.createElement('img');
        const createDivTexts  = document.createElement('div');
        const createLink      = document.createElement('a');
        const createTag       = document.createElement('p');
        const createTittle    = document.createElement('p');
        const createSubtittle = document.createElement('p');
        const createFont      = document.createElement('p');
        //Adicionando Class
        createDivPai.classList.add("card-article-desktop")
        createDivImg.classList.add("img-article-desktop")
        createImg.classList.add("img-article-desktop")
        createDivTexts.classList.add("texts-article-desktop")
        createTag.classList.add("tag-article-desktop")
        createLink.classList.add("tittle-article-desktop")
        createTittle.classList.add('textoLinkArticle')
        createSubtittle.classList.add("subtittle-article-desktop")
        createFont.classList.add("font-article-desktop")
        //Inserindo conteudo
        createImg.src = imagem;
        createTag.innerText = categoria;
        createTittle.innerText = titulo;
        createSubtittle.innerText = resumo;
        createFont.innerText = fonte;
        //Inserindo conteudo Link
        createLink.href = link;
        createLink.target = '_blank'
        //Inserindo elements
        createDivImg.appendChild(createImg);
        createLink.appendChild(createTittle)
        createDivTexts.append(createTag,createLink,createSubtittle,createFont)
        createDivPai.append(createDivImg,createDivTexts)
        selectArticleDesktop.appendChild(createDivPai)
    }

    static templateMobile(categoria,link,titulo,resumo,fonte){
        const selectArticleMobile = document.querySelector('#article-mobile');
        //Criando elements
        const createDivPai    = document.createElement('div');
        const createTag       = document.createElement('p');
        const createLink      = document.createElement('a');
        const createTittle    = document.createElement('p');
        const createSubtittle = document.createElement('p');
        const createFont      = document.createElement('p');
        //Adicionando Class
        createDivPai.classList.add("card-article")
        createTag.classList.add("tag-article")
        createLink.classList.add("link-article-mobile")
        createTittle.classList.add("tittle-article")
        createSubtittle.classList.add("subtittle-article")
        createFont.classList.add("fonte-article")
        //Inserindo conteudo
        createTag.innerText = categoria;
        createTittle.innerText = titulo;
        createSubtittle.innerText = resumo;
        createFont.innerText = fonte;
        createLink.href = link;
        createLink.target = '_blank'
        //Inserindo elements
        createLink.appendChild(createTittle)
        createDivPai.append(createTag,createLink,createSubtittle,createFont)
        selectArticleMobile.appendChild(createDivPai)
    }
}

App.requisicaoGet()