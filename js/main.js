
function searchUrl() {
    let url = new URL('https://xym773.allnodes.me:3001/accounts/');
    let box = document.getElementById('address');
    let address = box.value;
    url = new URL(address, url);
    return url;
}


function resetTextbox() {
    document.getElementById("address").value = "";
    return;
}


async function getJson() {
    await fetch(searchUrl())
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            let mosaics = new Array();
            mosaics = JSON.stringify(data.account.mosaics);
            document.getElementById("mosaics").textContent = mosaics;
        })
        .catch(function(error) {
            document.getElementById("mosaics").textContent = "No Mosaic";
        });
}


function main() {
    document.getElementById("address").addEventListener("input", function() {
        getJson();
    });
}