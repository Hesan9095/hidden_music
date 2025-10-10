// Music data - 35 tracks across 7 albums
const tracks = [
  {
    id: 1,
    title: "Khodaye Binahayat",
    cover: "images/new/Khodaye-Binahayat.jpg",
    duration: "3:51",
    file: "https://visit1.navahang.net/media/2025/mp3/07/hq/Mehrad%20Hidden%20-%20Khodaye%20Binahayat.mp3",
  },
  {
    id: 2,
    title: "Heart Shaped Box (Cover)",
    cover: "images/new/Heart-Shaped-Box.jpg",
    duration: "3:09",
    file: "https://visit1.navahang.net/media/2025/mp3/07/hq/Mehrad%20Hidden%20-%20Heart%20Shaped%20Box%20(Cover).mp3",
  },
  {
    id: 3,
    title: "Sargardoon",
    cover: "images/new/sargardoon.jpg",
    duration: "3:58",
    file: "https://visit1.navahang.net/media/2025/mp3/05/hq/Mehrad%20Hidden%20&%20Kaviano%20-%20Sargardoon.mp3",
  },
  {
    id: 4,
    title: "Refighe Man",
    cover: "images/covor/Refighe-Man.jpg",
    duration: "3:31",
    file: "https://visit1.navahang.net/media/2025/mp3/05/hq/Mehrad%20Hidden%20&%20Kaviano%20-%20Refighe%20Man.mp3",
  },
  {
    id: 5,
    title: "Mano Bespar",
    cover: "images/covor/Mano-Bespar.jpg",
    duration: "4:30",
    file: "https://visit1.navahang.net/media/2025/mp3/02/hq/Mehrad%20Hidden%20&%20Kaviano%20-%20Mano%20Bespar.mp3",
  },
  {
    id: 6,
    title: "Karma",
    cover: "images/covor/Karma.jpg",
    duration: "3:01",
    file: "https://musictaj.musitraf.com/song403/zmstn/Mehrad%20Hidden%20x%20Sohrab%20Mj%20-%20Karma.mp3",
  },
  {
    id: 7,
    title: "Dele Man",
    cover: "images/covor/Dele-Man.jpg",
    duration: "3:03",
    file: "https://musictaj.musitraf.com/song403/bhr/Mehrad%20Hidden%20x%20Canis%20-%20Dele%20Man.mp3",
  },
  {
    id: 8,
    title: "Boro Khoone",
    cover: "images/covor/Boro-Khoone.jpg",
    duration: "6:32",
    file: "https://musictaj.musitraf.com/song403/bhr/Mahyar%20x%20Shayea%20x%20Mehrad%20Hidden%20-%20Boro%20Khoone.mp3",
  },
  {
    id: 9,
    title: "Beham Rikhte",
    cover: "images/covor/Beham-Rikhte.jpg",
    duration: "4:44",
    file: "https://ts17.tarafdari.com/contents/user741593/content-sound/alireza_jj_mehrad_hidden_-_beham_rikhte.mp3",
  },
  {
    id: 10,
    title: "Bowrelas",
    cover: "images/covor/Bowrelas.jpg",
    duration: "5:54",
    file: "https://bayanbox.ir/download/2378716352428110051/Catchybeatz-ft-Mehrad-Hidden-Bowrelas-320.mp3",
  },
  {
    id: 11,
    title: "Mama",
    cover: "images/covor/Mama.jpg",
    duration: "3:41",
    file: "https://dl.pmcmusic.tv/1403/02/Sijal%20%26%20Mehrad%20Hidden%20-%20Mama.mp3",
  },
  {
    id: 12,
    title: "Khodafez",
    cover: "images/covor/Khodafez.jpg",
    duration: "3:47",
    file: "https://cdns.musicsmelon.com/Music/Mehrad%20Hidden%20-%20Khodafez%20(320).mp3",
  },
  {
    id: 13,
    title: "Moji",
    cover: "images/covor/Moji.jpg",
    duration: "4:17",
    file: "https://ts14.tarafdari.com/contents/user823655/content-sound/moji_shayeaft._mehrad_hidden.mp3",
  },
  {
    id: 14,
    title: "Nakhla",
    cover: "images/covor/Nakhla.jpg",
    duration: "4:42",
    file: "https://ts13.tarafdari.com/contents/user800312/content-sound/fullarchive_hiphop1.mp3",
  },
  {
    id: 15,
    title: "Fresh",
    cover: "images/covor/Fresh.jpg",
    duration: "4:35",
    file: "https://mokhtalefmusic.musitraf.com/music/1400/09/16/Sijal%20%26%20Mehrad%20Hidden%20%26%20Behzad%20Leito%20%26%20Sepehr%20Khalse%20-%20Fresh%20%28320%29.mp3",
  },
  {
    id: 16,
    title: "Journalist",
    cover: "images/covor/Journalist.jpg",
    duration: "4:35",
    file: "https://ts11.tarafdari.com/contents/user599939/content-sound/saman_wilson_mehrad_hidden_sepehr_khalse_saady_journalist.mp3",
  },
  {
    id: 17,
    title: "Seyl",
    cover: "images/covor/Seyl.jpg",
    duration: "5:52",
    file: "https://dlpardis.musitraf.com/Music/1398/10/12/Mehrad%20Hidden%20FT.%20Shayea%20-%20Seyl.mp3",
  },
  {
    id: 18,
    title: "Noghte Joosh",
    cover: "images/covor/Noghte-joosh.jpg",
    duration: "3:50",
    file: "https://ts8.tarafdari.com/contents/user664487/content-sound/ravani_cd_1_track_9_320.mp3",
  },
  {
    id: 19,
    title: "Moorche",
    cover: "images/covor/Moorche.jpg",
    duration: "3:17",
    file: "https://ts10.tarafdari.com/contents/user775338/content-sound/sepehr_khalse_mehrad_hidden_moorche.mp3",
  },
  {
    id: 20,
    title: "Kamin",
    cover: "images/covor/Kamin.jpg",
    duration: "4:12",
    file: "https://mokhtalefmusic.musitraf.com/music/1398/07/26/Mehrad%20Hidden%20Ft%20Zakhmi%20-%20Kamin.mp3",
  },
  {
    id: 21,
    title: "Dardesar",
    cover: "images/covor/Dardesar.jpg",
    duration: "2:44",
    file: "https://mokhtalefmusic.musitraf.com/music/1399/07/10/Behzad%20Leito%20-%20Dardesar%20%28Ft%20Catchybeatz%29%20%5B320%5D.mp3",
  },
  {
    id: 22,
    title: "Gang Gang Gang",
    cover: "images/covor/gang.jpg",
    duration: "3:20",
    file: "https://dl.musicchi.net/1401/06/14/Mehraad%20Hidden%20Ft%20Canis%20-%20Gang%20Gang%20Gang.mp3",
  },
  {
    id: 23,
    title: "Aroos",
    cover: "images/covor/aroos.jpg",
    duration: "5:08",
    file: "https://dl.my-ahangha.ir/up/2021/Mehrad%20Hidden%20-%20Aroos.mp3",
  },
  {
    id: 24,
    title: "Oomadam To Shahr",
    cover: "images/covor/oomadam.jpg",
    duration: "4:36",
    file: "https://cdn.musicgitar.ir/Music/Sijal/320/Sijal%20-%20Oomadam%20Too%20Shahr%20[320].mp3",
  },
  {
    id: 25,
    title: "Rock A Chock",
    cover: "images/covor/Rock.jpg",
    duration: "5:57",
    file: "https://ts14.tarafdari.com/contents/user800312/content-sound/02_-_mehrad_hidden_ft_pishro_-_rock_a_chock2.mp3",
  },
  {
    id: 26,
    title: "Mosser",
    cover: "images/covor/Mosser.jpg",
    duration: "5:33",
    file: "https://ts5.tarafdari.com/contents/user244319/content-sound/shayea_-_mosser_ft._mehrad_hidden.mp3",
  },
  {
    id: 27,
    title: "Ashpaz",
    cover: "images/covor/Ashpaz.jpg",
    duration: "5:24",
    file: "https://mokhtalefmusic.musitraf.com/music/1398/06/20/Mehrad%20Hidden%20%2C%20Canis%20%26%20Saman%20Wilson%20-%20Ashpaz.mp3",
  },
  {
    id: 28,
    title: "Lumpen",
    cover: "images/covor/lumpen.jpg",
    duration: "5:54",
    file: "https://ts10.tarafdari.com/contents/user760078/content-sound/02_mehrad_hidden_ft_zakhmi_-_lumpen.mp3",
  },
  {
    id: 29,
    title: "Lili Lili Hozak",
    cover: "images/covor/lilihozak.jpg",
    duration: "4:14",
    file: "https://ts17.tarafdari.com/contents/user881114/content-sound/mehrad_hidden_ft_sohrab_mj_-_lili_hozak_320_r3d.mp3",
  },
  {
    id: 30,
    title: "Ma",
    cover: "images/covor/ma.jpg",
    duration: "5:33",
    file: "https://dl.bandmusic.ir/files/1404/01/21/Sohram%20Mj%20&%20Mehrad%20Hidden%20-%20Ma.mp3",
  },
  {
    id: 31,
    title: "Ghogha",
    cover: "images/covor/ghogha.jpg",
    duration: "2:50",
    file: "https://ts1.tarafdari.com/contents/user238206/content-sound/01.zakhmi_-_ghogha_ft_mehrad_hidden.mp3",
  },
  {
    id: 32,
    title: "Keybaz",
    cover: "images/covor/Keybaz-main.jpg",
    duration: "3:43",
    file: "https://dl.my-ahangha.ir/up/2019/Mehrad%20Hidden%20-%20Keybaz.mp3",
  },
  {
    id: 33,
    title: "Dard",
    cover: "images/covor/dard.jpg",
    duration: "5:48",
    file: "http://dl2.sarimusic.in/Old/1396/09/25/Me/Mehrad%20Hidden%20-%20Singles/Mehrad%20Hidden%20-%20Dard.mp3",
  },
  {
    id: 34,
    title: "Gloomy (HHU)",
    cover: "images/covor/gloomy.jpg",
    duration: "4:08",
    file: "https://dl.tehsong.xyz/tehsong/Hosein/1400/Aban/Persian-Music/29/HHU%20-%20Gloomy%20(128).mp3",
  },
  {
    id: 35,
    title: "Space (HHU)",
    cover: "images/covor/space.jpg",
    duration: "3:34",
    file: "http://dl.tehsong.xyz/tehsong/Hosein/99/Dey/Persian-Music/05/HHU%20-%20Space.mp3",
  },
  {
    id: 36,
    title: "Reason (HHU)",
    cover: "images/covor/reason.jpg",
    duration: "3:36",
    file: "http://dl.tehsong.xyz/tehsong/Hosein/99/Bahman/Persian-Music/08/HHU%20-%20Reason.mp3",
  },
  {
    id: 37,
    title: "Pas chi Shod",
    cover: "images/covor/paschishod.jpg",
    duration: "4:35",
    file: "https://ts14.tarafdari.com/contents/user800312/content-sound/mehrad-hidden-pas-chi-shod-ft-tara-128.mp3",
  },
  {
    id: 38,
    title: "Cigare Soorati",
    cover: "images/covor/sigar.jpg",
    duration: "6:00",
    file: "https://ts17.tarafdari.com/contents/user9694/content-sound/cigare_soorati_320.mp3",
  },
  {
    id: 39,
    title: "Tabstoon Kotahe",
    cover: "images/covor/zakhar.jpg",
    duration: "5:58",
    file: "https://dl.sultanmusic.ir/music/1403/4/3/Zedbazi%20-%20Tabstoon%20Kotahe.mp3",
  },
  {
    id: 40,
    title: "Chera Badi",
    cover: "images/covor/zakhar.jpg",
    duration: "4:05",
    file: "https://ts12.tarafdari.com/contents/user808697/content-sound/hichkas_-_chera_badi.mp3",
  },
  {
    id: 41,
    title: "Nakoni Bavar",
    cover: "images/covor/zakhar.jpg",
    duration: "5:19",
    file: "https://ts12.tarafdari.com/contents/user800312/content-sound/zedbazi-nakoni-bavar-ft-behzad-leito-128.mp3",
  },
  {
    id: 42,
    title: "Tehran Male Mane",
    cover: "images/covor/zakhar.jpg",
    duration: "6:35",
    file: "https://ts2.tarafdari.com/contents/user554482/content-sound/1_zedbazi_-_tehran_maale_mane.mp3",
  },
  {
    id: 43,
    title: "Nabayad Vaysam",
    cover: "images/covor/zakhar.jpg",
    duration: "5:27",
    file: "https://sv2.bibakmusic.com/Music/98/khordad/1/ZedBazi%20Nabayad%20Vaysim%20320%20.mp3",
  },
  {
    id: 44,
    title: "Mersi Koli",
    cover: "images/covor/zakhar.jpg",
    duration: "4:27",
    file: "https://sv2.bibakmusic.com/Music/98/khordad/1/ZedBazi%20Mersi%20Koli%20320%20.mp3",
  },
  {
    id: 45,
    title: "Delam Tang Shodeh",
    cover: "images/covor/zakhar.jpg",
    duration: "4:11",
    file: "https://sv2.bibakmusic.com/Music/98/khordad/1/ZedBazi%20Delam%20Tang%20Shodeh%20320%20.mp3",
  },
  {
    id: 46,
    title: "Montazer Boodan Kariye Ke",
    cover: "images/covor/zakhar.jpg",
    duration: "5:07",
    file: "https://ts5.tarafdari.com/contents/user572353/content-sound/zedbazi-montazer-boodan-kaarie-ke-bazi-vaghta-pesara-bara-do_2.mp3",
  },
  {
    id: 47,
    title: "Pedare Man Bad Mano",
    cover: "images/covor/pedareman.jpg",
    duration: "6:41",
    file: "https://dl.musicchi.net/1402/03/16/Zed%20Bazi%20-%20Pedare%20Man%20Bad%20Mano%20Negah%20Mikone.mp3",
  },
  {
    id: 48,
    title: "Bi Hess",
    cover: "images/covor/Zed.jpg",
    duration: "5:44",
    file: "https://dl.bandmusic.ir/files/1403/06/12/ZedBazi%20-%20Bi%20Hess.mp3",
  },
  {
    id: 49,
    title: "Chon Ke Divoonatam",
    cover: "images/covor/Zed.jpg",
    duration: "3:08",
    file: "https://xx.sahand-music.ir/Archive/Z/ZedBazi/Single/Zed%20Bazi%20-%20Chon%20Ke%20Divoonatam.mp3",
  },
  {
    id: 50,
    title: "Coocooli Koo",
    cover: "images/covor/Zed.jpg",
    duration: "4:48",
    file: "https://xx.music-doni.ir/archive/Z/ZedBazi/Single/Zed%20Bazi%20-%20Coocooli%20Koo.mp3",
  },
  {
    id: 51,
    title: "Dastane Ma",
    cover: "images/covor/Zed.jpg",
    duration: "6:11",
    file: "https://xx.music-doni.ir/archive/Z/ZedBazi/Single/Zed%20Bazi%20-%20Dastane%20Ma.mp3",
  },
  {
    id: 52,
    title: "Kooche",
    cover: "images/covor/Zed.jpg",
    duration: "4:41",
    file: "https://xx.sahand-music.ir/Archive/Z/ZedBazi/Single/Zed%20Bazi%20-%20Kooche.mp3",
  },
  {
    id: 53,
    title: "Mesle Man",
    cover: "images/covor/Zed.jpg",
    duration: "6:09",
    file: "https://xx.sahand-music.ir/Archive/Z/ZedBazi/Single/Zed%20Bazi%20-%20Mesle%20Man.mp3",
  },
  {
    id: 54,
    title: "Bekhand Masnoei",
    cover: "images/covor/Zed.jpg",
    duration: "5:02",
    file: "https://download1.musitraf.com/Music/2023/Unknown%20Artist/Unknown%20Artist%20-%20Bekhand%20Masnoei.mp3?src=download1",
  },
  {
    id: 55,
    title: "Party",
    cover: "images/covor/Zed.jpg",
    duration: "4:17",
    file: "https://xx.sahand-music.ir/Archive/Z/ZedBazi/Single/Zed%20Bazi%20-%20Party.mp3",
  },
  {
    id: 56,
    title: "Talafate Jang",
    cover: "images/covor/Zed.jpg",
    duration: "3:02",
    file: "https://myniloomusic.musicmelllnet.com/Niloo/Zedbazi/Zedbazi%20-%20Talafate%20Jang.mp3",
  },
  {
    id: 57,
    title: "Taze Shurue Zendegimoone",
    cover: "images/covor/Zed.jpg",
    duration: "5:58",
    file: "https://xx.music-doni.ir/archive/Z/ZedBazi/Single/Zed%20Bazi%20-%20Taze%20Shurue%20Zendegimoone.mp3",
  },
  {
    id: 58,
    title: "Obi",
    cover: "images/covor/obi.jpg",
    duration: "5:59",
    file: "https://ts9.tarafdari.com/contents/user675900/content-sound/zedbazi-obi-128.mp3",
  },
  {
    id: 59,
    title: "Zamin Safe",
    cover: "images/covor/Zed.jpg",
    duration: "6:30",
    file: "https://ts1.tarafdari.com/contents/user138722/content-sound/zedbazi-zamin-saafe.mp3",
  },
  {
    id: 60,
    title: "Yakh",
    cover: "images/covor/yakh.jpg",
    duration: "7:28",
    file: "https://ts5.tarafdari.com/contents/user703410/content-sound/zedbazi_-_yakh.mp3",
  },
  {
    id: 61,
    title: "Bache Mahal",
    cover: "images/covor/bache.jpg",
    duration: "6:38",
    file: "https://ts5.tarafdari.com/contents/user703410/content-sound/zedbazi_-_bache_mahal.mp3",
  },
  {
    id: 62,
    title: "Daro Baz Kon",
    cover: "images/covor/Zed.jpg",
    duration: "5:58",
    file: "https://dl.musicchi.net/1401/03/19/Zedbazi-Daro-Baz-Kon.mp3",
  },
  {
    id: 63,
    title: "Sa'at Vayse",
    cover: "images/covor/saat.jpg",
    duration: "5:12",
    file: "https://dl.my-ahangha.ir/up/2015/9/Zedbazi,%20Behzad%20Leito%20-%20Saat%20Vayse%20320_(Ahangha.Net).mp3",
  },
  {
    id: 64,
    title: "Zendegie Mane",
    cover: "images/covor/Zed.jpg",
    duration: "5:50",
    file: "https://cdns.musicsmelon.com/Music/Zedbazi%20-%20Zendegie%20Mane%20(320).mp3",
  },
  {
    id: 65,
    title: "Ahangamoon Khodast",
    cover: "images/covor/Zed.jpg",
    duration: "6:28",
    file: "https://xx.music-doni.ir/archive/Z/ZedBazi/Single/Zed%20Bazi%20-%20Ahangamon%20Khodast.mp3",
  },
  {
    id: 66,
    title: "Aroosak",
    cover: "images/covor/Zed.jpg",
    duration: "3:48",
    file: "https://xx.music-doni.ir/archive/Z/ZedBazi/Single/Zed%20Bazi%20-%20Aroosak.mp3",
  },
  {
    id: 67,
    title: "Az Khazar Ta Khalije Fars",
    cover: "images/covor/Zed.jpg",
    duration: "3:35",
    file: "https://xx.sahand-music.ir/Archive/Z/ZedBazi/Single/Zed%20Bazi%20-%20Az%20Khazar%20Ta%20Khalije%20Fars.mp3",
  },
  {
    id: 68,
    title: "Khafe Sho",
    cover: "images/covor/khafesho.jpg",
    duration: "6:25",
    file: "https://ts10.tarafdari.com/contents/user767993/content-sound/mehrad_hidden_-_khafe_sho.mp3",
  },
  {
    id: 69,
    title: "Menhaye Yek",
    cover: "images/covor/menhaye.jpg",
    duration: "4:47",
    file: "https://dlm.arshfollower.com/musician/1403/10/Sohrab-MJ-Menhaye-Yek-(Ft-Mehrad-Hidden)-arsh-music.ir-320.mp3",
  },
  {
    id: 70,
    title: "Az Tehran Motenaferan",
    cover: "images/covor/aztehran.jpg",
    duration: "4:13",
    file: "http://dlrapfarsi.ir/Mp3/1400/Sohrab%20MJ%20&%20Mehrad%20Hidden%20&%20Saman%20Wilson%20&%20Ali%20K/Sohrab%20MJ%20&%20Mehrad%20Hidden%20&%20Saman%20Wilson%20&%20Ali%20K%20%E2%80%93%20Az%20Tehran%20Motenaferan.mp3",
  },
  {
    id: 71,
    title: "Oof",
    cover: "images/covor/oof.jpg",
    duration: "4:05",
    file: "https://hitava1.86449.ir.cdn.ir/musics/Mehrad%20Hidden/single/320/OOf-Mehrad-Hidden.mp3",
  },
  {
    id: 72,
    title: "Tehran Mibinamet",
    cover: "images/covor/tehranmibinamet.jpg",
    duration: "4:47",
    file: "https://ts12.tarafdari.com/contents/user764868/content-sound/zedbazi_-_tehran_mibinamet.mp3",
  },
  {
    id: 73,
    title: "Rakab",
    cover: "images/covor/rakab.jpg",
    duration: "5:32",
    file: "https://xx.sahand-music.ir/Archive/M/Mehrad%20Hidden/1402/Mehrad%20Hidden%20-%20Rakab.mp3",
  },
  {
    id: 74,
    title: "Khoda Kooshi",
    cover: "images/covor/khodakoosi.jpg",
    duration: "3:26",
    file: "https://dl.musicchi.net/1401/09/19/Arta%20-%20Khoda%20Kooshi%20%28Ft.%20Mehrad%20Hidden%29.mp3",
  },
  {
    id: 75,
    title: "Hame kos keshan",
    cover: "images/covor/hamekos.jpg",
    duration: "3:20",
    file: "https://xx.venusmusic.ir/Archive/M/Mehrad%20Hidden/Single/06%20Mehrad%20Hidden%20Ft%20Dara%20-%20Hame%20Kos%20Keshan.mp3",
  },
  {
    id: 76,
    title: "Be Omid To",
    cover: "images/covor/beomidto.jpg",
    duration: "4:55",
    file: "https://ts10.tarafdari.com/contents/user767993/content-sound/be_omide_to.mp3",
  },
  {
    id: 77,
    title: "Miam Ro Khatet",
    cover: "images/covor/miamrokhatet.jpg",
    duration: "4:41",
    file: "https://ts11.tarafdari.com/contents/user758627/content-sound/sohrab_mj_miam_rooye_khatet_ft_mehrad_hidden_catchybeatz_ali.mp3",
  },
  {
    id: 78,
    title: "Let Me",
    cover: "images/covor/letme.jpg",
    duration: "3:47",
    file: "https://ts10.tarafdari.com/contents/user767993/content-sound/let_me1.mp3",
  },
  {
    id: 79,
    title: "A Star In The Distance",
    cover: "images/covor/distance.jpg",
    duration: "4:03",
    file: "https://ts12.tarafdari.com/contents/user767993/content-sound/a_star_in_the_distance.mp3",
  },
  {
    id: 80,
    title: "The Gift",
    cover: "images/covor/gift.jpg",
    duration: "4:09",
    file: "https://s2.uupload.ir/filelink/XDzgZP7Y7fgO_7ecb7d273a/the_gift_ge8u.mp3",
  },
  {
    id: 81,
    title: "Time After Time",
    cover: "images/covor/aftertime.jpg",
    duration: "5:52",
    file: "https://s2.uupload.ir/filelink/A1dnzSQSAIRQ_0493bf05a0/hidden_-_time_after_time_inog.mp3",
  },
  {
    id: 82,
    title: "Oostaye Ghadimi",
    cover: "images/covor/oostaye.jpg",
    duration: "4:03",
    file: "https://ts14.tarafdari.com/contents/user832235/content-sound/oostaye_ghadimi.mp3",
  },
  {
    id: 83,
    title: "Ghol Yakh",
    cover: "images/covor/gholyakh.jpg",
    duration: "1:13",
    file: "https://dl.yekmusic.com/Song/Mehrad%20Hidden%20%7C%20Shab%20Too%20Moohaye%20(320).mp3",
  },
]

