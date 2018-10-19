import React, { Component } from 'react';

class Videos extends Component {
  render() {
    return (
        <div className="videos">
            {
                this.props.videos.map(file => {
                    return (
                        <div key={file._id}>
                            <video
                                src={'video/' + file.filename}
                                controls
                                >
                            </video>
                            <form
                                action={'/files/' + file._id + '?_method=DELETE'}
                                method="post">
                                <button
                                    className="btn btn-danger mt-4" >Delete
                              </button>
                            </form>
                        </div>
                    );
                })
            }
        </div>
    )
  }
};

export default Videos ;
