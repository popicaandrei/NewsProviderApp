import axios from "axios";

const basePath = "http://localhost:3001/";

async function GetAllNotes() {
  let path = basePath + "/api/notes";
  try {
    let response = await axios.get(path, {
      headers: { Authorization: localStorage.getItem("auth-token") },
    });
    return response.data;
  } catch {
    console.log("Error");
  }
}

async function GetNoteById(id) {
  let path = basePath + "/api/notes/" + id;
  try {
    let response = await axios.get(path, {
      headers: { Authorization: localStorage.getItem("auth-token") },
    });
    return response.data;
  } catch {
    console.log("Error");
  }
}

async function CreateNote(title, content) {
  let path = basePath + "/api/notes/";
  let data = {
    title: title,
    content: content,
  };
  try {
    let response = await axios.post(path, data, {
      headers: { Authorization: localStorage.getItem("auth-token") },
    });
    return response.data;
  } catch {
    console.log("Error");
  }
}

async function UpdateNote(id, title, content) {
  let path = basePath + "/api/notes/" + id;
  let data = {
    title: title,
    content: content,
  };
  try {
    let response = await axios.put(path, data, {
      headers: { Authorization: localStorage.getItem("auth-token") },
    });
    return response.data;
  } catch {
    console.log("Error");
  }
}

async function DeleteNote(id) {
  let path = basePath + "/api/notes/" + id;
  try {
    await axios.delete(path, {
      headers: { Authorization: localStorage.getItem("auth-token") },
    });
  } catch {
    console.log("Error");
  }
}

export { DeleteNote, UpdateNote, CreateNote, GetNoteById, GetAllNotes };
