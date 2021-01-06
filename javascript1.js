const setOfWords = ["My name is Pooja shah , I have done my graduation Now, I am doing MCA from IGNOU I am a married I have a one child His name is sarthak I want to become a  Web Devloper", 
 "My hobby is learn codeing and lition music. I have a four year experience of receptionlist ",
  " One year experience of receptionlist in Raj Orien industries, 6 month experience of tellycaller in It & security "
];
const msg = document.getElementById('msg');
const mywords = document.getElementById('mywords');
const btn = document.getElementById('btn');
let startTime, endTime;

const playGames = () => {
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}
const endPlay = ()=>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime=((endTime-startTime)/1000);
    let totalStr=mywords.value;
    let wordCount = wordCounter(totalStr);
    let speed =Math.round((wordCount /totalTime)*60);
    let finalMsg =" You typed total at " + speed +" words per minutes ";
    finalMsg += compareWords(msg.innerText,totalStr);
    msg.innerText =finalMsg;
}
const compareWords = (str1,str2)=>{
    let words1 =str1.split(" ");
    let words2 =str2.split(" ");
    let cnt =0;
    words1.forEach(function(item, index){
        if(item == words2[index]){
            cnt++;
        }
    })
    let errorWords = (words1.length - cnt);
    return (cnt + " correct out of " + words1.length + 
    " words and the total number of error are "
    + errorWords + ".");

}
const wordCounter =(str) => {
let response=str.split(" ").length;
return response;
}
btn.addEventListener('click', function(){
    if(this.innerText == 'Start'){
        mywords.disabled = false;
        playGames(); 
    }else if(this.innerText == "Done"){
        mywords.disabled=true;
        btn.innerText="Start";
        endPlay();
    }
})