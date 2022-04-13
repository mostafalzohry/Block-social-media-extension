const html = (pagename) => {
return `<div class ="c">
<p> Error </p>
<p> Back to work or study </p>
<p>  Study > ${pagename} </p>
</div> 
`
} 

const style = () => {
   return `<style>
   body{
    background-image: linear-gradient(to right, rgba(100,50,40,.3), rgba(0,200,100,.7));
}
.c{
    margin : 200px auto;
    padding : auto;
    text-align : center;
    font-size : 30px;
    font-family : Arial ,sans-serif;
    color : black;

}
   </style>`
}

switch (window.location.hostname ) {
    case "www.youtube.com": 
    document.body.innerHTML= html("YOUTUBE");
    document.head.innerHTML=style();
    break;
    case "www.netflix.com": 
    document.body.innerHTML= html("NETFLIX");
    document.head.innerHTML=style();
        break;
    case "www.facebook.com": 
    document.body.innerHTML= html("FACEBOOK");
    document.head.innerHTML=style();
        break;
    case "twitter.com": 
    document.body.innerHTML= html("TWITTER");
    document.head.innerHTML=style();
        break;
    case "www.instagram.com": 
    document.body.innerHTML= html("INSTAGRAM");
    document.head.innerHTML=style();
        break;
     
}
