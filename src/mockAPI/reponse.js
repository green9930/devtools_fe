const RESP = {
  LoginUserName: "로그인된 유저이름",

  data: {
    responseArticles: [
      {
        id: 1,
        title: "제목1",
        content: "내용1",
        username: "admin1",
        category: "하드웨어",
        createAt: "2022년 8월 12일 3시 33분",
        isMyArticles: true,
      },
      {
        id: 2,
        title: "제목2",
        content: "내용2",
        username: "admin2",
        category: "소프트웨어",
        createAt: "2022년 8월 12일 3시 35분",
        isMyArticles: true,
      },
      {
        id: 3,
        title: "제목3",
        content: "내용3",
        username: "admin3",
        category: "하드웨어",
        createAt: "2022년 8월 12일 3시 55분",
        isMyArticles: true,
      },
    ],
  },
};
export default RESP;

// const RESP = [
//   { LoginUserName: "로그인된 유저이름" },

//   {
//     id: 1, //백엔드에서 자동으로 추가?
//     title: "제목1",
//     content: "내용1",
//     username: "admin1",
//     category: "HW",
//     createAt: "2022년 8월 12일 1시 11분",
//     isMyArticles: true,
//     comments: [
//       {
//         commentId: 1,
//         username: "admin1",
//         createAt: "2022년 8월 12일 3시 40분",
//         comment: "댓글1",
//         articlesId: 1,
//       },
//       {
//         commentId: 2,
//         username: "admin2",
//         createAt: "2022년 8월 12일 3시 40분",
//         comment: "1234567890123456789012345678901234567890",
//         articlesId: 1,
//       },
//       {
//         commentId: 3,
//         username: "admin3",
//         createAt: "2022년 8월 12일 3시 40분",
//         comment: "안녕하세요",
//         articlesId: 1,
//       },
//     ],
//   },
//   {
//     id: 2, //백엔드에서 자동으로 추가?
//     title: "제목2",
//     content: "내용2",
//     username: "admin2",
//     category: "SW",
//     createAt: "2022년 8월 12일 2시 22분",
//     isMyArticles: true,
//     comments: [
//       {
//         commentId: 1,
//         username: "admin1",
//         createAt: "2022년 8월 12일 3시 40분",
//         comment: "댓글2",
//         articlesId: 2,
//       },
//       {
//         commentId: 2,
//         username: "admin2",
//         createAt: "2022년 8월 12일 3시 40분",
//         comment: "1234567890123456789012345678901234567890",
//         articlesId: 2,
//       },
//       {
//         commentId: 3,
//         username: "admin3",
//         createAt: "2022년 8월 12일 3시 40분",
//         comment: "안녕하세요",
//         articlesId: 2,
//       },
//     ],
//   },
//   {
//     id: 3, //백엔드에서 자동으로 추가?
//     title: "제목3",
//     content: "내용3",
//     username: "admin3",
//     category: "HW",
//     createAt: "2022년 8월 12일 3시 33분",
//     isMyArticles: true,
//     comments: [
//       {
//         commentId: 1,
//         username: "user3",
//         createAt: "2022년 8월 12일 1시 40분",
//         comment: "안녕하세요~",
//         articlesId: 3,
//       },
//       {
//         commentId: 2,
//         username: "user1",
//         createAt: "2022년 8월 12일 2시 44분",
//         comment: "반가워요~",
//         articlesId: 3,
//       },
//       {
//         commentId: 3,
//         username: "user1",
//         createAt: "2022년 8월 12일 3시 50분",
//         comment: "반가워요22",
//         articlesId: 3,
//       },
//     ],
//   },
//   {
//     id: 4, //백엔드에서 자동으로 추가?
//     title: "제목4",
//     content: "내용4",
//     username: "admin4",
//     category: "SW",
//     createAt: "2022년 8월 12일 4시 44분",
//     isMyArticles: false,
//     comments: [
//       {
//         commentId: 1,
//         username: "admin",
//         createAt: "2022년 8월 12일 3시 40분",
//         comment:
//           "댓글 최대 글자 수 확인 개발 어려워요 서버 연동 힘들어 유효성 검사해야",
//         articlesId: 10,
//       },
//       {
//         commentId: 2,
//         username: "admin",
//         createAt: "2022년 8월 12일 3시 40분",
//         comment: "1234567890123456789012345678901234567890",
//         articlesId: 10,
//       },
//       {
//         commentId: 3,
//         username: "admin",
//         createAt: "2022년 8월 12일 3시 40분",
//         comment: "안녕하세요",
//         articlesId: 10,
//       },
//     ],
//   },
//   {
//     id: 5, //백엔드에서 자동으로 추가?
//     title: "제목5",
//     content: "내용5",
//     username: "admin5",
//     category: "HW",
//     createAt: "2022년 8월 12일 5시 55분",
//     isMyArticles: false,
//     comments: [
//       {
//         commentId: 1,
//         username: "admin",
//         createAt: "2022년 8월 12일 3시 40분",
//         comment: "어렵다 어려워~",
//         articlesId: 10,
//       },
//       {
//         commentId: 2,
//         username: "admin",
//         createAt: "2022년 8월 12일 3시 40분",
//         comment: "새벽에 퇴근...",
//         articlesId: 10,
//       },
//       {
//         commentId: 3,
//         username: "admin",
//         createAt: "2022년 8월 12일 3시 40분",
//         comment: "안녕하세요",
//         articlesId: 10,
//       },
//     ],
//   },
//   {
//     id: 6, //백엔드에서 자동으로 추가?
//     title: "제목6",
//     content: "내용6",
//     username: "admin6",
//     category: "SW",
//     createAt: "2022년 8월 12일 6시 00분",
//     isMyArticles: false,
//     comments: [
//       {
//         commentId: 1,
//         username: "admin",
//         createAt: "2022년 8월 12일 3시 40분",
//         comment:
//           "댓글 최대 글자 수 확인 개발 어려워요 서버 연동 힘들어 유효성 검사해야",
//         articlesId: 10,
//       },
//       {
//         commentId: 2,
//         username: "admin",
//         createAt: "2022년 8월 12일 3시 40분",
//         comment: "1234567890123456789012345678901234567890",
//         articlesId: 10,
//       },
//       {
//         commentId: 3,
//         username: "admin",
//         createAt: "2022년 8월 12일 3시 40분",
//         comment: "안녕하세요",
//         articlesId: 10,
//       },
//     ],
//   },
// ];

// export default RESP;
