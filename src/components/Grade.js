const Grade = ({grade}) => {
  if (grade==='1'){return <div style={{backgroundColor:'blue'}}>'좋음'</div>
  } else if(grade==='2'){return <div style={{backgroundColor:'green'}}>'보통'</div>
  } else if(grade==='3'){return <div style={{backgroundColor:'yellow'}}>'한때나쁨'</div>
  } else if(grade==='4'){return <div style={{backgroundColor:'orange'}}>'나쁨'</div>
  } else if(grade==='5'){return <div style={{backgroundColor:'red'}}>'매우나쁨'</div>};
  return grade
};

export default Grade