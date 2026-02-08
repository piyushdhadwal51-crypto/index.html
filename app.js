// Notes ko LocalStorage mein save karne ke liye
function saveNote() {
    const input = document.getElementById('noteInput');
    const list = document.getElementById('notesList');

    if (input.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = "✨ " + input.value;
        li.style.padding = "10px";
        li.style.borderBottom = "1px solid #333";
        list.appendChild(li);

        // Phone ki memory mein save karein
        let notes = JSON.parse(localStorage.getItem('my_notes')) || [];
        notes.push(input.value);
        localStorage.setItem('my_notes', JSON.stringify(notes));

        input.value = ""; // Box khali karein
    }
}

// Page load hote hi purane notes dikhayein
window.onload = () => {
    let notes = JSON.parse(localStorage.getItem('my_notes')) || [];
    const list = document.getElementById('notesList');
    notes.forEach(note => {
        const li = document.createElement('li');
        li.textContent = "✨ " + note;
        list.appendChild(li);
    });
};
// NOTES
const noteInput = document.getElementById("noteInput");
const notesList = document.getElementById("notesList");

function saveNote() {
  if (!noteInput.value.trim()) return;

  const notes = JSON.parse(localStorage.getItem("notes") || "[]");
  notes.push(noteInput.value);
  localStorage.setItem("notes", JSON.stringify(notes));

  noteInput.value = "";
  loadNotes();
}

function loadNotes() {
  notesList.innerHTML = "";
  const notes = JSON.parse(localStorage.getItem("notes") || "[]");

  notes.forEach((note, i) => {
    const li = document.createElement("li");
    li.textContent = note;
    notesList.appendChild(li);
  });
}

loadNotes();

// PHOTOS
function savePhoto() {
  const input = document.getElementById("photoInput");
  const gallery = document.getElementById("photoGallery");

  if (!input.files[0]) return;

  const reader = new FileReader();
  reader.onload = () => {
    const img = document.createElement("img");
    img.src = reader.result;
    img.style.width = "100%";
    img.style.borderRadius = "8px";
    img.style.marginTop = "8px";
    gallery.appendChild(img);
  };
  reader.readAsDataURL(input.files[0]);
}

// AUDIO
function saveAudio() {
  const input = document.getElementById("audioInput");
  const list = document.getElementById("audioList");

  if (!input.files[0]) return;

  const audio = document.createElement("audio");
  audio.controls = true;
  audio.src = URL.createObjectURL(input.files[0]);
  list.appendChild(audio);
    }
