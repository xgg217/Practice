const responseElement = document.getElementById("response");
const sendButton = document.getElementById("send");

if (sendButton) {
  sendButton.addEventListener("click", async function () {
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

      const response = await chrome.runtime.sendMessage({
        type: "popup_to_background",
        tabId: tab.id,
        text: "你好, content script",
      });
      console.log(response);

      responseElement.textContent = response?.status || "没有响应";
    } catch (error) {
      console.error(error);
      responseElement.textContent = "发送失败";
    }
  });
}
