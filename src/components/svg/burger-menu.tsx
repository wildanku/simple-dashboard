type Props = {
  className?: string
  rect1h?: number
  rect1w?: number
  rect2h?: number
  rect2w?: number
  rect3h?: number
  rect3w?: number
}

const BurgerMenu = ({
  className = '', 
  rect1h = 10, 
  rect1w = 80,
  rect2h = 10, 
  rect2w = 80, 
  rect3h = 10, 
  rect3w = 80,  
}: Props) => {
  return (
    <svg 
      viewBox="0 0 100 50" 
      width="30" 
      height="20"
      className={className}
    >
      <rect width={rect1w} height={rect1h} rx={5}></rect>
      <rect y="20" width={rect2w} height={rect2h} rx={5}></rect>
      <rect y="40" width={rect3w} height={rect3h} rx={5}></rect>
    </svg>
  )
}

export default BurgerMenu