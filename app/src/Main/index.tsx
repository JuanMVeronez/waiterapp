import { useState } from 'react';
import { Button } from '../components/Button';
import { Categories } from '../components/Categories';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { TableModal } from '../components/TableModal';

import {
  CategoriesContainer,
  Container,
  MenuContainer,
  Footer,
  SafeFooter,
  CenteredContainer
} from './styles';
import { Cart } from '../components/Cart';
import { CartItem } from '../types/CartItem';
import { Product } from '../types/Product';
import { ActivityIndicator } from 'react-native';
import { products as mockProducts } from '../mocks/products';
import { Empty } from '../components/Icons/Empty';
import { Text } from '../components/Text';

export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [products] = useState<Product[]>(mockProducts);
  const [isLoading] = useState(false);

  function handleAddToCart(product: Product) {
    if (!selectedTable) setIsTableModalVisible(true);

    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(cartItem => cartItem.product._id === product._id);

      if (itemIndex === -1) return [...prevState, { product, quantity: 1 }];

      const newCartItems = [...prevState];
      const item = newCartItems[itemIndex];

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity + 1
      };

      return newCartItems;
    });
  }

  function handleDecrementCartItem(product: Product) {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(cartItem => cartItem.product._id === product._id);

      const item = prevState[itemIndex];
      const newCartItems = [...prevState];

      if (item.quantity === 1) {
        newCartItems.splice(itemIndex, 1);
        return newCartItems;
      }

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity - 1
      };

      return newCartItems;
    });
  }

  function handleSaveTable(table: string) {
    setSelectedTable(table);
  }

  function handleResetOrder() {
    setSelectedTable(null);
    setCartItems([]);
  }

  return (
    <>
      <TableModal
        onSave={handleSaveTable}
        onClose={() => setIsTableModalVisible(false)}
        visible={isTableModalVisible}
      />

      <Container>
        <Header
          selectedTable={selectedTable}
          onCancelOrder={handleResetOrder}
        />

        {isLoading ? (
          <CenteredContainer>
            <ActivityIndicator size="large" color="#D73035" />
          </CenteredContainer>
        ) : (
          <>
            <CategoriesContainer>
              <Categories />
            </CategoriesContainer>

            <MenuContainer>
              {products.length > 0 ? (
                <Menu
                  products={products}
                  onAddToCart={handleAddToCart}
                />
              ) : (
                <CenteredContainer>
                  <Empty />
                  <Text color="#666" opacity={0.9} style={{ marginTop: 24 }}>Nenhum produto foi encontrado</Text>
                </CenteredContainer>
              )}
            </MenuContainer>
          </>
        )}

      </Container>
      <Footer>
        <SafeFooter>
          {!selectedTable ? (
            <Button
              onPress={() => setIsTableModalVisible(true)}
              disabled={isLoading}
            >Novo Pedido</Button>
          ) : (
            <Cart
              cartItems={cartItems}
              onAdd={handleAddToCart}
              onDecrement={handleDecrementCartItem}
              onConfirmOrder={handleResetOrder}
            />
          )}
        </SafeFooter>
      </Footer>
    </>
  );
}
