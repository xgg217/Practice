// 接受消息
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "download") {
    console.log(123);

    chrome.downloads.download(
      {
        url: message.data,
        filename: "downloaded_image.jpg",
        saveAs: true,
      },
      function (downloadId) {
        console.log(downloadId);
      },
    );
  }
});
