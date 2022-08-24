import './Card.css'

function Card(props){
  return  (
  	<a href ={props.obj.link} target='blank'>
		    <div className  = 'container'> 
		    	<div className = 'container--flex1'>
		    		<span>
				    	<img src={props.images[props.obj.image]} alt="logo" />
				    </span>
		    	</div>
		    	<div className = 'container--flex2'>
				    	<h3 className = 'name'>{props.obj.name}</h3>
				    	<p className = 'desc'>{props.obj.description}</p>
		    </div>
    </div>
   </a>
  	);
}

export default Card