import { Badge, ListItem, UnorderedList } from "@chakra-ui/react";
import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";

export default function About({ data }) {
  const cities = data.allContentfulCity.edges;
  return (
    <Layout>
      <UnorderedList>
        {cities.map(({ node: city }) => (
          <ListItem key={city.name}>
            <Link to={city.gatsbyPath}>
              {" "}
              <Badge>{city.name}</Badge> -{" "}
            </Link>
            {city.description} - {city.location.lat} - {city.location.lon}
          </ListItem>
        ))}
      </UnorderedList>
    </Layout>
  );
}

export const query = graphql`
  query {
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
`;
