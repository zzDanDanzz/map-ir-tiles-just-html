function getApiKey() {
  let apiKey;
  const localStorageApikey = localStorage.getItem(window.API_KEY_STORAGE_KEY);
  if (localStorageApikey) {
    window.apiKey = localStorageApikey;
    return;
  }
  while (true) {
    apiKey = window.prompt("x-api-key (accounts.map.ir):");
    if (apiKey && apiKey.trim()) {
      break;
    }
  }
  window.apiKey = apiKey;
  localStorage.setItem(window.API_KEY_STORAGE_KEY, apiKey);
}

function handleClearApiKey() {
  const clearApiKeyButton = document.getElementById("clearApiKey");

  clearApiKeyButton.addEventListener("click", () => {
    localStorage.removeItem(window.API_KEY_STORAGE_KEY);
    window.location.reload();
  });
}

getApiKey();
handleClearApiKey();
