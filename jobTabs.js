const SCRIPT_ID = "nutabs-script";
const BASE_URL =
    "https://northeastern-csm.symplicity.com/students/app/jobs/search";
const addJobLinks = () => {
    // only attempt to do anything if it is on the base URL
    if (!location.href.startsWith(BASE_URL)) {
        return;
    }
    console.debug("NUTabs Script Triggered");
    // remove an instance of a previously inserted NUTabs script if it exists
    const prevScript = document.getElementById(SCRIPT_ID);
    if (prevScript !== null) {
        prevScript.remove();
    }
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.id = SCRIPT_ID;
    const code = `
        (function getJobElements() {
            const noJobResults = document.getElementsByClassName("empty-state ng-scope").length !== 0;
            const loadingBar = document.getElementById('loading-bar');
            const jobElements = document.getElementsByClassName('list-item-body') || [];
            /* Wait for job results to appear.
            If there are no results for this search result stop waiting. */
            if ((jobElements.length === 0 || loadingBar) && !noJobResults) {
                setTimeout(getJobElements, 1000);
            } else {
                /* Replace all job title with an anchor tags and add the job URLs to it.
                 Remove the click action on all the parents so the current page does not load the job.
                 */
                for (const job of jobElements) {
                    const jobID = angular.element(job).scope().$ctrl.job.job_id;
                    const jobURL = "https://northeastern-csm.symplicity.com/students/app/jobs/detail/" + jobID;
                    // Since the HTML is being changed the parent needs to be changed after the child but is not accessible after the change
                    const parent = job.parentElement;
                    job.outerHTML = job.outerHTML.replace(/^<div/, "<a id='nutabs' target='_blank' href='" + jobURL + "'").replace(new RegExp("</div>$"), "</a>");
                    parent.outerHTML = parent.outerHTML.replace('ng-click="$ctrl.redirectToJob($ctrl.job.job_id)"', "");
                }
            }
        })();`;
    // add script to page
    try {
        s.append(document.createTextNode(code));
        (document.head || document.documentElement).appendChild(s);
    } catch (e) {
        console.error(e);
        s.text = code;
        document.body.appendChild(s);
    }
};

// Whenever the background script says a job search was performed execute the job script
chrome.runtime.connect({ name: "nutabs" }).onMessage.addListener(addJobLinks);
