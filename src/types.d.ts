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
}


interface OtherProps {
  message?: string;
}

type msg = (msg: string) => Promise<void>;
