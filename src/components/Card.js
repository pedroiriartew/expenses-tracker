import './Card.css';

function Card(props){
    const classes = 'card ' + props.className;
    return <div className={classes} >{props.children}</div>;
    // Card es un wrapper.
    // Utiliza props.children que es de react; sus parámetros son el cuerpo de lo que sea
    // que esta dentro de la tag Card
}

export default Card;