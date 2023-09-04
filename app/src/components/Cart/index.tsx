import { FlatList, TouchableOpacity } from 'react-native';
import { CartItem } from '../../types/CartItem';
import { Actions, Container, Item, ProductContainer, ProductDetails, ProductImage, QuantityContainer, Summary, TotalContainer } from './styles';
import { Text } from '../Text';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { MinusCircle } from '../Icons/MinusCircle';
import { Button } from '../Button';
import { Product } from '../../types/Product';
import { useState } from 'react';
import { OrderConfirmedModal } from '../OrderConfirmedModal';
import { api } from '../../utils/api';

interface CartProps {
  selectedTable: string;
  cartItems: CartItem[];
  onAdd: (product: Product) => void;
  onDecrement: (product: Product) => void;
  onConfirmOrder: () => void;
}

export function Cart({
  selectedTable,
  cartItems,
  onAdd,
  onDecrement,
  onConfirmOrder
}: CartProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);

  const total = cartItems.reduce((acc, { product: { price }, quantity }) => acc + price * quantity, 0);

  async function handleConfirmOrder() {
    setIsLoading(true);

    await api.post('orders', {
      table: selectedTable,
      products: cartItems.map(({ product, quantity }) => (
        { product: product._id, quantity }
      )),
    });

    setIsConfirmModalVisible(true);
    setIsLoading(false);
  }

  function handleOk() {
    onConfirmOrder();
    setIsConfirmModalVisible(false);
  }

  return (
    <>
      <OrderConfirmedModal
        visible={isConfirmModalVisible}
        onOk={handleOk}
      />

      <Container>
        {cartItems.length > 0 && (
          <FlatList
            data={cartItems}
            showsVerticalScrollIndicator={false}
            style={{ maxHeight: 150 }}
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
                  <TouchableOpacity onPress={() => onAdd(cartItem.product)}>
                    <PlusCircle />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => onDecrement(cartItem.product)}>
                    <MinusCircle />
                  </TouchableOpacity>
                </Actions>
              </Item>
            )}
          />
        )}

        <Summary>
          <TotalContainer>
            {cartItems.length > 0 ? (
              <>
                <Text color="#666">Total</Text>
                <Text weight="600" size={20}>
                  {formatCurrency(total)}
                </Text>
              </>
            ) : (
              <Text color="#999">Seu carrinho está vazio</Text>
            )}
          </TotalContainer>
          <Button
            disabled={cartItems.length === 0}
            onPress={handleConfirmOrder}
            loading={isLoading}
          >Confirmar pedido</Button>
        </Summary>
      </Container>
    </>
  );
}
