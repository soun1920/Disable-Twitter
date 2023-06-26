'use strict';

// With background scripts you can communicate with popup
// and contentScript files.
// For more information on background script,
// See https://developer.chrome.com/extensions/background_pages
chrome.webNavigation.onCompleted.addListener((details) => {
  console.log("tab has removed")
  chrome.tabs.remove(details.tabId, () => { })
}, { url: [{ hostSuffix: "twitter.com" }] })

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log("tab has updated")
  if (tab.url === "/https:\/\/twitter\.com\/*/") {
    chrome.tab.remove(tab.id, () => { });
  }
});

chrome.action.onClicked.addListener(tab => {
  const { url } = tab;
  console.log(`Loading: ${url}`);
});