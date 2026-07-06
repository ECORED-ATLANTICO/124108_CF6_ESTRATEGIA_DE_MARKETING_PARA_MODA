export default {
  global: {
    Name: 'Protocolos de atención',
    Description:
      'La comunicación digital generó un nuevo escenario de atención al cliente, transformando la manera como las empresas se comunican y recogen la analítica de los clientes, lo que permite la generación de productos y solución de necesidades de estos. En este sentido, el presente componente de formación nos aproxima a la información y analítica como un creador de valor para la empresa y el cliente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
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
        titulo: 'Protocolos de atención y respuesta para redes sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Ventajas de un protocolo de atención al cliente',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Dimensiones del protocolo de atención al cliente',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Manejo de crisis en atención al cliente en redes sociales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Herramientas para analítica e informes de resultados',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Elaboración e informe descriptivo del producto',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Elaboración e interpretación de gráficos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Características de los gráficos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Tipos de analíticas',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Tipos de métricas',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Elaboración de informes con proyección de mejora',
        desarrolloContenidos: true,
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
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/124108_CF06_DU.pdf',
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
  // complementario: [
  //   {
  //     tema: '',
  //     referencia: '',
  //     tipo: '',
  //     link: '',
  //   },
  // ],
  glosario: [
    {
      termino: 'Canales de comunicación',
      significado:
        'Soporte por el cual se emite el mensaje entre el emisor y el receptor en el proceso de comunicación, puede ser la radio, tv, prensa, internet, <em>email</em>, etc.',
    },
    {
      termino: 'Clientes',
      significado:
        'Persona que hace uso de un producto o servicio, el cual paga por este.',
    },
    {
      termino: 'Fidelización',
      significado:
        'Dentro del <em>marketing</em>, se define como el hecho de la lealtad que tiene un cliente con una marca.',
    },
    {
      termino: 'Google Analytics 4 (GA4)',
      significado:
        'herramienta de medición de sitios web y aplicaciones que permite analizar eventos, audiencias, conversiones y comportamiento de los usuarios. ',
    },
    {
      termino: 'Protocolo',
      significado:
        'Conjunto de reglas de formalidad y establecimiento de ruta de seguimiento para una situación o manejo de un elemento.',
    },
    {
      termino: 'Redes sociales',
      significado:
        'Estructuras formadas en Internet por personas u organizaciones que se conectan a partir de intereses o valores comunes.',
    },
    {
      termino: '<em>Social media</em>',
      significado:
        'Plataformas de comunicación en línea donde el contenido es creado por los propios usuarios mediante el uso de la Web 2.0, que facilitan la edición, publicación e intercambio de información.',
    },
    {
      termino: 'Tendencia',
      significado: 'Corriente que se orienta a determinada dirección.',
    },
    {
      termino: 'Web',
      significado:
        'Conjunto de información que se encuentra en una dirección determinada de internet.',
    },
  ],
  referencias: [
    {
      referencia:
        'Agencia Nacional de Evaluación de la Calidad y Acreditación. (2021). <em>Guía para la elaboración de un plan de mejoras.</em> ANECA.',
      link: 'https://www.aneca.es/',
    },
    {
      referencia: 'AITECO Consultores. (2019). <em>Planes de mejora.</em>',
      link: 'https://www.aiteco.com/calidad/plan-de-mejora/',
    },
    {
      referencia:
        'Agència per a la Qualitat del Sistema Universitari de Catalunya. (2005). <em>La calidad, garantía de mejora: Marco general para el establecimiento, el seguimiento y la revisión de los planes de mejora.</em>',
      link: 'https://www.aqu.cat/doc/doc_40159984_1.pdf',
    },
    {
      referencia:
        'Castillo Esparcia, A., & Ponce, D. (2015). <em>Comunicación de crisis 2.0.</em> Editorial Fragua. ISBN: 978-84-7074-666-6',
    },
    {
      referencia:
        'Congreso de Colombia. (2012, 17 de octubre). <em>Ley 1581 de 2012. Por la cual se dictan disposiciones generales para la protección de datos personales.</em> Diario Oficial.',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=1684507',
    },
    {
      referencia:
        'Congreso de Colombia. (2023, 10 de julio). <em>Ley 2300 de 2023. Por medio de la cual se establecen medidas que protejan el derecho a la intimidad de los consumidores.</em> Diario Oficial.',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=30046853',
    },
    {
      referencia:
        'Da Silva, D. (2020). <em>Protocolo de atención y servicio al cliente: Qué es, por qué es importante para tu empresa, cómo hacerlo y cuáles son sus ventajas.</em> Zendesk.',
      link:
        'https://www.zendesk.es/blog/customer-service/protocolo-de-atencion-al-cliente/',
    },
    {
      referencia:
        'Drucker, P. F. (1990). <em>El ejecutivo eficaz.</em> Editorial Sudamericana.',
    },
    {
      referencia:
        'Emprendedores. (2020). <em>Pautas para elaborar un informe eficaz, comprensible y bien presentado.</em>',
      link:
        'https://emprendedores.es/gestion/como-elaborar-un-documento-eficaz-comprensible-y-bien-presentado/',
    },
    {
      referencia:
        'Enrique Jiménez, A. M. (2007). <em>La comunicación empresarial en situaciones de crisis: Estudio de caso: La crisis de Fontaneda</em> (Tesis doctoral, Universitat Autònoma de Barcelona). Dipòsit Digital de Documents de la UAB.',
      link: 'https://hdl.handle.net/10803/4142',
    },
    {
      referencia:
        'Escuela de Negocios y Dirección. (7 de mayo de 2026). <em>Analítica Web: qué es y mejores herramientas.</em> ENyD Blog.',
      link:
        'https://www.escueladenegociosydireccion.com/blog/marketing/herramientas-analitica-web-marketing-digital/',
    },
    {
      referencia:
        'Maldonado, S. (2010). <em>Analítica web: Medir para triunfar.</em> ESIC Editorial.',
      link: 'https://books.google.com/books?id=27h3ClYpEM0C',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2015, 26 de mayo). <em>Decreto 1074 de 2015. Por medio del cual se expide el Decreto Único Reglamentario del Sector Comercio, Industria y Turismo.</em> Diario Oficial.',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=30019935',
    },
    {
      referencia:
        'Morales Martínez, M. (2011). <em>Analítica web para empresas: Arte, ingenio y anticipación.</em> Editorial UOC.',
      link: 'https://books.google.com/books?id=v9BhAQAACAAJ',
    },
    {
      referencia:
        'Observatorio Digital (2020). <em>Observatorio Digital: Analítica Digital: mejores herramientas de analítica digital de 2020.</em>',
      link: 'https://observatorio.digital/blog/analitica-digital-2/#anal',
    },
    {
      referencia:
        'Proaño Villavicencio, D. X., Gisbert Soler, V., & Pérez Bernabeu, E. (2017). <em>Metodología para elaborar un plan de mejora continua.</em> 3C Empresa: Investigación y pensamiento crítico, edición especial, 50–56.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=6300064',
    },
    {
      referencia:
        'Saura Pérez, P., & García García, F. (2010). <em>La comunicación de crisis como elemento clave de la comunicación empresarial.</em> Icono14, 8(2), 42–56.',
      link: 'https://icono14.net/ojs/index.php/icono14/article/view/245',
    },
    {
      referencia:
        'Tomás, D. (2018). <em>Analítica web y 5 herramientas para medir tus resultados online.</em> Cyberclick.',
      link:
        'https://www.cyberclick.es/numerical-blog/analitica-web-y-5-herramientas-para-medir-tus-resultados-online',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Nacional Ecosistema de Recursos Educativos Digitales (RED) - Profesional 06',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Maria Camila Álvarez',
          cargo: 'Contratista diseño curricular',
          centro:
            'Centro de Formación en Diseño, Confección y Moda Regional - Antioquia',
        },
        {
          nombre: 'Liliana Ceballos',
          cargo: 'Contratista diseño curricular',
          centro:
            'Centro de Formación en Diseño, Confección y Moda Regional - Antioquia',
        },
        {
          nombre: 'Cristian Metaute Medina',
          cargo: 'Diseñador instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jesus Antonio Vecino Valero',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Carlos Andrés Diaz Pinto',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y Servicios Regional - Tolima',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Víctor Cardenas',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Camilo Villamizar',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Jose Tang',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Maria Camila Ovalle',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
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
}
