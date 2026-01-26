@echo off
REM HumanWisdom Unit Test Runner for Windows
REM Quick script to run tests with various options

:menu
cls
echo.
echo =================================
echo   HumanWisdom Unit Test Runner
echo =================================
echo.
echo Select test option:
echo.
echo 1) Run all tests (watch mode)
echo 2) Run home component tests only
echo 3) Run tests with coverage
echo 4) Run tests headless (CI mode)
echo 5) Run adults project tests
echo 6) Run teenagers project tests
echo 7) View coverage report
echo 8) Run tests and open coverage
echo 9) Exit
echo.

set /p choice="Enter your choice [1-9]: "

if "%choice%"=="1" goto all_tests
if "%choice%"=="2" goto home_tests
if "%choice%"=="3" goto coverage_tests
if "%choice%"=="4" goto headless_tests
if "%choice%"=="5" goto adults_tests
if "%choice%"=="6" goto teenagers_tests
if "%choice%"=="7" goto view_coverage
if "%choice%"=="8" goto run_and_view
if "%choice%"=="9" goto exit
goto invalid

:all_tests
echo.
echo Running all tests in watch mode...
echo.
call ng test adults
goto end

:home_tests
echo.
echo Running home component tests...
echo.
call ng test adults --include="**/home.component.spec.ts"
goto end

:coverage_tests
echo.
echo Running tests with coverage...
echo.
call ng test adults --code-coverage --watch=false
echo.
echo Coverage report available at: coverage\adults\index.html
goto end

:headless_tests
echo.
echo Running tests in headless mode (CI)...
echo.
call ng test adults --watch=false --browsers=ChromeHeadless --code-coverage
goto end

:adults_tests
echo.
echo Running adults project tests...
echo.
call ng test adults
goto end

:teenagers_tests
echo.
echo Running teenagers project tests...
echo.
call ng test teenagers
goto end

:view_coverage
echo.
echo Opening coverage report...
echo.
if exist "coverage\adults\index.html" (
    start "" "coverage\adults\index.html"
) else (
    echo Coverage report not found. Please run tests with coverage first (option 3).
)
goto end

:run_and_view
echo.
echo Running tests with coverage...
echo.
call ng test --code-coverage --watch=false
echo.
echo Opening coverage report...
timeout /t 2 /nobreak >nul
if exist "coverage\adults\index.html" (
    start "" "coverage\adults\index.html"
) else (
    echo Coverage report not found.
)
goto end

:invalid
echo.
echo Invalid option. Please try again.
goto end

:end
echo.
pause
goto menu

:exit
echo.
echo Exiting...
exit /b 0

