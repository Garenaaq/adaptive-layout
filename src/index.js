import "./index.html";
import "./style.scss";
import { playVideo } from "./scripts/playVideo";

// Функция для запуска видео

document.querySelector(".video__button").addEventListener("click", playVideo);

// Функция для скрола к блоку

const links = document.querySelectorAll(".header__menu-item > a");
// console.log(links);
for (let i = 0; i < links.length; i++) {
    links[i].onclick = () => {
        document
            .getElementById(links[i].getAttribute("data-link"))
            .scrollIntoView({ behavior: "smooth" });
    };
}

// Работа с модалкой

const modal = document.getElementById("modal");
const openModalButtons = document.querySelectorAll(".products__open-modal-btn");
const closeButton = document.getElementById("closeButton");

const checkbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submitBtn");

openModalButtons.forEach((button) => {
    button.addEventListener("click", function () {
        modal.style.display = "flex";
    });
});

closeButton.addEventListener("click", function () {
    modal.style.display = "none";
    inputName.value = "";
    inputPhone.value = "";
    checkbox.checked = false;
    submitBtn.disabled = true;
});

window.addEventListener("mousedown", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
        inputName.value = "";
        inputPhone.value = "";
        checkbox.checked = false;
        submitBtn.disabled = true;
    }
});

// Доступ к кнопке для отправки формы после нажатия чекбокса

checkbox.addEventListener("change", function () {
    submitBtn.disabled = !checkbox.checked;
});

// Маска номера телефона

window.addEventListener("DOMContentLoaded", function () {
    document
        .querySelectorAll(".modal__form-input_phone")
        .forEach(function (input) {
            var keyCode;

            function mask(event) {
                event.keyCode && (keyCode = event.keyCode);
                var pos = this.selectionStart;

                if (pos < 3 && event.keyCode !== 8 && event.keyCode !== 46) {
                    event.preventDefault();
                }

                var matrix = "+7 (___) ___ ____",
                    i = 0,
                    def = matrix.replace(/\D/g, ""),
                    val = this.value.replace(/\D/g, ""),
                    new_value = matrix.replace(/[_\d]/g, function (a) {
                        return i < val.length ? val.charAt(i++) : a;
                    });

                i = new_value.indexOf("_");
                if (i != -1) {
                    i < 5 && (i = 3);
                    new_value = new_value.slice(0, i);
                }

                var reg = matrix
                    .substr(0, this.value.length)
                    .replace(/_+/g, function (a) {
                        return "\\d{1," + a.length + "}";
                    })
                    .replace(/[+()]/g, "\\$&");

                reg = new RegExp("^" + reg + "$");

                if (
                    !reg.test(this.value) ||
                    this.value.length < 5 ||
                    (keyCode > 47 && keyCode < 58)
                ) {
                    this.value = new_value;
                }

                if (event.type == "blur" && this.value.length < 5) {
                    this.value = "";
                }

                if (pos < this.value.length) {
                    this.setSelectionRange(pos, pos);
                }
            }

            function handleDelete(event) {
                if (
                    this.selectionStart == 0 &&
                    this.selectionEnd == this.value.length
                ) {
                    this.value = "";
                }
            }

            function handleInput(event) {
                if (this.value === "") {
                    this.value = "+7 ";
                }
            }

            input.addEventListener("input", mask, false);
            input.addEventListener("focus", mask, false);
            input.addEventListener("blur", mask, false);
            input.addEventListener("keydown", mask, false);
            input.addEventListener("keydown", handleDelete, false);
            input.addEventListener("input", handleInput, false);
        });
});

// Валидация формы

const buttonSubmit = document.getElementById("submitBtn");
buttonSubmit.addEventListener("click", (event) => {
    const inputName = document.getElementById("inputName");
    const inputPhone = document.getElementById("inputPhone");
    let hasError = false;

    [inputName, inputPhone].forEach((item) => {
        if (!item.value) {
            event.preventDefault();
            item.style.borderColor = "rgba(248, 116, 116, 1)";
            hasError = true;
        } else {
            item.style.borderColor = "";
        }
    });

    if (!hasError) {
        setTimeout(() => {
            inputName.value = "";
            inputPhone.value = "";
            checkbox.checked = false;
            submitBtn.disabled = true;
            modal.style.display = "none";
            console.log("Форма отправилась");
            alert("Вы успешно отправили заявку!");
        }, 100);
    }
});
