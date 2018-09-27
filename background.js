chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(tab.id, {
    file: "reload.js",
    allFrames: true,
  })
})
