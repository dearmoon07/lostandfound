# Get
1. 사용자 정보 받아오기
   * /user/:userid
2. 분실물 정보 받아오기(전체 분실물 받아오기)
   * /product
    => 프론트엔드에서 filter를 사용해서 구현할 예정
    => 검색, 카테고리별 분류 등
3. 물건 하나에 대한 정보 받아오기
    * /product/:productid

# Post
1. 분실물 제보하기
   * /product/report
   * {
   *    'name' : 이름
   *    'img' : URL
   *    'location' : 찾은 위치
   *    'registered_at' : 찾은 시간
   *    'finder' : 찾은 사람 id
   *    'description' : 설명
   * }
   * => jwt 형식으로 들어가는건가..? (X)
   * => jwt는 토큰에만 들어감
   * => 객체 형식 그대로 들어간다.

# Modules
1. user(유저 관리)
2. product(분실물 관리)
   * category(카테고리별 분실물 관리)

# User
1. 유저의 정보 받아오기
    => 프로필 사진 필요

# 기능
1. 유저 사진, 이름 받아오기 => get을 사용하기 
2. 분실물 불러오기 => get을 사용하기 
3. 분실물 하나에 대한 상세정보 받아오기 => get을 사용하기
4. 분실물 제보하기 => post를 사용하기
5. 게시글 작성 => 잃어버린 물건 제보

# User
=> 유저와 관련된 정보 관리

# Product
=> 분실물과 관련된 정보 관리