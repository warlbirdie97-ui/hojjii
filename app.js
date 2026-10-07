const icons = {
  arrow: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5"/></svg>',
  external: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 4h6v6m0-6L10 14M20 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4"/></svg>',
  link: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m10 13 4-4M8 16l-1 1a4 4 0 0 1-6-6l5-5a4 4 0 0 1 6 0m4 2 1-1a4 4 0 0 1 6 6l-5 5a4 4 0 0 1-6 0" transform="translate(1 1) scale(.92)"/></svg>',
  document: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 14h8M8 17h5"/></svg>',
};

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

const imageButton = (src, caption, className = '') => `<button class="image-trigger ${className}" type="button" data-image="${src}" data-caption="${escapeHtml(caption)}" aria-label="${escapeHtml(caption)} 확대 보기"><img src="${src}" alt="${escapeHtml(caption)}" loading="lazy" /><span class="image-hint">확대해서 보기 ↗</span></button>`;

const documentExample = ({ src, document, page, title, description, file }) => `<figure class="document-example"><figcaption><span class="example-source">작성 예시 · ${document} · ${page}쪽 원문</span><strong>${title}</strong><p>${description}</p></figcaption>${imageButton(src, `작성 예시 · ${document} ${page}쪽 — ${title}`)}<a class="example-original" href="./assets/docs/${file}#page=${page}" target="_blank" rel="noopener noreferrer">원문에서 보기 ${icons.external}</a></figure>`;

const notice = (title, text) => `<div class="notice"><span class="notice-title">${title}</span><p>${text}</p></div>`;

