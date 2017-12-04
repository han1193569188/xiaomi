$(function () {
	let t6;
	$(".shopcar").hover(function () {
	    clearTimeout(t6);
	    t6=setTimeout(function () {
            $(".popup_shop").slideDown(200);
        },200);
    },function () {
        $(".popup_shop").slideUp(200);
    });


	//导航栏
	let flag1=true;
	let t5;
	$(".header-center").mouseenter(function () {
        let index;
        $(".header-centers").mouseenter(function () {
            index=$(".header-centers").index(this);
            if(index<7){
                clearTimeout(t5);
                $(".nav_popup").hide();
                $(".nav_popup").eq(index).show();
                t5=setTimeout(function () {
                    $(".nav_popupbox").animate({height:329},200);
                },200);
            }else{
                clearTimeout(t5);
                $(".nav_popupbox").stop(true);
                $(".nav_popupbox").animate({height:100},200);
            }

        });
    });
    $(".header-center").mouseleave(function () {
        clearTimeout(t5);
        $(".nav_popupbox").stop(true);
        $(".nav_popupbox").animate({height:100},200);
    });


	//轮播图
    let num=0;
    let t2;
    let flag=true;
    function aa() {
        num++;
        let length=$(".banner-pic").children().length;
        if (num==length){
            num=0;
        }
        $(".circle").children().css("background","rgba(0, 0, 0, 0)").eq(num).css("background","#666666");
        $(".banner-pic").children().fadeOut(1000).eq(num).fadeIn(1000,function () {
            flag=true;
        });
    }
    t2=setInterval(function () {
        flag=false;
        aa();
    },4000);
    $(".banner").hover(function () {
        clearInterval(t2);
    },function () {
        clearInterval(t2);
        t2=setInterval(aa,4000);
    });
    $(".circle").on("click","li",function () {
        if(!flag){
            return;
        }
        flag=false;
        num=$(this).index();
        $(".circle").children().css("background","rgba(0, 0, 0, 0)").eq(num).css("background","#666666");
        $(".banner-pic").children().fadeOut(1000).eq(num).fadeIn(1000,function () {
            flag=true;
        });
    });
    $(".bannerhand-left").click(function () {
        if(!flag){
            return;
        }
        flag=false;
        num--;
        if(num==-1){
        	num=$(".banner-pic").children().length-1;
		}
        $(".circle").children().css("background","rgba(0, 0, 0, 0)").eq(num).css("background","#666666");
        $(".banner-pic").children().fadeOut(1000).eq(num).fadeIn(1000,function () {
            flag=true;
        });
    });
    $(".bannerhand-right").click(function () {
        if(!flag){
            return;
        }
        flag=false;
        num++;
        if(num==$(".banner-pic").children().length){
            num=0;
        }
        $(".circle").children().css("background","rgba(0, 0, 0, 0)").eq(num).css("background","#666666");
        $(".banner-pic").children().fadeOut(1000).eq(num).fadeIn(1000,function () {
            flag=true;
        });
    });


	//侧导航
    $(".bannerleft-list").children("li").hover(function () {
        let index=$(".bannerleft-list").children("li").index(this);
        $(".popup").fadeOut(1).eq(index).show();
        $(".popup").hover(function () {
            $(this).show();
        },function () {
            $(this).hide();
        })
    },function () {
        $(".popup").hide();
    });

    //左右轮播
	let t;
	let nums=1;
	let flag2=true;
	t=setInterval(function () {
		flag2=false;
		if(nums==1){
			fn1();
		}else if(nums==-1){
			fn2();
		}
		nums=-nums;
    },5000);
    let width=$(".bigbox").width()/2;
	function fn1() {
        $(".bigbox").animate({left:-width},function () {
			flag2=true;
        });
        $(".anniuzuo").removeClass("color");
        $(".anniuzuo").addClass("color1");
        $(".anniuyou").removeClass("color1");
        $(".anniuyou").addClass("color");
    }
    function fn2() {
        $(".bigbox").animate({left:0},function () {
            flag2=true;
        });
        $(".anniuzuo").removeClass("color1");
        $(".anniuzuo").addClass("color");
        $(".anniuyou").removeClass("color");
        $(".anniuyou").addClass("color1");
    }
    $(".anniu").hover(function () {
		clearInterval(t);
    },function () {
        clearInterval(t);
        t=setInterval(function () {
            if(nums==1){
                fn1();
            }else if(nums==-1){
                fn2();
            }
            nums=-nums;
        },5000);
    });
	$(".anniuzuo").click(function () {
		if($(".anniuzuo").hasClass("color")||!flag2){
			return;
		}
		flag2=false;
		fn2();
		nums=-nums;
    });
    $(".anniuyou").click(function () {
        if($(".anniuyou").hasClass("color")||!flag2){
            return;
        }
        flag2==false;
        fn1();
        nums=-nums;
    });

	//家电  智能
	$(".jiadians").mouseenter(function () {
        $(".jiadians").removeClass("jiadianflag");
        $(this).addClass("jiadianflag");
        let index=$(".jiadians").index(this);
        $(".content-right").css("display","none");
        $(".content-right").eq(index).css("display","block");
    })
	$(".zhinengs").mouseenter(function () {
		$(".zhinengs").removeClass("jiadianflag");
        $(this).addClass("jiadianflag");
        let index=$(".zhinengs").index(this);
        $(".zhineng_list").css("display","none");
        $(".zhineng_list").eq(index).css("display","block");
    })

    //内容轮播
    function content(a) {
        let next=0;
        let flag4=true;
        let newwidth=$(".cons-on").eq(0).width();
        let mark=$(".neirong").children("li").eq(a);
        let num=mark.find(".cons").children("li").length;
        mark.find(".neirong-left").click(function () {
            if(next==0||!flag4){
                return;
            }
            flag4=false;
            next--;
            mark.find(".dian").removeClass("biger");
            mark.find(".dian").eq(next).addClass("biger");
            mark.find(".cons").animate({left:-next*newwidth},function () {
                flag4=true;
            });
        });
        mark.find(".neirong-right").click(function () {
            if(next==num-1||!flag4){
                return;
            }
            flag4=false;
            next++;
            mark.find(".dian").removeClass("biger");
            mark.find(".dian").eq(next).addClass("biger");
            mark.find(".cons").animate({left:-next*newwidth},function () {
                flag4=true;
            });
        });
        mark.find(".dian").click(function () {
            if(!flag4){
                return;
            }
            flag4=false;
            let index=mark.find(".dian").index(this);
            mark.find(".dian").removeClass("biger");
            mark.find(".dian").eq(index).addClass("biger");
            mark.find(".cons").animate({left:-index*newwidth},function () {
                flag4=true;
            });
            next=index;
        })
    }
    content(0);
    content(1);
    content(2);
    content(3);
});
// window.onload=function(){
// 	// 侧导航
// 	let bannerleft=document.getElementsByClassName("bannerleft-list")[0];
// 	let lis=bannerleft.getElementsByClassName("bannerleft-lists");
// 	let popup=bannerleft.getElementsByClassName("popup");
// 	// console.log(lis);
// 	for(let i=0;i<lis.length;i++){
// 		lis[i].onmouseover=function(){
// 			popup[i].style.display="block";
// 		}
// 		lis[i].onmouseout=function(){
// 			popup[i].style.display="none";
// 		}
// 	}
// 	for(let j=0;j<popup.length;j++){
// 		popup[j].onmouseover=function(){
// 			popup[j].style.display="block";
// 		}
// 		popup[j].onmouseout=function(){
// 			popup[j].style.display="none";
// 		}
// 	}
// 	// 导航
// 	// let headercenter=document.getElementsByClassName("header-center");
// 	let headers=document.getElementsByClassName("header-centers");
// 	let nav_box=document.querySelector(".nav_popupbox");
// 	console.log(nav_box)
// 	let nav_popup=document.getElementsByClassName("nav_popup");
// 	// console.log(headers);
// 	for (let k=0;k<headers.length-2;k++){
// 		headers[k].onmouseover=function(){
//             nav_box.style.height="229px";
// 			nav_popup[k].style.display="block";
// 		}
// 		nav_popup[k].onmouseover=function(){
//             nav_box.style.height="229px";
// 			nav_popup[k].style.display="block";
// 		}
// 		nav_popup[k].onmouseout=function(){
//             nav_box.style.height="0px";
// 			nav_popup[k].style.display="none";
// 		}
// 		headers[k].onmouseout=function(){
//             nav_box.style.height="0px";
// 			nav_popup[k].style.display="none";
// 		}
//
// 	}
// 	// 购物车
// 	let shopcar=document.getElementsByClassName("shopcar")[0];
// 	let popup_shop=document.getElementsByClassName("popup_shop")[0];
// 	shopcar.onmouseover=function(){
// 		popup_shop.style.paddingTop="15px";
// 		popup_shop.style.height="85px";
// 	}
// 	shopcar.onmouseout=function(){
// 		popup_shop.style.paddingTop="0";
// 		popup_shop.style.height="0";
// 	}
// 	// 家电
// 	let jiadian=document.getElementsByClassName("jiadians");
// 	let jiadian_list=document.getElementsByClassName("content-right");
// 	// console.log(jiadian,jiadian_list);
// 		for(let x=0;x<jiadian.length;x++){
// 			jiadian[x].onmouseover=function(){
// 				for(let y=0;y<jiadian.length;y++){
// 					jiadian[y].style.color="#424242";
// 		 			jiadian[y].style.paddingBottom="0";
// 		 			jiadian[y].style.borderBottom="none";
// 		 			jiadian_list[y].style.display="none";
// 				}
// 				jiadian[x].style.color="#ff6700";
// 				jiadian[x].style.paddingBottom="4px";
// 				jiadian[x].style.borderBottom="2px solid #ff6700";
// 				jiadian_list[x].style.display="block";
// 			}
//
// 		}
// 	//智能
// 	let zhineng=document.getElementsByClassName("zhinengs");
// 	let zhineng_list=document.getElementsByClassName("zhineng_list");
// 	// console.log(zhineng,zhineng_list);
// 		for(let b=0;b<zhineng.length;b++){
// 			zhineng[b].onmouseover=function(){
// 				for(let a=0;a<zhineng.length;a++){
// 					zhineng[a].style.color="#424242";
// 		 			zhineng[a].style.paddingBottom="0";
// 		 			zhineng[a].style.borderBottom="none";
// 		 			zhineng_list[a].style.display="none";
// 				}
// 				zhineng[b].style.color="#ff6700";
// 				zhineng[b].style.paddingBottom="4px";
// 				zhineng[b].style.borderBottom="2px solid #ff6700";
// 				zhineng_list[b].style.display="block";
// 			}
//
// 		}
// 	//轮播图
// 	let banner_pic=document.getElementsByClassName("banner-pic")[0];
// 	let banner_lis=banner_pic.getElementsByTagName("li");
// 	let banner_cir=document.getElementsByClassName("circle")[0];
// 	let banner_c=banner_cir.getElementsByTagName("li");
//  	let back=document.getElementsByClassName("bannerhand-right")[0];
//  	let forward=document.getElementsByClassName("bannerhand-left")[0];
//  	let banner=document.getElementsByClassName("banner")[0];
// 	let num=0;
// 	let flag=true;
// 	let t=setInterval(function () {
// 		flag=false;
// 		fn();
//     }, 4000);
// 	banner.onmouseover=function(){
// 		clearInterval(t);
// 	};
// 	banner.onmouseout=function(){
//         clearInterval(t);
//         t=setInterval(function () {
//             flag=false;
//             fn();
//         }, 4000);
// 	};
// 	back.onclick=function () {
// 		if(!flag){
// 			return;
//         }
// 		flag=false;
// 		fn()
//
//     };
// 	forward.onclick=function () {
//         if(flag){
//             flag=false;
//             fn1()
//         }
//     };
// 	for(let i=0;i<banner_c.length;i++){
// 		banner_c[i].onclick=function(){
// 			if(!flag){
// 				return;
// 			}
// 			flag=false;
// 			banner_lis[num].className="";
// 	    	banner_c[num].className="";
//             animate(banner_lis[num],{opacity:0});
// 	    	banner_lis[i].className="banner-pics";
// 	    	banner_c[i].className="circles";
//             animate(banner_lis[i],{opacity:1},2000,function () {
//                 flag=true;
//             });
// 	    	num=i;
// 		}
// 	}
//     function fn(){
//     	num++;
//     	if (num==7) {
//     		num=0;
//     	}
//     	for(let i=0;i<banner_lis.length;i++){
//     		banner_lis[i].className="";
//     		banner_c[i].className="";
//             animate(banner_lis[i],{opacity:0});
//     	}
//     	banner_lis[num].className="banner-pics";
// 		animate(banner_lis[num],{opacity:1},2000,function () {
// 			flag=true;
//         });
//     	banner_c[num].className="circles";
//     }
//     function fn1(){
//     	num--;
//     	if (num==-1) {
//     		num=6;
//     	}
//     	for(let i=0;i<banner_lis.length;i++){
//     		banner_lis[i].className="";
//     		banner_c[i].className="";
//             animate(banner_lis[i],{opacity:0});
//     	}
//     	banner_lis[num].className="banner-pics";
//         animate(banner_lis[num],{opacity:1},2000,function () {
//             flag=true;
//         });
//     	banner_c[num].className="circles";
//     }
//     //内容轮播
//     contentre(0);
//     contentre(1);
//     contentre(2);
//     contentre(3);
//     function contentre(number){
//     let cons=document.getElementsByClassName("cons")[number];
//     console.log(cons);
//     let cons_on=cons.getElementsByTagName("li");
//     let con=document.getElementsByClassName("con")[number];
//     let dian=con.getElementsByClassName("dian");
//     // console.log(con,dian);
//     let cons_width=cons_on[0].offsetWidth;
//     let hand1=document.getElementsByClassName("neirong-left")[number];
//     let hand2=document.getElementsByClassName("neirong-right")[number];
//     let next=0;
//     let flag1=true;
//     hand2.onclick=function(){
//     	if (flag1) {
//     		next++;
//     		if (next<cons_on.length) {
//     			animate(cons,{left:-next*cons_width},function(){
//     				flag1=true;
//     			})
//     			for(let i=0;i<dian.length;i++){
//     			dian[i].className="dian";
//     			}
//     			dian[next].className="dian biger";
//     		}
//     		else{
//     			next--;
//     			return;
//     		}
//     		flag1=false;
//     	}
//     }
//     hand1.onclick=function(){
//     	if (flag1) {
//     		next--;
//     		if (next>-1) {
//     			animate(cons,{left:-next*cons_width},function(){
//     				flag1=true;
//     			})
//     			for(let i=0;i<dian.length;i++){
//     				dian[i].className="dian";
//     			}
//     			dian[next].className="dian biger";
//     		}
//     		else{
//     			next++;
//     			return;
//     		}
//     		flag1=false;
//     	}
//     }
//     for(let i=0;i<dian.length;i++){
//     	dian[i].onclick=function(){
//     		animate(cons,{left:-i*cons_width})
//     		for(let j=0;j<dian.length;j++){
//     			dian[j].className="dian";
//     		}
//     		dian[i].className="dian biger";
//     		next=i;
//     	}
//     }
//     }
//     //左右轮播
//     let bigbox=document.getElementsByClassName("bigbox")[0];
//     let anniuzuo=document.getElementsByClassName("anniuzuo")[0];
//     let anniuyou=document.getElementsByClassName("anniuyou")[0];
//     let bigbox_width=bigbox.offsetWidth;
//     let anniu=document.getElementsByClassName("anniu")[0];
//     let t2;
//     let nums=1;
//     let flags=true;
//     /*t2=setInterval(function(){
//     	if (bigbox.style.left==0) {
//     		setTimeout(fs,1);
//     	}
//     	else{
//     		setTimeout(fs1,1);
//     	}
//     },2000)*/
//     t2=setInterval(function(){
//     	if (nums==1) {
//     		animate(bigbox,{left:-bigbox.offsetWidth/4+
//     		nums*bigbox.offsetWidth/4},function(){
//     			nums=-nums;
//     		anniuzuo.className="anniuzuo color";
//     		anniuyou.className="anniuyou color1";
//     		})
//     	}
//     	else if (nums==-1) {
//     		animate(bigbox,{left:-bigbox.offsetWidth/4+
//     		nums*bigbox.offsetWidth/4},function(){
//     			nums=-nums;
//     		anniuzuo.className="anniuzuo color1";
//     		anniuyou.className="anniuyou color";
//     		})
//     	}
//     	},10000)
//     anniu.onmouseover=function(){
//     	clearInterval(t2);
//     }
//     anniu.onmouseout=function(){
//     	t2=setInterval(function(){
//     	if (nums==1) {
//     		animate(bigbox,{left:-bigbox.offsetWidth/4+
//     		nums*bigbox.offsetWidth/4},function(){
//     			nums=-nums;
//     		anniuzuo.className="anniuzuo color";
//     		anniuyou.className="anniuyou color1";
//     		})
//     	}
//     	else if (nums==-1) {
//     		animate(bigbox,{left:-bigbox.offsetWidth/4+
//     		nums*bigbox.offsetWidth/4},function(){
//     			nums=-nums;
//     		anniuzuo.className="anniuzuo color1";
//     		anniuyou.className="anniuyou color";
//     		})
//     	}
//     	},10000)
//     }
//     anniuyou.onclick=function(){
//     	if (flags) {
//     		fs();
//     	}
//     	flags=false;
//     }
//     anniuzuo.onclick=function(){
//     	if (flags) {
//     		fs1();
//     	}
//     	flags=false;
//     }
//     function fs(){
//     	anniuzuo.className="anniuzuo color1";
//     	anniuyou.className="anniuyou color";
//     	animate(bigbox,{left:-bigbox.offsetWidth/2},function(){
//     		flags=true;
//     	})
//     }
//     function fs1(){
//     	anniuzuo.className="anniuzuo color";
//     	anniuyou.className="anniuyou color1";
//     	animate(bigbox,{left:0},function(){
//     		flags=true;
//     	})
//     }
//
// }
