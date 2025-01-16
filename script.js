// Toggle Developer Mode when button is clicked
document.getElementById('dev-mode-toggle').addEventListener('click', function () {
  const devMode = document.getElementById('dev-mode');
  const consoleOutput = document.getElementById('console-output');

  // Toggle visibility of Developer Mode
  if (devMode.style.display === 'none' || devMode.style.display === '') {
    devMode.style.display = 'block';
    consoleOutput.innerText = 'Developer Mode activated. Logs are here...';
    console.log('Developer Mode ON');
  } else {
    devMode.style.display = 'none';
    consoleOutput.innerText = '';
    console.log('Developer Mode OFF');
  }
});

// Fetch the latest commit from GitHub and display it
const commitInfoElement = document.getElementById('commit-info');

async function fetchLatestCommit() {
  try {
    const response = await fetch('https://api.github.com/repos/LCSOGthb/Games/commits');
    const commits = await response.json();

    if (commits.length > 0) {
      const latestCommit = commits[0];
      const commitMessage = latestCommit.commit.message;
      const authorName = latestCommit.commit.author.name;
      const commitDate = new Date(latestCommit.commit.author.date).toLocaleString();

      commitInfoElement.innerHTML = `
        <strong>Latest Commit:</strong><br>
        ${commitMessage}<br>
        <small>by ${authorName} on ${commitDate}</small>
      `;
    } else {
      commitInfoElement.innerHTML = 'No commits found.';
    }
  } catch (error) {
    commitInfoElement.innerHTML = 'Failed to load commit info.';
    console.error('Error fetching commit data:', error);
  }
}

// Call the function to fetch the commit info
fetchLatestCommit();
