import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { Container, Header, Content, Form, Item, Input,Label,Button,Body,Title} from 'native-base';
import { registration } from '../config/firebaseFunctions'
import ItemInput from '../components/ItemInput';

export default function SignUpPage({navigation}) {  
    const [nickName, setNickName] = useState('');
    const [nickNameError, setNickNameError] = useState('');

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
  
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
  
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [passwordConfirmError, setPasswordConfirmError] = useState('');

    const doSignUp = () => {
        if (nickName == '') {
          setNickNameError('닉네임을 입력해주세요');
          return false;
        } else {
          setNickNameError('');
        }
    
        if (email == '') {
          setEmailError('이메일을 입력해주세요');
          return false;
        } else {
          setEmailError('');
        }
    
        if (password == '') {
          setPasswordError('비밀번호를 입력해주세요');
          return false;
        } else {
          setPasswordError('');
        }
    
        if (passwordConfirm == '') {
          setPasswordConfirmError('비밀번호 확인을 입력해주세요');
          return false;
        } else {
          setPasswordConfirmError('');
        }
    
        if (password !== passwordConfirm) {
          setPasswordConfirmError('비밀번호가 서로 일치 하지 않습니다.');
          return false;
        } else {
          setPasswordConfirmError('');
        }
    
        registration(nickName, email, password, navigation);
      };

    return (
            <Container>
              <Header > 
              <Body>
                 <Title>회원가입 페이지</Title>
              </Body>
              </Header>
              <Content contentContainerStyle={styles.content} scrollEnabled={false}>
                <Form style={styles.form}>
                <ItemInput
                title={'닉네임'}
                type={'nickName'}
                error={nickNameError}
                setFunc={setNickName}
                />
                <ItemInput
                title={'이메일'}
                type={'email'}
                error={emailError}
                setFunc={setEmail}
                />
                <ItemInput
                title={'비밀번호'}
                type={'password'}
                error={passwordError}
                setFunc={setPassword}
                />
                <ItemInput
                title={'비밀번호 확인'}
                type={'password'}
                error={passwordConfirmError}
                setFunc={setPasswordConfirm}
                />
                </Form>
              <Button full style={styles.emailSignUp} onPress={doSignUp}>
                <Text style={{color:"white"}}>회원가입하기</Text>
              </Button>
              </Content>
            </Container>
    )
}

const styles = StyleSheet.create({
    container: {},
    backgroundImage: {
      width: '100%',
      height: '100%',
    },
    content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffeaa7',
      margin: 20,
      borderRadius: 20,
    },
    title: {
      fontSize: 25,
      fontWeight: '700',
      color: '#fff',
      textAlign: 'center',
    },
    highlite: {
      fontSize: 25,
      fontWeight: '700',
      color: 'deeppink',
      textAlign: 'center',
    },
    form: {
      width: 250,
      borderRadius: 10,
      paddingBottom: 20,
      paddingRight: 20,
      paddingLeft: 20,
      marginTop: 10,
    },
  
    snsSignUp: {
      alignSelf: 'center',
      width: 250,
      marginTop: 10,
      borderRadius: 10,
      backgroundColor: '#74b9ff',
    },
    emailSignUp: {
      alignSelf: 'center',
      width: 250,
      marginTop: 5,
      borderRadius: 10,
      backgroundColor: '#6c5ce7',
    },
  });