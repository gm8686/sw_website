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
        var content = "Unit "+(j+1);
        var thisunitlk = document.createElement('a');
        thisunitlk.id = "lk-"+courses[i]+"-"+(j+1);
        thisunitlk.innerText = content;
        thislk.append(thisunitlk);
        let thisj = j;
        let thiscoursename = courses[i];
        thislk.onclick = function() {
            let pgtoload = thiscoursename+"-"+(thisj+1);
            try {
                var divtoload = document.getElementById('pg-'+pgtoload);
                divtoload.style.display = 'block';
                console.log('Page loaded: pg-'+pgtoload);
            }
            catch(err) {
                console.log('ERR on loading page: pg-'+pgtoload);
            }
        }
    }
}