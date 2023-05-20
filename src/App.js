import './App.css';
import { useEffect, useState } from 'react';
// import axios from 'axios';
// axios.get('data.json');
import RegionPicker from './components/region';
import Grade from './components/Grade';
import styled from 'styled-components';
// import Section from './Section';
function App() {
  const [apiData, setApiData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState();

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
    sidoName: selectedRegion ? selectedRegion: '전국',
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
  const Card = styled.div`{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }`
  const Region = styled(Card)`{
    justify-content: left;
    font-size: ${(props) => props.fSize}
  }`
  const Footer = styled(Card)`{
    position: fixed;
    bottom: 40px;
    width: 50%;
    height: 3rem;
    z-index: 10;
    background-color: white;
  }`
  const Tab = styled.div`{
    margin: 0 40px;
    height: 3rem;
    align-items: stretch;
  }`

  return (
    <Card>
      <div className="App">
        <h1>미세먼지 알리미</h1>
        <RegionPicker selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion}/>      
          {apiData.map((data, index) => (
            <section key={index} grade={data.pm10Grade}>
              <Region fSize="24px">{data.stationName}</Region>
              <Region fSize="20px">{data.sidoName}</Region>
              <Grade grade={data.pm10Grade} />
              <h4>미세먼지 수치 : {data.pm10Value==='-' ? '알수없음' : data.pm10Value}</h4>
              <h5>({data.dataTime} 기준)</h5>
            </section>
          ))}
        <Footer>
          <Tab><span class="material-symbols-outlined">my_location</span>내 지역보기</Tab>
          <Tab><span class="material-symbols-outlined">map</span>전체 시도보기</Tab>
          <Tab><span class="material-symbols-outlined">pin_drop</span>즐겨찾기</Tab>
        </Footer> 
      </div>
    </Card>
  );
};

export default App;