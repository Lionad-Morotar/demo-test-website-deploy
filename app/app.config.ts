export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate'
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    }
  },
  seo: {
    siteName: '如何使用 Claude — 产研分享会'
  },
  header: {
    title: '如何使用 Claude',
    to: '/',
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: []
  },
  footer: {
    credits: `如何使用 Claude — 产研分享会 • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: []
  },
  toc: {
    title: '目录',
    bottom: {
      title: '相关链接',
      edit: '',
      links: []
    }
  }
})
