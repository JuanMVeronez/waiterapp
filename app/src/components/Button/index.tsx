import { ReactNode } from 'react';
import { Text } from '../Text';
import { Container } from './styles';
import { ActivityIndicator } from 'react-native';

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onPress: () => unknown;
}


export function Button({ children, disabled = false, loading = false, onPress }: ButtonProps) {
  return (
    <Container onPress={onPress} disabled={disabled || loading}>
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text weight="600" color="#fff">{children}</Text>
      )}
    </Container>
  );
}
