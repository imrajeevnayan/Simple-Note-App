function addNote() {
    const noteInput = document.getElementById("noteInput");
    const notesContainer = document.getElementById("notes");

    if (noteInput.value.trim() !== "") {
        const note = document.createElement("div");
        note.textContent = noteInput.value;
        note.classList.add("note");

        // Add delete button to each note
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");
        deleteButton.onclick = function () {
            notesContainer.removeChild(note);
        };

        note.appendChild(deleteButton);
        notesContainer.appendChild(note);

        // Clear the input field
        noteInput.value = "";
    }
}
