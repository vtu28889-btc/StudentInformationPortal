function scrollToChecker() {
    document.getElementById("checker").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("eligibilityForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;
    let marks = Number(document.getElementById("marks").value);
    let income = Number(document.getElementById("income").value);
    let category = document.getElementById("category").value;
    let state = document.getElementById("state").value;

    let eligibleScholarships = [];

    if (marks >= 85) {
        eligibleScholarships.push("Merit Scholarship");
    }

    if ((category === "SC" || category === "ST" || category === "OBC") && income <= 250000) {
        eligibleScholarships.push("Government Post Matric Scholarship");
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
            <h3>Hello ${name}, you are eligible for:</h3>
            <ul>
                ${eligibleScholarships.map(item => `<li>${item}</li>`).join("")}
            </ul>
            <p><b>State:</b> ${state}</p>
            <p>Please keep your documents ready before applying.</p>
        `;
    } else {
        result.className = "warning";
        result.innerHTML = `
            <h3>Hello ${name}</h3>
            <p>Sorry, currently no matching scholarship found.</p>
            <p>Improve your marks or check again later.</p>
        `;
    }
});

function searchScholarship() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

        if (title.includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}
