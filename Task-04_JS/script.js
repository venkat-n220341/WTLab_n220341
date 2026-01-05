const channelName ="Dreams World";

let subscribers =1000;
let channelStatus ="Active";

document.getElementById("channelName").innerText=channelName;
document.getElementById("subCount").innerText=subscribers;
document.getElementById("channelStatus").innerText=channelStatus;

console.log("Channel Name:",channelName);
console.log("Subscribers:",subscribers);
console.log("Channel Status:",channelStatus);

function showChannelInfo() {
  document.getElementById("channelCard").style.display = "block";
  console.log("Channel info opened");
}

function hideChannelInfo() {
  document.getElementById("channelCard").style.display = "none";
  console.log("Channel info closed");
}

function increaseSubscribers(){
    subscribers=subscribers+1;   
    document.getElementById("subCount").innerText=subscribers;
    console.log("Updated Subscribers:",subscribers);
}

const toggleChannelStatus = () => {
  channelStatus = channelStatus === "Active" ? "Inactive" : "Active";
  document.getElementById("channelStatus").innerText = channelStatus;
  console.log("Status toggled:", channelStatus);
};

function showWelcome() {
  document.getElementById("welcomeMsg").innerText = getWelcomeMessage();
  console.log("Welcome message shown");
}
function getWelcomeMessage() {
  return "Welcome to " + channelName + " channel!";
}

try {
    channelName="New Channel Name";
} catch (error){
    console.log("Error while reassigning const:",error.message);
}



const channel = {
  name: channelName,        
  subscribers: subscribers, 
  status: channelStatus,    
  category: "Education"
};
console.log("Channel Object:", channel);
document.getElementById("channelName").innerText = channel.name;
document.getElementById("channelStatus").innerText = channel.status;
document.getElementById("channelCategory").innerText = channel["category"];
function changeCategory() {
  channel.category =
    channel.category === "Education" ? "Entertainment" : "Education";

  document.getElementById("channelCategory").innerText = channel.category;

  console.log("Updated Channel Object:", channel);
}


channel.toggleStatus = function () {
 
  this.status = this.status === "Active" ? "Inactive" : "Active";

  document.getElementById("channelStatus").innerText = this.status;

  document.getElementById("methodResult").innerText =
    "Channel status changed to: " + this.status;

  console.log("Method executed. Updated object:", this);
};

function confirmSubscription() {
  const userChoice = confirm("Do you want to subscribe to this channel?");

  if (userChoice) {
    increaseSubscribers(); 
    document.getElementById("popupResult").innerText =
      "User confirmed subscription.";
    alert("Thank you for subscribing!"); 
  } else {
    document.getElementById("popupResult").innerText =
      "User cancelled subscription.";
  }

  console.log("Confirm result:", userChoice);
}