import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

/** Creating a safe area to Android and iOS
 * When we create an app and need to implement layouts to different devices we can use SafeAreaView to use only the available area on iOS devices
 * But this doesn't work to Android devices, then we need to get the StatusBar.currentHeight to create a margin on Android devices, "having a safe Android area"
 * This value, StatusBar.currentHeight, is null on iOS devices.
 */

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0px'};
  flex: 1;

  background: #fafafa;
`;

export const CategoriesContainer = styled.View`
  height: 73px;
  margin-top: 34px;
`;

export const MenuContainer = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  min-height: 110px;
  background: #fff;
  padding: 16px 24px;
`;

export const SafeFooter = styled.SafeAreaView``;

export const CenteredContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;
