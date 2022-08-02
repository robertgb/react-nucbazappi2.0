export const firebaseConfig = {
  apiKey: 'AIzaSyBETWZWF9H-BN0CScnq7UxuG9yy2lU_PI0',
  authDomain: 'nucba-zappi-b3048.firebaseapp.com',
  projectId: 'nucba-zappi-b3048',
  storageBucket: 'nucba-zappi-b3048.appspot.com',
  messagingSenderId: '864389468754',
  appId: '1:864389468754:web:cf5fc6fc62ca959afe458b',
};

export const actionCodeSettingsVerification = {
  url:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/'
      : 'https://nucba-zappi-b3048.web.app/',
};

export const actionCodeSettingsForgotPassword = {
  url:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/login'
      : 'https://nucba-zappi-b3048.web.app/login',
};
