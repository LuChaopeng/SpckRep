   //实现功能：去广告以及隐藏右边栏（风云榜和热榜）
   /*在id=“content-left”的子节点下，发现广告div的id以3001开头，其他为1开始；可以使用（错for-in）for-of遍历，隐藏id>3000的标签；
    发现品牌广告的div没有id，且一般不过滤品牌广告，故对没有id属性的标签不做处理。
    */

    /*问题与解决
    问题：一些DOM函数报错，调试发现content_left的子元素不全是div，还有#text（这个确实不该忽略）和#style，前者换种写法就好，后者不知道。涉及到如何以标签获取子元素。
    解决：遍历时判断子元素类型，是#div才执行后面的。（暂没有找到别人的方法）

    问题：广告延迟出现；广告重复出现；搜索新词时失效
    解决：setInterval等，还没有解决完。看到已有的成熟脚本也是循环执行的，汗。

    问题：以ID作为检索条件无法去除延迟加载（检测到广告消失后）的ID全为“1”的广告；
    解决：参考现有脚本，判断span内容为 “广告”的
    */

    /*犯的错和总结
    1、childNodes返回的节点包括了#text
    2、区分for-in（枚举对象中的非符号键属性）和for-of（遍历可迭代对象的元素）
    3、区分typeof 和 nodeName(tagName)，以及nodeName返回的是大写
    4、没有子节点时，firstChild返回null
    5、优化思路，如果能检测网页的局部刷新，就可以不用定时执行。
    */
   function blockAds(){
    let items = document.getElementsByTagName("span");      //获取所有span标签
    for(let item of items){                                 //遍历
        if(item.firstChild!=null){                          //确保firstChild非null
            if(item.firstChild.nodeValue=="广告"){          
            let invItem1 = item.parentNode.parentNode; //找到广告条目容器(延迟加载项)
            invItem1.style.setProperty("display","none","important");
            let invItem2= invItem1.parentNode.parentNode; //正常广告加载项
            if(invItem2.getAttribute("id")!="form" && invItem2.getAttribute("id")!="container"){  //排除两个高级容器
                invItem2.style.setProperty("display","none","important");
            }
            }
        }
    }
}
function hideRightContent(){
    document.getElementById("content_right").style.setProperty("display","none","important");
}

blockAds(); hideRightContent();
setInterval(()=>{blockAds(); hideRightContent(); },1000);


