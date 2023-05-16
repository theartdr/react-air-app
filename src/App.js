import './App.css';
import { useEffect, useState } from 'react';
// import axios from 'axios';
// axios.get('data.json');
import './components/region'

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
    sidoName: '서울',
    ver:'1.0',
    }

//   setLoading(false);
//   if (loading) return <div>Loading...</div>;
//   if (!apiData) return null;
//   return (
//   <>
//     <ul>
//       {apiData.map(data => (
//         <li key={index}>
//           {data.stationName} {data.sidoName} {data.pm10Grade} {data.pm10Value} {data.dataTime}
//         </li>
//       ))}
//     </ul>
//   </>
// );

  useEffect(() => {
    fetch(`B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${getParameters['serviceKey']}&returnType=${getParameters['returnType']}&numOfRows=${getParameters['numOfRows']}&pageNo=${getParameters['pageNo']}&sidoName=${getParameters['sidoName']}&ver=${getParameters['ver']}`
      ).then(response => response.json()
      ).then((data) => {setApiData(data['response']['body']['items'])}); 
  },);

  return (
    <div className="App">
      <h1>미세먼지 알리미</h1>
      <label>
        <select name="selectedRegion">
          <option value="전국">전국</option>
          <option value="서울">서울</option>
          <option value="부산">부산</option>
          <option value="인천">인천</option>
          <option value="대전">대전</option>
          <option value="대구">대구</option>
          <option value="광주">광주</option>
          <option value="제주">제주</option>
        </select>
      </label>
      
      <section>
        {apiData.map((data, index) => (
          <div key={index}>
            <h2>{data.stationName}</h2>
            <h3>{data.sidoName}</h3>
            <h1>{data.pm10Grade}</h1>
            <h4>{data.pm10Value}</h4>
            <h5>{data.dataTime}</h5>
          </div>
        ))}
      </section>
    </div>
  );
};

export default App;