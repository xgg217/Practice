// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.type === "popup_to_background") {
//     console.log(message.type, message.tabId, message.text);

//     chrome.tabs.sendMessage(
//       message.tabId,
//       {
//         type: "background_to_content",
//         text: message.text,
//       },
//       (responseFromContent) => {
//         sendResponse({
//           status: "消息已发送到 content script",
//           contentResponse: responseFromContent,
//         });
//       },
//     );

//     // 这里的 sendResponse 是异步的，所以需要返回 true
//     return true;
//   }
// });
