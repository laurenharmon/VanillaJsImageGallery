const gallery = document.getElementById("gallery");
const popup = document.getElementById("popup");
const selectedImage = document.getElementById("selectedImage");

for (let i = 1; i <= 15; i++) {
    const image = document.createElement("img");
    image.src = `/images/imagekit/citrus-${i}.jpg`;
    image.alt = `Citrus Picture Number ${i}`;
    image.classList.add("galleryImage");
    image.addEventListener("click", () => {
        popup.style.transform = `translateY(0)`;
        selectedImage.src = `/images/imagekit/citrus-${i}.jpg`;
        selectedImage.alt = `Citrus Picture Number ${i}`;
    })
    gallery.appendChild(image);
};

popup.addEventListener("click", () => {
    popup.style.transform = `translateY(-100%)`;
    popup.src = "";
    popup.alt = "";
});
