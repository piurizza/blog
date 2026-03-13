#!/usr/bin/env bash
# Shared test helper for justfile verification recipes
PASS=0; FAIL=0
check() {
    if [ "$1" = "true" ]; then
        echo "  PASS: $2"
        PASS=$((PASS+1))
    else
        echo "  FAIL: $2"
        FAIL=$((FAIL+1))
    fi
}
report() {
    echo ""
    echo "=== Results: $PASS passed, $FAIL failed ==="
    test "$FAIL" -eq 0
}
