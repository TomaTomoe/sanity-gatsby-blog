export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f6b3ac80c38060efd4ef174',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-8y4s8ige',
                  apiId: '36fdde2f-847f-40ab-880e-63975f9f687c'
                },
                {
                  buildHookId: '5f6b3ac8a45deb070e94094f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-vn1diep7',
                  apiId: '75022c9b-8e0c-40d8-bb19-2ff164ee6aef'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TomaTomoe/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-vn1diep7.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
