type Props = {
    name:string;
    description?:string;
    image:string; 
}
const Class = ({name,description,image}: Props) => {
    {/*h-[380px] w-[450px]*/}
    const OverlayStyles = `p-3 absolute z-[30] flex flex-col items-center justify-center whitespace-normal text-center text-white bg-primary-500 opacity-0 hover:opacity-90 transition duration-500 h-full w-full overflow-hidden` 

  return (
    <li className="relative mx-5 inline-block w-[9%] xs:w-[15%]"> {/*h-[380px] w-[450px]*/}
        <div className={OverlayStyles}>
            <p className="mb-1 xs:mb-3 text-sm xs:text-xl font-semibold">{name}</p>
            <p className="text-xs leading-[15px] xs:text-sm">{description}</p>
        </div>
        <img src={image} alt={`${image}`} className="w-full h-full"/>
    </li>
  )
}
export default Class

