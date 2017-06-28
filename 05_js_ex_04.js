/**
 * Created by Administrator on 2017-06-28.
 */


/*
*
  if(조건비교식){

    실행문( 첫번쩨 조건이 참일 때 )

  } else if(조건비교식){

    실행문( 두번째 조건이ㅣ 참일 때 )

  } else if(조건비교식){

    실행문( 세번째 조건이 참일 때 )

  } else {

    실행문( 모든 조건이 거짓일 때 )

  }

* */


var avr = 55;

if( avr >= 90 ){
  console.log('수');
} else if( avr >= 80 ){
  console.log('우');
} else if( avr >= 70 ){
  console.log('미');
} else if( avr >=60 ){
  console.log('양');
} else {
  console.log('가');
}