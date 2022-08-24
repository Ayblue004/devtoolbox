import './Card.css'

function Card2(props){
  return  (
  	<a href ={props.obj.link} target='blank'>
		    <div className  = 'container2'>
		    	<div className = 'container--flex12'>
		    		<span>
				    	<img src={props.images[props.obj.image]} alt="logo" />
				    </span>
		    	</div>
		    	<div className = 'container--flex22'>
				    	<h3 className = 'name2'>{props.obj.name}</h3>
				    	<p className = 'desc2'>{props.obj.description}</p>
		    </div>
    </div>
    </a>
  	);
}

export default Card2