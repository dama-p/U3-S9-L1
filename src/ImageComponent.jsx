import { Component } from 'react'

class ImageComponent extends Component {

    render () {
        return (

            <div>
                <img className="imageClass" src={this.props.imageURL} alt={this.props.imageAlt}></img>
            </div>
           
            
        )
    }
}

export default ImageComponent