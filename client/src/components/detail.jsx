import React, { Component } from 'react';

//import FontAwesome from 'react-fontawesome' ;
import icoFile from '../img/File.png';
import uTorrent from '../img/uTorrent.png' ;
import pdf from '../img/PDF.png' ;
import pptx from '../img/Microsoft PowerPoint.png'
import word from '../img/Microsoft Word.png' ;

class Detail extends Component {
    det(file){
        return(
            <ul>
                <li>Name: {file.filename}</li>
                <li>Length: {file.length}KB</li>
                <li>
                    <form
                        action={'/files/' + file._id + '?_method=DELETE'}
                        method="post">
                        <button
                            className="btn btn-danger mt-4">Delete
                              </button>
                    </form>
                </li>
            </ul>

        ) ;
    }
    affiche() {
        let detail = this.props.detail;
        if (detail.contentType === "image/jpeg" || detail.contentType === "image/png"){
            return (
                <div>
                    <img src = { 'image/' + detail.filename } alt=""/>
                    {this.det(detail)}
                </div>
            ) ;
        }
        else if (detail.contentType === "video/x-matroska" || detail.contentType === "video/mp4" || detail.contentType === "video/avi"){
            return (
                <div>
                    <video
                    src={'video/' + detail.filename}
                    controls>
                    </video>
                    {this.det(detail)}
                </div>
            ) ;
        } else if (detail.contentType === "application/x-bittorrent") {
            return (
                <div>
                    <img
                        src={uTorrent}
                        alt=""
                        style={{ width: 100 }} />
                    {this.det(detail)}
                </div>
            );
        } else if (detail.contentType === "application/pdf") {
            return (
                <div>
                    <img
                        src={pdf}
                        alt=""
                        style={{ width: 100 }} />
                    {this.det(detail)}
                </div>
            );
        } else if (detail.contentType === "application/vnd.openxmlformats-officedocument.presentationml.presentation") {
            return (
                <div>
                    <img
                        src={pptx}
                        alt=""
                        style={{ width: 100 }} />
                    {this.det(detail)}
                </div>
            );
        } else if (detail.contentType === "application/msword") {
            return (
                <div>
                    <img
                        src={word}
                        alt=""
                        style={{ width: 100 }} />
                    {this.det(detail)}
                </div>
            );
        }else{
            return(
                <div>
                    {/* <FontAwesome
                        className='fa-file-o'
                        name='img'
                        size='5x'
                        //spin
                        style={{ color: 'black' }}
                    /> */}
                    <img
                        src={icoFile}
                        alt=""
                        style={{ width: 100 }} />
                    {this.det(detail)}
                </div>
            ) ;
        }
    }
  render() {
    return (
      <div>
          {this.affiche()}
      </div>
    )
  }
};

export default Detail ;