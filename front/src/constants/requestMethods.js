/* ====== Common Post Request Function ====== */
export async function postRequest(url, options) {
  return await fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
}

/* ====== Common Put Request Function ====== */
export async function putRequest(url, options) {
  return await fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
}

/* ====== Common Delete Request Function ====== */
export async function deleteRequest(url, options) {
  return await fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
}

/* ====== Common GET Request Function ====== */
export async function getRequest(url) {
  console.log("url ", url);
  return await fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((e) => console.log(e));
}

export const fetchTest = async () => {
  console.log("fetchTest");
  // await fetch("http://3.27.35.124/visitors")
  await fetch("http://localhost:8081/visitors")
    .then((response) => {
      console.log("TEST", response);
      return response.json();
    })
    .then((data) => console.log("data", data))
    .catch((e) => console.log("ERR~", e));
};
