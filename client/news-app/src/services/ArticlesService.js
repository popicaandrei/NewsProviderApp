import axios from "axios";

const basePath = "http://localhost:3001/";

async function GetAllArticles() {
  let path = basePath + "/api/articles";
  try {
    let response = await axios.get(path, {
      headers: { Authorization: localStorage.getItem("auth-token") },
    });
    return response.data;
  } catch {
    console.log("Error");
  }
}

async function GetArticleById(id) {
  let path = basePath + "/api/articles/" + id;
  try {
    let response = await axios.get(path, {
      headers: { Authorization: localStorage.getItem("auth-token") },
    });
    return response.data;
  } catch {
    console.log("Error");
  }
}

async function SaveArticle(source, title, description, url) {
  let path = basePath + "/api/articles/";
  let data = {
    source: source,
    title: title,
    description: description,
    url: url,
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

//article is object with the body fields
async function UpdateArticle(id, article) {
  let path = basePath + "/api/articles/" + id;
  let data = {
    source: article.source,
    title: article.title,
    description: article.description,
    url: article.url,
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

async function DeleteArticle(id) {
  let path = basePath + "/api/articles/" + id;
  try {
    await axios.delete(path, {
      headers: { Authorization: localStorage.getItem("auth-token") },
    });
  } catch {
    console.log("Error");
  }
}

export { DeleteArticle, UpdateArticle, SaveArticle, GetArticleById, GetAllArticles };
