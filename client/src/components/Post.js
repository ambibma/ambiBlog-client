import React from 'react';
import {format} from 'date-fns';
import { Link } from 'react-router-dom';

export default function Post({_id, title, summary, coverURL, content,author, createdAt}) {
  return (
    <div className="post">
          <div className="image">
            <Link to={`/post/${_id}`}> 
            <img src={coverURL}/>
            </Link>
          </div>          
          <div className="texts">
          <Link to={`/post/${_id}`}> 
          <h2>{title}</h2>
          </Link>
          <p className="info">
            <span className="author">{author.username}</span>
            <time>{format(new Date(createdAt), 'MMM d yyyy H:MM')}</time>
          </p>
          <p className="summary">{summary}</p>
          </div>        
        </div>
  )
}
