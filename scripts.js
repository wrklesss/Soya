document.getElementById("travellers").addEventListener("click", function () {
    document.querySelector(".counter-container").classList.toggle("hidden");
});

function increment(type) {
    const span = document.getElementById(type);
    let value = parseInt(span.textContent, 10);
    value += 1;
    span.textContent = value;

    if (value > 0) {
        document.querySelector(`.${type} .decrement`).disabled = false;
    }

    if (type === "children") {
        addChildAgeInput(value);
    }
}

function decrement(type) {
    const span = document.getElementById(type);
    let value = parseInt(span.textContent, 10);
    if (value > 0) {
        value -= 1;
        span.textContent = value;
    }

    if (value === 0) {
        document.querySelector(`.${type} .decrement`).disabled = true;
    }

    if (type === "children") {
        removeChildAgeInput(value + 1);
    }
}

function addChildAgeInput(index) {
    const container = document.getElementById("children-ages");
    const div = document.createElement("div");
    div.className = "child-age";
    div.id = `child-age-${index}`;

    const label = document.createElement("label");
    label.textContent = `Âge de l'enfant ${index}:`;

    const input = document.createElement("input");
    input.type = "number";
    input.min = 0;
    input.max = 17;
    input.required = true;

    div.appendChild(label);
    div.appendChild(input);
    container.appendChild(div);
}

function removeChildAgeInput(index) {
    const div = document.getElementById(`child-age-${index}`);
    if (div) {
        div.remove();
    }
}
