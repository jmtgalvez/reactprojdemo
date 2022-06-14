import React from 'react';

export default function BulletinBoard(props) {
  return (
    <div>
        <h3 
            style={
            props.id
            ? {}
            : {display: 'none'}
              }
        >
            ID: {props.id}
        </h3>
        <h3 
            style={
            props.category
            ? {}
            : {display: 'none'}
              }
        >
            Category: {props.category}
        </h3>
        <h3
            style={
            props.post
            ? {}
            : {display: 'none'}
            }
        >
            {/* {props.post
            ? `Post:`
            : ''}
            {props.post} */}
            Post: {props.post}
        </h3>
        <br></br>
    </div>
  )
}
