export type Menu = {
  name: string
  title: string
  link: string
  icon: string | JSX.Element | null
  children: {
    name: string
    title: string
    link: string
  } [] | null
}