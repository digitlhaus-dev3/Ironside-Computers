import * as React from 'react'
import { useMultiStyleConfig } from '@chakra-ui/react'
import { formatMoney } from 'Components/Utils'
import Flex from 'Components/Flex'
import Grid from 'Components/Grid'
import GridItem from 'Components/GridItem'
import Heading from 'Components/Heading'
import Image from 'Components/Image'
import Link from 'Components/Link'
import Text from 'Components/Text'
import Button from '../Button'
import QuantitySelector from '../QuantitySelector'
import Divider from '../Divider'
import Stack from "../Stack";

const PRODUCT_MAX_QUANTITY = 150
const PRODUCT_MIN_QUANTITY = 1

const CartItemMain = ({ product, onQuantityChange, onEdit, onSave, onDelete }) => {
  const { title, subtitle, price, quantity, imageUrl, slug } = product
  const productUrl = slug ? `/products/${slug}` : '#'

  const [soldOut] = React.useState(false)
  const [quantityState, setQuantityState] = React.useState(() => ({
    min: PRODUCT_MIN_QUANTITY,
    max: PRODUCT_MAX_QUANTITY,
    quantity: quantity || 1,
  }))

  React.useEffect(() => {
    setQuantityState(prevState => ({ ...prevState, quantity }))
  }, [quantity])

  const onChangeItemQuantity = () => {
    onQuantityChange()
  }

  const styles = useMultiStyleConfig('CartItem', { soldOut })

  return (
    <Grid
      sx={styles.grid}
      templateAreas={{
        base: "'thumbnail name action-button' 'thumbnail price price'",
        md: "'thumbnail name price action-button'",
      }}
      templateColumns={{
        base: '5rem 1fr 1rem',
        md: '7.5rem 1fr 1fr 1fr',
      }}
    >
      <GridItem gridArea="thumbnail">
        <Link href={productUrl}>
          <Image src={imageUrl} alt="" htmlWidth="180" htmlHeight="120" />
        </Link>
      </GridItem>

      <GridItem gridArea="name">
        <Link href={productUrl}>
          <Heading as="h3" size="sm" sx={styles.heading}>
            {title}
          </Heading>
          {subtitle && <Text sx={styles.textSubtitle}>{subtitle}</Text>}
        </Link>
        {soldOut && <Text sx={styles.textSoldOut}>Sold Out</Text>}
      </GridItem>

      <GridItem gridArea="price" sx={styles.gridItem}>
        <Flex sx={styles.wrap}>
          <QuantitySelector
            currentValue={quantityState.quantity}
            minValue={quantityState.min}
            maxValue={quantityState.max}
            onChange={onChangeItemQuantity}
          />
          <Text sx={styles.textTotalPrice}>{formatMoney({ money: Number(price) * quantity })}</Text>
        </Flex>
      </GridItem>

      <GridItem gridArea="action-button" sx={styles.gridItemLast}>
        <Stack direction="row" h="100" p={4}>
          <Button size="md" onClick={onEdit}>
            Edit
          </Button>
          <Divider orientation="vertical" />
          <Button size="md" onClick={onSave}>
            Save
          </Button>
          <Divider orientation="vertical" />
          <Button size="md" onClick={onDelete}>
            Delete
          </Button>
        </Stack>
      </GridItem>
    </Grid>
  )
}

export default CartItemMain
