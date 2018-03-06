var schema = {
    "type": "object",
    "properties": {
      "projects": {
        "type": "array",
        "minItems": 100,
        "maxItems": 150,
        "items": {
          "type": "object",
          "properties": {
            id: {
              "type": "integer",
              "unique": true,
              "minimum": 1
            },
            "name": {
              "type": "string",
              "faker": "name.firstName"
            }
          },
          "required": ["id", "name"]
        }
      }
    },
    "required": ["projects"]
  };

  module.exports = schema;
