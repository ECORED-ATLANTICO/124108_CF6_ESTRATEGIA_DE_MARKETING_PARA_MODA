<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Herramientas para analítica e informes de resultados
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
          .col-lg-8
            p La analítica web debe ser un proceso articulado a los demás procesos empresariales, pues la información obtenida debe incorporarse en los procesos corporativos, por analítica digital, definido por Morales (2010):
            .row.align-items-center.bg-color-9.p-4
              .col-lg-auto.mb-3.mb-lg-0
                img.d-lg-flex.d-none(src="@/assets/curso/tema3/2.svg").mx-auto
              .col-lg
                p.mb-0 El conjunto de procesos que permiten gestionar el conocimiento que se obtiene a través de las herramientas de medición de los sitios web, obtener conclusiones y actuar en base a estas conclusiones, con el fin de alinear la estrategia de medición #[em online] con la estrategia de negocio. (p.17).
        
        p.mb-5 A su vez, Tomas, D. (2018) plantea que la analítica.


        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10.mb-3.mb-lg-0
            .bloque-texto-b.color-secundario.p-4(data-aos="fade-up").mb-3
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                h5.mb-0 Consiste en recopilar la información que generan los usuarios al visitar un sitio web e interactuar con él de diversas maneras. Posteriormente, analizamos todos estos datos para obtener #[em insights] que nos ayuden a mejorar e identificar a un público potencial. (párr.1).
                i.fas.fa-quote-right
          
        .bloque-texto-g.color-secundario.bg-color-1.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/3.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Ambas definiciones están relacionadas con estrategias de medición y métricas, que son usadas en las diferentes organizaciones para lograr su proceso misional como son:

        .row.mb-5.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0.order-2
            figure
              img(src="@/assets/curso/tema3/4.png", data-aos="zoom-in")
          .col-lg-8.order-1.mb-3.mb-lg-0
            ul.lista-ul--color.ms-3
              li.mb-3.d-flex
                i.fas.fa-chevron-circle-right.bg-color-18
                | Informes sobre cifras de tráfico y datos de los trayectos que realizan los usuarios en el mundo digital, ya sea en una página web, una aplicación o una red social.
              li.mb-3.d-flex
                i.fas.fa-chevron-circle-right.bg-color-18
                | Entender el comportamiento de clientes/usuarios.
              li.mb-3.d-flex
                i.fas.fa-chevron-circle-right.bg-color-18
                | Evaluar el rendimiento de las páginas web.
              li.mb-3.d-flex
                i.fas.fa-chevron-circle-right.bg-color-18
                | Tener claridad de la audiencia de los diferentes activos digitales de una compañía.
              li.mb-3.d-flex
                i.fas.fa-chevron-circle-right.bg-color-18
                | Reconocer los hábitos de consumo de nuestros visitantes.
              li.mb-3.d-flex
                i.fas.fa-chevron-circle-right.bg-color-18
                | Evaluar la notoriedad de una marca.
              li.mb-3.d-flex
                i.fas.fa-chevron-circle-right.bg-color-18
                span Controlar el SEO (#[em Search Engine Optimization]) para que el sitio empresarial se posicione de manera eficiente en los motores de búsqueda.

    .bg-color-21.p-4.tarjeta.mb-5
      p.mb-0 A través del proceso de analítica digital y de las herramientas de medición que ofrece hoy la web, se abren una serie de puertas para potenciar y mejorar si es necesario la concepción, diseño, lanzamiento de cualquier negocio #[em online]. Las empresas tienen sus particularidades por su naturaleza, lo que hace que cada una defina, según sus necesidades las KPIS (#[em Key Performance Indicator]) de analítica digital que se adecue con mayor claridad a su estrategia.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Herramientas para medir la analítica de sitios web

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3
        figure
          img(src="@/assets/curso/tema3/5.png", data-aos="zoom-in")
      .col-lg-8
        p Las herramientas de analítica web ayudan a gestionar datos cualitativos y cuantitativos de la interacción de visitantes de la web o redes sociales, para entender e interpretar los datos, posibilitando optimizar y mejorar resultados. Gracias a estas herramientas se puede organizar dicha información, conocer métricas más importantes, validar estrategias y resultados, en base a los análisis se puede comprender mejor a los clientes, definir acciones y estrategias para mejorar el sitio y validar la experiencia de usuario y aumentar las conversiones.
        .bg-color-25.tarjeta.px-5.py-4
          p Según el Observatorio Digital (2020) “Existen múltiples herramientas de analítica digital para web y para redes”, para más información lo invitamos a revisar su página web en el siguiente link:
          a.boton.color-secundario.texto-blanco(href="https://observatorio.digital/blog/analitica-digital-2/#anal" target="_blank")
            span Analítica digital
            i.fas.fa-link
            

    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        img(src="@/assets/curso/tema3/6.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10(data-aos="fade-up")
            p.banner-text Actualmente las redes sociales han ganado importancia para las empresas y usuarios, hay una tendencia creciente de las empresas de moda a desarrollar negocio #[em online], lo que posiciona la analítica en redes sociales como estrategias necesarias para medir el grado de interacción de los usuarios. A continuación, revisa el siguiente recurso de aprendizaje para que usted pueda clasificar y valorar cuáles le serán útiles en su campo de acción. Adelante.
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/7.png", data-aos="zoom-in")
      .col-lg-8
        SlyderF.mb-5(columnas="col-lg-6 col-xl-6")
          .tarjeta.bg-color-white.box-shadow.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/tema3/8.png' alt='')
            h4.text-center.bg-color-9.p-2 Social mention
            p.text-center Permite medir comentarios generados en redes, número de usuarios y datos de contenidos. Tiene capacidad para medir en tiempo real hasta 80 sitios diferentes, pero no permite almacenar información para analizarla en periodos largos de tiempo.
          .tarjeta.bg-color-white.box-shadow.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/tema3/9.png' alt='')
            h4.text-center.bg-color-9.p-2 Metricool
            p.text-center Permite monitorear algunas redes como Facebook, Instagram, Twitter y Linkedin mediante gráficos evolutivos de un mes, se puede validar número de #[em tweets] por día, repercusiones, me gustas, publicaciones que funcionan, nuevos seguidores, y seguidores que se retiran.
          .tarjeta.bg-color-white.box-shadow.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/tema3/10.png' alt='')
            h4.text-center.bg-color-9.p-2 SumAll
            p.text-center Esta herramienta puede medir el impacto de la actividad en redes, fijar objetivos y monitorearlos. Posibilita compara la información de 29 sitios, a través de gráficos que dan cuenta de tamaño de la red, actividad, horarios de actividad y permite exportar y explorar los datos externamente.
          .tarjeta.bg-color-white.box-shadow.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/tema3/11.png' alt='')
            h4.text-center.bg-color-9.p-2 Audiense
            p.text-center Es una herramienta fácil que permite conocer nuevos seguidores, horas de mayor actividad y programar envíos directos, respuestas a #[em tweets] y monitorear #[em hashtags].

          .tarjeta.bg-color-white.box-shadow.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/tema3/12.png' alt='')
            h4.text-center.bg-color-9.p-2 Twitter Analytics
            p.text-center Es la herramienta de que Twitter puso a disposición de sus usuarios de manera gratuita que les permite elegir horarios, contenidos y conocer mejor su comunidad, basadas en métricas como número de seguidores y de publicaciones, contenidos destacados, las visitas al perfil, menciones.
          .tarjeta.bg-color-white.box-shadow.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/tema3/13.png' alt='')
            h4.text-center.bg-color-9.p-2 Twitonomy
            p.text-center Herramienta que posibilita realizar un completo análisis de las menciones, los me gustas, seguidores y seguidos y las repercusión y difusión de los tuits que se publican, posibilita exportar los datos a un Excel.
          .tarjeta.bg-color-white.box-shadow.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/tema3/14.png' alt='')
            h4.text-center.bg-color-9.p-2 TweetStats
            p.text-center Es una de las herramientas de mayor tiempo, permite obtener datos de cuentas ajenas de Twitter a través de un gráfico, con información de usuarios, seguidores, número de publicaciones, horarios, interacciones, esto posibilita conocer la analítica digital de la competencia para diseñar estrategias en redes que favorezca a nuestra empresa.
          .tarjeta.bg-color-white.box-shadow.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/tema3/15.png' alt='')
            h4.text-center.bg-color-9.p-2 Iconosquare
            p.text-center Aplicación que gestiona la promoción y seguimiento de las cuentas en Instagram, ofrece métricas de imágenes con seguimiento a las interacciones, comentarios visor de #[em feed], #[em hashtags] más usados, horas, impacto alcance y sugerencias.
          .tarjeta.bg-color-white.box-shadow.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/tema3/16.png' alt='')
            h4.text-center.bg-color-9.p-2 Audience Insights
            p.text-center Es la herramienta de Facebook para analizar usuarios desde la lectura de datos demográficos sexo, edad, ubicación, cargos formación académica, situaciones sentimentales, interés, estilos de vida, estos variables ayudan a la empresa para crear contenidos que capten la atención de los usuarios.

    .bg-color-5.mb-5.p-4.tarjeta
      .row.align-items-center
        .col-lg-auto.mb-3.mb-lg-0.order-2
          img.d-none.d-lg-flex(src="@/assets/curso/tema3/17.png").mx-auto
        .col-lg.order-1
          p.mb-0 Hasta aquí se han presentado algunas herramientas para obtener datos e información de sus clientes en diferentes sitios y aplicaciones web; pero es importante que usted comprenda que con los avances tecnológicos día a día surgen nuevas herramientas, por eso es importante que usted esté constantemente identificando cuáles son las novedades que hay día a día con respecto a ellas. No se quede quieto, siga aprendiendo.




    
         

</template>

<script>
export default {
  name: 'Tema3',
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
