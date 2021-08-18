<template>
  <div class="about">
    <div class="about__body">
      <h1 class="hello">안녕하세요, 배창현입니다.</h1>
      <p class="introduce">
        2016년부터 현업에 뛰어든 만 4년 차, 웹 개발자 배창현입니다. 주로 웹 서비스 개발을 담당하였습니다. <br/>
        Vue.js, Nuxt.js, React.js, Spring, Java 기술 등을 활용한 프로젝트에 참여한 실무 경험이 있습니다. 기술 역량을 키우고자 학습모임 및 지속적인 학습을 통해 부족한 부분을
        보완하고자 노력했습니다. 또한, 프로젝트를 진행하면서 구성원들과 적극적으로 소통하며 협업해왔습니다.<br/>
        좋은 코드와 설계를 늘 고민하며, 지식을 공유하는 문화를 좋아하는 개발자입니다.<br/>
      </p>
      <p class="project-info">
        해당 프로젝트는 openweathermap(https://openweathermap.org) API 를 활용하여 제작 되었습니다.<br/>
        Vue.js 3 로 작업을 진행하였으며, CSS Preprocessor 는 SCSS 가 적용이 되어있습니다.<br/>
        vuex 및 vue-router 가 적용되어 있습니다. <br/>
        typescript 가 적용되어 있습니다. <br/>
        Vite 를 이용하여, 프로젝트를 생성하였습니다. (Rollup.js 기반)
      </p>
    </div>
  </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';

    const About = defineComponent({
        name: 'About',
    });

    export default About
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/common/variables';

  .about {
    min-height: 100%;
    background-color: $dark-color;
    padding: 24px 10px;

    &__body {
      color: $white-color;
      max-width: 600px;

      .hello {
        font-size: 28px;
      }

      .introduce {
        padding: 10px 0;
      }

      .project-info {
        padding: 10px 0;
      }

    }

  }
</style>
