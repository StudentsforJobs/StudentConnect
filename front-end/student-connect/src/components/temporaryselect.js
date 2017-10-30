getStudent(){
JSON.parse(getItem('student'))
}

makeSubjects() {
let subs = getStudent().subjects
subs.map(item => <option value="">{item.name}</option>)
}

getBuildOptions () {
return <select>
  {makeSubjects()}
</select>
}
