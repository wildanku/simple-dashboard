import { CaretRight } from "@phosphor-icons/react"
import { useLocation, useNavigate } from "react-router-dom"

type Props = {
  menu?: {
    title: string
    link: string
  }[] | null
}

type ItemListProps = {
  item: string
  link?: string
  active?: boolean
}

const Breadcrumb = ({menu}: Props) => {

  const location = useLocation()
  const navigate = useNavigate()
  const locations = location.pathname.split('/')

  return (
    <>
      <nav className="flex bg-gray-100 py-1 px-4 rounded-full text-sm" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2">
          {
            menu ? menu.map((item, key) => (
              <ListItem 
                item={item.title}
                link={item.link}
                active={ menu.length === key+1 ? true : false }
              />
            )) : (
              <>
                <li className="cursor-pointer hover:text-primary" onClick={() => navigate('/')}>  
                  Dashboard
                </li>
                {
                  locations.map((item, key) => (
                    <>
                      {
                        item !== '' && (
                          <ListItem 
                            item={item} 
                            link={location.pathname.split('/').slice(0,-1).join('/')}
                            active={ locations.length === key+1 ? true : false } 
                          />
                        )
                      }
                    </>
                  ))
                }
              </>
            )
          }
        </ol>
      </nav>
    </>
  )
}

const ListItem = ({item, link, active = false}: ItemListProps) => {
  const navigete = useNavigate()
  return (
    <li 
      className={`
        inline-flex items-center gap-2
        ${active ? 'text-primary' : 'cursor-pointer hover:text-primary'}
      `}
      onClick={() => {
        if (!active) navigete(link ?? "#")
      }}
    >
      <CaretRight />
      <span className="capitalize">{item}</span>
    </li>
  )
}

export default Breadcrumb