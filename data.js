const data = {
    2020: {
        stats: {
            totalApplicants: 1602,
            totalAcceptancePercentage: "65%",
            uwAcceptancePercentage: "85%",
            firstGenPercentage: "21%",
            returningPercentage: "80%",
            totalMalePercentage: "60%",
            totalFemalePercentage: "33%",
            totalNonBinaryPercentage: "7%",
            uwMalePercentage: "58%",
            uwFemalePercentage: "33%",
            uwNonBinaryPercentage: "9%",
            freshmanPercentage: "15%",
            sophomorePercentage: "29%",
            juniorPercentage: "33%",
            seniorPercentage: "24%"
        },
        applicants: {
            school: {
                keys: ["University of Washington", "University of British Columbia", "UC Berkeley", "Washington State University", "University of California-Irvine"],
                values: [55, 7, 3, 3, 2],
                meta: {
                    label : "% of Applicants",
                    backgroundColor: "rgba(237, 71, 142, 0.2)",
                    borderColor : "rgba(237, 71, 142, 1)"
                }
            },
            major: {
                keys: ["Computer Science", "Computer Engineering", "Electrical Engineering", "Informatics", "Mathematics and Computer Science"],
                values: [72, 9, 6, 5, 1],
                meta: {
                    label : "% of Applicants",
                    backgroundColor: "rgba(237, 71, 142, 0.2)",
                    borderColor : "rgba(237, 71, 142, 1)"
                }
            },
            totalEthnicity: {
                keys: ["East Asian or Asian-American", "South Asian or Asian-American", "White or Euro-American", "Other", "LatinX or Hispanic-American", "Black, Afro-Caribbean, or African-American"],
                values: [45, 21, 14, 8, 2, 2], 
                meta: {
                    label : "% of Applicants",
                    backgroundColor: "rgba(237, 71, 142, 0.2)",
                    borderColor : "rgba(237, 71, 142, 1)"
                }
            },
            uwEthnicity: {
                keys: ["East Asian or Asian-American", "South Asian or Asian-American", "White or Euro-American", "Other", "LatinX or Hispanic-American", "Black, Afro-Caribbean, or African-American"],
                values: [48, 22, 13, 1, 3, 1],
                meta: {
                    label : "% of Applicants",
                    backgroundColor: "rgba(237, 71, 142, 0.2)",
                    borderColor : "rgba(237, 71, 142, 1)"
                }
            }
        }
    }
}