import { Button } from '../components/Button';
import { Categories } from '../components/Categories';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';

import {
  CategoriesContainer,
  Container,
  MenuContainer,
  Footer,
  SafeFooter
} from './styles';

export function Main() {
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
          <Button onPress={() => undefined}>Novo Pedido</Button>
        </SafeFooter>
      </Footer>
    </>
  );
}