const planningSection = {
  "id": "planning",
  "title": "제품기획",
  "summary": "제품과 리뷰를 분석하고, 개선 방향을 정한 뒤 디자인 레퍼런스를 찾는다.",
  "groups": [
    {
      "n": 1,
      "id": "planning-product",
      "title": "제품 파악",
      "actions": [
        {
          "title": "상세페이지를 끝까지 확인한다",
          "text": "상세페이지 전체를 처음부터 끝까지 확인한다."
        },
        {
          "title": "상단 소구점을 확인한다",
          "text": "상세페이지 최상단에서 가장 먼저 강조하는 내용을 확인한다."
        },
        {
          "title": "판매자의 기획 의도를 파악한다",
          "text": "판매자가 이 제품에서 가장 중요하게 보는 포인트를 확인한다."
        },
        {
          "title": "제품의 핵심 강점을 정리한다",
          "text": "디자인·성능·크기·안전성·편의성·가격 중 핵심이 무엇인지 파악한다."
        },
        {
          "title": "제품 스펙을 정리한다",
          "text": "크기·무게·소재·전원·배터리·출력·사용시간 등을 정리한다."
        },
        {
          "title": "사용 상황을 정리한다",
          "text": "누가, 어디서, 언제, 어떤 용도로 사용하는지 정리한다."
        },
        {
          "title": "내 생각을 먼저 정리한다",
          "text": "내가 생각한 장점·단점·개선 포인트를 리뷰를 보기 전에 정리한다."
        },
        {
          "title": "판매자 의도와 내 생각을 비교한다",
          "text": "판매자가 강조한 내용과 내가 중요하다고 본 내용을 비교한다."
        },
        {
          "title": "나와 다른 의견을 따로 기록한다",
          "text": "내 생각과 다른 부분은 별도로 기록해 둔다."
        }
      ]
    },
    {
      "n": 2,
      "id": "planning-reviews",
      "title": "리뷰 파악",
      "actions": [
        {
          "title": "리뷰를 보기 전에 기준을 세운다",
          "text": "내가 생각한 소구점이 맞는지 확인할 기준을 정리한다."
        },
        {
          "title": "장점 리뷰를 확인한다",
          "text": "소비자가 반복적으로 칭찬하는 내용을 정리한다."
        },
        {
          "title": "단점 리뷰를 확인한다",
          "text": "소비자가 반복적으로 불편해하는 내용을 정리한다."
        },
        {
          "title": "제품 자체의 문제를 구분한다",
          "text": "배송·포장·개인 취향 문제와 제품 자체의 문제를 구분한다."
        },
        {
          "title": "같은 의견이 반복되는지 확인한다",
          "text": "같은 장점이나 단점이 여러 리뷰에서 반복적으로 나오는지 확인한다."
        },
        {
          "title": "해당 의견의 비중을 확인한다",
          "text": "전체 리뷰 대비 해당 의견이 어느 정도 나오는지 확인한다."
        },
        {
          "title": "개선 힌트를 찾는다",
          "text": "“이 부분만 개선되면 좋겠다”처럼 개선 방향을 알려주는 리뷰를 찾는다."
        },
        {
          "title": "Q&A를 확인한다",
          "text": "구매 전에 소비자가 궁금해하는 부분을 확인한다."
        }
      ]
    },
    {
      "n": 3,
      "id": "planning-validation",
      "title": "단점 검증",
      "actions": [
        {
          "title": "단점 확정을 보류한다",
          "text": "리뷰에 나왔다는 이유만으로 바로 제품의 단점으로 확정하지 않는다."
        },
        {
          "title": "내돈내산 블로그를 확인한다",
          "text": "직접 구매한 실제 사용자도 같은 단점을 말하는지 확인한다."
        },
        {
          "title": "유튜브 사용 영상을 확인한다",
          "text": "작동 영상과 사용 장면을 보고 소음·크기감 등을 확인한다."
        },
        {
          "title": "다른 판매처의 리뷰를 확인한다",
          "text": "다른 플랫폼에서도 같은 의견이 나오는지 확인한다."
        },
        {
          "title": "개인차인지 제품 문제인지 판단한다",
          "text": "개인 취향에 따른 의견인지 실제 제품 문제인지 구분한다."
        },
        {
          "title": "샘플로 확인할 내용을 정리한다",
          "text": "제품을 주문해 직접 확인해야 할 내용을 정리한다."
        },
        {
          "title": "필요하면 제품을 주문해 최종 확인한다",
          "text": "필요 시 제품을 주문한 뒤 실제 사용감을 확인한다."
        }
      ]
    },
    {
      "n": 4,
      "id": "planning-direction",
      "title": "종합 정리",
      "actions": [
        {
          "title": "만들 제품의 방향을 구상한다",
          "text": "지금까지 파악한 내용을 바탕으로 우리가 만들 제품의 모습을 구상한다."
        },
        {
          "title": "유지할 장점을 정리한다",
          "text": "소비자가 만족하는 핵심 장점을 정리한다."
        },
        {
          "title": "개선할 단점을 정리한다",
          "text": "반드시 개선해야 할 단점을 정리한다."
        },
        {
          "title": "바꾸면 안 되는 부분을 정리한다",
          "text": "소비자가 이미 좋아하는 핵심 구조와 형태를 정리한다."
        },
        {
          "title": "차별화 포인트를 정리한다",
          "text": "우리 제품에서 다르게 가져갈 부분을 정리한다."
        },
        {
          "title": "개선 방향을 구체화한다",
          "text": "단점을 어떻게 개선할지 구체적으로 정리한다."
        },
        {
          "title": "추가 확인이 필요한 내용을 정리한다",
          "text": "아직 판단이 애매한 부분은 따로 정리한다."
        }
      ]
    },
    {
      "n": 5,
      "id": "planning-competitors",
      "title": "타사 제품 참고",
      "actions": [
        {
          "title": "필요한 정보를 먼저 정리한다",
          "text": "타사 제품을 보기 전에 내가 필요한 정보를 정리한다."
        },
        {
          "title": "목적에 맞는 제품을 찾는다",
          "text": "소음·디자인·안전성·조작부·구조 등 참고할 목적에 맞춰 제품을 찾는다."
        },
        {
          "title": "비교 기준을 정한다",
          "text": "무엇을 비교할지 기준을 정리한다."
        },
        {
          "title": "참고할 부분만 추출한다",
          "text": "타사 제품 전체가 아니라 필요한 부분만 참고한다."
        },
        {
          "title": "우리 제품에 적용 가능한지 검토한다",
          "text": "구조·원가·생산 가능성·사용성을 기준으로 적용 가능성을 검토한다."
        }
      ]
    },
    {
      "n": 6,
      "id": "planning-design",
      "title": "디자인 보기 전 최종 확인",
      "actions": [
        {
          "title": "제품 목표를 확인한다",
          "text": "제품 방향과 핵심 소구점이 정리되었는지 확인한다."
        },
        {
          "title": "유지할 장점을 확정한다",
          "text": "반드시 가져갈 장점이 정리되었는지 확인한다."
        },
        {
          "title": "개선할 단점을 확정한다",
          "text": "개선해야 할 단점이 정리되었는지 확인한다."
        },
        {
          "title": "레퍼런스 기준을 확정한다",
          "text": "어떤 이미지를 찾아야 하는지 기준을 정리한다."
        },
        {
          "title": "디자인 레퍼런스를 찾기 시작한다",
          "text": "기준을 정리한 뒤 디자인 이미지·핀터레스트·타사 제품을 살펴본다."
        }
      ]
    }
  ]
};