// Album data for separate pages (kept for album pages, but not used in main player)
const albums = {
  "bozorg-vol2": {
    title: "Bozorg, Vol. 2",
    year: "2015",
    cover: "/mehrad-hidden-album-cover-dark-purple.jpg",
    description: "اولین آلبوم رسمی مهراد هیدن که شامل ترک‌های محبوب مسافر و شب‌های تهران است.",
  },
  "toonel-vol1": {
    title: "Toonel, Vol. 1",
    year: "2017",
    cover: "/mehrad-hidden-second-album-cover-modern.jpg",
    description: "آلبومی که مفهوم تونل و عبور از تاریکی به نور را بررسی می‌کند.",
  },
  sefr: {
    title: "Sefr",
    year: "2018",
    cover: "/mehrad-hidden-album-cover-dark-purple.jpg",
    description: "آلبومی درباره شروع‌های تازه و بازگشت به نقطه صفر.",
  },
  esalakh: {
    title: "Salakh",
    year: "2019",
    cover: "/mehrad-hidden-second-album-cover-modern.jpg",
    description: "EP کوتاه و قدرتمند با مضامین اجتماعی و سیاسی.",
  },
  "toonel-vol2": {
    title: "Toonel, Vol. 2",
    year: "2020",
    cover: "/mehrad-hidden-album-cover-dark-purple.jpg",
    description: "ادامه سری تونل با عمق بیشتر و پیچیدگی‌های صوتی.",
  },
  alavis1: {
    title: "Alavis 1",
    year: "2020",
    cover: "/mehrad-hidden-album-cover-dark-purple.jpg",
    description: "ادامه سری تونل با عمق بیشتر و پیچیدگی‌های صوتی.",
  },
  zoozanaghe: {
    title: "Zoozanaghe",
    year: "2022",
    cover: "/mehrad-hidden-second-album-cover-modern.jpg",
    description: "آلبومی با الهام از اشکال هندسی و ساختارهای ریاضی.",
  },
  alavis2: {
    title: "Alavis 2",
    year: "2024",
    cover: "/mehrad-hidden-album-cover-dark-purple.jpg",
    description: "ادامه سری تونل با عمق بیشتر و پیچیدگی‌های صوتی.",
  },
  pizza: {
    title: "Pizza",
    year: "2024",
    cover: "/mehrad-hidden-album-cover-dark-purple.jpg",
    description: "جدیدترین آلبوم با رویکردی متفاوت و مفاهیم روزمره.",
  },
}

