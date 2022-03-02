import component from "./component";
import { navbar } from "./components/navbar/navbar";
import { hero } from "./components/hero/hero";
import "./styles/index.scss";

// pobieranie komponentu a następnie dołączanie jako child
document.body.appendChild(navbar());
document.body.appendChild(component());
document.body.appendChild(hero());
