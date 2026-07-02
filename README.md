# MIGE OS

MUCIZECHAİN Monorepo - Production Foundation

## Overview

MIGE OS, blockchain delillerini toplamak, derlemek ve analiz etmek için production-grade monorepo yapısı.

## Packages

### Sprint 1 (Foundation) ✅

- **@mucizework/common** — Result Pattern, Hash Service, UUID, Clock, Retry Policy, Error Hierarchy
- **@mucizework/normalizer** — Blockchain enum, CanonicalID
- **@mucizework/core-contracts** — Provenance interface
- **@mucizework/evidence-compiler** — Evidence, Compiler, Handler, Validator, Event Bus, Test Suite

## Installation

```bash
npm install
```

## Development

```bash
# Build
npm run build

# Test
npm run test

# Type check
npm run typecheck

# Lint
npm run lint
```

## License

MIT