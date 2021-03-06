import util from './util'
import qs from 'qs'
import Vue from 'vue'

const serverPath={
	getDict:'/sys/dictionary/getList',
	getOrgList:'/sys/org/getList',

	//首页
	getIndex:'/web/getIndex',
	//
	getStoreAllList:'/sys/store/getList',
	getStoreList:'/sys/store/getPage',
	addStore:'/sys/store/add',
	getStoreListByid:'/sys/store/getById',
	updateStore:'/sys/store/update',
	deleteStoreByid:'/sys/store/deleteById',
	//
	getAgentUserList:'/sys/agentUser/getList',
	getGpsByAddress:'/common/getGpsByAddress',
	login:'/sys/user/login',
	loginOut:'/sys/user/loginOut',
	getLoginerInfo:'/sys/user/getLoginerInfo',
	updateLoginerInfo:'/sys/user/updateLoginerInfo',
	updateMyPwd:'/sys/user/updateMyPwd',
	//
	getPublish:'/mem/publish/getPage',
	getAllPublish:'/mem/publish/getList',
	getPublishByid:'/mem/publish/getById',
	addPublish:'/mem/publish/add',
	updatePublish:'/mem/publish/update',
	deletePublishByid:'/mem/publish/deleteById',
	publish:'/mem/publish/publish',

	getProduct:'/sys/product/getPage',
	getAllProduct:'/sys/product/getList',
	getProductByid:'/sys/product/getById',
	addProduct:'/sys/product/add',
	updateProduct:'/sys/product/update',
	delProduct:'/sys/product/deleteById',

	getFeedback:'/mem/feedBack/getPage',
	getAllFeedback:'/mem/feedBack/getList',
	getFeedbackByid:'/mem/feedBack/getById',
	feedBackReply:'/mem/feedBack/reply',

	getHelp:'/sys/help/getPage',
	getAllHelp:'/sys/help/getList',
	getHelpByid:'/sys/help/getById',
	addHelp:'/sys/help/add',
	updateHelp:'/sys/help/update',
	delHelp:'/sys/help/deleteById',

	getCoupon:'/sys/coupon/getPage',
	getAllCoupon:'/sys/coupon/getList',
	getCouponByid:'/sys/coupon/getById',
	addCoupon:'/sys/coupon/add',
	updateCoupon:'/sys/coupon/update',
	applyCoupon:'/sys/coupon/apply',
	verifyCoupon:'/sys/coupon/verify',
	changeCoupon:'/sys/coupon/changeState',

	getCouponDetail:'/sys/couponDetail/getPage',
	getAllCouponDetail:'/sys/couponDetail/getList',
	getCouponDetailByid:'/sys/couponDetail/getById',
	addCouponDetail:'/sys/couponDetail/add',
	updateCouponDetail:'/sys/couponDetail/update',
	changeCouponDetail:'/sys/couponDetail/changeState',

	getGiftSend:'/mem/giftSend/getPage',
	getAllGiftSend:'/mem/giftSend/getList',
	getActInfo:'/mem/giftSend/getActInfo',
	upateGiftSendState:'/mem/giftSend/updateState',

	getParnerAccount:'/partner/partnerAccount/getPage',
	getAllParnerAccount:'/partner/partnerAccount/getList',
	getParnerAccountByid:'/partner/partnerAccount/getById',
	verifyParnerAccount:'/partner/partnerAccount/verify',

	getParnerBonus:'/partner/partnerAccount/getBonusPage',
	addParnerBonus:'/partner/partnerAccount/addBonus',

	getCouponConfig:'/partner/couponConfig/getPage',
	getAllCouponConfig:'/partner/couponConfig/getList',
	getCouponConfigByid:'/partner/couponConfig/getById',
	addCouponConfig:'/partner/couponConfig/add',
	updateCouponConfig:'/partner/couponConfig/update',
	delCouponConfig:'/partner/couponConfig/deleteById',
	upDownCouponConfig:'/partner/couponConfig/upDown',
	//优惠券使用情况
	getParnerCoupon:'/partner/coupon/getPage',
	getParnerAllCoupon:'/partner/coupon/getList',

	getNotice:'/sys/notice/getPage',
	getNoticeByid:'/sys/notice/getById',
	addNotice:'/sys/notice/add',
	updateNotice:'/sys/notice/update',
	delNotice:'/sys/notice/deleteById',
	publishNotice:'/sys/notice/publish',

	getCouponApply:'/partner/couponApply/getPage',
	verifyCouponApply:'/partner/couponApply/verify',

	//经销商管理
	getAgentList:'/sys/agentUser/getPage',
	getAgentAll:'/sys/agentUser/getList',
	getAgentByid:'/sys/agentUser/getById',
	addAgent:'/sys/agentUser/addAgent',
	updateAgent:'/sys/agentUser/updateAgent',
	changeAgent:'/sys/user/changeStatus',

	//人员管理
	getStaffList:'/sys/staff/getPage',
	getStaffAll:'/sys/staff/getList',
	getStaffByid:'/sys/staff/getById',
	addStaff:'/sys/staff/add',
	updateStaff:'/sys/staff/update',
	changeStaff:'/sys/staff/changeState',

	//备忘录
	getMemoList:'/sys/memo/getPage',
	getMemoAll:'/sys/memo/getList',
	getMemoByid:'/sys/memo/getById',
	addMemo:'/sys/memo/add',
	updateMemo:'/sys/memo/update',
	delMemo:'/sys/memo/deleteById',

	//客户管理
	getOwnerList:'/owner/ownerInfo/getPage',
	getOwnerByid:'/owner/ownerInfo/getById',
	addOwner:'/owner/ownerInfo/add',
	updateOwner:'/owner/ownerInfo/update',
	delOwner:'/owner/ownerInfo/deleteById',
	//预约管理
	getAppointmentList:'/owner/appointment/getPage',
	addAppoint:'/owner/appointment/addAppoint',
	saveAppoint:'/owner/appointment/save',
	delAppoint:'/owner/appointment/cancel',
	restoreAppoint:'/owner/appointment/restore',
	getAppointByid:'/owner/appointment/getAppointInfo',
	ownerSaveAppoint:'/owner/appointment/save',
	nextAppoint:'/owner/appointment/next',
	//订单管理
	getOrderList:'/owner/order/getPage',
	getOrderByid:'/owner/order/getById',
	getOrderInfo:'/owner/order/getOrderInfo',
	changeOrder:'/owner/order/changeState',
	ownerAddOrder:'/owner/order/addOrder',
	ownerUpdateOrder:'/owner/order/editOrder',
	confirmOrder:'/owner/order/confirmOrder',
	ownerOrderNext:'/owner/order/next',
	orgNext:'/owner/order/orgNext',
	lack:'/owner/order/lack',
	supplement:'/owner/order/supplement',
	//验证码
	getVcode:'/web/captchaImage',
	//自助学习
	getCourse:'/sys/course/getPage',
	//建博会兴趣产品
	getProductInterestList:'/sys/productIntent/getPage',
	changeProductInterest:'/sys/productIntent/change',

}

