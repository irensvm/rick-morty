import React from 'react'

const Personaje = ({personaje}) => {
    const {name, species, image, gender} = personaje
    return (
        <div className="col md-4 mb-2">
            <div className="card">
                <img src={image} alt={`imagen-${name}`} className= "card-img-top"></img>
                <div className="card-body">
                <h3>{name}</h3>
                <p>{gender}</p>
                <p>{species}</p>
            </div>
            

            </div>
        
            
        </div>
    )
}

export default Personaje
