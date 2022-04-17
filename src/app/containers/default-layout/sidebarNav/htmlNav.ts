import { INavData } from '@coreui/angular';

export const htmlNavItems: INavData[] = [
  {
    name: 'HTML',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Theme'
  },
  {
    name: 'HTML Introduction',
    url: '/html/introduction',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Typography',
    url: '/theme/typography',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-pencil' }
  },
  {
    name: 'Components',
    title: true
  },
  {
    name: 'HTML Commons',
    url: '/notifications',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Elements',
        url: '/notifications/alerts'
      },
      {
        name: 'Attributes',
        url: '/notifications/alerts'
      },
      {
        name: 'Headings',
        url: '/notifications/alerts'
      },
      {
        name: 'Paragraphs',
        url: '/notifications/badges'
      },
      {
        name: 'Comments',
        url: '/notifications/modal'
      },
      {
        name: 'Formatting',
        url: '/notifications/toasts'
      },
      {
        name: 'Images',
        url: '/notifications/alerts'
      },
    ]
  },
  {
    name: 'HTML Forms',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'HTML Forms Overview',
        url: '/base/accordion'
      },
      {
        name: 'HTML Form Attributes',
        url: '/base/breadcrumbs'
      },
      {
        name: 'HTML Form Elements',
        url: '/base/cards'
      },
      {
        name: 'HTML Input Types',
        url: '/base/carousel'
      },
      {
        name: 'HTML Input Attributes',
        url: '/base/collapse'
      },
      {
        name: 'HTML Input Form Attributes',
        url: '/base/list-group'
      },
      // {
      //   name: 'Navs & Tabs',
      //   url: '/base/navs'
      // },
      // {
      //   name: 'Pagination',
      //   url: '/base/pagination'
      // },
      // {
      //   name: 'Placeholder',
      //   url: '/base/placeholder'
      // },
      // {
      //   name: 'Popovers',
      //   url: '/base/popovers'
      // },
      // {
      //   name: 'Progress',
      //   url: '/base/progress'
      // },
      // {
      //   name: 'Spinners',
      //   url: '/base/spinners'
      // },
      // {
      //   name: 'Tables',
      //   url: '/base/tables'
      // },
      // {
      //   name: 'Tabs',
      //   url: '/base/tabs'
      // },
      // {
      //   name: 'Tooltips',
      //   url: '/base/tooltips'
      // }
    ]
  },
  {
    name: 'HTML Media',
    url: '/buttons',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'HTML Media Overview',
        url: '/buttons/buttons'
      },
      {
        name: 'HTML Audio',
        url: '/buttons/button-groups'
      },
      {
        name: 'HTML Audio',
        url: '/buttons/dropdowns'
      },
      {
        name: 'HTML Plugins',
        url: '/buttons/dropdowns'
      },
      {
        name: 'HTML YouTube',
        url: '/buttons/dropdowns'
      }
    ]
  },
  {
    name: 'HTML Examples',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Examples',
        url: '/forms/form-control'
      },
      {
        name: 'Exercises',
        url: '/forms/select'
      },
      // {
      //   name: 'Checks & Radios',
      //   url: '/forms/checks-radios'
      // },
      // {
      //   name: 'Range',
      //   url: '/forms/range'
      // },
      // {
      //   name: 'Input Group',
      //   url: '/forms/input-group'
      // },
      // {
      //   name: 'Floating Labels',
      //   url: '/forms/floating-labels'
      // },
      // {
      //   name: 'Layout',
      //   url: '/forms/layout'
      // },
      // {
      //   name: 'Validation',
      //   url: '/forms/validation'
      // }
    ]
  },
  {
    name: 'HTML References',
    iconComponent: { name: 'cil-star' },
    url: '/icons',
    children: [
      {
        name: 'HTML Tag List',
        url: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'FREE'
        }
      },
      {
        name: 'HTML Attributes',
        url: '/icons/flags'
      },
      {
        name: 'HTML Global Attributes',
        url: '/icons/brands'
      },
      {
        name: 'HTML Browser Support',
        url: '/icons/brands'
      },
      {
        name: 'HTML Events',
        url: '/icons/brands'
      },
      {
        name: 'HTML Colors',
        url: '/icons/brands'
      },
      {
        name: 'HTML Canvas',
        url: '/icons/brands'
      },
      {
        name: 'HTML Doctypes',
        url: '/icons/brands'
      },
      {
        name: 'HTML Url Encode',
        url: '/icons/brands'
      },
      {
        name: 'HTML Lang Codes',
        url: '/icons/brands'
      },
      {
        name: 'HTTP Messages',
        url: '/icons/brands'
      },
      {
        name: 'HTTP Methods',
        url: '/icons/brands'
      }
    ]
  },

  {
    name: 'Widgets',
    url: '/widgets',
    iconComponent: { name: 'cil-calculator' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Extras'
  },
  {
    name: 'Pages',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/login'
      },
      {
        name: 'Register',
        url: '/register'
      },
      {
        name: 'Error 404',
        url: '/404'
      },
      {
        name: 'Error 500',
        url: '/500'
      }
    ]
  },
];