const sectionData = [
  planningSection,
  {
    id: 'factory', title: '공장 검색·상담', summary: '제조업체를 찾고, 담당자와 제작 가능 여부를 확인한다.',
    groups: [
      { id: 'factory-search', title: '검색과 후보 선정', steps: [
        { n: 1, title: '제조업체를 검색한다', text: '알리바바 제조업체 페이지에 접속해 찾으려는 제품의 검색어를 입력한다.', extra: `<a class="inline-link" href="https://www.alibaba.com/factory/index.html" target="_blank" rel="noopener noreferrer">알리바바 제조업체 페이지 ${icons.external}</a>` },
        { n: 2, title: '검색 필터를 설정한다', text: '‘검증된 제조업체만 보기’를 켜고, 공급업체 국가/지역을 중국으로 설정한다.', extra: `<div class="filter-images">${imageButton('./assets/images/manufacturer-filter.webp', '검증된 제조업체만 보기 필터')}${imageButton('./assets/images/country-filter.webp', '공급업체 국가/지역에서 중국 선택')}</div>` },
        { n: 3, title: '공장 정보를 확인하고 후보를 선정한다', text: '공장의 연혁, 직원 수, 위치를 확인한다.', extra: '<dl class="detail-grid"><div class="detail-item"><dt>연혁</dt><dd>최소 3년 이상을 권장한다.</dd></div><div class="detail-item"><dt>직원 수</dt><dd>직원이 많은 업체를 우선 검토하되, 30~50명 규모도 검토한다.</dd></div><div class="detail-item"><dt>위치</dt><dd>조립·배송을 고려해 기존 카고 공장과 가까운 곳을 우선 검토한다.</dd></div></dl>' },
      ] },
      { id: 'factory-contact', title: '담당자 상담', steps: [
        { n: 4, title: '채팅으로 상담을 시작한다', text: '후보 업체의 ‘지금 채팅하기’를 누르고, 인사 후 제품 상담이 가능한지 묻는다.' },
        { n: 5, title: '실제 담당자와 연결한다', text: '별 모양 표시가 있는 AI 자동응답이면 매니저 연결을 요청한다.', extra: `<figure class="instruction-image">${imageButton('./assets/images/ai-manager-chat.png', '빨간 원으로 표시한 AI 자동응답의 별 모양과 매니저 연결 요청 예시')}<figcaption>별 모양 표시를 확인하고, 매니저와 소통하고 싶다고 요청한다.</figcaption></figure>` },
        { n: 6, title: '회사와 참고 제품을 소개한다', text: '회사와 참고할 제품을 소개한다.', points: ['한국의 캠핑회사라고 간단히 소개한다.', '참고 제품의 사진과 특징을 전달한다.', '해당 제품을 취급하는지 확인한다.'] },
        { n: 7, title: '제작 역량을 확인한다', text: '아래 조건을 확인한다.', points: ['자체 공장을 운영하는지 확인한다.', 'OEM 생산이 가능한지 확인한다.', '내부 디자이너 또는 엔지니어를 보유하고 있는지 확인한다.'], extra: '<p class="term-note"><strong>OEM</strong> 우리 요구에 맞춰 제품을 대신 제조하는 방식.</p>' },
      ] },
      { id: 'factory-wechat', title: '위챗 이동과 회사 소개', steps: [
        { n: 8, title: '위챗으로 대화를 이동한다', text: '자체 공장·OEM 생산·내부 디자이너 또는 엔지니어 보유 조건이 모두 충족된 것으로 확인되면, 위챗으로 소통 가능한지 묻고 대화를 이동한다.' },
        { n: 9, title: '회사소개서를 전달하고 카탈로그를 받는다', text: '위챗에서 카고컨테이너 회사소개서를 전달한다.', points: ['회사 규모와 한국 시장에서의 입지를 설명한다.', '카고컨테이너 제품을 알고 있는지 확인한다.', '공장의 제품 카탈로그를 받는다.'] },
      ], note: notice('연락 시 주의사항', '<strong>계정이 차단(밴)될 위험이 있으므로</strong> 동일한 메시지를 여러 공장에 반복 복사해 보내거나, 대화 시작부터 위챗 이동을 요청하지 않는다.</p><p>인사말은 상황에 맞게 작성하고, 제작 역량을 확인한 뒤 위챗 이동을 요청한다.') },
    ],
  },
  {
    id: 'selection', title: '샘플 비교·선정', summary: '같은 기준으로 조건을 받고, 샘플을 비교해 공장을 선정한다.',
    groups: [
      { id: 'selection-information', title: '공장 정보와 초기 견적', steps: [
        { n: 10, title: '공장별 기본 정보와 제작 조건을 확인한다', text: 'MOQ, 단가, MOQ 기준 총액, 양산 기간은 레퍼런스 제품과 동일하게 생산하는 조건으로 받는다.', extra: '<p class="term-note"><strong>레퍼런스 제품</strong> 제작하려는 제품을 설명하거나 비교할 때 참고하는 기존 제품.</p>' + informationTable() },
      ] },
      { id: 'selection-sample', title: '샘플 비교와 공장 선정', steps: [
        { n: 11, title: '각 공장에 샘플을 요청한다', text: '공장별 기본 정보를 받은 뒤 샘플을 요청한다.' },
        { n: 12, title: '샘플과 기존 정보를 대조한다', text: '샘플을 수령하고, 앞서 받은 제품 정보와 대조한다. 공장별 제작 조건도 함께 비교한다.' },
        { n: 13, title: '진행할 공장을 선정한다', text: '샘플과 공장 정보를 검토해 진행할 공장을 선정한다.' },
      ] },
    ],
  },
  {
    id: 'brief', title: '작업지시서 작성', summary: '제품에 맞춰 외형·기능·제작 조건을 작성한다. 아래 세부 사양과 첨부 사진은 작성 방식을 보여주는 예시다.',
    groups: [
      { id: 'brief-reference', title: '레퍼런스와 제작 방향', steps: [
        { n: 1, title: '레퍼런스 제품을 설명한다', text: '시장에서 잘 판매되는 제품을 레퍼런스로 준비한다.', points: ['선정한 공장에 제품의 사진과 링크를 전달한다.', '제품의 주요 특징을 설명한다.', '장점과 단점을 구분해 정리한다.'] },
        { n: 2, title: '유지할 장점과 개선할 단점을 정리한다', text: '레퍼런스에서 가져올 장점과 개선할 단점을 정리한다. 무엇을 바꾸려는지와 왜 그렇게 제작하려는지를 연결해 설명한다.' },
      ] },
      { id: 'brief-details', title: '치수·외형·기능 작성', steps: [
        { n: 3, title: '샘플을 먼저 공장에 보낸다', text: '레퍼런스 샘플을 우선 공장에 보내 제품을 직접 확인하게 한다. 보낼 샘플이 없으면 제품을 실측해 치수와 사진을 전달한다.', extra: '<dl class="detail-grid"><div class="detail-item"><dt>샘플을 전달한 경우</dt><dd>동일하게 제작할 부분은 “샘플과 동일하게”라고 명시하고, 변경할 부분은 따로 적는다.</dd></div><div class="detail-item"><dt>보낼 샘플이 없는 경우</dt><dd>실측값을 사진에 표시해 전달한다. 레퍼런스 실측값과 최종 제작 치수를 구분한다.</dd></div></dl>' + documentExample({"src": "./assets/images/examples/vertitap-measurement-context.webp", "document": "버티탭 작업지시서", "page": 1, "title": "실측값을 사진 위에 표시한다", "description": "버티탭 정면 사진에 폭 107mm와 높이 110mm를 표시한 예시다. 작성할 때는 해당 제품의 실측값을 사진에 표시한다.", "file": "vertitap.pdf"}) },
        { n: 4, title: '외형과 사이즈를 먼저 작성한다', text: '제품에 맞춰 눈에 보이는 부분과 필요한 치수를 정리한다.', points: ['작성 항목 예시: 전체 치수, 디자인, 재질.', '포트·버튼·케이블은 부품 예시다. 해당 제품에 필요한 부품의 위치와 수량을 적는다.'], extra: documentExample({"src": "./assets/images/examples/vertitap-rear-layout-context.webp", "document": "버티탭 작업지시서", "page": 3, "title": "부품의 위치와 배치 방향을 지정한다", "description": "버티탭의 스위치를 “후면 하단 왼쪽”으로 지정하고 케이블 인출구를 표시한 예시다. 제품마다 필요한 부품이 다르므로, 해당 제품의 사진에 위치와 방향을 표시한다.", "file": "vertitap.pdf"}) },
        { n: 5, title: '기능 요구사항을 별도로 작성한다', text: '외형으로 확인하기 어려운 성능과 작동 조건을 정리한다. 아래 예시를 참고해 해당 제품에 필요한 기능을 작성한다.', points: ['성능 항목 예시: 소비전력, 충전 규격·출력.', '작동 조건 예시: 작동 방식, 조작 방법, 안전 기능.'], extra: documentExample({"src": "./assets/images/examples/heater-control-safety-context.webp", "document": "온풍기 작업지시서", "page": 2, "title": "기능의 수치와 작동 조건을 적는다", "description": "온풍기의 1·2·4·8시간 타이머와 메인 스위치를 켠 뒤 조작하는 순서를 적은 예시다. 해당 제품의 기능에 맞춰 수치와 작동 조건을 작성한다.", "file": "heater.pdf"}) },
        { n: 6, title: '관련 사진과 설명을 함께 배치한다', text: '수정할 부분의 사진과 요구사항을 같은 위치에 배치한다.', points: ['사진에 치수나 수정 위치를 표시한다.', '표시한 부분을 어떻게 바꿀지 바로 옆에 설명한다.'], extra: documentExample({"src": "./assets/images/examples/heater-handle-storage-context.webp", "document": "온풍기 작업지시서", "page": 1, "title": "사진 옆에 해당 부위의 요구사항을 적는다", "description": "온풍기의 손잡이, 1.7m 전원선, 전원선 보관 구조를 사진 옆에 적은 예시다. 제품에 맞는 사진과 요구사항으로 바꾸고, 한국어와 중국어를 함께 작성한다.", "file": "heater.pdf"}) },
        { n: 7, title: '필요하면 AI 이미지로 기획 방향을 설명한다', text: '아직 세상에 없는 가상의 제품을 보여주기 위해 AI로 이미지를 생성해 전달할 수 있다. 공장이 기획 방향을 더 쉽게 이해하도록 첨부하는 참고 이미지임을 명시한다.' },
      ] },
      { id: 'brief-complete', title: '제작 조건과 언어', steps: [
        { n: 8, title: '나머지 제작 조건을 표로 정리한다', text: '아래 표는 작성 항목의 예시다. 제품에 필요한 항목을 추가하거나 제외해 정리한다.', extra: productionConditionsTable() },
        { n: 9, title: '한국어와 중국어를 함께 작성한다', text: '실제 작업지시서는 한국어와 중국어를 함께 작성한다. 두 언어의 요구사항, 수치, 단위를 일치시킨다.' },
      ] },
    ],
  },
  {
    id: 'quote', title: '전달·견적확인', summary: '공장의 이해와 제작 가능 여부를 확인한 뒤 수량·가격을 협의한다.',
    groups: [
      { id: 'quote-review', title: '전달과 내용 확인', steps: [
        { n: 10, title: '작업지시서와 자료를 전달한다', text: '레퍼런스와 제작 의도를 설명한다. 작업지시서와 사진·치수 자료를 함께 전달한다.' },
        { n: 11, title: '항목별 이해와 제작 가능 여부를 확인한다', text: '작업지시서의 이해 여부를 항목별로 확인한다. 제작 가능 여부와 변경이 필요한 부분에 대한 답변을 받는다.' },
        { n: 12, title: '설명을 보완하고 미회신 항목을 확인한다', text: '불명확한 내용은 사진·치수·설명으로 보완한다. 회신하지 않은 항목은 다시 확인한다.' },
      ] },
      { id: 'quote-confirm', title: '변경사항과 최종 견적', steps: [
        { n: 13, title: '확정한 변경사항을 문서에 반영한다', text: '공장의 변경 제안과 사유를 검토한다. 확정한 변경사항을 한국어와 중국어에 동일하게 반영한 뒤 다시 전달한다.' },
        { n: 14, title: '주문수량과 가격을 협의한다', text: '공장의 이해를 확인한 뒤 주문수량과 가격을 협의한다. 초기 레퍼런스 제품 기준 견적과 구분해 기록한다.' },
      ] },
    ],
  },
];

