chrome.action.onClicked.addListener(async (tab) => {
  let [tabInfo] = await chrome.tabs.query({ active: true, currentWindow: true });
  let tabId = tabInfo.id;

  chrome.scripting.executeScript({
    target: { tabId: tabId },
    function: getDOM,
  });
});

function getDOM() {
  const dom = document.documentElement.outerHTML;
  console.log(dom);
}
