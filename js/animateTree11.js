
var DrawTrunk = function(canvas){
	this.canvas = canvas;
	this.startFriction = 45;
	this.endFriction = 55;
	this.init();
}
DrawTrunk.prototype = {
	init: function(){
		this.interval = setInterval(this.drawCircle.bind(this), 30);
	}, 
	drawCircle: function(){
		if(this.endFriction > 150) {
			clearInterval(this.interval);
			return;
		}
		this.canvas.clearRect(40, 40, 120, 120);
	    this.canvas.beginPath();
	    console.log(this.startFriction/100 + ", " + this.endFriction/100);
	    this.canvas.arc(100, 100, 50, this.startFriction/100*Math.PI, this.endFriction/100*Math.PI);
	    this.canvas.fillStyle = "#5ba921";
	    this.canvas.fill();
	    this.canvas.closePath();
	    this.startFriction -= 5;
	    this.endFriction += 5;
	}
};


$(function(){
	//
	var window_height = $(window).height();
	$(".tree-first").height($(window).height());
//	alert($(document).width()/$(document).height() >= 0.65)
	if($(document).width()/$(document).height() >= 0.70)
	{
		$(".animateTree").css("bottom", "-36%");
		$(".achieve-common").css("top","50%");
	}
	else if($(document).width()/$(document).height() >= 0.65){
		$(".animateTree").css("bottom", "-25%");
	} else if($(document).width()/$(document).height() > 0.57){
		$(".animateTree").css("bottom", "-10%");
	}
	
	$.each($(".animateTree [class^=ball]"), function(){
		$(this).children().css({
			"margin-top": -$(this).width(), 
			"height": $(this).width()
		});
	});
	
	
	setTimeout(function(){
		$(".animateTree .ball1").animate({"height": $(".animateTree .ball1").width()}, 600);
		$(".animateTree .ball1 div").animate({"margin-top": "0"}, 600);
	}, 1150);
	//trunk1-1
	setTimeout(function(){
		$(".animateTree .trunk1-1").animate({"height": "27%"}, 800);
	}, 1100);
	setTimeout(function(){
		$(".animateTree .ball1-1").animate({"height": $(".animateTree .ball1-1").width()}, 600);
		$(".animateTree .ball1-1 div").animate({"margin-top": "0"}, 600);
	}, 1700);
	//trunk1-2
	setTimeout(function(){
		$(".animateTree .trunk1-2").animate({"height": "30%"}, 1000);
	}, 1500);
	
	//trunk1-3
	setTimeout(function(){
		$(".animateTree .trunk1-3").animate({"height": "15%"}, 1000);
	}, 1800);
	/*setTimeout(function(){
		$(".animateTree .trunk1-3").animate({"height": "5.5%"}, 800);
	}, 1800);
	setTimeout(function(){
		$(".animateTree .ball1-3").animate({"height": $(".animateTree .ball1-3").width()}, 600);
		$(".animateTree .ball1-3 div").animate({"margin-top": "0"}, 600);
	}, 2400);*/
	//trunk1-4
	setTimeout(function(){
		$(".animateTree .trunk1-4").animate({"height": "20%"}, 800);
	}, 2000);
	//trunk1-5
	setTimeout(function(){
		$(".animateTree .trunk1-5").animate({"height": "25%"}, 800);
	}, 2200);
	setTimeout(function(){
		$(".animateTree .ball1-2").animate({"height": $(".animateTree .ball1-2").width()}, 600);
		$(".animateTree .ball1-2 div").animate({"margin-top": "0"}, 600);
	}, 1700);
	setTimeout(function(){
		$(".animateTree .ball1-4").animate({"height": $(".animateTree .ball1-4").width()}, 600);
		$(".animateTree .ball1-4 div").animate({"margin-top": "0"}, 600);
	}, 1700);
	setTimeout(function(){
		$(".animateTree .ball3").animate({"height": $(".animateTree .ball3").width()}, 600);
	}, 1700);
	
	
	
	//trunk1
	$(".animateTree .trunk1").animate({"height": "84%"}, 1200, function(){
		//$(".animateTree .ball1").animate({"height": "17%"}, 800);
	});
	
	//trunk2
	$(".animateTree .trunk2").animate({"height": "92%"}, 3000);
	
	//trunk3
	$(".animateTree .trunk3").animate({"height": "86%"}, 1800);
	
	//trunk4
	$(".animateTree .trunk4").animate({"height": "53%"}, 1500);
	
	//trunk5
	$(".animateTree .trunk5").animate({"height": "78%"}, 2500);
	
	//trunk6
	$(".animateTree .trunk6").animate({"height": "92%"}, 2800);
	
	//trunk7
	$(".animateTree .trunk7").animate({"height": "90%"}, 2200);
	
	
	//闪烁
	setTimeout(function(){
	
		$.each($(".animateTree [class^=ball]"), function(){
			$(this).css({"overflow": "visible"});
		});
		// 第一页树的动作以及业绩对应详情的显示效果
		setTimeout($(".animateTree .ball1 .big").addClass("cur"),1500,function(){
			(".achieve1").addClass("cur");
		});
				
//				$(".achieve1 .achieve-title").animate({left:"0",opacity:"1"},1000);
//				$(".achieve1 .achieve-detail").animate({right:"0",opacity:"1"},1000,function(){
//					$(".achieve1 .achieve-title").delay(2000).animate({left:"-60%",opacity:"0"},1000);
//					$(".achieve1 .achieve-detail").delay(2000).animate({right:"-140%",opacity:"0"},1000);
//					$(".animateTree .ball1-1 div").delay(800).animate({width:"120%",height:"120%",marginLeft:"-10%",marginTop:"-10%"},500,function(){
//						$(".animateTree .ball1-1 div").animate({width:"100%",height:"100%",marginLeft:"0",marginTop:"0"},500,function(){
//							$(".animateTree .ball1-1 div").find("p").animate({opacity:"1"},500,function(){
//								$(".achieve2 .achieve-title").animate({left:"0",opacity:"1"},800);
//								$(".achieve2 .achieve-detail").animate({top:"30px",opacity:"1"},800,function(){
//									$(".achieve2 .achieve-title").delay(2000).animate({left:"-60%",opacity:"0"},500);
//									$(".achieve2 .achieve-detail").delay(2000).animate({top:"530px",opacity:"0"},500);
//									$(".animateTree .ball1-2 div").delay(500).animate({width:"120%",height:"120%",marginLeft:"-10%",marginTop:"-10%"},500,function(){
//										$(".animateTree .ball1-2 div").animate({width:"100%",height:"100%",marginLeft:"0",marginTop:"0"},500,function(){
//											$(".animateTree .ball1-2 div").find("p").animate({opacity:"1"},800,function(){
//												$(".achieve3 .achieve-title").animate({left:"0",opacity:"1"},800);
//												$(".achieve3 .achieve-detail").animate({top:"30px",opacity:"1"},800,function(){
//													$(".achieve3 .achieve-title").delay(2000).animate({left:"-60%",opacity:"0"},500);
//													$(".achieve3 .achieve-detail").delay(2000).animate({top:"530px",opacity:"0"},500);
//													$(".animateTree .ball1-4 div").delay(500).animate({width:"120%",height:"120%",marginLeft:"-10%",marginTop:"-10%"},500,function(){
//														$(".animateTree .ball1-4 div").animate({width:"100%",height:"100%",marginLeft:"0",marginTop:"0"},500,function(){
//															$(".animateTree .ball1-4 div").find("p").animate({opacity:"1"},800,function(){
//																$(".achieve4 .achieve-title").delay(500).animate({left:"0",opacity:"1"},800);
//																$(".achieve4 .achieve-detail").delay(500).animate({top:"30px",opacity:"1"},800,function(){
//																	$(".next-button").show(1000);
//																});
//															});
//														})
//													});
//												});
//											})	
//										})
//									})
//								});
//							});
//						});
//					});
//				});
//			});
//		})
	}, 4000);
	
//	$(".detail").load(function(){
//		var height = $(this).contents().height();
//		var window_height = $(window).height();
//		if(window_height >= height)
//		{
//			$(this).height(window_height);
//		}
//		else
//		{
//			$(this).height(height);
//		}
//	})
	
	
	
	//页面向下滚动切换手机端tap事件
//	$(".next-button").on("click",function(){
//		var window_height = parseInt($(window).height());
//		$(".first").animate({opacity:"0"},500)
//		$(".animateTree").animate({top:"-=" + window_height + "px"},1000,function(){
//			$(".next-button").hide(500);
//			$(".first").addClass("pr");
//			var scrollTop = parseInt($(".animateTree").css("top"));
//			var num = parseInt(scrollTop/window_height);
//			switch(num)
//			{
//				case 0:
//				break;
//				//
//				case -1:
//				$(".animateTree").stop().find(".list1").animate({right:"2%",opacity:"1"},1200,function(){
//					$(".list2").delay(300).animate({left:"2%",opacity:"1"},1200,function(){
//						$(".list3").delay(300).animate({right:"2%",opacity:"1"},1200,function(){
//							$(".list4").delay(300).animate({top:"67%",opacity:"1"},1200,function(){
//								$(".next-button").show(1000);
//							})
//						})
//					})
//				});
//				break;
//				case -2:
//				$(".list1").animate({right:"100%"},1000);
//				$(".list2").animate({left:"100%"},1000);
//				$(".list3").animate({right:"100%"},1000);
//				$(".list4").animate({top:"120%"},1000);
//				$(".next-button").show(1000);
//				break;
//				case -3:
//				$(".animateTree").stop().find(".ul0").find(".li1").animate({right:"0",opacity:"1"},1000,function(){
//					$(".ul0").find(".li2").animate({left:"0",opacity:"1"},1000);
//				});
//				break;
//			}
//		});
//	});
	
	
	$(document).swipe({
		swipeStatus:function(event, phase, direction, distance, duration,fingerCount) {
			//$(this).text("你用"+fingerCount+"个手指以"+duration+"秒的速度向" + direction + "滑动了" +distance+ "像素 " +"你在"+phase+"中");
			if(phase == "end")
			{
				if(direction == "down" && distance > 30)
				{
					var window_height = $(window).height();
					var scrollTop1 = parseInt($(".animateTree").css("top"));
					var num2 = parseInt(scrollTop1/window_height);
					if(num2 < 0)
					{
						$(".animateTree").animate({top:"+=" + window_height + "px"},1000,function(){
							var scrollTop = parseInt($(".animateTree").css("top"));
							var num = parseInt(scrollTop/window_height);
							switch(num)
							{
								case 0:
								$(".first").removeClass("pr");
								$(".first").animate({opacity:"1"},1000)
								break;
								case -1:
								$(".animateTree").stop().find(".list1").animate({right:"2%",opacity:"1"},1200,function(){
									$(".list2").delay(300).animate({left:"2%",opacity:"1"},1200,function(){
										$(".list3").delay(300).animate({right:"2%",opacity:"1"},1200,function(){
											$(".list4").delay(300).animate({top:"67%",opacity:"1"},1200,function(){
												$(".next-button").show(1000);
											})
										})
									})
								});
								break;
								case -2:
								
								break;
							}
						});
					}
					
				}
				if(direction == "up" && distance > 30)
				{
					var window_height = parseInt($(window).height());
					$(".first").animate({opacity:"0"},500)
					var scrollTop = parseInt($(".animateTree").css("top"));
					var num2 = parseInt(scrollTop/window_height);
					if(num2 > -3)
					{
						$(".animateTree").animate({top:"-=" + window_height + "px"},1000,function(){
							$(".next-button").hide(500);
							$(".first").addClass("pr");
							var scrollTop = parseInt($(".animateTree").css("top"));
							var num = parseInt(scrollTop/window_height);
							switch(num)
							{
								case 0:
								break;
								//
								case -1:
								$(".animateTree").stop().find(".list1").animate({right:"2%",opacity:"1"},1200,function(){
									$(".list2").delay(300).animate({left:"2%",opacity:"1"},1200,function(){
										$(".list3").delay(300).animate({right:"2%",opacity:"1"},1200,function(){
											$(".list4").delay(300).animate({top:"67%",opacity:"1"},1200,function(){
												$(".next-button").show(1000);
											})
										})
									})
								});
								break;
								case -2:
								$(".list1").animate({right:"100%"},1000);
								$(".list2").animate({left:"100%"},1000);
								$(".list3").animate({right:"100%"},1000);
								$(".list4").animate({top:"120%"},1000);
								$(".next-button").show(1000);
								break;
								case -3:
								$(".animateTree").stop().find(".ul0").find(".li1").animate({right:"0",opacity:"1"},1000,function(){
									$(".ul0").find(".li2").animate({left:"0",opacity:"1"},1000);
								});
								break;
							}
						});
					}
					
				}
			}
		},
	});
	
	//页面向上滚动切换
//	$(".prev-button").on("click",function(){
//		var window_height = $(window).height();
//		$(".animateTree").animate({top:"+=" + window_height + "px"},1000,function(){
//			var scrollTop = parseInt($(".animateTree").css("top"));
//			var num = parseInt(scrollTop/window_height);
//			switch(num)
//			{
//				case 0:
//				$(".first").removeClass("pr");
//				$(".first").animate({opacity:"1"},1000)
//				break;
//				case -1:
//				$(".animateTree").stop().find(".list1").animate({right:"2%",opacity:"1"},1200,function(){
//					$(".list2").delay(300).animate({left:"2%",opacity:"1"},1200,function(){
//						$(".list3").delay(300).animate({right:"2%",opacity:"1"},1200,function(){
//							$(".list4").delay(300).animate({top:"67%",opacity:"1"},1200,function(){
//								$(".next-button").show(1000);
//							})
//						})
//					})
//				});
//				break;
//				case -2:
//				
//				break;
//			}
//		});
//	})
	// 小ceo点击显示详情
	$(".ceo-list li").on("click",function(){
		alert("a");
		var i = $(this).index();
		$(".detail").hide().parent().find(".detail").eq(i).show(500);
		
		$(".detail").eq(i).find(".ceo-close").click(function(){
			$(this).parent(".detail").hide(500);
		})
	})
	
	//第四页黑色透明背景
	$(".black").each(function(){
		var $this = $(this).parent(".detail");
		var height = $this.height();
		var window_height = $(window).height();
		if(height > window_height)
		{
			$(this).height(height);
			$this.height(height);
		}
		else
		{
			$(this).height(window_height);
			$this.height(window_height);
		}
	});
	//领导寄语页面左右切换
	$(document).on("swiperight",function(){
		var Left = parseInt($(".leader-list").css("left"));
		var wid = parseInt($(".leader-list").width());
		if(!$(".leader-list").is(":animated"))
		{
			if(Left < 0)
			{
				var num1 = -(Left / wid);
				$(".leader-list").find(".ul"+num1).find(".li1").animate({right:"100%",opacity:"0"},1000,function(){
					$(".leader-list").find(".ul"+num1).find(".li2").animate({left:"-100%",opacity:"0"},0);
				});
				$(".leader-list").animate({left:"+=" + wid +"px"},1000,function(){
					var Left1 = parseInt($(".leader-list").css("left"));
					var num = -(Left1 / wid);
					$(".leader-list").find(".ul"+num).find(".li1").animate({right:"0",opacity:"1"},1000,function(){
						$(".leader-list").find(".ul"+num).find(".li2").animate({left:"0",opacity:"1"},1000);
					});
				})
			}
		}
	})
	$(document).on("swipeleft",function(){
		var Left = parseInt($(".leader-list").css("left"));
		var size = $(".leader-list").find("ul").size();
		var wid = parseInt($(".leader-list").width());
		var scrollLeft = (1-size)*wid;
		if(!$(".leader-list").is(":animated"))
		{
			if(Left > scrollLeft)
			{
				var num1 = -(Left / wid);
				$(".leader-list").find(".ul"+num1).find(".li1").animate({right:"100%",opacity:"0"},1000,function(){
					$(".leader-list").find(".ul"+num1).find(".li2").animate({left:"-100%",opacity:"0"},1);
				});
				$(".leader-list").animate({left:"-=" + wid +"px"},function(){
					var Left1 = parseInt($(".leader-list").css("left"));
					var num = -(Left1 / wid);
					$(".leader-list").find(".ul"+num).find(".li1").animate({right:"0",opacity:"1"},1000,function(){
						$(".leader-list").find(".ul"+num).find(".li2").animate({left:"0",opacity:"1"},1000);
					});
				})
			}
		}
	})
	//use canvas
	/*function resizeCanvas(){
		$('canvas').attr({
			'width': $(document).width(),
			'height': $(document).height()
		});
	}
	resizeCanvas();
    var canvas = document.getElementById('treeCanvas');
    var cans = canvas.getContext('2d');
	new DrawTrunk(cans);*/
	
});
