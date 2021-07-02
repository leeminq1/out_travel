import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, Alert, AsyncStorage } from 'react-native';
import { Container, Header, Content, Form, Item, Input,Label,Button,Body,Title,Text} from 'native-base';
import ItemInput from '../components/ItemInput';
import { signIn } from '../config/firebaseFunctions';
import * as firebase from 'firebase';
import Loading from '../pages/Loading';

export default function SignInPage({navigation}) {
    const [ready, setReady] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const [emailError, setEmailError] = useState('');
  
    const [passwordError, setPasswordError] = useState('');

    // 방문자 수를 실제로 updata하는 곳

  async function enter_count_update() {
    const currentUser = firebase.auth().currentUser;

    const db = await firebase.firestore();

    //현재 방문자수를 가져온다.
    let count = await db
      .collection('users')
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        return doc.data().count;
      });
    console.log('방문자수는 : ' + count);
    let new_count = count + 1;
    // 방문자수를 update한다.
    await db
      .collection('users')
      .doc(currentUser.uid)
      .update({ count: new_count });
    return true;
  }
    
    useEffect(() => {
        // AsyncStorage.removeItem('session');

        navigation.addListener('beforeRemove', (e) => {
          e.preventDefault();
        });
        const currentUser = firebase.auth().currentUser;
    
        setTimeout(() => {
          AsyncStorage.getItem('session', (err, result) => {
            // console.log('ASYNCSTORAGE');
            // console.log(result);
            // 여기 result에는 email 주소가 들어있음
            if (result) {
              navigation.push('TabNavigator');
              enter_count_update();
              const currentUser = firebase.auth().currentUser;
            } else {
              setReady(true);
            }
          });
          setReady(true);
        }, 500);
      }, []);

      const doSignIn = () => {
        //Email 로그인 버튼을 누를 때 실행되는 함수
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
    
        signIn(email, password, navigation);
      };
      const setEmailFunc = (itemInputEmail) => {
        //이메일 상태값을 관리하는 함수
        setEmail(itemInputEmail);
      };
      const setPasswordFunc = (itemInputPassword) => {
        //패스워드 상태값을 관리하는 함수
        setPassword(itemInputPassword);
      };
    
      const goSignUp = () => {
        navigation.navigate('SignUpPage');
      };

    return (
        <Container>
            <Header > 
              <Body>
                 <Title>로그인 페이지</Title>
              </Body>
              </Header>
          <Content>
            <Form>
            <ItemInput
              title={'이메일'}
              type={'email'}
              setFunc={setEmailFunc}
              error={emailError}
            />
            <ItemInput
              title={'비밀번호'}
              type={'password'}
              setFunc={setPasswordFunc}
              error={passwordError}
            />
            </Form>
          <Button full info style={{marginTop:50}} onPress={doSignIn}>
            <Text>로그인하기</Text>
          </Button>
          <Button full style={{marginTop:30}} onPress={goSignUp}>
            <Text >회원가입하기</Text>
          </Button>
          </Content>
        </Container>
      )
    }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },

})
