var urlHead = "http://app2.henanga.gov.cn/";
var urlHead1 = "http://app1.henanga.gov.cn/jmt";
var urlHead2 = "http://192.168.18.51:8089";
var storage = window.localStorage;
// var time_stamp = new Date().getTime();
// console.log(time_stamp);
var JSZ = "jmth5/traffic/getJSZXX"; //驾驶证信息查询
var SFZ = "jmth5/business/getSFZBLXX"; //身份证信息查询
var CRJ = "jmth5/business/getCRJBLXX"; //出入境办理查询
var WZXX = "jmth5/traffic/getJDCWZXX"; //违章查询
var url_guide = "/app/v1/guide_getGuideList"; //获取业务列表
var url_detail = "/app/v1/guide_getGuideDetail"; //获取业务指南详情
var jq_news = "/app/jingqing_selectAnnounce"; //新闻
var police = "/app/v1/application_getResidentsDept"; //户证
var net_item = "/app/projectAndIdCardQuery_selectBanJianInfo"; //网上事项
// 户政首页接口
var hz_index = "/getAllHZParent";
// 户政获取code的接口
var hz_code = "/getHZChildInfo";
// 交管首页接口
var jg_index = "/getAllJGParents";
// 交管获取业务类型的接口
var jg_yw = "/getJGChildrenInfoById";
// 交管具体信息详情接口
var jg_xq = "/getJGBuinessInfoByYWLX";
var auth = {
    "app_key": "123456",
    "imei": "444012",
    "os": "Iphone os",
    "os_version": "5.0",
    "app_version": "1.0.0",
    "source_id": "Yek_test",
    "ver": "0.9",
    "uid": "-1",
    "crc": "3e64055bf4056d1dc68b85dd4365d649",
    "time_stamp": "20090310113016"
};
var auth_WZ = {
    "app_key": "123456",
    "app_version": 23,
    "crc": "e00e6eb42b9c199cd345d9c883071bfb",
    "imei": "863473025141032",
    "os": "android",
    "os_version": "4.4.2",
    "time_stamp": "20090310113016",
    "uid": "800",
    "ver": "0.9"
};

// 通用接口头
var URLHEAD = 'https://app1.henanga.gov.cn/jmth5/zzga/';
var URLHEAD_JPYC = 'https://app1.henanga.gov.cn/';
// 业务接口
var JZZ = 'getResidenceProgress';
var SFZ = 'getIdCardProgress';
var CMCX_CITY = 'getResidentsCityDept';
var CMCX_POLICE = 'getResidentsBureauDept';
var CMCX = 'getSameName';
var CRJBL = 'getExitEntryProgress';
var CRJZJ = 'getExitEntryInfo';
var BAYCJ = 'getSecurityScores';
var BAYZJD = 'getSecurityProgress';
var JSZ = 'getJSZXX';
var WFCX = 'getJDCWZXX';
var HZLIST = 'getResidentsServiceListAll'
var HZITEM = 'getResidentsGuideDetail'
Date.prototype.Format = function () {
    var y = this.getFullYear() + '';
    var m = (this.getMonth() + 1) >= 10 ? (this.getMonth() + 1) + '' : '0' + (this.getMonth() + 1);
    var d = this.getDate() >= 10 ? this.getDate() + '' : '0' + this.getDate();
    var h = this.getHours() >= 10 ? this.getHours() + '' : '0' + this.getHours();
    var mm = this.getMinutes() >= 10 ? this.getMinutes() + '' : '0' + this.getMinutes();
    var s = this.getSeconds() >= 10 ? this.getSeconds() + '' : '0' + this.getSeconds();
    return y + m + d + h + mm + s;
}