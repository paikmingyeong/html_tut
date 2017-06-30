/**
 * Created by Administrator on 2017-06-29.
 */

// 매개 변수를 사용하는 함수연습

/*

  매개 변수 함수를 사용하는 경우

  1. 전역변수, 지역변수의 적용 범위를 개선하기 위한 사용

  2. 함수의 재사용성을 높이기 위해 사용
 */

// 두수

//1) 매개 변수를 사용하지 않는 경우
(function(){

  //변수 선언
  var a = 10;
  var b = 20;

  //함수 선언
  function sum1(){
      console.log ( a + b );
      }
  //함수 실행
  sum1();

})();

(function(){

  var a = 10;
  var b = 20;
  var c = 40;
  var d = 50;

  function sum1(){
    console.log( a + b );
  }
  function sum2(){
    console.log( b + c );
  }
  function sum3(){
    console.log( c + d );
  }

  sum1();
  sum2();
  sum3();

})();


// 2) 매개변수를 사용하는 경우
(function(){

  // 매개변수는 var 을 사용해서 변수선언을 할 필요가 없음
  // 함수 선언
  function sumArg(arg1, arg2){
    console.log( arg1 + arg2 )
  }

  //함수 실행
  sumArg( 10, 20 );
  sumArg( 20, 40 );
  sumArg( 30, 50 );
  sumArg( 100, 100 );

})();



(function(){

  function name( name ){
    console.log( '안녕하세요~' + name + '님!' );
  }

  name('민경');
  name('민준');
  name('민기');
  name('민서');
  name('민아');

})();


(function(){

  function info( name1, age, tall ){
    console.log('이름 : ' + name1);
    console.log('나이 : ' + age + '살');
    console.log('신장 : ' + tall + 'cm');
  }

  info( '영희', '19', '160' );


})();