function productionConditionsTable() {
  const rows = [
    ['제품명 · 담당자', '제품명과 담당자 정보를 적는다.'],
    ['일정 · 출시 목표', '제작 일정과 목표 출시 시점을 적는다.'],
    ['색상 · 표면 처리', '원하는 색상과 표면 처리 방식을 적는다.'],
    ['부속품 · 수량', '함께 제공할 부속품과 각각의 수량을 적는다.'],
    ['인증 요구사항', '해당 제품에 필요한 인증을 적는다.'],
    ['특허 출원 여부', '특허 출원 여부를 적는다.'],
    ['가격 예산', '목표 단가나 예산 범위를 적는다.'],
  ];
  return `<div class="table-scroll"><table class="data-table"><caption class="sr-only">제품에 맞게 선택해 작성할 제작 조건 예시</caption><thead><tr><th scope="col">항목 예시</th><th scope="col">작성 내용</th></tr></thead><tbody>${rows.map(([key, value]) => `<tr><th scope="row">${key}</th><td>${value}</td></tr>`).join('')}</tbody></table></div>`;
}

function informationTable() {
  const rows = [
    ['공장명 · 담당자', '공장 이름, 상담 담당자'], ['지역 · 직원 수', '공장 위치, 직원 수'],
    ['레퍼런스 제품', '견적 기준 제품과 사진'], ['MOQ', '최소 주문수량'], ['단가', '제품 1개 가격 · 외화/한화'],
    ['MOQ 기준 총액', '최소 주문수량 기준 총금액 · 외화/한화'], ['양산 기간', '레퍼런스 제품 기준 생산 소요기간'],
    ['샘플 비용 · 제작 시간', '샘플 제작 비용과 소요기간'], ['금형 필요 여부 · 비용', '제품 형태를 만드는 제조용 틀의 필요 여부와 비용'],
    ['한국과의 거래 이력', '한국 업체와의 거래 경험'],
  ];
  return `<div class="table-scroll"><table class="data-table"><caption class="sr-only">공장별로 확인할 기본 정보와 제작 조건</caption><thead><tr><th scope="col">항목</th><th scope="col">확인 내용</th></tr></thead><tbody>${rows.map(([key, value]) => `<tr><th scope="row">${key}</th><td>${value}</td></tr>`).join('')}</tbody></table></div>`;
}

