import Work1 from "../../assets/Genie-Seller.png";
import Work2 from "../../assets/Genie-User.png";
import Work3 from "../../assets/NFT.png";

export const projectsData = [
    {
        id: 1,
        image: Work1,
        title: 'E-Commerce: Seller',
        description: '선물 추천 서비스의 판매자용 관리 페이지 입니다. 판매자의 매출관리가 주가 되는 서비스입니다.',
        desc1: '기획 및 F/E 와 B/E를 담당하여 개발 진행',
        desc2: 'Springboot를 이용하여 RESTful API 서비스 구현',
        desc3: 'Chart.js 라이브러리를 활용하여 일별/월별 매출 데이터, 상품수량 데이터, 판매량 데이터 ,판매상품 데이터 시각화',
        desc4: 'MySQL 를 이용하여  상품 및 배송상태의 CRUD 및 필터링',
        desc5: '매 단위 할당받은 파트를 정시 안에 검토하고 제공하여 단위 목표를 100% 달성',
        category: 'web',
    },
    {
        id: 2,
        image: Work2,
        title: 'E-Commerce: User',
        description: '선물 추천 서비스 입니다.',
        desc1: 'API를 활용한 결제창 구현',
        desc2: '2번 이상 반복되는 프론트 컴포넌트를 추상화하여 재사용 및 코드 간소화',
        desc3: 'MySQL 활용 데이터베이스 설계 및 관리',
        desc4: 'Figma/XD 를 이용한 화면 설계 및 레퍼런스용 자료 제작',
        desc5: 'Figma/Photoshop 을 이용한 디자인 에셋 제작',
        category: 'web',
    },
    {
        id: 3,
        image: Work3,
        title: 'GALABEAR NFT',
        description: '웹을 서핑하는 곰돌이 해적을 컨셉으로 한 NFT 프로젝트입니다.',
        desc1: '일러스트레이터, 엔지니어, 전략마케터와 협업',
        desc2: 'NFT 디자인, 웹사이트 디자인, NFT white-paper 작성',
        desc3: '10,000개 NFT 생성',
        desc4: 'SNS를 활용한 마케팅을 통해 이전 대비 웹사이트 방문율을 100% 향상 및 미국, 중국, 인도 등 새로운 해외 유저의 유입을 늘림',
        desc5: '해외 NFT 프로젝트와의 콜라보레이션을 통해 whitelist를 한정적으로 무료로 배포하여 예상구매자를  50% 늘림',
        category: 'NFT',
    },
];

export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'web',
    },
    {
        name: 'NFT',
    },
    {
        name: 'design',
    },
]