import './Explore.css'
import Card2 from '../Card/Card2'
import Cardlist from '../Card/Cardlist'
import {Tools} from '../../Tools'

function Explore(){
	let  array = Tools.sort((a,b)=>{
		if(a.name > b.name){
			return 1
		}
		else if(a.name <  b.name){
			return -1
		}
		else{
			return 0
		}
	})
	return(
		<>
		<h1 className="explore-head"> Explore all available tools from A - Z. There are currently {Tools.length} tools available </h1>
		<Cardlist tools={array} card={Card2}/>
		</>
		);
}

export default Explore