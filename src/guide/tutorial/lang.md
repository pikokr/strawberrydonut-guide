# 딸기언어

곧 딸기언어 공식 docs가 만들어질 예정입니다.

## 딸기언어 문법 및 사용법

이 문법 설명서는 `-시작 딸기언어`로도 읽으실 수 있습니다!

다른 프로그래밍 언어를 사용한 경험이 있다면 더 빠르게 배울 수 있습니다.

예제 코드의 형식은 아래와 같습니다.
```strawberrylang
> 입력
< 출력
```

`-딸기언어`, `-l` 등을 사용하여 딸기언어를 테스트 해 보실 수 있습니다.
(여러 코드를 한 번에 쓰려면 Shift + Enter를 두 번 눌러주세요!)

## 자료형

딸기언어에는 6가지의 자료형 `int`, `float`, `string`, `bool`, `list`, `dic` 이 있습니다.

형변환 함수는 [`딸기언어 내장 함수와 프로퍼티`](#딸기언어-내장-함수와-프로퍼티)에서 찾으실 수 있습니다.

### int

`int` 타입은 정수 자료형으로, 소수점이 없는 숫자입니다.

`1`, `234`, `-567` 등은 int 타입입니다.

### float

`float` 타입은 실수 자료형으로, 소수점이 포함된 숫자입니다.

`1.0`, `234.567`, `-8.90 `등은 float 타입입니다.

### string

`string` 타입은 문자열 자료형입니다.

여러 문자, 단어들을 문자열을 사용해 나타낼 수 있습니다.

문자열은 `"가나다"`, `'타파하'`처럼 양쪽을 `"` 또는 `'`로 둘러싸여야 합니다.

`"Hello, world!"`, `"1234"`, `'딸기언어'` 등은 string 타입입니다.

`\n`를 사용하면 줄바꿈을 할 수 있습니다.

문자열 안에 `{ }`를 사용하여 문자열 포맷을 사용할 수 있습니다. (Python의 `f-string`과 비슷합니다.) [`기타 딸기언어 기능`](#기타-딸기언어-기능)에서 자세히 설명합니다.

### bool

`bool` 타입은 참 또는 거짓, 두 상태 중 하나를 나타내는 자료형입니다.

참은 `true`, 거짓은 `false` 입니다.

### list

`list` 타입은 여러 값들을 모아둘 수 있는 자료형입니다.

`[ ]` 안에 여러 값들을 `,`로 구분하여 넣을 수 있습니다.
```strawberrylang
> [1, 'hello', true, [1, 2], 3.5]
```

리스트[인덱스] 를 사용하여 원하는 번호의 리스트 값을 얻을 수 있습니다. **(리스트의 인덱스는 0부터 시작합니다. 첫 번째 값을 얻으려면 0을 적어야 합니다.)**

```strawberrylang
> [1, 2, 3][1]
< 2
```

리스트 슬라이싱도 가능합니다. 슬라이싱은 [`기타 딸기언어 기능`](#기타-딸기언어-기능)에 설명되어 있습니다.

### dic

`dic` 타입은 리스트와 비슷하지만, 인덱스가 아닌 key를 사용하여 값을 저장합니다.

`{ }` 안에 `key: value`을 사용하여 값을 저장할 수 있습니다.

(key는 `string` 타입입니다. key에 변수를 넣을 수도 있습니다. 예) `{ 변수: value }`)

```strawberrylang
> {"a": 1, "b": 2}
```

`딕셔너리[key]`를 이용하여 key에 해당하는 값(value)을 얻을 수 있습니다.

```strawberrylang
> {"a": "hello", "b": "strawberry", "c": "donut"}["b"]
< "strawberry"
```

## 연산자

딸기언어의 연산자에는 `+`, `-`, `*`, `/`, `%`, `**`, 비트 연산자 등이 있습니다!

### +

`+`, 더하기 연산자입니다.

`int`, `float` 타입으로 더하기 연산자를 사용하면 수학적인 계산을 할 수 있습니다.

`string` 타입과 다른 아무 타입의 값을 더하면 문자열로 변환돼 합쳐집니다.

`bool` 타입으로 더하기 연산자를 사용하면 논리합 연산자(`||`)와 같은 결과가 나옵니다.

`list` 또는 `dic`으로 더하기 연산자를 사용하면 두 값이 합쳐진 결과가 나옵니다.

```strawberrylang
> [1] + [2]
< [1, 2]
```

### -
`-`, 빼기 연산자입니다.

`int`, `float` 타입으로 빼기 연산자를 사용하면 수학적인 계산을 할 수 있습니다.

`string` 타입에서 `string` 타입을 빼면 해당 문자열이 모두 제거됩니다.

`list` 타입에서 빼기를 하면 두 번째 리스트에 포함된 첫 번째 리스트의 모든 값이 제거됩니다.

```strawberrylang
> [1, 2] - [1]
< [2]
```

### *

`*`, 곱하기 연산자입니다.

`int`, `float` 타입으로 곱하기 연산자를 사용하면 수학적인 계산을 할 수 있습니다.
`string` 타입과 `int` 타입을 곱하면 문자열이 해당 수 만큼 반복됩니다.
`bool` 타입으로 곱하기 연산자를 사용하면 논리곱 연산자(`&&`)와 같은 결과가 나옵니다.
`list` 타입과 `int` 타입으로 곱하면 리스트가 해당 수 만큼 반복됩니다.


### /

`/`, 나누기 연산자입니다.

`int`, `float` 타입으로 나누기 연산자를 사용하면 수학적인 계산을 할 수 있습니다.
`string` 타입으로 `string` 타입을 나누면 첫 번째 문자열이 두 번째 문자열을 기준으로 나뉘어 리스트가 됩니다.
`list` 타입에서 어떤 값으로 나누면 해당 값을 기준으로 나눠진 리스트가 됩니다.


### %

`%`, 나머지 연산자입니다.

`int`, `float` 타입으로 나머지 연산자를 사용하면 나눗셈을 하고 남은 나머지가 결과가 됩니다.


### **
`**`, 제곱 연산자입니다.

`int`, `float` 타입으로 n제곱을 계산할 수 있습니다.
(최대 **500제곱**까지만 사용할 수 있습니다.)



### +=, -=, *=, /=, %=

`+=`, `-=`, `*=`, `/=`, `%=`를 통해 계산과 대입을 동시에 할 수 있습니다.

아래 두 코드는 똑같은 동작을 합니다.

```strawberrylang
> a = a + 1
> a += 1
```


### ++, --

증감연산자 `++`와 `--`입니다.

`변수++` 또는 `변수--`로 사용할 수 있습니다.

++는 1을 더하는 코드, --는 1을 빼는 코드입니다.

아래 세 가지의 코드는 모두 같은 동작을 합니다.

```strawberrylang
> a = a + 1
> a += 1
> a++
```


### &, |, ^, ~

`&`, `|`, `^`, `~`, 비트 연산자입니다.

- 비트 AND(`&`)
- 비트 OR(`|`)
- 비트 XOR(`^`)
- 비트 Inversion(`~`)



## 비교, 관계, 논리 연산자
비교, 관계, 논리 연산자로는 다양한 것들을 할 수 있습니다!


__==__, __!=__
`==`는 두 값이 같은지 확인합니다.
```strawberrylang
> 1 == 1
< true

> "a" == "b"　
< false
```

`!=`는 반대로 두 값이 다른지 확인합니다.
```strawberrylang
> 1 != 1
< false

> "a" != "b"　
< true
```


### >, <, >=, <=

`>`, `<`, `>=`, `<=`로는 두 수의 대소 비교를 할 수 있습니다.

`>`, `<`는 초과, 미만
`>=`, `<=`는 이상, 이하입니다.

```strawberrylang
> 1 < 5
< true

> 3 >= 3
< true

> 2 > 5
< false
```


### ||, &&

`||`는 양쪽 bool값 둘 중 하나가 `true`라면 `true`입니다.

`&&`는 양쪽 bool값이 모두 `true`여야 `true`가 됩니다.

```strawberrylang
> true && true
< true

> false && true
< false

> true || false
< true

> false || false
< false

> 1 < 3 || 'a' == 'b'
< true
```



## 변수

프로그래밍에서 가장 중요한 것 중 하나인 변수입니다.

### =

`변수이름 = 값`으로 변수를 선언하거나 대입할 수 있습니다. 자료형은 적지 않습니다.

```strawberrylang
> a = 1

> strawberry = 'asdf'

> donut = [1, 2, 3]
```


`변수이름`으로 해당 변수의 값을 가져올 수 있습니다.

연산자도 동일하게 사용할 수 있습니다.

```strawberrylang
> a = 1

> a + 1
< 2
```

또, 변수를 선언할 때 앞에 readonly를 적으면 읽기 전용 변수를 만들 수 있습니다.
읽기 전용 변수는 다시 값을 대입할 수 없습니다.

```strawberrylang
> readonly a = 1

> a = 10 // 이 코드는 오류가 발생합니다.
```


::: tip
**변수 이름 규칙(권장)**

1. 변수 이름에는 특수문자가 들어갈 수 없고, 영어 & 한글 & 숫자 & _ 로 이루어져야 합니다.
2. 변수의 첫 번째 글자로 숫자를 사용할 수 없습니다
3. 한글 변수는 되도록 사용하지 않는 것이 좋습니다.
:::


## 조건, 반복문

프로그래밍의 필수 요소, 조건문과 반복문입니다.

조건문과 반복문은 모두 코드 여러 줄을 묶은 `{ }`(블럭)을 사용합니다.

만약 블럭 속 코드가 한 줄 이라면 블럭을 생략하고 해당 코드만 쓸 수 있습니다.


### if

`if (조건문) { 코드 }`는 조건문이 참이면 `{ }` 안에 있는 내용이 실행됩니다.

조건문은 `bool` 타입의 값이어야 합니다.

```strawberrylang
> a = 0
> if (true) {
      a = 5
  }
> a
< 5

> if (a > 10) {
    a = 0
}
> a
< 5
```


### if, else

`if (조건문) { 코드 } else { 코드 }`는 조건문이 참이면 첫 번째 `{ }` 안에 있는 내용이 실행되고, 거짓이면 두 번째 `{ }` 안에 있는 내용이 실행됩니다.

```strawberrylang
> a = 0
> if (false) {
      a = 5
  }
  else {
      a = 10
  }
> a
< 10
```


`else if`를 사용해서 여러 if문을 한 번에 쓸 수 있습니다.

```strawberrylang
> a = 0
> b = ''
> if (a == 0) {
      b = 'a는 0입니다.'
  }
  else if (a == 1) {
      b = 'a는 1입니다.'
  }
  else if (a == 2) {
      b = 'a는 2입니다.'
  }
  else {
      b = '알 수 없습니다.'
  }
> b
< "a는 0입니다"
```


### repeat

`repeat(횟수) { 코드 }`는 해당 코드를 횟수만큼 반복합니다.

횟수는 `int` 타입이어야 합니다.

```strawberrylang
> a = 0
> repeat(10) {
      a++
  }
> a
< 10
```


### while

`while (조건식) { 코드 }`는 조건식이 `true`인 동안 실행됩니다.

(반복문의 최대 횟수 제한은 **10000번**입니다.)

```strawberrylang
> a = 0
> while(a < 10) {
      a++
  }
> a
< 10
```


### foreach, for

`foreach (변수 in 리스트) { 코드 }`는 해당 리스트에 있는 내용을 하나씩 변수에 저장하고 실행합니다.

`for (변수 in 리스트) { 코드 }`로도 사용이 가능합니다.

```strawberrylang
> a = 0
> foreach(i in [1, 2, 3]) {
      a += i
  }
> a
< 6
```



## 함수

함수를 사용하면 프로그래밍을 더욱 간편하게 할 수 있습니다.


### 함수
함수 선언은 `func 이름() { 코드 }`로 할 수 있습니다.
```strawberrylang
> func plus() {　
      a++
  }

> a = 0
> a
< 0

> plus()
> a
< 1

> plus()
> a
< 2
```


### 매개변수

함수에 매개변수를 넣을 수 있습니다.

```strawberrylang
> func plus(number) {
      a += number
  }

> a = 0
> a
< 0

> plus(10)
> a
< 10

> plus(-100)
> a
< -90
```

### 리턴

리턴을 사용할 수 있습니다.

return문 이후의 코드는 모두 무시됩니다.

```strawberrylang
> func plus(a, b) {
      return a + b
  }

> plus(1, 2)
< 3

> plus(123, 456)
< 579
```

## 딸기언어 내장 함수와 프로퍼티

딸기언어의 내장 함수와 프로퍼티를 이용하여 확장된 기능을 누릴 수 있습니다.

함수 설명의 형식은 `함수이름(인자) -> 리턴타입: 설명`의 형식을 가지고 있습니다.

### TypeCasts

형변환 함수입니다.

* int(value: `string` | `int` | `float`) -> `int`: 주어진 값을 `int` 타입으로 리턴
* float(value: `string` | `int` | `float`) -> `float`: 주어진 값을 `float` 타입으로 리턴
* bool(value: `bool` | `int`) -> `bool`: 주어진 값이 `int`라면 음수는 `false`, 양수는 `true`를 리턴
* list(value: `string` | `dic`) -> `list`: 주어진 값이 `string`이라면 모든 글자를 자른 `list`를 리턴, `dic`이라면 `[[key, value]]` 형식으로 리턴
* string(value: `any`) -> `string`: 주어진 값을 문자열로 리턴
* dic(value: `list` | `dic`) -> `dic`: 주어진 값이 `list`일 경우 `[x1, x2]`를 `{"0": x1, "1": x2}`의 형식을 가진 `dic`으로 리턴

- - -

* type(value: `any`) -> `string` | `null`: 주어진 값의 타입이 `null`일 경우 `null`을 리턴하고, 아니면 타입을 `string`으로 리턴

### Functions

기본 함수들입니다.

* random(x, y) -> `int` | `float`: x와 y의 사이에서 랜덤 수를 리턴
* choice(value: `list | dic`) -> `any`: 주어진 값이 `list`라면 랜덤 값 리턴, `dic`이라면 랜덤 key 리턴
* time() -> `list`: `[Unix 시간 이후의 초, 연도, 월, 일, 시간, 분, 초]` 형태로 리턴
* range(start, end?, step?) -> `list`: Python의 `range()` 함수랑 같습니다.
* unicodeToNumber(value: `string`) -> `int`: Python의 `ord()` 함수랑 같습니다.
* numberToUnicode(value: `int`) -> `string`: Python의 `chr()` 함수랑 같습니다.

- - -

* img(src: `string`) -> `null`: 임베드에 이미지를 출력
* addField(name, value, inline: `bool` = `true`) -> `null`: 임베드에 필드를 추가
* addReaction(name: `string`) -> `null`: 반응 추가
* setContent(content) -> `null`: 임베드 내용 변경
* input(text: `string` = `"입력 대기중"`) -> `string`: 유저의 입력을 받고 받은 값을 리턴
* randomUser() -> `dic`: 현재 Discord 서버의 랜덤 유저를 리턴

### Data Functions

데이터와 관련된 함수들입니다.

* save(name: `string`, value: `any`) -> `null`: 이름과 값을 저장
* load(name: `string`) -> `any`: 값 불러오기
* exist(name: `string`) -> `bool`: 값 존재 체크
* delete(name: `string`) -> `any`: 값 삭제, 전에 저장된 값 반환

- - -

* ~~loadAll() -> `null`: 모두 저장 불러오기~~
* ~~saveAll() -> `null`: 모두 저장~~
* ~~existAll() -> `bool`: 모두 저장 존재 체크~~

- - -

* ~~loadAllVars() -> `null`: 모든 변수 불러오기~~
* ~~saveAllVars() -> `null`: 모든 변수 저장~~
* ~~existAllVars() -> `bool`: 모든 변수 저장 데이터 존재 체크~~

위 6개의 함수는 현재 비활성화 상태입니다.


### String Methods
문자열의 함수들입니다.

* "".replace(x, y) -> `string`: x를 y로 **전부** 변경
* "".indexOf(x) -> `int`: x가 문자열에 있다면 인덱스, 없다면 -1
* "".toUpper() -> `string`: 문자열을 대문자로 하고 리턴
* "".toLower() -> `string`: 문자열을 소문자로 하고 리턴
* "".isUpper() -> `bool`: 문자열이 대문자인가?
* "".isLower() -> `bool`: 문자열이 소문자인가?
* "".startsWith(x) -> `bool`: 문자열이 x로 시작하는가?
* "".endsWith(x) -> `bool`: 문자열이 x로 끝나는가?


### String Properties
문자열의 프로퍼티들입니다.

* "".length -> `int`: 문자열의 길이


### List Methods

리스트의 함수들입니다.

* [].join(value) -> `string`: 리스트를 value로 합치기
* [].indexOf(x) -> `int`: x가 리스트에 있다면 인덱스, 없다면 -1
* [].reverse() -> `list`: 리스트 뒤집기
* [].sort() -> `list`: 리스트 정렬
* [].pop() -> `any`: 리스트 제일 마지막 값을 리턴하며 삭제
* [].add(x) -> `list`: 리스트 제일 마지막에 x를 추가
* [].remove(x) -> `list`: 리스트에서 x번째 인덱스의 값을 삭제
* [].copy() -> `list`: 리스트 복사본 리턴


### List Properties

* [].length -> `int`: 리스트의 길이

### Dictionary Methods

딕셔너리의 함수들입니다.

* {}.keys() -> `list`: 딕셔너리 키들 리스트로
* {}.values() -> `list`: 딕셔너리 값들 리스트로
* {}.has(key) -> `bool`: 딕셔너리에 key가 있는가?
* {}.copy() -> `dic`: 딕셔너리 복사본 리턴
* {}.delete(key) -> `dic`: 딕셔너리 key 삭제


## 기타 딸기언어 기능
딸기언어의 기타 여러 가지 기능들을 소개합니다!

### =>

`=>`를 사용하면 스크립트에서 씬을 이동할 수 있습니다.

```strawberrylang
> => #1
```

### `{ }` (문자열 포맷)
`"` 문자열 안에서 { }를 사용하면 + 연산자로 문자열을 더하지 않아도 쉽게 문자열 사이에 다른 값을 넣을 수 있습니다.

```strawberrylang
> a = 1

> "a는 {a}입니다."
< "a는 1입니다."

> 'a에 1을 더하면 {a + 1}가 됩니다'
< "a에 1을 더하면 2가 됩니다"
```


### null

`null`은 아무것도 없음을 의미합니다.

다른 자료형의 값과 같이 변수에 대입할 수 있습니다.

리턴값이 없는 함수, 반복문 등은 null을 반환합니다.

### 주석

주석은 아무것도 하지 않는 코드입니다.

코드의 설명, todo 등을 쓸 수 있습니다.

`//`는 `//`부터 해당 줄의 끝까지 주석이 됩니다.

`/* */`를 사용하면 `/*`와 `*/` 사이에 있는 코드는 실행되지 않습니다. 여러 줄에 걸쳐 주석 처리를 할 수 있습니다.

```strawberrylang
> // a = 1 <= 이 줄의 코드는 실행되지 않습니다.

> a = /* 이 코드는 실행되지 않습니다. 하지만 'a = 1' 코드는 실행됩니다. */ 1
```

### 슬라이싱

`[n]`를 사용해서 문자열과 리스트의 n번째 값을 얻을 수 있습니다.

n이 음수라면 끝에서 n번째 값을 얻을 수 있습니다.

`[n:m]`을 사용하면 문자열 또는 리스트의 n번째 값부터 m번째 값을 얻을 수 있습니다.

n 또는 m 중 하나는 생략할 수 있습니다.


### 이벤트

`event 이름(매개변수) { 코드 }`로 이벤트를 선언할 수 있습니다.
사용방법은 함수와 같지만, 이벤트를 직접 사용할 순 없습니다.

현재는 `onEmojiClicked` 이벤트와 `onSceneChanged` 이벤트가 있습니다.

* onEmojiClicked(emoji): 이모지 반응이 추가됐을 때 실행됩니다. 해당 이모지의 이름을 매개변수로 줍니다.
* onSceneChanged(prev, new): 씬을 이동했을 때 실행됩니다. 이전 씬과 이동한 씬 이름을 매개변수로 줍니다.

### continue, break
`continue`는 반복문을 건너뜁니다.
`break`는 현재 반복문, `switch`문을 끝냅니다.

```strawberrylang
> i = 0
> while (i < 10) {
      if (i == 4) break
      i++
  }
> i
< 4
```

### switch, case

```strawberrylang
switch (x) {
    case (y) {
        // x가 y라면 실행
    }
    case (y1, y2) {
        // x가 y1이거나 y2면 실행
    }
    default {
        // 위에 해당이 안되면 실행
    }
}
```


switch/case 예제
```strawberrylang
> command = 'help'
> result = ''

> switch (command) {
      case ('help', 'h', '도움', '--help') {
          result = '도움'
          break
      }
      case ('hi') {
          result = '안녕'
          break
      }
      default {
          result = '알 수 없음'
          break
      }
  }
> result
< "도움"
```

수고하셨습니다! 이제 딸기언어를 이용해 다양한 것을 만들어 보세요!
