# 2021-db
### markdown 문법을 공부하자 !

## 3주차 실습 실행 방법
1. 레포지토리 복사(wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@github.com:13akseongyong/2021-db.git
    - (token을 사용한 경우) git clone https://github.com/13akseongyong/2021-db.git
2. week3 폴더로 이동
    > cd week3
3. 콘솔창(powershell)에서 npm package 설치
    > npm install
4. database/sql.js 에서 본인의 데이터베이스 정보 입력(주석 부분)

<pre>
<code>
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host : 'localhost',
        user : 'root', // 본인의 mysql user id
        database : 'test', // 본인이 만든 데이터베이스 이름
        password : 'password', // 본인의 mysql password
        waitForConnections : true,
        connectionLimit : 10,
        queueLimit : 10
    }
);
</code>
</pre>

<br>

## <span stlye = "color:red">테이블 작성법</span>

이름|과|전공|학번
---|---|---|---|

## 텍스트 강조

- **데이터베이스** 실습은 재미있어요 !



# 2021-db
