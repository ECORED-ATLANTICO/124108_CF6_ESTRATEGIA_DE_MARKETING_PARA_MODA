<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-sm-8.col-lg-4
        figure
          img(src="@/assets/curso/1-sintesis.png", alt="")
      .col-lg-8
        p El componente formativo Protocolos de atención ofrece al aprendiz conocimientos relacionados con los protocolos de atención y respuesta para redes sociales, abordando la importancia de establecer lineamientos claros para la interacción con los clientes en entornos digitales. El material presenta conceptos asociados a los protocolos de servicio al cliente, sus ventajas organizacionales y las dimensiones que permiten evaluar la calidad de la atención, como fiabilidad, seguridad, capacidad de respuesta, empatía e intangibilidad dentro de los procesos de servicio empresarial. 
        .p-4.bg-color-20.rounded-4
          p.mb-0 El componente también desarrolla contenidos relacionados con el manejo de crisis en redes sociales, la utilización de herramientas de analítica digital y la elaboración de informes de resultados para la toma de decisiones. Asimismo, se abordan elementos para la elaboración de descripciones de productos en comercio electrónico y la interpretación de gráficos utilizados en analítica digital, incluyendo tipos de analíticas, métricas de #[em marketing] y representaciones gráficas que permiten analizar datos de campañas y comportamiento de usuarios. 
    .row.justify-content-center
      .col-12
        figure
          img.mb-4(src="@/assets/curso/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
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
