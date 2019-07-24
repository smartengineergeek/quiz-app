import axios from 'axios';

export default function fetchService(category){
    let url = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=multiple&category='+category;
    let data = null;let error = { bool: false, message: ''};
    axios.get(url)
    .then(function(response){
        data = response;
    })
    .catch(function(err){
        error = { bool: true, message: err.message};
        console.log(err);
    })
    .finally(function(){
        // always executed
    })
    return { data, error };
}