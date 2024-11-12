let reviewsData = [];
let initialDisplayCount = 3;
let isShowingAllReviews = false;

function fetchReviews() {
  // Display a loading message (optional)
  // document.getElementById("reviewsContainer").innerHTML = "Loading...";

  fetch("fetch_reviews.php")
    .then((response) => {
      console.log("API response status:", response.status); // Log status
      return response.json();
    })
    .then((data) => {
      console.log("Fetched data:", data); // Log fetched data

      if (data.error) {
        document.getElementById("reviewsContainer").innerHTML = data.error;
        return;
      }

      reviewsData = data;
      displayReviews();
    })
    .catch((error) => {
      console.error("Fetch error:", error); // Log any fetch errors
      document.getElementById("reviewsContainer").innerHTML =
        "An error occurred while fetching reviews.";
    });
}

function displayReviews() {
  const initialReviews = reviewsData.slice(0, initialDisplayCount);
  const remainingReviews = reviewsData.slice(initialDisplayCount);

  // Display initial reviews
  let initialReviewsHtml = "";
  initialReviews.forEach((review) => {
    initialReviewsHtml += generateReviewHtml(review);
  });
  document.getElementById("reviewsContainer").innerHTML = initialReviewsHtml;

  // Display remaining reviews (hidden initially)
  let moreReviewsHtml = "";
  remainingReviews.forEach((review) => {
    moreReviewsHtml += generateReviewHtml(review);
  });
  document.getElementById("moreReviewsContainer").innerHTML = moreReviewsHtml;
}

function toggleReviews() {
  const moreReviewsContainer = document.getElementById("moreReviewsContainer");
  const button = document.querySelector(".btn-primary");

  // Check if all reviews are being shown
  if (isShowingAllReviews) {
    // Redirect to Google Places reviews
    window.open(
      "https://www.google.com/maps/place/yuva+sakthi+academy/@11.0740023,76.9993209,17z/data=!4m22!1m13!4m12!1m4!2m2!1d77.0018453!2d11.073906!4e1!1m6!1m2!1s0x3ba8f7f10a2f9091:0x98cbdcebe6ccb54b!2syuvasakthi+academy!2m2!1d77.0018615!2d11.0740918!3m7!1s0x3ba8f7f10a2f9091:0x98cbdcebe6ccb54b!8m2!3d11.0740918!4d77.0018615!9m1!1b1!16s%2Fg%2F11g9qwc8l3?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
      "_blank"
    ); // Replace YOUR_PLACE_ID with your actual Place ID
  } else {
    // Toggle showing more reviews
    isShowingAllReviews = true;
    moreReviewsContainer.style.display = "block";
    button.textContent = "See All Reviews"; // Change button text
    button.innerHTML += ' <i class="fa fa-angle-right"></i>'; // Append icon (optional)
  }
}

// Function to generate HTML for each review
function generateReviewHtml(review) {
  return `
    <div class="bt_reviewdetails">
      <div class="testimonial">
        <div class="description">
          <p>${review.text}</p>
        </div>
        <div class="pic">
          <p>${review.author_name.charAt(0).toUpperCase()}</p>
        </div>
        <h3 class="testimonial-title">
          ${review.author_name.toUpperCase()}<br>
          <span class="star-rating-ex"></span>
        </h3>
      </div>
    </div>
  `;
}

function generateStars(rating) {
  let starsHtml = "";
  for (let i = 1; i <= 5; i++) {
    starsHtml +=
      i <= rating
        ? '<img src="./image/star.png" alt="stars" width="15px" height="15px">'
        : '<img src="./image/star.png" alt="stars" width="15px" height="15px">';
  }
  return starsHtml;
}

// Call fetchReviews on page load
fetchReviews();
