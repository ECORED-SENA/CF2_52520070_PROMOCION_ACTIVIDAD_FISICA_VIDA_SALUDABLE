<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis presenta los factores de riesgo asociados a ENT (enfermedades no transmisibles). Se agrupan en cuatro categorías: factores ambientales, socioeconómicos y culturales (urbanización, globalización, envejecimiento), factores de riesgo no modificables (edad, herencia), factores de riesgo modificables (dieta poco saludable, inactividad física, consumo de tabaco y alcohol) y factores metabólicos/fisiológicos (niveles elevados de glucemia, presión arterial, colesterol, triglicéridos, sobrepeso y obesidad). Las principales enfermedades relacionadas son enfermedades cardiovasculares, cáncer, enfermedades respiratorias crónicas y diabetes.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
