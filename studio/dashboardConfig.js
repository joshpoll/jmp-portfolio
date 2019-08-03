export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d45f50e256d81ab787dbf18',
                  title: 'Sanity Studio',
                  name: 'jmp-portfolio-studio',
                  apiId: 'ce57d254-f915-4024-870c-5f11a388365d'
                },
                {
                  buildHookId: '5d45f50e32fe9fe99c39b929',
                  title: 'Portfolio Website',
                  name: 'jmp-portfolio',
                  apiId: 'fe9fa6cb-0d62-4dc4-a1b7-48f90c9c7bb3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joshpoll/jmp-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://jmp-portfolio.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
