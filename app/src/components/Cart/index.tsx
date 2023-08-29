import { FlatList, TouchableOpacity } from 'react-native';
import { CartItem } from '../../types/CartItem';
import { Actions, Item, ProductContainer, ProductDetails, ProductImage, QuantityContainer } from './styles';
import { Text } from '../Text';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { MinusCircle } from '../Icons/MinusCircle';

interface CartProps {
  cartItems: CartItem[];
}

export function Cart({ cartItems }: CartProps) {


  return (
    <FlatList
      data={cartItems}
      showsVerticalScrollIndicator={false}
      keyExtractor={({ product: { _id }}) => _id}
      renderItem={({ item: cartItem }) => (
        <Item>
          <ProductContainer>
            <ProductImage
              source={{
                uri: `https://studious-fishstick-w9xj956g7jrfxwx-3001.app.github.dev/uploads/${cartItem.product.imagePath}`
              }}
            />

            <QuantityContainer>
              <Text size={14} color="#666" >{cartItem.quantity}x</Text>
            </QuantityContainer>

            <ProductDetails>
              <Text size={14} weight="600">{cartItem.product.name}</Text>
              <Text size={14} color="#666">{formatCurrency(cartItem.product.price)}</Text>
            </ProductDetails>
          </ProductContainer>

          <Actions>
            <TouchableOpacity>
              <PlusCircle />
            </TouchableOpacity>
            <TouchableOpacity>
              <MinusCircle />
            </TouchableOpacity>
          </Actions>
        </Item>
      )}
    />
  );
}
