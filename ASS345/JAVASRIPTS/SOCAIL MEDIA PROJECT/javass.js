// Mock data for social media metrics
const metricsData = {
  followers: 0,
  likes: 40,
  shares: 10,
  comments: 20,
};

// Mock recent activity data
const recentActivity = [
  "Grace liked your post.",
  "Dave commented on your photo.",
  "Benita shared your link.",
  "Nextserve23 followed you.",
];

// Function to display metrics
function displayMetrics() {
  document.getElementById("followers").querySelector(".count").textContent =
    metricsData.followers;
  document.getElementById("likes").querySelector(".count").textContent =
    metricsData.likes;
  document.getElementById("shares").querySelector(".count").textContent =
    metricsData.shares;
  document.getElementById("comments").querySelector(".count").textContent =
    metricsData.comments;
}

// Function to display recent activity
function displayRecentActivity() {
  const feedList = document.getElementById("feed-list");
  recentActivity.forEach((activity) => {
    const li = document.createElement("li");
    li.textContent = activity;
    feedList.appendChild(li);
  });
}

// Initialize dashboard
function initDashboard() {
  displayMetrics();
  displayRecentActivity();
}

// Call the initialization function
initDashboard();
