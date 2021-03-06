import React, { useContext, } from 'react'
import { Context } from '../store/appContext';

const Planets = () => {
    const { store, actions } = useContext(Context)



    return (
        <>
            <h1>Planets</h1>

            <div class="container">
                <div class="row">
                {store.planets.map((planets, id) => {

                        return (
                            <div key={id} className="card" style={{ width: '40rem' }}>
                                <div class="col-12">
                                    <div className="card-body">
                                        <h5 className="card-title">Name: {planets.name}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Terrain: {planets.terrain}</h6>
                                        <p className="card-text">Population: {planets.population}</p>
                                        <button href="#" className="btn btn-primary" onClick={() => actions.addFavorite(planets.name)} >Add to Favorites</button>
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