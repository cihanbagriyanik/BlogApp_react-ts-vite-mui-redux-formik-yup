interface authState {
  currentUser?: string;
  loading?: boolean;
  error?: boolean;
  isAdmin?: boolean;
  token?: string;
}

interface FormValues {
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
  image: string;
  bio: string;
}

interface OtherProps {
  message?: string;
}

type Msg = (msg: string) => Promise<void>;
