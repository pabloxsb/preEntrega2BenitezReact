const Button = (props) => {
    return <button 
        onClick={props.handleClick}
        style={{
            color:'white',
            backgroundColor:'blue'
        }}
    >
        {props.label}
        </button>
}

export default Button