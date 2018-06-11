# 인사이트 모바일 애플리케이션 개발자 가이드

학습자의 참여도를 증진하며 다양한 정보를 제공하는 교육 솔루션, INSIGHT Application의 개발자 가이드입니다.

### 운영 컨텐츠 업로드 URL

```ruby
https://insight.lotte.net/smart-admin/
```

### 운영 다운로드 URL

```ruby
https://insight.lotte.net/appstore/
```

### 개발 컨텐츠 업로드 URL

```ruby
52.79.232.150:8080/smart-admin
```

### 개발 다운로드 URL

```ruby
52.79.232.150:8080/appstore
```

### 폴더 구조

![folder](/Users/pliss/BizGit/INSIGHT-MOBILE/INSIGHT-APP/WebContent/FOLDER.png)

### 개발 환경

1. 프로그래밍 언어
   - 언어 : HTML, CSS, JavaScript, jQuery-1.11.1.min
   - 라이브러리 : LEMP 라이브러리, Firebase Realtime Database Javascript Library 3.6.2
2. 통합 개발 환경
   - IDE : Eclipse (Neon 이상)
   - Apache Tomcat (7.0 이상)
   - Atom
   - Chrome(Watch, Networ 등 디버깅 도구 활용) 

### LEMP 설치 및 사용

##### A. LEMP Eclipse - plugin 설치

이클립스 실행 후, 아래의 절차대로 플러그인을 설치 합니다.

- **Java Properties 파일의 한글사용을 위해 Eclipse Plugin Properties Editor를 설치 합니다.**

1. Navigation : HELP -> Install New SoftWare 화면으로 이동 
2. Add 버튼 클릭후 , <http://propedit.sourceforge.jp/eclipse/update> 를 등록
3. PropertiesEditor의 Properties Editor 체크 후 Next -> Next -> 동의함 ->Finish

- **LEMP Plugin을 설치합니다.**

1. Navigation : Help -> Install New Software

2. Add버튼 클릭 후 , <http://lempqa.ldcc.co.kr/adt/update> 를 등록

3. LEMP ADT 의 LEMP ADT Feature 체크 후 Next -> Next -> 동의함 -> Finish

   ![LEMP1](/Users/pliss/BizGit/INSIGHT-MOBILE/INSIGHT-APP/WebContent/LGN.png)

- **LEMP ADT Plugin 을 사용하여 프로젝트 생성**

1. Navigation : File-> Dynamic web Project

2. Dynamic web module vertion : 2.5  -> configuration : LEMP client project 

3. 프로젝트에서 아래 세번째 이미지와 같은 폴더구조 확인 

   ![LEMP2](/Users/pliss/BizGit/INSIGHT-MOBILE/INSIGHT-APP/WebContent/LGN.png)

## Firebase 설치 및 사용 

##### A.  Firebase 시작하기 

- 아래의 코드를 애플리케이션 HTML에 붙여 넣습니다. 

  ```javascript
  <script src="https://www.gstatic.com/firebasejs/4.2.0/firebase.js&quot;&gt;&lt;/script>
  <script>
    // Initialize Firebase
    // TODO: Replace with your project's customized code snippet
    var config = {
      apiKey: "<API_KEY>",
      authDomain: "<PROJECT_ID>.firebaseapp.com",
      databaseURL: "https://&lt;DATABASE_NAME&gt;.firebaseio.com&quot;,
      storageBucket: "<BUCKET>.appspot.com",
      messagingSenderId: "<SENDER_ID>",
    };
    firebase.initializeApp(config);
  </script>
  ```

##### B. Firebase - 실시간 데이터 베이스 시작하기 

- 실시간 데이터 베이스 시작을 위해 아래의 코드를 추가합니다.

  ```javascript
  var database = firebase.database();
  ```

##### C. Firebase - 실시간 데이터 베이스 읽기 및 쓰기 

- 기본 쓰기 작업

  - 기본 쓰기 작업의 경우 `set()`를 사용하여 지정된 참조에 데이터를 저장하고 기존 경로의 모든 데이터를 대체할 수 있습니다. 예를 들어 소셜 블로깅 앱은 다음과 같이 `set()`로 사용자를 추가할 수 있습니다. 

    ```javascript
    function writeUserData(userId, name, email, imageUrl) {
      firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture : imageUrl
      });
    }
    ```


- Value 이벤트 수신 대기 

  - 특정 경로의 데이터를 읽고 변경을 수신 대기하려면 `firebase.database.Reference`의 `on()` 또는 `once()` 메소드를 사용하여 이벤트를 관찰합니다.

    | 이벤트   | 일반적인 용도                      |
    | ----- | ---------------------------- |
    | value | 경로의 전체 내용을 읽고 변경을 수신 대기 합니다. |

  - `value` 이벤트를 사용하여 이벤트 발생 시점에 특정 경로에 있던 내용의 정적 스냅샷을 읽을 수 있습니다. 이 메소드는 리스너가 연결될 때 한 번 호출된 후 하위를 포함한 데이터가 변경될 때마다 다시 호출됩니다. 하위 데이터를 포함하여 해당 위치의 모든 데이터를 포함하는 스냅샷이 이벤트 콜백에 전달됩니다. 데이터가 없는 경우 반환되는 스냅샷은 `null`입니다.

  - **NOTE** : `value` 이벤트는 지정된 데이터베이스 참조의 데이터 및 하위 데이터가 변경될 때마다 발생합니다. 스냅샷의 크기를 제한하려면 변경을 확인할 필요가 있는 최하위 위치에만 연결하세요. 예를 들어 데이터베이스 루트에 리스너를 연결하는 것은 좋은 방법이 아닙니다.

