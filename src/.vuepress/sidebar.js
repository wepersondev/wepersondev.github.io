module.exports = {
  '/wedev/': [
    '',
    'prologue/',
    'tech-stack-overview/',
    'language/',
    {
      title: 'FRONTEND',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        '/wedev/frontend/framework/',
        '/wedev/frontend/hybrid-web-app/',
        '/wedev/frontend/csr-ssr-spa-mpa-pwa/',
        '/wedev/frontend/css/',
        '/wedev/frontend/linting/',
        '/wedev/frontend/bundling-transpiler/',
        '/wedev/frontend/ui-ux-framework/'
      ]
    },
    {
      title: 'BACKEND',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        '/wedev/backend/framework/',
        '/wedev/backend/cloud-service/',
        '/wedev/backend/serverless/',
        '/wedev/backend/database/',
        '/wedev/backend/api/',
        '/wedev/backend/realtime/'
      ]
    },
    {
      title: 'DEVOPS',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        '/wedev/devops/scm/',
        '/wedev/devops/ci-cd/',
        '/wedev/devops/docker/'
      ]
    },
    {
      title: 'MISC',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        '/wedev/misc/docs/',
      ]
    },
    '/wedev/tech-stack-recap/'
  ],
  '/guides/': [
    '',
    {
      title: 'CONVENTIONS',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        '/guides/conventions/general/',
        '/guides/conventions/docs/',
        '/guides/conventions/html/',
        '/guides/conventions/css/'
      ]
    }
  ],
  '/cheat-sheet/': [
    '',
    'firebase/',
    'git/',
    'gulp/',
    'npm/',
    'ssh/',
    'vue/',
    'yarn/'
  ],
  '/careers/': [
    ''
  ]
}
