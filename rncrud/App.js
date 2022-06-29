// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserList from './src/views/UserList';
import UserForm from './src/views/UserForm';
import { UsersProvider } from './src/context/UserContext';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerStyle: { 
    backgroundColor: 'papayawhip' 
  }, 
  headerTintColor: '#000',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}

function App() {
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='UserList'
          screenOptions={screenOptions}
        >
          <Stack.Screen 
            name="UserList" 
            component={UserList} 
            options={({navigation}) => {
              return {
                title:'Lista de Usuários',
                headerRight: () => (
                  <Button
                    onPress={() => navigation.navigate('UserForm')}
                    title="Add"
                    color="#A52A2A"
                    type="clear"
                  />
                )
              }
            }}
          />
          <Stack.Screen 
            name="UserForm" 
            component={UserForm} 
            options={{
              title:'Formulário de Usuários'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  );
}



export default App;