// Player state
let currentTrackIndex = -1 // No track selected initially
let isPlaying = false
let isDragging = false
const audio = document.getElementById("audioPlayer")
const musicPlayer = document.getElementById("musicPlayer")

// DOM elements
const playPauseBtn = document.getElementById("playPauseBtn")
const currentTitle = document.getElementById("currentTitle")
const currentCover = document.getElementById("currentCover")
const currentTime = document.getElementById("currentTime")
const durationEl = document.getElementById("duration") // Renamed to avoid conflict with built-in duration
const progressFill = document.getElementById("progressFill")
const volumeSlider = document.getElementById("volumeSlider")
const progressBar = document.getElementById("progressBar")

let currentPlayingElement = null

function initSearch() {
  const searchInput = document.getElementById("searchInput")
  const searchResults = document.getElementById("searchResults")

  if (searchInput && searchResults) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase().trim()

      if (query.length > 0) {
        showSearchResults(query)
      } else {
        hideSearchResults()
      }
    })

    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const query = e.target.value.toLowerCase().trim()
        performSearch(query)
      }
    })

    // Hide search results when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".nav-search")) {
        hideSearchResults()
      }
    })
  }
}

function showSearchResults(query) {
  const searchResults = document.getElementById("searchResults")
  const filteredTracks = tracks.filter((track) => track.title.toLowerCase().includes(query)).slice(0, 5) // Show max 5 results

  if (filteredTracks.length > 0) {
    searchResults.innerHTML = filteredTracks
      .map(
        (track, index) => `
      <div class="search-result-item" onclick="playTrack(${tracks.indexOf(track)}); hideSearchResults();">
        <img src="${track.cover}" alt="${track.title}" class="search-result-thumb">
        <div class="search-result-info">
          <h5>${track.title}</h5>
        </div>
      </div>
    `,
      )
      .join("")
    searchResults.style.display = "block"
  } else {
    searchResults.innerHTML = '<div class="search-result-item"><p>نتیجه‌ای یافت نشد</p></div>'
    searchResults.style.display = "block"
  }
}