const resources = [
  { title: '온풍기 작업지시서', meta: 'PDF · 한국어·중국어', file: 'heater.pdf', description: '제품 배경과 부위별 사진, 외형·기능 요구사항의 작성 방식을 참고한다.' },
  { title: '버티탭 작업지시서', meta: 'PDF · 한국어·중국어', file: 'vertitap.pdf', description: '실측 치수와 디자인 변경사항을 사진으로 전달하는 방식을 참고한다.' },
  { title: '공장·제작 업무절차서', meta: 'PDF', file: 'workflow.pdf', description: '공장 찾기부터 작업지시서 작성과 견적 확인까지 전체 업무 절차를 확인한다.' },
];

const resourceSection = { id: 'resources', title: '참고자료', summary: '업무절차서와 제품별 작업지시서 원본을 확인한다.' };

const categories = [
  { id: 'planning', title: '제품기획', pages: [{ id: 'planning', label: '기획 과정' }] },
  { id: 'factory', title: '공장찾기', pages: [{ id: 'factory', label: '공장 검색·상담' }, { id: 'selection', label: '샘플 비교·선정' }] },
  { id: 'brief', title: '작업지시서', pages: [{ id: 'brief', label: '작성 방법' }, { id: 'quote', label: '전달·견적확인' }] },
  { id: 'resources', title: '참고자료', pages: [{ id: 'resources', label: '자료 모음' }] },
];

