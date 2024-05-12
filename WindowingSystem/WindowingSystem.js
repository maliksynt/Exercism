export class Size {
  constructor(width = 80, height = 60) {
    (this.width = width), (this.height = height);
  }

  resize(newWidth, newHeight) {
    (this.width = newWidth), (this.height = newHeight);
  }
}

export class Position {
  constructor(x = 0, y = 0) {
    (this.x = x), (this.y = y);
  }

  move(newX, newY) {
    (this.x = newX), (this.y = newY);
  }
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    if (newSize instanceof Size) {
      if (newSize.width < 1) {
        this.size.width = 1;
      } else if (newSize.width > this.screenSize.width - this.position.x) {
        this.size.width = this.screenSize.width - this.position.x;
      } else {
        this.size.width = newSize.width;
      }

      if (newSize.height < 1) {
        this.size.height = 1;
      } else if (newSize.height > this.screenSize.height - this.position.y) {
        this.size.height = this.screenSize.height - this.position.y;
      } else {
        this.size.height = newSize.height;
      }
    }
  }

  move(newPosition) {
    if (newPosition instanceof Position) {
      if (newPosition.x < 0) {
        this.position.x = 0;
      } else if (newPosition.x > this.screenSize.width - this.size.width) {
        this.position.x = this.screenSize.width - this.size.width;
      } else {
        this.position.x = newPosition.x;
      }

      if (newPosition.y < 0) {
        this.position.y = 0;
      } else if (newPosition.y > this.screenSize.height - this.size.height) {
        this.position.y = this.screenSize.height - this.size.height;
      } else {
        this.position.y = newPosition.y;
      }
    }
  }
}

export function changeWindow(programWindow) {
  if (programWindow instanceof ProgramWindow) {
    const newSize = new Size(400, 300);
    const newPosition = new Position(100, 150);
    programWindow.resize(newSize);
    programWindow.move(newPosition);
  }
  return programWindow;
}
