
export class User {
  displayName
  points
  constructor(displayName = '', points = 0) {
    this.displayName = displayName
    this.points = points
  }
}