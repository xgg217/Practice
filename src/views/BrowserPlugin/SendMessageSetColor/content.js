chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("message", message);

  if (message.type === "backgroundColor") {
    sendResponse("content script 已经收到: " + message.text);
    // console.log(sender);
    // console.log(message.text);
    // console.log(document);

    document.body.style.backgroundColor = message.value;

    // alert("网页收到popup-background-content的消息: " + message.text);

    return true;
  }
});
