// Script
var version = "0.0.3";
console.log('STUDYING WORKS: v'+version);

// Add links
var courses = ["ap-chem", "ap-calc", "ap-lang", "apush", "ap-physics"];
const unitsPerCourse = 9;
for(let i = 0; i < courses.length; i++) {
    // Get ID
    var thislk = document.getElementById("lk-"+courses[i]);
    // Add
    for(let j = 0; j < unitsPerCourse; j++) {
        var content = (j+1) + "  ";
        let thisunitlk = document.createElement('a');
        let thisj = j;
        let thiscoursename = courses[i];
        let pgtoload = thiscoursename+"-"+(j+1);
        thisunitlk.id = "lk-"+courses[i]+"-"+(j+1);
        thisunitlk.innerText = content;
        thisunitlk.dataset.pgtoload = pgtoload;
        thislk.append(thisunitlk);
        thisunitlk.onclick = function() {
            try {
                var divtoload = document.getElementById('pg-'+thisunitlk.dataset.pgtoload);
                divtoload.style.display = 'block';
                console.log('Page loaded: pg-'+thisunitlk.dataset.pgtoload);
            }
            catch(err) {
                console.log('ERR on loading page: pg-'+thisunitlk.dataset.pgtoload);
            }
        }
    }
}