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
        for(let i = 1; i < result.length; i++){
            let elem = result[i]
            App.templateDesktop(elem.imagem,elem.categoria,elem.noticia_completa,elem.titulo,elem.resumo,elem.fonte);
            App.templateMobile(elem.categoria,elem.noticia_completa,elem.titulo,elem.resumo,elem.fonte);
        }
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

    static async renderizarSection(){
        const result = await this.kenzieNewsGet()
        this.templateSectionDesktop(result[0].categoria,result[0].noticia_completa,result[0].titulo,result[0].resumo,result[0].fonte,result[0].imagem)
        this.templateSectionMobile(result[0].categoria,result[0].noticia_completa,result[0].titulo,result[0].fonte)
    }

    static templateSectionDesktop(categoria,link,titulo,resumo,font,imagem){
        const selectSection = document.querySelector('#section-desktop');

        const createContainer = document.createElement('div');
        createContainer.classList.add('container-section-desktop');
        const createDivText = document.createElement('div');
        createDivText.classList.add('texts-desktop');
        const tag = document.createElement('p');
        tag.classList.add('tag-section-desktop');
        tag.innerText = categoria;
        const createLink      = document.createElement('a');
        createLink.classList.add('tittle-section-desktop');
        createLink.href = link;
        createLink.target = '_blank'
        const createTittle    = document.createElement('p');
        createTittle.classList.add('textLinkA');
        createTittle.innerText = titulo;
        const createSubtittle = document.createElement('p');
        createSubtittle.classList.add('subtittle-section-desktop');
        createSubtittle.innerText = resumo;
        const createFont      = document.createElement('p');
        createFont.classList.add('font-section-desktop');
        createFont.innerText = font;
        const divImagem = document.createElement('div');
        divImagem.classList.add('imagem-desktop');
        const img = document.createElement('img');
        img.classList.add('img-section-desktop');
        img.src = imagem;

        createLink.appendChild(createTittle);
        createDivText.append(tag,createLink,createSubtittle,createFont);
        divImagem.appendChild(img);
        createContainer.append(createDivText,divImagem)
        selectSection.appendChild(createContainer)
    }

    static templateSectionMobile(categoria,link,titulo,font){
        const selectSection = document.querySelector('#section-mobile');

        const divContainer = document.createElement('div');
        divContainer.classList.add('container-section');
        const tag = document.createElement('p');
        tag.classList.add('tag-section');
        tag.innerText = categoria;
        const createLink = document.createElement('a');
        createLink.href = link;
        createLink.target = '_blank';
        createLink.classList.add('link-section-mobile');
        const createTittle = document.createElement('h1');
        createTittle.classList.add('title-section');
        createTittle.innerText = titulo;
        const createFont = document.createElement('p');
        createFont.classList.add('fonte-section');
        createFont.innerText = font;

        createLink.appendChild(createTittle);
        divContainer.append(tag,createLink,createFont);
        selectSection.appendChild(divContainer);

    }
}

App.requisicaoGet()
App.renderizarSection()