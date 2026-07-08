chrome.action.onClicked.addListener(async (tab) => {
  // let targetWindow = null; // 当前窗口

  let tabCount = 0;

  try {
    // 获取当前窗口
    const targetWindow = await chrome.windows.getCurrent();

    // 获得当前窗口的所有标签页
    const tabs = await chrome.tabs.query({
      windowId: targetWindow.id,
    });

    tabCount = tabs.length;

    // 获得所有窗口
    const allWindows = await chrome.windows.getAll({
      populate: true,
      // currentWindow: true,
    });

    let tabPosition = tabCount;

    for (let i = 0; i < allWindows.length; i++) {
      let win = allWindows[i];

      // 如果当前遍历的窗口不是当前目标窗口，则将所有的tab移动到目标窗口
      if (win.id !== targetWindow.id) {
        let tabs = win.tabs;

        for (let j = 0; j < tabs.length; j++) {
          let tab = tabs[j];
          await chrome.tabs.move(tab.id, {
            index: tabPosition,
            windowId: targetWindow.id,
          });
          tabPosition++;
        }
      }
    }

    // 合并当前窗口的所有标签页到目标窗口
    // await chrome.tabs.move({
    //   tabs: currentTabs,
    //   windowId: targetWindow.id,
    // });

    // await chrome.tabs.query({
    //   windowId: targetWindow.id,
    // });
  } catch (error) {
    console.error(error);
  }
});
