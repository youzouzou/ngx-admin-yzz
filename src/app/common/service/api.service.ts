import { Injectable } from '@angular/core';

@Injectable()
export class apiService {
  constructor() {
    // 接口url集中在此
    return {
      cities:'assets/data/city.json',
      upload: 'http://upload/picture'
    }
  }
}
