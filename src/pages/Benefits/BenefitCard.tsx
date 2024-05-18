import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";



type Props = {
    index: number;
    icon : JSX.Element;
    title : string;
    description : string;
    setSelectedPage : (value : SelectedPage) => void;
}
const BenefitCard = ({index,icon,title,description,setSelectedPage}: Props) => {

  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{once:true, amount:0.5}}
    custom={index}
    transition={{delay:0.2 * index, duration:0.5}}
    variants={{
        hidden :{
            opacity: 0,
            scale: 0.9,
        },
        visible:{
            opacity:1,
            scale:1,
        }
    }}
    className="rounded-md border-2 border-gray-100 mt-6 px-6 py-16 text-center"
    >
        <div className="mb-4 flex items-center justify-center">
            <div className="rounded-full border-2 border-gray-100 p-4">
                {icon}
            </div>
        </div>

        <h4 className="font-bold">{title}</h4>
        <p className="my-3">{description}</p>

        <AnchorLink 
            className = "text-sm font-bold text-primary-500 hover:text-secondary-500 underline"
            onClick={()=> setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
            >
            <p>Learn more</p>
        </AnchorLink>

    </motion.div>
  )
}
export default BenefitCard