import { FaStar } from "react-icons/fa";

export const Star = ({ filled, hover, onClick, onMouseEnter, onMouseLeave }) => {
    return (     
        <FaStar
            color={hover ? "#856654" : (filled ? "#7C5227": "lightgray")}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            size={42} />
    );
}
