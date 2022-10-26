import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/";
// {
//   "userId": 1,
//   "id": 1,
//   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// }

export default {
  //가짜 데이터 출력
  getArticle: function (id) {
    return axios.get(BASE_URL + `posts/${id}`);
  },
  //가짜 데이터 출력 페이지
  getArticles: function (page) {
    console.log(page);
    return axios.get(BASE_URL + "posts");
  },
  //데이터 post 업로드
  postArticle: function (userId, title, body) {
    return axios.post(BASE_URL + "posts", {
      userId: userId,
      title: title,
      body: body,
    });
  },
};
