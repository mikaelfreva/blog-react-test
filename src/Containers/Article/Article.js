import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './Article.css'


export default function Article() {

  const location = useLocation();
const article = location.state;

  console.log(article);
  return (
    <div className='article-content'>
      <h2> {article.title}</h2>
      <p>{article.body} </p>
    </div>
  )
}
