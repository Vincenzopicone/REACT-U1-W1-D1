const ButtonComponent = (props) => (
    <button style={{backgroundColor: props.backgroundColor, width: props.width+"%", fontSize:props.fontSize+"em"}}>{props.text}</button>
)

export default ButtonComponent;