# Quality Rules

## Code Quality Standards
- **No Magic Numbers/Strings**: Avoid magic numbers and magic strings
- **Comprehensive Renaming**: When renaming symbols (variables, enums, functions, etc.), do thorough search to ensure all references are updated, including both product code and test code

## Build and Testing Requirements
- **Default Testing**: When making code changes, by default you should also run build and tests
- **Fix Build Errors**: If there are any build errors or test failures, fix them without needing explicit request
- **Review Readiness**: When asking for review (reject/accept) of changes, ensure the changes have passed build and tests

## Code Review Standards
- All changes must compile successfully
- All existing tests must pass
- New functionality should have appropriate test coverage
- Code should follow established patterns and conventions in the codebase 