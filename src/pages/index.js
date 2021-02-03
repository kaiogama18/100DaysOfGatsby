import React from 'react'
import { graphql, Link } from 'gatsby'

export const query = graphql`
  query MyQuery {
    allContentfulCity {
      edges {
        node {
          name
          describer
          location {
            lat
            lon
          }
          gatsbyPath(filePath: "/city/{contentfulCity.name}")
        }
      }
    }
  }
`
export default function Home({ data }) {
  return (
    <div>
      <h1>
        Home page
      </h1>
      <ul>
        {
          data.allContentfulCity.edges.map(({ node: city }) => (
            <li key={city.name}>
              <Link to={city.gatsbyPath}>{city.name}</Link>
              {city.describer} - {city.location.lat} - {city.location.lon}
            </li>
          ))
        }
      </ul>
    </div>
  )
}