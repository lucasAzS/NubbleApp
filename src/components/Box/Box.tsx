import {
  BackgroundColorProps,
  BorderProps,
  LayoutProps,
  SpacingProps,
  SpacingShorthandProps,
  backgroundColor,
  border,
  createBox,
  createRestyleComponent,
  layout,
  spacing,
} from '@shopify/restyle';
import {Theme} from '../../theme/theme';
import {
  TouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps,
} from 'react-native';

export const Box = createBox<Theme>();

export type TouchableOpacityBoxProps = BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  SpacingShorthandProps<Theme> &
  RNTouchableOpacityProps;

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>([backgroundColor, spacing, layout, border], TouchableOpacity);
