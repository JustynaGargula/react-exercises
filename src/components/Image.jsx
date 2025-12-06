
export default function Image (props){

  return (
    <div onClick={props.onClick}>
      <img className="image" src={props.src} alt={props.alt}/>
      <p>{props.description}</p>
    </div>
  )
}