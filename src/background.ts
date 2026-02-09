interface MockApiPayload {
  topic: string;
}

const mockApiResponse = (payload: MockApiPayload) => {
  return {
    greeting: `Hi Aniket! I am Lilly, your AI assistant for ${payload.topic}.`,
    suggestions: [
      { id: "estimate", title: "Generate a detailed estimate template for", icon: "🧾" },
      { id: "follow-up", title: "Create a friendly follow-up email for a client", icon: "💌" },
      { id: "compare", title: "Compare two estimates", icon: "📊" },
      { id: "profile", title: "Create a sample client profile", icon: "👤" }
    ]
  };
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message?.type === "mockApiRequest") {
    const data = mockApiResponse(message.payload as MockApiPayload);
    sendResponse({ ok: true, data });
    return true;
  }

  if (message?.type === "pageText") {
    console.info("Received page text from", sender.tab?.id, message.payload?.text?.slice(0, 120));
    sendResponse({ ok: true });
    return true;
  }

  return false;
});
