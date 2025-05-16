document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const mobile = document.getElementById("mobile").value.trim();
      const education = document.getElementById("education").value;
      const network = document.querySelector('input[name="network"]:checked');
  
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const mobilePattern = /^[0-9]{10}$/;
  
      // Basic validation checks
      if (!name || !email || !mobile || !education || !network) {
        alert("Please fill in all fields.");
        return;
      }
  
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      if (!mobilePattern.test(mobile)) {
        alert("Mobile number must be exactly 10 digits.");
        return;
      }
  
      // If all validations pass
      alert("Registration successful!");
      form.reset(); // Optional: clear form after successful submission
    });
  });

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.textContent = task;
  li.onclick = () => li.remove(); // Remove on click
  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
