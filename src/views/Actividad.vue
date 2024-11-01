<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Nombre del componente formativo',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Identificar los factores de riesgo modificables y no modificables, así como sobre las recomendaciones de actividad física para la prevención de enfermedades no transmisibles.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de los siguientes es un factor de riesgo no modificable?',
          imagen: require('@/assets/curso/img1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Edad.', esCorrecta: false },
            { id: 'b', texto: 'Herencia.', esCorrecta: true },
            { id: 'c', texto: 'Dieta poco saludable.', esCorrecta: false },
            { id: 'd', texto: 'Inactividad física.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué porcentaje de muertes se debe al tabaquismo en casos de cáncer de pulmón?',
          imagen: require('@/assets/curso/img2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '71 %.', esCorrecta: true },
            { id: 'b', texto: '50 %.', esCorrecta: false },
            { id: 'c', texto: '35 %.', esCorrecta: false },
            { id: 'd', texto: '90 %.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es una de las principales enfermedades no transmisibles mencionadas en el documento?',
          imagen: require('@/assets/curso/img3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Cáncer.', esCorrecta: true },
            { id: 'b', texto: 'Hepatitis.', esCorrecta: false },
            { id: 'c', texto: 'Gripe.', esCorrecta: false },
            { id: 'd', texto: 'SIDA.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Según la OMS, ¿cuántas muertes anuales se atribuyen a una actividad física insuficiente?',
          imagen: require('@/assets/curso/img4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '1 millón.', esCorrecta: false },
            { id: 'b', texto: '3,2 millones.', esCorrecta: true },
            { id: 'c', texto: '5 millones.', esCorrecta: false },
            { id: 'd', texto: '10 millones.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué tipo de diabetes requiere insulina de manera inmediata y constante?',
          imagen: require('@/assets/curso/img1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Diabetes tipo 2.', esCorrecta: false },
            { id: 'b', texto: 'Diabetes gestacional.', esCorrecta: false },
            { id: 'c', texto: 'Diabetes tipo 1.', esCorrecta: true },
            { id: 'd', texto: 'Diabetes secundaria.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál de los siguientes es un beneficio del ejercicio físico en personas con enfermedades cardiovasculares?',
          imagen: require('@/assets/curso/img2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducción del riesgo de muerte prematura.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aumento del colesterol LDL.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumento de la presión arterial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumento del riesgo de infarto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué enfermedad respiratoria crónica se menciona como tratable pero con limitación irreversible del flujo de aire?',
          imagen: require('@/assets/curso/img3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Enfermedad pulmonar obstructiva crónica (EPOC).',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Asma.', esCorrecta: false },
            { id: 'c', texto: 'Gripe.', esCorrecta: false },
            { id: 'd', texto: 'Neumonía.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuántos minutos semanales de ejercicio físico se recomiendan para adultos con sobrepeso u obesidad?',
          imagen: require('@/assets/curso/img4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '150 minutos.', esCorrecta: true },
            { id: 'b', texto: '50 minutos.', esCorrecta: false },
            { id: 'c', texto: '100 minutos.', esCorrecta: false },
            { id: 'd', texto: '300 minutos.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Las enfermedades no transmisibles no se contagian por contacto físico directo.',
          imagen: require('@/assets/curso/img1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Las infecciones crónicas no son un factor de riesgo para desarrollar cáncer en países de ingresos bajos.',
          imagen: require('@/assets/curso/img2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: true },
            { id: 'b', texto: 'Verdadero.', esCorrecta: false },
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
