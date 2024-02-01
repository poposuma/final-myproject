import { AccordionItem } from "./AccordionItem"
import { List } from "./List"
import './style.css';


export const Accordion = () => {
    return (<div>
        {List.map((item, index) =>
        <AccordionItem key={index} title= {item.title} content= {item.content}/>
        )}
    </div>)
}