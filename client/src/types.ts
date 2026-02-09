export interface City {
  code: string; //도시 코드 예) seoul
  name: string; // 도시 한글 명 예)서울
  nameEn: string; // 도시 영어 명 예)Seoul
  thumbnail: string; // 도시썸네일 이미지 URL
  description: string;
  timezone: string; //도시의 타임존 예) Asia/Seoul
  flightHour: number; //서울로 부터비행시간 예) 2
  timezoneOffset: number; //서울로 부터 시차 예) 9
  coordinates: {
    lat: number;
    lng: number;
  };
  country: Country;
}

export interface Country {
  code: string; //국가코드 예) kr
  name: string; //국가 한글 명 예)한국
  nameEn: string; //국가 영어 명 예)Korea
  voltage: number; //국가의 전압 예)220
  visa: {
    required: boolean; //비자 필요 여부
    duration: number; //비자 유효기간
  };
  continent:
    | "Asia"
    | "Europe"
    | "North America"
    | "South America"
    | "Africa"
    | "Oceania"
    | "Antarctica";
}
