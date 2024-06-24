import React from 'react';
import Pic1 from './Image/1.jpg'

const SingleComment = (props) => {
    return(
        <div className='comments'>
        <a href="/" className='avatar'>
          <img src={props.pic} alt="Profile picture"></img>
        </a>

        <div className='content'>
          <a href="/" className='author'>
            {props.name}
          </a>

          <div className='metadata'>
            <span className='date'>
                {props.date}
            </span>
          </div>
          <div className='text'>
             {props.text}
          </div>
        </div>
      </div>

    )
}
export default SingleComment;