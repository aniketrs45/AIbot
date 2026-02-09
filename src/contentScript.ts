const SIDEBAR_ID = "ani-ai-sidebar";

const createSidebar = () => {
  if (document.getElementById(SIDEBAR_ID)) {
    return;
  }

  const wrapper = document.createElement("div");
  wrapper.id = SIDEBAR_ID;
  wrapper.style.cssText = [
    "position: fixed",
    "top: 0",
    "right: 0",
    "height: 100vh",
    "width: 360px",
    "z-index: 999999",
    "box-shadow: -10px 0 30px rgba(15, 23, 42, 0.12)"
  ].join(";");

  const iframe = document.createElement("iframe");
  iframe.src = chrome.runtime.getURL("dist/sidebar.html");
  iframe.title = "AI Sidebar";
  iframe.style.cssText = "border: none; width: 100%; height: 100%;";

  wrapper.appendChild(iframe);
  document.body.appendChild(wrapper);
};

const sendPageText = () => {
  const text = document.body?.innerText?.slice(0, 5000) ?? "";
  chrome.runtime.sendMessage({
    type: "pageText",
    payload: { text }
  });
};

createSidebar();
sendPageText();
