import mysql from "mysql2";

// 데이터베이스 연결
const pool = mysql.createPool(
    process.env.JAWSDB_URL ??{
        host: 'localhost',
        user: 'root',
        database: 'week10',
        password: 'phs31310',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

// async / awiat 사용
const promisePool = pool.promise();

//selec query 
export const selectSql = {
    getUsers : async () => {
        const [rows] = await promisePool.query('select * from user');
        console.log(rows)
        // mysql에서 실행할 명령어를 query문으로 입력
        return rows
    },
    getDepartment : async () => {
        const [rows] = await promisePool.query('select * from department');
        return rows
    },
}

//insert query
export const deletesql = {
    deleteDepartment : async (data) => {
        console.log('deleteSql.deleteDepartment : ', data.Dnumber);
        const sql = `delete from department where Dname = "${data.Dname}"`;
        // delete query 문을 위한 명령어
        await promisePool.query(sql);
    },
}

// update query
export const updateSql = {
    updateEmployee : async (data) => {
        // where 조건문을 만족하는 행에 대해서 salary 수정
        const sql = `update employee set salary = "${data.Salary}" where Minit = "F"`;

        await promisePool.query(sql);
    },
    updateDepartment : async (data) => {
        // Dname을 수정하기 위한 query 이 떄, where을 만족시키기 위해 Dnumber도 같이 전달받는다. 
        const sql = `update department set dname = "${data.Dname}" where Dnumber = ${data.Dnumber}`;
        await promisePool.query(sql);
    },
}




