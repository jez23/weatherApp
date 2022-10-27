let api = {
  city: "Lisbon",
  country: "Portugal",
  coordinates: {
    longitude: -9.1365919,
    latitude: 38.7077507,
  },
  daily: [
    {
      condition: {
        description: "moderate rain",
        icon_url:
          "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png",
        icon: "rain-day",
      },
      temperature: {
        day: 21.44,
        minimum: 18.11,
        maximum: 21.58,
        humidity: 71,
      },
      wind: {
        speed: 8.06,
      },
      time: 1666699200,
    },
    {
      condition: {
        description: "light rain",
        icon_url:
          "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png",
        icon: "rain-day",
      },
      temperature: {
        day: 22.3,
        minimum: 18.47,
        maximum: 23.32,
        humidity: 74,
      },
      wind: {
        speed: 5.91,
      },
      time: 1666785600,
    },
    {
      condition: {
        description: "light rain",
        icon_url:
          "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png",
        icon: "rain-day",
      },
      temperature: {
        day: 22.12,
        minimum: 19.26,
        maximum: 22.26,
        humidity: 71,
      },
      wind: {
        speed: 7.59,
      },
      time: 1666872000,
    },
    {
      condition: {
        description: "light rain",
        icon_url:
          "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png",
        icon: "rain-day",
      },
      temperature: {
        day: 22.47,
        minimum: 19.14,
        maximum: 22.47,
        humidity: 68,
      },
      wind: {
        speed: 6.75,
      },
      time: 1666958400,
    },
    {
      condition: {
        description: "light rain",
        icon_url:
          "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png",
        icon: "rain-day",
      },
      temperature: {
        day: 22.79,
        minimum: 17.93,
        maximum: 22.79,
        humidity: 65,
      },
      wind: {
        speed: 7.35,
      },
      time: 1667044800,
    },
    {
      condition: {
        description: "moderate rain",
        icon_url:
          "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png",
        icon: "rain-day",
      },
      temperature: {
        day: 19.33,
        minimum: 17.72,
        maximum: 20.44,
        humidity: 83,
      },
      wind: {
        speed: 5.5,
      },
      time: 1667131200,
    },
    {
      condition: {
        description: "moderate rain",
        icon_url:
          "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png",
        icon: "rain-day",
      },
      temperature: {
        day: 19.09,
        minimum: 16.83,
        maximum: 19.09,
        humidity: 89,
      },
      wind: {
        speed: 7.18,
      },
      time: 1667217600,
    },
  ],
};

console.log(api.daily[0].condition.description);
