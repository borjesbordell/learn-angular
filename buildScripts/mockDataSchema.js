var schema = {
    "type": "object",
    "properties": {
      "projects": {
        "type": "array",
        "minItems": 4,
        "maxItems": 5,
        "items": {
          "type": "object",
          "properties": {
            id: {
              "type": "integer",
              "unique": true,
              "minimum": 1,
              "maximum": 20,
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
