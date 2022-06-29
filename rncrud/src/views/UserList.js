import { Avatar, Button, ListItem, Icon} from "@rneui/base";
import React, { useContext } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import UserContext from "../context/UserContext";
import users from '../data/user'


function UserList(props, {navigation}) {

    const {state , dispatch} =  useContext(UserContext)

    const confirmUserDelection = (user) => {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [

            {
                text:'Sim',
                onPress(){
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },
            {
                text:'Não'
            }
        ])
    }

    const getActions = (user) => {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type="clear"
                    title="Edit"
                    
                />
                <Button
                    onPress={() => confirmUserDelection(user)}
                    type="clear"
                    title="Del"
                    
                />
            </>
        )
    }

   const getUserItem = ({item : user}) => {

        return(
            <ListItem
                button
                key={user.id}
                bottomDivider
                onPress={() => props.navigation.navigate('User', user)}

            >
                <Avatar 
                    source={{uri: user.avatarUrl}}
                />
                <ListItem.Content>
                    <ListItem.Title>
                        {user.nome}
                    </ListItem.Title>
                    <ListItem.Subtitle>
                        {user.email}
                    </ListItem.Subtitle>
                </ListItem.Content>
                {getActions(user)}
                
            </ListItem>
        )
    }

    return(
       <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
       </View>
    )
}

export default  UserList