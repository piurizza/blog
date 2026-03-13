function escapeHtml(text) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
}

function doSearch(term) {
    var resultsEl = document.getElementById('lunrsearchresults');
    var ul = document.createElement('ul');
    resultsEl.innerHTML = '';
    if (!term || !window.searchIndex) {
        resultsEl.appendChild(ul);
        return false;
    }

    var header = document.createElement('p');
    header.textContent = "Search results for '" + term + "'";
    resultsEl.appendChild(header);
    resultsEl.appendChild(ul);

    var results = window.searchIndex.search(term, { expand: true });
    var hasVisible = false;

    for (var i = 0; i < results.length; i++) {
        var item = results[i];
        var ref = item.ref;
        var doc = item.doc;
        var title = doc.title || '';
        var body = doc.body || '';
        var url = ref;

        if (title === 'Blog' || title === 'About' || url.includes('/categories/')) {
            continue;
        }

        hasVisible = true;
        var li = document.createElement('li');
        li.className = 'lunrsearchresult';
        var a = document.createElement('a');
        a.href = url;
        var titleSpan = document.createElement('span');
        titleSpan.className = 'title';
        titleSpan.textContent = title;
        var bodySpan = document.createElement('span');
        bodySpan.className = 'body';
        var bodyIndex = body.toLowerCase().indexOf(term.toLowerCase());
        if (bodyIndex >= 0) {
            var body_pre = '...' + body.substr(Math.max(0, bodyIndex - 30), 30);
            var body_post = body.substr(bodyIndex, 70) + '...';
            bodySpan.textContent = body_pre + ' ' + body_post;
        }
        a.appendChild(titleSpan);
        a.appendChild(document.createElement('br'));
        a.appendChild(bodySpan);
        li.appendChild(a);
        ul.appendChild(li);
    }

    if (!hasVisible) {
        var li = document.createElement('li');
        li.className = 'lunrsearchresult';
        li.textContent = 'No results found...';
        ul.appendChild(li);
    }

    return false;
}

function initSearch() {
    var script = document.createElement('script');
    script.src = '/search_index.en.js';
    script.onload = function () {
        if (typeof elasticlunr !== 'undefined' && typeof searchIndex !== 'undefined') {
            window.searchIndex = elasticlunr.Index.load(searchIndex);
        }
    };
    document.head.appendChild(script);
}

document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('lunrsearchform');
    if (form) {
        initSearch();
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            doSearch(document.getElementById('lunrsearch').value);
        });
    }
});
