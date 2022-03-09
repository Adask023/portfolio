import component from "./component";
import { navbar } from "./components/navbar/navbar";
import { hero } from "./components/hero/hero";
import "./styles/index.scss";
import { aboutme } from "./components/aboutme/aboutme";
import { CreateWebsite } from "./util/CreateWebsite";
import { gallery } from "./components/gallery/gallery";
import { form } from "./components/form/form";
import { footer } from "./components/footer/footer";
import { handleNavActive } from "./util/handleNavActive";
import { skills } from "./components/skills/skills";
import { Animations } from "./util/animations/imageAnimations";

const myweb = new CreateWebsite(
  [hero(), aboutme(), skills(), gallery(), form()],
  navbar(),
  footer()
);
myweb.run();

// global
handleNavActive();

// animations
Animations();
