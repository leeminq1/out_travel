import * as firebase from 'firebase';
import 'firebase/firestore';
import { Alert, AsyncStorage } from 'react-native';

// 회원가입하기
export async function registration(nickName, email, password, navigation) {
    try {
      console.log(nickName, email, password);
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      const currentUser = firebase.auth().currentUser;
      const db = firebase.firestore();
      db.collection('users').doc(currentUser.uid).set({
        email: currentUser.email,
        nickName: nickName,
        count: 1,
        userimage:""
      });
      Alert.alert('회원가입 성공!');
      await AsyncStorage.setItem('session', email);
      navigation.push('TabNavigator');
    } catch (err) {
      Alert.alert('에러를 확인해주세요 => ', err.message);
    }
  }


// 로그인 하기
export async function signIn(email, password, navigation) {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      await AsyncStorage.setItem('session', email);
      navigation.push('TabNavigator');
    } catch (err) {
      Alert.alert('로그인에 문제가 있습니다! ', err.message);
    }
  }

  // 로그아웃하기
  export async function logout(navigation) {
    try {
      console.log('로그아웃!!');
      await AsyncStorage.removeItem('session');
      await firebase.auth().signOut();
      navigation.push('SignInPage');
    } catch (err) {
      Alert.alert('로그 아웃에 문제가 있습니다! ', err.message);
    }
  }