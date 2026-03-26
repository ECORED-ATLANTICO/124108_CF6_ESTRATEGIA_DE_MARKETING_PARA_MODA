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
        download: 'downloads/dist.pdf',
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
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Canales de Comunicación',
      significado:
        'Soporte por el cual se emite el mensaje entre el emisor y el receptor en el proceso de comunicación, puede ser la radio, tv, prensa, internet, email, etc.',
    },
    {
      termino: 'Clientes',
      significado:
        'Persona que hace uso de un producto o servicio, el cual paga por este.',
    },
    {
      termino: 'Fidelización',
      significado:
        'Dentro del marketing, se define como el hecho de la lealtad que tiene un cliente con una marca.',
    },
    {
      termino: 'Google Analytics',
      significado:
        'Herramienta usada para analizar datos en un sitio web y conocer mejor a los clientes.',
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
      termino: 'Social media',
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
        'Agencia Nacional de Evaluación de la Calidad y Acreditación – ANECA. (s. f.). <em>Plan de mejoras: herramienta de trabajo.</em>',
      link:
        'http://www.uantof.cl/public/docs/universidad/direccion_docente/15_elaboracion_plan_de_mejoras.pdf',
    },
    {
      referencia:
        'AITECO Consultores S. L. (2019). <em>AITECO Consultores: Planes de Mejora.</em>',
      link: 'https://www.aiteco.es/calidad/plan-de-mejora/',
    },
    {
      referencia:
        'AQU Catalunya (2005). <em>La calidad, garantía de mejora. Marco general para el establecimiento, el seguimiento y la revisión de los planes de mejora.</em>',
      link: 'https://www.aqu.cat/doc/doc_40159984_1.pdf',
    },
    {
      referencia:
        'Castillo, A. y Ponce, D. (2015). <em>Comunicación de Crisis 2.0.</em> Madrid, España: Editorial Fragua.',
    },
    {
      referencia:
        'Da Silva, D. (2020). <em>Protocolo de atención y servicio al cliente: ¿qué es, por qué es importante para tu empresa, ¿cómo hacerlo y cuáles son sus ventajas? Web Content & SEO Associate, LATAM.</em>',
      link:
        'https://www.zendesk.com.mx/blog/protocolo-de-atencion-al-cliente/#:%7E:text=%E2%80%9CUn%20protocolo%20de%20atenci%C3%B3n%20es,qu%C3%A9%20es%20una%20buena%20atenci%C3%B3n%E2%80%9D.',
    },
    {
      referencia:
        'Druker, P. (1990). <em>El ejecutivo eficaz.</em> Buenos Aires: Editorial Sudamericana.',
    },
    {
      referencia:
        'Emprendedores. (2020). <em>Emprendedores: Pautas para elaborar un informe eficaz, comprensible y bien presentado.</em>',
      link:
        'https://www.emprendedores.es/gestion/como-elaborar-un-documento-eficaz-comprensible-y-bien-presentado/',
    },
    {
      referencia:
        'Enrique, A. (2017). <em>La comunicación empresarial en situación de crisis.</em> {Tesis de doctorado no publicada}. Universidad Autónoma de Barcelona.',
      link: 'https://ddd.uab.cat/pub/tesis/2007/tdx-0523108-150642/aej1de1.pdf',
    },
    {
      referencia:
        'Maldonado, S. (s. f.). <em>Analítica Web. Medir para triunfar.</em>',
      link:
        'https://books.google.es/books?hl=es&lr=&id=8oqgwKf7z2kC&oi=fnd&pg=PA15&dq=Anal%C3%ADtica+Web+2.0&ots=NIerrM0UgY&sig=dUtx-OU3guF-0F7NERHq-Vhun7Q#v=onepage&q=Anal%C3%ADtica%20Web%202.0&f=false',
    },
    {
      referencia:
        'Morales, M. (2010). <em>Analítica Web para empresas: Arte, ingenio y anticipación.</em>',
      link:
        'https://books.google.com.mx/books?id=j7QtAwAAQBAJ&printsec=frontcover#v=onepage&q&f=false',
    },
    {
      referencia:
        'Observatorio Digital (2020). <em>Observatorio Digital: Analítica Digital: mejores herramientas de analítica digital de 2020.</em>',
      link: 'https://observatorio.digital/blog/analitica-digital-2/#anal',
    },
    {
      referencia:
        'Pérez, P. y García, F. (2010). <em>La comunicación de crisis como elemento clave de la comunicación empresarial.</em> Revista ICONO, 14, 2010, Año 8, Vol. 2, pp. 42-56. ISSN 1697-8293. Madrid (España).',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=3301612',
    },
    {
      referencia:
        'Proaño, D.; Gisbert, V. y Pérez, E. (2017). <em>3C Empresa: investigación y pensamiento crítico.</em> {E. Especial, Ed.}. DOI:',
      link: 'http://dx.doi.org/10.17993/3cemp.2017.especial.50-56/',
    },
    {
      referencia:
        'Tomas. D (2018). <em>Analítica web y 5 herramientas para medir tus resultados online.</em> Ciberclik {Blog}.',
      link:
        'https://www.cyberclick.es/numerical-blog/analitica-web-y-5-herramientas-para-medir-tus-resultados-online#:~:text=La%20anal%C3%ADtica%20web%20consiste%20en,con%20%C3%A9l%20de%20diversas%20maneras',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
