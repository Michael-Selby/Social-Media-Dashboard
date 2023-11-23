


fetch('file.json')
.then(respond=> respond.json())
.then(json=>{
    const followersCount = json.followers;
    let OverviewCount=json.overview;
    let temp = ''
    followersCount.forEach(follower => {

        temp += ` 
                <li><div class="name">${follower.name}</div><br>
                   <div class="number"> ${follower.number}</div><br>
                    <div class="attribute">${follower.atrribute}</div><br>
                    <div class="follower">${follower.date}</div><br>
                    </li>  `
                  
                
        document.querySelector("ol").innerHTML = temp;
    });
    
    let person=document.getElementsByClassName("follower")[3];
      person.setAttribute("class","follow")
      let temp2="";

      var lists=document.querySelector("ol").getElementsByTagName("li")[0]
      lists.setAttribute("id","lists");
      
      var lists1=document.querySelector("ol").getElementsByTagName("li")[1]
       lists1.setAttribute("id","lists1");
      
      var lists2=document.querySelector("ol").getElementsByTagName("li")[2]
      lists2.setAttribute("id","lists2");
      
      
      var lists3=document.querySelector("ol").getElementsByTagName("li")[3]
      lists3.setAttribute("id","lists3");

      var flist=document.getElementById("lists").getElementsByClassName("name")[0];
      flist.setAttribute("id","fname")

     var flist1=document.getElementById("lists1").getElementsByClassName("name")[0];
       flist1.setAttribute("id","fname1")
      
       var flist2=document.getElementById("lists2").getElementsByClassName("name")[0];
       flist2.setAttribute("id","fname2")
      
       var flist3=document.getElementById("lists3").getElementsByClassName("name")[0];
       flist3.setAttribute("id","fname3")
      
     
      
      OverviewCount.forEach(follow => {

temp2 += ` 
    <li><div class="names">${follow.PageView}</div><br>
       <div class="numbers"> ${follow.PageViewNum}</div><br>
        <div class="attributes">${follow.Percentage}</div><br>
        </li>  `     
document.querySelector("ul").innerHTML = temp2;
});
let list1=document.querySelector("ul").getElementsByTagName("li")[0].getElementsByTagName("div")[0];
list1.setAttribute("id","list1")
let list2=document.querySelector("ul").getElementsByTagName("li")[1].getElementsByTagName("div")[0];
list2.setAttribute("id","list1")


let list3=document.querySelector("ul").getElementsByTagName("li")[2].getElementsByTagName("div")[0];
list3.setAttribute("id","list3")
let list4=document.querySelector("ul").getElementsByTagName("li")[3].getElementsByTagName("div")[0];
list4.setAttribute("id","list4")


let list5=document.querySelector("ul").getElementsByTagName("li")[4].getElementsByTagName("div")[0];
list5.setAttribute("id","list5")
let list6=document.querySelector("ul").getElementsByTagName("li")[5].getElementsByTagName("div")[0];
list6.setAttribute("id","list6")

let list7=document.querySelector("ul").getElementsByTagName("li")[6].getElementsByTagName("div")[0];
list7.setAttribute("id","list7")
let list8=document.querySelector("ul").getElementsByTagName("li")[7].getElementsByTagName("div")[0];
list8.setAttribute("id","list8")
    
//dark mode and light mode condition
var bgColour=document.getElementById("colo");
var dark=["#1D1F29"];
var darkMode=["#20222F"];
var lightMode=["#F7F9FF"];
var onbtn=document.getElementById("on-btn");
var container=document.getElementById("cont");
var numbers=document.querySelector("ul").getElementsByTagName("li")[0];
var numbers1=document.querySelector("ul").getElementsByTagName("li")[1];
var numbers2=document.querySelector("ul").getElementsByTagName("li")[2];
var numbers3=document.querySelector("ul").getElementsByTagName("li")[3];
var numbers4=document.querySelector("ul").getElementsByTagName("li")[4];
var numbers5=document.querySelector("ul").getElementsByTagName("li")[5];
var numbers6=document.querySelector("ul").getElementsByTagName("li")[6];
var numbers7=document.querySelector("ul").getElementsByTagName("li")[7];

//darkmode for followers
var Numbers1=document.querySelector("ol").getElementsByTagName("li")[0];
var Numbers2=document.querySelector("ol").getElementsByTagName("li")[1];
var Numbers3=document.querySelector("ol").getElementsByTagName("li")[2];
var Numbers4=document.querySelector("ol").getElementsByTagName("li")[3];
//numbers should change to white
var Nombers4=document.querySelector("ol").getElementsByTagName("li")[0].getElementsByTagName("div")[1];
var Nombers3=document.querySelector("ol").getElementsByTagName("li")[1].getElementsByTagName("div")[1];
var Nombers2=document.querySelector("ol").getElementsByTagName("li")[2].getElementsByTagName("div")[1];
var Nombers1=document.querySelector("ol").getElementsByTagName("li")[3].getElementsByTagName("div")[1];


var Nomber1=document.querySelector("ul").getElementsByTagName("li")[0].getElementsByTagName("div")[1];
var Nomber2=document.querySelector("ul").getElementsByTagName("li")[1].getElementsByTagName("div")[1];
var Nomber3=document.querySelector("ul").getElementsByTagName("li")[2].getElementsByTagName("div")[1];
var Nomber4=document.querySelector("ul").getElementsByTagName("li")[3].getElementsByTagName("div")[1];
var Nomber5=document.querySelector("ul").getElementsByTagName("li")[4].getElementsByTagName("div")[1];
var Nomber6=document.querySelector("ul").getElementsByTagName("li")[5].getElementsByTagName("div")[1];
var Nomber7=document.querySelector("ul").getElementsByTagName("li")[6].getElementsByTagName("div")[1];
var Nomber8=document.querySelector("ul").getElementsByTagName("li")[7].getElementsByTagName("div")[1];

//script for over view title
var title=document.getElementById("t-itle")
var Title=document.getElementById("head")
var title1=document.getElementById("head1")



var offbtn=document.getElementById("off-btn");

//script for percerntages
var f1=document.querySelector("ul").getElementsByTagName("li")[0].getElementsByTagName("div")[2]
f1.setAttribute("id","f1")
var f2=document.querySelector("ul").getElementsByTagName("li")[1].getElementsByTagName("div")[2]
f2.setAttribute("id","f2")
var f3=document.querySelector("ul").getElementsByTagName("li")[2].getElementsByTagName("div")[2]
f3.setAttribute("id","f3")
var f4=document.querySelector("ul").getElementsByTagName("li")[3].getElementsByTagName("div")[2]
f4.setAttribute("id","f4")
var f5=document.querySelector("ul").getElementsByTagName("li")[4].getElementsByTagName("div")[2]
f5.setAttribute("id","f5")
var f6=document.querySelector("ul").getElementsByTagName("li")[5].getElementsByTagName("div")[2]
f6.setAttribute("id","f6")
var f7=document.querySelector("ul").getElementsByTagName("li")[6].getElementsByTagName("div")[2]
f7.setAttribute("id","f7")
var f8=document.querySelector("ul").getElementsByTagName("li")[7].getElementsByTagName("div")[2]
f8.setAttribute("id","f8")


    onbtn.onclick=function (){
        bgColour.style.background=dark;
        container.style.background=dark;
        numbers.style.background=darkMode;
        numbers1.style.background=darkMode;
        numbers2.style.background=darkMode;
        numbers3.style.background=darkMode;
        numbers4.style.background=darkMode;
        numbers5.style.background=darkMode;
        numbers6.style.background=darkMode;
        numbers7.style.background=darkMode;
        //end of style for overview
        
        Numbers1.style.background=darkMode;
        Numbers2.style.background=darkMode;
        Numbers3.style.background=darkMode;
        Numbers4.style.background=darkMode;
        Nombers4.setAttribute("style","color:white")
        Nombers3.setAttribute("style","color:white")
        Nombers2.setAttribute("style","color:white")
        Nombers1.setAttribute("style","color:white")
        
        //end of style
        Nomber1.setAttribute("style","color:white")
        Nomber2.setAttribute("style","color:white")
        Nomber3.setAttribute("style","color:white")
        Nomber4.setAttribute("style","color:white")
        Nomber5.setAttribute("style","color:white")
        Nomber6.setAttribute("style","color:white")
        Nomber7.setAttribute("style","color:white")
        Nomber8.setAttribute("style","color:white")
        
        title.setAttribute("style","color:white")
        Title.setAttribute("style","color:white")
        title1.setAttribute("style","color:white")
        // onbtn.style.display="none"
        var off=onbtn.style.content="url(images/ofiimage.png)";
        
////////////////////


if(off=true){
    onbtn.onclick=function(){
        onbtn.style.content="url(images/onimage.png)";
        //return light mode here
        numbers.style.background="#F1F3FA";
        numbers1.style.background="#F1F3FA";
        numbers2.style.background="#F1F3FA";
        numbers3.style.background="#F1F3FA";
        numbers4.style.background="#F1F3FA";
        numbers5.style.background="#F1F3FA";
        numbers6.style.background="#F1F3FA";
        numbers7.style.background="#F1F3FA";
        
        Numbers1.style.background="#F1F3FA";
        Numbers2.style.background="#F1F3FA";
        Numbers3.style.background="#F1F3FA";
        Numbers4.style.background="#F1F3FA";

        Nombers4.setAttribute("style","color:#1D1F29")
        Nombers3.setAttribute("style","color:#1D1F29")
        Nombers2.setAttribute("style","color:#1D1F29")
        Nombers1.setAttribute("style","color:#1D1F29")
        
        //end of style
        Nomber1.setAttribute("style","color:#1D1F29")
        Nomber2.setAttribute("style","color:#1D1F29")
        Nomber3.setAttribute("style","color:#1D1F29")
        Nomber4.setAttribute("style","color:#1D1F29")
        Nomber5.setAttribute("style","color:#1D1F29")
        Nomber6.setAttribute("style","color:#1D1F29")
        Nomber7.setAttribute("style","color:#1D1F29")
        Nomber8.setAttribute("style","color:#1D1F29")
        
        title.setAttribute("style","color:#1D1F29")
        Title.setAttribute("style","color:#1D1F29")
        title1.setAttribute("style","color:#1D1F29")

        bgColour.style.background="white";
        container.style.background="#F7F9FF";
        
        
        
    }
     
}
else{
    
}


}





});  
 














