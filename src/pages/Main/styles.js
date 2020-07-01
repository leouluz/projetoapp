import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:15,
    backgroundColor:'#102733',
  },
  text:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:18
  },
  textSelect:{
    color:'#102733',
    fontWeight:'bold',
    fontSize:18
  },
  textName:{
    color:'#ffb832',
    fontWeight:'bold',
    fontSize:24
  },
  cardHeader:{
    width:55,
    height:80,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:8,
    borderRadius:15
  },
  cardHeaderSelect:{
    width:55,
    height:80,
    backgroundColor:'#ffb832',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15
  },
  dataText:{
    fontSize:24,
    fontWeight:'bold',
    color:'#fff'
  },
  dataTextSelect:{
    color:'#102733',
    fontSize:24,
    fontWeight:'bold'
  },
  headerDate:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:10,
    
  },
  perfilView:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:50,
    marginBottom:20
  },
  imagePerfil:{
    height:50,
    width:50,
    borderWidth:2,
    borderColor:'#ffb832',
    borderRadius:50
  },

  //VIEW EVENTOS
  viewEvent:{
    borderRadius:20,
    backgroundColor:'#29404e',
    marginBottom:10,
  },
  scrollEvent:{
    flex:1,
    marginTop:-360
  },
  eventCard:{
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  textEvento:{
    color:'#ddd'
  },
  textEventTitle:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:20
  },
  imageEvent:{
    resizeMode:'stretch',
    width:130,
    height:'100%',
    borderRadius:20
  },
  viewText:{
    padding: 15,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  backImage:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height:'100%',
    width:'100%'
  }
})