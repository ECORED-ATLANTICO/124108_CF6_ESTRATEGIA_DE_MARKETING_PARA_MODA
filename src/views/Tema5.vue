<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Elaboración e informe descriptivo del producto


    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        .bloque-texto-g.color-secundario.bg-color-1.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema5/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Los gráficos permiten representar datos de forma visual para facilitar su comprensión y análisis. A través de ellos es posible identificar comparaciones, tendencias y relaciones entre la información. A continuación, se presenta un video que explica de manera detallada cómo elaborar e interpretar gráficos correctamente.
    figure.mb-5
      .video.mb-2
        iframe(width="1470" height="827" src="https://www.youtube.com/embed/g7rYJ2fsnbY" title="Elaboración e interpretación de gráficos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)    
      figcaption Video: elaboración e interpretación de gráficos

    p El #[em reporting] (reporte) de redes sociales y analítica digital son estrategias eficaces para mejorar la comunicación adecuada entre las campañas de marketing y la dirección de la empresa. De los datos analíticos depende el #[em social media] para que sus iniciativas sean eficaces y exitosas, redundando así en beneficio para las empresas. Cuando hablamos de visualización de datos nos referimos al proceso de convertir cantidades grandísimas de información en conocimiento; y para esto se utilizan diversos gráficos estadísticos, que serían aquellas herramientas visuales que ayudan a plasmar datos estadísticos complejos de forma ordenada y sencilla para ser interpretados, analizados y entendidos.
    p Un dato estadístico se puede definir como el valor cuantitativo de un objeto de conocimiento en un tiempo y un espacio, y puedes ser de dos tipos: cuantitativos hace referencia a cantidades y valores, y cualitativos son cualidades del producto que no pueden expresarse a partir de números. Entonces un gráfico resultado de una estrategia de analítica digital lo que haces es ordenar los datos estadísticos con diversas estructuras, líneas, barras, burbujas, etc. con el propósito de generar facilidad en el entendimiento sobre la data.

    separador
    
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Características de los gráficos
        
    .row.mb-5.justify-content-center.align-items-center
      .col-sm-8.col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/2.png", data-aos="zoom-in")
      .col-lg-8
        .row.align-items-center
          .col-12
            p Un buen gráfico debe generar las siguientes particularidades:
            ul.lista-ul--color.ms-3
              li.d-flex
                i.fas.fa-chevron-circle-right.bg-color-18
                | Presentar la información de manera agradable, sencilla, clara y precisa.
              li.d-flex
                i.fas.fa-chevron-circle-right.bg-color-18
                | Generar interés y captar la atención del lector.
              li.d-flex
                i.fas.fa-chevron-circle-right.bg-color-18
                | Acompaña e ilustra el tema, mensaje o trama del texto en él se apoya.
              li.d-flex
                i.fas.fa-chevron-circle-right.bg-color-18
                | Facilita la comparación de datos, destacando tendencias y diferencias.
              li.d-flex
                i.fas.fa-chevron-circle-right.bg-color-18
                | No puede inducir al error.
        p.bg-color-22.p-4.rounded-3.mb-0(data-aos="fade-right") Existe un amplio abanico de gráficos diferentes que se pueden implementar en los informes de analíticas digital. Se presentarán los más usados desde su tipo, explicación y cuándo se usan. Le sugerimos percibir los beneficios de estos gráficos para que pueda tomar decisiones en el momento de utilizarlos.

    .bg-fondo-3.tarjeta
      .p-4.p-lg-4
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-3
            .col-lg-3.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema5/3.png', alt='Imagen de acompañamiento')
            .col-lg-9.mb-4.mb-md-0.order-1
              h4 Tablas
              ul.lista-ul--color
                li.d-flex
                  i.fa-solid.fa-greater-than.bg-color-4
                  h5 Explicación
                p.ms-3 Gráfico que sirve para organizar los datos en columnas dando cuenta de las frecuencias que un dato se repite.
                li.d-flex
                  i.fa-solid.fa-greater-than.bg-color-4
                  h5 ¿Cuándo se usa?
                p.ms-3 Este gráfico se implementa para representar variables cuantitativas o cualitativas ordinales.
          .row.justify-content-center.align-items-center.p-3
            .col-lg-3.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema5/4.png', alt='Imagen de acompañamiento')
            .col-lg-9.mb-4.mb-md-0.order-1
              h4 Gráfico de barras
              ul.lista-ul--color
                li.d-flex
                  i.fa-solid.fa-greater-than.bg-color-4
                  h5 Explicación
                p.ms-3 Es el gráfico más utilizado se conforma de un eje x que posiciona conceptos y un eje y que define la escala de valor y se representa mediante barras o rectángulos.
                li.d-flex
                  i.fa-solid.fa-greater-than.bg-color-4
                  h5 ¿Cuándo se usa?
                p.ms-3 Cuando se requiera magnitudes de varias categorías o ver la evolución de una magnitud completa.
          .row.justify-content-center.align-items-center.p-3
            .col-lg-3.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema5/5.png', alt='Imagen de acompañamiento')
            .col-lg-9.mb-4.mb-md-0.order-1
              h4 Gráfica lineal o de líneas
              ul.lista-ul--color
                li.d-flex
                  i.fa-solid.fa-greater-than.bg-color-4
                  h5 Explicación
                p.ms-3 Muestra tendencias en el tiempo y los valores se representan con puntos unidos por líneas.
                li.d-flex
                  i.fa-solid.fa-greater-than.bg-color-4
                  h5 ¿Cuándo se usa?
                p.ms-3 Muy útil para describir las tendencias de una serie de datos de un periodo determinado años, meses, semanas, días, horas, minutos.
          .row.justify-content-center.align-items-center.p-3
            .col-lg-3.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema5/6.png', alt='Imagen de acompañamiento')
            .col-lg-9.mb-4.mb-md-0.order-1
              h4 Gráfico circular o pastel
              ul.lista-ul--color
                li.d-flex
                  i.fa-solid.fa-greater-than.bg-color-4
                  h5 Explicación
                p.ms-3 Gráfico con gran utilización por su facilidad y sencillez, también conocido como Tora por su representación circular que simboliza la totalidad y se expresa en porcentajes.
                li.d-flex
                  i.fa-solid.fa-greater-than.bg-color-4
                  h5 ¿Cuándo se usa?
                p.ms-3 Cuando se analizan pocas variables y se requiera recalcar proporciones de un total.
          .row.justify-content-center.align-items-center.p-3
            .col-lg-3.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema5/7.png', alt='Imagen de acompañamiento')
            .col-lg-9.mb-4.mb-md-0.order-1
              h4 Gráfica poligonal o polígona de frecuencias
              ul.lista-ul--color
                li.d-flex
                  i.fa-solid.fa-greater-than.bg-color-4
                  h5 Explicación
                p.ms-3 Gráfico con gran utilización por su facilidad y sencillez, también conocido como Tora por su representación circular que simboliza la totalidad y se expresa en porcentajes.
                li.d-flex
                  i.fa-solid.fa-greater-than.bg-color-4
                  h5 ¿Cuándo se usa?
                p.ms-3 Cuando se analizan pocas variables y se requiera recalcar proporciones de un total.
          .row.justify-content-center.align-items-center.p-3
            .col-lg-3.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema5/8.png', alt='Imagen de acompañamiento')
            .col-lg-9.mb-4.mb-md-0.order-1
              h4 Gráfico de acciones
              ul.lista-ul--color
                li.d-flex
                  i.fa-solid.fa-greater-than.bg-color-4
                  h5 Explicación
                p.ms-3 Con este gráfico se puede representar datos financieros, a través de eje horizontal que expresa el tiempo y el eje vertical que expresa los valores o porcentajes.
                li.d-flex
                  i.fa-solid.fa-greater-than.bg-color-4
                  h5 ¿Cuándo se usa?
                p.ms-3 Al medir variables cuantitativas que generen y visualizar qué variables tienen valores similares, o si existen valores atípicos entre las variables.
          .row.justify-content-center.align-items-center.p-3
            .col-lg-3.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema5/9.png', alt='Imagen de acompañamiento')
            .col-lg-9.mb-4.mb-md-0.order-1
              h4 Gráfico radial o de telaraña
              ul.lista-ul--color
                li.d-flex
                  i.fa-solid.fa-greater-than.bg-color-4
                  h5 Explicación
                p.ms-3 Es un gráfico estructurado con ejes radiales referenciados al mismo origen, que contienen una escala con valores fijos para todas las variables y genera un polígono regular.
                li.d-flex
                  i.fa-solid.fa-greater-than.bg-color-4
                  h5 ¿Cuándo se usa?
                p.ms-3 Cuando tengamos que analizar o evaluar diferentes opciones en función de múltiples variables.
          .row.justify-content-center.align-items-center.p-3
            .col-lg-3.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema5/10.png', alt='Imagen de acompañamiento')
            .col-lg-9.mb-4.mb-md-0.order-1
              h4 Histograma
              ul.lista-ul--color
                li.d-flex
                  i.fa-solid.fa-greater-than.bg-color-4
                  h5 Explicación
                p.ms-3 Gráfico que se estructura a través de ejes cartesianos que muestra la frecuencia de determinados valores, pero, en vez de establecer la frecuencia de un valor concreto, refleja todo un intervalo.
                li.d-flex
                  i.fa-solid.fa-greater-than.bg-color-4
                  h5 ¿Cuándo se usa?
                p.ms-3 Cuando debamos representar datos cualitativos o datos cuantitativos de tipo discreto.
          .row.justify-content-center.align-items-center.p-3
            .col-lg-3.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema5/11.png', alt='Imagen de acompañamiento')
            .col-lg-9.mb-4.mb-md-0.order-1
              h4 Cartograma
              ul.lista-ul--color
                li.d-flex
                  i.fa-solid.fa-greater-than.bg-color-4
                  h5 Explicación
                p.ms-3 Este tipo de gráfico es implementado para indicar las zonas o áreas geográficas de mayor o menor frecuencia de una variable o valor un determinado. Estas frecuencias o rangos de se indican mediante el uso del color.
                li.d-flex
                  i.fa-solid.fa-greater-than.bg-color-4
                  h5 ¿Cuándo se usa?
                p.ms-3 Cuando tengamos que mostrar una distribución temática sobre como un territorio adquiere un tamaño, proporcional al valor de la variable representada.
          .row.justify-content-center.align-items-center.p-3
            .col-lg-3.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema5/12.png', alt='Imagen de acompañamiento')
            .col-lg-9.mb-4.mb-md-0.order-1
              h4 Gráfico de dispersión
              ul.lista-ul--color
                li.d-flex
                  i.fa-solid.fa-greater-than.bg-color-4
                  h5 Explicación
                p.ms-3 Este gráfico utiliza los puntos para representar los datos, esos puntos representan el valor de cada observación, y muestra como una nube de puntos que valida nivel de dispersión de los datos.
                li.d-flex
                  i.fa-solid.fa-greater-than.bg-color-4
                  h5 ¿Cuándo se usa?
                p.ms-3 Cuando necesitamos representar de una gran cantidad de observaciones y se desea saber si existe una relación entre variables.
          .row.justify-content-center.align-items-center.p-3
            .col-lg-3.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema5/13.png', alt='Imagen de acompañamiento')
            .col-lg-9.mb-4.mb-md-0.order-1
              h4 Diagrama de gantt
              ul.lista-ul--color
                li.d-flex
                  i.fa-solid.fa-greater-than.bg-color-4
                  h5 Explicación
                p.ms-3 Este gráfico consta de un eje horizontal que representa el tiempo y una vertical, en el cual se describen los procesos. Se implementan para optimizar planeaciones y gestión de recursos.
                li.d-flex
                  i.fa-solid.fa-greater-than.bg-color-4
                  h5 ¿Cuándo se usa?
                p.ms-3 Cuando se requiere planificar un proyecto y gestionar los recursos.

    separador
    
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Tipos de analíticas

    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        img(src="@/assets/curso/tema5/14.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10(data-aos="fade-up")
            p.banner-text Entender y saber analizar las estadísticas de la analítica digital de manera correcta, posibilita un mayor crecimiento del negocio. Los informes de las analíticas digitales tienen múltiples finalidades, por eso es importante a la hora de redactar tener en cuenta qué tipo de informe se requiere, veamos los más implementados:

        .row.mb-5.align-items-center.justify-content-center
          .col-md-8.col-lg-10.mb-3.mb-lg-0
            AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-7")
              div(titulo="Retroespectiva")
                p.ms-5 Análisis descriptivo. Es la interpretación más común del análisis de estadística de redes y páginas web, basadas en acontecimientos del presente y del pasado. Hace referencia a la compilación de información estadística sobre elementos históricos definidos claramente, que se almacenan y se realiza agregaciones del histórico para la comprensión del estado actual o pasado del negocio; como ejemplo podríamos poner clientes, productos, proveedores.
              div(titulo="<em>Insights</em>")
                p.ms-5 Análisis de diagnóstico. Gira en torno al “porqué”, es decir da elementos de éxito o fallidos de una campaña, generalmente se combina con la información que entrega el análisis descriptivo.
              div(titulo="Previsión")
                p.ms-5 Análisis predictivo. Basada en el uso de técnicas de <em>machine learning</em>, datos y algoritmos estadísticos que ayudan a contrarrestar información, para visionar la probabilidad de resultados futuros basado en ese material histórico, definiendo si la estrategia va por buen camino y proveer la mejor evaluación de lo que sucederá en el futuro.
              div(titulo="Prospectiva")
                p.ms-5 Análisis prescriptivo. Va más allá del análisis predictivo pues entrega elementos sobre acciones futuras, pero te da claridad sobre cómo abordar ese escenario para optimizar los resultados.
              div(titulo="Analítica selectiva")
                p.ms-5 #[em Reporting] que posibilita seleccionar material a través de un filtro con criterios específicos, generalmente se usa para revisión de casos, para grupos de investigación en un área específica o informes de cumplimiento obligatorio.
              div(titulo="Analística y exportación de registros")
                p.ms-5 Traslada información de su fuente original para generar reportes específicos, generalmente se usa cuando se van a analizar clientes, datos demográficos de usuarios o interacciones con el servicio antes y postventa.
              div(titulo="Analíticas periódicas")
                p.ms-5 Son los reportes estándar, se diferencian de las listas de seguimiento, porque no se enfoca a una búsqueda intensiva y reducida, sino que generan en periodos de tiempo establecidos y basados en estadística descriptiva, información más general de un área en concreto.

    separador
    
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Tipos de métricas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-5.p-4.tarjeta 
          img(src="@/assets/curso/tema5/16.png",style="max-width: 116px" data-aos="zoom-in").mb-3
          p.mb-0 Un informe estadístico producto de un ejercicio de analítica, entrega datos que ayudan al proceso de análisis del rendimiento de la página y de las redes sociales a través de métricas, que son datos que sirven para analizar el rendimiento de las campañas #[em marketing] digital. Veremos a continuación algunas métricas comunes en el #[em marketing].
      .col-md-8.col-lg-4.mb-3.mb-xl-0
        figure
          img(src="@/assets/curso/tema5/15.png", data-aos="zoom-in")
      .col-lg-5
        ul.lista-ul--color.ms-3
          li.mb-1.d-flex
            i.fa-solid.fa-greater-than.bg-color-4
            p.mb-0 <b>Métricas de área o generales.</b> Basadas en la correspondencia del esfuerzo organizativo y la inversión en la búsqueda y adquisición de clientes.
          li.mb-1.d-flex
            i.fa-solid.fa-greater-than.bg-color-4
            p.mb-0 <b>Métricas de producto.</b> Mide la popularidad y características de un producto con respecto a la competencia.
          li.mb-1.d-flex
            i.fa-solid.fa-greater-than.bg-color-4
            p.mb-0 <b>Métrica de campaña.</b> Mide la adquisición de leads y ventas efectivas basadas en el comportamiento de público.
          li.mb-1.d-flex
            i.fa-solid.fa-greater-than.bg-color-4
            p.mb-0 <b>Métricas digitales.</b> Valida seguidores, número de visitas, nivel de interacciones y de conversión.
        .bg-color-22.p-4.tarjeta.mb-3
          p.mb-0 Analizar e interpretar los gráficos estadísticos de las redes sociales y las páginas web, permite no solo recopilar sino comprender los datos arrojados, para alcanzar una visión del actual mercado, conocer y comprender el consumidor objetivo, analizar audiencias, y recopilar todo tipo de comentarios para usarlos como insumo de mejoras.




</template>

<script>
export default {
  name: 'Tema5',
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
