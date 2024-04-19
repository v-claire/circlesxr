function fetchJSONData() {
    fetch("script/assetList.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then(function(res) {
            
            //console.log(res);
            createInfo(res);

        })
              
}

window.onload = (event) => {
    fetchJSONData();
};      


function createInfo(data) {
    let objArray = data;
    let size = objArray.items.length;

    for (let i = 0; i < size; i++) {
        //console.log(objArray.items[i]);
        let itemID = objArray.items[i].tagID;
        let itemObj = document.getElementById(itemID);

        if (itemObj) {
            if (!itemObj.hasAttribute("circles-artefact")) {
                itemObj.setAttribute("circles-artefact", "");
            }

            let itemTitle = objArray.items[i].info.name;

            if (objArray.items[i].info.year != 9999) {
                let itemYear = toString(objArray.items[i].info.year);
            }

            else {
                let itemYear = "N/A";
            }
            let itemDesc = objArray.items[i].info.desc;
            let itemNum = objArray.items[i].info.idNum;

            itemObj.setAttribute("circles-artefact",
            "title: " + itemTitle + ";" +
            "description: " + itemDesc + "\n" + 
            "Year: " + itemYear + "\n" +
            "Artifact ID: " + itemNum + ";" +
            "descriptionLookAt: true;");

            itemObj.flushToDOM();
        }
    }
}