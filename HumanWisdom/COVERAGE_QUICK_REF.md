# Code Coverage Quick Reference

## 🚀 Quick Commands

### For Shared Components (START HERE!)
```bash
# Test shared components with coverage
npm run test:shared:coverage

# Test shared components in watch mode
npm run test:shared
```

### For Single File Testing
```bash
# Windows Command Prompt / PowerShell
run-single-test.bat projects/shared/component/home/home.component.spec.ts --coverage

# PowerShell
.\run-single-test.ps1 projects/shared/component/home/home.component.spec.ts -Coverage
```

### View Coverage Report
```bash
npm run coverage:report
```

---

## 📊 Available Scripts

| Command | What It Does | When to Use |
|---------|--------------|-------------|
| `npm run test:shared:coverage` | Tests shared folder with coverage | ✅ Best for starting coverage |
| `npm run test:shared` | Tests shared folder in watch mode | For developing shared tests |
| `npm run test:coverage` | Tests everything with coverage | Full coverage check |
| `npm run test:watch` | Tests everything in watch mode | General development |
| `npm run coverage:report` | Opens coverage HTML report | After running coverage |

---

## 💡 Common Patterns

### Test a Specific Component
```bash
run-single-test.bat projects/shared/component/home/home.component.spec.ts --coverage
```

### Test All Services
```bash
npm run test:single -- --include="**/services/**/*.spec.ts" --code-coverage --no-watch --project=adults
```

### Test All Components in a Folder
```bash
npm run test:single -- --include="**/component/**/*.spec.ts" --code-coverage --no-watch --project=adults
```

---

## 🎯 Coverage Thresholds

**Current Settings:**
- Statements: 50%
- Branches: 50%
- Functions: 50%
- Lines: 50%

**Shared Components:** 60% (higher standard for shared code)

---

## 📁 Where Are Coverage Reports?

- **HTML Reports**: `coverage/adults/index.html` or `coverage/shared/index.html`
- **LCOV**: `coverage/adults/lcov.info`
- **JSON**: `coverage/adults/coverage-final.json`

---

## 🔧 Tips for Faster Testing

1. **Test only what you're working on**
   - Use `run-single-test.bat` for individual files
   - Saves time when project is large

2. **Use watch mode during development**
   - Tests re-run automatically on save
   - Faster feedback loop

3. **Start with shared components**
   - Smaller scope
   - Foundation for other components
   - Easier to reach coverage goals

---

## 🐛 Quick Troubleshooting

### Tests too slow?
```bash
# Don't run all tests, run one file
run-single-test.bat path/to/your/test.spec.ts --coverage
```

### Coverage report not showing?
```bash
# Make sure you used --coverage flag or coverage script
npm run test:shared:coverage  # (includes coverage flag)
```

### Can't find test file?
```bash
# Use the correct relative path from project root
run-single-test.bat projects/shared/component/home/home.component.spec.ts
```

---

## 📚 More Information

See `COVERAGE_GUIDE.md` for complete documentation.
