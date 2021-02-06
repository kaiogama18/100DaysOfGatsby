import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import { Badge, ListItem, UnorderedList } from '@chakra-ui/react'
import SEO from '../components/seo'
export const query = graphql`
  query MyQuery {
    allContentfulCity {
      edges {
        node {
          name
          description
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
    <>
    <SEO/>
    <Layout>
      <UnorderedList>
        {
          data.allContentfulCity.edges.map(({ node: city }) => (
            <ListItem key={city.name}>
              <Link to={city.gatsbyPath}> <Badge>{city.name}</Badge> - </Link>
              {city.description} - {city.location.lat} - {city.location.lon}
            </ListItem>
          ))
        }
      </UnorderedList>
    </Layout>
    </>
  )
}