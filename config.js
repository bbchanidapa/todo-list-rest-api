var firebase = require('firebase')
var config = {
    apiKey: "AIzaSyC_OLOYm8bthJmt4jXLjkVbcR3j3Bp9-a8",
    authDomain: "todo-list-borbee.firebaseapp.com",
    databaseURL: "https://todo-list-borbee.firebaseio.com",
    projectId: "todo-list-borbee",
    storageBucket: "todo-list-borbee.appspot.com",
    messagingSenderId: "1070938540329"
  }

firebase.initializeApp(config)

// firebase.database().ref('user/'+'pipe').set({
//     old: 50
// })

// async function getLists (path) {
//     const data = await firebase.database().ref(path).once('value')
//     .then((res)=> {
//        return res.val()
//     })
//     return data
// }

function getLists (path) {
    return firebase.database().ref(path).once('value')
    .then((res)=> {
        if(res.val() === null){
            return {code : 404, message: 'User Not found'}
        }
        return { code : 200 , data: res.val()}
    })
}

module.exports = {
    getLists
} 