

const events = [

    {
        id: 1,

        name: "Google Developer Student Club Hackathon",

        category: "Hackathon",

        date: "2026-10-18",

        location: "Bangalore",

        format: "Offline",

        description:
            "Build innovative solutions with your team and compete in a student-focused hackathon.",

        saves: 128
    },


    {
        id: 2,

        name: "AI & Machine Learning Workshop",

        category: "AI/ML",

        date: "2026-10-21",

        location: "Online",

        format: "Online",

        description:
            "Learn the fundamentals of machine learning and explore practical AI applications.",

        saves: 104
    },


    {
        id: 3,

        name: "Modern Web Development Bootcamp",

        category: "Web Development",

        date: "2026-10-25",

        location: "Bangalore",

        format: "Offline",

        description:
            "Learn modern frontend development using HTML, CSS, JavaScript and popular tools.",

        saves: 87
    },


    {
        id: 4,

        name: "Cybersecurity Fundamentals",

        category: "Cybersecurity",

        date: "2026-10-28",

        location: "Online",

        format: "Online",

        description:
            "Understand cybersecurity fundamentals, common attacks and basic security practices.",

        saves: 72
    },


    {
        id: 5,

        name: "Blockchain Builders Meetup",

        category: "Blockchain",

        date: "2026-11-02",

        location: "Bangalore",

        format: "Offline",

        description:
            "Meet blockchain developers and learn how decentralized applications are built.",

        saves: 64
    },


    {
        id: 6,

        name: "AWS Cloud Essentials",

        category: "Cloud",

        date: "2026-11-05",

        location: "Online",

        format: "Online",

        description:
            "Explore cloud computing concepts and learn the fundamentals of AWS services.",

        saves: 59
    },


    {
        id: 7,

        name: "Build With JavaScript",

        category: "Web Development",

        date: "2026-11-10",

        location: "Online",

        format: "Online",

        description:
            "Create interactive web applications and improve your JavaScript development skills.",

        saves: 51
    },


    {
        id: 8,

        name: "Generative AI Student Summit",

        category: "AI/ML",

        date: "2026-11-15",

        location: "Bangalore",

        format: "Offline",

        description:
            "Discover how generative AI and large language models are changing software development.",

        saves: 46
    }

];


/* =====================================================
   DOM ELEMENTS
   ===================================================== */

const eventsGrid =
    document.getElementById("eventsGrid");

const savedGrid =
    document.getElementById("savedGrid");

const trendingGrid =
    document.getElementById("trendingGrid");

const savedCount =
    document.getElementById("savedCount");

const searchInput =
    document.getElementById("searchInput");

const categoryFilter =
    document.getElementById("categoryFilter");

const sortFilter =
    document.getElementById("sortFilter");

const loadingState =
    document.getElementById("loadingState");

const noResults =
    document.getElementById("noResults");

const emptySaved =
    document.getElementById("emptySaved");

const eventModal =
    document.getElementById("eventModal");

const modalClose =
    document.getElementById("modalClose");

const modalContent =
    document.getElementById("modalContent");

const themeToggle =
    document.getElementById("themeToggle");

const navLinks =
    document.getElementById("navLinks");

const menuBtn =
    document.getElementById("menuBtn");

const totalEvents =
    document.getElementById("totalEvents");


let savedEvents =
    JSON.parse(
        localStorage.getItem("devboardSaved")
    ) || [];


document.addEventListener(
    "DOMContentLoaded",
    () => {

        totalEvents.textContent =
            events.length;

        /*
         * Small loading effect so the
         * loading state can be seen.
         */

        setTimeout(() => {

            loadingState.classList.add(
                "hidden"
            );

            renderEvents(events);

            renderTrendingEvents();

            renderSavedEvents();

            updateSavedCount();

            loadTheme();

        }, 500);

    }
);



function renderEvents(eventList) {

    eventsGrid.innerHTML = "";


    if (eventList.length === 0) {

        noResults.classList.remove(
            "hidden"
        );

        return;
    }


    noResults.classList.add(
        "hidden"
    );


    eventList.forEach(event => {

        eventsGrid.innerHTML +=
            createEventCard(event);

    });

}

