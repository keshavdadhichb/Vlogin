chrome.storage.sync.get(["username", "password"], (data) => {
    const usernameField = document.querySelector("#username");
    const passwordField = document.querySelector("#password");
    const loginButton = document.querySelector("#submitBtn");
  
    if (usernameField && passwordField && loginButton) {
      usernameField.value = data.username || "";
      passwordField.value = data.password || "";
  
      if (data.username && data.password) {
        // Delay the button click by 3 seconds
        setTimeout(() => {
          if (loginButton) {
            loginButton.click();
          }
        }, 1400); // 3000 milliseconds = 3 seconds
      }
    }
  });
  