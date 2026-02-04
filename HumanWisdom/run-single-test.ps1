# PowerShell script to run a single test file with coverage
# Usage: .\run-single-test.ps1 path/to/test.spec.ts [-Coverage]

param(
    [Parameter(Mandatory=$true, Position=0)]
    [string]$TestFile,
    
    [Parameter(Mandatory=$false)]
    [switch]$Coverage
)

# Validate test file parameter
if ([string]::IsNullOrWhiteSpace($TestFile)) {
    Write-Host "Error: Please provide a test file path" -ForegroundColor Red
    Write-Host ""
    Write-Host "Usage: .\run-single-test.ps1 path/to/test.spec.ts [-Coverage]" -ForegroundColor Yellow
    Write-Host "Example: .\run-single-test.ps1 projects/shared/component/home/home.component.spec.ts -Coverage" -ForegroundColor Yellow
    exit 1
}

# Build coverage flags
$coverageFlag = ""
if ($Coverage) {
    $coverageFlag = "--code-coverage --no-watch"
    Write-Host "Running test with coverage..." -ForegroundColor Green
} else {
    Write-Host "Running test in watch mode..." -ForegroundColor Green
}

# Convert file path to glob pattern
$testPattern = $TestFile -replace '/', '\\'

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Running test: $TestFile" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Extract just the filename for the include pattern
$fileName = Split-Path $TestFile -Leaf
$includePattern = "**/$fileName"

# Run the test
$command = "npm run ng -- test --include=`"$includePattern`" $coverageFlag --project=adults"
Write-Host "Executing: $command" -ForegroundColor Gray
Write-Host ""

Invoke-Expression $command

if ($Coverage) {
    Write-Host ""
    Write-Host "Coverage report generated at: coverage/adults/index.html" -ForegroundColor Green
    Write-Host "To view the report, run: npm run coverage:report" -ForegroundColor Yellow
}
