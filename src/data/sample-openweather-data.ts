export const weatherApiResponseData = {
  coord: { lon: 103.8501, lat: 1.2897 },
  weather: [
    { id: 502, main: "Rain", description: "heavy intensity rain", icon: "10d" },
  ],
  base: "stations",
  main: {
    temp: 22.81,
    feels_like: 23.71,
    temp_min: 22.72,
    temp_max: 23.92,
    pressure: 1011,
    humidity: 98,
    sea_level: 1011,
    grnd_level: 1011,
  },
  visibility: 2000,
  wind: { speed: 3.09, deg: 0 },
  rain: { "1h": 3.45 },
  clouds: { all: 100 },
  dt: 1736505995,
  sys: {
    type: 2,
    id: 2099694,
    country: "SG",
    sunrise: 1736464219,
    sunset: 1736507599,
  },
  timezone: 28800,
  id: 1880252,
  name: "Singapore",
  cod: 200,
};

export const forecastApiResponseData = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1736510400,
      main: {
        temp: 295.96,
        feels_like: 296.86,
        temp_min: 295.96,
        temp_max: 296.79,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1011,
        humidity: 98,
        temp_kf: -0.83,
      },
      weather: [
        { id: 501, main: "Rain", description: "moderate rain", icon: "10n" },
      ],
      clouds: { all: 100 },
      wind: { speed: 8.25, deg: 298, gust: 10.81 },
      visibility: 10000,
      pop: 1,
      rain: { "3h": 6.53 },
      sys: { pod: "n" },
      dt_txt: "2025-01-10 12:00:00",
    },
    {
      dt: 1736521200,
      main: {
        temp: 296.27,
        feels_like: 297.12,
        temp_min: 296.27,
        temp_max: 296.88,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1012,
        humidity: 95,
        temp_kf: -0.61,
      },
      weather: [
        { id: 501, main: "Rain", description: "moderate rain", icon: "10n" },
      ],
      clouds: { all: 100 },
      wind: { speed: 10.44, deg: 304, gust: 15.32 },
      visibility: 10000,
      pop: 1,
      rain: { "3h": 5.64 },
      sys: { pod: "n" },
      dt_txt: "2025-01-10 15:00:00",
    },
    {
      dt: 1736532000,
      main: {
        temp: 296.12,
        feels_like: 296.93,
        temp_min: 296.12,
        temp_max: 296.2,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1011,
        humidity: 94,
        temp_kf: -0.08,
      },
      weather: [
        { id: 501, main: "Rain", description: "moderate rain", icon: "10n" },
      ],
      clouds: { all: 100 },
      wind: { speed: 8.1, deg: 316, gust: 11.28 },
      visibility: 8332,
      pop: 1,
      rain: { "3h": 3.3 },
      sys: { pod: "n" },
      dt_txt: "2025-01-10 18:00:00",
    },
    {
      dt: 1736542800,
      main: {
        temp: 295.74,
        feels_like: 296.48,
        temp_min: 295.74,
        temp_max: 295.74,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1010,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        { id: 501, main: "Rain", description: "moderate rain", icon: "10n" },
      ],
      clouds: { all: 100 },
      wind: { speed: 6.51, deg: 318, gust: 10.09 },
      visibility: 8581,
      pop: 1,
      rain: { "3h": 4.75 },
      sys: { pod: "n" },
      dt_txt: "2025-01-10 21:00:00",
    },
    {
      dt: 1736553600,
      main: {
        temp: 296.33,
        feels_like: 297.08,
        temp_min: 296.33,
        temp_max: 296.33,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1011,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 5.71, deg: 326, gust: 8.73 },
      visibility: 10000,
      pop: 1,
      rain: { "3h": 1.68 },
      sys: { pod: "d" },
      dt_txt: "2025-01-11 00:00:00",
    },
    {
      dt: 1736564400,
      main: {
        temp: 296.73,
        feels_like: 297.49,
        temp_min: 296.73,
        temp_max: 296.73,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1012,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 5.42, deg: 318, gust: 7.08 },
      visibility: 10000,
      pop: 1,
      rain: { "3h": 0.83 },
      sys: { pod: "d" },
      dt_txt: "2025-01-11 03:00:00",
    },
    {
      dt: 1736575200,
      main: {
        temp: 297.39,
        feels_like: 298.12,
        temp_min: 297.39,
        temp_max: 297.39,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1011,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 3.91, deg: 328, gust: 6.59 },
      visibility: 10000,
      pop: 1,
      rain: { "3h": 1.52 },
      sys: { pod: "d" },
      dt_txt: "2025-01-11 06:00:00",
    },
    {
      dt: 1736586000,
      main: {
        temp: 296.95,
        feels_like: 297.76,
        temp_min: 296.95,
        temp_max: 296.95,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1009,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 5.4, deg: 332, gust: 5.93 },
      visibility: 10000,
      pop: 0.98,
      rain: { "3h": 0.51 },
      sys: { pod: "d" },
      dt_txt: "2025-01-11 09:00:00",
    },
    {
      dt: 1736596800,
      main: {
        temp: 297.34,
        feels_like: 298.11,
        temp_min: 297.34,
        temp_max: 297.34,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1010,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 4.62, deg: 347, gust: 6.24 },
      visibility: 10000,
      pop: 0.34,
      sys: { pod: "n" },
      dt_txt: "2025-01-11 12:00:00",
    },
    {
      dt: 1736607600,
      main: {
        temp: 297.11,
        feels_like: 297.86,
        temp_min: 297.11,
        temp_max: 297.11,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1012,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" },
      ],
      clouds: { all: 100 },
      wind: { speed: 5.16, deg: 341, gust: 7.8 },
      visibility: 10000,
      pop: 0.36,
      rain: { "3h": 0.15 },
      sys: { pod: "n" },
      dt_txt: "2025-01-11 15:00:00",
    },
    {
      dt: 1736618400,
      main: {
        temp: 296.92,
        feels_like: 297.7,
        temp_min: 296.92,
        temp_max: 296.92,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1011,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 5.58, deg: 349, gust: 8.61 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-01-11 18:00:00",
    },
    {
      dt: 1736629200,
      main: {
        temp: 297.13,
        feels_like: 297.86,
        temp_min: 297.13,
        temp_max: 297.13,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1010,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 4.17, deg: 338, gust: 5.45 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-01-11 21:00:00",
    },
    {
      dt: 1736640000,
      main: {
        temp: 297.04,
        feels_like: 297.81,
        temp_min: 297.04,
        temp_max: 297.04,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1011,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 3.81, deg: 325, gust: 4.62 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2025-01-12 00:00:00",
    },
    {
      dt: 1736650800,
      main: {
        temp: 298.47,
        feels_like: 299.25,
        temp_min: 298.47,
        temp_max: 298.47,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1012,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 3.59, deg: 0, gust: 5.1 },
      visibility: 10000,
      pop: 0.07,
      sys: { pod: "d" },
      dt_txt: "2025-01-12 03:00:00",
    },
    {
      dt: 1736661600,
      main: {
        temp: 299.12,
        feels_like: 299.12,
        temp_min: 299.12,
        temp_max: 299.12,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1010,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        { id: 501, main: "Rain", description: "moderate rain", icon: "10d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 7.03, deg: 18, gust: 10.32 },
      visibility: 7903,
      pop: 1,
      rain: { "3h": 4.05 },
      sys: { pod: "d" },
      dt_txt: "2025-01-12 06:00:00",
    },
    {
      dt: 1736672400,
      main: {
        temp: 298.55,
        feels_like: 299.42,
        temp_min: 298.55,
        temp_max: 298.55,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1008,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        { id: 501, main: "Rain", description: "moderate rain", icon: "10d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 7.8, deg: 48, gust: 10.62 },
      visibility: 4013,
      pop: 1,
      rain: { "3h": 9.29 },
      sys: { pod: "d" },
      dt_txt: "2025-01-12 09:00:00",
    },
    {
      dt: 1736683200,
      main: {
        temp: 297.75,
        feels_like: 298.67,
        temp_min: 297.75,
        temp_max: 297.75,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1010,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [
        {
          id: 502,
          main: "Rain",
          description: "heavy intensity rain",
          icon: "10n",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 7.46, deg: 40, gust: 11.07 },
      visibility: 3385,
      pop: 1,
      rain: { "3h": 21.89 },
      sys: { pod: "n" },
      dt_txt: "2025-01-12 12:00:00",
    },
    {
      dt: 1736694000,
      main: {
        temp: 297.95,
        feels_like: 298.89,
        temp_min: 297.95,
        temp_max: 297.95,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1011,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [
        { id: 501, main: "Rain", description: "moderate rain", icon: "10n" },
      ],
      clouds: { all: 100 },
      wind: { speed: 6.92, deg: 25, gust: 11.31 },
      visibility: 10000,
      pop: 1,
      rain: { "3h": 10.05 },
      sys: { pod: "n" },
      dt_txt: "2025-01-12 15:00:00",
    },
    {
      dt: 1736704800,
      main: {
        temp: 297.84,
        feels_like: 298.77,
        temp_min: 297.84,
        temp_max: 297.84,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1010,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [
        { id: 501, main: "Rain", description: "moderate rain", icon: "10n" },
      ],
      clouds: { all: 100 },
      wind: { speed: 6.47, deg: 25, gust: 10.7 },
      visibility: 6925,
      pop: 1,
      rain: { "3h": 5.12 },
      sys: { pod: "n" },
      dt_txt: "2025-01-12 18:00:00",
    },
    {
      dt: 1736715600,
      main: {
        temp: 297.88,
        feels_like: 298.78,
        temp_min: 297.88,
        temp_max: 297.88,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1009,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" },
      ],
      clouds: { all: 100 },
      wind: { speed: 7.43, deg: 17, gust: 11.89 },
      visibility: 10000,
      pop: 1,
      rain: { "3h": 1.99 },
      sys: { pod: "n" },
      dt_txt: "2025-01-12 21:00:00",
    },
    {
      dt: 1736726400,
      main: {
        temp: 298,
        feels_like: 298.86,
        temp_min: 298,
        temp_max: 298,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1010,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 6.4, deg: 13, gust: 10.92 },
      visibility: 10000,
      pop: 1,
      rain: { "3h": 1.46 },
      sys: { pod: "d" },
      dt_txt: "2025-01-13 00:00:00",
    },
    {
      dt: 1736737200,
      main: {
        temp: 298.12,
        feels_like: 299.02,
        temp_min: 298.12,
        temp_max: 298.12,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1011,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 5.3, deg: 11, gust: 9.25 },
      visibility: 10000,
      pop: 0.96,
      rain: { "3h": 1.76 },
      sys: { pod: "d" },
      dt_txt: "2025-01-13 03:00:00",
    },
    {
      dt: 1736748000,
      main: {
        temp: 298.3,
        feels_like: 299.19,
        temp_min: 298.3,
        temp_max: 298.3,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1009,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        { id: 501, main: "Rain", description: "moderate rain", icon: "10d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 5.26, deg: 11, gust: 8.69 },
      visibility: 8905,
      pop: 1,
      rain: { "3h": 3.39 },
      sys: { pod: "d" },
      dt_txt: "2025-01-13 06:00:00",
    },
    {
      dt: 1736758800,
      main: {
        temp: 297.73,
        feels_like: 298.67,
        temp_min: 297.73,
        temp_max: 297.73,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1007,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        { id: 501, main: "Rain", description: "moderate rain", icon: "10d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 6.23, deg: 22, gust: 9.04 },
      visibility: 4081,
      pop: 1,
      rain: { "3h": 9.92 },
      sys: { pod: "d" },
      dt_txt: "2025-01-13 09:00:00",
    },
    {
      dt: 1736769600,
      main: {
        temp: 297.49,
        feels_like: 298.38,
        temp_min: 297.49,
        temp_max: 297.49,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1009,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [
        { id: 501, main: "Rain", description: "moderate rain", icon: "10n" },
      ],
      clouds: { all: 100 },
      wind: { speed: 5.19, deg: 6, gust: 8.12 },
      visibility: 10000,
      pop: 1,
      rain: { "3h": 6.07 },
      sys: { pod: "n" },
      dt_txt: "2025-01-13 12:00:00",
    },
    {
      dt: 1736780400,
      main: {
        temp: 297.61,
        feels_like: 298.51,
        temp_min: 297.61,
        temp_max: 297.61,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1011,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" },
      ],
      clouds: { all: 100 },
      wind: { speed: 4.89, deg: 347, gust: 7.79 },
      visibility: 10000,
      pop: 1,
      rain: { "3h": 2.2 },
      sys: { pod: "n" },
      dt_txt: "2025-01-13 15:00:00",
    },
    {
      dt: 1736791200,
      main: {
        temp: 297.66,
        feels_like: 298.54,
        temp_min: 297.66,
        temp_max: 297.66,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1010,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" },
      ],
      clouds: { all: 100 },
      wind: { speed: 5.32, deg: 351, gust: 8.9 },
      visibility: 10000,
      pop: 1,
      rain: { "3h": 0.29 },
      sys: { pod: "n" },
      dt_txt: "2025-01-13 18:00:00",
    },
    {
      dt: 1736802000,
      main: {
        temp: 297.5,
        feels_like: 298.37,
        temp_min: 297.5,
        temp_max: 297.5,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1008,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 5.03, deg: 352, gust: 9.42 },
      visibility: 10000,
      pop: 0.14,
      sys: { pod: "n" },
      dt_txt: "2025-01-13 21:00:00",
    },
    {
      dt: 1736812800,
      main: {
        temp: 297.62,
        feels_like: 298.45,
        temp_min: 297.62,
        temp_max: 297.62,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1010,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 3.7, deg: 353, gust: 6.91 },
      visibility: 10000,
      pop: 0.14,
      sys: { pod: "d" },
      dt_txt: "2025-01-14 00:00:00",
    },
    {
      dt: 1736823600,
      main: {
        temp: 297.92,
        feels_like: 298.75,
        temp_min: 297.92,
        temp_max: 297.92,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1011,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 3.55, deg: 343, gust: 6.49 },
      visibility: 10000,
      pop: 0.41,
      rain: { "3h": 0.18 },
      sys: { pod: "d" },
      dt_txt: "2025-01-14 03:00:00",
    },
    {
      dt: 1736834400,
      main: {
        temp: 298.52,
        feels_like: 299.36,
        temp_min: 298.52,
        temp_max: 298.52,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1009,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 4.3, deg: 354, gust: 7.14 },
      visibility: 10000,
      pop: 1,
      rain: { "3h": 2.86 },
      sys: { pod: "d" },
      dt_txt: "2025-01-14 06:00:00",
    },
    {
      dt: 1736845200,
      main: {
        temp: 298.24,
        feels_like: 299.13,
        temp_min: 298.24,
        temp_max: 298.24,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1008,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 6.4, deg: 9, gust: 9.66 },
      visibility: 10000,
      pop: 1,
      rain: { "3h": 1.67 },
      sys: { pod: "d" },
      dt_txt: "2025-01-14 09:00:00",
    },
    {
      dt: 1736856000,
      main: {
        temp: 297.65,
        feels_like: 298.53,
        temp_min: 297.65,
        temp_max: 297.65,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1009,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" },
      ],
      clouds: { all: 100 },
      wind: { speed: 6.13, deg: 359, gust: 9.87 },
      visibility: 10000,
      pop: 1,
      rain: { "3h": 0.58 },
      sys: { pod: "n" },
      dt_txt: "2025-01-14 12:00:00",
    },
    {
      dt: 1736866800,
      main: {
        temp: 297.55,
        feels_like: 298.42,
        temp_min: 297.55,
        temp_max: 297.55,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1011,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" },
      ],
      clouds: { all: 100 },
      wind: { speed: 5.12, deg: 357, gust: 8.95 },
      visibility: 10000,
      pop: 0.97,
      rain: { "3h": 0.92 },
      sys: { pod: "n" },
      dt_txt: "2025-01-14 15:00:00",
    },
    {
      dt: 1736877600,
      main: {
        temp: 297.65,
        feels_like: 298.53,
        temp_min: 297.65,
        temp_max: 297.65,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1009,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" },
      ],
      clouds: { all: 100 },
      wind: { speed: 5.51, deg: 340, gust: 9.4 },
      visibility: 10000,
      pop: 0.93,
      rain: { "3h": 0.33 },
      sys: { pod: "n" },
      dt_txt: "2025-01-14 18:00:00",
    },
    {
      dt: 1736888400,
      main: {
        temp: 297.54,
        feels_like: 298.41,
        temp_min: 297.54,
        temp_max: 297.54,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1008,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" },
      ],
      clouds: { all: 100 },
      wind: { speed: 3.55, deg: 335, gust: 6.26 },
      visibility: 10000,
      pop: 0.72,
      rain: { "3h": 0.39 },
      sys: { pod: "n" },
      dt_txt: "2025-01-14 21:00:00",
    },
    {
      dt: 1736899200,
      main: {
        temp: 297.77,
        feels_like: 298.66,
        temp_min: 297.77,
        temp_max: 297.77,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1010,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 3.83, deg: 325, gust: 6.53 },
      visibility: 10000,
      pop: 0.81,
      rain: { "3h": 0.3 },
      sys: { pod: "d" },
      dt_txt: "2025-01-15 00:00:00",
    },
    {
      dt: 1736910000,
      main: {
        temp: 299.07,
        feels_like: 299.86,
        temp_min: 299.07,
        temp_max: 299.07,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1011,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 6.11, deg: 338, gust: 7.58 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2025-01-15 03:00:00",
    },
    {
      dt: 1736920800,
      main: {
        temp: 299.82,
        feels_like: 302.03,
        temp_min: 299.82,
        temp_max: 299.82,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1009,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 4.69, deg: 315, gust: 5.84 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2025-01-15 06:00:00",
    },
    {
      dt: 1736931600,
      main: {
        temp: 300.49,
        feels_like: 303.44,
        temp_min: 300.49,
        temp_max: 300.49,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1007,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 3.78, deg: 293, gust: 4.18 },
      visibility: 10000,
      pop: 0.82,
      rain: { "3h": 0.3 },
      sys: { pod: "d" },
      dt_txt: "2025-01-15 09:00:00",
    },
  ],
  city: {
    id: 1880252,
    name: "Singapore",
    coord: { lat: 1.2897, lon: 103.8501 },
    country: "SG",
    population: 3547809,
    timezone: 28800,
    sunrise: 1736464219,
    sunset: 1736507599,
  },
};
