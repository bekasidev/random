$(document).ready(function() {
  
  var peserta = [
    {
        "id": "1",
        "text": "Odading Anjim banget",
        "nama": "Mang Oleh"
    },
    {
        "id": "2",
        "text": "Gini amat nasib jones",
        "nama": "Jomblo Ngenes"
    },
    {
        "id": "3",
        "text": "Buanglah mantan pada tempatnya",
        "nama": "Mantan Tersakiti"
    },    
    {
        "id": "4",
        "text": "Luwak White Koffie, Nyaman diperut",
        "nama": "Kang Kopi"
    },
    {
        "id": "5",
        "text": "Kalau ada yang menggantung, tenang aja, itu biji",
        "nama": "Dr.Boyke"
    },
         {
        "id": "6",
        "text": "Tetaplah hidup meski gak berguna",
        "nama": "Fajar"
    },     
    {
        "id": "7",
        "text": "Dasar anak durhaka!",
        "nama": "Ibu"
    },    
  ] 
    $.ajax({
    dataType: 'json'
    })
    var qty = peserta.length;
    $('#main #text').html('"'+peserta[0].text+'"');
    $('#main #nama').html(peserta[0].nama);
    $("#main #quoteNum").html(peserta.indexOf(peserta[0])+1+' of '+qty);
    //console.log(quotes[randomNum]);
    $('#generate').on('click', function(){
    var randomNum = Math.floor(Math.random() * (qty - 0 + 1) + 0);
    $('#main #text').html('"'+peserta[randomNum].text+'"');
    $('#main #nama').html(peserta[randomNum].nama);
    $("#main #quoteNum").html(peserta.indexOf(peserta[randomNum])+1+' of '+qty);
    });
});
