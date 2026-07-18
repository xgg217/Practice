console.log(123);

// 拖拽结束
document.addEventListener("dragend", function (e) {
  if (e.target.tagName === "IMG") {
    // 发送消息
    chrome.runtime.sendMessage({
      type: "download",
      data: e.target.src,
    });
  }
});
