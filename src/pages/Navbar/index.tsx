import { useState } from "react"
import { Bars3Icon,XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"
import Link from "./Link"
import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"
import ActionButton from "@/shared/ActionButton"


type Props = {
    isTopOfPage:boolean;
    selectedPage:SelectedPage;
    setSelectedPage:(value:SelectedPage)=>void;
}
const index = ({isTopOfPage, selectedPage,setSelectedPage}: Props) => {
  const flexBetween = "flex items-center justify-between"
  const [isMenuToggled,setisMenuToggled] = useState<boolean>(false)
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"

  return (
    <nav>
        <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-50 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                
                <div className={`${flexBetween} w-full gap-16`}>
                    <img src={Logo} alt="logo"/>
                    {isAboveMediumScreens ? 
                    ( 
                        <div className={`${flexBetween} w-full`}>
                            
                            <div className={`${flexBetween} gap-8`}>
                            {/*Links*/}
                                <Link 
                                page="Home"
                                selectedPage={selectedPage} 
                                setSelectedPage={setSelectedPage}
                                isMenuToggled={isMenuToggled}
                                setisMenuToggled={setisMenuToggled}
                                />

                                <Link page="Benefits" 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                isMenuToggled={isMenuToggled}
                                setisMenuToggled={setisMenuToggled}
                                />

                                <Link page="Our Classes" 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                isMenuToggled={isMenuToggled}
                                setisMenuToggled={setisMenuToggled}
                                />

                                <Link page="Contact Us" 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                isMenuToggled={isMenuToggled}
                                setisMenuToggled={setisMenuToggled}
                                />

                            </div>
                            <div className={`${flexBetween} gap-8`}>
                                {/*Btns*/}
                                <button>Sign in</button>
                                <ActionButton setSelectedPage={setSelectedPage} >Become a Member</ActionButton>
                            </div>
                        </div>
                    ) :
                    (  
                        <button className="rounded-full p-2 bg-secondary-500"
                            onClick={()=> setisMenuToggled(!isMenuToggled)}>
                            <Bars3Icon className="h-6 w-6 text-white"/>
                        </button>
                    )}

                </div>
            </div>
        </div>
        {/* Mobile Menu */}
        {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 h-full w-[300px] z-[60] bg-primary-100 drop-shadow-xl">
                {/* Close icon */ }
                <div className="flex justify-end p-10">
                    <button onClick={()=> setisMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className="h-6 w-6 text-gray-400"/>
                    </button>
                </div>

                <div className="flex flex-col gap-10 ml-[33%] text-xl">
                    {/*Links*/}
                     <Link 
                     page="Home"
                     selectedPage={selectedPage} 
                     setSelectedPage={setSelectedPage}
                     isMenuToggled={isMenuToggled}
                     setisMenuToggled={setisMenuToggled}/>

                     <Link page="Benefits" 
                     selectedPage={selectedPage}
                     setSelectedPage={setSelectedPage}
                     isMenuToggled={isMenuToggled}
                     setisMenuToggled={setisMenuToggled}
                     />

                    <Link page="Our Classes" 
                     selectedPage={selectedPage}
                     setSelectedPage={setSelectedPage}
                     isMenuToggled={isMenuToggled}
                     setisMenuToggled={setisMenuToggled}
                     />

                    <Link page="Contact Us" 
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    isMenuToggled={isMenuToggled}
                    setisMenuToggled={setisMenuToggled}
                    />            

                </div>

            </div>
        )

        }
    </nav>
  )
}
export default index