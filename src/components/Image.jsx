
export default function Image (props){

  return (
    <div>
      <img className="image" src={props.src} alt={props.alt}/>
      <p>{props.description}</p>
    </div>
  )
}