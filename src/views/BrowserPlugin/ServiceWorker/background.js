// 默认关
chrome.runtime.onInstalled.addListener(() => {
  console.log('ServiceWorker 练习 安装完成');

  chrome.action.setBadgeText({ text: '关' });
});

// 仅在 MDN 文档页面点击图标
const MDN = "https://developer.mozilla.org/zh-CN/docs/Web/HTML";

chrome.action.onClicked.addListener(async (tab) => {
  // console.log('点击了图标');

  if (!tab.url.startsWith(MDN))
  {
    return
  }

  try
  {
    const str = await chrome.action.getBadgeText({ tabId: tab.id });
    console.log(str);

    let val = str === '开' ? '关' : '开'

    await chrome.action.setBadgeText({ text: val });
  } catch (error)
  {
    console.error(error);

  }

});

