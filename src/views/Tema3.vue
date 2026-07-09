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

    p Las herramientas de analítica web ayudan a gestionar datos cualitativos y cuantitativos de la interacción de visitantes de la web o redes sociales, para entender e interpretar los datos, posibilitando optimizar y mejorar resultados. Gracias a estas herramientas se puede organizar dicha información, conocer métricas más importantes, validar estrategias y resultados, en base a los análisis se puede comprender mejor a los clientes, definir acciones y estrategias para mejorar el sitio y validar la experiencia de usuario y aumentar las conversiones.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3
        figure
          img(src="@/assets/curso/tema3/5.png", data-aos="zoom-in")
      .col-lg-8
        p Antes de recolectar o analizar datos de visitantes, usuarios o clientes, es necesario verificar la autorización o base legal para el tratamiento de los datos personales, la finalidad informada al titular, la existencia de una política de privacidad, los tiempos de conservación de la información y las medidas de seguridad aplicables, de conformidad con la Ley 1581 de 2012 y el Decreto 1074 de 2015. 
        .bg-color-25.tarjeta.p-4
          p Según la Escuela de Negocios y Dirección (2026), existen múltiples herramientas de analítica digital para medir variables clave de tráfico, comportamiento y conversiones tanto en entornos web como en redes sociales. Para más información, lo invitamos a revisar su página web en el siguiente enlace:
          a.boton.color-secundario.texto-blanco(href="https://www.escueladenegociosydireccion.com/blog/marketing/herramientas-analitica-web-marketing-digital/ " target="_blank")
            span Analítica digital
            i.fas.fa-link
            

    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        img(src="@/assets/curso/tema3/6.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10(data-aos="fade-up")
            p.banner-text Actualmente las redes sociales han ganado importancia para las empresas y usuarios, hay una tendencia creciente de las empresas de moda a desarrollar negocio #[em online], lo que posiciona la analítica en redes sociales como estrategias necesarias para medir el grado de interacción de los usuarios. A continuación, revisa el siguiente recurso de aprendizaje para que usted pueda clasificar y valorar cuáles le serán útiles en su campo de acción. Adelante.

    .bg-fondo-slider.tarjeta.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-3.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/8.png', alt='Imagen de acompañamiento')
            .col-lg-9.mb-4.mb-md-0
              h4 Social Mention y otras herramientas de escucha social
              p Social Mention fue una herramienta utilizada para medir comentarios generados en redes sociales, número de usuarios y datos relacionados con contenidos publicados. Entre sus características se destacaba la posibilidad de monitorear información en tiempo real proveniente de múltiples sitios web; sin embargo, presentaba limitaciones para el almacenamiento y análisis histórico de la información. 
 
              p.mb-0 Actualmente, las organizaciones cuentan con diversas herramientas de escucha social y analítica digital que permiten monitorear conversaciones, medir el rendimiento de contenidos, analizar audiencias y generar reportes para la toma de decisiones. Entre las más utilizadas se encuentran Metricool, Meta Business Suite, Google Analytics 4, Brandwatch, Talkwalker, Meltwater y Brand24. La selección de la herramienta dependerá de las necesidades de la organización, el presupuesto disponible, el alcance del análisis y las políticas aplicables al tratamiento de datos. 
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-3.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/9.png', alt='Imagen de acompañamiento')
            .col-lg-9.mb-4.mb-md-0
              h4 Metricool 
              p Permite monitorear redes sociales como Facebook, Instagram, X (antes Twitter) y LinkedIn mediante gráficos evolutivos y paneles de análisis. A través de esta herramienta es posible consultar métricas relacionadas con el rendimiento de las publicaciones, el alcance, las interacciones, el crecimiento de la comunidad, los nuevos seguidores y la evolución de la audiencia en diferentes periodos de tiempo. 

              p.mb-0 Las métricas y funcionalidades disponibles pueden variar según las actualizaciones de la plataforma, las condiciones de acceso a las interfaces de programación (API) de las redes sociales y el plan contratado por el usuario. 
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-3.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/10.png', alt='Imagen de acompañamiento')
            .col-lg-9.mb-4.mb-md-0
              h4 Looker Studio
              p Looker Studio es una herramienta de visualización y análisis de datos que permite integrar información proveniente de diferentes fuentes, como Google Analytics 4, Google Ads, hojas de cálculo y otras plataformas digitales. Facilita la creación de paneles interactivos, gráficos y reportes personalizados para monitorear indicadores de desempeño, evaluar resultados y apoyar la toma de decisiones. 

              p.mb-0 Entre sus principales ventajas se encuentran la posibilidad de consolidar información de múltiples fuentes, compartir reportes en tiempo real y presentar los resultados de manera visual y comprensible para diferentes públicos dentro de la organización. 
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-3.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/11.png', alt='Imagen de acompañamiento')
            .col-lg-9.mb-4.mb-md-0
              h4 Audiense 
              p Esta herramienta continua orientada al análisis de audiencias y al conocimiento de comunidades digitales, especialmente en X (antes Twitter). Permite obtener información sobre los seguidores, identificar patrones de comportamiento, analizar intereses, segmentar audiencias y monitorear conversaciones o <em>hashtags</em> relevantes para una marca. 
              p.mb-0 Algunas de sus funcionalidades dependen de la integración con la API de X y de las características disponibles en los diferentes planes de servicio, por lo que las métricas y opciones de análisis pueden variar con el tiempo. 
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-3.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/12.png', alt='Imagen de acompañamiento')
            .col-lg-9.mb-4.mb-md-0
              h4 X Analytics (antes Twitter Analytics) 
              p.mb-0 Es la herramienta de analítica de X (antes Twitter), que permite consultar métricas relacionadas con el rendimiento de las publicaciones, las interacciones, el crecimiento de la audiencia, las visitas al perfil y otros indicadores de actividad. Las funcionalidades y métricas disponibles pueden variar según el tipo de cuenta, las políticas de la plataforma y el plan de acceso contratado. 

          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-3.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/13.png', alt='Imagen de acompañamiento')
            .col-lg-9.mb-4.mb-md-0
              h4 Twitonomy  
              p.mb-0 Es una herramienta de análisis para cuentas de X (antes Twitter) que permite examinar información relacionada con publicaciones, interacciones, seguidores, menciones y <em>hashtags</em>. Su funcionamiento y disponibilidad dependen de las condiciones de acceso a la API de X, por lo que algunas funcionalidades pueden variar o estar sujetas a restricciones según el plan de servicio disponible. 

          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-3.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/14.png', alt='Imagen de acompañamiento')
            .col-lg-9.mb-4.mb-md-0
              h4 Brand24
              p.mb-0 Brand24 es una herramienta de monitoreo y escucha social que permite analizar menciones de marcas, productos o temas en diferentes plataformas digitales. Facilita el seguimiento de conversaciones, la identificación de tendencias y el análisis de la reputación digital, aportando información útil para la toma de decisiones y el diseño de estrategias de marketing y comunicación. 
 
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-3.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/15.png', alt='Imagen de acompañamiento')
            .col-lg-9.mb-4.mb-md-0
              h4 Iconosquare 
              p.mb-0 Aplicación que gestiona la promoción y seguimiento de las cuentas en Instagram, ofrece métricas de imágenes con seguimiento a las interacciones, comentarios visor de <em>feed</em>, <em>hashtags</em> más usados, horas, impacto alcance y sugerencias. 

          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-3.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/16.png', alt='Imagen de acompañamiento')
            .col-lg-9.mb-4.mb-md-0
              h4 Meta Business Suite Insights 
              p Es una herramienta del ecosistema Meta que permite analizar información sobre las audiencias y el rendimiento de contenidos en Facebook e Instagram. A través de ella es posible consultar datos demográficos, como edad, ubicación geográfica e intereses generales de los usuarios, así como métricas relacionadas con el alcance, la interacción y el comportamiento de las audiencias. Esta información contribuye a diseñar contenidos y estrategias de comunicación más acordes con las características del público objetivo. 

              p.mb-0 La utilización de datos demográficos o comportamentales debe realizarse respetando los principios de finalidad, libertad, transparencia, seguridad y confidencialidad, de conformidad con la Ley 1581 de 2012 y el Decreto 1074 de 2015. Asimismo, las organizaciones deben atender las políticas y términos de uso establecidos por Meta y evitar el tratamiento de datos sensibles sin la autorización expresa del titular. 
    
    

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
