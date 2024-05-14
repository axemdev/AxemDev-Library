export class Course {
  private id: String;
  private name: String;
  private description: String;
  private img: String;
  private link: String;
  private expired: Boolean;

  constructor(
    id: String,
    name: String,
    description: String,
    link: String,
    expired: Boolean,
    img: String
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.link = link;
    this.expired = expired;
    this.img = img;
  }

  getImg() {
    return this.img;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  getLink() {
    return this.link;
  }

  getExpired() {
    return this.expired;
  }
}
