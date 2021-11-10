import express from "express";
import {selectSql } from "../database/sql";

const router = express.Router();

router.get('/', async function(req, res){
    // const employee = await selectSql.getEmployee();
    const department = await selectSql.getDepartment();
    // selectsql을 이용하여 employee와 department에 정보를 저장
    
    res.render('select', {
        title: 'IT 공대',
        department
    });
});

module.exports = router;
