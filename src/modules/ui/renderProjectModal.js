import "../../styles/projectModal.css"
import { $body } from "./domSelectors";

export default function renderModal() {
    const $modal = document.createElement("div");
    $modal.classList.add("addProject-modal");
    $modal.classList.add("hidden");
    $modal.innerHTML = `
        <form action="">
            soy form
        </form>
    `
    $body.appendChild($modal)
}