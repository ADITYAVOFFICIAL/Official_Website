import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Blogcard.css"

function Blogcard(props) {
  return (
    <div className="blog-card-container">
      <Card className='blog-card' style={{ width: '18rem', marginBottom: '20px' }}>
        <Card.Img variant="top" src={props.imgSrc} style={{ borderRadius: "20px" }} />
        <Card.Body className='blog-body'>
          <Card.Title className='blog-title'>{props.title}</Card.Title>
          <Card.Text className='blog-text'>{props.aboutblog}</Card.Text>
          <Button variant="primary" className="blog-button btn" target='_blank' rel='noreffer' href={props.Mediumlink}>Medium Link</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Blogcard;
