import NavLinks from "@/app/components/NavLinks";

const MenuOverlay = ({links}) => {
    return(
        <ul className={'flex flex-col py-4 items-center'}>
            {
                links.map((link,index)=>{
                    return (
                        <li key={index}>
                            <NavLinks title={link.title} href={link.title}/>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default MenuOverlay;