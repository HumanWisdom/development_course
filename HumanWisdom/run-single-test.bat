@echo off
REM Script to run a single test file with coverage
REM Usage: run-single-test.bat path/to/test.spec.ts [--coverage]

setlocal

if "%~1"=="" (
    echo Error: Please provide a test file path
    echo Usage: run-single-test.bat path/to/test.spec.ts [--coverage]
    echo Example: run-single-test.bat projects/shared/component/home/home.component.spec.ts --coverage
    exit /b 1
)

set TEST_FILE=%~1
set COVERAGE_FLAG=

REM Check if coverage flag is provided
if "%~2"=="--coverage" (
    set COVERAGE_FLAG=--code-coverage --no-watch
    echo Running test with coverage...
) else (
    echo Running test in watch mode...
)

REM Convert file path to glob pattern
set TEST_PATTERN=%TEST_FILE:/=\\%

echo.
echo ========================================
echo Running test: %TEST_FILE%
echo ========================================
echo.

REM Run the test
call npm run ng -- test --include="%TEST_PATTERN%" %COVERAGE_FLAG% --project=adults

if %COVERAGE_FLAG% NEQ "" (
    echo.
    echo Coverage report generated at: coverage/adults/index.html
    echo To view the report, run: npm run coverage:report
)

endlocal
