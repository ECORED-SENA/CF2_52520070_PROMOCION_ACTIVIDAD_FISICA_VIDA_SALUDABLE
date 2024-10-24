<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Factores de riesgo modificables
    .row.bg-c2
      .col-12
        .px-5
          p(data-aos="fade-right") Para comprender los factores de riesgo asociados a las enfermedades no transmisibles, es necesario conocer el concepto de riesgo.
          .row.align-items-center.mb-5
            .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
              .row.mb-3
                .col-12
                  .row
                    .col-md-auto.bg-c3
                      .p-2.h-100
                        .row.h-100.align-items-center
                          .col-12
                            figure
                              img(src='@/assets/curso/tema1/img1.svg', alt='', style="width: 60px;").m-auto
                    .col.bg-c4
                      .p-2
                        p.mb-0 #[b Riesgo:]
                        p.mb-0 La Real Academia Española (2024) lo define como "contingencia o proximidad de un daño".
              .row
                .col-12.bg-c5
                  .p-3
                    p En el contexto de nuestro enfoque, se considera el riesgo como una eventualidad o situación que puede afectar o dañar la salud del individuo. 
                    p.mb-0 Los factores de riesgo modificables incluyen el consumo de tabaco, la inactividad física, las dietas poco saludables y el uso excesivo de alcohol, los cuales aumentan el riesgo de desarrollar enfermedades no transmisibles (ENT).
            .col-lg-3(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img2.svg', alt='', style="width: 250px;").m-auto
          .row.justify-content-center.mb-5(data-aos="fade-down")
            .col-10.col-md-5.col-lg-2.mb-4.mb-lg-0
              .p-4.h-100.bg-c6
                figure.mb-3
                  img(src='@/assets/curso/tema1/img3.svg', alt='', style="width: 80px;").m-auto
                p.text-center.mb-0 Consumo de tabaco
            .col-10.col-md-5.col-lg-2.mb-4.mb-lg-0
              .p-4.h-100.bg-c6
                figure.mb-3
                  img(src='@/assets/curso/tema1/img4.svg', alt='', style="width: 80px;").m-auto
                p.text-center.mb-0 Inactividad física
            .col-10.col-md-5.col-lg-2.mb-4.mb-md-0
              .p-4.h-100.bg-c6
                figure.mb-3
                  img(src='@/assets/curso/tema1/img5.svg', alt='', style="width: 80px;").m-auto
                p.text-center.mb-0 Dietas poco saludables
            .col-10.col-md-5.col-lg-2
              .p-4.h-100.bg-c6
                figure.mb-3
                  img(src='@/assets/curso/tema1/img6.svg', alt='', style="width: 80px;").m-auto
                p.text-center.mb-0 Uso nocivo del alcohol
          .row.mb-4
            .col-auto.bg-c7(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img7.svg', alt='', style='width: 40px')
                .col
                  h3.mb-0 Tabaquismo, alcoholismo, alimentación poco saludable e inactividad física
          p.mb-4(data-aos="fade-right") Las enfermedades no transmisibles, como el tabaquismo y el uso nocivo del alcohol, son una causa principal de mortalidad mundial. A continuación, se presenta cómo estos factores afectan la salud global y la importancia de estrategias preventivas.
          .row.mb-5
            .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
              .row
                .col-12
                  .p-5.bg-c8
                    .row.align-items-center
                      .col-md-auto
                        figure
                          img(src='@/assets/curso/tema1/img9.svg', alt='', style="width: 180px;").m-auto
                      .col
                        p.txt-c1.mb-4 #[b Pódcast]
                        TarjetaAudio.color-primario.mb-3(
                          texto="Tabaquismo, alcoholismo, alimentación poco saludable e inactividad física."
                          :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            .col-lg-5(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img2.png', alt='', style="width: 450px;").m-auto
    p.mb-5(data-aos="fade-right") #[b Los datos actualizados de la OMS:]
    .row.justify-content-center(data-aos="fade-left")
      .col-10.col-md-6.col-lg-3.mb-4.mb-lg-0
        .p-4.h-100.bg-c9
          figure.mb-3
            img(src='@/assets/curso/tema1/img10.svg', alt='', style="width: 150px;").m-auto
          p.text-center.mb-0 Más de la mitad de los 3 millones de muertes anuales por consumo nocivo de alcohol se deben a ENT.
      .col-10.col-md-6.col-lg-3.mb-4.mb-lg-0
        .p-4.h-100.bg-c9
          figure.mb-3
            img(src='@/assets/curso/tema1/img11.svg', alt='', style="width: 150px;").m-auto
          p.text-center.mb-0 El tabaco causa casi 8 millones de muertes al año, y se prevé que esa cifra siga en aumento.
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0
        .p-4.h-100.bg-c9
          figure.mb-3
            img(src='@/assets/curso/tema1/img12.svg', alt='', style="width: 150px;").m-auto
          p.text-center.mb-0 Aproximadamente 3,2 millones de muertes anuales son atribuibles a la insuficiente actividad física.
      .col-10.col-md-6.col-lg-3
        .p-4.h-100.bg-c9
          figure.mb-3
            img(src='@/assets/curso/tema1/img13.svg', alt='', style="width: 150px;").m-auto
          p.text-center.mb-0 En 2020, 1,8 millones de muertes debidas a enfermedades cardiovasculares se atribuyeron al consumo excesivo de sal/sodio.
      
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
