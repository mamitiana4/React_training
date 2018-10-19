import React, { Component } from 'react';

class alert extends Component {
    render() {
        return (
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                You can now access to your account, please log in
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        );
    }
}

export default alert;