const Button = (props) => {
    return <button 
        onClick={props.handleClick}
        style={{
            color:'white',
            backgroundColor:'black'
        }}
    >
        {props.label}
        </button>
}

export default Button