function hideSearchResults() {
  const searchResults = document.getElementById("searchResults")
  if (searchResults) {
    searchResults.style.display = "none"
  }
}

function performSearch(query) {
  const allTracksSection = document.getElementById("all-tracks")
  if (allTracksSection) {
    allTracksSection.scrollIntoView({ behavior: "smooth" })
    setTimeout(() => filterTracks(query), 500)
  }
  hideSearchResults()
}

function filterTracks(query) {
  const allTrackItems = document.querySelectorAll(".all-tracks-list .track-item")

  if (!query) {
    allTrackItems.forEach((item) => (item.style.display = "grid"))
    return
  }

  allTrackItems.forEach((item) => {
    const trackName = item.querySelector(".track-name")?.textContent.toLowerCase() || ""

    if (trackName.includes(query)) {
      item.style.display = "grid"
    } else {
      item.style.display = "none"
    }
  })
}

function generateAllTracksList() {
  const container = document.getElementById("allTracksList")
  if (!container) return

  container.innerHTML = tracks
    .map(
      (track, index) => `
    <div class="track-item" onclick="playTrack(${index})">
      <div class="track-number">${index + 1}</div>
      <div class="track-title">
        <span class="track-name">${track.title}</span>
      </div>
      <div class="track-duration">${track.duration}</div>
    </div>
  `,
    )
    .join("")
}

