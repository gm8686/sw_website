// Course information
const courses = ["ap-chem", "ap-calc", "ap-lang", "apush", "ap-physics"];
const coursesUnits = [9, 9, 9, 9, 9];
const coursesSections = {
    "ap-chem": [ // Course name
        [ // Unit number 1
            { // Section 1
                "name": "Moles and Molar Mass", // Section name
                "practiceProblems": [ // Practice problems array
                    {
                        "q": "How many molecules are in one mol?", // Question
                        "as": ["6.02", "0.08206", "6.02x10^23", "4.184"], // Answers
                        "a_correct": 2 // Correct answer index
                    },
                    {
                        "q": "Using your ptable, what is the molar mass of Lithium?",
                        "as": ["3", "6.94g/mol", "13.88g/mol", "Li"],
                        "a_correct": 1
                    }
                ]
            },
            {
                "name": "Mass Spectroscopy of Elements", // Name of video
                "url": "https://www.youtube.com/watch?v=_yZRS9lJCbA", // URL
                "urliframeID": "_yZRS9lJCbA" // ID to use in iframe (typically same as URL ending)
            },
            {
                "name": "Identifying Reactions",
                "url": "https://www.youtube.com/watch?v=g2v9dVRf5Ow",
                "urliframeID": "g2v9dVRf5Ow"
            },
            {
                "name": "Gas Laws",
                "url": "https://www.youtube.com/watch?v=cf33Vr6l7k0",
                "ufliframeID": "cf33Vr6l7k0"
            },
        ],
        [ // Unit 2
            {
                "name": "Types of Chemical Bonds",
            },
            {
                "name": "Intramolecular Force and Potential Energy",
            },
            {
                "name": "Structure of Ionic Solids",
            },
            {
                "name": "Structure of Metals and Alloys",
            },
            {
                "name": "Lewis Diagrams",
            },
            {
                "name": "Resonance and Formal Charge",
            },
            {
                "name": "Periodic Trends",
            },
            {
                "name": "VSEPR and Bond Hybridization",
            }
        ]
    ]
};