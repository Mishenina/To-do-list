import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from '../main/Main';
import './styleLayout.css';

export default class Layout extends React.Component {
  render() {
    return (
      <div className='layout'>
        <Header>{this.props.children}</Header>
        <Main> {this.props.children} </Main>
        <Footer/>
      </div>
    );
  }
}

Layout.propTypes = {
  children: React.PropTypes.node
};
