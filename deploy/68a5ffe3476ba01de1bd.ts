import component from "./component";
import "./styles/index.scss";
// pobieranie komponentu a następnie dołączanie jako child
document.onload = function () {
    document.querySelector("#root").appendChild(component());
};