function initPlayer() {
  generateAllTracksList()

  if (audio) {
    audio.addEventListener("loadedmetadata", () => {
      if (durationEl) durationEl.textContent = formatTime(audio.duration)
    })

    audio.addEventListener("timeupdate", () => {
      if (!isDragging && audio.duration && progressFill && currentTime) {
        const progress = (audio.currentTime / audio.duration) * 100
        progressFill.style.width = progress + "%"
        currentTime.textContent = formatTime(audio.currentTime)
      }
    })

    audio.addEventListener("ended", () => {
      nextTrack()
    })

    if (volumeSlider) {
      volumeSlider.addEventListener("input", () => {
        audio.volume = volumeSlider.value
      })
    }
  }

  // Initialize draggable progress bar
  if (progressBar) {
    progressBar.addEventListener("mousedown", startDrag)
    progressBar.addEventListener("click", seekTo)
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
}

let isPlayerVisible = false

function playTrack(index) {
  if (index < 0 || index >= tracks.length) return

  currentTrackIndex = index
  const track = tracks[currentTrackIndex]

  if (audio) {
    audio.src = track.file
    audio.load()

    updatePlayerUI()
    updatePlayingState()

    if (!isPlayerVisible) {
      musicPlayer.style.display = "block"
      isPlayerVisible = true
    }

    audio.addEventListener(
      "canplay",
      () => {
        audio
          .play()
          .then(() => {
            isPlaying = true
            if (playPauseBtn) playPauseBtn.textContent = "⏸"
          })
          .catch((e) => {
            console.log("Auto-play prevented:", e)
          })
      },
      { once: true },
    )
  }
}

function togglePlayPause() {
  if (!audio || currentTrackIndex === -1) return

  if (isPlaying) {
    audio.pause()
    isPlaying = false
    if (playPauseBtn) playPauseBtn.textContent = "▶"
  } else {
    audio
      .play()
      .then(() => {
        isPlaying = true
        if (playPauseBtn) playPauseBtn.textContent = "⏸"
      })
      .catch((e) => {
        console.log("Play failed:", e)
      })
  }
}

function nextTrack() {
  if (currentTrackIndex === -1) return
  currentTrackIndex = (currentTrackIndex + 1) % tracks.length
  playTrack(currentTrackIndex)
}

function prevTrack() {
  if (currentTrackIndex === -1) return
  currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length
  playTrack(currentTrackIndex)
}

function seekTo(event) {
  if (!audio || !audio.duration) return

  const progressBar = event.currentTarget
  const rect = progressBar.getBoundingClientRect()
  const clickX = event.clientX - rect.left
  const width = rect.width
  const percentage = clickX / width

  // Since direction: ltr, no need to invert for RTL
  audio.currentTime = percentage * audio.duration
}

function startDrag(event) {
  isDragging = true
  seekTo(event)

  document.addEventListener("mousemove", drag)
  document.addEventListener("mouseup", stopDrag)
}

function drag(event) {
  if (isDragging) {
    seekTo({ currentTarget: progressBar, clientX: event.clientX })
  }
}

function stopDrag() {
  isDragging = false
  document.removeEventListener("mousemove", drag)
  document.removeEventListener("mouseup", stopDrag)
}

function updatePlayerUI() {
  const track = tracks[currentTrackIndex]
  if (track) {
    if (currentTitle) currentTitle.textContent = track.title
    if (currentCover) {
      currentCover.src = track.cover
      currentCover.alt = track.title
    }
    const downloadBtn = document.getElementById("downloadBtn")
    if (downloadBtn) {
      downloadBtn.href = track.file
      downloadBtn.download = `${track.title}.mp3`
    }
  }
}

function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00"

  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = Math.floor(seconds % 60)
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
}

