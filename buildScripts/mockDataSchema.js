var schema = {
    "type": "object",
    "properties": {
      "projects": {
        "type": "array",
        "minItems": 10,
        "maxItems": 15,
        "items": {
          "type": "object",
          "properties": {
            id: {
              "type": "number",
              "unique": true,
              "minimum": 1
            },
            "firstName": {
              "type": "string",
              "faker": "name.firstName"
            },
            "lastName": {
              "type": "string",
              "faker": "name.lastName"
            },
            "email": {
              "type": "string",
              "faker": "internet.email"
            }
          },
          "required": ["id", "firstName", "lastName", "email"]
        }
      }
    },
    "required": ["projects"]
  };

  module.exports = schema;
