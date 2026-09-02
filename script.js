/*
    ==========================================
    POSTS DO BLOG
    ==========================================

    Para criar um novo artigo futuramente,
    basta adicionar outro objeto dentro desta lista.
*/


const posts = [

    {

        id: "celular",

        category: "CELULARES",

        title:
            "Como escolher um celular sem cair no marketing",

        description:
            "Processador, memória, tela, bateria e atualizações: entenda o que realmente importa antes de comprar um celular.",

        date:
            "2 de setembro de 2026",

        icon:
            "◉",

        content: `

            <p>
                Comprar um celular não precisa ser uma disputa
                de números. Um aparelho com uma ficha técnica
                enorme pode não ser a melhor escolha para a sua
                rotina.
            </p>

            <h2>
                Comece pelo processador
            </h2>

            <p>
                O processador influencia diretamente o desempenho
                do sistema, dos aplicativos e dos jogos.
                Por isso, comparar apenas a quantidade de
                gigahertz não é suficiente.
            </p>

            <p>
                Também é importante observar a geração do
                processador, a eficiência energética e os testes
                de desempenho.
            </p>

            <h2>
                Memória também importa
            </h2>

            <p>
                A memória RAM ajuda o aparelho a manter vários
                aplicativos abertos. Já o armazenamento define
                quanto espaço você terá para fotos, vídeos,
                aplicativos e arquivos.
            </p>

            <h2>
                Não esqueça das atualizações
            </h2>

            <p>
                Um celular pode ser rápido hoje, mas continuar
                recebendo atualizações é importante para manter
                o aparelho seguro e compatível com novos
                aplicativos.
            </p>

        `

    },


    {

        id: "wifi",

        category: "INTERNET",

        title:
            "Por que o Wi-Fi pode ficar lento mesmo com internet rápida?",

        description:
            "A velocidade contratada é apenas uma parte da história. Veja o que pode limitar sua conexão.",

        date:
            "2 de setembro de 2026",

        icon:
            "⌁",

        content: `

            <p>
                Ter um plano de internet rápido não significa
                que todos os aparelhos da casa receberão
                essa velocidade.
            </p>

            <h2>
                Distância do roteador
            </h2>

            <p>
                Quanto mais distante o dispositivo estiver do
                roteador, maior pode ser a perda de sinal.
                Paredes e outros obstáculos também podem
                prejudicar a conexão.
            </p>

            <h2>
                Interferências
            </h2>

            <p>
                Redes Wi-Fi próximas podem utilizar frequências
                semelhantes e causar interferência.
            </p>

            <h2>
                Como descobrir o problema
            </h2>

            <p>
                Uma maneira simples é fazer um teste próximo
                ao roteador e outro no local onde a internet
                fica lenta.
            </p>

            <p>
                Se a velocidade for muito diferente, o problema
                provavelmente está relacionado ao sinal Wi-Fi
                e não necessariamente ao plano contratado.
            </p>

        `

    },


    {

        id: "inteligencia-artificial",

        category:
            "INTELIGÊNCIA ARTIFICIAL",

        title:
            "O que uma inteligência artificial realmente faz?",

        description:
            "Uma explicação simples sobre modelos de IA, treinamento, respostas e suas limitações.",

        date:
            "2 de setembro de 2026",

        icon:
            "✦",

        content: `

            <p>
                Inteligências artificiais generativas conseguem
                produzir textos, imagens, áudios e outros
                conteúdos a partir de padrões aprendidos durante
                o treinamento.
            </p>

            <h2>
                Ela não funciona como uma busca comum
            </h2>

            <p>
                Um modelo de linguagem gera uma resposta
                calculando quais sequências de informações são
                mais prováveis de aparecer depois das anteriores.
            </p>

            <h2>
                Por que a IA pode errar?
            </h2>

            <p>
                O modelo não possui uma garantia automática de
                que tudo o que produz é verdadeiro.
            </p>

            <p>
                Por isso, informações importantes devem ser
                verificadas em fontes confiáveis.
            </p>

            <h2>
                Como aproveitar melhor
            </h2>

            <p>
                Quanto mais claro for o pedido e quanto mais
                contexto relevante for fornecido, maior tende
                a ser a utilidade da resposta.
            </p>

        `

    }

];



/*
    ==========================================
    PÁGINA INICIAL
    ==========================================
*/


const postsContainer =
    document.getElementById("posts");

const searchInput =
    document.getElementById("search");

const noResults =
    document.getElementById("no-results");



function renderPosts(postsToRender) {

    if (!postsContainer) {
        return;
    }


    postsContainer.innerHTML = "";


    postsToRender.forEach(post => {

        const card =
            document.createElement("article");


        card.className =
            "post-card";


        card.innerHTML = `

            <div class="post-image">
                ${post.icon}
            </div>

            <div class="post-content">

                <span class="post-category">
                    ${post.category}
                </span>

                <h3>
                    ${post.title}
                </h3>

                <p>
                    ${post.description}
                </p>

                <a
                    class="read-more"
                    href="post.html?id=${post.id}"
                >
                    Ler artigo →
                </a>

            </div>

        `;


        postsContainer.appendChild(card);

    });


    if (noResults) {

        noResults.hidden =
            postsToRender.length !== 0;

    }

}



if (postsContainer) {

    renderPosts(posts);

}



/*
    ==========================================
    PESQUISA
    ==========================================
*/


if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            const search =
                this.value
                    .toLowerCase()
                    .trim();


            const filtered =
                posts.filter(post => {

                    const text = `

                        ${post.title}
                        ${post.category}
                        ${post.description}

                    `.toLowerCase();


                    return text.includes(search);

                });


            renderPosts(filtered);

        }
    );

}



/*
    ==========================================
    PÁGINA DO ARTIGO
    ==========================================
*/


const articleContainer =
    document.getElementById(
        "article-container"
    );



if (articleContainer) {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const articleId =
        params.get("id");


    const article =
        posts.find(
            post =>
                post.id === articleId
        );


    if (!article) {

        articleContainer.innerHTML = `

            <div class="not-found">

                <h1>
                    Artigo não encontrado
                </h1>

                <p>
                    Esse artigo não existe ou
                    o endereço está incorreto.
                </p>

                <a
                    href="index.html#artigos"
                    class="main-button"
                >
                    Voltar aos artigos
                </a>

            </div>

        `;

    }

    else {

        document.title =
            article.title +
            " — TechNexo";


        articleContainer.innerHTML = `

            <article class="article-page">

                <a
                    href="index.html#artigos"
                    class="back-link"
                >
                    ← Voltar para os artigos
                </a>


                <p class="article-category">
                    ${article.category}
                </p>


                <h1>
                    ${article.title}
                </h1>


                <p class="article-date">
                    ${article.date}
                </p>


                <div class="article-image">
                    ${article.icon}
                </div>


                <div class="article-text">

                    ${article.content}

                </div>

            </article>

        `;

    }

}