
type Props = {
    children: React.ReactNode
}
const Heading = ({children}: Props) => {
  return (
    <h1 className="text-3xl font-bold font-montserrat basis-3/5">
        {children}
    </h1>
  )
}
export default Heading