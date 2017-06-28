/**
 * Created by Administrator on 2017-06-28.
 */

var avr1 = 80;
var avr2 = 90;

if( avr1 >= 90 && avr2 >= 90){
  console.log('수');
} else if( avr1 >= 90 && avr2 >= 80){
  console.log('우');
} else if( avr1>=80 && avr2>=80){
  console.log('미');
} else{
  console.log('낙제');
}