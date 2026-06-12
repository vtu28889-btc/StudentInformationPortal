const scholarshipDetails = {
    "Merit Scholarship 2026": {
        eligibility: [
            "Minimum 85% marks",
            "Open for all categories",
            "Student must be studying in India"
        ],
        reward: "Up to ₹50,000",
        deadline: "30 August 2026",
        documents: [
            "Aadhaar Card",
            "Marks Memo",
            "Bank Passbook",
            "Bonafide Certificate"
        ]
    },

    "Post Matric Scholarship": {
        eligibility: [
            "SC/ST/OBC students",
            "Family income below ₹2.5 lakh",
            "Student must be studying after 10th class"
        ],
        reward: "Tuition fee support and maintenance allowance",
        deadline: "15 September 2026",
        documents: [
            "Caste Certificate",
            "Income Certificate",
            "Aadhaar Card",
            "Bank Passbook",
            "Bonafide Certificate"
        ]
    },

    "Girl Student Education Scholarship": {
        eligibility: [
            "Only girl students",
            "Minimum 60% marks",
            "Any course is allowed"
        ],
        reward: "Up to ₹40,000",
        deadline: "10 October 2026",
        documents: [
            "Aadhaar Card",
            "Marks Memo",
            "Bonafide Certificate",
            "Bank Passbook"
        ]
    },

    "Engineering Student Scholarship": {
        eligibility: [
            "B.Tech students only",
            "Minimum 75% marks",
            "Family income below ₹3 lakh"
        ],
        reward: "Up to ₹60,000",
        deadline: "25 September 2026",
        documents: [
            "College ID Card",
            "Marks Memo",
            "Income Certificate",
            "Bank Passbook"
        ]
    },

    "Minority Scholarship": {
        eligibility: [
            "Minority community students",
            "Minimum 50% marks",
            "Family income below ₹2 lakh"
        ],
        reward: "Up to ₹30,000",
        deadline: "5 November 2026",
        documents: [
            "Community Certificate",
            "Income Certificate",
            "Aadhaar Card",
            "Bank Passbook"
        ]
    },

    "Low Income Student Support Scholarship": {
        eligibility: [
            "Family income below ₹1.5 lakh",
            "Minimum 60% marks",
            "Open for all courses"
        ],
        reward: "Up to ₹25,000",
        deadline: "20 November 2026",
        documents: [
            "Income Certificate",
            "Aadhaar Card",
            "Marks Memo",
            "Bank Passbook"
        ]
    }
};

const form = document.getElementById("eligibilityForm");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let course = document.getElementById("course").value;
        let marks = Number(document.getElementById("marks").value);
        let income = Number(document.getElementById("income").value);
        let category = document.getElementById("category").value;

        let eligibleScholarships = [];

        if (marks >= 85) {
            eligibleScholarships.push("Merit Scholarship 2026");
        }

        if ((category === "SC" || category === "ST" || category === "OBC") && income <= 250000) {
            eligibleScholarships.push("Post Matric Scholarship");
        }

        if (course === "BTech" && marks >= 75) {
            eligibleScholarships.push("Engineering Student Scholarship");
        }

        if (income <= 150000) {
            eligibleScholarships.push("Low Income Student Support Scholarship");
        }

        let result = document.getElementById("result");

        if (eligibleScholarships.length > 0) {
            result.className = "success";
            result.innerHTML = `
                <h3>Hello ${name}, you may be eligible for:</h3>
                <ul>
                    ${eligibleScholarships.map(item => `<li>${item}</li>`).join("")}
                </ul>
                <br>
                <a href="scholarships.html" class="hero-btn">View Scholarships</a>
            `;
        } else {
            result.className = "warning";
            result.innerHTML = `
                <h3>Hello ${name}</h3>
                <p>No matching scholarship found currently.</p>
            `;
        }
    });
}

function searchScholarship() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let cards = document.getElementsByClassName("scholar-card");

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

        if (title.includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

function filterScholarships(category) {
    let cards = document.getElementsByClassName("scholar-card");

    for (let i = 0; i < cards.length; i++) {
        let cardCategory = cards[i].getAttribute("data-category");

        if (category === "all" || cardCategory === category) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

function showDetails(name) {
    let data = scholarshipDetails[name];

    document.getElementById("modalData").innerHTML = `
        <h2>${name}</h2>

        <h3>Eligibility</h3>
        <ul>
            ${data.eligibility.map(item => `<li>${item}</li>`).join("")}
        </ul>

        <h3>Reward</h3>
        <p>${data.reward}</p>

        <h3>Deadline</h3>
        <p>${data.deadline}</p>

        <h3>Required Documents</h3>
        <ul>
            ${data.documents.map(item => `<li>${item}</li>`).join("")}
        </ul>

        <button class="apply-btn" onclick="alert('Application feature will be added with backend database')">
            Apply Now
        </button>
    `;

    document.getElementById("detailsModal").style.display = "block";
}

function closeModal() {
    document.getElementById("detailsModal").style.display = "none";
}
