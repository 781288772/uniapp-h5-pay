// import { Toast } from 'antd-mobile';
// import { router } from 'umi';
/*****************************************************************
 表单校验工具类  (linjq)
 *****************************************************************/

/**
 * 判断整数num是否等于0
 *
 * @param num
 * @return
 * @author jiqinlin
 */
const isIntEqZero = (num) => {
  return num===0;
};
/**
 * @name 判断iOS
 */
export const isiOS = ()=>{
  let u = navigator.userAgent;
  let iOs = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端\
  return iOs;
}
/**
 * @name 判断android
 */
export  const isAndroid = ()=>{
  let u = navigator.userAgent;
  let android = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  return android
}
const cellValue =(tel)=>{
  if (Number(tel) && String(tel).length === 11) {
    var mobile = String(tel)
    var reg = /^(\d{3})\d{4}(\d{4})$/
    return mobile.replace(reg, '$1****$2')
  } else {
    return cellValue
  }
};
/**
 * 判断整数num是否大于0
 *
 * @param num
 * @return
 * @author jiqinlin
 */
const isIntGtZero = (num) => {
  return num>0;
}

/**
 * 判断整数num是否大于或等于0
 *
 * @param num
 * @return
 * @author jiqinlin
 */
const isIntGteZero = (num) => {
  return num>=0;
}
/*
判断是否在web或者浏览器
* */
export const isWeb=()=>{
  if (window.ReactNativeWebView) {
    return false;
  }else {
    return true;
  }
}

/**
 * 判断浮点数num是否等于0
 *
 * @param num 浮点数
 * @return
 * @author jiqinlin
 */
const isFloatEqZero = (num) => {
  return num===0;
}

/**
 * 判断浮点数num是否大于0
 *
 * @param num 浮点数
 * @return
 * @author jiqinlin
 */
const isFloatGtZero = (num) => {
  return num>0;
}

/**
 * 判断浮点数num是否大于或等于0
 *
 * @param num 浮点数
 * @return
 * @author jiqinlin
 */
const isFloatGteZero = (num) => {
  return num>=0;
}

/**
 * 匹配Email地址
 */