/*========本地存储===========*/
const STORE_PREFIX = '_ayl_mis_'
export let storage = {
  getPrefix: () => STORE_PREFIX,
  cookies: {
    get(sKey) {
      if (!sKey) return null
      sKey = STORE_PREFIX + sKey
      return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null
    },
    set(sKey, sValue, vEnd = 1800, sPath = '/', sDomain = '', bSecure = false) {
      if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey))  return false

      sKey = STORE_PREFIX + sKey
      let sExpires = ''
      if (vEnd) {
        switch (vEnd.constructor) {
          case Number: // 单位秒
            sExpires = vEnd === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + vEnd
            break
          case String:
            sExpires = '; expires=' + vEnd
            break
          case Date:
            sExpires = '; expires=' + vEnd.toUTCString()
            break
        }
      }
      document.cookie = encodeURIComponent(sKey) + '=' + encodeURIComponent(sValue) + sExpires + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '') + (bSecure ? '; secure' : '')
      return true
    },
    remove(sKey, sPath = '/', sDomain = '') {
      if (!this.has(sKey)) return false 

      sKey = STORE_PREFIX + sKey
      document.cookie = encodeURIComponent(sKey) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '')
      return true
    },
    has(sKey) {
      if (!sKey) return false
      return (new RegExp('(?:^|;\\s*)' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=')).test(document.cookie)
    },
    keys() {
      let aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '').split(/\s*(?:\=[^;]*)?;\s*/)
      for (let nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]) }
      return aKeys
    }
  },
  session: {
    set(key, value) {
      if(!key) return false
      window.sessionStorage.setItem(STORE_PREFIX + key, JSON.stringify(value || {}))
    },
    get(key) {
      if(!key) return null
      return JSON.parse(window.sessionStorage.getItem(STORE_PREFIX + key))
    },
    remove(key){
    	if(!key) return null;
    	window.sessionStorage.removeItem(STORE_PREFIX+key);
    } 
  },
  local: {
    set(key, value, ms = 1000*3600*24*365) {
      if(!key) return false
      
      key = STORE_PREFIX + key
      let newValue = {
        value: value,
        expires: ms,
        time: new Date().getTime()
      }
      window.localStorage.setItem(key, JSON.stringify(newValue))
    },
    get(key) {
      if(!key) return null
      key = STORE_PREFIX + key
      
      let value = JSON.parse(window.localStorage.getItem(key))
      if (value && (new Date().getTime() - value.time < value.expires)) {
        value = value.value
      }else{
        value = null
      }
      return value
    } 
  }
}
/*========数据接口===========*/
export default {
	jsonParse(obj){
		if(obj){
			return JSON.parse(JSON.stringify(obj));
		}else{
			return {};
		}

	},
	getPromise(url='',params={},requestName=''){
		let ret = {
			success:false,
			message:requestName+'请求错误',
			data:[]
		}
	    let promise = new Promise( (resolve) => {
	      
	        util.ajax.get(
	        	url,{
	        		params:params
	        	}).then((body)=>{
	        		//console.log(requestName,body);
	        		if(body.data.success){
	        			if(body.data.data){
	        				resolve(body.data)
	        			}else{
	        				resolve(ret);
	        			}
	        		}else{
	        			if(util.env!='development'&&body.data.message&&body.data.message.indexOf('请先登录')>-1){

	        				let _href=window.location.href.substr(0,window.location.href.lastIndexOf('#!'));
	        				_href+='#!/login';
	        				window.location=_href;
	        			}else{
	        				alert(requestName+'请求错误！\n\n'+body.data.message);
	        			}
	        			ret.message=body.data.message;
	        			
	        			resolve(ret);
	        			
	        		}
		        }, (error)=>{
		        	ret.message=error;
		          	resolve(ret)
		          	console.error(requestName,error);
		        })
	    })
    	return promise
	},
	getPromiseByNoParams(url='',requestName=''){
		
	    let promise = new Promise( (resolve) => {
	      
	        util.ajax.get(
	        	url).then((body)=>{
	        		
		          if(body){
		            resolve(body)
		          }else{
		            resolve(null)
		          }
		        }, (error)=>{
		          resolve(null)
		          console.error(requestName,error);
		        })
	    })
    	return promise
	},
	getJsonpPromise(url='',params={},requestName=''){
		let ret = {
			success:false,
			message:requestName+'请求错误',
			data:[]
		}
	    let promise = new Promise( (resolve) => {
	      
	        Vue.http.jsonp(util.serverPath+url,{
		        	method:'GET',
		        	headers: { 'content-type': 'application/x-www-form-urlencoded' },
		        	params:params,
		        	credientials:false,
		        	emulateJSON:true
	        	}).then((body)=>{
	        		
		          if(body.data){
		            resolve(body.data)
		          }else{
		            resolve(ret)
		          }
		        }, (error)=>{
		        	ret.message=error;
		          	resolve(ret)
		          	console.log(requestName,error);
		        })
	    })
    	return promise
	},
	postPromise(url='',formData={},requestName=''){
		let ret = {
			success:false,
			message:'',
			data:[]
		}
	    let promise = new Promise( (resolve) => {
	      
	        util.ajax.request({
	          url: url,
	          method: 'post',
	          headers: { 'content-type': 'application/x-www-form-urlencoded' },
	          data: qs.stringify(formData)
	        }).then((body)=>{
		          if(body.data.success){
		            resolve(body.data)
		          }else{
		            resolve(body.data)
		          }
		        }, (error)=>{
		        	ret.message=error;
		          	resolve(ret)
		          	console.error(requestName,error);
		        })
	    })
    	return promise
	},
	postPromise1(url='',formData={},requestName=''){
		let ret = {}
	    let promise = new Promise( (resolve) => {
	    	//let pData=JSON.stringify(formData);
	        Vue.http.post(util.serverPath+url,qs.stringify(formData),{
	        	headers: { 'content-type': 'application/x-www-form-urlencoded' }
	        }).then((body)=>{
		          if(body.data.success){
		            resolve(body.data)
		          }else{
		            resolve(body.data)
		          }
		        }, (error)=>{
		          resolve(ret)
		          console.log(requestName,error);
		        })
	    })
    	return promise
	},
	DateFormat(date,fmt) {
		var date=new Date(date); 
	    var o = {
	        "M+": date.getMonth() + 1, //月份 
	        "d+": date.getDate(), //日 
	        "H+": date.getHours(), //小时 
	        "m+": date.getMinutes(), //分 
	        "s+": date.getSeconds(), //秒 
	        "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
	        "S": date.getMilliseconds() //毫秒 
	    };
	    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
	    for (var k in o)
	    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	    return fmt;
	},
	is7nImage(url){

		if(!url){
			return false;
		}
		if(url.indexOf('?imageView2/1/w/')>-1){
			return true;
		}else{
			return false;
		}
	},
	uploadFormat(){
		return ['jpg','jpeg','png','doc','docx','txt','ppt','pptx','xls','xlsx','pdf','dwg'];
	},
	getFileType(v){
    	if(!v){
    		return null;
    	}
    	let l=v.lastIndexOf('.');
    	switch(v.substr(l).toLocaleLowerCase()){
    		case '.doc':
    		case '.docx':
    			return require('../imgs/doc.png');
    		case '.dwg':
    			return require('../imgs/noimg.png');
			case '.pdf':
    			return require('../imgs/pdf.png');
			case '.ppt':
			case '.pptx':
    			return require('../imgs/noimg.png');
			case '.xls':
			case '.xlsx':
    			return require('../imgs/xls.png');
    		case '.zip':
    			return require('../imgs/zip.png');
    		case '.jpg':
    		case '.png':
    			return this.image.thumb(v,60,60);
    		case '.txt':
    			return require('../imgs/txt.png');
    		default :
    			return require('../imgs/noimg.png');

    	}
    },
	image: {
	    thumb(src, width, height) {
	      width = width || 320
	      height =height || 200
	      if(!src){ 
	        return ''
	      }
	      src+='?imageView2/1/w/320/h/200/format/webp/interlace/0/q/50';
	      /*
	      src += `?imageMogr2/format/jpg/interlace/1/quality/75/gravity/Center/thumbnail/${width}x`
	      if(height){
	        src += `/crop/x${height}`
	      }*/
	      return src
	    },
	    thumbyWidth(src, width) {
	      width = width || 320
	      if(!src){ 
	        return ''
	      }
	      src += `?imageMogr2/thumbnail/${width}x/format/jpg/blur/1x0/quality/75|imageslim`
	      return src
	    }
	},
	isCanUseCoupon(total,discount,cashCounpon,coupon){
		this.isCanUse=false;
		this.msg='';
		//（总金额*折扣-优惠券）*0.1 >=可使用现金券金额
		if((parseFloat(total)*parseFloat(discount)-parseFloat(cashCounpon))*0.1>=parseFloat(coupon))
		{
			this.isCanUse= true;
		}else{
			this.msg='现金券不能超过：'+(parseFloat(total)*parseFloat(discount)-parseFloat(cashCounpon))*0.1+'元，请重新选择现金券';
			this.isCanUse=false;
			
		}
		
	},
	getMenuKeyBySrc(list=[],src=''){
		let keys={
			topKey:0,
			leftKey:0
		}
		if(!src){
			return keys;
		}
		for(var i=0;i<list.length;i++){
			if(list[i].levelNum===2 && list[i].src===src){
				keys.leftKey=list[i].id;
				keys.topKey=list[i].parentId;
				return keys ;
			}else if(list[i].children && list[i].children.length>0){
				for(var j=0;j<list[i].children.length;j++){
                    if(list[i].children[j].levelNum===2 && list[i].children[j].src===src){
                        keys.topKey=list[i].children[j].parentId;
                        keys.leftKey=list[i].children[j].id;
                        return keys;
                    }
                }
			}
		}
		return keys;
	},
	getForChild(list=[],src=''){
        let keys={
            topKey:0,
            leftKey:0
        }
        //console.log('getForChild',src)
        for(var i=0;i<list.length;i++){
               // console.log(list[i].menuName,list[i].id);
            
            if(list[i].levelNum===2 && list[i].src===src && list[i].type===1){
                //console.log(list[i].menuName,list[i].id,list[i].parentId);
                keys.topKey=list[i].parentId;
                keys.leftKey=list[i].id;
                return keys;
            }else if(list[i].children && list[i].children[0]){
                for(var j=0;j<list[i].children.length;j++){
                   // console.log(list[i].children[j].menuName,list[i].children[j].id);
                    if(list[i].children[j].levelNum===2 && list[i].children[j].src===src && list[i].children[j].type===1){
                        //console.log(list[i].children[j].menuName,list[i].children[j].id,list[i].children[j].parentId);
                        keys.topKey=list[i].children[j].parentId;
                        keys.leftKey=list[i].children[j].id;
                        return keys;
                    }
                }
                
            }
        }
        return keys;
    },
    getMenuActionList(src=''){
    	return this.getActList(storage.session.get('menuList'),src);
    },
    getActList(list=[],src=''){
    	let _list=[];
    	for(var i=0;i<list.length;i++){
    		if(list[i].levelNum===2&&list[i].type===1&&list[i].src===src){
    			if(list[i].children && list[i].children[0]){
    				_list=list[i].children;
    			}
    			return _list;
    		}else if(list[i].children && list[i].children[0]){
    			for(var j=0;j<list[i].children.length;j++){
    				if(list[i].children[j].levelNum===2&&list[i].children[j].type===1&&list[i].children[j].src===src){
    					if(list[i].children[j].children && list[i].children[j].children[0]){
    						_list=list[i].children[j].children;
    					}
    					return _list;
    				}
    			}
    		}
    	}
    	return _list;
    },
	getBaseUrl(){
		return util.serverPath;
	},
	getDict(dicType='',parentId=null){
		let params={
			dicType
		}
		if(parentId){
			params.parentId=parentId;
		}
    	return this.getPromise(serverPath.getDict,params,'getDict');
	},
	//获取组织机构
	getOrgList(parentId=null){
		if(parentId){
	    	return this.getPromise(serverPath.getOrgList,{parentId},'getOrgList');
		}
		else{
	    	return this.getPromise(serverPath.getOrgList,'getOrgList');
		}
	},
	//门店展示管理
	getStoreList(page=1,rows=10,storeNameLike=''){
    	return this.getPromise(serverPath.getStoreList,{page,rows,storeNameLike},'getStoreList');
	},
	getAgentUserList(){
    	return this.getPromise(serverPath.getAgentUserList,{},'getAgentUserList');
	},
	getStoreAllList(){
    	return this.getPromise(serverPath.getStoreAllList,{},'getStoreList');
	},
	getStoreListByid(id){
    	return this.getPromise(serverPath.getStoreListByid,{id},'getStoreListByid');
	},
	addStore(formData){
    	return this.postPromise(serverPath.addStore,formData,'addStore');
	},
	updateStore(formData){
    	return this.postPromise(serverPath.updateStore,formData,'updateStore');
	},
	deleteStoreByid(id){
    	return this.postPromise(serverPath.deleteStoreByid,{id},'deleteStoreByid');
	},
	//根据中文地址获取经纬度
	getGpsByAddress(address){
    	return this.postPromise(serverPath.getGpsByAddress,{address},'getGpsByAddress');
	},
	//登录
	login(formData){
		let _list={
			userName:formData.userName,
			pwd:formData.pwd,
			validateCode:formData.validateCode
		}
    	return this.postPromise(serverPath.login,_list,'login');
	},
	//登出
	loginOut(){
    	return this.postPromise(serverPath.loginOut,{},'loginOut');
	},
	//艾臣资讯管理
	getPublish(searchData){
		searchData.type=3;
    	return this.getPromise(serverPath.getPublish,searchData,'getPublish');
	},
	getAllPublish(){
    	return this.getPromise(serverPath.getAllPublish,{type:3},'getAllPublish');
	},
	getPublishByid(id){
    	return this.getPromise(serverPath.getPublishByid,{type:3,id},'getPublishByid');
	},
	addPublish(formData){
		let _list={
    		thumb:formData.thumb,   //缩略图
		  	summary:formData.summary, //摘要
		  	title:formData.title,     //标题
		  	content:formData.content,     //内容
		  	type:3    //类别:1通知公告 2：新闻动态 3、艾臣资讯
    	}
    	return this.postPromise(serverPath.addPublish,_list,'addPublish');
	},
	updatePublish(formData){
		let _list={
    		id:formData.id,
    		thumb:formData.thumb,   //缩略图
		  	summary:formData.summary, //摘要
		  	title:formData.title,     //标题
		  	content:formData.content,     //内容
		  	type:3    //类别:1通知公告 2：新闻动态 3、艾臣资讯
    	}
    	return this.postPromise(serverPath.updatePublish,_list,'updatePublish');
	},
	deletePublishByid(id){
    	return this.postPromise(serverPath.deletePublishByid,{id},'deletePublishByid');
	},
	publish(id){
    	return this.postPromise(serverPath.publish,{id},'publish');
	},
	//产品介绍管理
	getProduct(page=1,rows=10,category=-1,productNameLike=''){
    	return this.getPromise(serverPath.getProduct,{page,rows,category,productNameLike},'getProduct');
	},
	getAllProduct(category=-1,productNameLike=''){
    	return this.getPromise(serverPath.getAllProduct,{category,productNameLike},'getAllProduct');
	},
	getProductByid(id){
    	return this.getPromise(serverPath.getProductByid,{id},'getProductByid');
	},
	addProduct(formData){
		let _list={
    		seq:formData.seq,
    		category:formData.category,
		  	categoryName:formData.categoryName,
		  	thumbnail:formData.thumbnail,
		  	productName:formData.productName,
		  	productProp:formData.productProp,
		  	application:formData.application,
		  	params:formData.params,
		  	videoTitle:formData.videoTitle,
		  	videoThum:formData.videoThum,
		  	videoDesc:formData.videoDesc,
		  	videoUrl:formData.videoUrl,
		  	pictureShowsItem:formData.pictureShows,
		  	pictureDescItem:formData.pictureDesc
    	}
    	return this.postPromise(serverPath.addProduct,_list,'addProduct');
	},
	updateProduct(formData){
		let _list={
			id:formData.id,
    		seq:formData.seq,
    		category:formData.category,
		  	categoryName:formData.categoryName,
		  	thumbnail:formData.thumbnail,
		  	productName:formData.productName,
		  	productProp:formData.productProp,
		  	application:formData.application,
		  	params:formData.params,
		  	videoTitle:formData.videoTitle,
		  	videoThum:formData.videoThum,
		  	videoDesc:formData.videoDesc,
		  	videoUrl:formData.videoUrl,
		  	pictureShowsItem:formData.pictureShows,
		  	pictureDescItem:formData.pictureDesc
    	}
    	return this.postPromise(serverPath.updateProduct,_list,'updateProduct');
	},
	delProduct(id){
    	return this.postPromise(serverPath.delProduct,{id},'delProduct');
	},
	//会员反馈管理
	getFeedback(searchData){
		let feedbackerType=4;
		if(util.env=='development'){
			feedbackerType=''
		}
		return this.getPromise(serverPath.getFeedback,searchData,'getFeedback');
	},
	getAllFeedback(feedbackTimeStr='',feedbackTimeBegin='',feedbackTimeEnd=''){
		return this.getPromise(serverPath.getAllFeedback,{feedbackerType:4,feedbackTimeStr,feedbackTimeBegin,feedbackTimeEnd},'getAllFeedback');
	},
	getFeedbackByid(id){
    	return this.getPromise(serverPath.getFeedbackByid,{id},'getFeedbackByid');
	},
	feedBackReply(feedBackId=null,replyCont=''){
    	return this.postPromise(serverPath.feedBackReply,{feedBackId,replyCont},'feedBackReply');
	},
	//常见问题管理
	getHelp(page=1,rows=10,type=null){
		return this.getPromise(serverPath.getHelp,{page,rows,type},'getHelp');
	},
	getAllHelp(type=null){
		return this.getPromise(serverPath.getAllHelp,{type},'getAllHelp');

	},
	getHelpByid(id){
		return this.getPromise(serverPath.getHelpByid,{id},'getHelpByid');
	},
	addHelp(formData){
		let _list={
		 seq:formData.seq,
		 question:formData.question,
		 answer:formData.answer,
		 type:formData.type
		}
    	return this.postPromise(serverPath.addHelp,formData,'addHelp');
	},
	updateHelp(formData){
    	return this.postPromise(serverPath.updateHelp,formData,'updateHelp');
	},
	delHelp(id){
    	return this.postPromise(serverPath.delHelp,{id},'delHelp');
	},
	//优惠券活动配置
	getCoupon(page=1,rows=10,activityType=null,state=null){

		return this.getPromise(serverPath.getCoupon,{page,rows,activityType,state},'getCoupon');
	},
	getAllCoupon(activityType=null,state=null){

		return this.getPromise(serverPath.getAllCoupon,{activityType,state},'getAllCoupon');
	},
	getCouponByid(id){

		return this.getPromise(serverPath.getCouponByid,{id},'getCouponByid');
	},
	addCoupon(formData){
		let _list={
			activityType:formData.activityType,             //类型：1线上活动    2线下活动    3电商活动
			title:formData.title,                     //活动标题 	
			summary:formData.summary,                  //活动摘要
			location:formData.location,                  //活动地点
			limitNum:formData.limitNum,                //活动人数限制
			url:formData.url,                       //活动图
			content:formData.content,                  //活动内容
			couponFkid:formData.couponFkid,              //优惠券配置id
			area:formData.area,                     //区域
			province:formData.province,                 //省会
			provinceId:formData.provinceId,              //省会id
			city:formData.city,                     //城市
			cityId:formData.cityId,                  //城市id
			cityCode:formData.cityCode,                 //城市编码
			areaId:formData.areaId,                  //区域id
			startTimeStr:formData.startTimeStr,              //活动开始时间           		
			endTimeStr:formData.endTimeStr             //活动结束时间
		}
    	return this.postPromise(serverPath.addCoupon,_list,'addCoupon');
	},
	updateCoupon(formData){
		let _list={
			id:formData.id,
			activityType:formData.activityType,             //类型：1线上活动    2线下活动    3电商活动
			title:formData.title,                     //活动标题 	
			summary:formData.summary,                  //活动摘要
			location:formData.location,                  //活动地点
			limitNum:formData.limitNum,                //活动人数限制
			url:formData.url,                       //活动图
			content:formData.content,                  //活动内容
			couponFkid:formData.couponFkid,              //优惠券配置id
			area:formData.area,                     //区域
			province:formData.province,                 //省会
			provinceId:formData.provinceId,              //省会id
			city:formData.city,                     //城市
			cityId:formData.cityId,                  //城市id
			cityCode:formData.cityCode,                 //城市编码
			areaId:formData.areaId,                  //区域id
			startTimeStr:formData.startTimeStr,              //活动开始时间           		
			endTimeStr:formData.endTimeStr             //活动结束时间
		}
    	return this.postPromise(serverPath.updateCoupon,_list,'updateCoupon');
	},
	applyCoupon(id){
    	return this.postPromise(serverPath.applyCoupon,{id},'applyCoupon');
	},
	verifyCoupon(id,isPass,curAuditOpinion=null){
    	return this.postPromise(serverPath.verifyCoupon,{id,isPass,curAuditOpinion},'verifyCoupon');
	},
	changeCoupon(id){
    	return this.postPromise(serverPath.changeCoupon,{id},'changeCoupon');
	},
	//优惠券明细配置
	getAllCouponDetail(couponType=1,isEnabled=1){
		return this.getPromise(serverPath.getAllCouponDetail,{couponType,isEnabled},'getAllCouponDetail');
	},
	getCouponDetail(page=1,rows=10,couponType=null,isEnabled=null){
		return this.getPromise(serverPath.getCouponDetail,{page,rows,couponType,isEnabled},'getCouponDetail');
	},
	getCouponDetailByid(id){
		return this.getPromise(serverPath.getCouponDetailByid,{id},'getCouponDetailByid');
	},
	addCouponDetail(formData){
		let _list={
			couponName:formData.couponName,
			couponType:formData.couponType,
			couponValue:formData.couponValue,
			ruleDesc:formData.ruleDesc,
			notice:formData.notice,
			serviceTel:formData.serviceTel,
			comments:formData.comments,
			startTimeStr:formData.startTimeStr,
			endTimeStr:formData.endTimeStr
		}
		if(formData.couponRuleList){
			formData.couponRuleList.forEach((item,index)=>{
				if(item.deratePrice){
					_list["couponRuleList["+index+"].deratePrice"]=item.deratePrice;
					_list["couponRuleList["+index+"].startPrice"]=item.startPrice;
					_list["couponRuleList["+index+"].endPrice"]=item.endPrice;
				}
			})
			
		}
    	return this.postPromise(serverPath.addCouponDetail,_list,'addCouponDetail');

	},
	updateCouponDetail(formData){
		let _list={
			id:formData.id,
			couponName:formData.couponName,
			couponType:formData.couponType,
			couponValue:formData.couponValue,
			ruleDesc:formData.ruleDesc,
			notice:formData.notice,
			serviceTel:formData.serviceTel,
			comments:formData.comments,
			startTimeStr:formData.startTimeStr,
			endTimeStr:formData.endTimeStr
		}
		if(formData.couponRuleList){
			formData.couponRuleList.forEach((item,index)=>{
				if(item.deratePrice){
					_list["couponRuleList["+index+"].id"]=item.id;
					_list["couponRuleList["+index+"].deratePrice"]=item.deratePrice;
					_list["couponRuleList["+index+"].startPrice"]=item.startPrice;
					_list["couponRuleList["+index+"].endPrice"]=item.endPrice;
				}
			})
			
		}
    	return this.postPromise(serverPath.updateCouponDetail,_list,'updateCouponDetail');
	},
	changeCouponDetail(id,isEnabled=1){
    	return this.postPromise(serverPath.changeCouponDetail,{id,isEnabled},'changeCouponDetail');

	},
	//获取礼品管理
	getGiftSend(page=1,rows=10,createTime=null,updateTime=null,consigneePhoneLike=null,consigneeLike=null){
		return this.getPromise(serverPath.getGiftSend,{page,rows,createTime,updateTime,consigneePhoneLike,consigneeLike},'getGiftSend');

	},
	getAllGiftSend(createTime=null,updateTime=null,consigneePhoneLike=null,consigneeLike=null){
		return this.getPromise(serverPath.getAllGiftSend,{createTime,updateTime,consigneePhoneLike,consigneeLike},'getAllGiftSend');

	},
	getActInfo(id){
		return this.getPromise(serverPath.getActInfo,{id},'getActInfo');

	},
	upateGiftSendState(id){
    	return this.postPromise(serverPath.upateGiftSendState,{id},'upateGiftSendState');

	},
	//合伙人账号管理
	getParnerAccount(formData){
		return this.getPromise(serverPath.getParnerAccount,formData,'getParnerAccount');
	},
	getAllParnerAccount(formData){
		return this.getPromise(serverPath.getAllParnerAccount,formData,'getAllParnerAccount');

	},
	getParnerAccountByid(id){
		return this.getPromise(serverPath.getParnerAccountByid,{id},'getParnerAccountByid');
	},
	verifyParnerAccount(id,isPass=false){
    	return this.postPromise(serverPath.verifyParnerAccount,{id,isPass},'verifyParnerAccount');

	},
	//现金券配置管理
	getCouponConfig(searchData){
		return this.getPromise(serverPath.getCouponConfig,searchData,'getCouponConfig');

	},
	getAllCouponConfig(searchData){
		return this.getPromise(serverPath.getAllCouponConfig,searchData,'getAllCouponConfig');

	},
	getCouponConfigByid(id){
		return this.getPromise(serverPath.getCouponConfigByid,{id},'getCouponConfigByid');

	},
	addCouponConfig(formData){
		let _list={
			couponName:formData.couponName,//券名
			couponValue:formData.couponValue,//券面值
			achieveMoney:formData.achieveMoney,//满足多少钱可以使用
			remark:formData.remark,//备注
			effectDays:formData.effectDays//有效天数
		}
    	return this.postPromise(serverPath.addCouponConfig,_list,'addCouponConfig');

	},
	updateCouponConfig(formData){
		let _list={
			id:formData.id,
			couponName:formData.couponName,//券名
			couponValue:formData.couponValue,//券面值
			achieveMoney:formData.achieveMoney,//满足多少钱可以使用
			remark:formData.remark,//备注
			effectDays:formData.effectDays//有效天数
		}
    	return this.postPromise(serverPath.updateCouponConfig,_list,'updateCouponConfig');

	},
	delCouponConfig(id){
    	return this.postPromise(serverPath.delCouponConfig,{id},'delCouponConfig');

	},
	upDownCouponConfig(id){
    	return this.postPromise(serverPath.upDownCouponConfig,{id},'upDownCouponConfig');

	}
	//现金券使用情况管理
	,
	getParnerCoupon(searchData){
		return this.getPromise(serverPath.getParnerCoupon,searchData,'getParnerCoupon');

	},
	getParnerAllCoupon(searchData){
		return this.getPromise(serverPath.getParnerAllCoupon,searchData,'getParnerAllCoupon');
	}
	//公告发布管理
	,
	getNotice(searchData){
		return this.getPromise(serverPath.getNotice,searchData,'getNotice');

	},
	getNoticeByid(id){
		return this.getPromise(serverPath.getNoticeByid,{id},'getNoticeByid');

	},
	addNotice(formData){
		let _list={
			title:formData.title,
			content:formData.content
		}
    	return this.postPromise(serverPath.addNotice,_list,'addNotice');

	},
	updateNotice(formData){
		let _list={
			id:formData.id,
			title:formData.title,
			content:formData.content
		}
    	return this.postPromise(serverPath.updateNotice,_list,'updateNotice');

	},
	delNotice(id){
    	return this.postPromise(serverPath.delNotice,{id},'delNotice');

	},
	publishNotice(id){
    	return this.postPromise(serverPath.publishNotice,{id},'publishNotice');

	}
	//现金券申请管理
	,
	getCouponApply(searchData){
		return this.getPromise(serverPath.getCouponApply,searchData,'getCouponApply');

	},
	verifyCouponApply(id,isPass=false){
    	return this.postPromise(serverPath.verifyCouponApply,{id,isPass},'verifyCouponApply');

	}
	//分红管理
	,
	getParnerBonus(searchData){
		return this.getPromise(serverPath.getParnerBonus,searchData,'getParnerBonus');

	},
	addParnerBonus(formData){
		let _list={
			accountId:formData.id,
			wallet:formData.walletNew,
			attachUrl:formData.attachUrl
		}
    	return this.postPromise(serverPath.addParnerBonus,_list,'addParnerBonus');

	},
	//根据当前登录人信息查询用户信息
	getLoginerInfo(){
		return this.getPromise(serverPath.getLoginerInfo,'getLoginerInfo');

	},
	//更新当前登录人用户信息
	updateLoginerInfo(formData){
		let _list={
			id:formData.id,//主键
			realName:formData.realName,//姓名
			sex:formData.sex,//性别 ：true男 false 女
			orgName:formData.orgName,//所属部门名称
			orgId:formData.orgId,//所属部门id
			fixedPhone:formData.fixedPhone,//固定电话
			mobilePhone:formData.mobilePhone,//移动电话
			email:formData.email,//电子邮箱
			qq:formData.qq,//qq号码
			birthdayStr:formData.birthdayStr//出生日期
		}
		if(formData.agentName){
			_list={
				id:formData.id,//主键
				userId:formData.userId,//用户id
				agentName:formData.agentName,//代理商名称
				agentCode:formData.agentCode,//代理商编号
				province:formData.province,//省会
				provinceId:formData.provinceId,//省会id
				city:formData.city,//城市
				cityId:formData.cityId,//城市id
				area:formData.area,//区域
				areaId:formData.areaId,//区域id
				contacter:formData.contacter,//联系人
				contactPhone:formData.contactPhone,//联系电话
				sex:formData.sex,//性别：true男 false 女
				birthdayStr:formData.birthdayStr,//出生日期
				certificateNo:formData.certificateNo,//证件号
				address:formData.address,//地址
				products:formData.products,//代理产品，用“,”隔开
				productIds:formData.productIds//代理产品ids，用“,”隔开
			}
		}
    	return this.postPromise(serverPath.updateLoginerInfo,_list,'updateLoginerInfo');
	},
	//修改我的密码
	updateMyPwd(formData){
		let _list={
			oldPassWord:formData.oldPassWord,//旧密码
			newPassWord:formData.newPassWord,//新密码
			secondPassWord:formData.secondPassWord//确认密码
		}
    	return this.postPromise(serverPath.updateMyPwd,_list,'updateMyPwd');
	},
	//经销商管理
	getAgentList(searchData){
		return this.getPromise(serverPath.getAgentList,searchData,'getAgentList');
	},
	getAgentAll(searchData){
		return this.getPromise(serverPath.getAgentAll,searchData,'getAgentAll');
	},
	getAgentByid(id){
		return this.getPromise(serverPath.getAgentByid,{id},'getAgentByid');
	},
	addAgent(formData){
		let _list={
		userName:formData.userName,
		agentName:formData.agentName,//代理商名称
		//agentCode:formData.agentCode,//代理商编号
		province:formData.province,//省会
		provinceId:formData.provinceId,//省会id
		city:formData.city,//城市
		cityId:formData.cityId,//城市id
		area:formData.area,//区域
		areaId:formData.areaId,//区域id
		contacter:formData.contacter,//联系人
		contactPhone:formData.contactPhone,//联系电话
		//sex:formData.sex,//性别
		birthday:formData.birthday,//出生日期
		//certificateNo:formData.certificateNo,//证件号
		address:formData.address,//地址
		products:formData.products,//代理产品，用“,”隔开
		productIds:formData.productIds,//代理产品ids，用“,”隔开
		isAgent:formData.isAgent,//是否代理商：false:直营    true:非直营
		pwd:formData.pwd,//密码
		confirmPwd:formData.confirmPwd//确认密码

		}
    	return this.postPromise(serverPath.addAgent,_list,'addAgent');
	},
	updateAgent(formData){
		let _list={
		id:formData.id,//主键
		userId:formData.userId,//用户id
		agentName:formData.agentName,//代理商名称
		agentCode:formData.agentCode,//代理商编号
		province:formData.province,//省会
		provinceId:formData.provinceId,//省会id
		city:formData.city,//城市
		cityId:formData.cityId,//城市id
		area:formData.area,//区域
		areaId:formData.areaId,//区域id
		contacter:formData.contacter,//联系人
		contactPhone:formData.contactPhone,//联系电话
		sex:formData.sex,//性别
		//birthday:formData.birthday,//出生日期
		certificateNo:formData.certificateNo,//证件号
		address:formData.address,//地址
		products:formData.products,//代理产品，用“,”隔开
		productIds:formData.productIds,//代理产品ids，用“,”隔开
		isAgent:formData.isAgent,//是否代理商：false:直营    true:非直营
		
		}
		if(formData.pwd){
			_list.pwd=formData.pwd;
			_list.confirmPwd=formData.confirmPwd;
		}
    	return this.postPromise(serverPath.updateAgent,_list,'updateAgent');
	},
	changeAgent(id,status){
    	return this.postPromise(serverPath.changeAgent,{id,status},'changeAgent');
	},

	//人员管理
	getStaffList(searchData){
		return this.getPromise(serverPath.getStaffList,searchData,'getStaffList');
	},
	getStaffAll(searchData){
		return this.getPromise(serverPath.getStaffAll,searchData,'getStaffAll');
	},
	getStaffByid(id){
		return this.getPromise(serverPath.getStaffByid,{id},'getStaffByid');

	},
	addStaff(formData){
		let _list={
			staffName:formData.staffName,//员工姓名
			staffPhone:formData.staffPhone,//员工电话
			remark:formData.remark//备注
		}
		if(formData.sourceId){
			_list.sourceId=formData.sourceId;
			_list.source=formData.source;
		}
		return this.postPromise(serverPath.addStaff,_list,'addStaff');
	},
	updateStaff(formData){
		let _list={
			id:formData.id,//主键
			staffName:formData.staffName,//员工姓名
			staffPhone:formData.staffPhone,//员工电话
			remark:formData.remark//备注
		}
		if(formData.sourceId){
			_list.sourceId=formData.sourceId;
			_list.source=formData.source;
		}
		return this.postPromise(serverPath.updateStaff,_list,'updateStaff');
	},
	changeStaff(id){
		return this.postPromise(serverPath.changeStaff,{id},'changeStaff');

	},
	//备忘录
	getMemoList(searchData){
		return this.getPromise(serverPath.getMemoList,searchData,'getMemoList');
	},
	getMemoAll(searchData){
		return this.getPromise(serverPath.getMemoAll,searchData,'getMemoAll');
	},
	getMemoByid(id){
		return this.getPromise(serverPath.getMemoByid,{id},'getMemoByid');
	},
	addMemo(formData){
		let _list={
			content:formData.content,//备忘内容  
			memoTimeStr:formData.memoTimeStr,//备忘时间
			memoLevel:formData.memoLevel//备忘级别 :1一般 2中级 3高级
		}
		return this.postPromise(serverPath.addMemo,_list,'addMemo');
	},
	updateMemo(formData){
		let _list={
			id:formData.id,
			content:formData.content,//备忘内容  
			memoTimeStr:formData.memoTimeStr,//备忘时间
			memoLevel:formData.memoLevel//备忘级别 :1一般 2中级 3高级
		}
		return this.postPromise(serverPath.updateMemo,_list,'updateMemo');
	},
	delMemo(id){
		return this.postPromise(serverPath.delMemo,{id},'delMemo');

	},
	//客户管理
	getOwnerList(searchData){
		return this.getPromise(serverPath.getOwnerList,searchData,'getOwnerList');
	},
	getOwnerByid(id){
		return this.getPromise(serverPath.getOwnerByid,{id},'getOwnerByid');

	},
	addOwner(formData){
		let _list={
			name:formData.name,//客户姓名
			mobilePhone:formData.mobilePhone,//客户电话
			decorateProject:formData.decorateProject,//装修项目，以，隔开
			province:formData.province,//省会
			provinceId:formData.provinceId,//省会id
			city:formData.city,//城市
			cityId:formData.cityId,//城市id
			area:formData.area,//区域
			areaId:formData.areaId,//区域id
			address:formData.address,//详细地址
			remark:formData.remark,//备注
			belongIds:formData.belongIds,//客户归属id集合，以，隔开
			belongNames:formData.belongNames//客户归属集合，以，隔开
		}
		if(formData.attachList){
			formData.attachList.forEach((item,index)=>{
				if(item.attachAddress){
					_list["attachList["+index+"].attachAddress"]=item.attachAddress;
					_list["attachList["+index+"].attachName"]=item.attachName;
				}
			})
			
		}
		return this.postPromise(serverPath.addOwner,_list,'addOwner');

	},
	updateOwner(formData){
		let _list={
			id:formData.id,//主键
			name:formData.name,//客户姓名
			mobilePhone:formData.mobilePhone,//客户电话
			decorateProject:formData.decorateProject,//装修项目，以，隔开
			province:formData.province,//省会
			provinceId:formData.provinceId,//省会id
			city:formData.city,//城市
			cityId:formData.cityId,//城市id
			area:formData.area,//区域
			areaId:formData.areaId,//区域id
			address:formData.address,//详细地址
			remark:formData.remark,//备注
			belongIds:formData.belongIds,//客户归属id集合，以，隔开
			belongNames:formData.belongNames//客户归属集合，以，隔开
		}
		if(formData.attachList){
			formData.attachList.forEach((item,index)=>{
				if(item.attachAddress){
					_list["attachList["+index+"].attachAddress"]=item.attachAddress;
					_list["attachList["+index+"].attachName"]=item.attachName;
				}
			})
			
		}
		return this.postPromise(serverPath.updateOwner,_list,'updateOwner');

	},
	delOwner(id){
		return this.postPromise(serverPath.delOwner,{id},'delOwner');

	},
	//预约管理
	getAppointmentList(searchData){
		return this.getPromise(serverPath.getAppointmentList,searchData,'getAppointmentList');

	},
	getAppointByid(appointId){
		return this.getPromise(serverPath.getAppointByid,{appointId},'getAppointByid');
	},
	addAppoint(formData){
		let _list={
			name:formData.name,//姓名（联系人）
			mobilePhone:formData.mobilePhone,//手机号码
			province:formData.province,//省会
			provinceId:formData.provinceId,//省会id
			city:formData.city,//城市
			cityId:formData.cityId,//城市id
			area:formData.area,//区域
			areaId:formData.areaId,//区域id
			address:formData.address,//预约地址
			designer:formData.designer,//设计师名称
			designerPhone:formData.designerPhone,//设计师联系电话
			remark:formData.remark,//备注
			homeTimeStr:formData.homeTime,//上门时间
			decoratingTimeStr:formData.decoratingTime,//预计装修时间
			byAgent:formData.byAgent,//所属代理商
			byAgentUserId:formData.byAgentUserId,//所属代理商用户id
			state:formData.state,//状态：
			decorateProject:formData.decorateProject,//装修项目内容
			decorateProjectTypes:formData.decorateProjectTypes,//装修项目内容类型
			budgetRange:formData.budgetRange,//工程预算范围
			isAgent:formData.isAgent,//是否代理商：false:直营    true:非直营
			isOnlySave:formData.isOnlySave,//是否只是保存，true 只保存

		}
		return this.postPromise(serverPath.addAppoint,_list,'addAppoint');
	},
	saveAppoint(formData){
		let _list={
			id:formData.id,
			name:formData.name,//姓名（联系人）
			mobilePhone:formData.mobilePhone,//手机号码
			province:formData.province,//省会
			provinceId:formData.provinceId,//省会id
			city:formData.city,//城市
			cityId:formData.cityId,//城市id
			area:formData.area,//区域
			areaId:formData.areaId,//区域id
			address:formData.address,//预约地址
			designer:formData.designer,//设计师名称
			designerPhone:formData.designerPhone,//设计师联系电话
			remark:formData.remark,//备注
			homeTimeStr:formData.homeTime,//上门时间
			decoratingTimeStr:formData.decoratingTime,//预计装修时间
			byAgent:formData.byAgent,//所属代理商
			byAgentUserId:formData.byAgentUserId,//所属代理商用户id
			state:formData.state,//状态：
			decorateProject:formData.decorateProject,//装修项目内容
			decorateProjectTypes:formData.decorateProjectTypes,//装修项目内容类型
			budgetRange:formData.budgetRange,//工程预算范围
			isAgent:formData.isAgent,//是否代理商：false:直营    true:非直营
			isOnlySave:formData.isOnlySave,//是否只是保存，true 只保存

		}

		return this.postPromise(serverPath.saveAppoint,_list,'saveAppoint');
	},
	ownerSaveAppoint(formData){
		let _list={
			id:formData.id,//主键  
			state:formData.state,//状态：
			isOnlySave:formData.isOnlySave,//是否只是保存，true 只保存
			billCode:formData.billCode,
			agentRemark:formData.agentRemark

		}
		if(formData.couponIds){
			_list.couponIds=formData.couponIds;
		}
		
		if(formData.costVoList){
			formData.costVoList.forEach((item,index)=>{
				if(item.costType){
					if(item.id){
						_list["costVoList["+index+"].id"]=item.id;
					}
					_list["costVoList["+index+"].costType"]=item.costType;
					_list["costVoList["+index+"].costValue"]=item.costValue;
					_list["costVoList["+index+"].desc"]=item.desc;
				}
			})
			
		}
		if(formData.attachmentVoList){
			formData.attachmentVoList.forEach((item,index)=>{
				if(item.attachAddress){
					if(item.id){
						_list["attachmentVoList["+index+"].id"]=item.id;
					}
					_list["attachmentVoList["+index+"].attachAddress"]=item.attachAddress;
					_list["attachmentVoList["+index+"].attachName"]=item.attachName;
				}
			})
			
		}

		return this.postPromise(serverPath.ownerSaveAppoint,_list,'ownerSaveAppoint');
	},
	delAppoint(id){
		return this.postPromise(serverPath.delAppoint,{id},'delAppoint');
	},
	restoreAppoint(id){
		return this.postPromise(serverPath.restoreAppoint,{id},'restoreAppoint');
	},
	nextAppoint(id){
		return this.postPromise(serverPath.nextAppoint,{id},'nextAppoint');
	},
	//订单管理
	getOrderList(searchData){
		return this.getPromise(serverPath.getOrderList,searchData,'getOrderList');
	},
	getOrderByid(id){
		return this.getPromise(serverPath.getOrderByid,{id},'getOrderByid');
	},
	getOrderInfo(orderId){
		return this.getPromise(serverPath.getOrderInfo,{orderId},'getOrderInfo');
	},
	changeOrder(id,state){
		//1：确认订单 2：生产中 3：产品入库 4：已发货 5：已收货
		return this.postPromise(serverPath.changeOrder,{id,state},'changeOrder');
	},
	ownerAddOrder(formData){
		let _list={
			name:formData.name,//姓名（联系人）
			mobilePhone:formData.mobilePhone,//手机号码
			province:formData.province,//省会
			provinceId:formData.provinceId,//省会id
			city:formData.city,//城市
			cityId:formData.cityId,//城市id
			area:formData.area,//区域
			areaId:formData.areaId,//区域id
			address:formData.address,//预约地址
			decorateProject:formData.decorateProject,//装修项目内容
			decorateProjectTypes:formData.decorateProjectTypes,//装修项目内容类型
			agentRemark:formData.agentRemark,
			remark:formData.remark,//
			isOnlySave:formData.isOnlySave,//是否只是保存，true 只保存
			//billCode:formData.billCode

		}
		if(formData.couponIds){
			_list.couponIds=formData.couponIds;
		}
		
		if(formData.costVoList){
			formData.costVoList.forEach((item,index)=>{
				if(item.costType){
					if(item.id){
						_list["costVoList["+index+"].id"]=item.id;
					}
					_list["costVoList["+index+"].costType"]=item.costType;
					_list["costVoList["+index+"].costValue"]=item.costValue;
					_list["costVoList["+index+"].desc"]=item.desc;
				}
			})
			
		}
		if(formData.attachmentVoList){
			formData.attachmentVoList.forEach((item,index)=>{
				if(item.attachAddress){
					if(item.id){
						_list["attachmentVoList["+index+"].id"]=item.id;
					}
					_list["attachmentVoList["+index+"].attachAddress"]=item.attachAddress;
					_list["attachmentVoList["+index+"].attachName"]=item.attachName;
				}
			})
			
		}
		return this.postPromise(serverPath.ownerAddOrder,_list,'ownerAddOrder');
	},
	ownerUpdateOrder(formData){
		let _list={
			id:formData.id,//主键
			name:formData.name,//姓名（联系人）
			mobilePhone:formData.mobilePhone,//手机号码
			province:formData.province,//省会
			provinceId:formData.provinceId,//省会id
			city:formData.city,//城市
			cityId:formData.cityId,//城市id
			area:formData.area,//区域
			areaId:formData.areaId,//区域id
			address:formData.address,//预约地址
			decorateProject:formData.decorateProject,//装修项目内容
			decorateProjectTypes:formData.decorateProjectTypes,//装修项目内容类型
			remark:formData.remark,//
			agentRemark:formData.agentRemark,
			isOnlySave:formData.isOnlySave,//是否只是保存，true 只保存
			//billCode:formData.billCode

		}
		if(formData.couponIds){
			_list.couponIds=formData.couponIds;
		}
		
		if(formData.costVoList){
			formData.costVoList.forEach((item,index)=>{
				if(item.costType){
					if(item.id){
						_list["costVoList["+index+"].id"]=item.id;
					}
					_list["costVoList["+index+"].costType"]=item.costType;
					_list["costVoList["+index+"].costValue"]=item.costValue;
					_list["costVoList["+index+"].desc"]=item.desc;
				}
			})
			
		}
		if(formData.attachmentVoList){
			formData.attachmentVoList.forEach((item,index)=>{
				if(item.attachAddress){
					if(item.id){
						_list["attachmentVoList["+index+"].id"]=item.id;
					}
					_list["attachmentVoList["+index+"].attachAddress"]=item.attachAddress;
					_list["attachmentVoList["+index+"].attachName"]=item.attachName;
				}
			})
			
		}
		return this.postPromise(serverPath.ownerUpdateOrder,_list,'ownerUpdateOrder');
	},
	confirmOrder(formData){
		let _list={
			id:formData.id,//主键  
			remark:formData.remark,//
			limitDays:formData.limitDays,
			level:formData.level,
			isOnlySave:formData.isOnlySave,//是否只是保存，true 只保存
			//billCode:formData.billCode

		}
		if(formData.couponIds){
			_list.couponIds=formData.couponIds;
		}
		
		if(formData.costVoList){
			formData.costVoList.forEach((item,index)=>{
				if(item.costType){
					if(item.id){
						_list["costVoList["+index+"].id"]=item.id;
					}
					_list["costVoList["+index+"].costType"]=item.costType;
					_list["costVoList["+index+"].costValue"]=item.costValue;
					_list["costVoList["+index+"].desc"]=item.desc;
				}
			})
			
		}
		if(formData.attachmentVoList){
			formData.attachmentVoList.forEach((item,index)=>{
				if(item.attachAddress){
					if(item.id){
						_list["attachmentVoList["+index+"].id"]=item.id;
					}
					_list["attachmentVoList["+index+"].attachAddress"]=item.attachAddress;
					_list["attachmentVoList["+index+"].attachName"]=item.attachName;
				}
			})
			
		}
		return this.postPromise(serverPath.confirmOrder,_list,'confirmOrder');
	},
	supplement(formData){
		let _list={
			id:formData.id,
			isOnlySave:formData.isOnlySave,
		}
		if(formData.attachmentVoList){
			formData.attachmentVoList.forEach((item,index)=>{
				if(item.attachAddress){
					if(item.id){
						_list["attachmentVoList["+index+"].id"]=item.id;
					}
					_list["attachmentVoList["+index+"].attachAddress"]=item.attachAddress;
					_list["attachmentVoList["+index+"].attachName"]=item.attachName;
				}
			})
		}
		return this.postPromise(serverPath.supplement,_list,'supplement');
	},
	lack(formData){
		let _list={
			id:formData.id,
			lackDesc:formData.lackDesc,
		}
		return this.postPromise(serverPath.lack,_list,'lack');
	},
	ownerOrderNext(id){
		return this.postPromise(serverPath.ownerOrderNext,{id},'ownerOrderNext');
	},
	orgNext(id){
		return this.postPromise(serverPath.orgNext,{id},'orgNext');
	},
	//
	getIndex(){
		return this.getPromise(serverPath.getIndex,{},'getIndex');
	},
	getQrcode(path){
		return this.getPromise(path,{},'getQrcode');
	},
	getVcode(){
		return this.getPromiseByNoParams(serverPath.getVcode,'getVcode');
	},
	getCourse(searchData){
		return this.getPromise(serverPath.getCourse,searchData,'getCourse');
	},
	//建博会产品兴趣
	getProductInterestList(searchData){
		return this.getPromise(serverPath.getProductInterestList,searchData,'getProductInterestList');
	},
	changeProductInterest(id){
		return this.postPromise(serverPath.changeProductInterest,{id},'changeProductInterest');
	}
}