<?php
// Set the header to return JSON
header('Content-Type: application/json');

// Your Google Places API Key
$apiKey = 'AIzaSyCDsKcQ0sSIVV3iHOf4KzyJ1x9GTHrgy0A'; // Replace with your actual API key

// Place ID for which you want to get reviews
$placeId = 'ChIJkZAvCvH3qDsRS7XM5uvcy5g'; // Replace with the desired place ID

// Construct the API URL
$url = "https://maps.googleapis.com/maps/api/place/details/json?place_id={$placeId}&fields=name,rating,reviews&key={$apiKey}";

// Initialize a cURL session
$ch = curl_init();

// Set the URL and other options for the cURL session
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Execute the cURL request
$response = curl_exec($ch);

// Check for cURL errors
if (curl_errno($ch)) {
    echo json_encode(['error' => curl_error($ch)]);
    curl_close($ch);
    exit;
}

// Close the cURL session
curl_close($ch);

// Decode the JSON response
$data = json_decode($response, true);

// Check if the status is OK and there are reviews
if ($data['status'] === 'OK' && isset($data['result']['reviews'])) {
    echo json_encode($data['result']['reviews']);
} else {
    echo json_encode(['error' => 'No reviews found or an error occurred.']);
}
?>
