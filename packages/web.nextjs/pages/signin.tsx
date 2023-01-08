import Link from 'next/link';
import { css } from '@emotion/react';
import Typography from '../components/designsystem/typography';
import Input from '../components/designsystem/input';
import Button from '../components/designsystem/button';

function Signin() {
  return (
    <section
      css={css`
        width: 1050px;
        margin: 0 auto;
        padding: 90px 0 60px;
      `}
    >
      <div
        css={css`
          width: 340px;
          margin: 0 auto;
        `}
      >
        <Typography.Title
          styles={css`
            margin-bottom: 30px;
            font-weight: 800;
            font-size: 20px;
            line-height: 20px;
            text-align: center;
          `}
          level="h2"
        >
          로그인
        </Typography.Title>

        <div>
          <Input.Common
            styles={css`
              margin-bottom: 12px;
              height: 54px;
              font-size: 14px;
            `}
            placeholder="아이디를 입력해주세요"
          />

          <Input.Common
            styles={css`
              margin-bottom: 12px;
              height: 54px;
              font-size: 14px;
            `}
            placeholder="비밀번호를 입력해주세요"
          />
        </div>

        <div
          css={css`
            position: relative;
            display: flex;
            justify-content: end;
            margin-top: 10px;
            font-size: 13px;
            letter-spacing: -0.6px;
          `}
        >
          <Link href="/find/id">
            <a
              css={css`
                color: #333;
                cursor: pointer;
              `}
            >
              아이디 찾기
            </a>
          </Link>

          <span
            css={css`
              width: 1px;
              height: 10px;
              margin: 1px 6px 0;
              background-color: #333;
            `}
          />

          <Link href="/find/password">
            <a
              css={css`
                color: #333;
                cursor: pointer;
              `}
            >
              비밀번호 찾기
            </a>
          </Link>
        </div>

        <div>
          <Button.Common
            onClick={() => {
              // TODO: 로그인 구현
            }}
            styles={css`
              margin-top: 28px;
              height: 54px;
              font-weight: 500;
            `}
            options={{ backgroundColor: '#5f0080', color: '#fff' }}
          >
            로그인
          </Button.Common>

          <Link href="/signup">
            <a
              css={css`
                text-decoration: none;
              `}
            >
              <Button.Common
                styles={css`
                  margin-top: 10px;
                  font-weight: 500;
                  cursor: pointer;
                `}
                options={{ height: 54 }}
              >
                회원가입
              </Button.Common>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Signin;
