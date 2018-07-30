import React from 'react';

const SeriesDetail = (props) => {
  return (
    <div>
      <p>{props.showDetail.name}</p>
      <p>Rating - {props.showDetail.rating.average}</p>
      <p>Premiered - {props.showDetail.premiered}</p>
      <p>Language - {props.showDetail.language}</p>
      <p>Genres - {props.showDetail.genres}</p>
      <p>
        <img alt="show" src={props.showDetail.image.medium}/>
      </p>
      <div dangerouslySetInnerHTML={{__html: props.showDetail.summary}}/>
    </div>
  )
}

export default SeriesDetail;
