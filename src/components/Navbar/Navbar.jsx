import {useState} from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom';
import {RiMenu2Line} from 'react-icons/ri';
import {RiCloseFill} from 'react-icons/ri'

function Navbar(){
const [navState, setNavState] = useState(false);

	return(
		<>
			<nav className = "flex-container">
			 	<div className = "flex-container__child1">
						 <Link to= "/" className = "logo">
						  devToolBox
						 </Link> 
				</div>
				<div className = "flex-container__child2">
			     		 <Link to ='Explore'>Explore</Link>
			     		 <Link to ='Search'>Search</Link>
	     		 </div>
			</nav>
		<div className = 'mobile-nav'>
						<div className = 'buttons-container'>
							{navState?<RiCloseFill  color='white'  padding= '1rem' size={35} onClick = {()=>setNavState(false)}/>
							:<RiMenu2Line  color='white' size={35} onClick = {()=>setNavState(true)}/>
							}
						 <Link to= "/" className = "logo">
						  devToolBox
						 </Link> 
						</div>
					       {navState &&(
			       			<div className = 'mobile-nav--flex'>
							<nav >
						     		 <Link to ='Explore'>Explore</Link>
						     		 <Link to ='Search'>Search</Link>		
							</nav>
						 </div>
					       	) }
			</div>
			</>
		);
}

export default Navbar