const categoryLinks = [...document.querySelectorAll('[data-category]')];
const panel = document.querySelector('#guide-content');
const dialog = document.querySelector('#image-preview');
const zoomButton = document.querySelector('#preview-zoom');
let toastTimeout;

function getSection() {
  if (location.hash === '#resources') return resourceSection;
  return sectionData.find((section) => section.id === location.hash.slice(1)) ?? sectionData[0];
}

function render() {
  const section = getSection();
  const category = categories.find((item) => item.pages.some((page) => page.id === section.id));
  const related = category.pages.find((page) => page.id !== section.id);
  document.title = `${section.title}${section.title === category.title ? '' : ` · ${category.title}`} · 카고컨테이너 업무 가이드`;
  categoryLinks.forEach((link) => {
    const selected = link.dataset.category === category.id;
    link.classList.toggle('is-active', selected);
    if (selected) link.setAttribute('aria-current', 'true');
    else link.removeAttribute('aria-current');
  });
  const activeLink = categoryLinks.find((link) => link.dataset.category === category.id);
  const menu = activeLink.parentElement;
  const bounds = menu.getBoundingClientRect();
  const linkBounds = activeLink.getBoundingClientRect();
  if (linkBounds.left < bounds.left) menu.scrollLeft -= bounds.left - linkBounds.left;
  else if (linkBounds.right > bounds.right) menu.scrollLeft += linkBounds.right - bounds.right;
  const isResources = section.id === 'resources';
  const sidebar = document.querySelector('#guide-sidebar');
  sidebar.hidden = isResources;
  document.querySelector('.content-layout').classList.toggle('is-resources', isResources);
  const pageMenu = document.querySelector('#section-navigation');
  pageMenu.hidden = category.pages.length < 2;
  pageMenu.setAttribute('aria-label', `${category.title} 내 페이지`);
  pageMenu.innerHTML = category.pages.map((page) => `<a class="page-link${page.id === section.id ? ' is-active' : ''}" data-page="${page.id}" href="#${page.id}"${page.id === section.id ? ' aria-current="page"' : ''}>${page.label}</a>`).join('');
  document.querySelector('#section-heading').innerHTML = `<div><h1 id="page-title" tabindex="-1">${section.title}</h1><p class="section-summary">${section.summary}</p></div><div class="section-meta"><button class="copy-link" type="button" data-copy-link>${icons.link}<span>링크 복사</span></button></div>`;
  if (isResources) {
    sidebar.replaceChildren();
    panel.innerHTML = `<section class="resource-library" aria-label="참고자료 목록">${resources.map((resource) => `<article class="resource-document"><span class="resource-icon" aria-hidden="true">${icons.document}</span><div class="resource-details"><h2>${resource.title}</h2><p class="resource-meta">${resource.meta}</p><p class="resource-description">${resource.description}</p></div><a class="button button-secondary" href="./assets/docs/${resource.file}" target="_blank" rel="noopener noreferrer" aria-label="${resource.title} PDF 열기 · 새 탭">PDF 열기 ${icons.external}</a></article>`).join('')}</section>`;
    return;
  }
  if (section.id === 'planning') {
    panel.innerHTML = section.groups.map((group) => `<section class="step-group planning-stage" id="${group.id}" aria-labelledby="heading-${group.id}"><div class="planning-stage-heading"><span class="step-number" aria-label="${group.n}번째 단계">${group.n}</span><h2 id="heading-${group.id}">${group.title}</h2></div><ul class="planning-actions">${group.actions.map((action) => `<li><h3>${action.title}</h3><p>${action.text}</p></li>`).join('')}</ul></section>`).join('');
  } else {
  panel.innerHTML = section.groups.map((group) => `<section class="step-group" id="${group.id}" aria-labelledby="heading-${group.id}"><div class="group-heading"><h2 id="heading-${group.id}">${group.title}</h2></div><div class="steps">${group.steps.map((step) => `<article class="step-card" id="step-${step.n}"><span class="step-number" aria-label="${step.n}번째 단계">${step.n}</span><div class="step-body"><h3>${step.title}</h3><p>${step.text}</p>${step.points ? `<ul class="step-points">${step.points.map((point) => `<li>${point}</li>`).join('')}</ul>` : ''}${step.extra ?? ''}</div></article>`).join('')}</div>${group.note ?? ''}</section>`).join('');
  }
  if (related) panel.insertAdjacentHTML('beforeend', `<div class="section-end-next"><span>${category.title} 더 보기</span><a data-go-section="${related.id}" href="#${related.id}">${related.label} ${icons.arrow}</a></div>`);
  sidebar.innerHTML = `<div class="toc-card"><h2 id="toc-title">이 페이지 목차</h2><nav class="contents-list" aria-label="${section.title} 목차">${section.groups.map((group) => `<button class="contents-link" type="button" data-scroll-target="${group.id}">${group.title}</button>`).join('')}</nav></div>`;
}

