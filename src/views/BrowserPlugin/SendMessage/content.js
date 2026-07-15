chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "background_to_content") {
    sendResponse("content script 已经收到: " + message.text);
    console.log(sender);

    alert("网页收到popup-background-content的消息: " + message.text);

    return true;
  }
});
