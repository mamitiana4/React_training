import React, { Component } from 'react';
//import Images from './images';
//import Videos from './videos';
//import Files from './files';
import Detail from './detail';
//import FontAwesome from 'react-fontawesome';
import icoImg from '../img/Full Image.png' ;
import icoVid from '../img/Movie.png' ;
import icoFile from '../img/File.png' ;
import uTorrent from '../img/uTorrent.png' ;
import pdf from '../img/PDF.png' ;
import pptx from '../img/Microsoft PowerPoint.png' ;
import word from '../img/Microsoft Word.png';


class DisplayFiles extends Component {
    constructor(props){
        super(props) ;
        this.state = {
            images: [] ,
            videos: [] ,
            files: [] ,
            detail: {}
        } ;
        this.handleClick.bind(this) ;
    }

  /* componentWillReceiveProps(nextProps) {
    if (nextProps.files) {
        let tabIm = [] ;
        let tabVid = [] ;
        let tab = [] ;
        let files = nextProps.files ;
        files.forEach(file => {
            if (file.contentType === "video/x-matroska"){
                tabVid.push(file) ;
            } else if (file.contentType === "image/png" || file.contentType === "image/jpeg"){
                tabIm.push(file) ;
            }else{
                tab.push(file) ;
            }
            this.setState({
                images: tabIm,
                videos: tabVid,
                files:tab
            }) ;
        }) ;
    }
  } */

  componentWillReceiveProps(nextProps){
    this.setState({files:nextProps}) ;
  }

  handleClick(file){
    console.log('i was clicked', file._id) ;
    this.setState({detail:file}) ;
  }

  render(){
      return(
          <div className="container">
            <div className="row">
                <div className="col-md-8 border-right">
                    {
                        this.props.files.map(file => {
                              if (file.contentType === "image/png" || file.contentType === "image/jpeg"){
                            return(
                                <div 
                                    key={file._id} 
                                    onClick={() => this.handleClick(file)}
                                    className="listContainer mb-2">
                                    {/* <FontAwesome
                                        className='fa-file-image-o'
                                        name='img'
                                        size='2x'
                                        //spin
                                        style={{ color : 'black' }}
                                    /> */}
                                    <img 
                                    src={icoImg} 
                                    alt="" 
                                    style={{ width: 50 }}/>
                                    {file.filename}
                                </div>
                            ) ;
                              } else if (file.contentType === "video/x-matroska" || file.contentType === "video/mp4"){
                                  return (
                                      <div
                                          key={file._id}
                                          onClick={() => this.handleClick(file)}
                                          className="listContainer mb-2"> 
                                          <img 
                                          src={icoVid} 
                                          alt="" 
                                          style={{ width: 50 }}/>
                                          {file.filename}
                                      </div>
                                  );
                              } else if (file.contentType === "application/x-bittorrent") {
                                  return (
                                      <div
                                          key={file._id}
                                          onClick={() => this.handleClick(file)}
                                          className="listContainer mb-2">
                                          <img
                                              src={uTorrent}
                                              alt=""
                                              style={{ width: 50 }} />
                                          {file.filename}
                                      </div>
                                  );
                              } else if (file.contentType === "application/pdf") {
                                  return (
                                      <div
                                          key={file._id}
                                          onClick={() => this.handleClick(file)}
                                          className="listContainer mb-2">
                                          <img
                                              src={pdf}
                                              alt=""
                                              style={{ width: 50 }} />
                                          {file.filename}
                                      </div>
                                  );
                              } else if (file.contentType === "application/vnd.openxmlformats-officedocument.presentationml.presentation") {
                                  return (
                                      <div
                                          key={file._id}
                                          onClick={() => this.handleClick(file)}
                                          className="listContainer mb-2">
                                          <img
                                              src={pptx}
                                              alt=""
                                              style={{ width: 50 }} />
                                          {file.filename}
                                      </div>
                                  );
                              } else if (file.contentType === "application/msword") {
                                  return (
                                      <div
                                          key={file._id}
                                          onClick={() => this.handleClick(file)}
                                          className="listContainer mb-2">
                                          <img
                                              src={word}
                                              alt=""
                                              style={{ width: 50 }} />
                                          {file.filename}
                                      </div>
                                  );
                              }else{
                                  return (
                                      <div
                                          key={file._id}
                                          onClick={() => this.handleClick(file)}
                                          className="listContainer mb-2">
                                          <img 
                                          src={icoFile} 
                                          alt="" 
                                          style={{ width: 50 }}/>
                                          {file.filename}
                                      </div>
                                  );
                        }
                        })
                    }
                </div>
                <div className="col-md-4">
                    <h4>here is the desciption</h4>
                    <hr/>
                    <Detail detail={this.state.detail}/>
                </div>
            </div>
          </div>
      ) ;
  }
    
  /* render() {
    return (
        <div className="container">
            <div className="row displayFilesContainer">
                <div className="col-md-4 card box" id="image">
                    <div className="card-header">Images</div>
                    <div className="card-body">
                        <Images sary={this.state.images} />
                    </div> 

                </div>
                <div className="col-md-4 card box" id="video">
                    <div className="card-header">Videos</div>
                    <div className="card-body">
                        <Videos videos={this.state.videos} />
                    </div>
                     
                </div>
                <div className="col-md-4 card box" id="fichier">
                    <div className="card-header">Fichiers</div>
                    <div className="card-body">
                        <Files files={this.state.files} />
                    </div>
                    
                </div>
            </div>
        </div> 
    ) ;
  } */
}

export default DisplayFiles ;
