import Link from 'next/link';
import Typography from '../designsystem/typography';

function Contact() {
  return (
    <div>
      <Typography.Title level="h2">고객만족센터</Typography.Title>
      <span>365일 오전 7시 - 오후 7시</span>
      <p>
        <strong>1644-1107</strong>
      </p>

      {/* B2C 문의하기 버튼 */}
      <div>
        <Link href="/kakao">
          <button type="button">카카오톡 문의</button>
        </Link>
      </div>

      {/* B2B 비회원 문의하기 */}
      <div>
        <p>
          비회원 문의 : &nbsp;
          <Link href="mailto:help@kurlycorp.com">
            <button type="button">help@kurlycorp.com</button>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Contact;
