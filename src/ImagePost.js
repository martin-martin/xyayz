// I think to make this work I'll need to create a node.js server
// check out this resource, sounds useful:
// https://scotch.io/tutorials/react-on-the-server-for-beginners-build-a-universal-react-and-node-app

import React, { Component } from 'react'
import NavBack from './NavBack'
//import pictures from './data/pictures.json'

class ImagePost extends Component {

  //state = pictures
  state = {
    images: [
      {
        subtitle: "me before evolving into a fish.",
        filename: "bacteria.jpg"
      }
    ]
  }

  importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  // src={images[image.filename]}


  render() {

    //const images = this.importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));

    return (
        <div className="image-album">
        <NavBack/>
        {this.state.images.map((image, i) => (
          <div className="img-note" key={i} id={"img-note-" + i}>
            <img
              src={image.filename}
              alt={image.subtitle}
            />
            {JSON.stringify("./img/" + image.filename)}
            <p>{image.subtitle}</p>
          </div>
        ))}
        </div>
    )
  }
}

export default ImagePost
