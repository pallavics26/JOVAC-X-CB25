// Replace with your GitHub username
const username = "pallavics26";

fetch(`https://api.github.com/users/${username}`)
  .then(res => res.json())
  .then(data => {
    document.getElementById("name").innerText = data.name || "No name found";
    document.getElementById("avatar").src = data.avatar_url;
    document.getElementById("bio").innerText = data.bio || "No bio available";
  })
  .catch(error => {
    console.error("Error:", error);
    document.getElementById("name").innerText = "Error loading data";
  });
