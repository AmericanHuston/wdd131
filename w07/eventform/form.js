const form = document.querySelector("#fsyForm");
const studentGuest = document.querySelector("#studentGuest");
const notesContainer = document.querySelector("#notesContainer");
const notes = document.querySelector("#notes");
const notesLabel = document.querySelector("#notesLabel");
const output = document.querySelector("#output");

function updateNotesField() {
    const value = studentGuest.value;

    if (value !== '') {
        notesContainer.hidden = false;
        notes.required = true;
        if (value === 'student') {
            notesLabel.textContent = "Student I#";
        } else {
            notesLabel.textContent = "Access Code";
        }
    } else {
        notesContainer.hidden = true;
        notes.required = false;
    }
}

studentGuest.addEventListener("change", updateNotesField);
updateNotesField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
    const today = new Date();
    const chosen = new Date(value);
    return chosen < today;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    output.textContent = "";

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const type = form.studentGuest.value;
    const eventDate = form.eventDate.value;
    const note = form.notes.value.trim();

    // Validate the input

    if (type === 'guest' && note !== 'EVENT131'){
        output.textContent = "Invalid event code";
        return;
    }

    if (type === 'student' && note.length !== 9){
        output.textContent = "Student I# must be 9 digits";
        return;
    }

    output.innerHTML = `
  <h2>Ticket Created</h2>
  <p>${firstName} ${lastName}</p>
  <p>${type}</p>
  <p>${eventDate}</p>
  `;

    form.reset();
    updateNotesField();
});
