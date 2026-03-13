# Default recipe
default: build verify

# Build the Zola site
build:
    zola build

# Serve locally for development
serve:
    zola serve

# Run all verification checks
verify: verify-source verify-build

# Verify source files
verify-source:
    #!/usr/bin/env bash
    set -euo pipefail
    source scripts/check.sh

    echo "=== Source verification ==="

    # Security: search.js has XSS protection
    check "$(grep -q 'escapeHtml' static/js/search.js && echo true || echo false)" \
        "search.js has escapeHtml sanitization"

    check "$(grep -q 'textContent' static/js/search.js && echo true || echo false)" \
        "search.js uses textContent for safe DOM insertion"

    # Security: CSP
    check "$(grep -q 'unsafe-inline' netlify.toml && echo false || echo true)" \
        "CSP does not contain unsafe-inline"

    check "$(grep -q 'Strict-Transport-Security' netlify.toml && echo true || echo false)" \
        "HSTS header present"

    check "$(grep -q '/css/\*' netlify.toml && echo true || echo false)" \
        "Static asset cache headers configured"

    # Build config
    check "$(grep -q 'zola build' netlify.toml && echo true || echo false)" \
        "Netlify uses zola build command"

    check "$(grep -q 'ZOLA_VERSION' netlify.toml && echo true || echo false)" \
        "Zola version pinned in Netlify config"

    # Content
    check "$(test -f content/blog/_index.md && echo true || echo false)" \
        "Blog section index exists"

    check "$(test -f content/about.md && echo true || echo false)" \
        "About page exists"

    # Accessibility
    check "$(grep -q 'sr-only' templates/index.html && echo true || echo false)" \
        "Search input has accessible label"

    check "$(grep -q 'role=' templates/index.html && echo true || echo false)" \
        "Search form has role=search"

    # Templates
    check "$(test -f templates/base.html && echo true || echo false)" \
        "Base template exists"

    check "$(test -f templates/blog-page.html && echo true || echo false)" \
        "Blog page template exists"

    check "$(test -f templates/categories/single.html && echo true || echo false)" \
        "Category taxonomy template exists"

    report

# Verify build output
verify-build:
    #!/usr/bin/env bash
    set -euo pipefail
    source scripts/check.sh

    echo "=== Build output verification ==="

    check "$(test -d public && echo true || echo false)" \
        "Build output directory exists"

    check "$(test -f public/index.html && echo true || echo false)" \
        "Index page generated"

    check "$(test -f public/about/index.html && echo true || echo false)" \
        "About page generated"

    check "$(test -f public/404.html && echo true || echo false)" \
        "404 page generated"

    # Feed and categories only generated when posts exist
    if ls content/blog/*.md 2>/dev/null | grep -qv _index; then
        check "$(test -f public/atom.xml && echo true || echo false)" \
            "Atom feed generated"
        check "$(test -f public/categories/index.html && echo true || echo false)" \
            "Categories page generated"
    fi

    check "$(test -f public/search_index.en.js && echo true || echo false)" \
        "Search index generated"

    check "$(test -f public/elasticlunr.min.js && echo true || echo false)" \
        "Elasticlunr JS generated"

    # Check dynamic footer year
    check "$(grep -q "$(date +%Y)" public/index.html 2>/dev/null && echo true || echo false)" \
        "Footer contains current year"

    check "$(test -f public/js/search.js && echo true || echo false)" \
        "search.js in build output"

    report

# Clean build artifacts
clean:
    rm -rf public
