let sections = document.querySelectorAll("section")
let btn = document.querySelector("#cl")
let p= document.querySelector("#p")
let n = document.querySelector("#n")
for (let sec of sections)
{
    let images = sec.querySelectorAll("img")
    for (let img of images)
    {
        img.addEventListener("click", function () {
            type=sec.previousElementSibling.innerText.toLowerCase()
            article.classList.remove("art")
            article.children[1].children[1].src = img.src
            let nav = article.querySelector("nav")
            // imgClass = article.children[1].children[1]
            // imgClass.classList.add("opa")
            // console.log(imgClass.classList)

            article.children[2].innerHTML =type.toUpperCase();
            nav.innerHTML=""
            for (let i = 0; i < images.length; i++) {
                ia = document.createElement("img")
                ia.src = `images/${type}-${i + 1}.jpeg`
                if(img.src==ia.src){ia.classList.add("opa")}
                nav.appendChild(ia)
            }
            imgs = nav.children
            console.log(imgs)
            for (let i = 0; i < imgs.length; i++){
                imgs[i].addEventListener("click", function () {
                    imgs[i].classList.remove("opa")
                    for (j = 0; j < imgs.length;j++){ imgs[j].classList.remove("opa")}
                    article.children[1].children[1].src=imgs[i].src
                    article.children[2].innerHTML =`${type.toUpperCase()} - ${i+1}`;
                    imgs[i].classList.add("opa")
                })
            }
        })
        
     
    }
}
let article = document.querySelector("article")
btn.addEventListener("click", function () {
    article.classList.add("art")
})
n.addEventListener("click", function () {
    let i = document.querySelector(".opa")
    // i.src=
    if (i.nextElementSibling) {
        i.classList.remove("opa")
        i.nextElementSibling.classList.add("opa")
        l=i.nextElementSibling.src
        article.children[1].children[1].src = l
        article.querySelector("h2").innerText=type.toUpperCase()+" - "+l[l.length-6]
    } else {
         i.classList.remove("opa")
        i.parentElement.firstElementChild.classList.add("opa")
        l=i.parentElement.firstElementChild.src
        article.children[1].children[1].src =l
        article.querySelector("h2").innerText=type.toUpperCase()+" - "+l[l.length-6]
    }
})
p.addEventListener("click", function () {
    let i = document.querySelector(".opa")
    // i.src=
    if (i.parentElement.firstElementChild == i) {
        i.classList.remove("opa")
        i.parentElement.lastElementChild.classList.add("opa")
        l=i.parentElement.lastElementChild.src
        article.children[1].children[1].src = l
        article.querySelector("h2").innerText=type.toUpperCase()+" - "+l[l.length-6]
    }
    else {
        
        i.classList.remove("opa")
        i.previousElementSibling.classList.add("opa")
        l=i.previousElementSibling.src
        article.children[1].children[1].src = l
        article.querySelector("h2").innerText=type.toUpperCase()+" - "+l[l.length-6]
    }
})