import { FlatList, Modal } from 'react-native';
import { Product } from '../../types/Product';
import {
  CloseButton,
  Header,
  ImageBackground,
  ModalBody,
  IngredientsContainer,
  Ingredient,
  FooterContainer,
  Footer,
  PriceContainer
} from './styles';
import { Close } from '../Icons/Close';
import { Text } from '../Text';
import { formatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button';

interface ProductModalProps {
  visible: boolean;
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export function ProductModal({ visible, product, onClose, onAddToCart }: ProductModalProps) {

  if (!product) return null;

  function handeAddToCart() {
    onAddToCart(product!);
    onClose();
  }

  return (
    <Modal
      visible={visible}
      animationType='slide'
      presentationStyle='pageSheet'
      onRequestClose={() => onClose()}
    >
      <ImageBackground
        source={{
          uri: `https://studious-fishstick-w9xj956g7jrfxwx-3001.app.github.dev/uploads/${product.imagePath}`
        }}
      >
        <CloseButton onPress={onClose}>
          <Close />
        </CloseButton>
      </ImageBackground>
      <ModalBody>
        <Header>
          <Text size={24} weight="600">{product.name}</Text>
          <Text color="#666">{product.description}</Text>

        </Header>

        {product.ingredients.length > 0 && (
          <IngredientsContainer>
            <Text weight="600" color="#666">Ingredientes</Text>

            <FlatList
              data={product.ingredients}
              keyExtractor={({ _id }) => _id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item: ingredient,  }) => (
                <Ingredient>
                  <Text>{ingredient.icon}</Text>
                  <Text size={14} color="#666">{ingredient.name}</Text>
                </Ingredient>
              )}
            />
          </IngredientsContainer>
        )}
      </ModalBody>
      <Footer>
        <FooterContainer>
          <PriceContainer>
            <Text color="#666">Preço</Text>
            <Text size={20} weight="600">{formatCurrency(product.price)}</Text>
          </PriceContainer>
          <Button onPress={handeAddToCart}>Adicionar ao pedido</Button>
        </FooterContainer>
      </Footer>
    </Modal>
  );
}
