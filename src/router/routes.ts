import { SCREEN } from './screen'
const getView = (path: string) => {
  return () => import(`@/views/${path}.vue`)
}

export const routes = [
  {
    path: '/internal-error',
    name: 'Internal Server Error',
    component: getView('InternalError')
  },
  {
    path: '/not-found',
    name: 'Not Found',
    component: getView('NotFound')
  },
  {
    path: '/:pathMatch(.*)*',
    component: getView('NotFound')
  },
  {
    path: '/',
    component: () => import('@/layouts/NewLayout.vue'),
    children: [
      {
        path: '',
        name: 'HomePage',
        component: getView('HomePage')
      },
      {
        path: 'people',
        children: [
          {
            path: 'ourstory',
            name: 'ourstory',
            component: () => import(`@/views/page/ourstory.vue`)
          },
          {
            path: 'careers',
            name: 'careers',
            component: () => import(`@/views/page/careers.vue`)
          }
        ]
      },
      {
        path: 'apply',
        children: [
          {
            path: 'notice',
            name: 'notice',
            component: () => import(`@/views/page/apply-notice.vue`)
          },
          {
            path: 'faq',
            name: 'faq',
            component: () => import(`@/views/page/faq.vue`)
          },
          {
            path: 'qa',
            name: 'qa',
            component: () => import(`@/views/page/qa.vue`)
          }
        ]
      },
      {
        path: 'program',
        children: [
          {
            path: 'receive',
            name: 'receive',
            children: [
              {
                path: '',
                name: '',
                component: () => import(`@/views/page/program/receive.vue`)
              },
              {
                path: 'system',
                name: 'system',
                component: () => import(`@/views/page/program/educational-system.vue`)
              },
              {
                path: 'growstep',
                name: 'growstep',
                component: () => import(`@/views/page/program/grow-step.vue`)
              },
              {
                path: 'benifits',
                name: 'benifits_std',
                component: () => import(`@/views/page/program/benefits.vue`)
              }
            ]
          },
          {
            path: 'softeer',
            name: 'softeer',
            component: () => import(`@/views/page/program/softeer.vue`)
          },
          {
            path: 'contract',
            children: [
              {
                path: '',
                name: '',
                component: () => import(`@/views/page/program/contract.vue`)
              },
              {
                path: 'introduce',
                name: 'introduce',
                component: () => import(`@/views/page/program/introduce.vue`)
              },
              {
                path: 'benifits',
                name: 'benifits_contract',
                component: () => import(`@/views/page/program/benefits-contract.vue`)
              },
              {
                path: 'department',
                name: 'department',
                component: () => import(`@/views/page/program/contract-department.vue`)
              },
              {
                path: 'process',
                name: 'process',
                component: () => import(`@/views/page/program/process-department.vue`)
              }
            ]
          },
          {
            path: 'about',
            children: [
              {
                path: '',
                name: '',
                component: () => import(`@/views/page/program/about-us.vue`)
              },
              {
                path: 'history',
                name: 'history',
                component: () => import(`@/views/aboutUs/AboutHistory.vue`)
              },
              {
                path: 'map',
                name: 'map',
                component: () => import(`@/views/aboutUs/AboutMap.vue`)
              }
            ]
          }
        ]
      }
    ]
  }
]