function createEventCard(event) {

    const isSaved =
        savedEvents.includes(event.id);


    return `

        <article class="event-card">

            <div class="event-top">

                <span class="event-category">
                    ${event.category}
                </span>


                <button
                    class="save-btn ${isSaved ? "saved" : ""}"
                    onclick="toggleSave(${event.id})"
                    aria-label="Save event"
                >
                    ${isSaved ? "♥" : "♡"}
                </button>

            </div>


            <div class="event-body">

                <h3>
                    ${event.name}
                </h3>


                <p>
                    ${event.description}
                </p>


                <div class="event-meta">

                    <span>
                        📅 ${formatDate(event.date)}
                    </span>

                    <span>
                        📍 ${event.location}
                    </span>

                </div>


                <div class="countdown-container">

                    ${createCountdownHTML(event.date)}

                </div>

            </div>


            <div class="event-footer">

                <span class="format">
                    ${event.format}
                </span>


                <button
                    class="details-btn"
                    onclick="openModal(${event.id})"
                >
                    View Details →
                </button>

            </div>

        </article>

    `;
}

function formatDate(dateString) {

    const date =
        new Date(
            dateString + "T00:00:00"
        );


    return date.toLocaleDateString(
        "en-IN",
        {
            day: "numeric",
            month: "short",
            year: "numeric"
        }
    );

}


function getCountdownData(dateString) {

    const eventDate =
        new Date(
            dateString + "T00:00:00"
        );


    const today =
        new Date();


    today.setHours(
        0,
        0,
        0,
        0
    );


    const difference =
        eventDate.getTime() -
        today.getTime();


    const days =
        Math.ceil(
            difference /
            (1000 * 60 * 60 * 24)
        );


    return {
        days: days
    };

}

function createCountdownHTML(dateString) {

    const countdown =
        getCountdownData(dateString);


    if (countdown.days < 0) {

        return `

            <div class="countdown passed">

                ✓ Event completed

            </div>

        `;

    }


    if (countdown.days === 0) {

        return `

            <div class="countdown today">

                🔴 Happening today

            </div>

        `;

    }


    if (countdown.days <= 7) {

        return `

            <div class="countdown soon">

                🔥 Starts in
                ${countdown.days}
                ${countdown.days === 1 ? "day" : "days"}

            </div>

        `;

    }


    return `

        <div class="countdown">

            ⏳ Starts in
            ${countdown.days}
            days

        </div>

    `;

}


function updateCountdowns() {

    renderEvents(
        getCurrentFilteredEvents()
    );

    renderTrendingEvents();

    renderSavedEvents();

}


function getCurrentFilteredEvents() {

    const searchTerm =
        searchInput.value
            .toLowerCase()
            .trim();


    const selectedCategory =
        categoryFilter.value;


    let filteredEvents =
        events.filter(event => {

            const matchesSearch =

                event.name
                    .toLowerCase()
                    .includes(searchTerm)

                ||

                event.description
                    .toLowerCase()
                    .includes(searchTerm)

                ||

                event.category
                    .toLowerCase()
                    .includes(searchTerm);


            const matchesCategory =

                selectedCategory === "all"

                ||

                event.category ===
                selectedCategory;


            return (
                matchesSearch &&
                matchesCategory
            );

        });


    if (
        sortFilter.value === "date"
    ) {

        filteredEvents.sort(
            (a, b) =>
                new Date(a.date) -
                new Date(b.date)
        );

    }


    if (
        sortFilter.value === "category"
    ) {

        filteredEvents.sort(
            (a, b) =>
                a.category.localeCompare(
                    b.category
                )
        );

    }


    return filteredEvents;

}

function applyFilters() {

    renderEvents(
        getCurrentFilteredEvents()
    );

}

searchInput.addEventListener(
    "input",
    applyFilters
);


categoryFilter.addEventListener(
    "change",
    applyFilters
);


sortFilter.addEventListener(
    "change",
    applyFilters
);

function toggleSave(eventId) {

    if (
        savedEvents.includes(eventId)
    ) {

        savedEvents =
            savedEvents.filter(
                id => id !== eventId
            );

    } else {

        savedEvents.push(
            eventId
        );

    }


    localStorage.setItem(
        "devboardSaved",
        JSON.stringify(savedEvents)
    );


    updateSavedCount();

    applyFilters();

    renderSavedEvents();

    renderTrendingEvents();

}


