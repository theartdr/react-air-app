const Grade = ({grade}) => {
  return grade==='1' ? <h1 style={{backgroundColor:'skyblue'}}>좋음</h1>
  :grade==='2'? <h1 style={{backgroundColor:'lightgreen'}}>보통</h1>
  :grade==='3'? <h1 style={{backgroundColor:'yellow'}}>한때나쁨</h1>
  :grade==='4'? <h1 style={{backgroundColor:'orange'}}>나쁨</h1>
  :grade==='5'? <h1 style={{backgroundColor:'red'}}>매우나쁨</h1>
  :<h1 style={{backgroundColor:'lightgray'}}>알수없음</h1>
  }

export default Grade