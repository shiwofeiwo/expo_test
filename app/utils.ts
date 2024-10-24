import { RefObject, createRef } from 'react';

export class RefsManager {
  private readonly refInsStore: { [key: string]: RefObject<any>[] };

  constructor() {
    this.refInsStore = {};
  }

  private clearNullRefs(): void {
    Object.keys(this.refInsStore).forEach((refName) => {
      const filteredInsList = this.refInsStore[refName].filter(
        (insRef) => !!insRef.current
      );
      if (filteredInsList.length > 0) {
        this.refInsStore[refName] = filteredInsList;
      } else {
        delete this.refInsStore[refName];
      }
    });
  }

  public get<T>(refName: string): T | null {
    this.clearNullRefs();
    if (this.refInsStore[refName] && this.refInsStore[refName].length > 0) {
      return this.refInsStore[refName][0].current as T;
    }

    return null;
  }

  public getAll<T>(refName: string): T[] {
    this.clearNullRefs();
    if (this.refInsStore[refName] && this.refInsStore[refName].length > 0) {
      return this.refInsStore[refName].map((i) => i.current as T);
    }

    return [];
  }

  public linkRef<T>(refName: string): RefObject<T> {
    const refIns = createRef<T>();
    this.refInsStore[refName] = this.refInsStore[refName] || [];
    this.refInsStore[refName].push(refIns);
    return refIns;
  }
}

export default {};
