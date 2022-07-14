import React, { useContext, } from 'react'
import { Context } from '../store/appContext';

const Vehicles = () => {
    const {store, actions} = useContext(Context)


    return (
                   

                    <>
                    <h1>Vehicles</h1>
        
                    <div class="container">
                        <div class="row">
                        {store.vehicle.map((vehicle, id) => {
        
                                return (
                                    <div key={id} className="card" style={{ width: '40rem' }}>
                                        <div class="col-12">
                                            <div className="card-body">
                                                <h5 className="card-title">Name: {vehicle.name}</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">Model: {vehicle.model}</h6>
                                                <p className="card-text">Capacity: {vehicle.capacity}</p>
                                                <button href="#" className="btn btn-primary" onClick={() => actions.addFavorite(vehicle.name)} >Add to Favorites</button>
                                            </div>
                                        </div>
                                    </div>
                                )
        
                            })}
        
        
                        </div>
                    </div>


      
        </>
    );
}
 
export default Vehicles;