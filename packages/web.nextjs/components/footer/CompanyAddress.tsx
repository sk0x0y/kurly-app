import { css } from '@emotion/react';

function CompanyAddress() {
  const CommonAnchorStyle = css`
    margin-left: 3px;
    color: #5f0080;
    text-decoration: none;
  `;
  const CommonDividerStyle = css`
    padding-left: 8px;

    &:after {
      content: '|';
      padding-right: 8px;
      font-size: 10px;
      vertical-align: top;
    }
  `;

  return (
    <div
      css={css`
        margin-bottom: 40px;
        font-size: 12px;
        color: #999;
        line-height: 18px;
      `}
    >
      법인명 (상호) : 주식회사 컬리
      <span css={CommonDividerStyle} />
      사업자등록번호 : 261-81-23567
      <a
        href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=2618123567&amp;apv_perm_no="
        target="_blank"
        rel="noreferrer"
        css={CommonAnchorStyle}
      >
        사업자정보 확인
      </a>
      <br />
      통신판매업 : 제 2018-서울강남-01646 호 <span css={CommonDividerStyle} /> 개인정보보호책임자 : 이원준
      <br />
      주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동) <span css={CommonDividerStyle} /> 대표이사 : 김슬아
      <br />
      입점문의 :
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScLB7YkGJwNRzpGpp0gbR1i4C1_uvTEFj43SFfJ_XEadTn3gQ/viewform?usp=sf_link"
        target="_blank"
        rel="noreferrer"
        css={CommonAnchorStyle}
      >
        입점문의하기
      </a>
      <span css={CommonDividerStyle} />
      제휴문의 :
      <a href="mailto:business@kurlycorp.com" css={CommonAnchorStyle}>
        business@kurlycorp.com
      </a>
      <br />
      채용문의 :
      <a href="mailto:recruit@kurlycorp.com" css={CommonAnchorStyle}>
        recruit@kurlycorp.com
      </a>
      <br />
      팩스: 070 - 7500 - 6098
    </div>
  );
}

export default CompanyAddress;
