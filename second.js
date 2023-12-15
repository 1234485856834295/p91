function getscore(){
    player1=localStorage.getItem("p1name");
    player2=localStorage.getItem("p2name");
    document.getElementById("label1").innerHTML=player1;
    document.getElementById("label2").innerHTML=player2;
}
