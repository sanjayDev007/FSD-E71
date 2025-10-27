const api ={
    baseUrl : "https://www.omdbapi.com/?apikey=344fc419",
    getMovieData: (query) => {
        let queryString = "&";
        if (query.s) {
            queryString += `s=${query.s}&`;
        }
        if (query.i) {
            queryString += `i=${query.i}&`;
        }
        query.t && (queryString += `t=${query.t}&`);
        query.page && (queryString += `page=${query.page}&`);
        let url = `${api.baseUrl}${queryString}`;
        return fetch(url).then(res => res.json());
    }
}
export default api;