function navigate(id, { focus = false } = {}) {
  if (id !== 'resources' && !sectionData.some((section) => section.id === id)) return;
  if (location.hash !== `#${id}`) history.pushState(null, '', `#${id}`);
  render();
  if (focus) document.querySelector('#page-title').focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function setPreviewZoom(zoomed) {
  dialog.classList.toggle('is-zoomed', zoomed);
  zoomButton.setAttribute('aria-pressed', String(zoomed));
  zoomButton.textContent = zoomed ? '화면에 맞추기' : '원본 크기로 보기';
  document.querySelector('.lightbox-image-wrap').scrollTo(0, 0);
}

dialog.addEventListener('close', () => setPreviewZoom(false));

function showToast(message) {
  const toast = document.querySelector('#toast');
  clearTimeout(toastTimeout);
  toast.textContent = message;
  toast.classList.add('is-visible');
  toastTimeout = setTimeout(() => toast.classList.remove('is-visible'), 2600);
}

async function copyLink() {
  const url = new URL(location.href);
  url.hash = getSection().id;
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(url.href);
    } else {
      const input = document.createElement('textarea');
      input.value = url.href;
      input.className = 'sr-only';
      document.body.append(input);
      input.select();
      const copied = document.execCommand('copy');
      input.remove();
      if (!copied) throw new Error('Copy unavailable');
    }
    showToast('현재 페이지의 링크를 복사했다.');
  } catch {
    showToast('주소창의 링크를 직접 복사한다.');
  }
}

