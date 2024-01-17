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

//! type for new blog and updateBlog
interface category {
  createdAt: string;
  name: string;
  updatedAt: string;
  __v: number;
  _id: string;
}
interface NewBlogFormValues {
  title: string;
  image: string;
  categoryId: category | any; //! **************/
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
