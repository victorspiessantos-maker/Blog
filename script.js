const posts = [

  {
    id: "celular",
    category: "CELULARES",
    title: "Como escolher um celular sem cair no marketing",
    description:
      "Processador, memória, tela, bateria e atualizações: entenda o que realmente importa antes de comprar.",
    date: "2 de setembro de 2026",
    icon: "◉",

    content: `
      <p>
        Escolher um celular novo parece simples, mas existem dezenas de
        especificações diferentes. O problema é que nem todas elas fazem
        diferença no uso diário.
      </p>

      <h2>O processador é importante?</h2>

      <p>
        Sim. O processador influencia diretamente na velocidade do aparelho,
        na execução de aplicativos e também na eficiência energética.
      </p>

      <p>
        Porém, não basta olhar apenas para o nome do processador. Um aparelho
        precisa ter um conjunto equilibrado de componentes para entregar uma
        boa experiência.
      </p>

      <h2>Memória RAM</h2>

      <p>
        A memória RAM ajuda o celular a manter aplicativos abertos e alternar
        entre eles. Mais RAM pode ajudar, mas isso não significa que um celular
        com mais memória seja automaticamente melhor.
      </p>

      <h2>Tela e bateria</h2>

      <p>
        Para quem passa bastante tempo usando o celular, a qualidade da tela
        e a autonomia da bateria podem ser mais importantes do que pequenas
        diferenças de desempenho.
      </p>

      <h2>E as atualizações?</h2>

      <p>
        Esse é um ponto frequentemente esquecido. Um celular que recebe
        atualizações durante vários anos pode continuar seguro e útil por
        muito mais tempo.
      </p>

      <p>
        No final, a melhor compra é aquela que combina desempenho,
        qualidade de tela, bateria, câmeras e suporte de software dentro
        do seu orçamento.
      </p>
    `
  },


  {
    id: "wifi",
    category: "INTERNET",
    title: "Por que o Wi-Fi pode ficar lento mesmo com internet rápida?",
    description:
      "A velocidade contratada é apenas uma parte da história. Veja o que pode limitar sua conexão.",
    date: "2 de setembro de 2026",
    icon: "⌁",

    content: `
      <p>
        Você pode contratar uma internet muito rápida e ainda assim perceber
        lentidão no celular, computador ou videogame. Isso acontece porque
        a velocidade contratada não é a única coisa que determina a qualidade
        da conexão.
      </p>

      <h2>O roteador faz diferença</h2>

      <p>
        O roteador é responsável por distribuir a conexão dentro da sua casa.
        Um equipamento antigo ou mal posicionado pode reduzir bastante o
        desempenho da rede sem fio.
      </p>

      <h2>Distância e obstáculos</h2>

      <p>
        Paredes, portas, móveis e outros obstáculos podem enfraquecer o sinal.
        Quanto maior a distância entre o aparelho e o roteador, maior pode
        ser a perda de qualidade.
      </p>

      <h2>Vários dispositivos conectados</h2>

      <p>
        Quando várias pessoas estão assistindo vídeos, jogando, fazendo
        downloads e usando aplicativos ao mesmo tempo, a conexão precisa
        ser dividida entre todos esses dispositivos.
      </p>

      <h2>Como melhorar?</h2>

      <ul>
        <li>Coloque o roteador em uma posição mais central.</li>
        <li>Evite deixá-lo escondido dentro de móveis.</li>
        <li>Use a rede de 5 GHz quando estiver perto do roteador.</li>
        <li>Atualize o equipamento quando ele estiver muito antigo.</li>
      </ul>

      <p>
        Portanto, antes de culpar a operadora, vale analisar também a rede
        Wi-Fi dentro da sua própria casa.
      </p>
    `
  },


  {
    id: "ia",
    category: "INTELIGÊNCIA ARTIFICIAL",
    title: "O que uma inteligência artificial realmente faz?",
    description:
      "Uma explicação simples sobre modelos de IA, treinamento, respostas e limitações.",
    date: "2 de setembro de 2026",
    icon: "✦",

    content: `
      <p>
        A inteligência artificial está presente em celulares, aplicativos,
        redes sociais, mecanismos de busca e diversas outras tecnologias.
        Mas afinal, o que acontece quando fazemos uma pergunta para uma IA?
      </p>

      <h2>IA não funciona como um cérebro humano</h2>

      <p>
        Modelos modernos de inteligência artificial aprendem padrões a partir
        de grandes quantidades de dados. Esses padrões permitem que o modelo
        produza respostas, imagens, códigos e outros tipos de conteúdo.
      </p>

      <h2>O treinamento</h2>

      <p>
        Durante o treinamento, o modelo analisa muitos exemplos e ajusta
        seus parâmetros para reconhecer relações entre diferentes informações.
      </p>

      <h2>Então ela sabe tudo?</h2>

      <p>
        Não. Uma IA pode produzir uma resposta que parece convincente e
        ainda assim estar errada. Por isso, informações importantes devem
        ser verificadas em fontes confiáveis.
      </p>

      <h2>Por que ela parece tão inteligente?</h2>

      <p>
        Porque modelos atuais conseguem identificar padrões extremamente
        complexos e gerar respostas de maneira muito natural.
      </p>

      <p>
        A inteligência artificial é uma ferramenta poderosa, mas entender
        suas limitações é tão importante quanto saber utilizá-la.
      </p>
    `
  }

];


