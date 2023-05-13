import './App.css';
import { useEffect, useState } from 'react';
// // import axios from 'axios';
// axios.get('data.json');
function App() {
  const [apiData, setApiData] = useState([]);
  // const [loading, setLoading] = useState(false);
//   const fetchApp = async () => {
//     setLoading(true);
//     const response = await axios.get(`B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${getParameters['serviceKey']}&returnType=${getParameters['returnType']}&numOfRows=${getParameters['numOfRows']}&pageNo=${getParameters['pageNo']}&sidoName=${getParameters['sidoName']}&ver=${getParameters['ver']}`);
//     setApiData(response.data);
//   }
//   useEffect(() => {
//     fetchApp();
//     setLoading(false);
//   }, );
  const getParameters = {
    serviceKey: 'ulAI5GXh5kNo2gBRAl2qBp4OeLN47hVj9aGE74ijNZG6QrZ89IAOsYSd4YRrGLUKK92cMvlCcjYm9uTwQ6N8YA%3D%3D', 
    returnType:'json',
    numOfRows:'100',
    pageNo:'1',
    sidoName: '시/도이름',
    ver:'1.0',
    }

//   setLoading(false);
//   if (loading) return <div>Loading...</div>;
//   if (!apiData) return null;
//   return (
//   <>
//     <ul>
//       {apiData.map(data => (
//         <li key={data.id}>
//           {data.response} {data.body} {data.items}
//         </li>
//       ))}
//     </ul>
//   </>
// );
// };

    useEffect(() => {
      fetch(`B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${getParameters['serviceKey']}&returnType=${getParameters['returnType']}&numOfRows=${getParameters['numOfRows']}&pageNo=${getParameters['pageNo']}&sidoName=${getParameters['sidoName']}&ver=${getParameters['ver']}`
        ).then(response => response.json()
        ).then((data) => {setApiData(data['response']['body']['items'])}); 
    },);
  
    // fetch(`B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${getParameters['serviceKey']}&returnType=${getParameters['returnType']}&numOfRows=${getParameters['numOfRows']}&pageNo=${getParameters['pageNo']}&sidoName=${getParameters['sidoName']}&ver=${getParameters['ver']}`)
    // .then(response => response.json()).then(data => {setApiData(data['response']['body']['items']);
    // 여기서 왼쪽의 data에 미세먼지 정보들이 담겨있습니다. 만약에 useState를 사용하시는 경우, 여기서 set함수를 통해서 data를 상태에 저장해주시면 됩니다. 
    // redux를 사용하신다면 여기서 dispatch를 하시면 됩니다. 조금 더 설명드리자면, 만약에 const [apiData, setApiData] = useState() 이런 식으로 상태를 만드셨다면, 
    // setApiData(data[‘response’][‘body’][‘items’]) 라고 하시면 apiData에 미세먼지 정보들이 저장됩니다. 직접 data를 출력해보시면서 어떻게 저장해야 가장 쓰기 편할지 고민해보시기 바랍니다!

  return (
    <div className="App">
      <div>
        {apiData.map((data) => (
          <div key={data.id}>
            <h2>{data.response}</h2>
            <h3>{data.body}</h3>
            <h4>{data.items}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
