import { Menu } from '../types'

export const menu: Menu = {
  menuLinks: [
    {
      subMenuLinks: [
        {
          label: 'IronSide Series',
          slug: '/desktops/IronSideSeries',
        },
        {
          label: 'Forge A PC',
          slug: '/desktops/ForgePc',
        },
        {
          label: 'Limited Edition',
          slug: '/desktops/LimitedEdition',
        },
        {
          label:  'Masterworks',
          slug: '/desktops/Masterworks',
        },
        {
          label:  'Partner Collabs',
          slug: '/desktops/PartnerCollabs',
        }, 
      ],
      label: 'Desktops',
      slug: 'desktops',
    },
    {
      label: 'Laptops',
      slug: 'laptops',
    },
    {
      label: 'Cases',
      slug: 'cases',
    },
    {
      label: 'Stores',
      slug: 'stores',
    },
    {
      label: 'About',
      slug: '/about',
    },
  ],
  name: 'Header',
}
