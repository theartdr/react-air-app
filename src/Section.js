const Section = ({grade}) => {
  return grade==='1' ? <section style={{backgroundColor:'skyblue'}}></section>
  :grade==='2'? <section style={{backgroundColor:'lightgreen'}}></section>
  :grade==='3'? <section style={{backgroundColor:'yellow'}}></section>
  :grade==='4'? <section style={{backgroundColor:'orange'}}></section>
  :grade==='5'? <section style={{backgroundColor:'red'}}></section>
  :<section style={{backgroundColor:'lightgray'}}></section>
  }

export default Section