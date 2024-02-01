import { useState } from "react";
import { data } from "./data";
import './App.css'

function Instructions() {

    const [dog, setDog] = useState(0);
    const {id, name, instructionsDay, imageDog} = data[dog];

    const backDog = () => {
        setDog((dog => {
            dog --;
            if (dog < 0) {
                return data.length-1;
            }
            return dog;
        }))
    }

    const nextDog = () => {
        setDog((dog =>{
            dog ++;
            if (dog > data.length - 1) {
                dog = 0;
            }
            return dog;
        }))
    }

    return (<div>
        <div className="containerSlide">
        <h1>Here are some daily dog care instructions to ensure your furry friend stays healthy and happy</h1>
        
        <div>
        <img src={ imageDog } width='400px' alt="dog"/>
        </div>
    
    <div >
        <h2>{id} - {name}</h2>
    </div>

    <div>
        <p className="instructionsForDog">{instructionsDay}</p>
    </div>
    
    <div className="btn">
    <button onClick={backDog} className="btnDog">Back</button>
    <button onClick={nextDog} className="btnDog">Next</button>
    </div>
    </div>
    </div>
    )
}


export default Instructions;