📘 School Management API Documentation
This API allows you to add schools and list nearby schools based on geographic coordinates.

🏫 Add a School
Endpoint: POST /api/schools

URL: http://localhost:3000/api/schools

Headers:

Content-Type: application/json

Request Body:

json
Copy
Edit
{
  "name": "Kality High School",
  "location": {
    "latitude": 8.9806,
    "longitude": 38.7578
  }
}
✅ Success Response
Code: 201 CREATED

Content:

json
Copy
Edit
{
  "message": "School added successfully",
  "school": {
    "id": 1,
    "name": "Kality High School",
    "latitude": 8.9806,
    "longitude": 38.7578
  }
}
📍 List Nearby Schools
Endpoint: GET /api/schools

URL: http://localhost:3000/api/schools?latitude=8.9806&longitude=38.7578

Query Parameters:

latitude — Required (e.g. 8.9806)

longitude — Required (e.g. 38.7578)

✅ Success Response
Code: 200 OK

Content:

json
Copy
Edit
{
  "schools": [
    {
      "id": 1,
      "name": "Kality High School",
      "latitude": 8.9806,
      "longitude": 38.7578,
      "distance": "0.00 km"
    }
  ]
}
🛠️ Error Responses
❌ Missing Parameters
Code: 400 BAD REQUEST

Example:

json
Copy
Edit
{
  "error": "Latitude and Longitude are required"
}
❌ Server Error
Code: 500 INTERNAL SERVER ERROR

Example:

json
Copy
Edit
{
  "error": "Failed to retrieve schools"
}
📦 Notes
Make sure your MySQL server is running on port 3306.

The app must be running locally using npm run dev or similar.

Ensure your .env contains the correct DB credentials.