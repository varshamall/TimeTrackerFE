export function createLoginForm() {
  // Create the container
  const formContainer = document.createElement("div");

  // Set the overall container styles (black background)
  formContainer.style.backgroundColor = "black"; // Black background for the full screen
  formContainer.style.display = "flex";
  formContainer.style.flexDirection = "column";
  formContainer.style.justifyContent = "center";
  formContainer.style.alignItems = "center";
  formContainer.style.height = "100vh";

  // Create a smaller box that will contain the title, email, and password fields (green box)
  const innerBox = document.createElement("div");
  innerBox.style.backgroundColor = "black"; 
  innerBox.style.padding = "40px"; // Padding for space inside the green box
  innerBox.style.borderRadius = "10px"; // Rounded corners
  innerBox.style.display = "flex";
  innerBox.style.flexDirection = "column";
  innerBox.style.alignItems = "center";
  innerBox.style.width = "300px"; // Set a fixed width for the inner box

  // Set inner HTML for the form with email and password fields inside the green box
  innerBox.innerHTML = `
    <h1 style="font-family: Arial, sans-serif; font-size: 24px; color: white; margin-bottom: 20px;">
      Time Tracker
    </h1>
    <form id="login-form" style="display: flex; flex-direction: column; align-items: center; width: 100%;">
      <div style="margin-bottom: 15px; width: 100%;">
        <label for="email" style="display: block; margin-bottom: 5px; font-weight: bold; color: white; font-family: Arial;">E-mail</label>
      <div style="position: relative; width: 100%;">
          <input type="email" id="email" name="email" required placeholder="Enter your email address"
            style="width: 100%; padding: 10px; padding-right: 40px; border-radius: 5px; border: 1px solid #ccc; box-sizing: border-box; color: #5f6368;">
          <span style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); color: #5f6368;">
            &#x2709;
          </span>
        </div>
      </div>
      <div style="margin-bottom: 15px; width: 100%;">
        <label for="password" style="display: block; margin-bottom: 5px; font-weight: bold; color: white; font-family: Arial;">Password</label>
      <div style="position: relative; width: 100%;">
          <input type="password" id="password" name="password" required placeholder="Enter your password"
            style="width: 100%; padding: 10px; padding-right: 40px; border-radius: 5px; border: 1px solid #ccc; box-sizing: border-box; color: #5f6368;">
          <span style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); color: #5f6368;">
            &#x1F441;
          </span>
        </div>
      </div>
      <div>
        <button type="submit" style="padding: 10px 20px; border: none; border-radius: 5px; background-color: #087830; color: white; width: 100%; font-size: 16px; cursor: pointer;">
        Sign In
        </button>
      </div>
    </form>
  `;

  // Append the inner green box to the black container
  formContainer.appendChild(innerBox);

  // Optional: Handle form submission
  formContainer
    .querySelector("#login-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const email = event.target.email.value;
      const password = event.target.password.value;
      console.log("Email:", email);
      console.log("Password:", password);
      // Here you can add more login logic
    });

  return formContainer; // Return the created container
}
