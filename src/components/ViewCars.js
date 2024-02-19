import React from 'react';
import CarCard from './CarCard'; 
import "../css/ViewCar.css"; 

const ViewCars = () => {
   
    const cars = [
        { id: 2, brand: 'Chevrolet', model: 'Suburban', year: 2023, image: 
        'suberban.jpg', interiorImage: 'suburban1.jpg' },
        { id: 1, brand: 'Mercedes', model: 'eClass', year: 2023, image:
         'eClass.png', interiorImage: 'benzInside.PNG', sideImage:'eclassSide.PNG' }, 
        // Add more cars as needed
    ];
    

    

    return (  
        <div className="car-gallery">
            <div className="cars">
                {cars.map(car => (
                    <CarCard key={car.id} car={car} />
                ))}
            </div>
        </div>
    );
}
 
export default ViewCars;
