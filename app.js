let categories = document.getElementById('categories')
let social = document.getElementById('social-Link')
let categoriesHidden = document.getElementById('Categories-hidden')
let socialHidden = document.getElementById('social-hidden')

categories.addEventListener("click", function () {
    setTimeout(()=>{

        if (categoriesHidden.style.display === "none") {
            categoriesHidden.style.display = "block";
        } else {
            categoriesHidden.style.display = "none";
        }
    },900)
})
social.addEventListener("click", function () {
    if (socialHidden.style.display === "none") {
        socialHidden.style.display = "block";
    } else {
        socialHidden.style.display = "none"
    }
})

const projectBtn = ()=>{

    window.location.href =('../projret/project.html')
}
set