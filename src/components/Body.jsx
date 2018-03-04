import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './Home';
import PhotoList from './PhotoList';
import { v4 } from 'uuid';
import About from './About';
import { connect } from 'react-redux';

class Body extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      masterPhotoList: {
        1: {
          imgTitle: 'Clinic shot with certifier and med tech',
          longDesc: 'Clinic setting with young participant and medical technician and WIC coordinator',
          contentCategory: 'clinic',
          contentKeywords:
            'clinic medical technician child toddler participant',
          orientation: 'landscape',
          thumbnailURL: 'https://github.com/hollywilkalis/capstone-planning/blob/master/samples/CLN_014_PPT.jpg?raw=true',
          socialmediaURL: 'https://github.com/hollywilkalis/capstone-planning/blob/master/samples/CLN_014_FB_cover.jpg',
          printURL: 'https://github.com/hollywilkalis/capstone-planning/blob/master/samples/CLN_014_print.jpg',
          powerPointURL: 'https://github.com/hollywilkalis/capstone-planning/blob/master/samples/CLN_014_PPT.jpg',
          location: 'Douglas County, Oregon',
          photoDate: '09/2018',
          photographer: '',
          useRestrictions: 'for Oregon WIC and WIC clinic use only',
          },

        2: {
          imgTitle: 'Participant checking in at clinic',
          longDesc: 'Shot of a participant and child checking in for WIC appointment',
          contentCategory: 'clinic',
          contentKeywords: 'clinic',
          orientation: 'landscape',
          thumbnailURL: 'https://github.com/hollywilkalis/capstone-planning/blob/master/samples/CLN_025_FB.jpg?raw=true',
          socialmediaURL: 'https://github.com/hollywilkalis/capstone-planning/blob/master/samples/CLN_025_FB_cover.jpg',
          printURL: 'https://github.com/hollywilkalis/capstone-planning/blob/master/samples/CLN_025_print.jpg',
          powerPointURL: 'https://github.com/hollywilkalis/capstone-planning/blob/master/samples/CLN_025_FB.jpg',
          imageStyle: 'photo',
          location: 'Josephine County, Oregon',
          photoDate: '09/2017',
          photographer: 'p2',
          useRestrictions: 'for Oregon WIC and WIC clinic use only',
        },
        3: {
          imgTitle: 'Clinic shot with certifier and med tech',
          longDesc: 'Clinic setting with young participant and medical technician and WIC coordinator',
          contentCategory: 'clinic',
          contentKeywords:
            'clinic medical technician child toddler participant',
          orientation: 'landscape',
          thumbnailURL: 'https://github.com/hollywilkalis/capstone-planning/blob/master/samples/CLN_014_PPT.jpg?raw=true',
          socialmediaURL: 'https://github.com/hollywilkalis/capstone-planning/blob/master/samples/CLN_014_FB_cover.jpg',
          printURL: 'https://github.com/hollywilkalis/capstone-planning/blob/master/samples/CLN_014_print.jpg',
          powerPointURL: 'https://github.com/hollywilkalis/capstone-planning/blob/master/samples/CLN_014_PPT.jpg',
          location: 'Douglas County, Oregon',
          photoDate: '09/2018',
          photographer: '',
          useRestrictions: 'for Oregon WIC and WIC clinic use only',
          }
        },
        selectedPhoto: null
        };
        this.handlePhotoSelection = this.handlePhotoSelection.bind(this);

    }
    handlePhotoSelection(photoId) {
      this.setState({selectedPhoto: photoId});
      alert('selected this photo:' + photoId);
    }

  render(){
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} /> />
          <Route path='/about' component={About} /> />
          <Route path='/photolist' render={()=><PhotoList onPhotoSelection={this.handleSelectingPhoto}
          photoList={this.state.masterPhotoList} />} />
        </Switch>
      </div>
      );
  }
}


Body.propTypes = {
  photoList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    photoList: state.photoList
  };
};

export default withRouter(connect(mapStateToProps)(Body));
