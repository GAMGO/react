import express, { json } from "express";
import { MongoClient } from "mongodb";
import cors from "cors";

//Web 프레임워크(서버) 실행을 위한 객체 생성
const app = express();
const PORT = 5000;
const PORT2 = 5011;

app.use(cors()); // 프론트 엔드가 백엔드 접속에 필요
app.use(json()); // Clinet가 보낸 데이터 수신에 필요

//DB서버 주소
const MONGODB_URI = "mongodb://localhost:27017/";
const DB_NAME = "react01";
const COLLECTION_NAME = "lesson04";
const COLLECTION_NAME2 = "TimeTable";

//db연결
let db;
MongoClient.connect(MONGODB_URI)
  .then((client) => {
    db = client.db(DB_NAME);
    console.log("성공");
  })
  .catch((error) => console.error("연결 실패", error));

//API 라우팅 메소드
app.get("/api/todos", async (req, res) => {
  //처리할 URL : /api/todos - 콜백함수 인자 req는 요청, res 응답 정보 저장 객체
  try {
    //find({조건}) 조건은 '속성이름:값'형식.{}는 모든 것.
    const todos = await db.collection(COLLECTION_NAME).find({}).toArray();
    res.json(todos); //db에서 조회한 todos 배열을 json 형식 응답으로 보내기
  } catch (error) {
    res.status(500).json({ error: "Failed to request a DATA" });
  }
});
//새 todo 추가 (벡엔드가 db에 저장)
app.post("/api/todos", async (req, res) => {
  try {
    const { text } = req.body;
    /*백엔드 처리 공통 사항
        req.body는 벡엔드가 요청 받은 데이터
        res.json({DATA})는 벡엔드가 클라이언트한테 보내는 응답데이터
        res.status(응답상태코드) 처리결과 값
        */
    const maxTodo = await db.collection(COLLECTION_NAME).findOne({}, { sort: { id: -1 } })
    const newId = maxTodo ? maxTodo.id + 1 : 1;
    const newTodo = {
      id: newId,
      text: text,
      checked: false,
      createAt: new Date(),
    }; //DB에 새로운 newTodo 추가
    const result = await db.collection(COLLECTION_NAME).insertOne(newTodo);
    console.log(result);
    //https://localhost:5000/api/todos 요청에 대한 응답
    res.status(201).json({ ...newTodo, _id: result.insertedId });
    //저장 결과에 대한 응답 데이터
  } catch (error) {
    res.status(500).json({ error: "Failed to request a server" });
  }
});
/*todo의 checked 속성값 수정. (id값 지정.)
:id는 파라미터, url에서 변수값 전달하는 방법*/
app.put("/api/todos/:id", async (req, res) => {
  try {
    const todoId = Number(req.params.id);
    const { checked } = req.body;
    const result = await db
      .collection(COLLECTION_NAME)
      .updateOne({ id: todoId }, { $set: { checked } });
    console.log(result);
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "지정된 id를 찾을 수 없음." });
    }
    res.json({ message: "Checked 업데이트 완료!!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to request a server" });
  }
});

//지정한 id의 todo삭제
app.delete("/api/todos/:id", async (req, res) => {
  try {
    const todoId = Number(req.params.id);
    const result = await db
      .collection(COLLECTION_NAME)
      .deleteOne({ id: todoId });
    console.log(result);
    if (result.deleteCount === 0) {
      return res.status(404).json({ error: "지정된 id를 삭제 할 수 없음." });
    }
    res.json({ message: "DELETE COMPLETE" });
  } catch (error) {
    res.status(500).json({ error: "DELETE FAILED" });
  }
});

//백엔드 서버 시작
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행중.`);
});

//----------------------------------------------타임테이블용 서버
app.get("/api/TimeTable", async (req, res) => {
  try {
    const timeTable = await db.collection(COLLECTION_NAME2).find({}).toArray();
    res.json(timeTable);
  } catch (error) {
    res.status(500).json({ error: "Failed to request a DATA" });
  }
});
//추가 (벡엔드가 db에 저장)
app.post("/api/TimeTable", async (req, res) => {
  try {
    const { text } = req.body;
    const maxTime = await db.collection(COLLECTION_NAME2).findOne({}, { sort: { id: -1 } })
    const newId = maxTime ? maxTime.id + 1 : 1;
    const newTime = {
      id: newId,
      text: text,
      checked: false,
      createAt: new Date(),
    };
    const result = await db.collection(COLLECTION_NAME2).insertOne(newTime);
    console.log(result);
    //https://localhost:5000/api/TimeTable 요청에 대한 응답
    res.status(201).json({ ...newTime, _id: result.insertedId });
    //저장 결과에 대한 응답 데이터
  } catch (error) {
    res.status(500).json({ error: "Failed to request a server" });
  }
});
app.put("/api/TimeTable/:id", async (req, res) => {
  try {
    const todoId = Number(req.params.id);
    const { checked } = req.body;
    const result = await db
      .collection(COLLECTION_NAME2)
      .updateOne({ id: todoId }, { $set: { checked } });
    console.log(result);
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "지정된 id를 찾을 수 없음." });
    }
    res.json({ message: "Checked 업데이트 완료!!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to request a server" });
  }
});

//지정한 id의 todo삭제
app.delete("/api/TimeTable/:id", async (req, res) => {
  try {
    const todoId = Number(req.params.id);
    const result = await db
      .collection(COLLECTION_NAME2)
      .deleteOne({ id: todoId });
    console.log(result);
    if (result.deleteCount === 0) {
      return res.status(404).json({ error: "지정된 id를 삭제 할 수 없음." });
    }
    res.json({ message: "DELETE COMPLETE" });
  } catch (error) {
    res.status(500).json({ error: "DELETE FAILED" });
  }
});

//백엔드 서버 시작
app.listen(PORT2, () => {
  console.log(`타임테이블용 서버가 포트 ${PORT2}에서 실행중.`);
});


