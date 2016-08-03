/**
 * Created by ad on 2016/8/3 0003.
 */
var reg_phone = /^1[34578]\d{9}$/;         /*手机号*/
var reg_chinese = /^[\u4e00-\u9fa5]+$/;   /*真是姓名*/
var reg_all = /^[0-9A-Za-z\u4e00-\u9fa5]+$/;   /*中 英文 数字*/
var reg_email = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;  /*邮箱*/
var reg_age = /^[0-9]{1,2}$/;                         /*年龄*/
var reg_ID = /^[0-9]{17}[0-9*]$/;                 /*身份ID 最后一位用*代替 */
var reg_num = /^[0-9]+$/;
var reg_birthday = /^[0-9]{4}$/;

//用法：regExp.test(string);