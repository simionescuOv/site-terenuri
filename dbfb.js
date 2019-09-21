

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

  const //rootRef=firebase.database().ref(),
        idfb='clicDatele',
        id_dev='clic-development',
        idcda='c-dev-arr',
        id_v_cda='variabilele/i_cda',
        clicList=firebase.database().ref(id_dev),
        refVicda=firebase.database().ref(id_v_cda)
        
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
      let acum=new Date()
          ,acusha=Date.now()
          ,obTimp=formatTimp(acum)
          ,rArrKey=clicList.push()
          //,rDevArr=refDevArr.push()
          ,mmRez=obTimp.moment.toString()
          ,mls=acum.getMilliseconds()
         
      rArrKey.set({
          acu:acusha,
          mmnt:mmRez,
          id:id,
          mls:mls
      })
    refVicda.once('value', (ss) => {
        let icda=ss.val()
        firebase.database().ref(idcda+'/' + icda).set(id)
        icda++
        refVicda.set(icda)
    })
     
     
      
  }

