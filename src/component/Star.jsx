import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";

const Star = () => {
    const [rating, setRating] = useState(null);

    return (
        <div className='flex gap-3'>
            {[...Array(5)].map((star, index) => {
                const currentRate = index + 1;
                return (
                    <label key={index}>
                        <input 
                            type='radio' 
                            name="rate" 
                            value={currentRate} 
                            onClick={() => setRating(currentRate)} 
                            style={{ display: 'none' }}
                        />
                        <FaStar 
                            color={currentRate <= rating ? "yellow" : "grey"} 
                            onClick={() => setRating(currentRate)}
                            size={24}
                        />
                    </label>
                );
            })}
        </div>
    );
}

export default Star;
