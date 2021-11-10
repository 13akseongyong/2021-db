import express from "express";
import logger from "morgan";
import path from "path";

import loginRouter from "../routes/login";
import selectRouter from "../routes/select";
import deleteRouter from "../routes/delete";
// 다른 페이지에 접속하기 위해 설정


const PORT = 3000;
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'hbs')
// views 내부의 hbs 사용

app.use(logger("dev"));

app.use('/', loginRouter);
app.use('/select',selectRouter);
app.use('/delete', deleteRouter);
//router를 이용하여 다른 페이지 접속 허가

    app.listen(PORT, () => {
        console.log('Example app listening at http://localhost:${PORT}')
    })
    // 자신이 원하는 port로 접속 허가



