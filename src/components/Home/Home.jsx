import './Home.css'
import Cardlist from '../Card/Cardlist'
import {TopTools} from '../../Tools'
import  Card from '../Card/Card'

function Home(){
	return( 
		<>
		<div className = "header">
				<div className="header__container">
							<h1 className = "header__title">devToolBox</h1>
							<p className="header__mot">
						Devtoolbox is an open-source project that compiles
						 the top free tools for web development, web design 
						 and coding in general, to enable quick and easy access  </p>
				 </div>
		</div>
		<h1 className = 'heading'> Top tools </h1>
			<Cardlist tools ={TopTools} card={Card}/>
		</>
		);
}

export default Home