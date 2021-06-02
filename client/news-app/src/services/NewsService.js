import axios from "axios";

const basePath = "http://localhost:3001";

async function GetHeadlines(queryParams) {
  let path = basePath + "/api/news/headlines";
  try {
    let response = await axios.get(path, {
      headers: { Authorization: localStorage.getItem("auth-token") },
      params: queryParams,
    });
    return response.data;
  } catch {
    console.log("Error");
  }
}

async function GetNewsBySubject(queryParams) {
  let path = basePath + "/api/news/subjects";
  try {
    let response = await axios.get(path, {
      headers: { Authorization: localStorage.getItem("auth-token") },
      params: queryParams,
    });
    return response.data;
  } catch {
    console.log("Error");
  }
}

export { GetNewsBySubject, GetHeadlines };

//for params: GetNewsBySubject: queryParams:{subject: value}
//GetHeadlines: queryParams:{category: value}
