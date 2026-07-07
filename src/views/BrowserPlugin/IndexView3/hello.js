// 此处的 document 是 hello.html 中的 document 对象
const buttons = document.querySelector('.color-buttons');

buttons.addEventListener('click', (e) => {

  if (e.target.tagName !== 'BUTTON')
  {
    console.log(e.target.dataset.colo);
    return;
  }

  const color = e.target.dataset.color;

  // 获取当前活动标签页
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    const tab = tabs[0];

    // 在当前活动标签页中执行内容脚本
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: (color) => {
        // 此处的 document 是当前活动标签页的 document 对象
        document.body.style.backgroundColor = color;
      },
      args: [color]
    });
  });
});
