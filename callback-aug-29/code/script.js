const customFetch = (url, callback) => {
    let error = null;
    let result = {
        newUrl: "https://api.example.com/data" + Math.random(),
    }
    if (!url) {
        error = new Error("Invalid URL");
    }
    setTimeout(() => { // like data fetching
        callback(error, result);
    }, 1000);
}

// developer by us
console.log("1");
customFetch("https://api.example.com/data", (error, result) => {
    if (error) {
        console.error(error);
    } else {
        customFetch("https://api.example.com/employee", (error, result) => {
            if (error) {
                console.error(error);
            } else {
                customFetch("https://api.example.com/job", (error, result) => {
                    if (error) {
                        console.error(error);
                    } else {
                        customFetch(result.newUrl, (error, result) => {
                            if (error) {
                                console.error(error);
                            } else {
                                customFetch(result.newUrl, (error, result) => {
                                    if (error) {
                                        console.error(error);
                                    } else {
                                        console.log(result);
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
    console.log("2");
});
console.log("3");