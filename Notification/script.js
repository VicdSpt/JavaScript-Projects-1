const input = document.getElementById("notification")

function notification(){
    Notification.requestPermission().then(function(result) {
        if(result === "granted"){
            popupNotification();
        }
        else {
            console.log("Permission Denied !");
            
        }
    })
}

function popupNotification(){
    const notification = new Notification("New Notification 🔥", {
        body: input.value || "this is a default notification message."
    });

    notification.onclick = function (){
        console.log("Notification clicked")
    }
}