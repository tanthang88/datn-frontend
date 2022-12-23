export const URL_BACKEND = import.meta.env.VITE_BACKEND_SITE_URL
export const URL = {
  HOME: '/',
  BILL: '/bill',
  USER: '/user',
  CATEGORY: '/category',
  ACCESSORY: '/accessory',
}

export const REGEX = {
  PASSWORD: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
  PHONE: /^(((\+|)84)|0)(3|5|7|8|9)([0-9]{8})$/,
  COMPANY_PHONE: /^(((\+|)84)|0)(2|3|5|7|8|9)([0-9]{8})$/,
  FAX: /^(((\+|)84))(8)([0-9]{8})$/,
  WHITE_SPACING: /^(?!\s+$).+/,
  NUMBER: /^[0-9]+$/,
}

export const TIME_FORMAT = 'HH:mm'
export const DATE_FORMAT = 'dd/MM/yyyy'
export const DATE_FORMAT_NUMBER = 'DD/MM/YYYY'
export const DATETIME_FORMAT = 'dd/MM/yyyy HH:mm'
export const DATE_FORMAT_BE = 'yyyy-MM-dd'
export const DATETIME_FORMAT_BE = 'yyyy-MM-dd HH:mm'

export const LIST_BILL_STATUS = [
  {
    name: 'Chờ xác nhận',
    value: 0,
  },
  {
    name: 'Đã xác nhận',
    value: 1,
  },
  {
    name: 'Đang giao hàng',
    value: 2,
  },
  {
    name: 'Giao hàng thành công',
    value: 3,
  },
  {
    name: 'Huỷ đơn',
    value: 4,
  },
]
