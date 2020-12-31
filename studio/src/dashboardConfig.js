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
                  buildHookId: '5fedf150ec0760c00aec27af',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-e4vgo98b',
                  apiId: '038cc5fd-0954-472c-a3f7-105f032e2ed3'
                },
                {
                  buildHookId: '5fedf150ff27ad1976bc4371',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-di3evfzy',
                  apiId: '5530ea90-8abe-4bd7-b7d3-92e9be6bc838'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/preyasprathap/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-di3evfzy.netlify.app', category: 'apps' }
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
