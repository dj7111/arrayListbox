function populate(){
	for(i=0;i<concertArray.length;i++){
    var select = document.getElementById("test");
    select.options[select.options.length] = new Option(concertArray[i][0], concertArray[i][1]);
}
}