- 데이터 한 번 읽기

  - 변경을 수신 대기하지 않고 단순히 데이터의 스냅샷만 필요한 경우가 있습니다. 이후에 변경되지 않는 UI 요소를 초기화할 때가 그 예입니다. 이러한 경우 `once()` 메소드를 사용하면 시나리오가 단순해집니다.

    이 메소드는 한 번 호출된 후 다시 호출되지 않습니다.이 방법은 한 번 로드된 후 자주 변경되지 않거나 능동적으로 수신 대기할 필요가 없는 데이터에 유용합니다.

    예를 들어 위 예시의 블로깅 앱에서는 사용자가 새 글을 작성하기 시작할 때 이 메소드로 사용자의 프로필을 로드합니다.

    ```javascript
    var userId = firebase.auth().currentUser.uid;
    return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
      var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
      // ...
    });
    ```

- 특정 필드 업데이트

  - 다른 하위 노드를 덮어쓰지 않고 특정 하위 노드에 동시에 쓰려면 `update()` 메소드를 사용합니다.

    `update()`를 호출할 때 키의 경로를 지정하여 하위 수준 값을 업데이트할 수 있습니다.

    확장성을 위해 여러 위치에 데이터가 저장된 경우[데이터 팬아웃](https://firebase.google.com/docs/database/web/structure-data?authuser=0#fanout)을 사용하여 해당 데이터의 모든 인스턴스를 업데이트할 수 있습니다.

    예를 들어 소셜 블로깅 애플리케이션에서 다음과 같은 코드를 사용하여 글을 만든 후 최근 활동 피드 및 게시자의 활동 피드에 동시에 업데이트할 수 있습니다.

    ```javascript
    function writeNewPost(uid, username, picture, title, body) {
      // A post entry.
      var postData = {
        author: username,
        uid: uid,
        body: body,
        title: title,
        starCount: 0,
        authorPic: picture
      };

      // Get a key for a new Post.
      var newPostKey = firebase.database().ref().child('posts').push().key;

      // Write the new post's data simultaneously in the posts list and the user's post list.
      var updates = {};
      updates['/posts/' + newPostKey] = postData;
      updates['/user-posts/' + uid + '/' + newPostKey] = postData;

      return firebase.database().ref().update(updates);
    }
    ```

    이 예제에서는 `push()`를 사용하여 모든 사용자의 글을 포함하는 노드(`/posts/$postid`)에 글을 만드는 동시에 키를 검색합니다. 그런 다음 이 키로 사용자의 글 목록(`/user-posts/$userid/$postid`)에 두 번째 항목을 만듭니다.

    이러한 경로를 사용하면 이 예제에서 두 위치에 새 게시물을 생성한 것처럼 `update()`를 한 번만 호출하여 JSON 트리의 여러 위치에 동시에 업데이트할 수 있습니다. 이러한 동시 업데이트는 원자적인 성격을 갖습니다. 즉, 모든 업데이트가 한꺼번에 성공하거나 실패합니다.

- 데이터 삭제

  - 데이터를 삭제하는 가장 간단한 방법은 해당 데이터 위치의 참조에 `remove()`를 호출하는 것입니다.

    `set()` 또는 `update()` 등의 다른 쓰기 작업의 값으로 `null`을 지정하여 삭제할 수도 있습니다. `update()`에 이 방법을 사용하면 API를 한 번 호출하여 여러 하위 항목을 삭제할 수 있습니다.

### 컨텐츠 미리보기

| ![LGN](/Users/pliss/BizGit/INSIGHT-MOBILE/INSIGHT-APP/WebContent/LGN.png) | ![DTI_INFO](/Users/pliss/BizGit/INSIGHT-MOBILE/INSIGHT-APP/WebContent/DTI_INFO.png) | ![DTI_INFO_DETAIL](/Users/pliss/BizGit/INSIGHT-MOBILE/INSIGHT-APP/WebContent/DTI_INFO_DETAIL.png) | ![DTI_ATTEND](/Users/pliss/BizGit/INSIGHT-MOBILE/INSIGHT-APP/WebContent/DTI_ATTEND.png) |
| :--------------------------------------: | :--------------------------------------: | :--------------------------------------: | ---------------------------------------- |
| ![RMT](/Users/pliss/BizGit/INSIGHT-MOBILE/INSIGHT-APP/WebContent/RMT.png) | ![SUR](/Users/pliss/BizGit/INSIGHT-MOBILE/INSIGHT-APP/WebContent/SUR.png) | ![BRD](/Users/pliss/BizGit/INSIGHT-MOBILE/INSIGHT-APP/WebContent/BRD.png) | ![DTI_SURVEY](/Users/pliss/BizGit/INSIGHT-MOBILE/INSIGHT-APP/WebContent/DTI_SURVEY.png) |

### Thanks

Thanks to Solution Research Section and Research Team 최재영, 김광훈, 오동환.

- 문의처
  - L.EMP Core : 솔루션연구팀 최재영, 김광훈
  - 기타 : 솔루션연구팀 오동환

### License

모든 권한은 **롯데정보통신**에게 있으며, ***허가 없는 수정 배포를 금합니다***.