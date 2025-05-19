function getRoute() {
    var url = window.location.href
    var urlobj = new URL(url)
    var params = new URLSearchParams(urlobj.search)
    return params.get('route')
}

function reloadMath() {
    MathJax.Hub.Typeset();
}

function withNewRoute(new_loc) {
    var url = window.location.href
    var urlobj = new URL(url)
    var params = new URLSearchParams(urlobj.search)
    params.set('route', new_loc)
    return urlobj.pathname + "?" + params.toString() 
}

function getLocation(obj, path) {
    var pathClone = path.slice()
    var loc = obj
    while (pathClone.length > 0) {
        loc = loc.subcategories[pathClone.shift()]
    }
    return loc
}

function pathToString(path) {
    var str = 'one-page-notes'
    var pathClone = path.slice()
    while (pathClone.length > 0) {
        str += '/' + pathClone.shift()
    }
    return str
}

function updateDisplay(obj, path) {
    var entry = getLocation(obj, path)
    document.getElementById("entry_title").innerText = entry.name
    document.getElementById("entry_path").innerText = pathToString(path)
    document.getElementById("entry_desc").innerHTML = entry.desc
    subcat_list = document.getElementById("subcategory_list")
    subcat_list.innerHTML = ''
    for (var subcat in entry.subcategories) {
        var x = document.createElement('li')
        var y = document.createElement('a')
        y.innerText = entry.subcategories[subcat].name
        y.href = 'javascript:goTo("' + subcat + '")'
        x.appendChild(y)
        subcat_list.appendChild(x)
    }
    cosmeticUpdate();
}

function cosmeticUpdate() {
    let pre_tags = Array.from(document.getElementsByTagName("pre"));
    let code_tags = Array.from(document.getElementsByTagName("code"));
    trimmer = (el) => { el.textContent = el.textContent.replace(/^\n|\n$/g, ''); }
    pre_tags.forEach(trimmer);
    code_tags.forEach(trimmer);
    reloadMath();
}

function goBack() {
    currentPath.pop()
    history.pushState("", null, withNewRoute(currentPath.join(',')))
    updateDisplay(one_page_notes, currentPath)
}

function goTo(subcat) {
    currentPath.push(subcat)
    history.pushState("", null, withNewRoute(getRoute() + "," + subcat))
    updateDisplay(one_page_notes, currentPath)
}

if (getRoute() == null) window.location.search = "?route="

var currentPath = getRoute().split(",")
if (currentPath[0] == "") currentPath = currentPath.slice(1)