function updateSavedCount() {

    savedCount.textContent =
        savedEvents.length;

}


function renderTrendingEvents() {

    trendingGrid.innerHTML = "";

    const trendingEvents =
        [...events]
            .sort(
                (a, b) =>
                    b.saves - a.saves
            )
            .slice(0, 3);


    trendingEvents.forEach(
        (event, index) => {

            trendingGrid.innerHTML +=
                createTrendingCard(
                    event,
                    index + 1
                );

        }
    );

}

function createTrendingCard(
    event,
    rank
) {

    const isSaved =
        savedEvents.includes(event.id);


    return `

        <article class="event-card trending-card">

            <span class="trending-rank">
                #${rank}
            </span>


            <div class="event-top">

                <span class="trending-badge">
                    🔥 Trending
                </span>


                <button
                    class="save-btn ${isSaved ? "saved" : ""}"
                    onclick="toggleSave(${event.id})"
                    aria-label="Save event"
                >
                    ${isSaved ? "♥" : "♡"}
                </button>

            </div>


            <div class="event-body">

                <h3>
                    ${event.name}
                </h3>


                <p>
                    ${event.description}
                </p>


                <div class="event-meta">

                    <span>
                        📅 ${formatDate(event.date)}
                    </span>

                    <span>
                        📍 ${event.location}
                    </span>

                    <span class="popularity">
                        👥 ${event.saves} students interested
                    </span>

                </div>


                ${createCountdownHTML(event.date)}

            </div>


            <div class="event-footer">

                <span class="format">
                    ${event.format}
                </span>


                <button
                    class="details-btn"
                    onclick="openModal(${event.id})"
                >
                    View Details →
                </button>

            </div>

        </article>

    `;

}



function renderSavedEvents() {

    savedGrid.innerHTML = "";


    const savedEventObjects =
        events.filter(
            event =>
                savedEvents.includes(
                    event.id
                )
        );


    if (
        savedEventObjects.length === 0
    ) {

        emptySaved.classList.remove(
            "hidden"
        );

        return;

    }


    emptySaved.classList.add(
        "hidden"
    );


    savedEventObjects.forEach(
        event => {

            savedGrid.innerHTML +=
                createEventCard(event);

        }
    );

}
function openModal(eventId) {

    const event =
        events.find(
            item =>
                item.id === eventId
        );


    if (!event) {
        return;
    }


    modalContent.innerHTML = `

        <span class="event-category">
            ${event.category}
        </span>


        <h2>
            ${event.name}
        </h2>


        <p>
            ${event.description}
        </p>


        <div class="modal-info">

            <div>

                <strong>
                    DATE
                </strong>

                ${formatDate(event.date)}

            </div>


            <div>

                <strong>
                    LOCATION
                </strong>

                ${event.location}

            </div>


            <div>

                <strong>
                    FORMAT
                </strong>

                ${event.format}

            </div>


            <div>

                <strong>
                    CATEGORY
                </strong>

                ${event.category}

            </div>

        </div>


        <div class="modal-countdown">

            ${createCountdownHTML(event.date)}

        </div>

    `;


    eventModal.classList.remove(
        "hidden"
    );

}

function closeModal() {

    eventModal.classList.add(
        "hidden"
    );

}


modalClose.addEventListener(
    "click",
    closeModal
);


eventModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            eventModal
        ) {

            closeModal();

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeModal();

        }

    }
);

themeToggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark"
        );


        const isDark =
            document.body.classList.contains(
                "dark"
            );


        localStorage.setItem(
            "devboardTheme",
            isDark
                ? "dark"
                : "light"
        );


        themeToggle.textContent =
            isDark
                ? "☀"
                : "☾";

    }
);

function loadTheme() {

    const savedTheme =
        localStorage.getItem(
            "devboardTheme"
        );


    if (
        savedTheme === "dark"
    ) {

        document.body.classList.add(
            "dark"
        );

        themeToggle.textContent =
            "☀";

    }

}


menuBtn.addEventListener(
    "click",
    () => {

        navLinks.classList.toggle(
            "show"
        );

    }
);

setInterval(
    updateCountdowns,
    60000
);