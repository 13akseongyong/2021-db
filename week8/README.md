# 2021-db

## 8주차 실습 실행 방법
1. 레포지토리 복사(wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@github.com:13akseongyong/2021-db.git
    - (token을 사용한 경우) git clone https://github.com/13akseongyong/2021-db.git
2. week8 폴더로 이동
    > cd week8
3. 콘솔창(powershell)에서 npm package 설치
    > npm install
4. database/sql.js 에서 본인의 데이터베이스 정보 입력(주석 부분)

<pre>
<code>
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host : 'localhost',
        user : 'root', // 본인의 mysql user id
        database : 'week8', // 본인이 만든 데이터베이스 이름
        password : 'password', // 본인의 mysql password
        waitForConnections : true,
        connectionLimit : 10,
        queueLimit : 10
    }
);
</code>
</pre>
5. 접속 방법
    1. 익스플로러 접속
    2. 검색창에 localhost:"port" // port부분엔 자신이 설정한 #port
    3. 주소에 /home을 붙이면, Department 정보가 나온다.
    4. 주오세 /update를 붙이면, Department에서 자신이 원하는 항목을 삭제할 수 있다. 


<br>

## <span stlye = "color:red">Employee 테이블 작성법</span>

이름|중간 이름|성|SSN|생년월일|주소|성(SEX)|월급|관리자 SSN|부서 번호
---|---|---|---|---|---|---|---|---|---|

<br></br>

## <span stlye = "color:red">Department 테이블 작성법</span>
부서 이름|부서 번호|관리자 SSN|시작 날짜|
---|---|---|---|


<br></br>



# 2021-db
