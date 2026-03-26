<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Manejo de crisis en atención al cliente en redes sociales

    .bloque-texto-g.color-secundario.bg-color-1.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Hoy la reputación de las empresas está expuesta a riesgos, las múltiples posibilidades de la web y el modelo de comunicación participativa e interactiva no detiene fácilmente la conversación digital, y este contexto tiene efectos para las empresas directamente relacionados con la reputación corporativa, por eso aparece en el mundo empresarial una nueva disciplina, la gestión de comunicación en crisis, que puede tener doble efecto: buscar frenar la situación que la originó y por otra parte minimizar la pérdida de crédito y capital en la imagen de la empresa, el producto o servicio.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.mb-3.mb-lg-0
        .bloque-texto-b.color-secundario.p-4(data-aos="fade-up").mb-3
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h5.mb-0 La capacidad de una organización de reducir o prever los factores de riesgo e incertidumbre respecto al futuro, de forma que se capacite a la misma para asumir de manera rápida y eficaz las operaciones de comunicación necesarias que contribuyan a reducir o eliminar los efectos negativos que una crisis puede provocar sobre su imagen y reputación. (p.46)
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .p.mb-0 González Herrero, 1998, citado por Pérez y García, (2010).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
      .col-lg-8
        p Teniendo en cuenta que el mínimo suceso derivado de una crisis pone en riesgo, dos elementos claves para cualquier empresa como lo son la imagen y la reputación, las empresas han implementado un plan de gestión de comunicación en crisis.
        .row.align-items-center.bg-color-sintesis.p-4
          .col-lg-auto.mb-3.mb-lg-0
            img.d-lg-flex.d-none(src="@/assets/curso/tema2/3.svg").mx-auto
          .col-lg
            p.mb-0 Las crisis son distintas, pues sus fuentes de gestación dependen de las diversidades y los riesgos a las que están sometidas las empresas. La gestión de estas situaciones y su preparación definen a una compañía y puede permitir entender las condiciones y la preparación necesaria para estar en posición de reaccionar, tomar el control y disminuir los riesgos.
    
    img(src="@/assets/curso/tema2/4.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text Teniendo en cuenta que las crisis surgen de diversos tipos de problemáticas derivadas de la actividad de la empresa, existen múltiples miradas sobre las etapas de las crisis, pues cada organización define las etapas, pero a nivel general se plantean tres. A continuación, revisaremos dos posturas en relación con esto:

    .row.justify-content-center.mb-5
      .col-lg-5.mb-3.mb-lg-0
        h4.bg-color-28.text-white.p-4.d-inline-block.mb-5 Enrique (2017) define estas etapas:
        div.position-relative
          h5.bg-color-30.text-white.py-2.px-3.d-inline.position-absolute.pst-pestana Pre crisis
          .bg-color-22.mb-5.p-4.tarjeta.h-100.d-flex
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                img.d-none.d-lg-flex(src="@/assets/curso/tema2/5.png").mx-auto
              .col-lg
                p.mb-0 Aquellas acciones que contribuyen a reducir la probabilidad de una crisis y mitigar el daño en caso de que ocurra.
        div.position-relative
          h5.bg-color-30.text-white.py-2.px-3.d-inline.position-absolute.pst-pestana Crisis
          .bg-color-22.mb-5.p-4.tarjeta.h-100.d-flex
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                img.d-none.d-lg-flex(src="@/assets/curso/tema2/7.png").mx-auto
              .col-lg
                p.mb-0 Aplicar prácticas y estrategias definidas para crisis.
        div.position-relative
          h5.bg-color-30.text-white.py-2.px-3.d-inline.position-absolute.pst-pestana Post crisis
          .bg-color-22.mb-5.p-4.tarjeta
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                img.d-none.d-lg-flex(src="@/assets/curso/tema2/9.png").mx-auto
              .col-lg
                p.mb-0 Aporta procedimientos para continuar con la comunicación a partir de leccioness aprendidas para reducir la probabilidad de la situación.
    
 
      .col-lg-5
        h4.bg-color-29.text-white.p-4.d-inline-block.mb-5 Las etapas según Castillo y Ponce (2015), son:
        div.position-relative
          h5.bg-color-31.text-white.py-2.px-3.d-inline.position-absolute.pst-pestana Fase preliminar
          .bg-color-9.mb-5.p-4.tarjeta.h-100.d-flex
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                img.d-none.d-lg-flex(src="@/assets/curso/tema2/6.png").mx-auto
              .col-lg
                p.mb-0 Aparecen signos que anticipan que va a surgir una situación de crisis.
        div.position-relative
          h5.bg-color-31.text-white.py-2.px-3.d-inline.position-absolute.pst-pestana Fase aguda
          .bg-color-9.mb-5.p-4.tarjeta.h-100.d-flex
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                img.d-none.d-lg-flex(src="@/assets/curso/tema2/8.png").mx-auto
              .col-lg
                p.mb-0 Momento en el que se produce la crisis y existe una implicación mediática.
        div.position-relative
          h5.bg-color-31.text-white.py-2.px-3.d-inline.position-absolute.pst-pestana Fase post traumática
          .bg-color-9.mb-5.p-4.tarjeta.h-100.d-flex
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                img.d-none.d-lg-flex(src="@/assets/curso/tema2/10.png").mx-auto
              .col-lg
                p.mb-0 Se produce un balance de cómo se han producido los hechos y las decisiones que han debido tomarse para solucionar la crisis. (Pág.23).

    .bg-color-5.mb-5.p-4.tarjeta
      .row.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          img.d-none.d-lg-flex(src="@/assets/curso/tema2/11.png").mx-auto
        .col-lg
          p.mb-0 Teniendo en cuenta las anteriores definiciones, se puede enfatizar que la comunicación de crisis debe atenderse antes, durante y después de las situaciones. Se sugiere alistarse con anterioridad a través del protocolo de gestión de comunicación en crisis para preparar a los colaboradores y proveedores ante una emergencia; en consecuencia, es necesario implementar unos en el plan de gestión de comunicación de crisis. ¿Cuáles creería usted que son?, para más información observa el siguiente recurso de aprendizaje:

    .row.mb-5.align-items-center.justify-content-center
      .col-md-8.col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/12.png", data-aos="zoom-in")
      .col-lg-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-7")
          div(titulo="Precaución")
            p.ms-5 Generar acciones que tengan claridad y coherencia para evitar riesgos o al menos minimizar.
          div(titulo="Prevención")
            p.ms-5 Evidenciar con anterioridad posibles riesgos y acciones de reacción ante ellos.
          div(titulo="Previsión")
            p.ms-5 Si bien es difícil que una organización pueda prepararse para afrontar los riesgos, lo que se debe hacer es un mapa que visualiza riesgos y crisis y sus posibles evoluciones.
          div(titulo="Anticipación en la planificación")
            p.ms-5 Es pertinente diseñar el plan de prevención y las acciones de seguimiento y control de posibles riesgos.
          div(titulo="Reacción planificada")
            p.ms-5 Esta reacción es ante la crisis y se debe diseñar un plan de crisis que defina normas de activación, equipos de ejecución y procedimientos, y recomendaciones para la gestión.
          div(titulo="Apoyo a la gestión y decisión")
            p.ms-5 Está directamente relacionada con las comunicaciones internas y externas que permita dar claridad sobre el acontecimiento, difusión a los medios de comunicación y mensaje a los clientes internos y externos.
          div(titulo="Respeto a la legislación y contratos")
            p.ms-5 Enmarcarse en los protocolos legislativos y contractuales vigentes relacionados con la crisis.
    
    

</template>

<script>
export default {
  name: 'Tema2',
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
