import { INavData } from '@coreui/angular';

export const PythonNavItems: INavData[] = [
  {
    name: 'Python',
    url: '/python',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'Popular'
    }
  },
  {
      name: "Python Overview",
      url: '/python'
  },
  {
    name: 'Python Introduction',
    url: 'python/introduction',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Python Introduction',
        url: 'python/introduction'
      }   
    ]
  },
  {
    name: 'Components',
    title: true
  },
  {
    name: 'Python Basic',
    url: '/python/basic',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Python Syntax',
        url: '/python/syntax'
      } ,
      {
        name: 'Python Variables',
        url: '/python/variables'
      },
      {
        name: 'Python Comments',
        url: '/python/comments'
      },
      {
        name: 'Python if-else',
        url: '/python/if-else'
      },
      {
        name: 'Python For Loops',
        url: '/python/loops/for'
      },
      {
        name: 'Python While Loops',
        url: '/python/loops/while'
      },
      {
        name: 'Python Functions',
        url: '/python/functions'
      },
      {
        name: 'Python Arrays',
        url: '/python/arrays'
      }  
    ]
  },
  {
    name: 'Python DataTypes',
    url: '/python/data-types',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Python Numbers',
        url: '/python/data-types/numbers'
      },
      {
        name: 'Python Strings',
        url: '/python/data-types/strings'
      },
      {
        name: 'Python Booleans',
        url: '/python/data-types/booleans'
      },
      {
        name: 'Python Lists',
        url: '/python/data-types/lists'
      },
      {
        name: 'Python Tuples',
        url: '/python/data-types/tuples'
      },
      {
        name: 'Python Sets',
        url: '/python/data-types/sets'
      },
      {
        name: 'Python Dictionaries',
        url: '/python/data-types/dictionaries'
      },
      {
        name: 'Python Casting',
        url: '/python/casting'
      }
    ]
  },

  {
    name: 'Python OOP',
    iconComponent: { name: 'cil-star' },
    url: '/python/oop',
    children: [
      {
        name: 'Python Classes',
        url: '/python/oop/class'
      },
      {
        name: 'Python Inheritance',
        url: '/python/oop/inheritance'
      },
      {
        name: 'Python Polymorphism',
        url: '/python/oop/polymorphism'
      }
    ]
  },
  {
    name: "Advanced",
    title: true
  },
  {
    name: 'Common Modules',
    url: '/python/modules',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'NumPy Module',
        url: '/python/common-modules/numpy'
      },
      {
        name: 'Pandas Module',
        url: '/python/common-modules/pandas'
      },
      {
        name: 'SciPy Module',
        url: '/python/common-modules/scipy'
      },
   
    ]
  },
  {
    name: 'Common Usage ',
    url: '/arrays',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: "Python JSON",
        url: '/python/json'
      },
      {
        name: "Python RegEx",
        url: '/python/regex'
      },
      {
        name: "Python Pip",
        url: '/python/pip'
      }
    ]
  },
 
  {
    name: 'File Handling',
    url: '/python/file',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Python File Handling',
        url: '/python/files/handling'
      },
      {
        name: 'Python Read Files',
        url: '/python/files/read'
      },
      {
        name: 'Python Write/Create Fles',
        url: '/python/files/create-or-write'
      },
      {
        name: 'Python Delete Files ',
        url: '/python/files/delete'
      },
      {
        name: 'DOM Events ',
        url: '/python/dom/events'
      }
    ]
  }
];
