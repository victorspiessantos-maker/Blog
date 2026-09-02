// ============================
// BOTÃO DE CURTIR
// ============================

const likeButtons =
    document.querySelectorAll(".like-btn");


likeButtons.forEach(button => {

    button.addEventListener("click", () => {

        const count =
            button.querySelector("b");

        const icon =
            button.querySelector("span");


        let value =
            Number(count.textContent);


        if (button.classList.contains("liked")) {

            value--;

            icon.textContent = "♡";

            button.classList.remove("liked");

        } else {

            value++;

            icon.textContent = "♥";

            button.classList.add("liked");
        }


        count.textContent = value;

    });

});



// ============================
// COMPARTILHAR
// ============================

const shareButtons =
    document.querySelectorAll(".share-btn");


shareButtons.forEach(button => {

    button.addEventListener("click", async () => {

        const post =
            button.closest(".post");


        const title =
            post.querySelector("h3").textContent;


        if (navigator.share) {

            try {

                await navigator.share({

                    title: title,

                    text:
                        "Olha esse artigo do Blog Gelo!",

                    url: window.location.href

                });

            } catch (error) {

                console.log("Compartilhamento cancelado.");

            }

        } else {

            await navigator.clipboard
                .writeText(window.location.href);


            button.textContent = "✓";


            setTimeout(() => {

                button.textContent = "↗";

            }, 1500);

        }

    });

});



// ============================
// MODO ESCURO
// ============================

const themeBtn =
    document.getElementById("themeBtn");


themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    if (
        document.body.classList.contains("dark")
    ) {

        themeBtn.textContent = "☀";

    } else {

        themeBtn.textContent = "☾";

    }

});



// ============================
// NEWSLETTER
// ============================

const form =
    document.getElementById(
        "newsletterForm"
    );


const message =
    document.getElementById(
        "formMessage"
    );


form.addEventListener("submit", event => {

    event.preventDefault();


    const email =
        document.getElementById("email").value;


    message.textContent =
        `Pronto! ${email} foi cadastrado.`;


    form.reset();

});



// ============================
// FILTRO DE ARTIGOS
// ============================

const filterBtn =
    document.getElementById(
        "filterBtn"
    );


const categories = [

    "Todos",

    "Tecnologia",

    "Ideias",

    "Cotidiano"

];


let categoryIndex = 0;


filterBtn.addEventListener("click", () => {

    categoryIndex++;


    if (
        categoryIndex >= categories.length
    ) {

        categoryIndex = 0;

    }


    const selected =
        categories[categoryIndex];


    filterBtn.textContent =
        selected + " ▾";


    const posts =
        document.querySelectorAll(".post");


    posts.forEach(post => {

        if (
            selected === "Todos" ||
            post.dataset.category === selected
        ) {

            post.style.display = "";

        } else {

            post.style.display = "none";

        }

    });

});