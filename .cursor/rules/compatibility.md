# Compatibility Rules

## Cross-Platform Development Strategy

### Primary Focus
- **iOS First**: Focus on iOS implementation initially
- **Android Compatibility**: Always ensure maximum compatibility with future Android development
- **No Platform Lock-in**: Avoid iOS-specific APIs that would make Android porting difficult

## iOS Compatibility

### Device Support
- **iPhone Only**: Primary target is iPhone devices
- **iPad Compatibility Mode**: iPad will use iPhone compatibility mode (not native iPad UI)
- **No iPad-Specific Features**: Do not implement iPad-specific UI or functionality

### Orientation
- **Portrait Mode Only**: App must remain in portrait orientation
- **Rotation Handling**: When device rotates, app must stay in portrait mode
- **No Landscape Support**: Do not implement landscape layouts or functionality

### iOS Version Support
- **Minimum iOS Version**: iOS 15.0
- **Forward Compatibility**: Support all iOS versions after iOS 15
- **API Usage**: Use APIs available in iOS 15+ only
- **Deprecation Check**: Avoid deprecated APIs that may be removed in future iOS versions

## Android Compatibility Considerations

### Android Version Support
- **Minimum API Level**: API 24 (Android 7.0 Nougat)
- **Target API Level**: API 34 (Android 14)
- **Compile SDK**: API 34

### Android Compatibility Guidelines
- **Cross-Platform Libraries**: Prefer libraries that work on both iOS and Android
- **Platform Abstraction**: Use platform-agnostic code where possible
- **Native APIs**: Minimize use of iOS-specific native APIs
- **UI Framework**: Choose UI framework that supports both platforms

## Development Best Practices

### Code Architecture
- **Platform-Agnostic Core**: Keep business logic platform-independent
- **Platform-Specific Adapters**: Use adapters for platform-specific functionality
- **Shared Models**: Use shared data models across platforms
- **Configuration-Driven**: Use configuration files for platform-specific settings

### UI/UX Guidelines
- **Responsive Design**: Design for various screen sizes within portrait orientation
- **Touch Targets**: Ensure minimum 44pt touch targets for accessibility
- **Safe Areas**: Respect safe areas on both platforms
- **Navigation**: Use navigation patterns that work on both platforms

### Testing Requirements
- **iOS Testing**: Test on iOS 15+ devices/simulators
- **Cross-Platform Validation**: Regularly validate that code changes don't break Android compatibility
- **Orientation Testing**: Verify app stays in portrait mode during rotation
- **Device Testing**: Test on various iPhone screen sizes

## Technology Stack

### Primary Framework
- **React Native**: Chosen as the primary cross-platform framework
- **Shared Codebase**: Maximize code sharing between iOS and Android
- **Platform-Specific Components**: Use platform-specific components only when necessary

### React Native Best Practices
- **TypeScript**: Use TypeScript for better type safety and developer experience
- **Functional Components**: Prefer functional components with hooks
- **Platform-Specific Code**: Use `Platform.OS` checks for platform-specific logic
- **Native Modules**: Minimize custom native modules unless absolutely necessary
- **Performance**: Optimize for performance on both platforms

### Development Tools
- **Metro Bundler**: React Native's default bundler
- **React Native CLI**: For project setup and management
- **Flipper**: For debugging and performance monitoring
- **Fastlane**: For automated deployment (when needed)

### Key Libraries & Dependencies
- **Navigation**: React Navigation for cross-platform navigation
- **State Management**: Redux Toolkit or Zustand for state management
- **UI Components**: React Native Elements or NativeBase for consistent UI
- **Networking**: Axios or Fetch API for HTTP requests
- **Storage**: AsyncStorage for local data persistence

## Anti-Patterns to Avoid

❌ **iOS-Only APIs**: Using iOS-specific APIs without Android equivalents
❌ **Hardcoded Platform Assumptions**: Assuming iOS-specific behavior
❌ **Platform-Specific UI Patterns**: Using UI patterns that don't translate to Android
❌ **Native Dependencies**: Adding native dependencies that only work on one platform
❌ **Orientation-Specific Layouts**: Creating layouts that depend on landscape mode
❌ **Platform-Specific Components**: Overusing platform-specific components unnecessarily
❌ **Direct Native API Calls**: Calling native APIs directly without proper abstraction

## Migration Strategy

### Phase 1: iOS Development with React Native
- Focus on iOS implementation using React Native
- Maintain Android compatibility through shared codebase
- Use platform-agnostic components and logic

### Phase 2: Android Port
- Leverage existing React Native codebase
- Implement platform-specific UI adjustments if needed
- Maintain feature parity with iOS version 