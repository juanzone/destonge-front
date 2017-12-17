import React, { Component } from 'react';
import RoomItemComponent from './room-item';
import Slider from 'react-slick';
import bgImage from '../../assets/rooms/bg.jpg';
import RoomHeaderComponent from './room-header';
import RoomTitleComponent from './room-title';
import RoomAttributesListComponent from './rooms-attributes-list/room-attribute-list'
import RoomAttributeItemComponent from './rooms-attributes-list/room-attribute-item'

import bedImg from '../../assets/bed.png';
import bathImg from '../../assets/bath.png';
import avantageImg from '../../assets/avantage.png';
import personImg from '../../assets/max.png';

class RoomsListComponent extends Component {

  render() {
    let settings = {
      dots : true,
      infinite : true,
      slidesToShow : 1,
      arrows : false,
    }
    return (
      <div className="row room-list">
        <RoomItemComponent>
          <Slider {...settings}>
            <img src={bgImage} />
          </Slider>
          <RoomHeaderComponent />
          <RoomTitleComponent />
          <RoomAttributesListComponent>
            <RoomAttributeItemComponent img={bedImg} desc="Un grand lit double" />
            <RoomAttributeItemComponent img={bathImg} desc="Une salle de bain" />
            <RoomAttributeItemComponent img={avantageImg} desc="Une terrasse avec vue sur piscine" />
            <RoomAttributeItemComponent img={personImg} desc="Pour 2 personnes maximum" />
          </RoomAttributesListComponent>
        </RoomItemComponent>
        <RoomItemComponent>
          <Slider {...settings}>
            <img src={bgImage} />
          </Slider>
          <RoomHeaderComponent />
          <RoomTitleComponent />
          <RoomAttributesListComponent>
            <RoomAttributeItemComponent img={bedImg} desc="Un grand lit double" />
            <RoomAttributeItemComponent img={bathImg} desc="Une salle de bain" />
            <RoomAttributeItemComponent img={avantageImg} desc="Une terrasse avec vue sur piscine" />
            <RoomAttributeItemComponent img={personImg} desc="Pour 2 personnes maximum" />
          </RoomAttributesListComponent>
        </RoomItemComponent>
        <RoomItemComponent>
          <Slider {...settings}>
            <img src={bgImage} />
          </Slider>
          <RoomHeaderComponent />
          <RoomTitleComponent />
          <RoomAttributesListComponent>
            <RoomAttributeItemComponent img={bedImg} desc="Un grand lit double" />
            <RoomAttributeItemComponent img={bathImg} desc="Une salle de bain" />
            <RoomAttributeItemComponent img={avantageImg} desc="Une terrasse avec vue sur piscine" />
            <RoomAttributeItemComponent img={avantageImg} desc="Une terrasse avec vue sur piscine" />
            <RoomAttributeItemComponent img={personImg} desc="Pour 2 personnes maximum" />
          </RoomAttributesListComponent>
        </RoomItemComponent>
        <RoomItemComponent>
          <Slider {...settings}>
            <img src={bgImage} />
          </Slider>
          <RoomHeaderComponent />
          <RoomTitleComponent />
          <RoomAttributesListComponent>
            <RoomAttributeItemComponent img={bedImg} desc="Un grand lit double" />
            <RoomAttributeItemComponent img={bathImg} desc="Une salle de bain" />
            <RoomAttributeItemComponent img={avantageImg} desc="Une terrasse avec vue sur piscine" />
            <RoomAttributeItemComponent img={personImg} desc="Pour 2 personnes maximum" />
          </RoomAttributesListComponent>
        </RoomItemComponent>
      </div>
    );
  }

}

export default RoomsListComponent;
