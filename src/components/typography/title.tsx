type Props = {
  title: string
}

const Title = ({title}: Props) => {
  return (
    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
      {title}
    </h1>
  )
}

export default Title