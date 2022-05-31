export const apiService = {
  baseUrl : "http://localhost:3002/",
 async get(url) {
    return fetch(this.baseUrl + url).then((res) => res.json());
  },
 async post(url, data) {
    return fetch(this.baseUrl + url, 
        {
            method: "POST",
            headers:{
                "Accept":"application/json, text/plain, */*",
            "Content-type":"application/json"},
            body:JSON.stringify(data)
        }).then((res) => res.json());
  }
};
