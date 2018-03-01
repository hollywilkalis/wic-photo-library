import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import PhotoList from './PhotoList';
import { v4 } from 'uuid';

class Body extends React.Component {

  constructor(props) {
    super(props);
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
          },
        }
      }
    }

  render(){
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/photolist' render={(props)=><PhotoList photoList={this.state.masterPhotoList} />} />
        </Switch>
      </div>
      );
  }
}

export default Body;
