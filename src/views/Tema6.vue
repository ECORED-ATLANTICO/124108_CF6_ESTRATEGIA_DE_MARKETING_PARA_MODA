<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Elaboración de informes con proyección de mejora

    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        .row.mb-5.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema6/1.png", data-aos="zoom-in")
          .col-lg-8
            p.mb-0(data-aos="fade-right") La mejora continua está ligada a la búsqueda de la excelencia organizacional y viene marcada por la cultura de calidad, donde debe existir una vinculación colectiva de los miembros de la organización asociados a los diferentes procesos y resultados esperados.
            .bloque-texto-b.color-secundario.p-4(data-aos="fade-up").mb-3
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                p.mb-0 Un plan de mejora se define como la propuesta de actuaciones, resultante de un proceso previo de diagnóstico de una unidad, que recoge y formaliza los objetivos de mejora y las correspondientes actuaciones dirigidas a fortalecer los puntos fuertes y resolver los débiles, de manera priorizada y temporalizada. (pág.11). 
                i.fas.fa-quote-right
              .bloque-texto-d__autor 
                .h5.mb-0 AQU Catalunya (2005).

        .bg-color-5.mb-5.p-4.tarjeta
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.order-2
              img.d-none.d-lg-flex(src="@/assets/curso/tema6/2.png").mx-auto
            .col-lg.order-1
              p.mb-0 Según AITECO Consultores S.L (2019) Un plan de mejora tiene una proyección a futuro, pues proyecta desde el análisis de una situación, unos objetivos a corto, mediano y largo plazo, priorizando acciones para producir cambios positivos en la cultura organizativa. El plan de mejora no se centra en los problemas esporádicos de una organización. En su lugar, se dirige hacia los problemas crónicos. Son estos los responsables de un insuficiente rendimiento que se manifiesta en un nivel estable de resultados, aunque insatisfactorio. A su vez, los planes de mejora pueden ser proactivos, es decir, dirigirse a mejorar un área de gestión, un servicio o un proceso. En todo caso, su planificación y desarrollo requiere de acciones determinadas, de forma que aseguren el éxito. En el siguiente recurso educativo se exponen los beneficios de un plan de mejora ¿cuáles cree que son los beneficios?, piense por un momento y explore el gráfico.

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3
            figure
              img(src="@/assets/curso/tema6/3.png", data-aos="zoom-in")
          .col-lg-8
            .bg-color-25.tarjeta.px-5.py-4
              .row.justify-content-center.align-items-center
                .col-auto.mb-3.mb-lg-0
                  figure
                    img.d-none.d-lg-flex(src="@/assets/curso/tema6/4.png", data-aos="zoom-in")
                .col-lg
                  ul.lista-ul--color.ms-3
                    li.mb-2.d-flex
                      i.fas.fa-circle-check.bg-color-32
                      | Priorizar decisiones, recurso y asignación de actores.
                    li.mb-2.d-flex
                      i.fas.fa-circle-check.bg-color-32
                      | Globalizar la mirada y la acción de los problemas con perspectiva temporal.
                    li.mb-2.d-flex
                      i.fas.fa-circle-check.bg-color-32
                      | Repensar la cultura organizativa con proyección a futuro enmarcada en los cambios requeridos según contexto.
                    li.mb-2.d-flex
                      i.fas.fa-circle-check.bg-color-32
                      | Visionar los objetivos esperados versus acciones desarrolladas para lograrlos.
                    li.mb-2.d-flex
                      i.fas.fa-circle-check.bg-color-32
                      | Involucrar a los actores de las diferentes áreas y procesos en la mejora organizacional.
                    li.mb-2.d-flex
                      i.fas.fa-circle-check.bg-color-32
                      | Introducir cambios en la cultura organizativa basados en la dirección por objetivos.

        img(src="@/assets/curso/tema6/5.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10(data-aos="fade-up")
            p.banner-text Luego de percibir los beneficios del plan de mejora, es importante que usted, como aprendiz reconozca los pasos de la metodología del plan de mejora, la cual está basada en el espiral de mejora continua a partir del ciclo PHVA (Planear-Hacer-Verificar-Actuar) la cual está constituida por cuatro fases. Ellas son:

    .row.mb-3.align-items-center.justify-content-center
      .col-lg-5.mb-3.mb-lg-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-up")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema6/6.svg' alt='')
          .tarjeta.tarjeta--azul
            .p-3
              h5 Planificar
              p.mb-0 Se identifica el problema y se definen objetivos y acciones para lograrlos
      .col-lg-5.mb-3.mb-lg-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-down")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema6/7.svg' alt='')
          .tarjeta.tarjeta--azul
            .p-3
              h5 Hacer
              p.mb-0 Se trabaja en los cambios para lograr los objetivos.
    
    .row.mb-5.align-items-center.justify-content-center
      .col-lg-5.mb-3.mb-lg-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-up")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema6/8.svg' alt='')
          .tarjeta.tarjeta--azul
            .p-3
              h5 Verificar
              p.mb-0 Transcurrido un tiempo definido previamente, se evalúan los resultados con base en los KPI (indicadores), para verificar la eficacia y eficiencia de las acciones implementadas.
      .col-lg-5.mb-3.mb-lg-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-down")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema6/9.svg' alt='')
          .tarjeta.tarjeta--azul
            .p-3
              h5 Actuar
              p.mb-0 Se toman decisiones de acuerdo a lo encontrado generando acciones correctivas y repensando la unidad en el marco de los cambios de contexto.

    h4 Fases de ejecución
    p.mb-5 Esta fase inicia con la identificación de las posibles causas de la problemática, del área y proceso a ser mejorado, teniendo en cuenta los siguientes elementos como: análisis del impacto que tiene el proceso en el área para lograr objetivos estratégicos de la empresa, importancia de la visión, misión y objetivos estratégicos y prever los efectos negativos de la situación problémica, para esto existen herramientas y técnicas de análisis como la matriz DOFA (Debilidades, Oportunidades, Fortalezas, Amenazas) diagramas de causa- efecto, el árbol de problemas.

    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema6/10.png", data-aos="zoom-in")
      .col-lg-8
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Fase análisis")
            h4 Fase análisis
            p.mb-0 Esta fase inicia con la identificación de las posibles causas de la problemática, del área y proceso a ser mejorado, teniendo en cuenta los siguientes elementos como: análisis del impacto que tiene el proceso en el área para lograr objetivos estratégicos de la empresa, importancia de la visión, misión y objetivos estratégicos y prever los efectos negativos de la situación problémica, para esto existen herramientas y técnicas de análisis como la matriz DOFA (Debilidades, Oportunidades, Fortalezas, Amenazas) diagramas de causa- efecto, el árbol de problemas.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Fase de planeación")
            h4 Fase de planeación
            p.mb-0 Esta planificación debe ser definida en varios momentos o plazos, ser medible, viable, flexible, y se debe tener en cuenta lo siguiente: validar los resultados del análisis y definir los objetivos, definir las posibles soluciones y establecer las acciones, asignar las responsabilidades a los miembros del equipo y definir las herramientas para la solución de problemáticas.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Fase de implementación y seguimiento")
            h4 Fase de implementación y seguimiento
            p.mb-0 En esta fase es vital la incorporación del personal pues son los encargados de ejecutar las acciones y se debe tener en cuenta lo siguiente: la socialización del plan de mejora, la ejecución de las acciones programadas, los seguimientos basados en indicadores de impacto y de desempeño, y valoración del cumplimiento del plan.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Fase de evaluación")
            h4 Fase de evaluación
            p Consiste en la verificación del plan de mejora definido, se define a partir de objetivos e indicadores y finalmente se realiza el informe.
            p.mb-0 Apreciado aprendiz, gracias por llegar al final de esta experiencia de aprendizaje. Es importante que usted más allá de identificar o comprender conceptos vistos debe buscar las formas de cómo llevarlos a cabo en su contexto. Allí es donde tiene utilidad su formación.





        


</template>

<script>
export default {
  name: 'Tema6',
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
