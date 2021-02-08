export class MomentModel {
  // https://momentjs.com/
  //-----------------------
  /* Format Dates
  moment().format('MMMM Do YYYY, h:mm:ss a'); // February 8th 2021, 5:17:17 pm
  moment().format('dddd');                    // Monday
  moment().format("MMM Do YY");               // Feb 8th 21
  moment().format('YYYY [escaped] YYYY');     // 2021 escaped 2021
  moment().format();                          // 2021-02-08T17:17:17-03:00
  */
  //-------------------------------
  /* Relative Time
  moment("20111031", "YYYYMMDD").fromNow(); // 9 years ago
  moment("20120620", "YYYYMMDD").fromNow(); // 9 years ago
  moment().startOf('day').fromNow();        // 17 hours ago
  moment().endOf('day').fromNow();          // in 7 hours
  moment().startOf('hour').fromNow();       // 18 minutes ago
  */
  //-------------------------------
  /* Calendar Time
  moment().subtract(10, 'days').calendar(); // 01/29/2021
  moment().subtract(6, 'days').calendar();  // Last Tuesday at 5:18 PM
  moment().subtract(3, 'days').calendar();  // Last Friday at 5:18 PM
  moment().subtract(1, 'days').calendar();  // Yesterday at 5:18 PM
  moment().calendar();                      // Today at 5:18 PM
  moment().add(1, 'days').calendar();       // Tomorrow at 5:18 PM
  moment().add(3, 'days').calendar();       // Thursday at 5:18 PM
  moment().add(10, 'days').calendar();      // 02/18/2021
  */
  //-------------------------------
  /* Multiple Locale Support
  moment.locale();         // en
  moment().format('LT');   // 5:19 PM
  moment().format('LTS');  // 5:19:21 PM
  moment().format('L');    // 02/08/2021
  moment().format('l');    // 2/8/2021
  moment().format('LL');   // February 8, 2021
  moment().format('ll');   // Feb 8, 2021
  moment().format('LLL');  // February 8, 2021 5:19 PM
  moment().format('lll');  // Feb 8, 2021 5:19 PM
  moment().format('LLLL'); // Monday, February 8, 2021 5:19 PM
  moment().format('llll'); // Mon, Feb 8, 2021 5:19 PM
  */
}
