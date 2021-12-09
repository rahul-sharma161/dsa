class school {
  constructor(
    no_of_students = null,
    no_of_teachers = null,
    no_of_rooms = null
  ) {
    this.students = no_of_students;
    this.teachers = no_of_teachers;
    this.rooms = no_of_rooms;
  }
  capacity() {
    return this.students * this.rooms;
  }
}

let flora = new school(5, 4, 5);
console.log(flora.capacity());

function notOldschool(
  no_of_students = null,
  no_of_teachers = null,
  no_of_rooms = null
) {
  this.students = no_of_students;
  this.teachers = no_of_teachers;
  this.rooms = no_of_rooms;
}

notOldschool.prototype.capacity = function () {
  return this.students * this.rooms;
};

let fauna = new notOldschool(6, 7, 8);
console.log(fauna.capacity());
