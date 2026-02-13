"use client"

import { Button, Container, Heading } from "@chakra-ui/react"

export default function Home() {
  return (
    <Container py={10}>
      <Heading mb={4}>Teste Chakra</Heading>
      <Button colorScheme="blue">Funciona 🚀</Button>
    </Container>
  )
}
