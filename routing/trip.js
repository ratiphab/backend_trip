const express = require('express');
const router = express.Router();
const { trips } = require('./../mockData')

router.get('/', async (req, res) => {
    const { keyword } = req.query;
    const lowerKeyword = keyword.toLowerCase();
    const resData = trips.filter(item => 
        item.title.toLowerCase().includes(lowerKeyword) ||
        item.description.toLowerCase().includes(lowerKeyword) ||
        item.tags.some(tag => tag.toLowerCase().includes(lowerKeyword))
    );
    if (resData.length == 0){
        res.json({ success: true ,message : "Data Not Found"})
    }else {
        res.json({ success: true ,data :resData})
    }
})

module.exports = router;