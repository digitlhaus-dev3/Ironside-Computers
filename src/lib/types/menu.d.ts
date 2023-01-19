export interface MenuLinks {
  subMenuLinks?: MenuLinks[]
  label: string
  slug: string
  description?: any
  backgroundImage?:any
}

export interface Menu {
  name: string
  menuLinks: MenuLinks[]
}