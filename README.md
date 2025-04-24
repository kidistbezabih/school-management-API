# School Management API Documentation

## 1. Add a New School
- **URL**: `/addSchool`
- **Method**: `POST`
- **Description**: Adds a new school to the database.
- **Request Body**:
    ```json
    {
      "name": "School Name",
      "address": "School Address",
      "latitude": 12.9716,
      "longitude": 77.5946
    }
    ```
- **Request Parameters**:
    - `name`: *string* (required) — The name of the school.
    - `address`: *string* (required) — The address of the school.
    - `latitude`: *float* (required) — Latitude of the school's location.
    - `longitude`: *float* (required) — Longitude of the school's location.

- **Response**:
    - **Success**:
        - **Code**: `201`
        - **Content**:
            ```json
            {
              "message": "School added successfully"
            }
            ```
    - **Error** (invalid input data):
        - **Code**: `400`
        - **Content**:
            ```json
            {
              "error": "Invalid input data"
            }
            ```
    - **Error** (server error):
        - **Code**: `500`
        - **Content**:
            ```json
            {
              "error": "Error message"
            }
            ```

## 2. List Schools Sorted by Distance
- **URL**: `/listSchools`
- **Method**: `GET`
- **Description**: Retrieves a list of schools sorted by distance from a given latitude and longitude.
- **Query Parameters**:
    - `latitude`: *float* (required) — The latitude of the user's current location.
    - `longitude`: *float* (required) — The longitude of the user's current location.

- **Response**:
    - **Success**:
        - **Code**: `200`
        - **Content**:
            ```json
            [
                {
                    "id": 1,
                    "name": "School A",
                    "address": "Address A",
                    "latitude": 12.9716,
                    "longitude": 77.5946,
                    "distance": 0.0
                },
                {
                    "id": 2,
                    "name": "School B",
                    "address": "Address B",
                    "latitude": 12.9356,
                    "longitude": 77.6256,
                    "distance": 2.3
                }
            ]
            ```
    - **Error** (invalid coordinates):
        - **Code**: `400`
        - **Content**:
            ```json
            {
              "error": "Invalid coordinates"
            }
            ```
    - **Error** (server error):
        - **Code**: `500`
        - **Content**:
            ```json
            {
              "error": "Error message"
            }
            ```

## How to Test Using Postman:

1. **Add a New School**:
    - Open Postman.
    - Set the request method to `POST`.
    - Enter the URL: `http://<your-server-address>/addSchool`.
    - In the **Body** tab, select `raw` and choose `JSON`.
    - Paste the JSON data for the school to be added.
    - Hit `Send`.

2. **List Schools**:
    - Open Postman.
    - Set the request method to `GET`.
    - Enter the URL: `http://<your-server-address>/listSchools?latitude=12.9716&longitude=77.5946`.
    - Hit `Send`.
