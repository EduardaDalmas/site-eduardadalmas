<template>
  <q-page>
    <div id="sobre" class="sobre">
      <TitleText>Sobre mim</TitleText>
      <div class="gt-sm row">
        <div class="col-7">
          <text-description>
            Olá, eu sou a Eduarda Dalmás, tenho 21 e sou Desenvolvedora Web há 3
            anos. Um certo dia precisei bloquear o celular de meu pai quehavia
            sido roubado para proteger suas informações, e me encantei pelo
            mundo da tecnologia ao ver seu potencial benéfico, fiquei curiosa
            para descobrir as infinitas possibilidades dessa área e após isso me
            inscrevi no curso técnico de informática na IENH. No curso, ganhei
            uma bolsa para estudar na GrowDev, um boorcamp de desenvolvimento
            Web, onde exercitei os aprendizados e me apaixonei por programação,
            e entrei pra área como desenvolvedora web com foco em front-end em
            uma empresa de saúde. Ao concluir os cursos, entrei pra faculdade de
            Análise e Desenvolvimento de Sistemas, e me aventurei em cursos de
            UX/UI Design para aprimorar as telas que desenvolvo. Ministrei o
            curso de extensão UX/UI Design na prática e vi que amo ensinar.
            Hoje, sei mais do que nunca, o quanto a tecnologia pode melhorar a
            vida das pessoas. Ficarei honrada em receber seu contato, fico á
            disposição através de minhas redes sociais e e-mail ;)
          </text-description>
          <div class="social row">
            <ButtonSocialMedia :medias="medias"></ButtonSocialMedia>
          </div>
        </div>
        <div class="col-5">
          <img class="about" src="../assets/sobre.jpg" />
          <div class="textName">Eduarda Brisch Dalmás</div>
          <div class="textSubtitle">Analista de Programação na DoctorClin</div>
        </div>
      </div>
      <div class="lt-md">
        <div class="row">
          <text-description>
            Olá, eu sou a Eduarda Dalmás, tenho 21 e sou Desenvolvedora Web há 3
            anos. Um certo dia precisei bloquear o celular de meu pai quehavia
            sido roubado para proteger suas informações, e me encantei pelo
            mundo da tecnologia ao ver seu potencial benéfico, fiquei curiosa
            para descobrir as infinitas possibilidades dessa área e após isso me
            inscrevi no curso técnico de informática na IENH. No curso, ganhei
            uma bolsa para estudar na GrowDev, um boorcamp de desenvolvimento
            Web, onde exercitei os aprendizados e me apaixonei por programação,
            e entrei pra área como desenvolvedora web com foco em front-end em
            uma empresa de saúde. Ao concluir os cursos, entrei pra faculdade de
            Análise e Desenvolvimento de Sistemas, e me aventurei em cursos de
            UX/UI Design para aprimorar as telas que desenvolvo. Ministrei o
            curso de extensão UX/UI Design na prática e vi que amo ensinar.
            Hoje, sei mais do que nunca, o quanto a tecnologia pode melhorar a
            vida das pessoas. Ficarei honrada em receber seu contato, fico á
            disposição através de minhas redes sociais e e-mail ;)
          </text-description>
        </div>
        <br />
        <div class="row centralizer">
          <img class="about" src="../assets/sobre.jpg" />
        </div>
        <div class="col centralizer">
          <div class="textName">Eduarda Brisch Dalmás</div>
          <div class="textSubtitle">Analista de Programação na DoctorClin</div>
        </div>
        <div class="centralizer">
          <div class="social row">
            <ButtonSocialMedia :medias="medias"></ButtonSocialMedia>
          </div>
        </div>
      </div>
    </div>

    <divider-page id="experiencias"></divider-page>

    <div class="experiencias">
      <title-text>Experiências Profissionais</title-text>
      <q-tree :nodes="simple" accordion node-key="label" class="q-ml-xl">
        <template v-slot:default-header="prop">
          <div class="textInfo">
            {{ prop.node.label }}
          </div>
        </template>

        <template v-slot:body-story="prop">
          <div class="textInfo2">{{ prop.node.story }}</div>
        </template>
      </q-tree>
      <button-default>Acessar currículo</button-default>
    </div>

    <divider-page id="formacoes"></divider-page>

    <div class="formacoes">
      <title-text>Formações</title-text>
      <div class="row q-ml-lg">
        <card-default :options="formacoes"></card-default>
      </div>
    </div>

    <divider-page id="conhecimentos"></divider-page>

    <div class="conhecimentos">
      <title-text>Conhecimentos</title-text>
      <div class="row q-ml-xl">
        <IconTech :tech="techs"></IconTech>
      </div>
    </div>

    <divider-page></divider-page>

    <footer-page :medias="medias"></footer-page>
  </q-page>
</template>

