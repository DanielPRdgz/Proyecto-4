import { header } from './src/component/Header/header'
import { hero } from './src/component/Hero/hero'
import { techStack } from './src/component/MyTechStack/myTechStack'
import { projects } from './src/component/Myprojects/myProjects'
import { about } from './src/component/about/about'
import { anyquestion } from './src/component/contactme/anyquestion'
import { footer } from './src/component/footer/footer'

import './style.css'
const divApp = document.querySelector('#app')
divApp.innerHTML = `<header id="header"></header>
<main id="main">
<section id="hero"></section>
<section id="my-techStack"></section>
<section id="Projects"></section>
<section id="about"></section>
<section id="anyquestion"></section>
</main>
<footer id="footer"></footer>`
header()
hero()
techStack()
projects()
about()
anyquestion()
footer()

//TODO LINKS PREVIEW Y  GITHUB EN TARJETAS.
//TODO COLOR ENLACES IMGS LINKEDIN GIT HUB
//TODO HACER FUNCIONAR EL FOOTER
//TODO AÑADIR ALT A LAS IMAGENES DE TECH STACK
//TODO FUNCIONALIDAD DE EL NAV del footer
