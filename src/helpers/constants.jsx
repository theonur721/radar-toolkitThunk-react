export const options = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
    params: {
      bl_lat: '34.812898',
      bl_lng: '27.59446',
      tr_lat: '41.582989',
      tr_lng: '44.816771',
      limit: '300'
    },
    headers: {
      'X-RapidAPI-Key': 'b3836d07f3msh27fcb24a288ab1bp1aaa36jsn86e8a79a5dbd',
      'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
  };
  
  export const detailOpt = {
      headers: {
        'X-RapidAPI-Key': 'b3836d07f3msh27fcb24a288ab1bp1aaa36jsn86e8a79a5dbd',
        'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
      }
    };