function toggleMobileMenu() {
  const navLinks = document.getElementById("navLinks")
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")

  if (navLinks && mobileMenuBtn) {
    navLinks.classList.toggle("active")
    mobileMenuBtn.classList.toggle("active")
  }
}

function closeMobileMenu() {
  const navLinks = document.getElementById("navLinks")
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")

  if (navLinks && mobileMenuBtn) {
    navLinks.classList.remove("active")
    mobileMenuBtn.classList.remove("active")
  }
}

function updatePlayingState() {
  // حذف کلاس playing از المان قبلی
  if (currentPlayingElement) {
    currentPlayingElement.classList.remove("playing")
  }

  const allTrackItems = document.querySelectorAll(".track-item")
  if (allTrackItems[currentTrackIndex]) {
    allTrackItems[currentTrackIndex].classList.add("playing")
    currentPlayingElement = allTrackItems[currentTrackIndex]
  }

  // آپدیت کردن album cards در بخش جدیدترین آهنگ‌ها
  const albumCards = document.querySelectorAll("#songs .album-card")
  albumCards.forEach((card, index) => {
    if (index === currentTrackIndex) {
      card.classList.add("playing")
    } else {
      card.classList.remove("playing")
    }
  })
}

// تابع جدید برای مدیریت پنل ادمین
function toggleAdminPanel() {
  const adminPanel = document.getElementById("adminPanel")
  if (adminPanel) {
    adminPanel.classList.toggle("active")
  }
}

