import { useState } from "react"

export const AccordionItem = ({ title, content }) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    return (<div>
        <div className={isOpen ? 'active' : 'defaultOne'} onClick={handleIsOpen}>
            { title }
        </div>
        {
            isOpen && <div className="content">
                { content }
            </div>
        }
    </div>)
}