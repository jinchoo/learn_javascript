// the function incrementAge such that it returns the person object with the age incremented (add 1 to the existing value)

function incrementAge(person) {
  // we need to store the person.age in person.age + 1, so we won't lose the updated value
  person.age = person.age + 1
  // after we store the person.age, we need to return the person object
  return person
}
