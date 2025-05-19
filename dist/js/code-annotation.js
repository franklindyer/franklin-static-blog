function annotateText(content) {
    let replacer = (match, p1, offset, str) => `<span class='annotated-snippet'>${p1}</span>`;
    let annotated = content.replace(/ɑ([^β]+)β/g, replacer);
    return annotated;
}

const defaultSnipText = "Mouse over snippets of the above code to see explanations of how they work.";

function annotateElement(id) {
    let elt = document.getElementById(id);
    elt.innerHTML = annotateText(elt.innerHTML);
    let snips = elt.getElementsByClassName("annotated-snippet");
    let infoBox = document.getElementById(`${id}-info`);
    infoBox.textContent = defaultSnipText;
    Array.from(snips).forEach((snip, i) => {
        snip.id = `${id}-${i}`;
        snip.onmouseover = () => { 
            snip.style.backgroundColor = "rgba(255,255,0,0.3)";
            infoBox.textContent = annotations[snip.id]; 
        };
        snip.onmouseleave = () => {
            snip.style.backgroundColor = "rgba(0,0,0,0)";
            infoBox.textContent = defaultSnipText;
        }
    });
}

Array.from(document.getElementsByClassName("annotated-code")).forEach((elt) => {
    annotateElement(elt.id);
});

