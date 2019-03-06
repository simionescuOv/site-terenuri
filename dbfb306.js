

const zsNume=['Du', 'Lu','Ma','Mi','Jo','Vi','Sa']
const lNume= ['Ian','Feb','Mar','Apr','Mai','Iun','Iul','Aug','Sep','Oct','Nov','Dec']
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAWln6gIJj5ttj_jXliTY_S5w7xePUYNNE",
    authDomain: "terena3gherghita.firebaseapp.com",
    databaseURL: "https://terena3gherghita.firebaseio.com",
    projectId: "terena3gherghita",
    storageBucket: "terena3gherghita.appspot.com",
    messagingSenderId: "434405437935"
  };
  firebase.initializeApp(config);

  const rootRef=firebase.database().ref(),
        clicList=firebase.database().ref('clicDatele')
  
  function formatTimp(date){
    let d=new Date(date),

        zl=d.getDate().toString(),
        zs=zsNume[d.getDay()],
         luna=lNume[d.getMonth()],
        an=d.getFullYear().toString(),
        zszl=zs+" "+zl,
        zslL=zs+" - "+zl+" "+luna,
        orez={
          ziua:d.toDateString(),
          moment:date,
          zszl:zszl,
          luna:luna,
          an:an,
          zl:zl
        }
        return orez;
}
  
  function clicu(id){
      console.log('se apasat '+id)
      
      let acum=new Date()
          ,acusha=Date.now()
          ,obTimp=formatTimp(acum)
          ,rNou=clicList.push()
          ,mmRez=obTimp.moment.toString()
          ,mls=acum.getMilliseconds()
      rNou.set({
          acu:acusha,
          mmnt:mmRez,
          id:id,
          mls:mls
      })
  }

//clicu('foto18400m44')
  
  
  /*
    var ivue=new Vue({
        el:'#app-id',
        data:function(){
            return{
                textu:'vue functioneste'
            }
        },
        create(){
           XclicList.on('child_added', ss => {
              let val=snapshot.val() 
           })
        },
        methods:{
            clicu:function(id){
                
            }
        }
    })
    */