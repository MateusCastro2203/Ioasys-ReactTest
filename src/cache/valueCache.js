
const valueCache = (header) => {
    localStorage.setItem("acessToken",header["access-token"]);
    localStorage.setItem("client",header.client);
    localStorage.setItem("uid",header.uid);
}

export default valueCache
