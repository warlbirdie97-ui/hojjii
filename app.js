const icons = {
  arrow: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5"/></svg>',
  external: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 4h6v6m0-6L10 14M20 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4"/></svg>',
  link: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m10 13 4-4M8 16l-1 1a4 4 0 0 1-6-6l5-5a4 4 0 0 1 6 0m4 2 1-1a4 4 0 0 1 6 6l-5 5a4 4 0 0 1-6 0" transform="translate(1 1) scale(.92)"/></svg>',
  document: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 14h8M8 17h5"/></svg>',
};

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

const imageButton = (src, caption, className = '') => `<button class="image-trigger ${className}" type="button" data-image="${src}" data-caption="${escapeHtml(caption)}" aria-label="${escapeHtml(caption)} 확대 보기"><img src="${src}" alt="${escapeHtml(caption)}" loading="lazy" /><span class="image-hint">확대해서 보기 ↗</span></button>`;

const notice = (title, text) => `<div class="notice"><span class="notice-title">${title}</span><p>${text}</p></div>`;

const sectionData = [
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
        { n: 6, title: '회사와 참고 제품을 소개한다', text: '한국의 캠핑회사라고 간단히 소개한다. 참고할 기존 제품의 사진과 특징을 전달하고, 해당 제품을 취급하는지 확인한다.' },
        { n: 7, title: '제작 역량을 확인한다', text: '자체 공장 운영 여부, OEM 가능 여부, 내부 디자이너 또는 엔지니어 보유 여부를 확인한다.', extra: '<p class="term-note"><strong>OEM</strong> 우리 요구에 맞춰 제품을 대신 제조하는 방식.</p>' },
      ] },
      { id: 'factory-wechat', title: '위챗 이동과 회사 소개', steps: [
        { n: 8, title: '위챗으로 대화를 이동한다', text: '앞의 세 항목이 모두 가능하거나 보유한 것으로 확인되면, 위챗으로 소통할 수 있는지 묻고 대화를 이동한다.' },
        { n: 9, title: '회사소개서를 전달하고 카탈로그를 받는다', text: '위챗에서 카고컨테이너 회사소개서를 전달한다. 회사 규모와 한국 시장에서의 입지를 설명하고, 당사 제품 인지 여부를 확인한 뒤 공장의 제품 카탈로그를 받는다.' },
      ], note: notice('연락 시 주의사항', '동일한 메시지를 여러 공장에 반복 복사해 발송하지 않는다. 인사말은 상황에 맞게 작성한다. 대화 시작부터 위챗 이동을 요청하지 않는다.') },
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
    id: 'brief', title: '작업지시서 작성', summary: '제작 의도를 설명하고, 외형부터 기능까지 구체적으로 작성한다.',
    groups: [
      { id: 'brief-reference', title: '레퍼런스와 제작 방향', steps: [
        { n: 14, title: '레퍼런스 제품을 설명한다', text: '선정한 공장과 협의할 제품의 레퍼런스를 준비한다. 시장에서 잘 판매되는 제품의 사진·링크를 전달하고, 제품의 특징과 장단점을 설명한다.' },
        { n: 15, title: '유지할 장점과 개선할 단점을 정리한다', text: '레퍼런스에서 가져올 장점과 개선할 단점을 정리한다. 무엇을 바꾸려는지와 왜 그렇게 제작하려는지를 연결해 설명한다.' },
      ] },
      { id: 'brief-details', title: '치수·외형·기능 작성', steps: [
        { n: 16, title: '샘플 보유 여부에 맞춰 치수를 전달한다', text: '공장이 레퍼런스 샘플을 보유하고 있는지 확인한다.', extra: '<dl class="detail-grid"><div class="detail-item"><dt>샘플 보유</dt><dd>동일하게 제작할 부분의 사이즈를 “샘플과 동일하게”라고 명시한다.</dd></div><div class="detail-item"><dt>샘플 미보유</dt><dd>제품을 직접 실측하고 치수와 사진을 전달한다. 레퍼런스 실측값과 최종 제작 치수를 구분한다.</dd></div></dl>' },
        { n: 17, title: '외형과 사이즈를 먼저 작성한다', text: '전체 치수, 디자인, 재질, 포트·버튼·케이블의 위치와 수량을 구체적으로 명시한다.' },
        { n: 18, title: '기능 요구사항을 별도로 작성한다', text: '전력량, 고속충전, 작동 방식, 제어·안전 기능 등 외형으로 확인하기 어려운 내용을 정리한다.' },
        { n: 19, title: '관련 사진과 설명을 함께 배치한다', text: '각 요구사항에 관련 사진을 최대한 첨부한다. 사진에 치수와 위치를 표시하고 설명과 함께 배치한다.', extra: `<div class="sample-grid"><figure class="sample-card">${imageButton('./assets/images/measurement.webp', '버티탭 레퍼런스의 실측 치수 표시')}<figcaption><strong>실측 치수 표시</strong><span>버티탭 예시</span></figcaption></figure><figure class="sample-card">${imageButton('./assets/images/heater-handle.webp', '온풍기 손잡이 부위 참고 사진')}<figcaption><strong>해당 부위 사진 첨부</strong><span>온풍기 예시</span></figcaption></figure></div>` },
        { n: 20, title: 'AI 이미지의 용도를 명시한다', text: 'AI 이미지를 사용하는 경우 전체 디자인 방향을 설명하기 위한 참고자료라고 명시한다.' },
      ] },
      { id: 'brief-complete', title: '제작 조건과 회신 항목', steps: [
        { n: 21, title: '나머지 제작 조건을 작성한다', text: '제품에 맞게 아래 항목을 정리한다.', extra: '<ul class="compact-list"><li>제품명 · 담당자 · 일정 · 출시 목표</li><li>색상 · 표면 처리 · 부속품과 수량</li><li>인증 요구사항 · 특허 출원 여부 · 가격 예산</li></ul>' },
        { n: 22, title: '한국어와 중국어를 함께 작성한다', text: '실제 작업지시서는 한국어와 중국어를 함께 작성한다. 두 언어의 요구사항, 수치, 단위를 일치시킨다.' },
        { n: 23, title: '공장 회신 칸을 마련한다', text: '공장이 항목별 제작 가능 여부, 변경 제안, 의견을 적을 수 있도록 회신 칸을 마련한다.' },
      ], note: notice('예시 재사용 시 확인사항', '예시의 수치와 조건은 제작할 제품에 맞게 다시 확인한다. 온풍기 원문에는 일부 한중 수치 차이가 있으므로 대조 후 사용한다.') },
    ],
  },
  {
    id: 'quote', title: '전달·견적확인', summary: '공장의 이해와 제작 가능 여부를 확인한 뒤 수량·가격을 협의한다.',
    groups: [
      { id: 'quote-review', title: '전달과 내용 확인', steps: [
        { n: 24, title: '작업지시서와 자료를 전달한다', text: '레퍼런스와 제작 의도를 설명하고, 작업지시서와 사진·치수 자료를 공장에 전달한다.' },
        { n: 25, title: '항목별 이해와 제작 가능 여부를 확인한다', text: '작업지시서의 이해 여부를 항목별로 확인한다. 제작 가능 여부와 변경이 필요한 부분에 대한 답변을 받는다.' },
        { n: 26, title: '설명을 보완하고 미회신 항목을 확인한다', text: '불명확한 내용은 사진·치수·설명으로 보완한다. 회신하지 않은 항목은 다시 확인한다.' },
      ] },
      { id: 'quote-confirm', title: '변경사항과 최종 견적', steps: [
        { n: 27, title: '확정한 변경사항을 문서에 반영한다', text: '공장의 변경 제안과 사유를 검토한다. 확정한 변경사항을 한국어와 중국어에 동일하게 반영한 뒤 다시 전달한다.' },
        { n: 28, title: '주문수량과 가격을 협의한다', text: '공장의 이해를 확인한 뒤 주문수량과 가격을 협의한다. 초기 레퍼런스 제품 기준 견적과 구분해 기록한다.' },
      ] },
    ],
  },
];

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
  { title: '온풍기 작업지시서', meta: 'PDF · 3쪽 · 한국어·중국어', file: 'heater.pdf', description: '제품 배경과 부위별 사진, 외형·기능 요구사항의 작성 방식을 참고한다.' },
  { title: '버티탭 작업지시서', meta: 'PDF · 5쪽 · 한국어·중국어', file: 'vertitap.pdf', description: '실측 치수와 디자인 변경사항을 사진으로 전달하는 방식을 참고한다.' },
  { title: '전체 업무절차서', meta: 'PDF · 12쪽', file: 'workflow.pdf', description: '공장 찾기부터 작업지시서 작성과 견적 확인까지 전체 업무 절차를 확인한다.' },
];

