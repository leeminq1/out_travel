const Images = [
  { image: require("./assets/myhome.jpg") },
  { image: require("./assets/home1.jpg") },
  { image: require("./assets/home2.jpg") },
  { image: require("./assets/home3.jpg") },
  { image: require("./assets/home4.jpeg") },
  { image: require("./assets/home5.png") },
];

export const markers = [
  {
    coordinate: {
      latitude: 37.482653409730645,
      longitude: 126.90354215579079,
      latitudeDelta: 0.03,
      longitudeDelta: 0.015090824406148114,
    },
    title: "우리집",
    description: "사실은 민규&민지&케로 행복한 민지네집 (민규는 동거인)",
    image: Images[0].image,
    rating: 4,
    reviews: 99,
  },
  {
    coordinate: {
      latitude: 37.47682803986239,
      longitude: 126.91666177434425,
      latitudeDelta: 0.03,
      longitudeDelta: 0.015090824406148114,
    },
    title: "내동생민지네",
    description: "빨래? 설거지? 청소는 언제? 민지네집",
    image: Images[1].image,
    rating: 4,
    reviews: 99,
  },
  {
    coordinate: {
      latitude: 37.468192049433796,
      longitude: 126.90650219100772,
      latitudeDelta: 0.03,
      longitudeDelta: 0.015090824406148114,
    },
    title: "장모님집",
    description: "민지어머님 & 민경이 & 타로가 살고있는 행복한집",
    image: Images[2].image,
    rating: 5,
    reviews: 102,
  },
  {
    coordinate: {
      latitude: 37.45759495929232,
      longitude: 126.90522362201705,
      latitudeDelta: 0.03,
      longitudeDelta: 0.015090824406148114,
    },
    title: "도마다리",
    description: "대한민국 감자탕 탑 1, 민규&민지 살찌게한 도마다리",
    image: Images[3].image,
    rating: 4,
    reviews: 220,
  },
  {
    coordinate: {
      latitude: 37.45402900759973,
      longitude: 126.90277857706612,
      latitudeDelta: 0.03,
      longitudeDelta: 0.015090824406148114,
    },
    title: "오복순대국",
    description: "도마다리 먹고 2차가자! 오복순대국",
    image: Images[4].image,
    rating: 4,
    reviews: 48,
  },
  {
    coordinate: {
      latitude: 37.489241054488836,
      longitude: 127.0520483154253,
      latitudeDelta: 0.03,
      longitudeDelta: 0.015090824406148114,
    },
    title: "요보 회사",
    description: "월요병의 근원..그렇지만 열심히 일하자 민지네 회사!",
    image: Images[5].image,
    rating: 4,
    reviews: 178,
  },
];

export const travel_data = [
  {
    coordinate: {
      latitude: 37.482653409730645,
      longitude: 126.90354215579079,
      latitudeDelta: 0.03,
      longitudeDelta: 0.015090824406148114,
    },
    title: "우리집",
    role: "숙소",
    address: "서울시 관악구",
    day: "2021-06-01",
  },
  {
    coordinate: {
      latitude: 37.47682803986239,
      longitude: 126.91666177434425,
      latitudeDelta: 0.03,
      longitudeDelta: 0.015090824406148114,
    },
    title: "내동생민지네",
    role: "숙소",
    address: "서울시 관악구",
    day: "2021-06-02",
  },
  {
    coordinate: {
      latitude: 37.468192049433796,
      longitude: 126.90650219100772,
      latitudeDelta: 0.03,
      longitudeDelta: 0.015090824406148114,
    },
    title: "장모님집",
    role: "숙소",
    address: "서울시 금천구",
    day: "2021-06-03",
  },
  {
    coordinate: {
      latitude: 37.45759495929232,
      longitude: 126.90522362201705,
      latitudeDelta: 0.03,
      longitudeDelta: 0.015090824406148114,
    },
    title: "도마다리",
    role: "맛집",
    address: "시흥동",
    day: "2021-06-04",
  },
  {
    coordinate: {
      latitude: 37.45402900759973,
      longitude: 126.90277857706612,
      latitudeDelta: 0.03,
      longitudeDelta: 0.015090824406148114,
    },
    title: "오복순대국",
    role: "맛집",
    address: "시흥동",
    day: "2021-06-05",
  },
  {
    coordinate: {
      latitude: 37.489241054488836,
      longitude: 127.0520483154253,
      latitudeDelta: 0.03,
      longitudeDelta: 0.015090824406148114,
    },
    title: "요보 회사",
    role: "관광명소",
    address: "도곡동",
    day: "2021-06-06",
  },
];
