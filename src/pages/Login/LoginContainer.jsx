import LoginRegisterLayout from '../../compoments/base/LoginRegisterLayout.jsx'
import LoginCompoment from './Compoments/Login.jsx'

export default function LoginContainer() {
  return (
    <LoginRegisterLayout type='Đăng Nhập'>
      <LoginCompoment />
    </LoginRegisterLayout>
  )
}
