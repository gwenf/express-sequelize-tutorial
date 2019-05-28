'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {"username":"dmelloy0","first_name":"Delmore","email":"dafield0@jigsy.com","is_admin":false,"createdAt":"2018-05-11 00:24:14","updatedAt":"2019-05-18 12:44:46"},
      {"username":"lcarlone1","first_name":"Lewie","email":"lrymour1@hubpages.com","is_admin":true,"createdAt":"2019-02-23 07:59:25","updatedAt":"2019-01-05 08:57:23"},
      {"username":"ewickwarth2","first_name":"Evangeline","email":"eilewicz2@google.pl","is_admin":false,"createdAt":"2018-12-31 05:03:20","updatedAt":"2018-06-02 22:08:48"},
      {"username":"bplenderleith3","first_name":"Bambi","email":"bdorkin3@tinyurl.com","is_admin":true,"createdAt":"2019-04-27 02:10:00","updatedAt":"2019-01-31 14:47:10"},
      {"username":"jhabeshaw4","first_name":"Jamil","email":"jpariso4@goo.gl","is_admin":true,"createdAt":"2019-01-27 19:30:19","updatedAt":"2019-03-14 12:21:18"},
      {"username":"dcampling5","first_name":"Dougy","email":"dpassey5@sphinn.com","is_admin":false,"createdAt":"2019-02-28 08:56:59","updatedAt":"2018-09-29 12:25:08"},
      {"username":"cmathieu6","first_name":"Cris","email":"cortsmann6@ezinearticles.com","is_admin":false,"createdAt":"2018-12-06 15:30:11","updatedAt":"2019-03-03 22:18:48"},
      {"username":"cchidlow7","first_name":"Chrysler","email":"cseathwright7@csmonitor.com","is_admin":false,"createdAt":"2018-08-14 02:36:03","updatedAt":"2018-08-25 14:04:57"},
      {"username":"mjanicki8","first_name":"Minne","email":"mbellows8@irs.gov","is_admin":true,"createdAt":"2019-04-17 07:39:59","updatedAt":"2018-07-30 13:44:31"},
      {"username":"mjentin9","first_name":"Melany","email":"mcosgrove9@shutterfly.com","is_admin":false,"createdAt":"2018-11-02 15:20:17","updatedAt":"2019-01-29 23:57:12"},
      {"username":"spiddlesdena","first_name":"Sargent","email":"swynetta@4shared.com","is_admin":true,"createdAt":"2019-04-22 09:21:02","updatedAt":"2018-07-17 10:34:05"},
      {"username":"kavrahamb","first_name":"Kendricks","email":"kwadhamb@wikimedia.org","is_admin":false,"createdAt":"2018-12-19 16:12:57","updatedAt":"2019-05-19 17:10:36"},
      {"username":"mstortonc","first_name":"Myranda","email":"mmcvicarc@barnesandnoble.com","is_admin":false,"createdAt":"2019-01-27 05:50:53","updatedAt":"2019-03-27 18:26:15"},
      {"username":"dlampbrechtd","first_name":"Dimitri","email":"dsalland@smh.com.au","is_admin":true,"createdAt":"2018-07-03 21:31:55","updatedAt":"2018-07-02 05:00:01"},
      {"username":"bvearncombe","first_name":"Bea","email":"bhaslucke@wordpress.com","is_admin":false,"createdAt":"2018-09-18 15:31:29","updatedAt":"2019-04-12 13:10:12"},
      {"username":"asparkef","first_name":"Antone","email":"akeelef@nature.com","is_admin":true,"createdAt":"2018-05-17 12:07:20","updatedAt":"2018-06-10 11:53:39"},
      {"username":"lwadmang","first_name":"Leslie","email":"lheathfieldg@thetimes.co.uk","is_admin":true,"createdAt":"2019-05-11 19:02:08","updatedAt":"2019-02-23 23:25:30"},
      {"username":"bpetrollih","first_name":"Biddie","email":"bhamsherh@gnu.org","is_admin":true,"createdAt":"2018-06-27 21:13:46","updatedAt":"2019-05-23 13:50:14"},
      {"username":"dgricewoodi","first_name":"Debera","email":"dledrami@miitbeian.gov.cn","is_admin":true,"createdAt":"2018-08-22 21:04:40","updatedAt":"2018-08-13 17:20:50"},
      {"username":"gjarvisj","first_name":"Garfield","email":"geckelsj@cbsnews.com","is_admin":false,"createdAt":"2018-08-18 20:30:21","updatedAt":"2018-08-05 13:24:03"},
      {"username":"aclydek","first_name":"Adriaens","email":"adumbark@netvibes.com","is_admin":true,"createdAt":"2018-08-30 06:40:01","updatedAt":"2018-10-18 01:40:31"},
      {"username":"kdobesonl","first_name":"Kathryne","email":"krattriel@guardian.co.uk","is_admin":true,"createdAt":"2019-01-31 21:49:48","updatedAt":"2018-07-29 00:17:27"},
      {"username":"lkalkofenm","first_name":"Laurent","email":"lstrewthersm@rambler.ru","is_admin":true,"createdAt":"2019-03-28 02:21:14","updatedAt":"2019-05-06 21:10:05"},
      {"username":"hellsburyn","first_name":"Huey","email":"hpullann@statcounter.com","is_admin":false,"createdAt":"2019-04-10 12:13:38","updatedAt":"2018-12-10 07:19:50"},
      {"username":"gdevonaldo","first_name":"Goldi","email":"gmatschuko@netvibes.com","is_admin":true,"createdAt":"2018-06-27 20:26:27","updatedAt":"2019-03-24 05:30:39"},
      {"username":"rdelosp","first_name":"Richard","email":"rsicelyp@salon.com","is_admin":true,"createdAt":"2018-08-21 18:07:32","updatedAt":"2018-10-30 14:01:21"},
      {"username":"cferrerq","first_name":"Cob","email":"cayliffq@flavors.me","is_admin":false,"createdAt":"2018-12-10 01:29:17","updatedAt":"2018-09-04 12:30:27"},
      {"username":"sburrelr","first_name":"Sherman","email":"sruttr@altervista.org","is_admin":true,"createdAt":"2018-09-02 08:01:28","updatedAt":"2019-05-15 03:03:44"},
      {"username":"lbudgetts","first_name":"Leontyne","email":"llansdowns@admin.ch","is_admin":false,"createdAt":"2018-08-28 13:23:11","updatedAt":"2019-05-02 00:05:43"},
      {"username":"spithcockt","first_name":"Sarena","email":"srablent@indiegogo.com","is_admin":true,"createdAt":"2019-04-04 03:19:08","updatedAt":"2019-02-08 15:28:53"},
      {"username":"shamiltonu","first_name":"Scot","email":"stunderu@yandex.ru","is_admin":true,"createdAt":"2019-02-27 06:33:09","updatedAt":"2018-07-17 13:40:24"},
      {"username":"sgrisbrookv","first_name":"Stephannie","email":"sivanikovv@samsung.com","is_admin":true,"createdAt":"2018-11-26 11:30:52","updatedAt":"2019-04-14 18:48:09"},
      {"username":"lajeanw","first_name":"Laryssa","email":"lstablesw@bravesites.com","is_admin":true,"createdAt":"2018-10-16 14:34:05","updatedAt":"2019-05-09 00:59:26"},
      {"username":"rcorneliussenx","first_name":"Reggi","email":"rsainzx@odnoklassniki.ru","is_admin":false,"createdAt":"2018-12-03 09:54:22","updatedAt":"2018-11-16 06:03:21"},
      {"username":"cwalchy","first_name":"Chauncey","email":"cbachey@abc.net.au","is_admin":false,"createdAt":"2018-05-19 15:03:31","updatedAt":"2018-11-13 10:58:39"},
      {"username":"cverityz","first_name":"Clement","email":"cplanquez@wix.com","is_admin":true,"createdAt":"2018-07-25 08:23:59","updatedAt":"2018-12-01 10:49:19"},
      {"username":"dsaltman10","first_name":"Devonna","email":"dbourgour10@gnu.org","is_admin":false,"createdAt":"2018-08-21 16:14:56","updatedAt":"2018-12-01 21:43:01"},
      {"username":"mbrazer11","first_name":"Mag","email":"mculshew11@dailymotion.com","is_admin":true,"createdAt":"2018-10-29 01:39:28","updatedAt":"2018-05-31 14:04:18"},
      {"username":"ldikelin12","first_name":"Lauretta","email":"ldullaghan12@wp.com","is_admin":false,"createdAt":"2018-06-09 04:28:48","updatedAt":"2018-07-23 00:22:09"},
      {"username":"lgostridge13","first_name":"Leupold","email":"lessam13@livejournal.com","is_admin":false,"createdAt":"2018-10-31 11:32:58","updatedAt":"2018-07-30 08:30:06"},
      {"username":"sfischer14","first_name":"Selinda","email":"sgeorger14@weather.com","is_admin":true,"createdAt":"2018-12-02 11:04:27","updatedAt":"2019-01-30 12:08:58"},
      {"username":"pgilstin15","first_name":"Pedro","email":"praund15@state.tx.us","is_admin":true,"createdAt":"2019-05-02 21:32:07","updatedAt":"2019-05-18 03:38:30"},
      {"username":"kgammell16","first_name":"Kelly","email":"kmcallister16@pinterest.com","is_admin":false,"createdAt":"2018-10-11 13:12:49","updatedAt":"2018-06-23 08:54:02"},
      {"username":"agaenor17","first_name":"Alvira","email":"aciani17@msu.edu","is_admin":true,"createdAt":"2018-05-24 18:37:08","updatedAt":"2018-09-10 22:15:53"},
      {"username":"rknewstub18","first_name":"Royce","email":"rdelucia18@sbwire.com","is_admin":true,"createdAt":"2018-07-30 14:08:38","updatedAt":"2018-08-25 05:14:30"},
      {"username":"dbeachamp19","first_name":"Dixie","email":"dowbrick19@google.es","is_admin":true,"createdAt":"2018-12-23 21:26:21","updatedAt":"2018-08-05 16:07:24"},
      {"username":"nbarratt1a","first_name":"Niccolo","email":"nricardot1a@prnewswire.com","is_admin":true,"createdAt":"2018-05-29 02:11:25","updatedAt":"2019-03-16 21:46:38"},
      {"username":"lbulward1b","first_name":"Leeann","email":"lemm1b@sun.com","is_admin":false,"createdAt":"2018-05-28 23:57:29","updatedAt":"2018-09-14 23:27:51"},
      {"username":"aclemmen1c","first_name":"Andras","email":"akynson1c@dyndns.org","is_admin":false,"createdAt":"2018-11-01 05:31:06","updatedAt":"2019-04-30 11:48:30"},
      {"username":"mmakiver1d","first_name":"Marena","email":"misaksen1d@smugmug.com","is_admin":false,"createdAt":"2019-03-28 04:50:28","updatedAt":"2019-04-01 16:53:48"}
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, { truncate: true })
  }
}
