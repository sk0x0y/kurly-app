import { css } from '@emotion/react';
import FormItem from './FormItem';
import Input from '../designsystem/input';
import Button from '../designsystem/button';

function UserInform() {
  return (
    <>
      <FormItem label={{ required: true, id: 'userId', name: '아이디' }} button={{ text: '중복확인' }}>
        <Input.Common id="userId" name="userId" placeholder="아이디를 입력해주세요" type="text" value="" required />
      </FormItem>

      <FormItem label={{ required: true, id: 'userPw', name: '비밀번호' }}>
        <Input.Common id="userPw" name="userPw" placeholder="비밀번호를 입력해주세요" type="text" value="" required />
      </FormItem>

      <FormItem label={{ required: true, id: 'userPwCheck', name: '비밀번호확인' }}>
        <Input.Common
          id="userPwCheck"
          name="userPwCheck"
          placeholder="비밀번호를 한번 더 입력해주세요"
          type="text"
          value=""
          required
        />
      </FormItem>

      <FormItem label={{ required: true, id: 'userName', name: '이름' }}>
        <Input.Common id="userName" name="userName" placeholder="이름을 입력해주세요" type="text" value="" required />
      </FormItem>

      <FormItem label={{ required: true, id: 'userEmail', name: '이메일' }} button={{ text: '중복확인' }}>
        <Input.Common
          id="userEmail"
          name="userEmail"
          placeholder="예) marketkurly@kurly.com"
          type="text"
          value=""
          required
        />
      </FormItem>

      <FormItem
        label={{ required: true, id: 'userPhone', name: '휴대폰' }}
        button={{ disabled: true, text: '인증번호 받기' }}
      >
        <Input.Common id="userPhone" name="userPhone" placeholder="숫자만 입력해주세요" type="text" value="" required />
      </FormItem>

      <FormItem label={{ required: true, name: '주소' }}>
        <Button.Common
          options={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontWeight: 500,
            fontSize: 14,
          }}
        >
          <span>
            <img
              css={css`
                margin: 4px 4px 0 0;
              `}
              src="https://res.kurly.com/pc/service/cart/2007/ico_search.svg"
              alt=""
              className="css-1m3kac1 e4nu7ef0"
            />
          </span>
          <span
            css={css`
              margin: 3px 0 0 0;
            `}
          >
            주소 검색
          </span>
        </Button.Common>

        <p
          css={css`
            margin: 10px 0 0 0;
            font-size: 12px;
            line-height: 18px;
            color: rgb(102, 102, 102);
          `}
        >
          배송지에 따라 상품 정보가 달라질 수 있습니다
        </p>
      </FormItem>

      <FormItem label={{ name: '성별' }}>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <Input.CheckBox.Item
            id="male"
            styles={{
              checked: css`
                border: 7px solid rgb(95, 0, 128);
              `,
            }}
          >
            <span
              css={css`
                margin-left: 12px;
                padding-top: 2px;
              `}
            >
              남자
            </span>
          </Input.CheckBox.Item>

          <Input.CheckBox.Item
            id="female"
            styles={{
              checked: css`
                border: 7px solid rgb(95, 0, 128);
              `,
            }}
          >
            <span
              css={css`
                margin-left: 12px;
                padding-top: 2px;
              `}
            >
              여자
            </span>
          </Input.CheckBox.Item>

          <Input.CheckBox.Item
            id="none"
            styles={{
              checked: css`
                border: 7px solid rgb(95, 0, 128);
              `,
            }}
          >
            <span
              css={css`
                margin-left: 12px;
                padding-top: 2px;
              `}
            >
              선택안함
            </span>
          </Input.CheckBox.Item>
        </div>
      </FormItem>

      <FormItem label={{ name: '생년월일' }}>
        <div
          css={css`
            display: flex;
            align-items: center;
            width: 100%;
            height: 44px;
            padding: 0 15px;
            border: 1px solid rgb(204, 204, 204);
            border-radius: 3px;
          `}
        >
          <input
            type="text"
            placeholder="YYYY"
            css={css`
              appearance: none;
              width: 100%;
              height: 40px;
              outline: none;
              border: 0;
              text-align: center;
            `}
          />
          <span
            css={css`
              &:after {
                content: '/';
                font-size: 14px;
                color: rgb(204, 204, 204);
                text-align: center;
                line-height: 40px;
              }
            `}
          />
          <input
            type="text"
            placeholder="MM"
            css={css`
              appearance: none;
              width: 100%;
              height: 40px;
              outline: none;
              border: 0;
              text-align: center;
            `}
          />
          <span
            css={css`
              &:after {
                content: '/';
                font-size: 14px;
                color: rgb(204, 204, 204);
                text-align: center;
                line-height: 40px;
              }
            `}
          />
          <input
            type="text"
            placeholder="DD"
            css={css`
              appearance: none;
              width: 100%;
              height: 40px;
              outline: none;
              border: 0;
              text-align: center;
            `}
          />
        </div>
      </FormItem>

      <FormItem label={{ name: '추가입력 사항' }}>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <Input.CheckBox.Group>
            <Input.CheckBox.Item
              id="introducer"
              styles={{
                checked: css`
                  border: 7px solid rgb(95, 0, 128);
                `,
              }}
            >
              <span
                css={css`
                  margin-left: 12px;
                  padding-top: 2px;
                `}
              >
                친구초대 추천인 아이디
              </span>
            </Input.CheckBox.Item>

            <Input.CheckBox.Item
              id="event"
              styles={{
                checked: css`
                  border: 7px solid rgb(95, 0, 128);
                `,
              }}
            >
              <span
                css={css`
                  margin-left: 12px;
                  padding-top: 2px;
                `}
              >
                참여 이벤트명
              </span>
            </Input.CheckBox.Item>
          </Input.CheckBox.Group>
        </div>
      </FormItem>
    </>
  );
}

export default UserInform;
