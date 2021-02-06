import { Button, FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'
import Layout from '../components/layout'


export default function Contact() {


    return (
        <Layout>
            <FormControl id="first-name" isRequired>
                <FormLabel>First name</FormLabel>
                <Input placeholder="First name" variant="filled" />
            </FormControl>
            <FormControl id="email" isRequired>
                <FormLabel >Email address</FormLabel>
                <Input type="email" variant="filled" placeholder="Email" />
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <Button
                mt={4}
                colorScheme="orange"
                type="submit"
            >
                Submit
          </Button>
        </Layout>
    )
}
