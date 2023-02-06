const ButtonComponent = (props) => (
    <button style={{backgroundColor: props.backgroundColor, 
        width: props.width+"%", 
        fontSize:props.fontSize+"em", 
        borderRadius:props.borderRadius+"px", 
        margin:props.margin+"px",
        color:props.color}}>{props.text}</button>
)

export default ButtonComponent;