import component from "./component";
import { navbar } from "./components/navbar/navbar";
import { hero } from "./components/hero/hero";
import "./styles/index.scss";
import { aboutme } from "./components/aboutme/aboutme";

// pobieranie komponentu a następnie dołączanie jako child
document.body.appendChild(navbar());

document.body.appendChild(hero());
document.body.appendChild(aboutme());

// test component
// document.body.appendChild(component());
