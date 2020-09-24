module.exports = {
  '/we-dev/': [
    '',
    'overview/',
    {
      title: 'Tech Stack',
      path: '/we-dev/tech-stack/',
      collapsable: false,
      children: [
        '/we-dev/tech-stack/language/',
        { title: 'Test', collapsable: false },
        '/we-dev/tech-stack/frontend/',
        '/we-dev/tech-stack/hybrid/',
        '/we-dev/tech-stack/framework/'
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
