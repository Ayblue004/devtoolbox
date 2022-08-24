import './Card.css'

function Cardlist({tools, card: Card}){

function importAll(r) {
  let images = {};
  r.keys().map((item, index) =>(images[item.replace('./', '')] = r(item)))
  return images;
}

const images = importAll(require.context('../../assets', false, /\.(png|jpe?g|svg)$/));

const names = tools.map((obj, index)=>{
  return  (
  		<Card  obj={obj} index={index} images={images} key={index} />
  	)
});

return(
<h1 className = 'wrapper'>
{names}
</h1>
	)
}

export default Cardlist