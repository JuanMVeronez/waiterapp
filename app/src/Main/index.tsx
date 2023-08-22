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

export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState<string | null>(null);

  function handleSaveTable(table: string) {
    setSelectedTable(table);
  }

  return (
    <>
      <Container>
        <Header />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer>
          <Menu />
        </MenuContainer>

      </Container>
      <Footer>
        <SafeFooter>
          {!selectedTable && (
            <Button onPress={() => setIsTableModalVisible(true)}>Novo Pedido</Button>
          )}
        </SafeFooter>
      </Footer>

      <TableModal
        onSave={handleSaveTable}
        onClose={() => setIsTableModalVisible(false)}
        visible={isTableModalVisible}
      />
    </>
  );
}
