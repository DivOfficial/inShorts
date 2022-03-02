import React from 'react'
import '../Styling/NewsCard.css'
const NewsCard = ({ newsItem }) => {
     // console.log(newsItem);
     const fullDate = new Date(newsItem.publishedAt);
     let date = fullDate.toString().split(" ")
     const hour = parseInt(date[4].substring(0, 2))
     const time = hour > 12 ? true : false

     return (
          <div className="newsCard">
               <img className="newsImage" src={newsItem.urlToImage ? newsItem.urlToImage : "http://accordelectrotechnics.in/img/product/no-preview/no-preview.png"} alt={newsItem.title} />
               <div className="newsText">
                    <div>
                         <span className="title">{newsItem.title}</span>
                         <div className="author">
                              <a className="link" href={newsItem.url} target="_blank"><b>Short </b></a>
                              <span className="muted">
                                   by {newsItem.author ? newsItem.author : 'unknown'} /{' '}{time ? `${hour - 12}:${date[4].substring(3, 5)} pm` : `${hour}:${date[4].substring(3, 5)} am`} on {' '} 
                                    {date[2]} {date[1]} {date[3]}, {date[0]}
                              </span>
                         </div>
                    </div>
                    <div className="lowerNewsText">
                         <div className="desc">
                              {newsItem.description}
                         </div>
                         <span className="readmore">
                              Read more at{' '}
                              <a className="link" href={newsItem.url} target="_blank"><b>{newsItem.source.name}</b></a>
                         </span>
                    </div>
               </div>
          </div>
     )
}
export default NewsCard
