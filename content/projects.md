+++
title = "Projects"
path = "projects"
template = "page.html"
+++

```sh
Let's build something.
```

<div class="wrap-collabsible">
  <input id="collapsible-mffbg" class="toggle" type="checkbox">
  <label for="collapsible-mffbg" class="lbl-toggle">my_fantastic_first_board_game <em>(coming soon)</em></label>
  <div class="collapsible-content">
    <div class="content-inner">
      <p>A card game built from scratch: game engine, simulations, balancing, and a web server for playtesting. Instead of manually tweaking numbers until things "feel right," RL agents play thousands of games and the math tells you what's balanced.</p>
      <ul>
        <li><strong>custom game engine</strong> supporting 2 to 5 players</li>
        <li><strong>self-play RL agents</strong> that learn strategy through millions of simulated games</li>
        <li><strong>multi-phase tuning pipeline</strong>: 2,000+ configurations narrowed down to a single champion</li>
        <li><strong>composite balance scoring</strong> across win fairness, entropy, player influence, and game stretch</li>
        <li><strong>web server</strong> for live playtesting with the tuned configuration</li>
      </ul>
      <p>Built with Python, PostgreSQL, and a lot of patience.</p>
    </div>
  </div>
</div>

<div class="wrap-collabsible">
  <input id="collapsible-gazzetta" class="toggle" type="checkbox">
  <label for="collapsible-gazzetta" class="lbl-toggle">gazzetta-newsletter <em>(concorsi pubblici aggregator)</em></label>
  <div class="collapsible-content">
    <div class="content-inner">
      <p>An automated pipeline that aggregates Italian public contest listings from multiple official sources and delivers a filtered newsletter via email.</p>
      <ul>
        <li><strong>multi-source retrieval</strong> from official government feeds and APIs (e.g. Gazzetta Ufficiale, InPA)</li>
        <li><strong>fuzzy keyword matching</strong> using Levenshtein distance to filter relevant contests across all sources</li>
        <li><strong>domain-driven design</strong> with independent retriever packages, shared pipeline kernel, and dependency injection</li>
        <li><strong>Gmail API integration</strong> for automated email delivery with results grouped by source</li>
        <li><strong>CI pipeline</strong> running ruff, mypy, and pytest on every PR</li>
      </ul>
      <p>Built with Python 3.13, feedparser, requests, and marshmallow-dataclass.</p>
      <p><a href="https://github.com/piurizza/gazzetta-newsletter">github.com/piurizza/gazzetta-newsletter</a></p>
    </div>
  </div>
</div>

<div class="wrap-collabsible">
  <input id="collapsible-gdaf" class="toggle" type="checkbox">
  <label for="collapsible-gdaf" class="lbl-toggle">gdaf <em>(geospatial data analysis framework)</em></label>
  <div class="collapsible-content">
    <div class="content-inner">
      <p>A web framework for searching, downloading, and analyzing satellite imagery. Born as a Master's thesis, then hardened with security fixes, modern tooling, and proper test coverage.</p>
      <ul>
        <li><strong>satellite imagery search</strong> via the Planet API (PlanetScope Ortho Visual), filtered by GeoJSON area of interest and date range</li>
        <li><strong>map lab</strong> for viewing downloaded TIFF rasters as PNG with coordinate metadata reprojected to WGS84</li>
        <li><strong>OpenStreetMap integration</strong> loading vector data into DuckDB for spatial queries</li>
        <li><strong>full auth flow</strong> with email verification, password recovery, CSRF protection, and secure hashing</li>
        <li><strong>CI pipeline</strong> running ruff, mypy, and pytest on every PR</li>
      </ul>
      <p>Built with Python 3.12, Flask, PostgreSQL, GDAL, Docker Compose, and Alembic.</p>
      <p><a href="https://github.com/piurizza/gdaf">github.com/piurizza/gdaf</a></p>
    </div>
  </div>
</div>
