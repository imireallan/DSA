interface ICustomArray {
  insert: (val: any) => void;
  removeAt: (index: number) => number;
  pop: () => number;
  unShift: () => number;
  push: (val: any) => void;
  shift: (val: any) => void;
}

export default class CustomArray implements ICustomArray {
  insert(val: any) {}
  removeAt(index: number) {
    return 1;
  }
  pop() {
    return 1;
  }
  unShift() {
    return 1;
  }
  push(val: any) {}
  shift(val: any) {}
}
