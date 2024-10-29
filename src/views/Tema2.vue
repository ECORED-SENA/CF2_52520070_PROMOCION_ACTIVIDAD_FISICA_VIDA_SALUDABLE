<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 La actividad física como factor protector de enfermedades no transmisibles
    .row.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        .p-4.bg-c6
          p.mb-0 La promoción de la actividad física como factor protector de las enfermedades no transmisibles está directamente relacionada con la mejora de la salud y, por ende, de la calidad de vida, aportando beneficios significativos a quienes la practican. Más allá de las recomendaciones sobre el tiempo, frecuencia, intensidad o tipo de actividad, es crucial atender las orientaciones sobre cómo integrar la actividad física en la vida diaria de las personas, convirtiéndola en un hábito saludable que contribuye a mitigar dichas enfermedades.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img1.png', alt='', style="width: 320px;").m-auto
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img2.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-md-5
        p.mb-0 Las enfermedades no transmisibles (ENT) incluyen dolencias adquiridas, en su mayoría, a través de estilos de vida inadecuados y poco saludables, aunque también pueden estar influenciadas por factores genéticos. A diferencia de las enfermedades infectocontagiosas, las ENT no se transmiten por contacto directo o fluidos corporales, sino que están relacionadas con alteraciones degenerativas y crónicas.
    p(data-aos="fade-right") Factores como el envejecimiento, la urbanización acelerada y la adopción de hábitos de vida poco saludables están asociados con las ENT. Estos hábitos incluyen dietas malsanas que pueden provocar hipertensión, hiperglucemia, hiperlipidemia y obesidad. Estos factores de riesgo intermedios aumentan la probabilidad de desarrollar enfermedades cardiovasculares, una de las principales ENT. 
    p.mb-5(data-aos="fade-right") #[b Los cuatro tipos principales de enfermedades no transmisibles son:]
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-10.col-md-7.col-lg-5.mb-4
        .p-4.bg-c4.h-100
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema2/img1.svg', alt='', style="width: 100px;").m-auto
            .col
              p.text-center.mb-0 Cancer
      .col-10.col-md-7.col-lg-5.mb-4
        .p-4.bg-c4.h-100
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema2/img2.svg', alt='', style="width: 100px;").m-auto
            .col
              p.text-center.mb-0 Enfermedades cardiovasculares (como ataques cardíacos y accidentes cerebrovasculares).
      .col-10.col-md-7.col-lg-5.mb-4.mb-lg-0
        .p-4.bg-c4.h-100
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema2/img3.svg', alt='', style="width: 100px;").m-auto
            .col
              p.text-center.mb-0 Diabetes
      .col-10.col-md-7.col-lg-5
        .p-4.bg-c4.h-100
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema2/img4.svg', alt='', style="width: 100px;").m-auto
            .col
              p.text-center.mb-0 Enfermedades  respiratorias crónicas (como la enfermedad  pulmonar obstructiva  crónica y el asma).
    .row.justify-content-center.mb-5
      .col-11.col-md-10.col-lg-8.bg-c10.order-2.order-lg-1(data-aos="fade-right")
        .p-4
          p.mb-0 En 2023, las enfermedades no transmisibles (ENT) continúan siendo la principal causa de mortalidad global, representando el 75% de las muertes anuales. Dentro de estas, las enfermedades cardiovasculares siguen siendo las más mortales, causando 17,9 millones de muertes al año, seguidas por el cáncer con 9,3 millones, las enfermedades respiratorias crónicas con 4,1 millones y la diabetes con 2 millones de fallecimientos. Estas cuatro enfermedades son responsables de más del 80% de las muertes prematuras relacionadas con ENT, afectando principalmente a personas menores de 70 años. (OMS, 2023)
      .col-11.col-md-10.col-lg-4.bg-c11.order-1.order-lg-2(data-aos="fade-left")
        .p-4
          figure
            img(src='@/assets/curso/tema2/img3.png', alt='', style="width: 270px;").m-auto
    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      p.mb-0 #[b Figura 1.] Enfermedades no transmisibles
    .row
      .col-12
        .p-4.p-lg-5.bg-c12
          figure(data-aos="fade-down")
            img(src='@/assets/curso/tema2/img5.svg', alt='La figura presenta las características de las enfermedades no transmisibles, dividiéndolas en cuatro áreas: Causas (comportamiento en factores de riesgo, sedentarismo y bajo gasto de energía), Desarrollo (progresivo y lento), Efectos (disminuye la aptitud física e interfiere en el funcionamiento fisiológico), y Prevención (minimizar efectos mediante ejercicio físico y programas de actividad física). ', style="width: 1000px;").m-auto
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido
      h2 2.1 Enfermedades cardiovasculares
    p.mb-5(data-aos="fade-right") Según la Organización Mundial de la Salud (OMS), las enfermedades cardiovasculares (ECV) son un grupo de trastornos del corazón y de los vasos sanguíneos. Estas incluyen:
    .row.bg-c13.mb-5
      .col-12
        .p-5
          .tarjeta.bg-white
            .p-4.p-lg-5
              SlyderA(tipo="b")(data-aos="fade-down")
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Cardiopatía coronaria]
                    p.mb-0 Enfermedad de los vasos sanguíneos que irrigan el músculo cardíaco.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema2/img5.png', alt='', style="width: 350px;").m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Enfermedades cerebrovasculares]
                    p.mb-0 Trastornos de los vasos sanguíneos que irrigan el cerebro.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema2/img6.png', alt='', style="width: 350px;").m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Arteriopatías periféricas]
                    p.mb-0 Afecciones de los vasos sanguíneos que irrigan los miembros superiores e inferiores.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema2/img7.png', alt='', style="width: 350px;").m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Cardiopatía reumática]
                    p.mb-0 Daño al músculo y válvulas cardíacas causado por la fiebre reumática, una enfermedad provocada por la bacteria estreptococo.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema2/img8.png', alt='', style="width: 350px;").m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Trombosis venosas profundas y embolias pulmonares]
                    p.mb-0 Coágulos de sangre en las venas de las piernas que pueden desplazarse y alojarse en los vasos del corazón o los pulmones.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema2/img9.png', alt='', style="width: 350px;").m-auto
    p.mb-5 #[b Los factores de riesgo para la enfermedad coronaria:]
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-6.col-md-4.col-lg-2.mb-4
        .p-4.bg-c14.h-100
          figure.mb-3
            img(src='@/assets/curso/tema2/img6.svg', alt='', style="width: 100px;").m-auto
          p.text-center.mb-0 #[b Fumar]
      .col-6.col-md-4.col-lg-2.mb-4
        .p-4.bg-c14.h-100
          figure.mb-3
            img(src='@/assets/curso/tema2/img7.svg', alt='', style="width: 100px;").m-auto
          p.text-center.mb-0 #[b Consumo de alcohol]
      .col-6.col-md-4.col-lg-2.mb-4
        .p-4.bg-c14.h-100
          figure.mb-3
            img(src='@/assets/curso/tema2/img8.svg', alt='', style="width: 100px;").m-auto
          p.text-center.mb-0 #[b Abuso de drogas]
      .col-6.col-md-4.col-lg-2.mb-4
        .p-4.bg-c14.h-100
          figure.mb-3
            img(src='@/assets/curso/tema2/img9.svg', alt='', style="width: 100px;").m-auto
          p.text-center.mb-0 #[b Edad]
      .col-6.col-md-4.col-lg-2.mb-4
        .p-4.bg-c14.h-100
          figure.mb-3
            img(src='@/assets/curso/tema2/img10.svg', alt='', style="width: 100px;").m-auto
          p.text-center.mb-0 #[b Género]
      .col-6.col-md-4.col-lg-2.mb-4
        .p-4.bg-c14.h-100
          figure.mb-3
            img(src='@/assets/curso/tema2/img11.svg', alt='', style="width: 100px;").m-auto
          p.text-center.mb-0 #[b Estrés]
      .col-6.col-md-4.col-lg-2.mb-4.mb-lg-0
        .p-4.bg-c14.h-100
          figure.mb-3
            img(src='@/assets/curso/tema2/img12.svg', alt='', style="width: 100px;").m-auto
          p.text-center.mb-0 #[b Hipertensión]
      .col-6.col-md-4.col-lg-2.mb-4.mb-lg-0
        .p-4.bg-c14.h-100
          figure.mb-3
            img(src='@/assets/curso/tema2/img13.svg', alt='', style="width: 100px;").m-auto
          p.text-center.mb-0 #[b Colesterol alto]
      .col-6.col-md-4.col-lg-2.mb-md-4.mb-lg-0
        .p-4.bg-c14.h-100
          figure.mb-3
            img(src='@/assets/curso/tema2/img14.svg', alt='', style="width: 100px;").m-auto
          p.text-center.mb-0 #[b Obesidad]
      .col-6.col-md-4.col-lg-2
        .p-4.bg-c14.h-100
          figure.mb-3
            img(src='@/assets/curso/tema2/img15.svg', alt='', style="width: 100px;").m-auto
          p.text-center.mb-0 #[b Antecedentes familiares]
    .row.mb-4
      .col-auto.bg-c7(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img7.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 Descripción y categorización del proceso para estratificar riesgos
    p.mb-5(data-aos="fade-right") La inactividad física es un factor de riesgo modificable que debe recibir más atención en los esfuerzos actuales para reducir el impacto de las enfermedades coronarias en la sociedad. Es fundamental mejorar la condición física para reducir la prevalencia de patologías cardiovasculares, ya que la actividad física es un factor protector que mejora la calidad de vida y disminuye el riesgo de muerte prematura.
    .row.justify-content-center.mb-5
      .col-lg-8.mb-3(data-aos="fade-right")
        .row.justify-content-center
          .col-11.col-md-8.col-lg-4.px-0
            figure
              img(src='@/assets/curso/tema2/img10.png', alt='')
          .col-11.col-md-8.col-lg-8.bg-c15
            .p-4
              p.mb-0 #[b Ejercicio moderado]
              p.mb-0 Actividades de intensidad moderada (40-59 % del Volumen de Oxígeno de Reserva -VO2R-, equivalentes a 3-9 MET). Esta intensidad provoca un aumento perceptible de la frecuencia cardíaca (FC) y respiratoria (FR).
      .col-lg-8(data-aos="fade-left")
        .row.justify-content-center
          .col-11.col-md-8.col-lg-4.px-0
            figure
              img(src='@/assets/curso/tema2/img11.png', alt='')
          .col-11.col-md-8.col-lg-8.bg-c5
            .p-4
              p.mb-0 #[b Ejercicio vigoroso]
              p.mb-0 Actividades de intensidad vigorosa (60-89 % VO2R, equivalentes a 6-9 MET). Este tipo de ejercicio produce un aumento considerable de la FC y FR.
    p.mb-5(data-aos="fade-right") Los beneficios del ejercicio físico en la prevención de enfermedades cardiovasculares:
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-8.col-md-4.col-lg-3.mb-4
        .p-4.bg-c6.h-100
          figure.mb-3
            img(src='@/assets/curso/tema2/img16.svg', alt='', style="width: 100px;").m-auto
          p.text-center.mb-0 Políticas integrales de control del tabaco.
      .col-8.col-md-4.col-lg-3.mb-4
        .p-4.bg-c6.h-100
          figure.mb-3
            img(src='@/assets/curso/tema2/img17.svg', alt='', style="width: 100px;").m-auto
          p.text-center.mb-0 Impuestos para reducir la ingesta de alimentos con alto contenido de grasas, azúcar y sal.
      .col-8.col-md-4.col-lg-3.mb-4
        .p-4.bg-c6.h-100
          figure.mb-3
            img(src='@/assets/curso/tema2/img18.svg', alt='', style="width: 100px;").m-auto
          p.text-center.mb-0 Construcción de vías peatonales y carriles para bicicletas que fomenten la actividad física.
      .col-8.col-md-4.col-lg-3.mb-4
        .p-4.bg-c6.h-100
          figure.mb-3
            img(src='@/assets/curso/tema2/img19.svg', alt='', style="width: 100px;").m-auto
          p.text-center.mb-0 Estrategias para reducir el consumo nocivo de alcohol.
      .col-8.col-md-4.col-lg-3.mb-4.mb-lg-0
        .p-4.bg-c6.h-100
          figure.mb-3
            img(src='@/assets/curso/tema2/img20.svg', alt='', style="width: 100px;").m-auto
          p.text-center.mb-0 Provisión de comidas saludables en los comedores escolares.
      .col-8.col-md-4.col-lg-3.mb-4.mb-lg-0
        .p-4.bg-c6.h-100
          figure.mb-3
            img(src='@/assets/curso/tema2/img21.svg', alt='', style="width: 100px;").m-auto
          p.text-center.mb-0 La actividad física protege el sistema cardiovascular.
      .col-8.col-md-4.col-lg-3.mb-4.mb-md-0
        .p-4.bg-c6.h-100
          figure.mb-3
            img(src='@/assets/curso/tema2/img22.svg', alt='', style="width: 100px;").m-auto
          p.text-center.mb-0 Trabajar a una intensidad moderada mejora la función cardiorrespiratoria.
      .col-8.col-md-4.col-lg-3.mb-0
        .p-4.bg-c6.h-100
          figure.mb-3
            img(src='@/assets/curso/tema2/img23.svg', alt='', style="width: 100px;").m-auto
          p.text-center.mb-0 Los beneficios del ejercicio físico son evidentes a cualquier edad.
    p.mb-5(data-aos="fade-right") Las recomendaciones de actividad física para el tratamiento de enfermedades cardiovasculares.
    .row.justify-content-center.mb-5
      .col-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img12.png', alt='', style="width: 200px;").m-auto
      .col-md-8.col-lg-6(data-aos="fade-left")
        .p-4.bg-c4
          p.mb-0 Diversos estudios científicos han demostrado que la actividad física después de un infarto agudo de miocardio reduce la mortalidad en un 27 % y la mortalidad cardiovascular en un 31 %.
    .row.mb-5
      .col-12
        .p-4.bg-c16(data-aos="fade-down")
          .row.align-items-center.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              .p-4.bg-white
                p.mb-0 Tras tres meses de rehabilitación cardíaca con ejercicio aeróbico, realizado tres veces por semana a una intensidad del 70-85 %, se reduce el consumo de oxígeno en las actividades diarias y mejora la calidad de vida del individuo.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema2/img24.svg', alt='', style="width: 250px;").m-auto
    p.mb-5(data-aos="fade-right") Para personas con insuficiencia cardíaca crónica, el ejercicio aeróbico de intensidad moderada mejora la capacidad funcional y el tono autonómico, reduciendo la mortalidad.
    figure(data-aos="fade-down")
      img(src='@/assets/curso/tema2/img13.png', alt='', style="width: 700px;").m-auto
    Separador
    #t_2_2
    .titulo-segundo.color-acento-contenido
      h2 2.2 Diabetes mellitus
    p.mb-5(data-aos="fade-right") La diabetes mellitus (DM) es una condición caracterizada por altos niveles de glucosa en sangre. La clasificación de la DM se basa en las recomendaciones de la Organización Mundial de la Salud (OMS) y la Asociación Americana de Diabetes (ADA).
    .row.bg-c13.mb-5
      .col-12
        .p-5
          .tarjeta.bg-white(data-aos="fade-down")
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Tipo 1: insulino-dependiente]
                    p.mb-0 Afecta principalmente a personas menores de 30 años. Requiere la administración de insulina. Su diagnóstico y tratamiento deben ser rápidos. Aparece de forma repentina.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema2/img14.png', alt='', style="width: 350px;").m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Tipo 2: No insulino-dependiente]
                    p.mb-0 Se caracteriza por altos niveles de glucosa en sangre debido a la resistencia celular a la insulina y a una secreción deficiente por parte del páncreas. Afecta principalmente a personas mayores de 30-40 años. Está asociada a la obesidad, la falta de ejercicio y factores hereditarios. Puede requerir o no la administración de insulina.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema2/img15.png', alt='', style="width: 350px;").m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Diabetes gestacional]
                    p.mb-0 Es una alteración de los niveles de glucosa que se presenta durante el embarazo y debe ser controlada, ya que puede afectar al feto.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema2/img16.png', alt='', style="width: 350px;").m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Diabetes secundaria]
                    p.mb-0 Se debe a enfermedades del páncreas, factores genéticos, virus o medicamentos. Una vez que los síntomas desaparecen, los niveles de glucosa vuelven a su rango normal.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema2/img17.png', alt='', style="width: 350px;").m-auto
    .row.bg-c17.mb-5
      .col-12
        .px-5
          .row.mb-4
            .col-auto.bg-c7(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img7.svg', alt='', style='width: 40px')
                .col
                  h3.mb-0 Diabetes mellitus y actividad física
          p.mb-5(data-aos="fade-right") La práctica regular de ejercicio reduce los niveles de glucosa en sangre tanto antes como después del ejercicio. El ejercicio aeróbico combinado con resistencia muscular mejora la acción de la insulina y tiene efectos positivos:
          .row.justify-content-center.mb-5(data-aos="fade-left")
            .col-10.col-md-5.col-lg-3.mb-4.mb-lg-0
              .p-4.bg-c6.h-100
                figure.mb-3
                  img(src='@/assets/curso/tema2/img25.svg', alt='', style="width: 100px;").m-auto
                p.text-center.mb-0 #[b Disminuye la dosis diaria de insulina al aumentar la sensibilidad a esta hormona.]
            .col-10.col-md-5.col-lg-3.mb-4.mb-lg-0
              .p-4.bg-c6.h-100
                figure.mb-3
                  img(src='@/assets/curso/tema2/img26.svg', alt='', style="width: 100px;").m-auto
                p.text-center.mb-0 #[b Contribuye al control de la obesidad, ayudando a reducir el porcentaje de grasa, el peso corporal y los niveles de triglicéridos.]
            .col-10.col-md-5.col-lg-3.mb-4.mb-md-0
              .p-4.bg-c6.h-100
                figure.mb-3
                  img(src='@/assets/curso/tema2/img27.svg', alt='', style="width: 100px;").m-auto
                p.text-center.mb-0 #[b Reduce la tensión arterial al disminuir las resistencias periféricas.]
            .col-10.col-md-5.col-lg-3.mb-0.mb-md-0
              .p-4.bg-c6.h-100
                figure.mb-3
                  img(src='@/assets/curso/tema2/img28.svg', alt='', style="width: 100px;").m-auto
                p.text-center.mb-0 #[b Mejora la sensación de bienestar.]
          p.mb-5(data-aos="fade-right") #[b Restricciones:] Se desaconseja la práctica de ejercicio físico si la persona presenta:
          .row.justify-content-center.mb-5(data-aos="fade-down")
            .col-10.col-md-4.col-lg-2.mb-4.mb-lg-0
              .p-4.bg-c14.h-100
                figure.mb-3
                  img(src='@/assets/curso/tema2/img29.svg', alt='', style="width: 100px;").m-auto
                p.text-center.mb-0 #[b Un proceso infeccioso activo.]
            .col-10.col-md-4.col-lg-2.mb-4.mb-lg-0
              .p-4.bg-c14.h-100
                figure.mb-3
                  img(src='@/assets/curso/tema2/img30.svg', alt='', style="width: 100px;").m-auto
                p.text-center.mb-0 #[b Glucemia superior a 250-300 mg/dl y cetosis.]
            .col-10.col-md-4.col-lg-2.mb-4.mb-lg-0
              .p-4.bg-c14.h-100
                figure.mb-3
                  img(src='@/assets/curso/tema2/img31.svg', alt='', style="width: 100px;").m-auto
                p.text-center.mb-0 #[b Hipoglucemia o glucemia inferior a 80-100 mg/dl.]
            .col-10.col-md-4.col-lg-2.mb-0
              .p-4.bg-c14.h-100
                figure.mb-3
                  img(src='@/assets/curso/tema2/img32.svg', alt='', style="width: 100px;").m-auto
                p.text-center.mb-0 #[b Retinopatía hemorrágica activa.]
          p.mb-5(data-aos="fade-right") Directrices generales para la regulación de la respuesta glucémica en la actividad física son:
          .row.justify-content-center
            .col-lg-10(data-aos="fade-right")
              .row
                .col-auto.pe-0.d-none.d-lg-block
                  figure
                    img(src='@/assets/curso/tema2/img19.png', alt='', style="width: 320px;").m-auto
                .col.bg-c5
                  .p-4.p-lg-5
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #12263F")
                        |
                        p.mb-0 Se debe realizar un control metabólico antes de la actividad física. Si los niveles de glucosa están por encima de 250 mg/dl y hay cetosis, se debe evitar la actividad física. Si los niveles de glucosa superan los 300 mg/dl sin cetosis, también se debe evitar el ejercicio. Si los niveles de glucosa están por debajo de 100 mg/dl, se debe aumentar la ingesta de carbohidratos.
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #12263F")
                        |
                        p.mb-0 Es importante medir los niveles de glucosa antes y después del ejercicio para identificar las variaciones y ajustar la ingesta de alimentos y la dosis de insulina según sea necesario.
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #12263F")
                        |
                        p.mb-0 Se debe asegurar un consumo adecuado de carbohidratos antes y durante la actividad física para evitar la hipoglucemia.
    p.mb-5(data-aos="fade-right") Las recomendaciones para la práctica de actividad física en diabetes mellitus son:
    .row.bg-c13
      .col-12
        .p-5
          .tarjeta.bg-white
            .p-4.p-lg-5
              SlyderA(tipo="b")(data-aos="fade-up")
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Adultos]
                    p.mb-0 Deben realizar al menos 150 minutos de ejercicio de intensidad moderada por semana para prevenir el aumento de peso y reducir los factores de riesgo asociados.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema2/img20.png', alt='', style="width: 350px;").m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Personas con sobrepeso u obesidad]
                    p.mb-0 Deben realizar un mínimo de 150 minutos de ejercicio por semana, preferiblemente combinado con una dieta para reducir el sobrepeso y la obesidad.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema2/img21.png', alt='', style="width: 350px;").m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Ejercicio de resistencia muscular]
                    p.mb-0 Complementa el ejercicio aeróbico, ayudando a reducir los factores de riesgo asociados a la obesidad.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema2/img22.png', alt='', style="width: 350px;").m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Mantener el peso perdido]
                    p.mb-0 Se recomienda un mínimo de 250-300 minutos de ejercicio por semana.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema2/img23.png', alt='', style="width: 350px;").m-auto
    Separador
    #t_2_3
    .titulo-segundo.color-acento-contenido
      h2 2.3 Enfermedades respiratorias crónicas y actividad física
    p.mb-5(data-aos="fade-right") Según la OMS, las enfermedades respiratorias crónicas (ERC) son enfermedades de las vías respiratorias y estructuras pulmonares. Los síntomas principales son la causa frecuente de consultas en atención primaria. Las enfermedades respiratorias crónicas (ERC) son:
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-xl-4.col-lg-7.col-md-9.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/img24.png", alt="alt")
          .crd_hover_txt--body
            h4.text-center.mb-4.mb-md-5 Asma
            p.text-center.mb-0 Es una enfermedad inflamatoria crónica de las vías respiratorias, reversible y provocada por estímulos que no afectan a personas no asmáticas. Los síntomas incluyen sibilancias, disnea, opresión torácica y tos.
      .col-xl-4.col-lg-7.col-md-9.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/img25.png", alt="alt")
          .crd_hover_txt--body
            h4.text-center.mb-4.mb-md-5 Enfermedad pulmonar obstructiva crónica (EPOC)
            p.text-center.mb-0 Es una enfermedad prevenible y tratable que afecta al flujo de aire de manera progresiva debido a una respuesta inflamatoria a partículas o gases nocivos. Tiene consecuencias sistémicas y extrapulmonares, y la limitación del flujo de aire no es completamente reversible.
      .col-xl-4.col-lg-7.col-md-9.col-12
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/img26.png", alt="alt")
          .crd_hover_txt--body
            h4.text-center.mb-4.mb-md-5 Fibrosis quística
            p.text-center.mb-0 Es una enfermedad hereditaria multiorgánica en la que el compromiso pulmonar es responsable de casi el 85 % de la mortalidad.
    p.mb-5(data-aos="fade-right") Los factores de riesgo comunes asociados a estas enfermedades son:
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-down")
        .row
          .col-auto.pe-0.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema2/img27.png', alt='', style="width: 330px;").m-auto
          .col.bg-c15
            .p-4.p-lg-5
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle(style="color: #12263F")
                  |
                  p.mb-0 Tabaquismo.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #12263F")
                  |
                  p.mb-0 Contaminación del aire en espacios cerrados.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #12263F")
                  |
                  p.mb-0 Contaminación exterior.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #12263F")
                  |
                  p.mb-0 Alérgenos.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #12263F")
                  |
                  p.mb-0 Exposición a riesgos ocupacionales (polvo y productos químicos).
    p.mb-5(data-aos="fade-right") Los beneficios de la rehabilitación pulmonar son:
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-left")
        .row
          .col-auto.pe-0.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema2/img28.png', alt='', style="width: 340px;").m-auto
          .col.bg-c15
            .p-4.p-lg-5
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle(style="color: #12263F")
                  |
                  p.mb-0 Mejora la capacidad física.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #12263F")
                  |
                  p.mb-0 Reduce la sensación de disnea.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #12263F")
                  |
                  p.mb-0 Aumenta la supervivencia.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #12263F")
                  |
                  p.mb-0 Disminuye el número de hospitalizaciones.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #12263F")
                  |
                  p.mb-0 Reduce la ansiedad y la depresión asociadas a crisis pulmonares.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #12263F")
                  |
                  p.mb-0 Los beneficios se incrementan si la rehabilitación se acompaña de ejercicio físico.
    p.mb-5(data-aos="fade-right") Las recomendaciones de actividad física para personas con asma, EPOC y fibrosis quística son:
    .row.bg-c18
      .col-12
        .px-5
          .row.align-items-center
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema2/img30.png', alt='', style="width: 340px;").m-auto
            .col-lg-8(data-aos="fade-left")
              SlyderF(columnas="col-md-6 col-xl-4")
                .tarjeta.bg-white
                  .p-4
                    figure.mb-3
                      img(src='@/assets/curso/tema2/img31.png', alt='').m-auto
                    p.text-center.mb-0 Continuar con el tratamiento farmacológico prescrito.
                .tarjeta.bg-white
                  .p-4
                    figure.mb-3
                      img(src='@/assets/curso/tema2/img32.png', alt='').m-auto
                    p.text-center.mb-0 Realizar ejercicio en ambientes templados, cálidos o húmedos.
                .tarjeta.bg-white
                  .p-4
                    figure.mb-3
                      img(src='@/assets/curso/tema2/img33.png', alt='').m-auto
                    p.text-center.mb-0 Respirar preferentemente por la nariz.
                .tarjeta.bg-white
                  .p-4
                    figure.mb-3
                      img(src='@/assets/curso/tema2/img34.png', alt='').m-auto
                    p.text-center.mb-0 Tener broncodilatadores a mano en caso de crisis asmática.
                .tarjeta.bg-white
                  .p-4
                    figure.mb-3
                      img(src='@/assets/curso/tema2/img35.png', alt='').m-auto
                    p.text-center.mb-0 Realizar ejercicio aeróbico entre 3 y 7 días a la semana, durante 40-60 minutos, con intensidad moderada.
                .tarjeta.bg-white
                  .p-4
                    figure.mb-3
                      img(src='@/assets/curso/tema2/img36.png', alt='').m-auto
                    p.text-center.mb-0 Incrementar la actividad física en la niñez puede disminuir el riesgo de desarrollar asma.
    Separador
    #t_2_4
    .titulo-segundo.color-acento-contenido
      h2 2.4 Cáncer
    .row.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p Según la OMS, el término #[b "cáncer"] designa un amplio grupo de enfermedades que pueden afectar cualquier parte del organismo, también conocidas como tumores malignos o neoplasias malignas. Existen más de cien tipos de cáncer, y cualquier parte del cuerpo puede verse afectada.
        .row
          .col-12
            .p-4.bg-c15
              p.mb-0 A nivel mundial, los cinco tipos de cáncer más comunes en mujeres son el de #[b mama], #[b pulmón], #[b estómago], #[b colon/recto] y #[b cuello uterino]. En muchos países en desarrollo, el cáncer cervicouterino es el más frecuente. En los hombres, los tipos más comunes son el de pulmón, hígado, estómago, colon/recto y esófago.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img37.png', alt='', style="width: 380px;").m-auto
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img38.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-md-5
        p.mb-0 Los cánceres con mayor impacto en la salud pública son el de mama, #[b cuello uterino] y #[b colon/recto], los cuales pueden ser curables si se detectan a tiempo y reciben tratamiento adecuado. La mayoría de los casos de cáncer podrían prevenirse evitando el consumo de tabaco y alcohol, manteniendo una alimentación adecuada e incorporando actividad física regular.
    .row.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        .row.mb-3
          .col-12
            .p-4.bg-c10
              p.mb-0 El cáncer es una de las principales causas de morbilidad y mortalidad en los países desarrollados. La implementación de programas de actividad física ha mostrado un efecto positivo en la reducción del riesgo de cáncer de colon en un 40-50 %.
        p.mb-0 En un #[b metanálisis] que evaluó la relación entre actividad física y cáncer, se encontró una asociación inversa dosis-respuesta, donde una mayor participación en actividades de al menos intensidad moderada (más de 4,5 MET) se relacionó con una menor incidencia de cáncer de colon.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img39.png', alt='', style="width: 380px;").m-auto
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-down")
        .row
          .col-auto.pe-0.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema2/img40.png', alt='', style="width: 330px;").m-auto
          .col.bg-c15
            .p-4.p-lg-5
              p.mb-0 Los cambios hormonales inducidos por la actividad física en personas mayores pueden prevenir el cáncer de mama en mujeres posmenopáusicas. Las mujeres que han mantenido un estilo de vida activo tienen menor riesgo de desarrollar cáncer de mama en comparación con aquellas que han sido sedentarias.
    .row.mb-4
      .col-auto.bg-c7(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img7.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 Recomendaciones para la realización de actividad física
    .row.mb-4
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p Con el fin de difundir información sobre hábitos alimenticios y actividad física. Estas guías fueron elaboradas por expertos en investigación oncológica, prevención, epidemiología y políticas de salud, generando estrategias políticas y comunitarias para modificar patrones dietéticos en los EE. UU. 
        p.mb-0 Para las personas en tratamiento activo o que lo han completado, la ACS emitió recomendaciones específicas respecto a la actividad física (Doyle C, Kushi LH, Byers T, Courneya KS, Demark-Wahnefried W, Grant B, et al., 2006). Estas recomendaciones indican que la actividad física debe ser individualizada y ajustada al nivel de condición física previo.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img41.png', alt='', style="width: 340px;").m-auto
    .row.align-items-center.mb-5
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img42.png', alt='', style="width: 280px;").m-auto
      .col-lg-9(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Sedentarios antes del diagnóstico")
            .col-12
              p.mb-0 Iniciar con actividad física de baja intensidad, como caminatas suaves, aumentando gradualmente según la evolución del paciente, acompañada de ejercicios de flexibilidad.
          .row(titulo="Adultos mayores con enfermedades óseas o limitaciones de movilidad")
            .col-12
              p.mb-0 Priorizar el fortalecimiento muscular y el equilibrio para evitar caídas y lesiones que agraven la enfermedad, especialmente en condiciones como artritis o neuropatía periférica.
          .row(titulo="Personas en reposo prolongado en cama")
            .col-12
              p.mb-0 Terapia física para evitar la pérdida de masa muscular, enfocándose en mantener la fuerza y mejorar la movilidad, lo que ayuda a combatir la fatiga y la depresión.
          .row(titulo="Inicio del tratamiento oncológico")
            .col-12
              p.mb-0 Realizar un mínimo de actividad física dependiendo de las capacidades individuales. En casos de cáncer avanzado, la actividad física puede restringirse según las necesidades y limitaciones.
    .row.mb-4
      .col-auto.bg-c7(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img7.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 Factores de riesgo del cáncer
    .row.mb-4
      .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img43.png', alt='', style="width: 300px;").m-auto
      .col(data-aos="fade-left")
        .p-4.bg-c12
          p.mb-0 La #[b OMS] señala que el consumo de tabaco y alcohol, una dieta poco saludable y la inactividad física son los principales factores de riesgo para el desarrollo de cáncer a nivel mundial. Además, algunas infecciones crónicas también constituyen factores de riesgo, especialmente en países de ingresos medios y bajos.
    p(data-aos="fade-right") La OMS ha establecido una serie de metas mundiales para combatir las enfermedades no transmisibles (ENT), incluidas en el objetivo "Cumplimiento de las nueve metas mundiales relativas a las ENT: una responsabilidad compartida". El cumplimiento de estas metas es un desafío global que involucra a todos los países en la lucha contra estas enfermedades, buscando mitigar sus efectos en la salud pública y el sector económico. 
    p.mb-5(data-aos="fade-right") #[b El entrenamiento recomendado es:]
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-10.col-md-5.col-lg-4.mb-4.mb-lg-0
        .p-4.bg-c6.h-100
          figure.mb-3
            img(src='@/assets/curso/tema2/img33.svg', alt='', style="width: 100px;").m-auto
          p.text-center.mb-0 Realizar actividad aeróbica entre 3 y 5 veces por semana, durante 20 a 60 minutos, con cualquier tipo de actividad que involucre grandes grupos musculares.
      .col-10.col-md-5.col-lg-4.mb-4.mb-lg-0
        .p-4.bg-c6.h-100
          figure.mb-3
            img(src='@/assets/curso/tema2/img34.svg', alt='', style="width: 100px;").m-auto
          p.text-center.mb-0 Trabajar a una intensidad del 60-90 % de la frecuencia cardíaca máxima o al 50-85 % del VO2 máximo o de la reserva de frecuencia cardíaca máxima.
      .col-10.col-md-5.col-lg-4
        .p-4.bg-c6.h-100
          figure.mb-3
            img(src='@/assets/curso/tema2/img35.svg', alt='', style="width: 100px;").m-auto
          p.text-center.mb-0 Complementar con entrenamiento de fuerza de intensidad moderada, suficiente para desarrollar y mantener la masa muscular magra, realizando de 8 a 12 repeticiones y de 8 a 10 ejercicios al menos 2 veces por semana.
    p.mb-5(data-aos="fade-right") Las nueve metas mundiales relacionadas con las enfermedades no transmisibles (ENT) son:
    .row.justify-content-center(data-aos="fade-left")
      .col-10.col-md-4.col-lg-3.mb-4
        .p-4.bg-c9.h-100
          figure.mb-3
            img(src='@/assets/curso/tema2/img36.svg', alt='', style="width: 100px;").m-auto
          p.text-center.mb-0 #[b Reducción relativa de la mortalidad] por enfermedades cardiovasculares, cáncer, diabetes o enfermedades respiratorias crónicas en un 25 %.
      .col-10.col-md-4.col-lg-3.mb-4
        .p-4.bg-c9.h-100
          figure.mb-3
            img(src='@/assets/curso/tema2/img37.svg', alt='', style="width: 100px;").m-auto
          p.text-center.mb-0 #[b Reducción relativa del uso nocivo] del alcohol en al menos un 10 %, adaptada al contexto nacional.
      .col-10.col-md-4.col-lg-3.mb-4
        .p-4.bg-c9.h-100
          figure.mb-3
            img(src='@/assets/curso/tema2/img38.svg', alt='', style="width: 100px;").m-auto
          p.text-center.mb-0 #[b Reducción relativa de la prevalencia de actividad física] insuficiente en un 10 %.
      .col-10.col-md-4.col-lg-3.mb-4
        .p-4.bg-c9.h-100
          figure.mb-3
            img(src='@/assets/curso/tema2/img39.svg', alt='', style="width: 100px;").m-auto
          p.text-center.mb-0 #[b Reducción relativa de la prevalencia de hipertensión] en un 25 %, o contención de su prevalencia según las circunstancias del país.
      .col-10.col-md-4.col-lg-3.mb-4
        .p-4.bg-c9.h-100
          figure.mb-3
            img(src='@/assets/curso/tema2/img40.svg', alt='', style="width: 100px;").m-auto
          p.text-center.mb-0 #[b Detención del aumento de la diabetes y la obesidad.]
      .col-10.col-md-4.col-lg-3.mb-4
        .p-4.bg-c9.h-100
          figure.mb-3
            img(src='@/assets/curso/tema2/img41.svg', alt='', style="width: 100px;").m-auto
          p.text-center.mb-0 #[b Reducción relativa de la prevalencia del consumo actual de tabaco] en un 30 %.
      .col-10.col-md-4.col-lg-3.mb-4.mb-md-0.mb-lg-4
        .p-4.bg-c9.h-100
          figure.mb-3
            img(src='@/assets/curso/tema2/img42.svg', alt='', style="width: 100px;").m-auto
          p.text-center.mb-0 #[b Tratamiento farmacológico y asesoramiento] (incluido el control de glucemia) para al menos el 50 % de las personas que lo necesitan, a fin de prevenir ataques cardíacos y accidentes cerebrovasculares.
      .col-10.col-md-4.col-lg-3.mb-4.mb-md-0.mb-lg-4
        .p-4.bg-c9.h-100
          figure.mb-3
            img(src='@/assets/curso/tema2/img43.svg', alt='', style="width: 100px;").m-auto
          p.text-center.mb-0 #[b 80 % de disponibilidad de tecnologías básicas y medicamentos esenciales asequibles], incluidos genéricos, en centros públicos y privados para tratar las principales ENT.
      .col-10.col-md-4.col-lg-3
        .p-4.bg-c9.h-100
          figure.mb-3
            img(src='@/assets/curso/tema2/img44.svg', alt='', style="width: 100px;").m-auto
          p.text-center.mb-0 #[b Reducción relativa de la ingesta poblacional media de sal o sodio] en un 30 %.

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
