![ScreenRecording2024-02-02at13 25 55-ezgif com-speed](https://github.com/cihanbagriyanik/Milestone-_BlogApp_react-ts-vite-mui-redux-formik-yup/assets/132518854/2f38a748-a0d3-48b2-b8ac-d07fa431c201)# Milestone Blog App

## Expected Outcome

![Blog App](![Uploading ScreenRecording2024-02-02at13.25.55-ezgif.com-speed.gif…])

## Description

Project aims to create a Milestone Blog App.

## Problem Statement

- I am adding a new project to our portfolios. So you and your colleagues have started to work on the project.

## Project Skeleton Example

```
Milestone Blog App (folder for redux)

|----readme.md         # Given (Definition of the project)
SOLUTION
├── public
|    ├── assets
|    |   └── loading.gif
├── src
|    ├── index.css
|    ├── main.tsx
|    ├── App.css
|    ├── App.tsx
|    ├── types.d.ts
|    ├── vite-env.d.ts
|    ├── app
|    │   └── store.tsx
|    ├── components
|    │   ├── auth
|    │   │   ├── LoginFom.tsx
|    │   │   └── RegisterForm.tsx
|    │   ├── blog
|    │   │   ├── BlogsCard.tsx
|    │   │   ├── CommentCard.tsx
|    │   │   ├── CommentForm.tsx
|    │   │   ├── DeleteModal.tsx
|    │   │   ├── Icons.tsx
|    │   │   ├── NewBlogForm.tsx
|    │   │   └── UpdateModal.tsx
|    │   ├── Footer.tsx
|    │   └── NavBar.tsx
|    ├── features
|    │   ├── authSlice.tsx
|    │   ├── blogSlice.tsx
|    │   ├── categorySlice.tsx
|    │   └── commentSlice.tsx
|    ├── helper
|    │   └── ToastNotify.tsx
|    ├── hooks
|    │   ├── useAuthCall.tsx
|    │   ├── useAxios.tsx
|    │   ├── useBlogCall.tsx
|    │   ├── useCategoryCall.tsx
|    │   └── useCommentCall.tsx
|    ├── pages
|    │   ├── About.tsx
|    │   ├── BlogDetail.tsx
|    │   ├── Dashboard.tsx
|    │   ├── Login.tsx
|    │   ├── MyBlog.tsx
|    │   ├── NewBlog.tsx
|    │   ├── Profile.tsx
|    │   └── Register.tsx
|    └── router
|        ├── AppRouter.tsx
|        └── PrivateRouter.tsx
```

## Objective

Build a Milestone Blog App using ReactJS.

### At the end of the project, following topics are to be covered;

- HTML

- CSS

- JS

- ReactJS

- ReduxJS

- TypeScript

### At the end of the project, students will be able to;

- improve coding skills within HTML & CSS & JS & ReactJS & TypeScript.

- use git commands (push, pull, commit, add etc.) and Github as Version Control System.

## Steps to Solution

- Step 1 : Create React App using `npx create-react-app milestone-blog-app`

- Step 2 : Use NodeJs backend for authentication and CRUD operations.

- Step 3 : You can use css frameworks like Bootstrap, Tailwind Css, Material UI.

- Step 4 : You can view sample app on https://blog-app-cihan.vercel.app/.

- Step 5 : Add project gif to your project and README.md file.

## Notes

- You can add additional functionalities to your app.

## Bonus

- [React Helmet](https://www.npmjs.com/package/react-helmet)
- [Open Graph](https://medium.com/@muhammederdinc/open-graph-protokol%C3%BC-nedir-2c61f1454526)

## Demo

[Milestone Blog App](https://blog-app-cihan.vercel.app/)

**<p align="center">&#9786; Happy Coding &#9997;</p>**

## API

- will be written very soon

- but small explanation is below

```
  login => auth/login/
  register => users/
  logout => auth/logout/
```

- Post Read/List

```javascript
    // Pagination yapısı backend tarafından ayarlandı. page bilgisi gelen response ta var oradan kaç sayfa olduğunu yakalayabilirsiniz. Default olarak her sayfada 25 veri sergileniyor. Bunu manuel olarak istek atarken ayarlayabilirsiniz. Örneğin;
    //?page=1&limit=10

  endpoints => blogs?page=1
  method: GET
  no authentication
  comments, countOfVisitors ve likes bilgileri response da dönüyor buradan alarak sayıları/uzunluklarını kullanabilirsiniz.
```

- Post Create

```javascript
  endpoints => blogs
  method: POST
  headers: {"Authorization":`Token ${yourtoken}`}

  body: {
      "title": "Topkapı Sarayı",
      "content": "Topkapı Sarayı (Osmanlı Türkçesi: طوپقپو سرايى), İstanbul Sarayburnu'nda, Osmanlı             İmparatorluğu'nun 600 yıllık tarihinin 400 yılı boyunca, devletin idare merkezi olarak kullanılan ve Osmanlı padişahlarının yaşadığı saraydır. Bir zamanlar içinde 4.000'e yakın insan yaşamıştır.\n Topkapı Sarayı Fatih Sultan Mehmed tarafından 1478’de yaptırılmış, Abdülmecid’in Dolmabahçe Sarayı’nı yaptırmasına kadar yaklaşık 380 sene boyunca devletin idare merkezi ve Osmanlı padişahlarının resmi ikâmetgâhı olmuştur. Kuruluş yıllarında yaklaşık 700.000 m²'lik bir alanda yer alan sarayın bugünkü alanı 80.000 m²'dir.\nopkapı Sarayı, saray halkının Dolmabahçe Sarayı, Yıldız Sarayı ve diğer saraylarda yaşamaya başlaması ile birlikte boşaltılmıştır. Padişahlar tarafından terk edildikten sonra da içinde birçok görevlinin yaşadığı Topkapı Sarayı hiçbir zaman önemini kaybetmemiştir. Saray zaman zaman onarılmıştır. Ramazan ayı içerisinde padişah ve ailesi tarafından ziyaret edilen Kutsal Emanetler'in bulunduğu Hırka-i Saadet Dairesi’nin her yıl bakımının yapılmasına ayrı bir önem verilmiştir.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Topkapi_Palace_Seen_From_Harem.JPG/270px-Topkapi_Palace_Seen_From_Harem.JPG",
      "categoryId": "6591ef8d26959a81bce92d5a",
      "isPublished": "true"
}
    // yukarıdaki verileri göndermeniz yeterli olacaktır
.
    category endpoints => "categories"
    isPublished => {
      "false":"draft",
      "true":"published"
    }

```

- Post Update

```json
  endpoints => blogs/{post_id} //blogs/6596a348fe3c4517336492eb
  method: PUT
  headers: {"Authorization":`Token ${yourtoken}`}

  body: {
      "_id": "6596a348fe3c4517336492eb",
      "userId": "6596a2a7fe3c4517336492ce",
      "categoryId": "6591ef8d26959a81bce92d5a",
      "title": "Topkapı Sarayı!",
      "content": "Topkapı Sarayı (Osmanlı Türkçesi: طوپقپو سرايى), İstanbul Sarayburnu'nda, Osmanlı İmparatorluğu'nun 600 yıllık tarihinin 400 yılı boyunca, devletin idare merkezi olarak kullanılan ve Osmanlı padişahlarının yaşadığı saraydır. Bir zamanlar içinde 4.000'e yakın insan yaşamıştır.\n Topkapı Sarayı Fatih Sultan Mehmed tarafından 1478’de yaptırılmış, Abdülmecid’in Dolmabahçe Sarayı’nı yaptırmasına kadar yaklaşık 380 sene boyunca devletin idare merkezi ve Osmanlı padişahlarının resmi ikâmetgâhı olmuştur. Kuruluş yıllarında yaklaşık 700.000 m²'lik bir alanda yer alan sarayın bugünkü alanı 80.000 m²'dir.\nopkapı Sarayı, saray halkının Dolmabahçe Sarayı, Yıldız Sarayı ve diğer saraylarda yaşamaya başlaması ile birlikte boşaltılmıştır. Padişahlar tarafından terk edildikten sonra da içinde birçok görevlinin yaşadığı Topkapı Sarayı hiçbir zaman önemini kaybetmemiştir. Saray zaman zaman onarılmıştır. Ramazan ayı içerisinde padişah ve ailesi tarafından ziyaret edilen Kutsal Emanetler'in bulunduğu Hırka-i Saadet Dairesi’nin her yıl bakımının yapılmasına ayrı bir önem verilmiştir.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Topkapi_Palace_Seen_From_Harem.JPG/270px-Topkapi_Palace_Seen_From_Harem.JPG",
      "isPublish": true
}

    category endpoints => "categories"
    isPublished => {
      "false":"draft",
      "true":"published"
    }
```

- Post Delete

```javascript
  endpoints => blogs/{post_id} // blogs/6596a348fe3c4517336492eb
  method: DELETE
  headers: {"Authorization":`Token ${yourtoken}`}
```

- Comments Create

```javascript
  endpoints => comments
  method: POST
  headers: {"Authorization":`Token ${yourtoken}`}

  body:{
      "blogId": "6596a348fe3c4517336492eb",
      "comment": "Comment 1"
  }

```

- Likes Create or UnLike

```json
  endpoints => blogs/{post_id}/postLike // blogs/6596a348fe3c4517336492eb/postLike
  method: POST
  headers: {"Authorization":`Token ${yourtoken}`}
```

- Get Post Detail

```json
  endpoints => blogs/${post.id} // blogs/6591ef8d26959a81bce92d5d
  method: GET
  headers: {"Authorization":`Token ${yourtoken}`}
```

- User Blogs

```json
  endpoints => blogs?author=${user.id} // blogs?author=6596a2a7fe3c4517336492ce
  method: GET
  headers: {"Authorization":`Token ${yourtoken}`}
```

### Sample Response

- All Blogs
| Buradan gelen veriler içinde toplamda kaç sayfa olduğu bilgisi yer alıyor ona göre pagination işlemi yapabilirsiniz.

  <img src="./allblogs.png" width="900px" />
<br>

- Single Blogs

| Bloğa ait comments verileri detail isteği attığınızda response olarak dönüyor. Ayrıca singleblogs için get isteği attığınızda görüntülenme sayısı da backend tarafından artırılıyor.

```json
{
  "error": false,
  "data": {
    "_id": "6596c9b7fe3c451733649382",
    "userId": {
      "_id": "6596a2a7fe3c4517336492ce",
      "username": "TestUser",
      "firstName": "test9999",
      "lastName": "9999test"
    },
    "categoryId": {
      "_id": "6591ef8d26959a81bce92d5a",
      "name": "World",
      "createdAt": "2023-12-31T22:47:41.846Z",
      "updatedAt": "2023-12-31T22:47:41.846Z",
      "__v": 0
    },
    "title": "Topkapı Sarayı",
    "content": "Topkapı Sarayı (Osmanlı Türkçesi: طوپقپو سرايى), İstanbul Sarayburnu'nda, Osmanlı İmparatorluğu'nun 600 yıllık tarihinin 400 yılı boyunca, devletin idare merkezi olarak kullanılan ve Osmanlı padişahlarının yaşadığı saraydır. Bir zamanlar içinde 4.000'e yakın insan yaşamıştır. Topkapı Sarayı Fatih Sultan Mehmed tarafından 1478’de yaptırılmış, Abdülmecid’in Dolmabahçe Sarayı’nı yaptırmasına kadar yaklaşık 380 sene boyunca devletin idare merkezi ve Osmanlı padişahlarının resmi ikâmetgâhı olmuştur. Kuruluş yıllarında yaklaşık 700.000 m²'lik bir alanda yer alan sarayın bugünkü alanı 80.000 m²'dir. opkapı Sarayı, saray halkının Dolmabahçe Sarayı, Yıldız Sarayı ve diğer saraylarda yaşamaya başlaması ile birlikte boşaltılmıştır. Padişahlar tarafından terk edildikten sonra da içinde birçok görevlinin yaşadığı Topkapı Sarayı hiçbir zaman önemini kaybetmemiştir. Saray zaman zaman onarılmıştır. Ramazan ayı içerisinde padişah ve ailesi tarafından ziyaret edilen Kutsal Emanetler'in bulunduğu Hırka-i Saadet Dairesi’nin her yıl bakımının yapılmasına ayrı bir önem verilmiştir.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Topkapi_Palace_Seen_From_Harem.JPG/270px-Topkapi_Palace_Seen_From_Harem.JPG",
    "isPublish": true,
    "comments": [
      {
        "_id": "6596cbdafe3c4517336493a6",
        "blogId": "6596c9b7fe3c451733649382",
        "userId": {
          "_id": "6596a2a7fe3c4517336492ce",
          "username": "TestUser",
          "firstName": "test9999",
          "lastName": "9999test"
        },
        "comment": "Comment 1",
        "createdAt": "2024-01-04T15:16:42.405Z",
        "updatedAt": "2024-01-04T15:16:42.405Z",
        "__v": 0
      }
    ],
    "likes": ["6596a2a7fe3c4517336492ce"],
    "countOfVisitors": 0,
    "createdAt": "2024-01-04T15:07:35.639Z",
    "updatedAt": "2024-01-04T15:16:42.408Z",
    "__v": 1
  }
}
```

## Postman Documentation

[View Postman Documentation](https://documenter.getpostman.com/view/19994125/2s9YsGhYRx)
