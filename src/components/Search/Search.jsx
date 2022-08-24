import './Search.css';
import Card2 from '../Card/Card2';
import {Tools} from '../../Tools';
import Cardlist from '../Card/Cardlist';
import {useState } from 'react';

function Search(){
const [query, setQuery] = useState('§¶');
const [feedback, setFeedback] = useState('');
let filtered = Tools.filter(tools=>{
	return tools.search.toLowerCase().includes(query.toLowerCase())
})
function handleFeedback(){
		if(filtered.length < 1){
			  		setFeedback("It seems we don't have the tool you currently need :( ")
			  	}
}
	return(
			<div className="search-container">
			<div className = "search">
				<input 
					 type = "text" 
					  placeholder="Type in a tool you need E.g Code editor" 
					  onKeyPress = {(e)=>{
		  				if(e.key=== "Enter" &&  e.target.value.length > 2){
	  					setQuery(e.target.value)
	  					handleFeedback()
			  		}
				  }}
				  />
			</div>
			{ filtered.length ?
			<Cardlist tools ={filtered} card={Card2}/> :
			<h1 className="feedback">{feedback}</h1>
			}
		</div>
		);
}

export default Search