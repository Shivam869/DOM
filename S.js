function myfunction() {
    document.getElementById("result") .innerHTML =
    document.getElementById("Demo") .firstChild.nodeValue;
    document.getElementById("result1") .innerHTML =
    document.getElementById("Demo") .childNodes[0] .nodeValue;
}