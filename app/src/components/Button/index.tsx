import { ReactNode } from 'react';
import { Text } from '../Text';
import { Container } from './styles';

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onPress: () => unknown;
}


export function Button({ children, disabled = false, onPress }: ButtonProps) {
  return (
    <Container onPress={onPress} disabled={disabled}>
      <Text weight="600" color="#fff">{children}</Text>
    </Container>
  );
}
