import express from "express";
import {selectSql} from "../database/sql";

const router = express.Router();

router.get('/', (req, res) => {
    res.render('login');
});

router.post('/', async (req, res) => {
    const vars = req.body;
    const users = await selectSql.getUsers()
    let whoAmI = '';
    let checkLogin = false;

    users.map((user) => {
        console.log(user.Id, user.Password);
        // 입력받은 id와 password를 비교해보고 login의 여부를 판단한다.
        if (vars.id === user.Id && vars.password === user.Password){
            console.log('login successful!');
            checkLogin = true;
            if (vars.id === 'admin'){
                whoAmI = 'admin';
            }else{
                whoAmI = 'user';
            }
        }
    })

    if (checkLogin && whoAmI === 'admin'){
        res.redirect('/delete');
    }else if (checkLogin && whoAmI === 'user'){
        res.redirect('/select');
    }
    // id에 따라 delete를 할 지, select를 할 지 정한다.
    else{
        console.log('log failed!');
        res.send("<script>alert('로그인에 실패했습니다.'); location.href='/';</script>");
    }
    // login에 실패하면, 경고 문구 (alert)를 보낸다.
})


// router.post('/', (req, res) => {
//     const vars = req.body;
//     const var_lenth = Object.keys(req.body).length;
//     // 데이터의 길이로 employee인지, department인지 구분 

//     if (var_lenth > 4){
//         const data = {
//             Fname: vars.fname,
//             Minit: vars.minit,
//             Lname: vars.lname,
//             Ssn: vars.ssn,
//             Bdate: vars.bdate,
//             Address: vars.address,
//             Sex: vars.sex,
//             Salary: vars.salary,
//             Super_ssn: vars.super_ssn,
//             Dno: vars.dno
//         };
//         // home.hbs에서 받은 변수들을 각각의 변수에 저장
//         insertSql.setEmployee(data);   
//         // 저장한 data를 setEmployee 함수로 보내 sql에 insert할 수 있도록 한다.

//     } else {
//         const data = {
//             Dname: vars.dname,
//             Dnumber: vars.dnumber,
//             Mgr_ssn: vars.mgr_ssn,
//             Mgr_start_date: vars.mgr_start_date
//         };
//         // home.hbs에서 받은 변수들을 각각의 변수에 저장
//         insertSql.setDepartment(data);
//         // 저장한 data를 setDepartment 함수로 보내 sql에 insert할 수 있도록 한다.
//     }
    
//     res.redirect('/');
// })

module.exports = router;