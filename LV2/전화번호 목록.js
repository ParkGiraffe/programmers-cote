function solution(phone_book) {
  phone_book.sort();

  for (let i = 0; i < phone_book.length - 1; i++) {
    let leftLength = phone_book[i].length;
    let valid = true;

    for (let j = 0; j < leftLength; j++) {
      if (phone_book[i][j] !== phone_book[i + 1][j]) valid = false;
    }

    if (valid === true) return false;
  }

  return true;
}

// 해시를 사용할 경우

function solution(phone_book) {
  const hashTable = new Map();

  // 1. 전화번호를 해시 테이블에 저장
  for (let phone of phone_book) {
    hashTable.set(phone, true);
  }

  // 2. 전화번호를 순회하며 접두어가 있는지 확인
  for (let phone of phone_book) {
    let prefix = "";
    for (let char of phone) {
      prefix += char;

      // 자기 자신(prefix === phone)인 경우는 건너뜀
      if (prefix !== phone && hashTable.has(prefix)) {
        return false;
      }
    }
  }

  // 3. 접두어가 없으면 true 반환
  return true;
}
