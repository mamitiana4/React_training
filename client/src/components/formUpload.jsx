import React, { Component } from 'react';
import { Form, Button } from 'reactstrap';
import Dropzone from 'react-dropzone';

class FormUpload extends Component {
    /* onDrop(acceptedFiles) {
        console.log(acceptedFiles)
        const req = fetch('/upload', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: acceptedFiles[0]
        })
    } */
    /* onSubmit(e){
        e.preventDefault() ;
        let file = document.getElementById('file').files[0] ;
        if (!file){
            console.log('No file selected') ;
        }else{
            console.log(file) ;
            fetch('/upload', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                 //   'Content-type': 'application/json'
               // },
             //   body: JSON.stringify(file)
           // })
           //     .then((res) => res.json())
         //       .then((data) => console.log('data fetched: ', data));
        //}
    //} */
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 m-auto">
                        <h1 className="text-center display-4 my-4">this is just a prototype</h1>

                        {/*  <div className="dropzone">
                            <Dropzone onDrop={this.onDrop.bind(this)} style={{ width: 'initial', height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', border:'dashed' }}>
                                <p style={{ color: 'rgb(163, 178, 192)', fontSize: 30 }} >Drag file here or browse</p>
                            </Dropzone>
                        </div> */}

                        <Form
                            action="/upload"
                            method="post"
                            encType="multipart/form-data"
                        //onSubmit={this.onSubmit.bind(this)}
                        >
                            <div className="custom-file mb-3">
                                <input
                                    type="file"
                                    name="file"
                                    id="file"
                                    className="custom-file-input" />
                                <label
                                    className="custom-file-label" htmlFor="file">Choose file</label>
                            </div>
                            <Button block color="primary">Submit</Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormUpload;