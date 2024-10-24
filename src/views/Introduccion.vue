<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1
      .col-12
        .px-5
          p(data-aos="fade-right") La promoción de la actividad física y los estilos de vida saludables es fundamental para prevenir enfermedades no transmisibles (ENT) como las cardiovasculares, el cáncer, la diabetes y las enfermedades respiratorias crónicas. Estas dolencias representan una de las principales causas de morbilidad y mortalidad a nivel mundial, siendo prevenibles en gran medida a través de cambios en el estilo de vida.
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/intro/img2.png')})`}"
            )
            .bloque-texto-g__texto.p-4.p-md-5
              p.mb-0 El enfoque en la actividad física como factor protector resulta esencial, ya que no solo mejora la salud física, sino que también contribuye al bienestar mental y emocional. La adopción de hábitos saludables y la disminución de factores de riesgo modificables, como el tabaquismo, el alcoholismo y la inactividad física, pueden reducir significativamente la incidencia de estas enfermedades.
          .row.align-items-center
            .col-lg-10.mb-4.mb-lg-0(data-aos="fade-right")
              p.mb-0 Es necesario que los profesionales de la salud estén capacitados y actualizados para promover estos estilos de vida saludables en la población. Al aplicar estrategias basadas en estándares internacionales, se facilita la implementación de programas efectivos que ayuden a las personas a mejorar su calidad de vida y prevenir el desarrollo de enfermedades crónicas.
            .col-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/intro/img1.svg', alt='', style="width: 150px;").m-auto
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