const $ = (selector) => document.querySelector(selector);


/* =========================
   TEMA
========================= */

function setupTheme() {

  const themeBtn = $("#themeBtn");

  if (!themeBtn) return;

  const savedTheme =
    localStorage.getItem("technexo_theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀";
  }

  themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const dark =
      document.body.classList.contains("dark");

    localStorage.setItem(
      "technexo_theme",
      dark ? "dark" : "light"
    );

    themeBtn.textContent =
      dark ? "☀" : "☾";
  });

}


/* =========================
   MENU MOBILE
========================= */

function setupMenu() {

  const menuBtn = $("#menuBtn");
  const nav = $("#nav");

  if (!menuBtn || !nav) return;

  menuBtn.addEventListener("click", () => {

    nav.classList.toggle("open");

  });

  nav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });

  });

}


/* =========================
   HOME
========================= */

function setupHome() {

  const postsContainer = $("#posts");

  if (!postsContainer) return;

  const search = $("#search");
  const categories = $("#categories");
  const empty = $("#empty");

  let currentCategory = "TODOS";


  /* categorias */

  const uniqueCategories = [
    "TODOS",
    ...new Set(posts.map(post => post.category))
  ];

  categories.innerHTML =
    uniqueCategories.map(category => `
      <button
        class="category ${category === "TODOS" ? "active" : ""}"
        data-category="${category}"
      >
        ${category}
      </button>
    `).join("");


  categories.querySelectorAll(".category")
    .forEach(button => {

      button.addEventListener("click", () => {

        categories
          .querySelectorAll(".category")
          .forEach(btn =>
            btn.classList.remove("active")
          );

        button.classList.add("active");

        currentCategory =
          button.dataset.category;

        renderPosts();

      });

    });


  function renderPosts() {

    const term =
      search.value.toLowerCase().trim();


    const filtered = posts.filter(post => {

      const categoryMatch =
        currentCategory === "TODOS" ||
        post.category === currentCategory;

      const textMatch =
        !term ||
        post.title.toLowerCase().includes(term) ||
        post.description.toLowerCase().includes(term) ||
        post.category.toLowerCase().includes(term);

      return categoryMatch && textMatch;

    });


    postsContainer.innerHTML =
      filtered.map(post => `

        <article class="post-card">

          <div class="post-cover">
            <span class="post-cover-icon">
              ${post.icon}
            </span>
          </div>

          <div class="post-body">

            <div class="post-category">
              ${post.category}
            </div>

            <h3 class="post-title">
              ${post.title}
            </h3>

            <p class="post-description">
              ${post.description}
            </p>

            <div class="post-footer">

              <span class="post-date">
                ${post.date}
              </span>

              <a
                class="read-link"
                href="post.html?id=${post.id}"
              >
                Ler artigo →
              </a>

            </div>

          </div>

        </article>

      `).join("");


    empty.style.display =
      filtered.length === 0
        ? "block"
        : "none";

  }


  search.addEventListener(
    "input",
    renderPosts
  );


  renderPosts();

}


/* =========================
   LIKES
========================= */

function likesKey(id) {
  return `technexo_likes_${id}`;
}

function likedKey(id) {
  return `technexo_liked_${id}`;
}

function getLikes(id) {

  return Number(
    localStorage.getItem(likesKey(id)) || 0
  );

}

function isLiked(id) {

  return (
    localStorage.getItem(likedKey(id)) === "1"
  );

}


/* =========================
   ARTIGO
========================= */

