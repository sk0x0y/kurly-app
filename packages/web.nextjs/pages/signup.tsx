import { css } from '@emotion/react';
import Typography from '../components/designsystem/typography';
import Button from '../components/designsystem/button';
import Content from '../components/designsystem/content';
import Agreement from '../components/signup/Agreement';
import UserInform from '../components/signup/UserInform';
import Divider from '../components/common/Divider';

function Signup() {
  return (
    <Content.Section>
      <div>
        {/* 회원가입 제목 */}
        <Typography.Title
          level="h2"
          styles={css`
            margin-bottom: 50px;
            font-size: 28px;
            color: #333;
            text-align: center;
            letter-spacing: -1px;
          `}
        >
          회원가입
        </Typography.Title>

        {/* 회원가입 폼 */}
        <div
          css={css`
            width: 640px;
            margin: 0 auto;
          `}
        >
          <div
            css={css`
              padding-bottom: 10px;
              border-bottom: 2px solid rgb(51, 51, 51);
              font-size: 12px;
              color: rgb(102, 102, 102);
              line-height: 17px;
              text-align: right;
            `}
          >
            <span
              css={css`
                color: rgb(238, 106, 123);
              `}
            >
              *
            </span>
            필수입력사항
          </div>

          <UserInform />

          <Divider />

          <Agreement />

          <div
            css={css`
              display: flex;
              justify-content: center;
              padding: 40px 0;
            `}
          >
            <Button.Common
              onClick={() => {
                // TODO: 가입하기 구현
                if (process.title === 'browser') window.console.log('TODO: 가입하기 구현');
              }}
              styles={css`
                width: 240px;
                height: 56px;
                background-color: rgb(95, 0, 128);
                font-weight: 500;
                font-size: 16px;
                color: #fff;
                cursor: pointer;
              `}
            >
              가입하기
            </Button.Common>
          </div>
        </div>
      </div>
    </Content.Section>
  );
}

export default Signup;
