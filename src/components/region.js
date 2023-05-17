export default function RegionPicker() {
return (
  <label>
    지역:
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
  );
}