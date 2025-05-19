let pre_tags = Array.from(document.getElementsByTagName("pre"));
let code_tags = Array.from(document.getElementsByTagName("code"));
trimmer = (el) => { el.textContent = el.textContent.trim() }
pre_tags.forEach(trimmer)
code_tags.forEach(trimmer)
