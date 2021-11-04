import { Flex, Box, Text, Avatar } from "@chakra-ui/react"

interface ProfileProps{
  showProfileData?: boolean
}

export function Profile({ showProfileData = true } : ProfileProps){
  return(
    <Flex align="center">
        {showProfileData && (
          <Box mr="4" textAlign="right">
            <Text> Davi Marques</Text> 
            <Text color="gray.300" fontSize="small"> davimgcb@gmail.com</Text>
         </Box>
        )}
      <Avatar 
          size="md"
          name="davi marques"
          src="https://github.com/davimarquesgiareta.png"
      />
    </Flex>
  )
}