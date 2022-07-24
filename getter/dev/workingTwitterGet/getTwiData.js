import fetch, { Headers } from 'node-fetch';

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAC%2FscAEAAAAAMA5DMTsR6zJC7rfgOjX4pEzb0lA%3Ds46m4etLdIYpXR8LGuqtc6qJTpL6NFXXf6zNNwgUsKlmvT2FRI");
myHeaders.append("Cookie", "guest_id=v1%3A165852488530929443; guest_id_ads=v1%3A165852488530929443; guest_id_marketing=v1%3A165852488530929443; personalization_id=\"v1_9GWh7GxzbDbB8Md1pkTYLg==\"");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};


var myUsername = "barackobama"

var fetchUrl = "https://api.twitter.com/2/users/by/username/" + myUsername + "?user.fields=public_metrics&expansions="



fetch(fetchUrl, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));