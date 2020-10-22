$(document).ready(function() {

  var peserta = [
    {
        "id": "1",
        "text": "Teks 1",
        "nama": "Nama 1"
    },
    {
        "id": "2",
        "text": "Teks 2",
        "nama": "Nama 2"
    },
    {
        "id": "3",
        "text": "Teks 3",
        "nama": "Nama 3"
    },    
    ]
    
    $.ajax({
    dataType: 'json'
    })
    var qty = peserta.length;
    $('#main #text').html('"'+peserta[0].text+'"');
    $('#main #nama').html(peserta[0].nama);
    $("#main #quoteNum").html(quotes.indexOf(quotes[0])+1+' of '+qty);
    
    //console.log(quotes[randomNum]);
    $('#generate').on('click', function(){
    var randomNum = Math.floor(Math.random() * (qty - 0 + 1) + 0);
    $('#main #text').html('"'+peserta[randomNum].text+'"');
    $('#main #nama').html(peserta[randomNum].nama);
    $("#main #quoteNum").html(peserta.indexOf(peserta[randomNum])+1+' of '+qty);
    });
