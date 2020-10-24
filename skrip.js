$(document).ready(function() {
  
  var peserta = [
    {
        "id": "1",
        "text": "Desain Menggambarkan Perasaan",
        "nama": "Lina Aliani"
    },
    {
        "id": "2",
        "text": "Terima Kasih",
        "nama": "Frido Anggiro"
    },
    {
        "id": "3",
        "text": "Kehidupan Adalah Sebuah Tantangan",
        "nama": "Khariza Ardhi Putra"
    },    
    {
        "id": "4",
        "text": "Free Design For Life",
        "nama": "Muhammad Juliandi"
    },
    {
        "id": "5",
        "text": "Yuk, Bisa Yuk!",
        "nama": "Muhammad Rafli Ramadhan"
    },
         {
        "id": "6",
        "text": "Indah Itu Tak Selalu Membuat Bahagia",
        "nama": "Fajar Cahyadi Tersakiti"
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
