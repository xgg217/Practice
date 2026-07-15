// const responseElement = document.getElementById("response");
// const sendButton = document.getElementById("send");

// if (sendButton) {
//   sendButton.addEventListener("click", async function () {
//     try {
//       const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//       const response = await chrome.runtime.sendMessage({
//         type: "popup_to_background",
//         tabId: tab.id,
//         text: "你好, content script",
//       });
//       console.log(response);

//       responseElement.textContent = response?.status || "没有响应";
//     } catch (error) {
//       console.error(error);
//       responseElement.textContent = "发送失败";
//     }
//   });
// }

const colorButtons = document.querySelector(".color-buttons");

if (colorButtons) {
  colorButtons.addEventListener("click", async (event) => {
    if (event.target.tagName === "BUTTON") {
      const color = event.target.dataset.color;
      console.log(color);

      // sendButton.addEventListener("click", async function () {
      try {
        // 传递消息到 content.js
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        await chrome.tabs.sendMessage(tab.id, {
          type: "backgroundColor",
          value: color,
        });

        // const response = await chrome.runtime.sendMessage({
        //   type: "popup_to_background",
        //   tabId: tab.id,
        //   text: color,
        // });
      } catch (error) {
        console.error(error);
      }
      // });
    }
  });
}
