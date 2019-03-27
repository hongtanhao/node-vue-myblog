var mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

// mongoose.connect('mongodb://wei1:0987654321@ds161018.mlab.com:61018/weiwei')
mongoose.connect('mongodb://wind:123456@localhost/db')
    // 创建用户表
var userSchema = new mongoose.Schema({
        name: String, // 字段
        pwd: String,
    })
    // 创建文章表
var articleSchema = new mongoose.Schema({
        title: String,
        date: Date,
        articleContent: String,
        state: String,
        label: String,
    })
    //创建标签表
var tagSchema = new mongoose.Schema({
        tagName: String,
        tagNumber: Number,
    })
    // 创建个人信息表
var personalInformationSchema = new mongoose.Schema({
    name: String,
    individualitySignature: String,
    introduce: String,
})

var Models = {
    User: mongoose.model('User', userSchema),
    Article: mongoose.model('Article', articleSchema),
    TagList: mongoose.model('TagList', tagSchema),
    PersonalInformation: mongoose.model('PersonalInformation', personalInformationSchema),
}

module.exports = Models