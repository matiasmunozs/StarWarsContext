import React from 'react';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';



function PlanetDetail() {

	const { id } = useParams();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		console.log(id);
		actions.fetchPlanetDetail(`https://swapi.dev/api/planets/${id}`)
	}, [])

	return (
		
		<div className='container-sm mt-5 '>
			<div className='row mb-4 justify-content-center '>
				<div className='card col-md-10  primary'>
					<h1 className='col primary mt-3'><strong>{!!store.planet && store.planet.name}</strong></h1>
					<h5 className='mt-3 mb-3 primary'>A mote of dust suspended in a sunbeam billions upon billions Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur billions upon billions cosmic ocean as a patch of light. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium extraordinary claims require extraordinary evidence hearts of the stars invent the universe consectetur star stuff harvesting star light.</h5>
					<ul className='primary'>
						<li>Name : {!!store.planet && store.planet.name}</li>
						<li>Climate : {!!store.planet && store.planet.climate}</li>
						<li>Terrain : {!!store.planet && store.planet.terrain}</li>
						<li>Population : {!!store.planet && store.planet.population}</li>
					</ul>
				</div>
			</div>
		</div>


	
);
};

export default PlanetDetail;