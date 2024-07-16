export async function getServicePages() {
    return [
      {
        url: '/services/body-composition',
        icon: 'fa-chart-line',
        title: 'Valoración de la composición corporal',
        description: 'Análisis detallado de tu composición corporal para diseñar un plan nutricional personalizado.'
      },
      {
        url: '/servicios/nutrition-coaching',
        icon: 'fa-utensils',
        title: 'Asesoría Nutricional',
        description: 'Seguimiento trimestral o mensual para alcanzar tus objetivos nutricionales y deportivos.',
        subtitle: 'Trimestral o Mensual'
      },
      {
        url: '/services/competition-planning',
        icon: 'fa-trophy',
        title: 'Planning para competiciones',
        description: 'Diseño de planes nutricionales específicos para mejorar tu rendimiento en competiciones.'
      },
      {
        url: '/services/nutrition-content',
        icon: 'fa-book',
        title: 'Contenido sobre nutrición deportiva',
        description: 'Acceso a una biblioteca de contenido educativo sobre nutrición para deportistas.'
      }
    ];
  }