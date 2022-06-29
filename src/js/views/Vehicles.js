import React, { useContext, } from 'react'
import { Context } from '../store/appContext';

const Vehicles = () => {
    const {store, actions} = useContext(Context)


    return (
        <>
            <h1>Vehicles</h1>
            {store.vehicle.map((vehicle, i) => {

                return (
                 
                    <div key={i} className="card" style={{width: '18rem'}} >
                        <div className="card-body">
                            <h5 className="card-title">Name: {vehicle.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Model: {vehicle.model}</h6>
                            <p className="card-text">Capacity: {vehicle.capacity}</p>
                            <button href="#" className="btn btn-primary"  onClick={() => actions.addFavorite(vehicle.name)} >Add to Favorites</button>

                        </div>
                    </div>
                    
                )
            }
            )}
        </>
    );
}
 
export default Vehicles;