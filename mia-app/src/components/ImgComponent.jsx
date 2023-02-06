import React from "react";

class ImgComponent extends React.Component {
    render () {
        return <img src={this.props.src} alt={this.props.alt}/>

    }
}
export default ImgComponent;