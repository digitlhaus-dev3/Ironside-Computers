import React from 'react'
import HStack from '../HStack'
import Heading from '../Heading'
import Text from '../Text'
import { Box } from '@chakra-ui/react'

const CartItemDetails = ({ options }) => {
  return (
    <div>
      <Heading as="h6" size="sm">
        Details
      </Heading>
      {options.map(option => {
        return (
          <HStack spacing="8px">
            <Box fontSize="sm">{option.name}</Box>
            <Text fontSize="sm">{option.value}</Text>
          </HStack>
        )
      })}
    </div>
  )
}

export default CartItemDetails
