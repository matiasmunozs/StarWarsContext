import React from 'react';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';



function VehicleDetail() {

	const { id } = useParams();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		console.log(id);
		actions.fetchVehicleDetail(`https://swapi.dev/api/vehicles/${id}`)
	}, [])

	return (
		
		<div className='container-sm mt-5 '>
			<div className='row mb-4 justify-content-center '>
				<div className='card col-md-10  primary'>
					<h1 className='col primary mt-3'><strong>{!!store.vehicle && store.vehicle.name}</strong></h1>
					<h5 className='mt-3 mb-3 primary'>Preserve and cherish that pale blue dot realm of the galaxies Rig Veda ship of the imagination something incredible is waiting to be known billions upon billions. Tendrils of gossamer clouds a mote of dust suspended in a sunbeam vastness is bearable only through love tendrils of gossamer clouds with pretty stories for which there's little good evidence from which we spring? Gathered by gravity paroxysm of global death hearts of the stars are creatures of the cosmos hearts of the stars a very small stage in a vast cosmic arena and billions upon billions upon billions upon billions upon billions upon billions upon billions.</h5>
					<ul className='primary'>
                            <li>Crew : {!!store.vehicle && store.vehicle.crew}</li>
							<li>Passengers : {!!store.vehicle && store.vehicle.passengers}</li>
							<li>Vehicle Class : {!!store.vehicle && store.vehicle.vehicle_class}</li>
							<li>Length : {!!store.vehicle && store.vehicle.length}</li>
    

					</ul>
				</div>
			</div>
		</div>


	
);
};

export default VehicleDetail;