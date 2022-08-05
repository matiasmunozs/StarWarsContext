import React, { useContext, } from 'react'
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const Planets = () => {
    const { store, actions } = useContext(Context)



    return (
        <>
            <h1>Planets</h1>

            <div className="container">
                <div className="row">
                {store.planets.map((planets, id) => {
                   
                   return (
                            <div key={id} className="card" style={{ width: '40rem' }}>
                                <div className="col-12">
                                    <div className="card-body">
                                        <h5 className="card-title">Name: {planets.name}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Terrain: {planets.terrain}</h6>
                                        <p className="card-text">Population: {planets.population}</p>
                                        <button href="#" className="btn btn-primary" onClick={() => actions.addFavorite(planets.name)} >Add to Favorites</button>
                                        
                                        <Link to={"/planets/" + planets.url.match(/\d+/)[0]} className="btn btn-primary"  >Details</Link>

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

export default Planets;