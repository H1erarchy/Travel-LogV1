import React from 'react';
import CardItem from './CardItems';
import './Cards.css';

function Cards() {
  const photos = [
    {
      id: 1,
      src: 'img-2.jpg',
      text: 'The Eiffel Tower',
      label: 'France'
    },
    {
      id: 2,
      src: 'img-3.jpg',
      text: 'The Colosseum',
      label: 'Italy'
    },
   {id: 3,
    src: 'img-4.jpg',
    text: 'The Grand Canyon',
    label: 'Arizona'},
   {id: 4,
    src: 'img-5.jpg',
    text: 'Stonghedge',
    label: 'England'},
   {id: 5,
    src: 'img-6.jpg',
    text: 'The Pyramids',
    label: 'Egypt'}
  ];

  return (
    <div className='cards'>
      <h1>Planning a trip? Think about some of these awesome locations TRVL users have been to!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {photos.map((photo) => (
              <CardItem
                key={photo.id}
                src={photo.src}
                text={photo.text}
                label={photo.label}
                path={`/post/${photo.id}`}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;