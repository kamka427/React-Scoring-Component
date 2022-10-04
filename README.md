# Test grading app in React

## Summary
Implementation of a test grading component in React\
The app supports:
- Custom tests supplied by JSON format
- Outputting results in JSON after grading
- Showing your progress with checkmars and a progressbars
- The validation of every field in the forms
- The possibility to edit invalid fields in modals, even when on other tabs.
- Discarding without losing all the progress
- Multiple answer types
- Light and Dark themes

## Example Input
```JSON

{
  "name": "Tester Test",
  "tasks": [
    {
      "name": "1. task",
      "aspects": [
        {
          "id": 11,
          "name": "1. aspect",
          "type": "list",
          "values": {
            "good": 5,
            "bad": 0
          },
          "required": true
        }
      ]
    },
    {
      "name": "2. task",
      "aspects": [
        {
          "id": 21,
          "name": "1. aspect",
          "description": "1. szempont description",
          "type": "number",
          "maxValue": 5,
          "required": true
        },
        {
          "id": 22,
          "name": "2. aspect",
          "description": "2. aspect description",
          "type": "number",
          "maxValue": 4,
          "required": true
        },
        {
          "id": 23,
          "name": "3. aspect",
          "description": "3. aspect description",
          "type": "number",
          "maxValue": 6,
          "required": true
        },
        {
          "id": 24,
          "name": "4. aspect",
          "description": "4. aspect description",
          "type": "number",
          "maxValue": 4,
          "required": false
        }
      ]
    },
    {
      "name": "3. task",
      "aspects": [
        {
          "id": 31,
          "name": "1. aspect",
          "type": "boolean",
          "value": 2
        }
      ]
    }
  ]
}

```

## Example Output
```JSON

{
  "results": [
    {
      "id": 11,
      "value": 5
    },
    {
      "id": 21,
      "value": 4
    },
    {
      "id": 22,
      "value": 4
    },
    {
      "id": 23,
      "value": 2
    },
    {
      "id": 24,
      "value": 0
    },
    {
      "id": 31,
      "value": 0
    }
  ]
}

```

## How to run
```Clone the folder and install the dependencies with npm install. Run the project with npm start.```
> This project uses Node 17



<img width="1401" alt="Képernyőfotó 2022-10-02 - 12 12 52" src="https://user-images.githubusercontent.com/73647069/193449013-c9e59f5e-dd1a-4554-9577-38ff5c54241c.png">
<img width="1408" alt="Képernyőfotó 2022-10-02 - 12 12 20" src="https://user-images.githubusercontent.com/73647069/193449020-3df9b896-5688-4c2c-a803-f5402285032e.png">
<img width="1397" alt="Képernyőfotó 2022-10-02 - 12 12 45" src="https://user-images.githubusercontent.com/73647069/193449017-0a70f841-ab35-4e60-8d28-7685dd092c64.png">
<img width="1406" alt="Képernyőfotó 2022-10-02 - 12 12 29" src="https://user-images.githubusercontent.com/73647069/193449018-96f042ae-48ab-40d0-9c7d-b11ea9ce6598.png">
<img width="1416" alt="Képernyőfotó 2022-10-02 - 12 13 01" src="https://user-images.githubusercontent.com/73647069/193750538-7f90887c-b510-44c4-9737-fc1d77e68372.png">

