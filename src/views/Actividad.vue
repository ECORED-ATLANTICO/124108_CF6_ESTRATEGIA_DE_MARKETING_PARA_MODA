<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Protocolos de atención y analítica digital',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la comprensión del aprendiz sobre los protocolos de atención en redes sociales, el manejo de crisis, las herramientas de analítica digital y la interpretación de gráficos mediante la resolución de preguntas de verdadero o falso, a partir de la identificación de conceptos clave desarrollados en el componente formativo relacionados con atención al cliente digital, medición de resultados y análisis de información.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es la finalidad principal de un protocolo de atención?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Orientar actuaciones uniformes durante la atención al cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Sustituir completamente los procesos comerciales empresariales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar la comunicación entre empresa y consumidores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la participación del personal de servicio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué beneficio ofrece estandarizar procesos de atención al cliente?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incrementar la improvisación durante cada servicio prestado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Garantizar mayor coherencia y calidad en la atención.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Disminuir la comunicación entre las áreas empresariales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar la necesidad de capacitar al personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué dimensión prioriza cumplir oportunamente compromisos adquiridos con clientes?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Empatía.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Intangibilidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Capacidad de respuesta.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Seguridad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué dimensión refleja atención personalizada según necesidades del cliente?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Fiabilidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Seguridad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Capacidad de respuesta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Empatía.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué caracteriza principalmente la dimensión denominada fiabilidad del servicio?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cumplir compromisos con seguridad, puntualidad y confianza.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Personalizar completamente todas las respuestas comerciales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Priorizar únicamente la velocidad del servicio pfrecido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitar la interacción entre cliente y organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué busca principalmente la gestión de comunicación en crisis?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar la incertidumbre organizacional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir impactos negativos sobre imagen y reputación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar completamente las redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Suspender toda interacción con los clientes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál etapa antecede normalmente a una crisis organizacional?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Poscrisis.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Recuperación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Precrisis.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Estabilización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué elemento fortalece una adecuada preparación frente a crisis?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorar posibles riesgos organizacionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Actuar únicamente después del problema.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Planificar acciones preventivas y protocolos definidos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Evitar toda comunicación con el público.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué permite obtener la analítica digital en organizaciones modernas?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Información para apoyar decisiones estratégicas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar completamente la investigación comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir el criterio profesional empresarial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la recopilación de información digital.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué analiza principalmente la analítica digital de sitios web?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente el diseño gráfico institucional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El comportamiento e interacción de los usuarios digitales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Exclusivamente los costos financieros empresariales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solamente la estructura organizacional interna.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué finalidad tiene elaborar informes de analítica digital?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar el análisis de resultados obtenidos digitalmente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Presentar información útil para apoyar decisiones estratégicas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir completamente la interpretación de indicadores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir el seguimiento de campañas implementadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué característica debe tener un informe descriptivo de resultados?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Presentar información clara, organizada y sustentada en datos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Basarse únicamente en opiniones del analista responsable.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar el uso de evidencias durante la interpretación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitar la información presentada al equipo directivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué función cumplen los gráficos dentro de un informe?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la cantidad de información disponible.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Facilitar la comprensión visual de los resultados obtenidos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir completamente el análisis de datos digitales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar la necesidad de interpretar indicadores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué ventaja aporta interpretar correctamente los indicadores digitales?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incrementar la incertidumbre durante la toma de decisiones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituir la planeación estratégica de la organización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Apoyar decisiones mediante evidencia proveniente de los datos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar la necesidad de realizar seguimiento continuo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué permite identificar una adecuada analítica en redes sociales?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Tendencias, comportamientos y oportunidades de mejora continua.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Únicamente la cantidad total de publicaciones realizadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solamente el número de colaboradores de la organización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Exclusivamente el presupuesto destinado a pauta publicitaria digital.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué propósito tienen las métricas dentro de la analítica digital?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la precisión de la información obtenida.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Medir el desempeño de acciones y estrategias implementadas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar el uso de indicadores durante la evaluación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir completamente los informes de resultados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué favorece analizar periódicamente los indicadores digitales organizacionales?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mantener procesos de mejora continua basados en evidencia.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar el seguimiento de resultados organizacionales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir la planificación mediante decisiones intuitivas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la capacidad de adaptación frente al entorno.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué característica distingue una métrica relevante para la organización?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Basarse únicamente en apreciaciones personales del analista.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Relacionarse directamente con objetivos estratégicos establecidos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Cambiar constantemente sin criterios definidos previamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Medirse exclusivamente cuando existen resultados negativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué aporta la interpretación conjunta de métricas e indicadores?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una visión integral para fortalecer decisiones organizacionales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Eliminar completamente el análisis estratégico empresarial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir la evaluación mediante apreciaciones subjetivas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la importancia de la analítica digital aplicada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué resultado genera integrar protocolos y analítica digital organizacional?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disminuir la calidad del servicio ofrecido al cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Fortalecer decisiones y mejorar continuamente la atención brindada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Eliminar la necesidad de medir resultados institucionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir completamente los protocolos de atención establecidos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
