
const  Mock=require('mockjs')
Mock.mock("/link/data",'get',require("./json/data"));

Mock.mock("/mock/data",'get',require("./json/data"));

Mock.mock("/sss/csss",'get',require("./json/dataOne"));
Mock.mock('user/shop','get',require('./json/shop'))
Mock.mock('user/shopcart','get',require('./json/shopcart'))
Mock.mock('/jsondata/abc','get',require('./json/data1'))
Mock.mock('/listen','get',require('./json/listen'));
Mock.mock('user/shop','get',require('./json/shop'))
