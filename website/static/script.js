// Script
var version = "0.0.3";
console.log('STUDYING WORKS: v'+version);

var existingPages = ["home"];

// Course information
const courses = ["ap-chem", "ap-calc", "ap-lang", "apush", "ap-physics"];
const coursesUnits = [9, 9, 9, 9, 9];
const coursesSections = {
    "ap-chem": [ // Course name
        [ // Unit number 1
            { // Section 1
                "name": "Moles and Molar Mass", // Section name
                "url": "none" // Video URL ("none"=default to yt channel)
            },
            {
                "name": "Mass Spectroscopy of Elements",
                "url": "none"
            },
            {
                "name": "Elemental Composition of Pure Substances",
                "url": "https://www.youtube.com/watch?v=iik25wqIuFo"
            },
            {
                "name": "Mass Spectroscopy of Elements",
                "url": "none"
            },
        ],
        [ // Unit 2
            {
                "name": "Types of Chemical Bonds",
                "url": "none"
            },
            {
                "name": "Intramolecular Force and Potential Energy",
                "url": "none"
            },
            {
                "name": "Structure of Ionic Solids",
                "url": "none"
            },
            {
                "name": "Structure of Metals and Alloys",
                "url": "none"
            },
            {
                "name": "Lewis Diagrams",
                "url": "none"
            },
            {
                "name": "Resonance and Formal Charge",
                "url": "none"
            },
            {
                "name": "Periodic Trends",
                "url": "none"
            },
            {
                "name": "VSEPR and Bond Hybridization",
                "url": "none"
            }
        ]
    ]
}
// [NOTE: Consider collapsing the above bracket pair in order to improve screen space efficiency]

// Functions
function hideAllPages() {
    // Hide existing pages
    for(let i = 0; i < existingPages.length; i++) {
        try {
            if(document.getElementById('pg-'+existingPages[i]).style.display != 'none') {
                document.getElementById('pg-'+existingPages[i]).style.display = 'none';
            }
        } catch(err) {
            // Pg does not exist
        }
    }
}

// Add links / populate page divs
for(let i = 0; i < courses.length; i++) {
    // Get ID
    var thislk = document.getElementById("lk-"+courses[i]);
    // Add links
    for(let j = 0; j < coursesUnits[i]; j++) {
        // Link
        var content = (j+1) + "  ";
        let thisunitlk = document.createElement('a');
        let thisj = j;
        let thiscoursename = courses[i];
        let pgtoload = thiscoursename+"-"+(j+1);
        existingPages.push(pgtoload);
        thisunitlk.id = "lk-"+courses[i]+"-"+(j+1);
        thisunitlk.innerText = content;
        thisunitlk.dataset.pgtoload = pgtoload;
        thislk.append(thisunitlk);
        thisunitlk.onclick = function() {
            try {
                // Hide existing pages
                hideAllPages();
                // Show this page
                var divtoload = document.getElementById('pg-'+thisunitlk.dataset.pgtoload);
                divtoload.style.display = 'block';
                console.log('Page loaded: pg-'+thisunitlk.dataset.pgtoload);
            }
            catch(err) {
                console.log('ERR on loading page: pg-'+thisunitlk.dataset.pgtoload);
            }
        }
        // Populate page divs
        try {
            var thesesections = coursesSections[thiscoursename][thisj];
            for(let t = 0; t < Object.keys(thesesections).length; t++) {
                // Get link divider
                try {
                    // Find this div
                    var divtoload2 = document.getElementById('pg-'+thisunitlk.dataset.pgtoload+'-links');
                    // Append
                    let thissectionlk = document.createElement('span');
                    let vidurl = 'https://www.youtube.com/channel/UC-9IyDlMjLaLFhD1VJpfBpg';
                    if(thesesections[t].url != 'none') {
                        vidurl = thesesections[t].url;
                    }
                    thissectionlk.innerHTML = ''
                    +'<a href="'+vidurl+'" class="link">Section 1.'+(t+1)+'</a>: '+thesesections[t].name+'<br>';
                    +''
                    divtoload2.append(thissectionlk);
                } catch(err) {
                    // Div does not exist
                }
            }
        } catch(err) {
            // Course does not exist in list
        }
    }
}

// Home link
document.getElementById('lk-home').onclick = function() {
    hideAllPages();
    document.getElementById('pg-home').style.display = 'block';
}