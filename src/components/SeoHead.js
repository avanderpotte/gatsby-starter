import React from 'react'
import Helmet from 'react-helmet'
import Config from 'Data/config'

const SeoHead = ({
  title = Config.siteTitle,
  description = Config.siteDescription,
  path = '',
  keywords = Config.siteKeywords,
  ogImage = Config.siteOgImage,
  twitterImage = Config.siteTwitterImage,
  isPost
}) => (
  <Helmet>
    {/* General */}
    <meta charset="utf-8"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=4.0, user-scalable=yes"/>
    <title>{title}</title>
    <link rel="canonical" href={`${Config.siteUrl}/${path}`}/>
    <meta name="description" content={description}/>
    <meta name="keywords" content={keywords}/>
    <meta name="author" content={Config.siteAuthor}/>
    <meta name="copyright" content={Config.siteCopyright}/>
    <meta name="location" content={Config.siteLocation}/>

    {/* OG meta */}
    <meta property="og:title" content={title}/>
    <meta property="og:image" content={ogImage}/>
    <meta property="og:url" content={`${Config.siteUrl}/${path}`}/>
    <meta property="og:site_name" content={title}/>
    <meta property="fb:app_id" content={Config.siteFBAppID && Config.siteFBAppID !== '' ? Config.siteFBAppID : ''} />
    <meta property="og:type" content={isPost ? 'article' : 'website'} />

    {/* Twitter meta */}
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:site" content={Config.siteTwitter}/>
    <meta name="twitter:title" content={title}/>
    <meta name="twitter:description" content={description}/>
    <meta name="twitter:image:src" content={twitterImage}/>

    {/* GOOGLE + Share */}
    <meta itemprop="name" content={title}/>
    <meta itemprop="description" content={description}/>
    <meta itemprop="image" content={ogImage}/>
  </Helmet>
)

export default SeoHead
