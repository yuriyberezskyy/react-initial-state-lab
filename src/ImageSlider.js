// your ImageSlider code here!
import React, { Component } from 'react'
export class ImageSlider extends Component {
    constructor()
    {
     super()
     this.state = 
      {
        currentSlideIndex: 0
      }
    }
    render() {
        console.log()
        return (
                  <h1>I am on slide {this.state.currentSlideIndex}</h1>
            
        );
    }
}

export default ImageSlider
