import { INavData } from '@coreui/angular';

export const CsharpNavItems: INavData[] = [
  {
    name: 'C#',
    url: '/csharp',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'Popular'
    }
  },
  {
      name: "C# Overview",
      url: '/csharp'
  },
  {
    name: 'C# Introduction',
    url: 'C#/introduction',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'C# Introduction',
        url: 'C#/introduction'
      }   
    ]
  },
  {
    name: 'Components',
    title: true
  },
  {
    name: 'C# Basic',
    url: '/csharp/basic',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'C# Syntax',
        url: '/csharp/syntax'
      } ,
      {
        name: 'C# Comments',
        url: '/csharp/comments'
      },
      {
        name: 'C# if-else',
        url: '/csharp/if-else'
      },
      {
        name: 'C# For Loops',
        url: '/csharp/loops/for'
      },
      {
        name: 'C# While Loops',
        url: '/csharp/loops/while'
      },
      {
        name: 'C# Break',
        url: '/csharp/break'
      },
      {
        name: 'C# Continue',
        url: '/csharp/continue'
      }  
    ]
  },
  {
    name: 'C# DataTypes',
    url: '/csharp/data-types',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'C# Integers',
        url: '/csharp/data-types/integers'
      },
      {
        name: 'C# Strings',
        url: '/csharp/data-types/strings'
      },
      {
        name: 'C# Booleans',
        url: '/csharp/data-types/booleans'
      },
      {
        name: 'C# Doubles',
        url: '/csharp/data-types/doubles'
      },
      {
        name: 'C# Chars',
        url: '/csharp/data-types/chars'
      }
    ]
  },

  
  {
    name: "Advanced",
    title: true
  },

  {
    name: 'C# OOP',
    iconComponent: { name: 'cil-star' },
    url: '/csharp/oop',
    children: [
      {
        name: 'C# Classes',
        url: '/csharp/oop/class'
      },
      {
        name: 'C# Class Members',
        url: '/csharp/oop/class/members'
      },
      {
        name: 'C# Class constructor',
        url: '/csharp/oop/class/constructors'
      },
      {
        name: 'C# Access Modifiers',
        url: '/csharp/oop/access-modifiers'
      },
      {
        name: 'C# Inheritance',
        url: '/csharp/oop/inheritance'
      },
      {
        name: 'C# Polymorphism',
        url: '/csharp/oop/polymorphism'
      },
      {
        name: 'C# Abstraction',
        url: '/csharp/oop/abstarction'
      },
      {
        name: 'C# Interface',
        url: '/csharp/oop/interface'
      },
    ]
  }
];
