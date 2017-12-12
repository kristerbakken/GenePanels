import React from 'react';

//NOT USED IN CURRENT VERSION
export default class CommentModal extends React.Component {
    constructor(props) {
        super(props);


    }
    render() {
        // Render nothing if the "show" prop is false
        if(!this.props.show) {
            return null;
        }

        // The gray background
        const backdropStyle = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: 50
        };

        // The modal "window"
        const modalStyle = {
            backgroundColor: '#fff',
            borderRadius: 5,
            maxWidth: 500,
            minHeight: 300,
            margin: '0 auto',
            padding: 30
        };

        return (
            <div className="backdrop" style={backdropStyle}>
                <div className="modal" style={modalStyle}>
                    <textarea>
                        {this.props.children}
                    </textarea>

                    <div className="footer">
                        <button onClick={this.props.saveComment}>Save</button>
                        <button onClick={this.props.onClose}>Close</button>
                    </div>
                </div>
            </div>
        );
    }
}

