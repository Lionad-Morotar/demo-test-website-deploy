// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/'
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-og-image',
    'nuxt-llms',
    '@nuxtjs/mcp-toolkit'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 1
        }
      }
    }
  },

  experimental: {
    asyncContext: true
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true,
      autoSubfolderIndex: false
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  icon: {
    provider: 'iconify'
  },

  llms: {
    domain: 'https://claude-sharing.vercel.app/',
    title: '如何使用 Claude — 产研分享会',
    description: '面向产品和研发团队的 Claude 使用指南，从认知对齐到场景实战。',
    full: {
      title: '如何使用 Claude — 产研分享会完整文档',
      description: '面向产品（0 AI 经验）和研发（1-2 个月经验）团队的 Claude 使用完整指南。'
    },
    sections: [
      {
        title: '认知篇',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/cognition%' }
        ]
      },
      {
        title: '上手篇',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/getting-started%' }
        ]
      },
      {
        title: '进阶篇',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/advanced%' }
        ]
      },
      {
        title: '实战篇',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/practice%' }
        ]
      },
      {
        title: '协作篇',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/collaboration%' }
        ]
      },
      {
        title: '资源篇',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/resources%' }
        ]
      }
    ]
  },

  mcp: {
    name: 'Claude Sharing'
  }
})
