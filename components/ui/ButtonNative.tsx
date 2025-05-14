import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacityProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
// Figmaトークンを使わないようにコメントアウト
// import tokens from '../../src/tokens/tokens';

// 代わりにハードコードされたデフォルト値を使用
const defaultTokens = {
  colors: {
    primary: '#FC4CFF',
    secondary: '#E5FF63',
    background: '#FFFFFF',
    disabled: '#E6C1E6',
    disabledText: '#F7ECF7',
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
  },
  radius: {
    small: 4,
    medium: 8,
    large: 16,
  },
};

export type ButtonVariant = 'primary' | 'secondary';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends TouchableOpacityProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  leftIcon,
  rightIcon,
  isLoading = false,
  style,
  textStyle,
  children,
  disabled,
  ...props
}) => {
  // ボタンの高さを決定
  const getHeight = () => {
    switch (size) {
      case 'sm': return defaultTokens.spacing.small * 4; // 32
      case 'lg': return defaultTokens.spacing.large * 2; // 48
      case 'md':
      default: return defaultTokens.spacing.medium * 2.5; // 40
    }
  };

  // 横パディングを決定
  const getPadding = () => {
    switch (size) {
      case 'sm': return defaultTokens.spacing.small * 1.5; // 12
      case 'lg': return defaultTokens.spacing.large; // 24
      case 'md':
      default: return defaultTokens.spacing.medium; // 16
    }
  };

  // フォントサイズを決定
  const getFontSize = () => {
    switch (size) {
      case 'sm': return 14;
      case 'lg': return 18;
      case 'md':
      default: return 16;
    }
  };

  // プライマリカラーを取得
  const getPrimaryColor = () => {
    return defaultTokens.colors.primary;
  };

  // セカンダリカラーを取得
  const getSecondaryColor = () => {
    return defaultTokens.colors.secondary;
  };

  // 背景色を取得
  const getBackgroundColor = () => {
    return defaultTokens.colors.background;
  };

  // 無効状態の色を取得
  const getDisabledColor = () => {
    return defaultTokens.colors.disabled;
  };

  // 無効状態のテキスト色を取得
  const getDisabledTextColor = () => {
    return defaultTokens.colors.disabledText;
  };

  // ボタンのスタイルを生成
  const getButtonStyle = () => {
    const baseStyle: ViewStyle = {
      height: getHeight(),
      paddingHorizontal: getPadding(),
      borderRadius: defaultTokens.radius[size === 'sm' ? 'small' : size === 'lg' ? 'large' : 'medium'],
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: fullWidth ? '100%' : undefined,
    };

    const variantStyle: ViewStyle = 
      variant === 'primary'
        ? {
            backgroundColor: disabled ? getDisabledColor() : getPrimaryColor(),
          }
        : {
            backgroundColor: getBackgroundColor(),
            borderWidth: 1,
            borderColor: disabled ? getDisabledColor() : getPrimaryColor(),
          };

    return [baseStyle, variantStyle, style];
  };

  // テキストのスタイルを生成
  const getTextStyle = () => {
    const baseTextStyle: TextStyle = {
      fontSize: getFontSize(),
      fontWeight: '500',
    };

    const variantTextStyle: TextStyle =
      variant === 'primary'
        ? {
            color: disabled ? getDisabledTextColor() : 'white',
          }
        : {
            color: disabled ? getDisabledColor() : getPrimaryColor(),
          };

    return [baseTextStyle, variantTextStyle, textStyle];
  };

  const isDisabled = disabled || isLoading;

  return (
    <TouchableOpacity
      style={getButtonStyle()}
      disabled={isDisabled}
      activeOpacity={0.7}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'primary' ? 'white' : getPrimaryColor()}
          style={styles.loader}
        />
      ) : (
        <>
          {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
          <Text style={getTextStyle()}>{children}</Text>
          {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
        </>
      )}
    </TouchableOpacity>
  );
};

// スタイルもデフォルトトークンを使用
const styles = StyleSheet.create({
  leftIcon: {
    marginRight: defaultTokens.spacing.small,
  },
  rightIcon: {
    marginLeft: defaultTokens.spacing.small,
  },
  loader: {
    marginRight: defaultTokens.spacing.small,
  },
}); 