function addNewTrack(event) {
  event.preventDefault()

  const title = document.getElementById("trackTitle").value
  const cover = document.getElementById("trackCover").value
  const duration = document.getElementById("trackDuration").value
  const file = document.getElementById("trackFile").value

  if (!title || !cover || !duration || !file) {
    alert("لطفاً تمام فیلدها را پر کنید")
    return
  }

  // ساخت آهنگ جدید
  const newTrack = {
    id: tracks.length + 1,
    title: title,
    cover: cover,
    duration: duration,
    file: file,
  }

  // اضافه کردن به اول آرایه
  tracks.unshift(newTrack)

  // بازسازی لیست‌ها
  generateAllTracksList()
  updateNewSongsSection()

  // پاک کردن فرم
  document.getElementById("adminForm").reset()

  // بستن پنل
  toggleAdminPanel()

  alert("آهنگ با موفقیت اضافه شد!")
}

function updateNewSongsSection() {
  const newSongsGrid = document.querySelector("#songs .albums-grid")
  if (!newSongsGrid) return

  // نمایش 3 آهنگ اول
  const latestTracks = tracks.slice(0, 3)

  newSongsGrid.innerHTML = latestTracks
    .map(
      (track, index) => `
    <a href="#" class="album-card" onclick="event.preventDefault(); playTrack(${index})">
      <div class="album-content">
        <img src="${track.cover}" alt="${track.title}" class="album-cover">
        <div class="album-info">
          <h4>${track.title}</h4>
          <p>${track.duration}</p>
        </div>
      </div>
    </a>
  `,
    )
    .join("")
}

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".album-card, .popular-track-card, .about-content")
  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })

  initPlayer()
  initSearch()

  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu)
  })

  document.addEventListener("click", (e) => {
    const navLinks = document.getElementById("navLinks")
    const mobileMenuBtn = document.getElementById("mobileMenuBtn")

    if (navLinks && mobileMenuBtn && !e.target.closest(".nav-links") && !e.target.closest(".mobile-menu-btn")) {
      navLinks.classList.remove("active")
      mobileMenuBtn.classList.remove("active")
    }
  })

  const adminForm = document.getElementById("adminForm")
  if (adminForm) {
    adminForm.addEventListener("submit", addNewTrack)
  }
})

document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "Space":
      e.preventDefault()
      togglePlayPause()
      break
    case "ArrowRight":
      nextTrack()
      break
    case "ArrowLeft":
      prevTrack()
      break
  }
})

window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})
