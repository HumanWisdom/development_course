#!/bin/bash

# HumanWisdom Unit Test Runner
# Quick script to run tests with various options

echo "🧪 HumanWisdom Unit Test Runner"
echo "================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to display menu
show_menu() {
    echo "Select test option:"
    echo ""
    echo "1) Run all tests (watch mode)"
    echo "2) Run home component tests only"
    echo "3) Run tests with coverage"
    echo "4) Run tests headless (CI mode)"
    echo "5) Run adults project tests"
    echo "6) Run teenagers project tests"
    echo "7) View coverage report"
    echo "8) Run tests and open coverage"
    echo "9) Exit"
    echo ""
}

# Function to run tests
run_test() {
    echo -e "${BLUE}Running tests...${NC}"
    echo ""
    eval "$1"
}

# Main loop
while true; do
    show_menu
    read -p "Enter your choice [1-9]: " choice
    echo ""
    
    case $choice in
        1)
            echo -e "${GREEN}Running all tests in watch mode...${NC}"
            run_test "ng test adults"
            ;;
        2)
            echo -e "${GREEN}Running home component tests...${NC}"
            run_test "ng test adults --include='**/home.component.spec.ts'"
            ;;
        3)
            echo -e "${GREEN}Running tests with coverage...${NC}"
            run_test "ng test adults --code-coverage --watch=false"
            echo ""
            echo -e "${YELLOW}Coverage report available at: coverage/adults/index.html${NC}"
            ;;
        4)
            echo -e "${GREEN}Running tests in headless mode (CI)...${NC}"
            run_test "ng test adults --watch=false --browsers=ChromeHeadless --code-coverage"
            ;;
        5)
            echo -e "${GREEN}Running adults project tests...${NC}"
            run_test "ng test adults"
            ;;
        6)
            echo -e "${GREEN}Running teenagers project tests...${NC}"
            run_test "ng test teenagers"
            ;;
        7)
            echo -e "${GREEN}Opening coverage report...${NC}"
            if [[ "$OSTYPE" == "darwin"* ]]; then
                open coverage/adults/index.html
            elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
                xdg-open coverage/adults/index.html
            elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
                start coverage/adults/index.html
            else
                echo "Please open coverage/adults/index.html manually"
            fi
            ;;
        8)
            echo -e "${GREEN}Running tests with coverage and opening report...${NC}"
            ng test adults --code-coverage --watch=false
            echo ""
            echo -e "${YELLOW}Opening coverage report...${NC}"
            sleep 2
            if [[ "$OSTYPE" == "darwin"* ]]; then
                open coverage/adults/index.html
            elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
                xdg-open coverage/adults/index.html
            elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
                start coverage/adults/index.html
            else
                echo "Please open coverage/adults/index.html manually"
            fi
            ;;
        9)
            echo -e "${GREEN}Exiting...${NC}"
            exit 0
            ;;
        *)
            echo -e "${YELLOW}Invalid option. Please try again.${NC}"
            echo ""
            ;;
    esac
    
    echo ""
    echo "Press Enter to continue..."
    read
    clear
done

