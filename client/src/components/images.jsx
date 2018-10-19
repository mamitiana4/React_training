import React, { Component } from 'react';

class Images extends Component {
  render() {
    return (
      <div className="images">
        {
                this.props.sary.map(file => {
                return(
                    <div 
                    key={file._id}>
                        <img
                            src={'image/' + file.filename}
                            alt="" 
                            className="rounded float-left"/>
                        <form
                            action={'/files/' + file._id + '?_method=DELETE'}
                            method="post">
                            <button
                                className="btn btn-danger mt-4" >Delete
                              </button>
                        </form>
                    </div>
                ) ;
            })
        }
      </div>
    )
  }
};

export default Images ;