function setupArticle() {

  const article = $("#article");

  if (!article) return;


  const params =
    new URLSearchParams(window.location.search);

  const id = params.get("id");

  const post =
    posts.find(item => item.id === id);


  if (!post) {

    article.innerHTML = `

      <a href="index.html" class="back-link">
        ← Voltar
      </a>

      <h1>Artigo não encontrado</h1>

      <p class="article-description">
        Esse artigo não existe ou o link está incorreto.
      </p>

    `;

    return;

  }


  document.title =
    `${post.title} — TechNexo`;


  $("#articleCategory").textContent =
    post.category;

  $("#articleTitle").textContent =
    post.title;

  $("#articleDescription").textContent =
    post.description;

  $("#articleDate").textContent =
    post.date;

  $("#articleCoverIcon").textContent =
    post.icon;

  $("#articleContent").innerHTML =
    post.content;


  /* LIKE */

  const likeBtn = $("#likeBtn");
  const likeIcon = $("#likeIcon");
  const likeText = $("#likeText");
  const likeCount = $("#likeCount");


  function updateLike() {

    const liked =
      isLiked(post.id);

    likeCount.textContent =
      getLikes(post.id);

    likeIcon.textContent =
      liked ? "♥" : "♡";

    likeText.textContent =
      liked ? "Curtido" : "Curtir";

    likeBtn.classList.toggle(
      "liked",
      liked
    );

  }


  likeBtn.addEventListener(
    "click",
    () => {

      const liked =
        isLiked(post.id);

      let likes =
        getLikes(post.id);


      if (liked) {

        likes = Math.max(0, likes - 1);

        localStorage.removeItem(
          likedKey(post.id)
        );

      } else {

        likes++;

        localStorage.setItem(
          likedKey(post.id),
          "1"
        );

      }


      localStorage.setItem(
        likesKey(post.id),
        likes
      );


      updateLike();

    }
  );


  updateLike();


  /* COMPARTILHAR */

  $("#shareBtn").addEventListener(
    "click",
    async () => {

      const shareData = {
        title: post.title,
        text: post.description,
        url: window.location.href
      };


      if (navigator.share) {

        try {

          await navigator.share(
            shareData
          );

        } catch (error) {

          // Usuário cancelou o compartilhamento.

        }

      } else {

        copyLink();

      }

    }
  );


  /* COPIAR */

  $("#copyBtn").addEventListener(
    "click",
    copyLink
  );


  async function copyLink() {

    try {

      await navigator.clipboard.writeText(
        window.location.href
      );

      showMessage("Link copiado!");

    } catch (error) {

      prompt(
        "Copie o link:",
        window.location.href
      );

    }

  }


  /* RELACIONADOS */

  const related =
    posts.filter(item => item.id !== post.id)
      .slice(0, 2);


  $("#related").innerHTML =
    related.map(item => `

      <a
        class="related-card"
        href="post.html?id=${item.id}"
      >

        <small>
          ${item.category}
        </small>

        <h3>
          ${item.title}
        </h3>

      </a>

    `).join("");

}


/* =========================
   MENSAGEM
========================= */

function showMessage(text) {

  const message =
    document.createElement("div");

  message.textContent = text;

  message.style.position = "fixed";
  message.style.bottom = "25px";
  message.style.left = "50%";
  message.style.transform =
    "translateX(-50%)";

  message.style.padding =
    "12px 18px";

  message.style.borderRadius =
    "12px";

  message.style.background =
    "var(--text)";

  message.style.color =
    "var(--bg)";

  message.style.zIndex = "99999";

  message.style.fontSize = "13px";

  message.style.fontWeight = "600";

  document.body.appendChild(message);


  setTimeout(() => {

    message.remove();

  }, 1800);

}


/* =========================
   SCROLL
========================= */

function setupScroll() {

  const progress =
    $("#progress");

  const topBtn =
    $("#topBtn");


  window.addEventListener(
    "scroll",
    () => {

      const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;


      const percentage =
        documentHeight > 0
          ? (window.scrollY / documentHeight) * 100
          : 0;


      if (progress) {

        progress.style.width =
          percentage + "%";

      }


      if (topBtn) {

        topBtn.style.display =
          window.scrollY > 500
            ? "grid"
            : "none";

      }

    }
  );


  if (topBtn) {

    topBtn.addEventListener(
      "click",
      () => {

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }
    );

  }

}


/* =========================
   INICIAR
========================= */

setupTheme();
setupMenu();
setupHome();
setupArticle();
setupScroll();