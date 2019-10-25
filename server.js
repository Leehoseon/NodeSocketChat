const express = require('express');
const path = require('path');
const app = express();
const SocketIo = require('socket.io'); // 추가

const allSocketEvents = require('./allsocket.js'); // 전체 채팅 추가
const roomSocketEvents = require('./roomsocket.js'); // 방 채팅 추가

app.use(express.static(path.join(__dirname, 'html'))); //정적 파일들이 있는 위치를 지정 /file.html
//app.use('/static',express.static(path.join(__dirname, 'html'))); //정적 파일들이 있는 위치를 지정 /static/file.html

app.use(express.static('/socket.io/socket.io.js')); //index.html에서 io.js 파일 사용 가능하도록 설정

//index
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

//all socket
app.get('/chat', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'all.html'));
});


//room socket
app.get('/chat', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'room.html'));
});

/*
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'about.html'));
});
*/
const server = app.listen(8080, () => {
  console.log('Express App on port 8080!');
  const io = SocketIo(server); // socket.io와 서버 연결하는 부분
  allSocketEvents(io); // 전체 한 방에서 채팅
  //roomSocketEvents(io); // 각자 방을 나눠 채팅
});