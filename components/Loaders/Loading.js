import React from 'react'
import ContentLoader from 'react-content-loader'

const Loading = (props) => (
    <div>
        <ContentLoader
    speed={2}
    width={'98%'}
    height={460}
    viewBox="0 0 400 160"
    backgroundColor="#007694"
    foregroundColor="#673dff"
    {...props}
  >
    <circle cx="70.2" cy="73.2" r="41.3" />
    <rect x="129.9" y="29.5" width="125.5" height="12" />
    <rect x="129.9" y="64.7" width="250" height="10" />
    <rect x="129.9" y="97.8" width="250" height="10" />
    <rect x="129.9" y="132.3" width="212.5" height="10" />
  </ContentLoader>

    <style jsx>{`
        div {
            width: 100%;
            height: 100%;
            display: flex;
            padding: 5px;  
            justify-content: center;
        }
    `}</style>
    </div>
)

export default Loading
