//import countapi from 'countapi-js';

//countapi.visits().then((result) => {
//    console.log(result.value);
//});

function viewsCall(response){
    document.getElementById('JourneyOfUs').innerText = response.value;
};


    