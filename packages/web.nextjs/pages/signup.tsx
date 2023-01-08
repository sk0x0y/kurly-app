import { css } from '@emotion/react';
import Typography from '../components/designsystem/typography';
import Button from '../components/designsystem/button';
import Input from '../components/designsystem/input';

function Signup() {
  return (
    <section
      css={css`
        width: 1050px;
        margin: 0 auto;
        padding: 50px 0 0 0;
      `}
    >
      <div>
        {/* 회원가입 제목 */}
        <Typography.Title
          level="h2"
          options={{
            additionalStyle: [
              css`
                margin-bottom: 50px;
                font-size: 28px;
                color: #333;
                text-align: center;
                letter-spacing: -1px;
              `,
            ],
          }}
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

          <div>
            <div
              css={css`
                display: flex;
              `}
            >
              <div>
                <label htmlFor="userId">
                  아이디<span>*</span>
                </label>
              </div>
              <div>
                <Input.Common id="userId" name="userId" placeholder="아이디를 입력해주세요" type="text" value="" />
              </div>
              <div>
                <Button.Common>
                  <span>중복확인</span>
                </Button.Common>
              </div>
            </div>
          </div>

          <div
            css={css`
              display: flex;
              justify-content: center;
              padding: 40px 0;
            `}
          >
            <Button.Common
              options={{
                width: 240,
                height: 56,
                backgroundColor: 'rgb(95, 0, 128)',
                fontWeight: 500,
                fontSize: 16,
                color: '#fff',
              }}
            >
              가입하기
            </Button.Common>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
