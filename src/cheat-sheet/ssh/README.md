# ssh

SSH(Secure Shell Protocol)란 네트워크 프로토콜의 하나로 암호화되어 안전하게 통신할때 사용되는 프로토콜입니다.

## ssh-keygen

``` sh
ssh-keygen -t rsa -b 4096 -C "[NAME@COMPANY.HOST]"

# Example
ssh-keygen -t rsa -b 4096 -C "john.doe@weperson.macbook"
```

ssh-keygen 은 ssh 프로토콜을 사용하기 위한 키를 생성하는 명령어입니다.

### Parameters

- -t: 암호화 타입. 특별한 경우가 아니면 대부분 rsa 형식을 사용합니다.
- -b: 생성할 키 비트수. 기본값이 2048. 더 강력한 암호화를 위해 4096을 설정합니다.
- -C: 주석. **이름@회사명.호스트** 형식으로 작성하면 나중에 구분하기가 쉽습니다.

