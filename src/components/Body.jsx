import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './Home';
import PhotoList from './PhotoList';
import PhotoInput from './PhotoInput';
import DetailView from './DetailView';
import Footer from './Footer';
import About from './About';
import { connect } from 'react-redux';
import constants from './../constants';
const { c } = constants;
import * as actions from './../actions';

class Body extends React.Component {

  componentWillMount() {
    const { dispatch } = this.props;
    const { watchFirebasePhotosRef } = actions;
    dispatch(watchFirebasePhotosRef());
  }

  render(){
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} /> />
          <Route path='/about' component={About} /> />
          <Route path='/photoinput' render={(props)=><PhotoInput currentRouterPath={props.location.pathname} />} />
          <Route exact path='/photos' render={()=>
            <PhotoList photoList={this.props.masterPhotoList} selectedPhoto={this.props.selectedPhoto}/>} />
          <Route exact path='/detailview' render={()=>
            <DetailView photoList={this.props.masterPhotoList} selectedPhoto={this.props.selectedPhoto}/>} />
        </Switch>
        <Footer />
      </div>
    );
  }
}


Body.propTypes = {
  masterPhotoList: PropTypes.object,
  selectedPhoto: PropTypes.string
};

const mapStateToProps = state => {
  return {
    selectedPhoto: state.selectedPhoto,
    masterPhotoList: state.masterPhotoList
  };
};

export default withRouter(connect(mapStateToProps)(Body));
