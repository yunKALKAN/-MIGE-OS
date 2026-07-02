# MIGE-OS Repository Policy

**Copyright © 2026 Mucize Platform. All Rights Reserved.**

## Repository Information

**Repository:** MIGE-OS
**Classification:** Commercial Proprietary Software
**Visibility:** Private
**License:** Commercial

---

## Devin AI Agent Policy

### Core Rules

1. **Never create public repositories.**
   - All repositories must be private.
   - Code is proprietary intellectual property.

2. **Never push secrets.**
   - No API keys in code.
   - No credentials in environment files.
   - All secrets in GitHub Secrets.

3. **Never disable GitHub Secret Scanning.**
   - Secret scanning must remain enabled.
   - Push protection must remain enabled.

4. **Never bypass Branch Protection.**
   - All merges must go through pull requests.
   - All status checks must pass.
   - No force pushes to protected branches.

5. **All commits must be signed.**
   - GPG signing required.
   - Unsigned commits will be rejected.
   - Tags must be signed.

6. **All release tags must be signed.**
   - Use `git tag -s` for signed tags.
   - Verify signatures before release.

7. **Never rewrite protected branch history.**
   - No `git push --force` to main.
   - No rebase on protected branches.
   - Preserve commit history.

8. **All Pull Requests must pass:**
   - Build
   - Test
   - Type Check
   - Lint
   - Security Scan

9. **Architecture contracts marked as Frozen must not be modified without explicit approval.**
   - Sprint 1 packages are frozen.
   - Only bug fixes allowed.
   - Breaking changes require review.

10. **All new functionality must preserve deterministic behavior.**
    - Evidence compilation must be deterministic.
    - Graph operations must be reproducible.
    - Tests must validate determinism.

11. **Any breaking interface change requires a new major version proposal.**
    - SemVer must be followed.
    - Breaking changes require major version increment.
    - Deprecation notices required.

12. **Never remove Provenance information.**
    - Audit trail must be preserved.
    - Metadata must be immutable.
    - History cannot be deleted.

13. **Never remove audit metadata.**
    - All operations must be auditable.
    - Logs must be preserved.
    - Traceability is mandatory.

14. **Preserve backwards compatibility whenever possible.**
    - Deprecated APIs must remain for one major version.
    - Migration paths must be provided.
    - Breaking changes must be documented.

15. **Treat this repository as commercial intellectual property.**
    - No open source licensing.
    - No public contributions.
    - All code is proprietary.

---

## Development Guidelines

### Code Quality
- TypeScript strict mode required
- No `any` types allowed
- All functions must have return types
- Comprehensive test coverage required

### Security
- All secrets in GitHub Secrets
- No hardcoded credentials
- Regular dependency updates
- Security scanning enabled

### Documentation
- All changes must be documented
- README must reflect current state
- CHANGELOG must be updated
- Architecture decisions must be recorded

### Testing
- Unit tests for all new code
- Integration tests for critical paths
- E2E tests for user flows
- Coverage minimum 80%

---

## Release Process

1. Create release branch from `develop`
2. Update version in package.json
3. Update CHANGELOG.md
4. Run full test suite
5. Create pull request to `main`
6. Approve and merge
7. Create signed tag
8. Create GitHub Release

---

## Sprint Policy

### Sprint 1 (Foundation) - FROZEN
- Packages: common, normalizer, core-contracts, evidence-compiler
- Status: Feature freeze
- Only bug fixes allowed

### Sprint 2 (Identity Core) - PLANNED
- Identity resolver
- Identity registry
- Identity merger
- Identity repository

### Sprint 3 (Graph Platform) - PLANNED
- Graph builder
- Node factory
- Edge factory
- Graph mutation

### Sprint 4 (Query Platform) - PLANNED
- Query engine
- AST parser
- Query planner
- Execution engine

### Sprint 5 (Runtime Platform) - PLANNED
- Runtime orchestrator
- REST API
- gRPC API
- Worker system

---

## Emergency Procedures

### Security Incident
1. Immediately notify security@mucizeplatform.com
2. Create hotfix branch
3. Fix the issue
4. Run security scan
5. Expedited review
6. Emergency release

### Production Outage
1. Create incident issue
2. Investigate root cause
3. Implement fix
4. Deploy to production
5. Post-mortem document

---

## Contact

**Technical Lead:** @yunKALKAN
**Security:** security@mucizeplatform.com
**Licensing:** licensing@mucizeplatform.com