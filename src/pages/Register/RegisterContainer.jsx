import LoginRegisterLayout from '../../compoments/base/LoginRegisterLayout.jsx'
import RegisterCompoment from './Compoments/Register.jsx'

export default function RegisterContainer() {
  return (
    <LoginRegisterLayout type='Đăng Ký'>
      <RegisterCompoment />
    </LoginRegisterLayout>
  )
}
