import { useBreakpointValue,Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/SideBar";
import Link from "next/link"

export default function UserList(){

  const isWideVersion = useBreakpointValue({
    base:false,
    lg: true
  })

    return(
      <Box>
        <Header/>
        <Flex 
            width="100%"
            my="6"
            maxWidth={1480}
            mx="auto"
            px="6"
        >
          <SideBar/>
          <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
              <Heading size="lg" fontWeight="normal"> Usuários </Heading>
              <Link href="/users/create" passHref>
                <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20" />}> 
                    Criar Novo
                </Button>
              </Link>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4","4","6" ]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink"  />
                </Th>
                <Th>Usuários</Th>
                { isWideVersion && <Th> Data de cadastro </Th> }
                <Th>Data de cadastro</Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4","4","6" ]}>
                  <Checkbox colorScheme="pink"  />
                </Td>
                <Td>
                  <Box>
                      <Text fontWeight="bold">Davi Marques</Text>
                      <Text fontSize="sm" color="gray.300">davimgcb@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>09 de Abril, 2021</Td> }
                
              </Tr>
            </Tbody>
          </Table>
          <Pagination/>
          </Box>
        </Flex>
      </Box>
    )
}