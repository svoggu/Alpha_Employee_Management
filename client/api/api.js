export const apiService = {
  
  baseUrl : location.origin.includes('localhost') ? 'http://localhost:3002' : '' + "/api/",
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
  },

  async put(url, data) {
    return fetch(this.baseUrl + url,{
      method: "PUT",
      headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then( (res) => {
        res.json();
        location.reload()
      })
    },
    
    async delete(url, data){
      return fetch(this.baseUrl+url,{
        method:"DELETE",
      }).then((res)=> res.json()).then(()=>location.reload())
    }
};

