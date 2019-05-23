import React from 'react';
import './style.css';

export default class Main extends React.Component {
    render() {
        return (
            <main className='main'>
                <div className="content">
                    {this.props.children}
                </div>
            </main>
        );
    }
}

Main.propTypes = {
    children: React.PropTypes.node
};
