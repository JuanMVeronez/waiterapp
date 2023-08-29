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
  SafeFooter
} from './styles';
import { Cart } from '../components/Cart';
import { CartItem } from '../types/CartItem';
import { products } from '../mocks/products';

export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState<string | null>(null);
  const [cartItems] = useState<CartItem[]>([
    {
      product: products[0],
      quantity: 2,
    },
    {
      product: products[1],
      quantity: 3,
    }
  ]);

  function handleSaveTable(table: string) {
    setSelectedTable(table);
  }

  function handleCancelOrder() {
    setSelectedTable(null);
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
          onCancelOrder={handleCancelOrder}
        />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer>
          <Menu />
        </MenuContainer>

      </Container>
      <Footer>
        <SafeFooter>
          {!selectedTable ? (
            <Button onPress={() => setIsTableModalVisible(true)}>Novo Pedido</Button>
          ) : (
            <Cart cartItems={cartItems} />
          )}
        </SafeFooter>
      </Footer>
    </>
  );
}
