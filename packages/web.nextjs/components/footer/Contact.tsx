import { css } from '@emotion/react';
import Typography from '../designsystem/typography';
import Button from '../designsystem/button';
import DividerIcon from '../designsystem/icon/DividerIcon';

function Contact() {
  return (
    <div>
      <Typography.Title
        level="h2"
        options={{
          additionalStyle: [
            css`
              margin-bottom: 17px;
            `,
          ],
        }}
      >
        고객만족센터
      </Typography.Title>

      <Typography.Text
        type="p"
        options={{
          additionalStyle: [
            css`
              margin-bottom: 20px;
            `,
          ],
        }}
      >
        <Typography.Text
          type="strong"
          options={{
            additionalStyle: [
              css`
                font-weight: 700;
                font-size: 28px;
              `,
            ],
          }}
        >
          1644-1107
        </Typography.Text>
        <Typography.Text
          type="span"
          options={{
            additionalStyle: [
              css`
                margin-left: 8px;
                font-weight: 400;
                font-size: 16px;
              `,
            ],
          }}
        >
          365일 오전 7시 - 오후 7시
        </Typography.Text>
      </Typography.Text>

      {/* B2C 문의하기 버튼 */}
      <div>
        <div
          css={css`
            display: flex;
            margin-bottom: 16px;
          `}
        >
          <Button.Shortcut
            name="카카오톡 문의"
            href="/kakao"
            options={{
              additionalStyle: [
                css`
                  margin-right: 16px;
                `,
              ],
            }}
          />
          <div
            css={css`
              padding-top: 2px;
              font-size: 14px;
              color: rgb(153, 153, 153);
              line-height: 19px;
              letter-spacing: -0.5px;
            `}
          >
            월~토요일
            <DividerIcon />
            오전 7시 - 오후 6시
            <br />
            일/공휴일
            <DividerIcon />
            오전 7시 - 오후 1시
          </div>
        </div>

        <div
          css={css`
            display: flex;
            margin-bottom: 16px;
          `}
        >
          <Button.Shortcut
            name="1:1 문의"
            href="/kakao"
            options={{
              additionalStyle: [
                css`
                  margin-right: 16px;
                `,
              ],
            }}
          />
          <div
            css={css`
              padding-top: 2px;
              font-size: 14px;
              color: rgb(153, 153, 153);
              line-height: 19px;
              letter-spacing: -0.5px;
            `}
          >
            365일
            <br />
            고객센터 운영시간에 순차적으로 답변드리겠습니다.
          </div>
        </div>

        <div
          css={css`
            display: flex;
            margin-bottom: 16px;
          `}
        >
          <Button.Shortcut
            name="대량주문 문의"
            href="/kakao"
            options={{
              additionalStyle: [
                css`
                  margin-right: 16px;
                `,
              ],
            }}
          />
          <div
            css={css`
              padding-top: 2px;
              font-size: 14px;
              color: rgb(153, 153, 153);
              line-height: 19px;
              letter-spacing: -0.5px;
            `}
          >
            월~금요일
            <DividerIcon />
            오전 9시 - 오후 6시
            <br />
            점심시간
            <DividerIcon />낮 12시 - 오후 1시
          </div>
        </div>
      </div>

      {/* B2B 비회원 문의하기 */}
      <div
        css={css`
          font-size: 12px;
          color: rgb(153, 153, 153);
        `}
      >
        비회원 문의 :
        <Button.Anchor
          name="help@kurlycorp.com"
          href="mailto:help@kurlycorp.com"
          options={{
            additionalStyle: [
              css`
                font-size: 12px;
                color: rgb(153, 153, 153);
              `,
            ],
          }}
        />
        <br />
        비회원 대량주문 문의 :
        <Button.Anchor
          name="kurlygift@kurlycorp.com"
          href="mailto:kurlygift@kurlycorp.com"
          options={{
            additionalStyle: [
              css`
                font-size: 12px;
                color: rgb(153, 153, 153);
              `,
            ],
          }}
        />
      </div>
    </div>
  );
}

export default Contact;
