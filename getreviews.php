<?php
// Your Google Places API key
$apiKey = 'AIzaSyCDsKcQ0sSIVV3iHOf4KzyJ1x9GTHrgy0A';

// Place ID of the location you want to fetch details for
$placeId = 'ChIJkZAvCvH3qDsRS7XM5uvcy5g';  // Example place ID for Sydney, Australia

// URL for Place Details API
$url = "https://maps.googleapis.com/maps/api/place/details/json?place_id=$placeId&fields=name,rating,reviews&key=$apiKey";

// Initialize cURL session
$curl = curl_init();

// Set the URL and other options
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

// Execute the cURL request
$response = curl_exec($curl);

// Check for errors
if ($response === false) {
    echo 'cURL Error: ' . curl_error($curl);
} else {
    // Decode the JSON response
    $placeDetails = json_decode($response, true);

    // Display place name, rating, and reviews
    if (isset($placeDetails['result'])) {
        echo "<h1>" . $placeDetails['result']['name'] . "</h1>";
        echo "<p>Rating: " . $placeDetails['result']['rating'] . "</p>";

        // Check if reviews exist
        if (isset($placeDetails['result']['reviews'])) {
            echo "<h2>Reviews:</h2>";
            foreach ($placeDetails['result']['reviews'] as $review) {
                echo "<p><strong>Author:</strong> " . $review['author_name'] . "</p>";
                echo "<p><strong>Rating:</strong> " . $review['rating'] . "</p>";
                echo "<p><strong>Comment:</strong> " . $review['text'] . "</p>";
                echo "<hr>";
            }
        } else {
            echo "<p>No reviews available for this place.</p>";
        }
    } else {
        echo "No details found for this place.";
    }
}

// Close the cURL session
curl_close($curl);
