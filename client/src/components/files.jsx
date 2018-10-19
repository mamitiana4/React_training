import React, { Component } from 'react';

class Files  extends Component {
    render() {
        return (
            <div className="files">
                {
                    this.props.files.map(file => {
                        return (
                            <div 
                            key={file._id}
                            className="text-muted">
                                <p className="nameFiles">{file.filename}</p>
                                <form
                                    action={'/files/' + file._id + '?_method=DELETE'}
                                    method="post">
                                    <button
                                        className="btn btn-danger mt-4">Delete
                              </button>
                                </form>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default Files ;