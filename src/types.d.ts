/* -------------------------------------------------------------------------- */
interface authState {
  currentUser: string;
  loading: boolean;
  error: boolean;
  isAdmin?: boolean;
  token: string;
}

/* -------------------------------------------------------------------------- */
interface FormValues {
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
  image?: string;
  city?: string;
  bio?: string;
  shrink: boolean;
}

interface OtherProps {
  message?: string;
}

// export { FormValues, OtherProps };

/* -------------------------------------------------------------------------- */
type Msg = (msg: string) => Promise<void>;

/* -------------------------------------------------------------------------- */
import { IconButtonProps } from "@mui/material";
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
