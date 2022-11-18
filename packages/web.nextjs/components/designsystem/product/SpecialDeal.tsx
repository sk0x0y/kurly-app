import Image from 'next/image';
import { css } from '@emotion/react';
import Typography from '../typography';

function SpecialDeal() {
  return (
    <section
      css={css`
        width: 1050px;
        margin: 0 auto;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          padding: 80px 0;
        `}
      >
        {/* 좌측 공간 */}
        <div>
          {/* 제목 및 부제목 h2, h3 */}
          <Typography.Title
            level="h2"
            options={{
              additionalStyle: [
                css`
                  margin-bottom: 10px;
                  font-weight: 500;
                  font-size: 28px;
                  color: rgb(51, 51, 51);
                  line-height: 1.1;
                  letter-spacing: -0.26px;
                `,
              ],
            }}
          >
            일일특가
          </Typography.Title>
          <Typography.Title
            level="h3"
            options={{
              additionalStyle: [
                css`
                  margin-bottom: 24px;
                  font-weight: 400;
                  font-size: 16px;
                  color: rgb(153, 153, 153);
                  line-height: 1.3;
                  letter-spacing: normal;
                `,
              ],
            }}
          >
            24시간 한정특가
          </Typography.Title>

          {/* 남은 시간 */}
          <div>남은 시간 표시 공간</div>

          {/* 멘트 */}
          <Typography.Text
            type="p"
            options={{
              additionalStyle: [
                css`
                  margin-top: 32px;
                  font-weight: 400;
                  font-size: 14px;
                  color: rgb(204, 204, 204);
                  line-height: 1.43;
                  letter-spacing: -0.4px;
                `,
              ],
            }}
          >
            망설이면 늦어요!
          </Typography.Text>
        </div>

        {/* 우측 공간 */}
        <div>
          <div css={css``}>
            <div css={css``}>
              <Image src="/goods/1653035652427l0.jpeg" width={338} height={434} />
            </div>
            <div>설명</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialDeal;
