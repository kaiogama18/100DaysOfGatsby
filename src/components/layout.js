import React from 'react'
import { Box, ChakraProvider } from '@chakra-ui/react'

export default function Layout({ children }) {
    return (
        <ChakraProvider>
            <Box p={4}>
                {children}
            </Box>
        </ChakraProvider>
    )
}