document.getElementById("open_1").addEventListener("click",callme);

function callme(){


    
    var t1=document.getElementById("open_1");
    var t2=document.getElementById("open_2");
    if(t2.disabled==false){
        t1.disabled=true;
        alert("Please Enter The Time");
        window.location.reload();
        return 0 ;
    }
    open_1.disabled=true;
    t2.disabled=false;
    
    document.getElementById("open_1").style.background="orange";
    document.getElementById("open_2").style.background="purple";

    start();

    document.getElementById("open_1").style.background="purple";
    
    

    
}









var time;
document.getElementById("open_2").addEventListener("click",function(){
    // document.location.reload();
    // window.location.reload();
    var t1=document.getElementById("open_1");
    var t2=document.getElementById("open_2");

    if(document.getElementById("open_1").style.background=="purple"){
        window.location.reload();
    }
    else{

        open_2.disabled=true;
        var audio = new Audio('audio1.mp3');
        audio.play();
        document.getElementById("open_2").style.background="orange";
        time = prompt("ENTER THE TIME IN SECONDS :")
        time++;
        minutes = Math.floor(time/60);
        seconds = time-minutes*60;
        document.getElementById("mins").innerHTML=minutes;
        document.getElementById("secs").innerHTML=seconds;
        

    }




    
    

})


function start(){
    var x=setInterval(function(){

        
        console.log(time);
        time=time-1;


        
        var minutes=0;
        var seconds=0;
        

        if(time>=3){
            minutes = Math.floor(time/60);
            // console.log("minutes : "+ typeof minutes);
            seconds = time-minutes*60;
            // console.log("seconds : "+ typeof seconds);

            
            if(minutes<10){
                minutes="0"+minutes;
            }
            if(seconds<10){
                 seconds="0"+seconds;
            }
            
        }


        if(time<=3 && time>0){
            minutes = Math.floor(time/60);
            // console.log("minutes : "+ typeof minutes);
            seconds = time-minutes*60;
            // console.log("seconds : "+ typeof seconds);

            
            if(minutes<10){
                minutes="0"+minutes;
            }
            if(seconds<10){
                 seconds="0"+seconds;
            }

            document.getElementById("mins").style.fontSize= "140px" ;
            document.getElementById("secs").style.fontSize= "140px" ;
            document.getElementById("mins").style.color= "red" ;
            document.getElementById("secs").style.color= "red" ;
        }


        // time=time-parseInt(seconds);

        if(time==0){
            document.getElementById("mins").innerHTML="0"+"0";
            document.getElementById("secs").innerHTML="0"+"0";

        }
        
        if(time<0){
            clearInterval(x);
            document.getElementById("time").innerHTML="TIME'S UP";
        }

        document.getElementById("mins").innerHTML=minutes;
        document.getElementById("secs").innerHTML=seconds;

        

    },1000);

    // start();


};