document.addEventListener('click', (event) => {
  if (event.target.closest('.skip-link')) {
    event.preventDefault();
    panel.focus({ preventScroll: true });
    panel.scrollIntoView({ block: 'start', behavior: 'instant' });
    return;
  }
  const navigation = event.target.closest('[data-category], [data-page], [data-go-section], .brand');
  if (navigation && !event.defaultPrevented && event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
    event.preventDefault();
    navigate(navigation.dataset.category ?? navigation.dataset.page ?? navigation.dataset.goSection ?? 'planning', { focus: true });
    return;
  }
  const jump = event.target.closest('[data-scroll-target]');
  if (jump) document.getElementById(jump.dataset.scrollTarget)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
  if (event.target.closest('[data-copy-link]')) copyLink();
  const preview = event.target.closest('[data-image]');
  if (preview) {
    setPreviewZoom(false);
    const image = document.querySelector('#preview-image');
    image.src = preview.dataset.image;
    image.alt = preview.dataset.caption;
    document.querySelector('#preview-caption').textContent = preview.dataset.caption;
    dialog.showModal();
  }
  if (event.target.closest('.lightbox-zoom')) setPreviewZoom(!dialog.classList.contains('is-zoomed'));
  if (event.target.closest('.lightbox-close') || event.target === dialog) dialog.close();
});

window.addEventListener('hashchange', render);
window.addEventListener('popstate', render);
render();