<script>
import TextDescription from "src/components/TextDescription.vue";
import TitleText from "src/components/TitleText.vue";
import CardDefault from "src/components/CardDefault.vue";
import FooterPage from "src/components/FooterPage.vue";
import DividerPage from "src/components/DividerPage.vue";
import ButtonSocialMedia from "src/components/ButtonSocialMedia.vue";
import IconTech from "src/components/IconTech.vue";
import ButtonDefault from "src/components/ButtonDefault.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    TitleText,
    TextDescription,
    CardDefault,
    FooterPage,
    DividerPage,
    ButtonSocialMedia,
    IconTech,
    ButtonDefault,
  },
  name: "IndexPage",

  setup() {
    let formacoes = [];
    let medias = [];
    let techs = [];

    formacoes = [
      {
        text: "Análise de Sistemas",
        description:
          "Cursando 5° semestre da Faculdade de Análise e Desenvolvimento de Sistemas na Instituição Evangélica de Novo Hamburgo - IENH",
      },
      {
        text: "Full Stack Developer",
        description:
          "Bootcamp de Desenvolvedor Full Stack Dveloper na GrowDev no período de 1 ano",
      },
      {
        text: "UX/UI Design",
        description:
          "Curso de UX/UI Design na Escola Britânica de Artes Criativas e Tecnologia - EBAC no período de 12 meses",
      },
      {
        text: "Inglês",
        description:
          "Curso de Inglês - Wizard Novo Hamburgo no período de 3 anos.",
      },
      {
        text: "Métodos ágeis",
        description:
          "Curso de Devops e Agile Culture - FIAP no período de 60 horas",
      },
      {
        text: "HTML/CSS/JS",
        description: "Curso de HTML5 no Curso em Video com período de 40 horas",
      },
      {
        text: "Algoritmos",
        description:
          "Curso de Algoritmo - Curso em Video no período de 40 horas",
      },
      {
        text: "Devops",
        description:
          "Curso de Devops e Agile Culture - FIAP no período de 60 horas",
      },
      {
        text: "Mobile Marketing",
        description: "Curso de Mobile Marketing - FIAP no período de 60 horas",
      },
      {
        text: "Design Thinking",
        description: "Curso de Design Thinking - FIAP no período de 40 horas",
      },
      {
        text: "User Experience",
        description: "Curso de User Experience - FIAP no período de 60 horas",
      },
      {
        text: "Blockchain e Cripto-Economia",
        description:
          "Curso de Blockchain e Cripto-Economia - IENH no período de12 horas",
      },
      {
        text: "Informática",
        description: "Curso Técnico em Informática - IENH no período de 2 anos",
      },
      {
        text: "Soluções Tecnológicas",
        description:
          "Curso de Soluções Tecnológicas Emergentes - FIAP no período de 40 horas",
      },
    ];

    medias = [
      {
        icon: "lab la-linkedin-in",
        link: "https://www.linkedin.com/in/eduarda-dalm%C3%A1s-8216bb197/",
      },
      {
        icon: "lab la-github",
        link: " https://github.com/EduardaDalmas",
      },
      {
        icon: "lab la-instagram",
        link: "https://www.instagram.com/eduardadalmas/",
      },
      {
        icon: "lab la-facebook-f",
        link: "https://www.facebook.com/eduarda.dalmas",
      },
      {
        icon: "mail_outline",
        link: "du.dalmas@hotmail.com",
      },
    ];

    techs = [
      {
        name: "Angular",
        icon: "lab la-angular",
      },
      {
        name: "Vue.js",
        icon: "lab la-vuejs",
      },
      {
        name: "Bitbucket",
        icon: "fa-brands fa-bitbucket",
      },
      {
        name: "Node.js",
        icon: "fa-brands fa-node-js",
      },
      {
        name: "JavaScript",
        icon: "fa-brands fa-js",
      },
      {
        name: "GitHub",
        icon: "fa-brands fa-github",
      },
      {
        name: "Git",
        icon: "fa-brands fa-git",
      },
      {
        name: "HTML/CSS",
        icon: "fa-brands fa-html5",
      },
      {
        name: "Unity básico",
        icon: "fa-brands fa-unity",
      },
      {
        name: "Mocha/Chai",
        icon: "fa-brands fa-vials",
      },
      {
        name: "Google Firebase",
        icon: "fa-brands fa-google",
      },
      {
        name: "Java",
        icon: "fa-brands fa-java",
      },
      {
        name: "Figma",
        icon: "fa-brands fa-figma",
      },
    ];

    return {
      formacoes,
      medias,
      techs,
      expanded: ref([
        "Satisfied customers (with avatar)",
        "Good food (with icon)",
      ]),

      simple: [
        {
          label: "Analista de Programação",
          story: "DoctorClin",
          children: [
            {
              label: "DoctorClin",
              body: "story",
              story: "08/2022 até o momento",
            },
          ],
        },
        {
          label: "Assistente de Programação Jr.",
          children: [
            {
              label: "DoctorClin",
              body: "story",
              story: "04/2021 a 07/2022",
            },
          ],
        },
        {
          label: "Auxiliar de Computação Jr,",
          children: [
            {
              label: "DoctorClin",
              body: "story",
              story: "10/2020 a 03/2021",
            },
          ],
        },
        {
          label: "Estagiária em Desenvolvimento",
          children: [
            {
              label: "IAS - Grupo DoctorClin",
              body: "story",
              story: "04/2020 a 10/2020",
            },
          ],
        },
        {
          label: "Estagiária",
          children: [
            {
              label: "BCS Eventos",
              body: "story",
              story: "12/2019 a 03/2020",
            },
          ],
        },
      ],
    };
  },
});
</script>
