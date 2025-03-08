chrome.action.onClicked.addListener(function(tab) {
  chrome.scripting.executeScript({
    target: {
      allFrames: true,
      tabId: tab.id,
    },
    files: ["reload.js"],
  })
})
