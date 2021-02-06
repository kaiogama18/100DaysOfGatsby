import React from 'react'
import { Link } from 'gatsby'
import { Box, Heading, Stack } from '@chakra-ui/react'

export default function Navbar() {
    return (
        <Box p="5" bg="orange.200">
            <Stack direction="row" justify="space-between" align="center">
                <Link to="/">
                    <Heading size="md" my="2">Logo</Heading>
                </Link>
                <Stack direction="row">
                    <Link to="/contact">
                        <Heading size="xs" my="2">Contact</Heading>
                    </Link>
                    <Link to="/about">
                        <Heading size="xs" my="2">About</Heading>
                    </Link>
                </Stack>
            </Stack>
        </Box>
    )
}

