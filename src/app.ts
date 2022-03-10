import "./styles/index.scss";
import { navbar } from "./components/navbar/navbar";
import { hero } from "./components/hero/hero";
import { aboutme } from "./components/aboutme/aboutme";
import { CreateWebsite } from "./util/CreateWebsite";
import { gallery } from "./components/gallery/gallery";
import { form } from "./components/form/form";
import { footer } from "./components/footer/footer";
import { handleNavActive } from "./util/handleNavActive";
import { skills } from "./components/skills/skills";
import { Animations } from "./util/animations/imageAnimations";
import { generateSkillsSection } from "./util/animations/generateSkillsSection";
import { scrollAnimation } from "./util/animations/scrollAnimation";
import { parallax1 } from "./components/parallax/parallax-section-1";
import { Parallax } from "./util/animations/parallax";

const myweb = new CreateWebsite(
  [hero(), aboutme(), skills(), parallax1(), gallery(), form()],
  navbar(),
  footer()
);
myweb.run();

// global
handleNavActive();

// animations
Animations("image-section");
generateSkillsSection();
scrollAnimation();

// animations - parallax
const p1 = new Parallax("#parallax-1", 0.4);
p1.run();
