<?php
// Your Google Places API key
$apiKey = 'AIzaSyCDsKcQ0sSIVV3iHOf4KzyJ1x9GTHrgy0A';

// Search query (e.g., a business name, address)
$searchQuery = 'SN Complex, 95/1 G, Sathy Road, Saravanampatti, Coimbatore, Tamil Nadu 641035';
//

// URL for Place Search API
$url = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=" . urlencode($searchQuery) . "&inputtype=textquery&fields=place_id,name&key=$apiKey";

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
    $placeSearchResult = json_decode($response, true);
    var_dump($placeSearchResult);
    // Display place ID and name
    if (isset($placeSearchResult['candidates'][0])) {
        echo "Place Name: " . $placeSearchResult['candidates'][0]['name'] . "<br>";
        echo "Place ID: " . $placeSearchResult['candidates'][0]['place_id'] . "<br>";
    } else {
        echo "No place found.";
    }
}

// Close the cURL session
curl_close($curl);
