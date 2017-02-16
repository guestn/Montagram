'use strict';

import React from 'react';
import { PropTypes } from 'react';
import fileDownload from 'react-file-download';
import CopyToClipboard from 'react-copy-to-clipboard';


export default class CanvasComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			imageUrls: null,
			canvasLoaded: false
		}
		
	}
  componentDidMount() {
		this.setState({
			imageUrls: this.props.imageUrls
		})


  }
  componentDidUpdate() {
		this.updateCanvas()

  }

  updateCanvas() {
/*
	  var img = new Image;
		img.src = this.state.imageUrls[0];
		console.log('img',img)
*/

    const ctx = this.refs.canvas.getContext('2d');

		var images = this.state.imageUrls;
		var loadedImages = {};
		var promiseArray = images.map((imgurl) => {
			var prom = new Promise((resolve,reject) => {
      	var img = new Image();
				img.onload = () => {
        	loadedImages[imgurl] = img;
					resolve();
      	};
				img.src = imgurl;
   		});
	 		return prom;
		});

		Promise.all(promiseArray).then(imagesLoaded);

		function imagesLoaded(){
		  //start canvas work.
		  var columnCount = 3;
		  var rowCount = Math.ceil(images.length/columnCount);
		  var oRes = 640;
		  var iRes = 360;
		
		   //when needing to draw image, access the loaded image in loadedImages
			for (var i=0; i<columnCount; i++) {
				for (var j=0; j<rowCount; j++) {
					
					loadedImages[images[rowCount*j + i]].setAttribute('crossOrigin', 'anonymous');
					// work out how to center images if w != h
					var w =	loadedImages[images[rowCount*j + i]].width
					var h =	loadedImages[images[rowCount*j + i]].height
					var shortEdge = (h <= w) ? h : w;
					var offsetX = (h < w) ? (oRes-iRes)/2 : 0;
					var offsetY = (h <= w) ? 0 : (oRes-iRes)/2;

					ctx.drawImage(loadedImages[images[rowCount*j + i]], offsetX , offsetY, shortEdge, shortEdge, i*iRes, j*iRes, iRes, iRes);
				}
			}
			

		}
		this.setState({
			canvasLoaded: true
		})
  }
  
  onDownloadClicked() {
		var canvas = this.refs.canvas
		var dataURL = canvas.toDataURL();
		dataURL = dataURL.src;
		//console.log(dataURL);
		fileDownload(dataURL, 'image.png');
		this.setState({
			statusMessage: 'File Downloaded'
		})
	}
	
  render() {

      return (
	      <div>
          <canvas ref="canvas" width={1080} height={1080}/>
          <div className="button-container">

						<CopyToClipboard text={this.state.inputValue}
							onCopy={() => this.setState({statusMessage: 'Image Copied to Clipboard'})}>
							<button className="btn-icon btn-copy" disabled={!this.state.canvasLoaded}>Copy</button>
						</CopyToClipboard>
						
						<button className="btn-icon btn-download" onClick={this.onDownloadClicked.bind(this)} disabled={!this.state.canvasLoaded}>DL</button>
					</div>
        </div>
      );
  }
}