var list=document.querySelectorAll('img')

const first=Math.floor(Math.random()*6)+1;
const imageFirst= 'assets/dice'+first+'.png';
list[0].setAttribute('src',imageFirst);
const second=Math.floor(Math.random()*6)+1;
const imageSecond='assets/dice'+second+'.png';
list[1].setAttribute('src',imageSecond);
if(first>second)
{
    document.querySelector('h1').innerHTML="The winner is user 1";
}
else if(first<second)
{
    document.querySelector('h1').innerHTML="The winner is user 2";
}
else
{
    document.querySelector('h1').innerHTML="It's a tie/draw!!";
}

//0 and 1
//0.1 to 0.9
//0.1*6=0.6=0+1=1
//0.3*6=1.8=1+1=2
//0.9*6=5.4=5+1=6
