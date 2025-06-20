import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  isLoading?: boolean;
}

export default function Button({
  title,
  variant = 'primary',
  isLoading = false,
  disabled,
  style,
  ...rest
}: ButtonProps) {
  const buttonStyle = [
    styles.button,
    variant === 'primary' && styles.primaryButton,
    variant === 'secondary' && styles.secondaryButton,
    variant === 'outline' && styles.outlineButton,
    disabled && styles.disabledButton,
    style,
  ];

  const textStyle = [
    styles.text,
    variant === 'primary' && styles.primaryText,
    variant === 'secondary' && styles.secondaryText,
    variant === 'outline' && styles.outlineText,
    disabled && styles.disabledText,
  ];

  return (
    <TouchableOpacity
      style={buttonStyle}
      disabled={disabled || isLoading}
      activeOpacity={0.8}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color={variant === 'outline' ? '#FF5A5F' : 'white'} size="small" />
      ) : (
        <Text style={textStyle}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    minHeight: 48,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  disabledButton: {
    backgroundColor: '#ddd',
    borderColor: '#ddd',
  },
  disabledText: {
    color: '#999',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderColor: '#FF5A5F',
    borderWidth: 1,
  },
  outlineText: {
    color: '#FF5A5F',
  },
  primaryButton: {
    backgroundColor: '#FF5A5F',
  },
  primaryText: {
    color: 'white',
  },
  secondaryButton: {
    backgroundColor: '#666',
  },
  secondaryText: {
    color: 'white',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});
