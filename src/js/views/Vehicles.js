import React, { useContext, } from 'react'
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const Vehicles = () => {
    const {store, actions} = useContext(Context)


    return (
                   

                    <>
                    <h1>Vehicles</h1>
        
                    <div className="container">
                        <div className="row">
                        {store.vehicle.map((vehicle, id) => {
        
                                return (
                                    <div key={id} className="card" style={{ width: '40rem' }}>
                                        <div className="col-12">
                                            <div className="card-body">
                                                <h5 className="card-title">Name: {vehicle.name}</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">Model: {vehicle.model}</h6>
                                                <p className="card-text">Capacity: {vehicle.capacity}</p>
                                                <button href="#" className="btn btn-primary" onClick={() => actions.addFavorite(vehicle.name)} >Add to Favorites</button>

                                                <Link to={"/vehicles/" + vehicle.url.match(/\d+/)[0]} className="btn btn-primary"  >Details</Link>

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