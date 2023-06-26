import React from 'react';

function Services() {
  return (
    <div className='parent'>
      <div className="card1">
        <h2>Pre-Owned Boats</h2>
        <p className="text-body">Discover the very latest offers for pre-owned JEANNEAU</p>
      </div>
      <div className='card2'>
        <h2>About Us</h2>
        <p className='text-body'>Throughout the year, the JEANNEAU Boutique offers a range of products specifically designed for life at sea.<br/> Discover our exclusive line of clothing for men and women, as well as accessories for travel,<br/> leisure activities, and even business meetings</p>
      </div>
      <div className='card3'>
        <h2>Crew</h2>
        <p className='text-body'>Our crew will always be ready to satisfy you</p>
      </div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/35zrjsGZ750"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <footer className="footer">
        <h4>Don't waste your time!Call us to enjoy the best yachts in the world!<br/></h4>
      </footer>
    </div>
  );
}

export default Services;
