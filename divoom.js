const element = document.getElementById("submit");
element.addEventListener("click", pixoo);

function pixoo() {
    console.log("here");
    let number = document.getElementById("number").value;
    if (number != "") {
        switch (number) {
            case "1":
                let url1 = "http://192.168.1.26:80/post";
                let json1 = JSON.stringify({
                    Command: "Tools/SetTimer",
                    Minute: 50,
                    Second: 0,
                    Status: 1,
                });
                $.post(url1, json1, (data, status) => {
                    console.log(data);
                });
                break;
            case "2":
                let url2 = "https://app.divoom-gz.com/Channel/GetDialType";
                let json2 = JSON.stringify({
                    "ReturnCode": 0,
                    "ReturnMessage": "",
                    "DialTypeList": [
                        "Social",
                        "normal",
                        "financial",
                        "Game",
                        "HOLIDAYS",
                        "TOOLS",
                        "DESIGN-64"
                    ]
                });
                $.post(url2, json2, (data, status) => {
                    console.log(data);
                });
                break;
            case "3":
                let url3 = "https://app.divoom-gz.com/Channel/GetDialList";
                let json3 = JSON.stringify({
                    "DialType": "Social",
                    "Page": 1
                });
                $.post(url3, json3, (data, status) => {
                    console.log(data);
                });
                break;
            case "4":
                let url4 = "http://192.168.1.26:80/post";
                let json4 = JSON.stringify({
                    "Command": "Tools/SetNoiseStatus",
                    "NoiseStatus": 1
                });
                $.post(url4, json4, (data, status) => {
                    console.log(data);
                });
                break;
            default:
                console.log("Nothing Selected");
        }
    }
}