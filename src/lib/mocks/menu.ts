import { Menu } from '../types'

export const menu: Menu = {
  menuLinks: [
    {
      subMenuLinks: [
        {
          label: 'IronSide Series',
          description:'Our signature preconfigured PCs.',
          slug: '/desktops/IronSideSeries',
        },
        {
          label: 'Forge A PC',
          slug: '/desktops/ForgePc',
          description: 'Pick your parts and we’ll build it.'
        },
        {
          label: 'Limited Edition',
          slug: '/desktops/LimitedEdition',
          description:'Fully custom, one of a kind builds.'
        },
        {
          label:  'Masterworks',
          slug: '/desktops/Masterworks',
          description:'For your creative endeavors.'
        },
        {
          label:  'Bento Box',
          slug: '/desktops/BentoBox',
          description:'Themed, limited quantity builds.'
        }, 
      ],
      label: 'Desktops',
      slug: 'desktops',
      backgroundImage: 'https://cdn11.bigcommerce.com/s-gbo8rdqwz4/images/stencil/original/image-manager/desktop.jpg',
    },
    {
      label: 'Laptops',
      slug: 'laptops',
    
    },
    {
      subMenuLinks: [
        {
          label: 'Juicebox',
          description:'Our signature preconfigured PCs.',
          slug: '/desktops/Juicebox',
        },
        {
          label: 'Tokyo Dream',
          slug: '/desktops/TokyoDream',
          description: 'Pick your parts and we’ll build it.'
        },
        {
          label: 'Yggdrasil',
          slug: '/desktops/Yggdrasil',
          description:'Fully custom, one of a kind builds.'
        },
        {
          label:  'Y2k',
          slug: '/desktops/Y2k',
          description:'For your creative endeavors.'
        },
      ],
      label: 'Cases',
      slug: 'cases',
      backgroundImage: 'https://cdn11.bigcommerce.com/s-gbo8rdqwz4/images/stencil/original/image-manager/case.jpg'
    },
    {
      subMenuLinks: [
        {
          label: 'Gaming Gear',
          description:'Our signature preconfigured PCs.',
          slug: '/stores/GamingGear',
        },
        {
          label: 'Merch',
          slug: '/stores/Merch',
          description: 'Pick your parts and we’ll build it.'
        },
      ],
      label: 'Stores',
      slug: 'stores',
      backgroundImage: 'https://cdn11.bigcommerce.com/s-gbo8rdqwz4/images/stencil/original/image-manager/stores.jpg'
    },
    {
      label: 'About',
      slug: '/about',
    },
  ],
  name: 'Header',
}