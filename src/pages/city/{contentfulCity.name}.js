import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { Heading, Text } from '@chakra-ui/react'

export const query = graphql`
    query ($id: String = "") {
        contentfulCity(id: { eq: $id}) {
        name
        location {
            lat
            lon
        }
        id
        description
        }
    }
`

export default function City({ data }) {
    return (
        <Layout>
            <Heading size="md" my="2">
                Hi I am {data.contentfulCity.name}
            </Heading>
            <Text mb="3">
                {data.contentfulCity.description}
            </Text>
            <Text mb="3">
                {data.contentfulCity.location.lat} - {data.contentfulCity.location.lon}
            </Text>
        </Layout>
    )
}

