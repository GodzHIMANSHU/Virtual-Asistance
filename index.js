let box=document.querySelector(".box");
let btn=document.querySelector("button");


const speakfunc=(input)=>{
    let speakinp=new SpeechSynthesisUtterance(input);
    speakinp.lang='en-IN';
    window.speechSynthesis.speak(speakinp);
}

const greetingfunc=()=>{
    let date=new Date();
    let h=date.getHours();
    speakfunc("Namaste sir, mai apki kya madad kar sakata hoon ")
    // if(h>=0 && h<12)
    // {
    //     speakfunc("Good morning sir, How can i help you !");
    // }
    // else if(h>=12 && h<16)
    // {
    //     speakfunc("Namaste sir, How can i help you !");
    // }
    // else{
    //     speakfunc("Good evening sir, How can i help you !");
    // }
}

const input=()=>{
    if('webkitSpeechRecognition' in window)
    {
        let r=new webkitSpeechRecognition();
    r.lang='en-US';
    r.onresult=(e)=>{
        let msg=e.results[0][0].transcript;
        handlemsg(msg.toLowerCase());
        box.classList.remove("btn-box");
        btn.innerHTML=`<i class="fa-solid fa-microphone-lines-slash"></i>`;
    }
     r.start();
    }
    else{
        alert("your Browser does not support voice input !");
    }
}

btn.onclick=()=>{
    box.classList.add("btn-box");
    btn.innerHTML=`<i class="fa-solid fa-microphone-lines"></i>`;
    input();
}

const handlemsg=(msg)=>{
    console.log(msg);
   if(msg.includes("hello") || msg.includes("hey") || msg.includes("hii"))
   {
     speakfunc("Hello Sir , How can i help you !");
   }
   else if(msg.includes("who are you") ||msg.includes("developed") || msg.includes("hu r u") )
   {
    speakfunc("I am virtual Asistance, Developed by Himanshu");
   }
   else if(msg.includes("open google")||msg.includes("google"))
   {
     speakfunc("Opening... google");
     window.open("https://www.google.com");
   }
   else if(msg.includes("on youtube"))
    {
        let word = "on youtube";
        let index = msg.indexOf(word);
        let result = msg.substring(0, index).trim();
        speakfunc(`this is i found on youtube regarding ${msg}`);
        window.open(`https://www.youtube.com/results?search_query=${result}`);
    }
   else if(msg.includes("open youtube")||msg.includes("youtube"))
    {
      speakfunc("Opening... youtube");
      window.open("https://www.youtube.com");
    }
    else if(msg.includes("open facebook")||msg.includes("facebook"))
    {
          speakfunc("Opening... facebook");
          window.open("https://www.facebook.com");
    }
    else if(msg.includes("open instagram")||msg.includes("instagram"))
   {
     speakfunc("Opening... instagram");
     window.open("https://www.instagram.com");
   } 
   else if(msg.includes("open lead code")||msg.includes("lead code"))
    {
      speakfunc("Opening... leetcode");
      window.open("https://www.leetcode.com");
    }
    else if(msg.includes("open github")||msg.includes("github"))
     {
        speakfunc("Opening... github");
        window.open("https://www.github.com");
    }
    else if(msg.includes("open code force")||msg.includes("code force"))
    {
        speakfunc("Opening... codeforce");
        window.open("https://codeforces.com/");
    }
    else if(msg.includes("open calculator")||msg.includes("calculator"))
    {
        speakfunc("Opening... calculator");
        window.open("calculator://");
    }
    else if(msg.includes("open chatgpt")||msg.includes("chatgpt"))
    {
       speakfunc("Opening... chatgpt");
       window.open("https://www.chatgpt.com");
    }
    else
    {   
        speakfunc(`this is i found on google regarding ${msg}`);
        window.open(`https://www.google.com/search?q=${msg}`);
    }

}

window.onload=()=>{
    greetingfunc();
}
