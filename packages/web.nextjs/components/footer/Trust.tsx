import Image from 'next/image';
import { css } from '@emotion/react';
import Typography from '../designsystem/typography';
import Button from '../designsystem/button';

function Trust() {
  const CommonButtonStyle = css`
    display: flex;
  `;
  const CommonTextStyle = css`
    margin-left: 10px;
    font-size: 10px;
    color: #999;
    line-height: 14.5px;
    text-align: left;
  `;

  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        padding: 26px 0 33px;
        border-top: 1px solid #eee;
      `}
    >
      {/* ISMS 인증 */}
      <Button.Anchor
        href="https://res.kurly.com/kurly/img/2022/isms_220310.png"
        options={{
          additionalStyle: [CommonButtonStyle],
        }}
      >
        <Image src="/logo_isms.svg" width={34} height={34} alt="isms 로고" />
        <Typography.Text
          type="p"
          options={{
            additionalStyle: [CommonTextStyle],
          }}
        >
          [인증범위] 마켓컬리 쇼핑몰 서비스 개발·운영
          <br />
          (심사받지 않은 물리적 인프라 제외)
          <br />
          [유효기간] 2022.01.19 ~ 2025.01.18
        </Typography.Text>
      </Button.Anchor>

      {/* ePrivacy 인증 */}
      <Button.Anchor
        href="/"
        options={{
          additionalStyle: [CommonButtonStyle],
        }}
      >
        <Image src="/logo_privacy.svg" width={34} height={34} alt="isms 로고" />
        <Typography.Text
          type="p"
          options={{
            additionalStyle: [CommonTextStyle],
          }}
        >
          개인정보보호 우수 웹사이트 ·<br />
          개인정보처리시스템 인증 (ePRIVACY PLUS)
        </Typography.Text>
      </Button.Anchor>

      {/* Toss Payments 인증 */}
      <Button.Anchor
        href="/"
        options={{
          additionalStyle: [CommonButtonStyle],
        }}
      >
        <Image src="/logo_tosspayments.svg" width={102} height={32} alt="isms 로고" />
        <Typography.Text
          type="p"
          options={{
            additionalStyle: [CommonTextStyle],
          }}
        >
          토스페이먼츠 구매안전(에스크로)
          <br />
          서비스를 이용하실 수 있습니다.
        </Typography.Text>
      </Button.Anchor>

      {/* 우리은행 인증 */}
      <Button.Anchor
        href="/"
        options={{
          additionalStyle: [CommonButtonStyle],
        }}
      >
        <Image src="/logo_wooriBank.svg" width={34} height={34} alt="isms 로고" />
        <Typography.Text
          type="p"
          options={{
            additionalStyle: [CommonTextStyle],
          }}
        >
          고객님이 현금으로 결제한 금액에 대해 우리은행과
          <br />
          채무지급보증 계약을 체결하여 안전거래를 보장하고
          <br />
          있습니다.
        </Typography.Text>
      </Button.Anchor>
    </div>
  );
}

export default Trust;
