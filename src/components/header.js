import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#2a2a2a',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 className="siteTitle" style={{ margin: 0,
        color: 'white',
      }}>
      {siteTitle}
      </h1>
    </div>
  </div>
)

export default Header
