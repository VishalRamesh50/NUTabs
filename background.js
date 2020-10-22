// Whenever a response from the job API is gotten, assume a job search has been
// performed and tell the content script to add its script to the page.
chrome.runtime.onConnect.addListener((p) => {
    chrome.webRequest.onResponseStarted.addListener(() => p.postMessage({}), {
        urls: ["https://northeastern-csm.symplicity.com/api/v2/jobs*"],
        types: ["xmlhttprequest"],
    });
});
