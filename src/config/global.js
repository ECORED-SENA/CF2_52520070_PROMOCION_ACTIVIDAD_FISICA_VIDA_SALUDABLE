export default {
  global: {
    componenteFormativo: 'Factores de riesgo, enfermedades y ejercicio físico',
    descripcionCurso:
      'El componente formativo trata sobre la promoción de la actividad física y estilos de vida saludables para prevenir enfermedades no transmisibles como cardiovasculares, diabetes, cáncer y respiratorias crónicas. Describe factores de riesgo modificables como tabaquismo, alcoholismo, mala alimentación e inactividad física, y proporciona recomendaciones para implementar actividad física como medida preventiva en poblaciones de riesgo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Factores de riesgo modificables',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'La actividad física como factor protector de enfermedades no transmisibles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Enfermedades cardiovasculares',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Diabetes mellitus',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Enfermedades respiratorias crónicas y actividad física',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Cáncer',
            hash: 't_2_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/52520070_CF02_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Factores de riesgo modificables.',
      referencia:
        'Mutual de Seguridad CCh. (2014). Dra María José Saul - Riesgos Cardiovasculares: Factores Modificables y No Modificables. [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=zB-fwl-wEdo&ab_channel=MutualdeSeguridadCChC',
    },
    {
      tema:
        'La actividad física como factor protector de enfermedades no transmisibles.',
      referencia:
        'UGRmedia. (2016). #aCienciaCerca - 28. Actividad física y su relación con la salud y el cerebro, por Francisco Ortega. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=2ldDvFbm7qc&ab_channel=UGRmedia',
    },
    {
      tema: 'Enfermedades cardiovasculares.',
      referencia: 'OMS. (2021). Enfermedades cardiovasculares.',
      tipo: 'Documento',
      link:
        'https://www.who.int/es/news-room/fact-sheets/detail/cardiovascular-diseases-(cvds)#:~:text=Las%20enfermedades%20cardiovasculares%20son%20un%20grupo',
    },
    {
      tema: 'Diabetes <i>mellitus</i>.',
      referencia:
        'Clínica Universidad de Navarra. (2024). Diabetes mellitus. Tipos, síntomas, diagnóstico y tratamiento. Clínica Universidad de Navarra. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6GocZ96xomU&ab_channel=Mediversia',
    },
    {
      tema: 'Enfermedades respiratorias crónicas y actividad física.',
      referencia:
        'MinSalud. (2017). ABECÉ. Tómate la vida con un segundo aire. Estrategia para la prevención y control de las enfermedades respiratorias crónicas.',
      tipo: 'Documento',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ENT/abc-estrategia-prevn-enfer-resp-cronica-2017.pdf',
    },
    {
      tema: 'Cáncer.',
      referencia:
        'Academia Play. (2017). ¿Qué es la enfermedad del Cáncer?.  [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=74vGtHSfCT0&ab_channel=AcademiaPlay',
    },
  ],
  glosario: [
    {
      termino: 'Actividad física',
      significado:
        'cualquier movimiento corporal producido por los músculos esqueléticos que requiere gasto de energía.',
    },
    {
      termino: 'Cardiopatía coronaria',
      significado:
        'enfermedad de los vasos sanguíneos que irrigan el músculo cardiaco, que puede llevar a ataques cardíacos.',
    },
    {
      termino: 'Diabetes <i>mellitus</i>',
      significado:
        'enfermedad crónica caracterizada por altos niveles de glucosa en sangre.',
    },
    {
      termino: 'Enfermedades no transmisibles',
      significado:
        'enfermedades crónicas que no se contagian de persona a persona, como las cardiovasculares, cáncer, diabetes y enfermedades respiratorias.',
    },
    {
      termino: 'Hipertensión',
      significado:
        'condición de presión arterial elevada que aumenta el riesgo de enfermedades cardíacas y otras ENT.',
    },
    {
      termino: 'Inactividad física',
      significado:
        'falta de actividad física suficiente para cumplir las recomendaciones mínimas de salud, lo que aumenta el riesgo de desarrollar ENT.',
    },
    {
      termino: 'Obesidad',
      significado:
        'exceso de grasa corporal que aumenta el riesgo de enfermedades como la diabetes tipo 2 y enfermedades cardiovasculares.',
    },
    {
      termino: 'Rehabilitación pulmonar',
      significado:
        'programa multidisciplinario diseñado para mejorar la capacidad de ejercicio y la calidad de vida en personas con enfermedades respiratorias crónicas.',
    },
    {
      termino: 'Tabaquismo',
      significado:
        'consumo de tabaco que constituye un factor de riesgo importante para varias enfermedades, incluidas las ENT.',
    },
    {
      termino: 'Trombosis venosa profunda',
      significado:
        'formación de coágulos de sangre en las venas profundas, generalmente en las piernas, que pueden causar embolias si se desplazan hacia los pulmones.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alemán, J. A., de Baranda Andujar, P. S., & Ortín, E. J. O. (2014). <i>Guía para la prescripción de ejercicio físico en pacientes con riesgo cardiovascular</i>. SEH-LELHA.',
      link: '',
    },
    {
      referencia:
        'Doyle, C., Kushi, L. H., Byers, T., Courneya, K. S., Demark-Wahnefried, W., Grant, B., et al. (2006). Nutrition and physical activity during and after cancer treatment: an American Cancer Society guide for informed choices. <i>CA: A Cancer Journal for Clinicians</i>, 56(6), 323-353.',
      link: '',
    },
    {
      referencia:
        'Duperly, J., Acevedo, A., Becerra, H., & Cardona, A. F. <i>Cáncer y ejercicio</i>.',
      link: '',
    },
    {
      referencia:
        'Kushi, L. H., Byers, T., Doyle, C., Bandera, E. V., McCullough, M., Gansler, T., & Thun, M. J. (2006). American Cancer Society guidelines on nutrition and physical activity for cancer prevention: Reducing the risk of cancer with healthy food choices and physical activity. <i>CA: A Cancer Journal for Clinicians</i>, 56(5), 254-281.',
      link: '',
    },
    {
      referencia:
        'León, A. S., Casal, D., & Jacobs Jr., D. (1996). Effects of 2,000 kcal per week of walking and stair climbing on physical fitness and risk factors for coronary heart disease. <i>Journal of Cardiopulmonary Rehabilitation and Prevention</i>, 16(3), 183-192.',
      link: '',
    },
    {
      referencia:
        'Lim, S. S., Vos, T., Flaxman, A. D., Danaei, G., Shibuya, K., Adair-Rohani, H., et al. (2012). A comparative risk assessment of burden of disease and injury attributable to 67 risk factors and risk factor clusters in 21 regions, 1990-2010: A systematic analysis for the Global Burden of Disease Study 2010. <i>The Lancet</i>, 380(9859), 2224-2260.',
      link: '',
    },
    {
      referencia:
        'Márquez Rosa, S., Rodríguez Ordax, J., & De Abajo Olea, S. (2006). Sedentarismo y salud: Efectos beneficiosos de la actividad física. <i>Apunts</i>, 83.',
      link: '',
    },
    {
      referencia:
        'Mozaffarian, D., Fahimi, S., Singh, G. M., Micha, R., Khatibzadeh, S., Engell, R. E., Lim, S., et al. (2014). Global sodium consumption and death from cardiovascular causes. <i>The New England Journal of Medicine</i>, 371(7), 624-634. ',
      link: 'https://doi.org/10.1056/NEJMoa1304127',
    },
    {
      referencia:
        'National Institute for Health and Clinical Excellence. (2009). <i>Type 2 diabetes: The management of type 2 diabetes</i>. (NICE Clinical Guideline 87).',
      link: '',
    },
    {
      referencia:
        'OMS. (2011). <i>Informe sobre la situación mundial de las enfermedades no transmisibles 2010: Resumen de orientación</i>.',
      link: '',
    },
    {
      referencia: 'OMS. (2023). <i>Enfermedades no transmisibles</i>. ',
      link:
        'https://www.who.int/es/news-room/fact-sheets/detail/noncommunicable-diseases',
    },
    {
      referencia:
        'Organización Panamericana de la Salud. (2014). <i>Plan de acción para la prevención y el control de las enfermedades no transmisibles en las Américas 2013-2019</i>. Washington, DC: OPS.',
      link: '',
    },
    {
      referencia:
        'Panel, E. (2010). American College of Sports Medicine roundtable on exercise guidelines for cancer survivors. <i>Journal of the American College of Sports Medicine</i>, 1409-1426.',
      link: '',
    },
    {
      referencia: 'Real Academia Española. (2024). Riesgo. ',
      link: 'https://dle.rae.es/riesgo',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Leidy del Pilar Aguirre Caicedo',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Risaralda',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramírez Benitez',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jhon Jairo Urueta Álvarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Nombre',
        //  cargo: 'Animador y productor audiovisual',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        //{
        //  nombre: 'Luis Gabriel Urueta Alvarez',
        //  cargo: 'Validador y vinculador de recursos educativos digitales',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
