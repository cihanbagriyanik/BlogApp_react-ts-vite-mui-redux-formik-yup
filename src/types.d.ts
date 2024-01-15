//! type for new user
interface FormValues {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  image?: string | undefined;
  city?: string;
  bio?: string;
}

interface DataValuesTypes {
  _id: string;
  image: string;
  title: string;
  content: string;
  createdAt: string;
}

//! type for new blog
interface NewBlogFormValues {
  title: string;
  image: string;
  categoryId: string;
  content: string;
  isPublish: boolean;
}

//! type for show usesate
type ShowState = boolean;
interface IconProps {
  show?: ShowState;
  setShow?: React.Dispatch<React.SetStateAction<ShowState>>;
}

interface UserId {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
}
interface Comments {
  _id: string;
  blogId: string;
  userId: UserId;
  comment: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}


interface CommentFormProps {
  blog: Comments[];
  id?: string | undefined;
}

