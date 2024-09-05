export function playVideo() {
    const image = document.querySelector(".video__img");
    const button = document.querySelector(".video__button");
    const iframe = document.querySelector(".video__iframe");

    image.style.display = "none"; // Скрываем изображение
    button.style.display = "none"; // Скрываем кнопку
    iframe.style.display = "block"; // Показываем iframe

    // Начинаем воспроизведение видео в iframe
    iframe.src += "?autoplay=1";
}
