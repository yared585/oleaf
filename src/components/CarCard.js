import React from 'react';

const CarCard = ({ car }) => {
    const { brand, model, year, image, interiorImage, sideImage} = car;
    const brandDirectory = brand 

    return (
        <div className="car-card">
            <img src={require(`../images/${brandDirectory}/${image}`)} alt={`${brand} ${model}`} />
            <img src={require(`../images/${brandDirectory}/${interiorImage}`)} alt={`${brand} ${model} Interior`} />
            {brand === "Mercedes" && sideImage && (
                <img src={require(`../images/Mercedes/${sideImage}`)} alt={`${brand} ${model} Side`} />
            )}

            <div className="car-details">
                <h3>{brand} {model}</h3>
                <p>Year: {year}</p>
                {/* Add more details as needed */}
            </div>
        </div>
    );
}

export default CarCard;
