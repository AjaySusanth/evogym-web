  import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"


type Props = {
    isMenuToggled:boolean;
    setisMenuToggled:(value:boolean)=>void;
    page:string;
    selectedPage:SelectedPage;
    setSelectedPage:(value:SelectedPage)=>void;
}
const Link = ({isMenuToggled,setisMenuToggled,page,selectedPage,setSelectedPage,}: Props) => {

  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  const lowerCasePage = page.toLowerCase().replace(/ /g,"") as SelectedPage

  return (
    <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
        href={`#${lowerCasePage}`}
        onClick={() => {
          setSelectedPage(lowerCasePage);
          if (!isAboveMediumScreens){
            setisMenuToggled(!isMenuToggled);
          }
        }}
    >
        {page}
    </AnchorLink>
  )
}
export default Link