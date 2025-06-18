# Scope Rules

## Core Principle
ALWAYS follow the scope principles described in this file when working on the code.

## Implementation Scope
- **Explicit Requests Only**: Only implement explicitly requested changes (features, bug fixes, etc.)
- **Minimal Changes**: Achieve the purpose with the least amount of code changes, unless the implementation with less code is a significant anti-pattern and code smell
- **When Uncertain**: Error on the safe side - propose the change, ask for clarification, etc. before implementing changes

## Strict Boundaries - DO NOT Deviate
- **No "Nice to Have"**: Do NOT add "nice to have" things without explicit request
- **No Unauthorized Changes**: Do NOT change existing functionality without explicit request  
- **No Unauthorized Refactoring**: Do NOT do code refactoring without explicit request

## Proposals and Reporting
Proposals are welcomed. Please propose changes any time you see an opportunity:
- **Bugs**: Report them but don't fix unless requested
- **Technical Debt**: Report them but don't implement unless requested
- **Potential Improvements**: Report them but don't implement unless requested 