const resourceSection = { id: 'resources', title: '참고자료', summary: '업무절차서와 제품별 작업지시서 원본을 확인한다.' };

const categories = [
  { id: 'factory', title: '공장찾기', pages: [{ id: 'factory', label: '공장 검색·상담' }, { id: 'selection', label: '샘플 비교·선정' }] },
  { id: 'brief', title: '작업지시서', pages: [{ id: 'brief', label: '작성 방법' }, { id: 'quote', label: '전달·견적확인' }] },
  { id: 'resources', title: '참고자료', pages: [{ id: 'resources', label: '자료 모음' }] },
];

const categoryLinks = [...document.querySelectorAll('[data-category]')];
const panel = document.querySelector('#guide-content');
const dialog = document.querySelector('#image-preview');
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
  const isResources = section.id === 'resources';
  const sidebar = document.querySelector('#guide-sidebar');
  sidebar.hidden = isResources;
  document.querySelector('.content-layout').classList.toggle('is-resources', isResources);
  const pageMenu = document.querySelector('#section-navigation');
  pageMenu.hidden = isResources;
  pageMenu.setAttribute('aria-label', `${category.title} 내 페이지`);
  pageMenu.innerHTML = category.pages.map((page) => `<a class="page-link${page.id === section.id ? ' is-active' : ''}" data-page="${page.id}" href="#${page.id}"${page.id === section.id ? ' aria-current="page"' : ''}>${page.label}</a>`).join('');
  document.querySelector('#section-heading').innerHTML = `<div><h1 id="page-title" tabindex="-1">${section.title}</h1><p class="section-summary">${section.summary}</p></div><div class="section-meta"><button class="copy-link" type="button" data-copy-link>${icons.link}<span>링크 복사</span></button></div>`;
  if (isResources) {
    sidebar.replaceChildren();
    panel.innerHTML = `<section class="resource-library" aria-label="참고자료 목록">${resources.map((resource) => `<article class="resource-document"><span class="resource-icon" aria-hidden="true">${icons.document}</span><div class="resource-details"><h2>${resource.title}</h2><p class="resource-meta">${resource.meta}</p><p class="resource-description">${resource.description}</p></div><a class="button button-secondary" href="./assets/docs/${resource.file}" target="_blank" rel="noopener noreferrer" aria-label="${resource.title} PDF 열기 · 새 탭">PDF 열기 ${icons.external}</a></article>`).join('')}</section>`;
    return;
  }
  panel.innerHTML = section.groups.map((group) => `<section class="step-group" id="${group.id}" aria-labelledby="heading-${group.id}"><div class="group-heading"><h2 id="heading-${group.id}">${group.title}</h2></div><div class="steps">${group.steps.map((step) => `<article class="step-card" id="step-${step.n}"><span class="step-number" aria-label="${step.n}번째 단계">${String(step.n).padStart(2, '0')}</span><div class="step-body"><h3>${step.title}</h3><p>${step.text}</p>${step.extra ?? ''}</div></article>`).join('')}</div>${group.note ?? ''}</section>`).join('');
  panel.insertAdjacentHTML('beforeend', `<div class="section-end-next"><span>${category.title} 더 보기</span><a data-go-section="${related.id}" href="#${related.id}">${related.label} ${icons.arrow}</a></div>`);
  sidebar.innerHTML = `<div class="toc-card"><h2 id="toc-title">이 페이지 목차</h2><nav class="contents-list" aria-label="${section.title} 목차">${section.groups.map((group, i) => `<button class="contents-link" type="button" data-scroll-target="${group.id}"><span>${String(i + 1).padStart(2, '0')}</span>${group.title}</button>`).join('')}</nav></div>`;
}

function navigate(id, { focus = false } = {}) {
  if (id !== 'resources' && !sectionData.some((section) => section.id === id)) return;
  if (location.hash !== `#${id}`) history.pushState(null, '', `#${id}`);
  render();
  if (focus) document.querySelector('#page-title').focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: 'instant' });
}

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
    navigate(navigation.dataset.category ?? navigation.dataset.page ?? navigation.dataset.goSection ?? 'factory', { focus: true });
    return;
  }
  const jump = event.target.closest('[data-scroll-target]');
  if (jump) document.getElementById(jump.dataset.scrollTarget)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
  if (event.target.closest('[data-copy-link]')) copyLink();
  const preview = event.target.closest('[data-image]');
  if (preview) {
    const image = document.querySelector('#preview-image');
    image.src = preview.dataset.image;
    image.alt = preview.dataset.caption;
    document.querySelector('#preview-caption').textContent = preview.dataset.caption;
    dialog.showModal();
  }
  if (event.target.closest('.lightbox-close') || event.target === dialog) dialog.close();
});

window.addEventListener('hashchange', render);
window.addEventListener('popstate', render);
render();
