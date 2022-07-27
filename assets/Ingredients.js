import { useState } from "react";

import { Star } from "./Star"
import { ImCross } from "react-icons/im"

export const Ingredients = ({ ingredient }) => {
    const [required, setRequired] = useState(false);
    const [hover, setHover] = useState(-1);
    
    const changeRequired = (newRequired) => {
        setRequired(newRequired);
        setHover(-1);
    }

    return (
        <div className="ingredientItem">   
            <Star
                filled={required}
                hover={hover != -1}
                onClick={() => changeRequired(!required)}
                onMouseEnter={() => setHover(1)}
                onMouseLeave={() => setHover(-1)} />
            <span style={{justifySelf: "start"}}>{ingredient}</span>
            <ImCross size={28} style={{justifySelf: "end"}}/>
        </div>
    );
}
