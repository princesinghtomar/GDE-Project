const postWithToken = async (endPoint, body) => {
    const token = localStorage.getItem("token");
    const postConfig = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    return axios.post(`${config.base}/${endPoint}`, body, postConfig);
};
