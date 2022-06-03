import { INavData } from '@coreui/angular';

export const JavaScriptNavItems: INavData[] = [
  {
    name: 'JavaScript',
    url: '/javascript',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'Popular'
    }
  },
  {
    name: 'JS Syntax',
    title: true
  },
  {
    name: 'JS Introduction',
    url: 'javascript/introduction'
  },
  {
    name: 'JS Where To',
    url: '/javascript/where-to'
  },
  {
    name: 'JS Fundamentals',
    url: '/fundamentals',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'JS Statements',
        url: '/javascript/statements'
      },
      {
        name: 'JS Variables',
        url: '/javascript/variables'
      },
      {
        name: 'JS let',
        url: '/javascript/let'
      },
      {
        name: 'JS const',
        url: '/javascript/const'
      },
      {
        name: 'JS Data Types',
        url: '/javascript/data-types'
      },
      {
        name: 'JS Booleans',
        url: '/javascript/booleans'
      },
      {
        name: 'JS Comparisons',
        url: '/javascript/comparisons'
      },
      {
        name: 'JS If Else',
        url: '/javascript/if-else'
      },
      {
        name: 'JS Switch',
        url: '/javascript/switch'
      },
      {
        name: 'JS Loop For',
        url: '/javascript/loop/for'
      },
      {
        name: 'JS Loop For In',
        url: '/javascript/loop/for-in'
      },
      {
        name: 'JS Loop For Of',
        url: '/javascript/loop/for-of'
      },
      {
        name: 'JS Loop While',
        url: '/javascript/loop/while'
      },
      {
        name: 'JS Break',
        url: '/javascript/break'
      },
    ]
  },
  {
    name: 'JS Data Types',
    url: '/data-types',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'JS Data Types',
        url: '/javascript/data-types'
      },
    ]
  },
  {
    name: 'JS Numbers',
    iconComponent: { name: 'cil-star' },
    url: '/numbers',
    children: [
      {
        name: 'JS Numbers',
        url: '/javascript/numbers'
      },
      {
        name: 'JS Number Methods',
        url: '/javascript/number/methods'
      },
      {
        name: ' JS Number Tasks',
        url: '/javascript/number/tasks'
      }
    ]
  },
  {
    name: 'JS Strings',
    url: '/notifications',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'JS String',
        url: '/javascript/string'
      },
      {
        name: 'JS String Methods',
        url: '/javascript/string/methods'
      },
      {
        name: 'JS String Tasks',
        url: '/javascript/string/tasks'
      }
    ]
  },
  {
    name: 'JS Arrays',
    url: '/arrays',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'JS Arrays',
        url: '/javascript/arrays'
      },
      {
        name: 'JS Arrays Methods',
        url: '/javascript/array/methods'
      },
      {
        name: 'JS Array Tasks',
        url: '/javascript/array/tasks'
      }
    ]
  },
  {
    name: 'JS Functions',
    url: '/functions',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'JS Functions',
        url: '/javascript/functions'
      },
      {
        name: 'Regular Functions',
        url: '/javascript/regular/function'
      },
      {
        name: 'Arrow Functions',
        url: '/javascript/arrow/function'
      },
      {
        name: 'JS Hoisting',
        url: '/javascript/hoisting'
      },
      {
        name: 'JS Functions Tasks',
        url: '/javascript/function/tasks'
      }
    ]
  },
  {
    name: 'JS OOP',
    url: '/oop',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Classes',
        url: '/notifications/alerts'
      },
      {
        name: 'Inheritance',
        url: '/notifications/badges'
      }
    ]
  },
  {
    name: 'JS JSON',
    url: '/json',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'JSON Introduction',
        url: '/javascript/json/intro'
      },
      {
        name: 'JSON Syntax',
        url: '/javascript/json/syntax'
      },
      {
        name: 'JSON vs XML',
        url: '/javascript/json&&xml'
      },
      {
        name: 'JSON Parse',
        url: '/javascript/json/parse'
      },
      {
        name: 'JSON Stringify',
        url: '/javascript/json/stringify'
      },
      {
        name: 'JSON Arrays',
        url: '/javascript/json/arrays'
      },
      {
        name: 'JSON Objects',
        url: '/javascript/json/objects'
      }
    ]
  },
  {
    name: 'JS AJAX',
    url: '/ajax',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'AJAX Intro',
        url: '/javascript/ajax/intro'
      },
      {
        name: 'AJAX XMLHttp',
        url: '/javascript/ajax/xmlhttp'
      },
      {
        name: 'AJAX Request',
        url: '/javascript/ajax/request'
      },
      {
        name: 'AJAX Response',
        url: '/javascript/ajax/response'
      },
      {
        name: 'AJAX Tasks',
        url: '/javascript/ajax/tasks'
      }
    ]
  },

  // JS DOM
  {
    title: true,
    name: 'JS DOM'
  },
  {
    name: 'JS DOM',
    url: '/dom',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'DOM Intro',
        url: '/javascript/dom/intro'
      },
      {
        name: 'DOM Methods',
        url: '/javascript/dom/methods'
      },
      {
        name: 'DOM Document',
        url: '/javascript/dom/document'
      },
      {
        name: 'DOM Elements ',
        url: '/javascript/dom/elements'
      },
      {
        name: 'DOM Events ',
        url: '/javascript/dom/events'
      },
      {
        name: 'DOM Event Listeners ',
        url: '/javascript/dom/event/listener'
      }
    ]
  }
];
