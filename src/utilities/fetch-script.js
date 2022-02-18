// import fetch from "node-fetch";

export async function getAll() {
    var requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    
    const apiKey = "4iOpuPCKvoTLI-5q0buYcIXYMH_oQIZd";

    const baseURL = `https://eth-mainnet.g.alchemy.com/v2/${apiKey}/getNFTs/`;
    const ownerAddr = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB";
    const fetchURL = `${baseURL}?owner=${ownerAddr}`;

    const res = await fetch(fetchURL, requestOptions);
    if (res.ok) return res.json();
    throw new Error("Bad Request");
}
  
export async function getDetail(address) {
    var requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    const apiKey = "4iOpuPCKvoTLI-5q0buYcIXYMH_oQIZd";

    const baseURL = `https://eth-mainnet.g.alchemy.com/v2/${apiKey}/getNFTMetadata`;
    const contractAddr = address;
    const tokenId = "1";
    const tokenType = "erc721";
    // const fetchURL = `${baseURL}?contractAddress=${contractAddr}`;
    const fetchURL = `${baseURL}?contractAddress=${contractAddr}&tokenId=${tokenId}&tokenType=${tokenType}`;

    // fetch(fetchURL, requestOptions)
    // .then(response => console.log(response.json()))
    // .then(response => JSON.stringify(response, null, 2))
    // .then(result => console.log(result))
    // .catch(error => console.log('error', error))

    await fetch (fetchURL, requestOptions)
    .then(res => res.json())
    .then(res2 => res2)
    .catch(error => console.log('error', error))

    // const res = await fetch(fetchURL, requestOptions);
    // if (res.ok) {
    //     console.log(res.json());
    //     return res.json();
    // }
    // throw new Error("Bad Request");
}