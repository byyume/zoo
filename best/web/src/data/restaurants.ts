export interface Restaurant {
  id: number;
  category: '점심 식사' | '디저트' | '회식';
  recommender: string;
  location: string;
  name: string;
  genre: string;
  notes: string;
  link: string;
  payco: boolean | null;
  verified: boolean;
  verifier: string;
  review: string;
  soloOk: boolean | null;
}

export const restaurants: Restaurant[] = [
  // 점심 식사
  { id: 1, category: '점심 식사', recommender: '이현우', location: '하이펙스', name: '규카츠정 판교점', genre: '규카츠', notes: '16000원', link: 'https://naver.me/FK5vSRXb', payco: true, verified: false, verifier: '', review: '규카츠가 차가운 상태로 나와서 돌판에서 데워야 따뜻하게 먹을수있음', soloOk: null },
  { id: 2, category: '점심 식사', recommender: '김다니엘', location: '하이펙스 B동 지하1층', name: '계란집', genre: '오므라이스', notes: '', link: 'https://naver.me/G4WoZHIu', payco: true, verified: true, verifier: '이진혁', review: '', soloOk: null },
  { id: 3, category: '점심 식사', recommender: '김다니엘', location: '하이펙스 A동 지하1층', name: '김치도가', genre: '김치찌개', notes: '', link: 'https://naver.me/FjbaYBRP', payco: true, verified: false, verifier: '', review: '조금 국물이 짬', soloOk: null },
  { id: 4, category: '점심 식사', recommender: '이현우', location: '하이펙스 A동 지하1층', name: '기달임', genre: '곰탕', notes: '', link: 'https://naver.me/xdpFudm7', payco: true, verified: true, verifier: '이현우, 이진혁, 유슬기, 이경민, 박은강', review: '자극적이지 않는 깔끔한 돼지 곰탕', soloOk: null },
  { id: 5, category: '점심 식사', recommender: '김성수', location: '아브뉴프랑', name: '까몬', genre: '쌀국수', notes: '', link: 'https://naver.me/xVBxVUc1', payco: true, verified: true, verifier: '김성수, 이진혁', review: '볶은 고기를 얹은 볶음밥 맛있음. 반미도 맛있음. 현지느낌 쌀국수집.', soloOk: null },
  { id: 6, category: '점심 식사', recommender: '이현우', location: 'H스퀘어', name: '명품보쌈 판교', genre: '보쌈', notes: '', link: 'https://naver.me/G1wOUaXl', payco: true, verified: true, verifier: '', review: '사장님이 친절하시고 양이 많음', soloOk: null },
  { id: 7, category: '점심 식사', recommender: '이현우', location: '하이펙스', name: '미쁜선순대', genre: '순대국', notes: '', link: 'https://naver.me/xKER77Yg', payco: true, verified: false, verifier: '', review: '', soloOk: null },
  { id: 8, category: '점심 식사', recommender: '이경민', location: '유스페이스', name: '바스버거', genre: '햄버거', notes: '직장인 픽', link: '', payco: true, verified: true, verifier: '이경민, 서영찬', review: '감자튀김이 맛있고, 감자칩이 무료에요!', soloOk: null },
  { id: 9, category: '점심 식사', recommender: '김다니엘', location: '', name: '밥볶다', genre: '불백, 콩불', notes: '고기 먹고 밥 볶아 먹고', link: '', payco: true, verified: true, verifier: '이진혁, 서영찬', review: '코리안 디저트가 메인, 양념이 달달해요 볶음밥 재료 무한리필', soloOk: null },
  { id: 10, category: '점심 식사', recommender: '김다니엘', location: '', name: '보배반점', genre: '짬뽕', notes: '', link: 'https://naver.me/FIf9jtrW', payco: true, verified: false, verifier: '', review: '', soloOk: null },
  { id: 11, category: '점심 식사', recommender: '김다니엘', location: '', name: '북청집', genre: '제육, 삼겹살', notes: '', link: '', payco: true, verified: false, verifier: '', review: '', soloOk: null },
  { id: 12, category: '점심 식사', recommender: '김다니엘', location: '', name: '불고기온소반', genre: '불고기', notes: '', link: '', payco: true, verified: false, verifier: '', review: '', soloOk: null },
  { id: 13, category: '점심 식사', recommender: '김다니엘', location: '', name: '백소정', genre: '마제소바, 돈카츠', notes: '', link: '', payco: true, verified: true, verifier: '박종우', review: '일식 돈까스도 괜찮았지만, 마제소바도 괜찮았음.', soloOk: null },
  { id: 14, category: '점심 식사', recommender: '김성수', location: '에이치스퀘어 왼쪽', name: '비즐돈까스', genre: '돈까스', notes: '', link: '', payco: true, verified: true, verifier: '박은강', review: '돈까스 맛있음 생선까스도 맛있음, 겉바 촉촉 돈까스 인정!', soloOk: null },
  { id: 15, category: '점심 식사', recommender: '이현우', location: 'H스퀘어 S동', name: '빈티지 1988', genre: '파스타', notes: '', link: 'https://naver.me/5MVzZMh8', payco: true, verified: true, verifier: '이현우, 박종우', review: '문어 먹물 리조또, 르꼴라 피자가 특히 좋았습니다.', soloOk: null },
  { id: 16, category: '점심 식사', recommender: '이경민', location: '판교역 카카오아지트', name: '브룩클린 버거조인트', genre: '햄버거', notes: '비싸지만 맛있음', link: '', payco: null, verified: true, verifier: '이경민, 이현우', review: '풍부한 버터풍미 패티', soloOk: null },
  { id: 17, category: '점심 식사', recommender: '김다니엘', location: '', name: '이태리부대찌개', genre: '부대찌개', notes: '', link: '', payco: null, verified: true, verifier: '이현우', review: '서현에도 있었음. 여기도 비슷.', soloOk: null },
  { id: 18, category: '점심 식사', recommender: '이현우', location: 'H스퀘어', name: '생선구이맛집 해도락', genre: '생선구이', notes: '15000원', link: 'https://naver.me/xCB7qX7t', payco: false, verified: false, verifier: '김정연', review: '단짠 입맛에 최적인 계절메뉴 광어물회 추천', soloOk: null },
  { id: 19, category: '점심 식사', recommender: '이현우', location: '하이펙스', name: '서울전통 육개장 판교점', genre: '육개장', notes: '', link: 'https://naver.me/G4W8O99C', payco: true, verified: false, verifier: '', review: '', soloOk: null },
  { id: 20, category: '점심 식사', recommender: '김다니엘', location: '', name: '신라마라탕', genre: '마라탕', notes: '', link: '', payco: null, verified: false, verifier: '', review: '', soloOk: null },
  { id: 21, category: '점심 식사', recommender: '김다니엘', location: '', name: '삼군김치찌개', genre: '김치찌개', notes: '', link: '', payco: null, verified: false, verifier: '', review: '', soloOk: null },
  { id: 22, category: '점심 식사', recommender: '김성수', location: '삼환하이팩스-오른쪽지하', name: '신제주해장국', genre: '해장국', notes: '', link: '', payco: null, verified: false, verifier: '', review: '선지가 엄청 말랑말랑해서 저는 불호. 소고기 우거지 해장국 먹는데 존맛탱.', soloOk: null },
  { id: 23, category: '점심 식사', recommender: '애4팀', location: '스마일게이트 사옥', name: '스마일게이트 구내식당', genre: '구내식당', notes: '직원이 식권 구해줘야함', link: '', payco: false, verified: true, verifier: '이경민, 이진혁', review: '카페같은 분위기 느긋하게 먹기 좋다.', soloOk: null },
  { id: 24, category: '점심 식사', recommender: '이경희', location: '', name: '타이팔칠', genre: '팟타이, 쌀국수', notes: '', link: 'https://naver.me/G4Wo5rQc', payco: true, verified: true, verifier: '', review: '맛있고 양이 많아요', soloOk: null },
  { id: 25, category: '점심 식사', recommender: '이경민', location: '', name: '오봉집', genre: '낙지/제육/보쌈', notes: '체인점 / 보쌈 기름짐', link: '', payco: true, verified: true, verifier: '이진혁', review: '보쌈이 야들하고 기름짐, 조금 먹기엔 최고~', soloOk: null },
  { id: 26, category: '점심 식사', recommender: '이경희', location: '', name: '오한수 우육면가', genre: '우육면', notes: '', link: 'https://naver.me/xCB70SXH', payco: true, verified: false, verifier: '', review: '', soloOk: null },
  { id: 27, category: '점심 식사', recommender: '이현우', location: '판교역', name: '우영관', genre: '곰탕', notes: '', link: 'https://naver.me/xrSQMdxN', payco: false, verified: false, verifier: '', review: '', soloOk: null },
  { id: 28, category: '점심 식사', recommender: '박종우', location: '판교역', name: '임아로이', genre: '쌀국수', notes: '태국식 다양한 메뉴', link: 'https://naver.me/GtJchmOF', payco: null, verified: false, verifier: '김정연', review: '쌀국수 국물이 진했습니다. 소고기 쌀국수는 진국', soloOk: null },
  { id: 29, category: '점심 식사', recommender: '김다니엘', location: '', name: '이황식당', genre: '라멘', notes: '', link: '', payco: null, verified: false, verifier: '', review: '', soloOk: null },
  { id: 30, category: '점심 식사', recommender: '이반석', location: '하이펙스', name: '양촌리 돈까스', genre: '돈까스', notes: '가성비 좋은 돈까스집, 웨이팅있음', link: '', payco: null, verified: true, verifier: '박종우', review: '소스와 돈까스 조합이 느끼하지 않고 속이 편안함', soloOk: null },
  { id: 31, category: '점심 식사', recommender: '이경희', location: '', name: '종로계림닭도리탕원조', genre: '닭도리탕', notes: '', link: 'https://naver.me/G8s9JenG', payco: null, verified: false, verifier: '', review: '', soloOk: null },
  { id: 32, category: '점심 식사', recommender: '김다니엘', location: '', name: '제비면가', genre: '수제비, 꼬막비빔밥', notes: '', link: '', payco: null, verified: false, verifier: '', review: '', soloOk: null },
  { id: 33, category: '점심 식사', recommender: '이현우', location: '아비뉴프랑', name: 'The Place', genre: '파스타', notes: '위메이드 할인 20%', link: 'https://naver.me/5k7fZohs', payco: false, verified: true, verifier: '이현우', review: '위메이드할인20%. 감베리 피자하고 허니콤 피자 맛있음', soloOk: null },
  { id: 34, category: '점심 식사', recommender: '김다니엘', location: '', name: 'MS생감자치킨', genre: '치킨정식', notes: '', link: '', payco: true, verified: false, verifier: '', review: '', soloOk: null },
  { id: 35, category: '점심 식사', recommender: '이반석', location: '회사 근처', name: '타코 익스체인지', genre: '타코', notes: '살짝 아쉬운 양', link: '', payco: true, verified: true, verifier: '이다희', review: '향신료가 강하고 꽉찬 내용물의 타코, 다양한 종류의 핫소스가 있음', soloOk: null },
  { id: 36, category: '점심 식사', recommender: '유영수', location: '디테라스', name: '토호', genre: '일식당(덮밥)', notes: '', link: 'https://naver.me/xgNS4Y3t', payco: false, verified: false, verifier: '', review: '', soloOk: null },
  { id: 37, category: '점심 식사', recommender: '이경민', location: '', name: '폴트버거', genre: '햄버거', notes: '무난함, 밀크쉐이크 맛있음', link: 'https://naver.me/xIeXnZMG', payco: null, verified: true, verifier: '이경민', review: '', soloOk: null },
  { id: 38, category: '점심 식사', recommender: '이현우', location: '하이펙스', name: '픽유어온샐러드 판교', genre: '샐러드', notes: '12000원', link: 'https://naver.me/xVBxw1XL', payco: true, verified: false, verifier: '이진혁', review: '새우를 바로 구워줘서 따끈함', soloOk: null },
  { id: 39, category: '점심 식사', recommender: '이경민', location: '하이펙스', name: '코이라멘', genre: '라멘', notes: '정자 맛집 분점', link: '', payco: true, verified: true, verifier: '이경민, 유슬기, 이현우', review: '맛은 있는데 웨이팅 없이 들어갔는데 30분만에 음식 나옴', soloOk: null },
  { id: 40, category: '점심 식사', recommender: '김다니엘', location: '', name: '클준빛날영', genre: '라멘(매운)', notes: '', link: '', payco: null, verified: true, verifier: '임혜현', review: '덜짜게 옵션이 있어서 흡족함', soloOk: null },
  { id: 41, category: '점심 식사', recommender: '임혜현', location: '코이라멘 옆', name: '하동곰탕다동북엇국', genre: '북엇국/육회비빔밥/제육', notes: '북엇국을 기본으로 주는데 맛있음', link: '', payco: true, verified: true, verifier: '', review: '북엇국시키면 밥말아서 나옴, 육회비빔밥 맛있었음', soloOk: null },
  { id: 42, category: '점심 식사', recommender: '김다니엘', location: '', name: '홍호아', genre: '쌀국수', notes: '', link: '', payco: null, verified: false, verifier: '이정희', review: '반미가 맛납니다.', soloOk: null },
  { id: 43, category: '점심 식사', recommender: '이현우', location: '유스페이스', name: '효카츠 판교', genre: '돈까스', notes: '', link: 'https://naver.me/52R5oSnz', payco: true, verified: true, verifier: '이현우', review: '일본식 돈까스 무난함. 자리 널럴.', soloOk: null },
  { id: 44, category: '점심 식사', recommender: '박종우', location: '아비뉴프랑', name: '인디테이블', genre: '카레', notes: '', link: 'https://naver.me/GmbMUIN6', payco: true, verified: false, verifier: '', review: '', soloOk: null },
  { id: 45, category: '점심 식사', recommender: '유영수', location: '유스페이스', name: '한촌설렁탕', genre: '설렁탕', notes: '', link: 'https://naver.me/GaldvGzb', payco: true, verified: false, verifier: '', review: '', soloOk: null },
  { id: 46, category: '점심 식사', recommender: '이정희', location: '삼환 하이 펙스', name: '삼미 칼국수', genre: '칼국수', notes: '단일메뉴 돌직구 같은 칼국수', link: '', payco: false, verified: false, verifier: '이정희', review: '본인은 칼국수를 싫어함 오직 이집 칼국수만 먹음', soloOk: null },
  { id: 47, category: '점심 식사', recommender: '서영찬', location: '유스페이스', name: '조이포', genre: '쌀국수', notes: '', link: 'https://naver.me/xHgIukYD', payco: true, verified: true, verifier: '서영찬', review: '쌀국수 양도 많고 맛있어요', soloOk: null },
  // 디저트
  { id: 48, category: '디저트', recommender: '이경민', location: '', name: '아이스걸크림보이', genre: '젤라또', notes: '', link: '', payco: null, verified: true, verifier: '이경민, 이진혁, 이다희', review: '재료의 맛이 굉장히 강하게 느껴져서 만족감이 높음', soloOk: null },
  { id: 49, category: '디저트', recommender: '이경민', location: '', name: '알레그리아', genre: '커피', notes: '', link: 'https://naver.me/GDa2Q7tf', payco: null, verified: true, verifier: '이진혁', review: '', soloOk: null },
  { id: 50, category: '디저트', recommender: '이경민', location: '', name: '커피미학', genre: '커피', notes: '20년전 감성', link: '', payco: null, verified: true, verifier: '이경민', review: '', soloOk: null },
  { id: 51, category: '디저트', recommender: '이현우', location: '아비뉴프랑', name: '타르틴 베이커리', genre: '빵+커피', notes: '', link: '', payco: null, verified: true, verifier: '이현우', review: '타르트 스타일 디저트 맛있음', soloOk: null },
  // 회식
  { id: 52, category: '회식', recommender: '이경민', location: '', name: '봉피양', genre: '돼지갈비, 평냉', notes: '', link: 'https://naver.me/5UEcAiR2', payco: null, verified: true, verifier: '이진혁, 이현우', review: '', soloOk: null },
  { id: 53, category: '회식', recommender: '이경민', location: '', name: '차알', genre: '중식당', notes: '', link: '', payco: null, verified: true, verifier: '이경민', review: '탕수육은 만족스러웠지만 짜장, 짬뽕은 기대 이하', soloOk: null },
  { id: 54, category: '회식', recommender: '이경민', location: '', name: '퍼블릭탭', genre: '맥주집', notes: '', link: 'https://naver.me/5oE5ADvH', payco: null, verified: true, verifier: '이진혁', review: '', soloOk: null },
  { id: 55, category: '회식', recommender: '이경민', location: '', name: '숙성도', genre: '제주돼지고기', notes: '', link: '', payco: null, verified: true, verifier: '이경민', review: '', soloOk: null },
  { id: 56, category: '회식', recommender: '이진혁', location: '', name: '몽중헌', genre: '중식당', notes: '', link: 'https://naver.me/Fio7MPZ4', payco: null, verified: true, verifier: '이진혁', review: '', soloOk: null },
  { id: 57, category: '회식', recommender: '유슬기', location: '', name: '제이스팟', genre: '샤브샤브', notes: '', link: 'https://naver.me/5gFg8E7e', payco: null, verified: true, verifier: '유슬기', review: '개인적으로 토마토와 마라가 맛있어요', soloOk: null },
  { id: 58, category: '회식', recommender: '유슬기', location: '', name: '세이로무시효', genre: '샤브샤브', notes: '', link: 'https://naver.me/G3PBGzmj', payco: null, verified: true, verifier: '유슬기', review: '개인적으로 스키야끼가 맛있었습니다 (양은 적음)', soloOk: null },
  { id: 59, category: '회식', recommender: '매치코어', location: '', name: '라그릴리아', genre: '파스타', notes: '파스타는 맛있음, 스테이크는 가성비 떨어짐', link: '', payco: null, verified: true, verifier: '이진혁', review: '파스타 맛집', soloOk: null },
  { id: 60, category: '회식', recommender: '이현우', location: '아비뉴프랑', name: '석암생소금구이', genre: '삼겹살', notes: '고기 맛남', link: '', payco: null, verified: true, verifier: '이현우, 이진혁', review: '고기 다 먹고 돌판 짜파게티 맛있음. 고기 직접구워야함.', soloOk: null },
  { id: 61, category: '회식', recommender: '이반석', location: '아비뉴프랑', name: '덕후선생', genre: '중식당', notes: '넓음, 깔끔하고 질높은 서비스, 비쌈', link: 'https://naver.me/GyYbPTJ6', payco: null, verified: true, verifier: '박종우', review: '우육면 맛있으나 조금 짜다고 하셨음. 탕수육이 완전 맛있었음.', soloOk: null },
  { id: 62, category: '회식', recommender: '이정희', location: '판교알파돔타워', name: '신도세기', genre: '삼겹살', notes: '판교점은 다르다', link: '', payco: false, verified: true, verifier: '박종우', review: '', soloOk: null },
  { id: 63, category: '회식', recommender: '이진혁', location: '유스페이스1', name: '울프스덴', genre: '양식', notes: '가보고 싶어서 일단 리스트업', link: 'https://naver.me/5mI0aVtO', payco: null, verified: false, verifier: '', review: '', soloOk: null },
];

export const categories = ['전체', '점심 식사', '디저트', '회식'] as const;
export type Category = typeof categories[number];
