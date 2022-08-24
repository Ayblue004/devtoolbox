import './Footer.css'
import {Link} from 'react-router-dom';

function Footer(){
	return(
		<>
		<div className = "footer-container">
			<div className ="footer-container__child1">
				<Link to= "/" >
					  Home
				</Link> 
					<Link to= "Search" >
					  Search
				</Link> 
					<Link to= "Explore" >
					   Explore
				</Link> 
				</div>
		</div>
		</>
		);
}

export default Footer