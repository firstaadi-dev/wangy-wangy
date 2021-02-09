const wangyEl = document.getElementById('wangy');
const inputEl = document.getElementById("waifu");
const jenisEl = document.getElementById("jenis");
function generate() {
    let nama_waifu = inputEl.value;
    let jenis = jenisEl.value;
    if (jenis == "a"){
        var waifu = `${nama_waifu} ${nama_waifu} ${nama_waifu}  ❤️ ❤️ ❤️ WANGI WANGI WANGI WANGI HU HA HU HA HU HA, aaaah baunya rambut ${nama_waifu} wangi aku mau nyiumin aroma wanginya ${nama_waifu} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${nama_waifu} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${nama_waifu} AAAAA LUCCUUUUUUUUUUUUUUU............${nama_waifu} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${nama_waifu} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${nama_waifu} gw ...${nama_waifu} di laptop ngeliatin gw, ${nama_waifu} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${nama_waifu} aku gak mau merelakan ${nama_waifu} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${nama_waifu} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
    }    
    else if (jenis == "b"){
        var waifu = `Bro, gue gemeteran. GUE GEMETERAN ANJING Gue gak pernah mau berkembangbiak dengan siapapun lebih daripada seorang ${nama_waifu}. Badannya yang cakep, TETE GEDE, pinggul seksi dari seorang BIDADARI. Jujur aja, sakit hati kalau tau KENYATAANNYA gue GAK AKAN PERNAH BISA BUAT KAWIN SAMA DIA, ngewarisin gen gue lewat dia, dan ngebiarin dia ngelahirin anak yang sempurna dari gue.Gue rela ngelakuin APAPUN demi kesempatan buat bikin ${nama_waifu} hamil. A P A P U N. Dan gue bener-bener gk bisa terima kenyataan. Kenapa Authornya rela bikin suatu hal yang sempurna kyk dia? Buat ngegoda kita? NGETAWAIN KITA DI DEPAN MUKA?SUMPAH BRO, GUE UDAH BENER BENER GAK TAHAN. ANJING.`
    }
    
    else if (jenis == "c"){
        var waifu = `Buruan, panggil gue SIMP, ato BAPERAN. ini MURNI PERASAAN GUE. Gue pengen genjot bareng ${nama_waifu}. Ini seriusan, suaranya yang imut, mukanya yang cantik, apalagi badannya yang aduhai ningkatin gairah gue buat genjot ${nama_waifu}. Setiap lapisan kulitnya pengen gue jilat. Saat gue mau crot, gue bakal moncrot sepenuh hati, bisa di perut, muka, badan, teteknya, sampai lubang burit pun bakal gue crot sampai puncak klimaks. Gue bakal meluk dia abis gue moncrot, lalu nanya gimana kabarnya, ngrasain enggas bareng saat telanjang. Dia bakal bilang kalau genjotan gue mantep dan nyatain perasaannya ke gue, bilang kalo dia cinta ama gue. Gue bakal bilang balik seberapa gue cinta ama dia, dan dia bakal kecup gue di pipi. Terus kita ganti pakaian dan ngabisin waktu nonton film, sambil pelukan ama makan hidangan favorit. Gue mau ${nama_waifu} jadi pacar, pasangan, istri, dan idup gue. Gue cinta dia dan ingin dia jadi bagian tubuh gue. Lo kira ini copypasta? Kagak cok. Gue ngetik tiap kata nyatain prasaan gue. Setiap kali elo nanya dia siapa, denger ini baik-baik : DIA ISTRI GUE. Gue sayang ${nama_waifu}, dan INI MURNI PIKIRAN DAN PERASAAN GUE.`
    }
    wangyEl.innerHTML = waifu;
}
function myFunction() {
    var copyText = document.getElementById("wangy");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    }



