document.getElementById('readDomButton').addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: getDOM,
  });
});

function getDOM() {
  const dom = document.documentElement.outerHTML;
  console.log(dom);
}
