import React, {Component} from 'react';
import {connect} from 'react-redux';

export default function (ComposedComponent) {
  class Authentication extends Component {

    componentToRender(){
      if(this.props.authenticated){
        return <ComposedComponent {...this.props} />;
      } else {
        return (
          <div className="alert alert-warning" role="alert">Access Denied! Please Sign In.</div>
        );
      }
    }

    render() {
      return this.componentToRender();
    }
  }

  function mapStateToProps(state){
    return {
      authenticated: state.authenticated
    };
  }

  return connect(mapStateToProps)(Authentication);
}