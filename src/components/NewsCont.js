import { Container } from '@mui/material'
import React from 'react'
import '../Styling/NewsCont.css'
import NewsCard from './NewsCard'

const NewsCont = ({ newsArray, newsResults, loader, setLoader }) => {
     return (
          <Container style={{marginTop: '65px'}} maxWidth='md'>
               <div className="content">
                    <div className="downloadMsg">
                         <span className="downloadText">For the best experience use inshorts app on your smartphone</span>
                         <div className="links">
                              <a href="https://itunes.apple.com/us/app/news-in-shorts/id892146527" target="_blank">
                                   <img src="https://assets.inshorts.com/website_assets/images/appstore.png" alt="appStore" />
                              </a>
                              <a target="_blank" href="https://play.google.com/store/apps/details?id=com.nis.app&amp;referrer=utm_source%3DNews%2520In%2520Shorts%2520Website">
                                   <img src="https://assets.inshorts.com/website_assets/images/playstore.png" alt="play store" />
                              </a>
                         </div>
                    </div>
                    {
                         newsArray.map((newsItem) => {
                              return <NewsCard newsItem={newsItem} key={newsItem.title} />
                         })
                    }
                    {
                         loader <= newsResults && (
                              <>
                                   <hr />
                                   <button className="loader" onClick={() => setLoader(loader + 10)}>
                                        Load More
                                   </button>
                              </>
                         )
                    }
               </div>
          </Container>
     )
}

export default NewsCont
