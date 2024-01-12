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

interface NewBlogFormValues {
  // categoryId: string;
  title: string;
  image: string;
  categoryId: string;
  content: string;
  isPublish: boolean;
}
