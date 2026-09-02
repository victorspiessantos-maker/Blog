/* =========================
   MENU MOBILE
========================= */

const menuButton = document.getElementById("menuButton");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
});


/* =========================
   MODO ESCURO
========================= */

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀";
        localStorage.setItem("theme", "dark");
    } else {
        themeButton.textContent = "☾";
        localStorage.setItem("theme", "light");
    }

});


/* RECUPERAR TEMA */

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

    themeButton.textContent = "☀";

}


/* =========================
   PESQUISA
========================= */

const searchButton = document.getElementById("searchButton");
const searchBox = document.getElementById("searchBox");
const closeSearch = document.getElementById("closeSearch");
const searchInput = document.getElementById("searchInput");

searchButton.addEventListener("click", () => {

    searchBox.classList.add("show");

    setTimeout(() => {
        searchInput.focus();
    }, 100);

});


closeSearch.addEventListener("click", () => {

    searchBox.classList.remove("show");

    searchInput.value = "";

    showAllArticles();

});


/* =========================
   FILTRO DE ARTIGOS
========================= */

const categoryButtons =
    document.querySelectorAll(".category-card");

const articles =
    document.querySelectorAll(".article-card");


categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedCategory =
            button.dataset.category;

        categoryButtons.forEach(item => {
            item.classList.remove("active-category");
        });

        button.classList.add("active-category");


        articles.forEach(article => {

            const articleCategory =
                article.dataset.category;

            if (
                selectedCategory === "Todos" ||
                articleCategory === selectedCategory
            ) {

                article.style.display = "block";

                setTimeout(() => {
                    article.style.opacity = "1";
                    article.style.transform = "translateY(0)";
                }, 20);

            } else {

                article.style.opacity = "0";
                article.style.transform = "translateY(10px)";

                setTimeout(() => {
                    article.style.display = "none";
                }, 250);

            }

        });

    });

});


/* =========================
   PESQUISA DOS ARTIGOS
========================= */

searchInput.addEventListener("input", () => {

    const search =
        searchInput.value.toLowerCase().trim();


    articles.forEach(article => {

        const text =
            article.innerText.toLowerCase();


        if (text.includes(search)) {

            article.style.display = "block";

            setTimeout(() => {
                article.style.opacity = "1";
            }, 20);

        } else {

            article.style.opacity = "0";

            setTimeout(() => {
                article.style.display = "none";
            }, 200);

        }

    });

});


function showAllArticles() {

    articles.forEach(article => {

        article.style.display = "block";

        setTimeout(() => {
            article.style.opacity = "1";
        }, 20);

    });

}


/* =========================
   VER TODAS
========================= */

const viewAll = document.getElementById("viewAll");

viewAll.addEventListener("click", () => {

    categoryButtons.forEach(button => {
        button.classList.remove("active-category");
    });

    categoryButtons[0].classList.add("active-category");

    showAllArticles();

});


/* =========================
   NEWSLETTER
========================= */

const newsletterForm =
    document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const input =
        newsletterForm.querySelector("input");

    const button =
        newsletterForm.querySelector("button");


    button.textContent = "Inscrito ✓";

    input.value = "";

    input.placeholder = "Obrigado por se inscrever!";


    setTimeout(() => {

        button.textContent =
            "Quero receber →";

        input.placeholder =
            "Seu melhor e-mail";

    }, 3000);

});


/* =========================
   FECHAR MENU AO CLICAR
========================= */

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

    });

});


/* =========================
   ANIMAÇÃO AO ENTRAR NA TELA
========================= */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


document
    .querySelectorAll(".article-card, .trend-item, .category-card")
    .forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(20px)";

        element.style.transition =
            "opacity .5s ease, transform .5s ease";

        observer.observe(element);

    });