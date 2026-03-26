<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-8
        p Apreciado aprendiz, bienvenido a este momento de aprendizaje diseñado a partir de un contenido temático, recursos educativos digitales y actividades de aprendizaje que pretenden ayudar en el reconocimiento del plan estratégico de mercadeo de la organización, de acuerdo con los objetivos de la marca. En este sentido, se ha creado un video que presenta el contexto del presente componente de formación y que se encuentra a continuación.

    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        .row.mb-3
          .col-lg-4.mb-3.mb-lg-0
            .tarjeta-avatar-b.align-items-center(data-aos="fade-up")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/intro/2.png' alt='')
              .tarjeta.tarjeta--azul
                .p-3
                  p.mb-0 Protocolos de atención y respuesta para redes sociales.
          .col-lg-4.mb-3.mb-lg-0
            .tarjeta-avatar-b.align-items-center(data-aos="fade-down")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/intro/3.png' alt='')
              .tarjeta.tarjeta--azul
                .p-3
                  p.mb-0 Manejo de crisis en atención al cliente en redes sociales.
          .col-lg-4.mb-3.mb-lg-0
            .tarjeta-avatar-b.align-items-center(data-aos="fade-up")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/intro/4.png' alt='')
              .tarjeta.tarjeta--azul
                .p-3
                  p.mb-0 Herramientas para analítica e informes de resultados.
        
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            .tarjeta-avatar-b.align-items-center(data-aos="fade-up")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/intro/5.png' alt='')
              .tarjeta.tarjeta--azul
                .p-3
                  p.mb-0 Elaboración e informe descriptivo del producto.
          .col-lg-4.mb-3.mb-lg-0
            .tarjeta-avatar-b.align-items-center(data-aos="fade-down")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/intro/6.png' alt='')
              .tarjeta.tarjeta--azul
                .p-3
                  p.mb-0 Elaboración e interpretación de gráficos.
          .col-lg-4.mb-3.mb-lg-0
            .tarjeta-avatar-b.align-items-center(data-aos="fade-up")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/intro/7.png' alt='')
              .tarjeta.tarjeta--azul
                .p-3
                  p.mb-0 Elaboración de informes con proyección de mejora.

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-11
            .bg-color-26.p-4
              h5.mb-0 Lo invitamos a revisar el siguiente recurso de aprendizaje para que usted comprenda algunas condiciones iniciales de aprendizaje. Bienvenido.
        
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/intro/8.svg', alt='Texto que describa la imagen')
          .tarjeta.bg-color-23.p-3(x="12%" y="77%" numero="1")
            .row.justify-content-center
              .col-md-auto
                img.d-none.d-lg-block(src='@/assets/curso/intro/9.svg' alt='')
              .col-md
                h5 ¿Cómo iniciar este proceso aprendizaje?
                p.mb-0 La difusión de información a través de la internet ha generado oportunidades de modelos de negocios, esto debido a la analítica que procesa los datos y la información de los clientes para entender necesidades de los clientes, ante esta realidad surge el presente momento de aprendizaje ¿qué esperas para ser un creador de valor para las empresas?
          .tarjeta.bg-color-23.p-3(x="37%" y="77%" numero="2")
            .row.justify-content-center
              .col-md-auto
                img.d-none.d-lg-block(src='@/assets/curso/intro/10.svg' alt='')
              .col-md
                h5 ¿Qué elementos tengo para aprender?
                p.mb-0 Usted tiene a su disposición un conjunto de recursos de aprendizaje para desarrollar conocimientos, habilidades y actitudes. Entre ellos: infografía, videos, textos de los autores del componentes y otros.
          .tarjeta.bg-color-23.p-3(x="63%" y="77%" numero="3")
            .row.justify-content-center
              .col-md-auto
                img.d-none.d-lg-block(src='@/assets/curso/intro/11.svg' alt='')
              .col-md
                h5 ¿Cómo finalizar este componente de formación?
                ul.lista-ul--color.ms-3
                  li.mb-3.d-flex
                    i.fas.fa-circle.fa-xs.mt-2.bg-color-27
                    | Mantener una disciplina de estudio de acuerdo a los tiempos que tienes para este componente de formación.
                  li.mb-3.d-flex
                    i.fas.fa-circle.fa-xs.mt-2.bg-color-27
                    | Participar de los espacios de interacción del programa. Uno de ellos son los foros.
                  li.mb-3.d-flex
                    i.fas.fa-circle.fa-xs.mt-2.bg-color-27
                    | Si tienes dudas con respecto a su proceso no dudes en escribirle un correo a su instructor.
          .tarjeta.bg-color-23.p-3(x="88%" y="77%" numero="4")
            .row.justify-content-center
              .col-md-auto
                img.d-none.d-lg-block(src='@/assets/curso/intro/12.svg' alt='')
              .col-md
                h5 ¿Cúal es el propósito de este momento de aprendizaje?
                p.mb-0 El propósito de este momento está relacionado con medir los resultados obtenidos para el ajuste de la estrategia digital, de acuerdo a la analítica de datos.
    
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 Apreciado aprendiz, agradecemos su atención en la comprensión de información que le será útil para su aprendizaje y el desarrollo de los resultados de aprendizaje esperados.



</template>

<script>
export default {
  name: 'Introduccion',
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