const isEmail = (str) => {
  if(str===null||str==="") return false;
  var result=str.match(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
  if(result===null)return false;
  return true;
}

/**
 * 判断数值类型，包括整数和浮点数
 */
const isNumber = (str) => {
  if(isDouble(str) || isInteger(str)) return true;
  return false;
}

/**
 * 只能输入数字[0-9]
 */
const isDigits = (str) => {
  if(str===null||str==="") return false;
  var result=str.match(/^\d+$/);
  if(result===null)return false;
  return true;
}

/**
 * 匹配money
 */
const isMoney = (str) => {
  if(str===null||str==="") return false;
  var result=str.match(/^(([1-9]\d*)|(([0-9]{1}|[1-9]+)\.[0-9]{1,2}))$/);
  if(result===null)return false;
  return true;
}

/**
 * 匹配phone
 */
const isPhone = (str) => {
  if(str===null||str==="") return false;
  var result=str.match(/^([1][3-9][0-9]{9})$/);
  if(result===null)return false;
  return true;
}

/**
 * 匹配mobile
 */
const isMobile = (str) => {
  if((/^1[3456789]\d{9}$/.test(str))){
    return true
  }else {
    return  false
  }
}

/**
 * 联系电话(手机/电话皆可)验证
 */
const isTel = (text) =>{
  if(isMobile(text)||isPhone(text)) return true;
  return false;
}

/**
 * 匹配qq
 */
const isQq = (str) => {
  if(str===null||str==="") return false;
  var result=str.match(/^[1-9]\d{4,12}$/);
  if(result===null)return false;
  return true;
}



/**
 * 匹配integer
 */
const isInteger = (str) => {
  if(str===null||str==="") return false;
  var result=str.match(/^[-\+]?\d+$/);
  if(result===null)return false;
  return true;
}

/**
 * 匹配double或float
 */
const isDouble = (str) => {
  if(str===null||str==="") return false;
  var result=str.match(/^[-\+]?\d+(\.\d+)?$/);
  if(result===null)return false;
  return true;
}


/**
 * 匹配邮政编码
 */
const isZipCode = (str) => {
  if(str===null||str==="") return false;
  var result=str.match(/^[0-9]{6}$/);
  if(result===null)return false;
  return true;
}

/**
 * 匹配URL
 */
const isUrl = (str) => {
  if(str===null||str==="") return false;
  var result=str.match(/^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\’:+!]*([^<>\"])*$/);
  if(result===null)return false;
  return true;
}

/**
 * 匹配密码，以字母开头，长度在6-12之间，只能包含字符、数字和下划线。
 */
const isPwd = (str) => {
  if(str===null||str==="") return false;
  var result=str.match(/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{8,20}$/);
  if(result===null)return false;
  return true;
}

/**
 * 判断是否为合法字符(a-zA-Z0-9-_)
 */
const isRightfulString = (str) => {
  if(str===null||str==="") return false;
  var result=str.match(/^[A-Za-z0-9_-]+$/);
  if(result===null)return false;
  return true;
}

/**
 * 匹配english
 */
const isEnglish = (str) => {
  if(str===null||str==="") return false;
  var result=str.match(/^[A-Za-z]+$/);
  if(result===null)return false;
  return true;
}

/**
 * 匹配身份证号码
 */
const isIdCardNo = (num) => {
  var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  if(!reg.test(num)) {
    return false
  }else {
    return true
  }
//　 if (isNaN(num)) {alert("输入的不是数字！"); return false;}
  // var len = num.length, re;
  // if (len === 15)
  //   re = new RegExp(/^(\d{6})()?(\d{2})(\d{2})(\d{2})(\d{2})(\w)$/);
  // else if (len === 18)
  //   re = new RegExp(/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})(\w)$/);
  // else {alert("输入的数字位数不对。"); return false;}
  // var a = num.match(re);
  // if (a != null)
  // {
  //   if (len===15)
  //   {
  //     var D = new Date("19"+a[3]+"/"+a[4]+"/"+a[5]);
  //     var B = D.getYear()===a[3]&&(D.getMonth()+1)===a[4]&&D.getDate()===a[5];
  //   }
  //   else
  //   {
  //     var D = new Date(a[3]+"/"+a[4]+"/"+a[5]);
  //     var B = D.getFullYear()===a[3]&&(D.getMonth()+1)===a[4]&&D.getDate()===a[5];
  //   }
  //   if (!B) {alert("输入的身份证号 "+ a[0] +" 里出生日期不对。"); return false;}
  // }
  // if(!re.test(num)){alert("身份证最后一位只能是数字和字母。");return false;}
  //
  // return true;
}

/**
 * 匹配汉字
 */
const isChinese = (str) => {
  if(str===null||str==="") return false;
  var result=str.match(/^[\u4e00-\u9fa5]+$/);
  if(result===null)return false;
  return true;
}

/**
 * 匹配中文(包括汉字和字符)
 */
const isChineseChar = (str) => {
  if(str===null||str==="") return false;
  var result=str.match(/^[\u0391-\uFFE5]+$/);
  if(result===null)return false;
  return true;
}

/**
 * 字符验证，只能包含中文、英文、数字、下划线等字符。
 */
const stringCheck = (str) => {
  if(str===null||str==="") return false;
  var result=str.match(/^[a-zA-Z0-9\u4e00-\u9fa5-_]+$/);
  if(result===null)return false;
  return true;
}

/**
 * 过滤中英文特殊字符，除英文"-_"字符外
 */
const stringFilter = (str) => {
  var pattern = new RegExp("[`~!@#$%^&*()+=|{}':;',\\[\\].<>/?~！@#￥%……&*（）——+|{}【】‘；：”“’。，、？]");
  var rs = "";
  for (var i = 0; i < str.length; i++) {
    rs = rs + str.substr(i, 1).replace(pattern, '');
  }
  return rs;
}

/**
 * 判断是否包含中英文特殊字符，除英文"-_"字符外
 */
const isContainsSpecialChar = (str) => {
  if(str===null||str==="") return false;
  var reg = RegExp(/[(\ )(\`)(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\+)(\=)(\|)(\{)(\})(\')(\:)(\;)(\')(',)(\[)(\])(\.)(\<)(\>)(\/)(\?)(\~)(\！)(\@)(\#)(\￥)(\%)(\…)(\&)(\*)(\（)(\）)(\—)(\+)(\|)(\{)(\})(\【)(\】)(\‘)(\；)(\：)(\”)(\“)(\’)(\。)(\，)(\、)(\？)]+/);
  return reg.test(str);
}
/*
* 专业匹配中文超过范围额外增加...
* */
const BeautySub=(str, len)=>{
  var reg = /[\u4e00-\u9fa5]/g,    //专业匹配中文
    slice = str.substring(0, len),
    chineseCharNum = (~~(slice.match(reg) && slice.match(reg).length)),
    realen = slice.length*2 - chineseCharNum;
  return str.substr(0, realen) + (realen < str.length ? "..." : "");
}
/*
* 判断是否登陆
* */
// const isLogin=()=>{
//   let token= localStorage.getItem("token");
//   if(!token){
//     Toast.info("登陆已失效，请重新登陆",2,()=>{router.push('/signIn/SignIn')})
//     return false
//   }else {
//     return true
//   }
// }
export default {
  isIntEqZero,
  isIntGtZero,
  isIntGteZero,
  isFloatEqZero,
  isFloatGtZero,
  isFloatGteZero,
  isEmail,
  isNumber,
  isDigits,
  isMoney,
  isPhone,
  isMobile,
  isTel,
  isQq,
  isInteger,
  isDouble,
  isZipCode,
  isUrl,
  isPwd,
  cellValue,
  isRightfulString,
  isIdCardNo,
  isChinese,
  isChineseChar,
  stringCheck,
  stringFilter,
  isContainsSpecialChar,
  isAndroid,
  BeautySub,
  // isLogin
}
