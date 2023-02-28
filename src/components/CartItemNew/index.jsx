import React from 'react'
import CartItemMain from '../CartItemMain'
import CartItemDetails from '../CartItemDetails'
import Divider from '../Divider'
import { toast } from '@chakra-ui/react'

const CartItemNew = () => {
  const options = [
    {
      name: 'Model',
      value: '17.3" Full HD 1920x1080 LED-Backlit Display',
    },
    {
      name: 'Processor',
      value: 'Intel Core I7-7700HQ 2.8GHz Quad Core Mobile Processor',
    },
    {
      name: 'Memory',
      value: '8GB (1x8GB) DDR4 Laptop',
    },
    {
      name: 'Storage',
      value: 'No Storage',
    },
    {
      name: 'Secondary Storage',
      value: '240GB Ironside Certified SSD',
    },
    {
      name: 'Optical Drive',
      value: 'No Optical Drive',
    },
    {
      name: 'Graphics Card',
      value: 'NVIDIA GeForce GTX 1050 Ti 4GB Laptop',
    },
    {
      name: 'Operating System',
      value: 'Windows 10 64 Bit',
    },
    {
      name: 'Assembly Time',
      value: 'Standard - 10 Business Days or Less for Assembly Before Shipping',
    },
    {
      name: 'Warranty',
      value: 'Life-time U.S. Based Technical Support',
    },
    {
      name: 'Video Demo',
      value: 'No Video Demonstration',
    },
  ]
  const product = {
    title: 'Juice Box',
    subtitle: ' Level 1',
    price: 3800.34,
    quantity: 1,
    imageUrl:
      'https://ironsidecomputers.com/wp-content/uploads/2020/06/Model-I-Black-Case-Image.png',
    slug: null,
    productId: '092384092384',
    variantId: '092384092384',
  }

  const onQuantityChange = () => {
    toast({
      title: 'Quantity Changed',
      status: 'success',
      isClosable: true,
    })
  }
  const onDelete = () => {
    toast({
      title: 'Delete Click',
      status: 'success',
      isClosable: true,
    })
  }
  const onEdit = () => {
    toast({
      title: 'Edit Click',
      status: 'success',
      isClosable: true,
    })
  }
  const onSave = () => {
    toast({
      title: 'Save Click',
      status: 'success',
      isClosable: true,
    })
  }

  return (
    <div>
      <CartItemMain
        product={product}
        onQuantityChange={onQuantityChange}
        onDelete={onDelete}
        onEdit={onEdit}
        onSave={onSave}
      />
      <Divider my="6" borderBottomWidth="1px" />
      {options && options.length ? <CartItemDetails options={options} /> : undefined}
    </div>
  )
}

export default CartItemNew
