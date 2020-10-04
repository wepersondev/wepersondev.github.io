module.exports = {
  '/wedev/': [
    '',
    'prologue/',
    {
      title: 'Tech Stack',
      path: '/wedev/tech-stack/',
      collapsable: false,
      children: [
        '/wedev/tech-stack/language/',
        { title: 'Test', collapsable: false },
        '/wedev/tech-stack/frontend/',
        '/wedev/tech-stack/hybrid/',
        '/wedev/tech-stack/framework/'
      ]
    }
  ],
  '/guides/': [
    '',
    {
      title: 'Conventions',
      path: '/guides/conventions/',
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
    'git/',
    'npm/',
    'ssh/',
    'yarn/'
  ],
  '/careers/': [
    ''
  ]
}
