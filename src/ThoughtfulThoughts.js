import React, { Component } from 'react'

class ThoughtfulThoughts extends Component {

  state = {
    thoughts:
      [
        "be who you car",
        "who knows what laf is?"
      ]
  }

  // https://stackoverflow.com/a/2207751
  appear = (elm, i, step, speed) => {
    var t_o;
    //initial opacity
    i = i || 0;
    //opacity increment
    step = step || 5;
    //time waited between two opacity increments in msec
    speed = speed || 50;

    t_o = setInterval(function(){
        //get opacity in decimals
        var opacity = i / 100;
        //set the next opacity step
        i = i + step;
        if(opacity > 1 || opacity < 0){
            clearInterval(t_o);
            //if 1-opaque or 0-transparent, stop
            return;
        }
        //modern browsers
        elm.style.opacity = opacity;
        //older IE
        elm.style.filter = 'alpha(opacity=' + opacity*100 + ')';
    }, speed);
  }

  render() {
    return (
      <div className="thoughtful-thoughts">
        <div className="current-thought">
          {this.state.thoughts.map((thought, i) => (
            <p>{thought}</p>
          ))}
        </div>
        <button
          onClick={this.appear(
            document.getElementsByClassName('current-thought')[0], 0, 5, 40
          )}>Think for me</button>
      </div>
    )

  }
}

export default ThoughtfulThoughts
