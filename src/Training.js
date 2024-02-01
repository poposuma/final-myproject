
import { Accordion } from "./Accordion/Accordion";
import image from './Accordion/dogFoto.jpg'

function Training() {
    return <div>
        <image src={ image }/>
        <h1>The most popular commands for dogs</h1>
        <Accordion/>
    </div>
}

export default Training;