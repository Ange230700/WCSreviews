// FOR DISPLAYING THE MENU ON SMALLER SCREENS
function displayTinyMenu() {
    const div = document.getElementById("menu");
    const content = {
        About: "index",
        "Royal Family": "royal-family",
        "Royal Assets": "assets",
        "Contact Us": "contact"
    };
    let contentHTML = `
        <img src="/assets/crown-90.png" alt="logo" width="90px" height="90px" />
        <div class="dropdown">
            <button class="dropbtn">Menu</button>
            <div class="dropdown-content">
    `;
    for (let i in content) {
        contentHTML += `
            <a href="${content[i]}.html">
                ${i}
            </a>
        `;
    }
    contentHTML += `
            </div>
        </div>
    `;
    div.innerHTML = contentHTML;
}

// FOR DISPLAYING THE MENU ON LARGER SCREENS
function displayLargeMenu() {
    const div = document.getElementById("menu");
    const content = {
        About: "index",
        "Royal Family": "royal-family",
        "Royal Assets": "assets",
        "Contact Us": "contact"
    };
    let contentHTML = `
        <img src="" alt="logo" width="90px" height="90px" />
        <ul>
    `;
    for (let i in content) {
        contentHTML += `
            <li>
                <a href="${content[i]}.html">
                    ${i}
                </a>
            </li>
        `;
    }
    contentHTML += `
        </ul>
    `;
}

// TO CHOOSE WHICH MENU SHOULD BE DISPLAYED
function chooseMenu() {
    if (window.innerWidth > 654) {
        displayLargeMenu();
    }
    else {
        displayTinyMenu();
    }
}

// INITIAL MENU
chooseMenu();

// VERIFY WHICH MENU SHOULD BE DISPLAYED WHEN THE WINDOW IS RESIZED
window.onresize = chooseMenu;

// FUNCTION TO DISPLAY THE TABLE
function displayAssets() {
    const div = document.getElementById("main");
    const assets = [
        ["Stable", 42, 6 * 1000 * 1000],
        ["Castles", 4, 24 * 1000 * 1000],
        ["Guards", 10 * 1000, 10 * 1000 * 1000],
        ["Wagons", 18, 4 * 1000],
        ["Livestock", 51942, 4 * 1000 * 1000],
        ["Armor", 997 * 1000, 11 * 1000 * 1000],
        ["Canons", 99, 110 * 1000 * 1000]
    ];

    // OPEN THE TABLE
    let htmlContent = `
    <table>
        <tr>
            <th>Asset Name</th>
            <th>Number</th>
            <th>Worth</th>
        </tr>
    `;

    // ADD THE ASSETS TO THE TABLE
    for (let asset of assets) {
        htmlContent += `
        <tr>
            <td>${asset[0]}</td>
            <td>${asset[1].toLocaleString("fr")}</td>
            <td>${asset[2].toLocaleString("fr")} lari</td>
        </tr>
    `;
    }

    // CLOSE THE TABLE
    htmlContent += `
    </table>
    `;
    if (div) div.innerHTML = htmlContent;
}

// DISPLAY THE TABLE
if (document.title === "The Royal Assets of Colchis") {
    displayAssets();
}

// FUNCTION TO DISPLAY ALERT MESSAGE
function submitForm() {
    let name = document.forms["contact"]["name"].value;
    let email = document.forms["contact"]["email"].value;
    let message = document.forms["contact"]["message"].value;
    alert(`
        ${name} - ${email} send : ${message}
    `);
}

// EVENT LISTENER FOR THE SUBMIT BUTTON
if (document.getElementById("submit")) {
    const form = document.getElementById("submit");
    form.addEventListener("click", submitForm);
}