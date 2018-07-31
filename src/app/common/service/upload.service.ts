import {Injectable} from '@angular/core';
import {globalService} from './global.service';
import {alertService} from './alert.service';
import {FileUploader} from 'ng2-file-upload';
import {apiService} from './api.service';

@Injectable()
export class uploadService {
  initUploadPicture: Function;
  initUploadVideo: Function;
  uploadOneFile: Function;
  uploadMultiFile: Function;

  constructor(public global: globalService, private alert: alertService, private api: apiService) {
    const vm = this;
    vm.initUploadPicture = function (uploader) {
      uploader = new FileUploader({
        url: api.uploadPicture,
        method: 'POST',
        itemAlias: 'file' // 后端设定的字段名成
      });

      uploader.onAfterAddingFile = (item => {
        item.withCredentials = false;
      });
      return uploader;
    };

    vm.initUploadVideo = function (uploader) {
      uploader = new FileUploader({
        url: api.uploadVideo,
        method: 'POST',
        itemAlias: 'file' // 后端设定的字段名成
      });

      uploader.onAfterAddingFile = (item => {
        item.withCredentials = false;
      });
      return uploader;
    };

    vm.uploadOneFile = function (uploader, cb) {
      for (let i = 0; i < uploader.queue.length; i++) {
        vm.global.loadStatus = true;
        uploader.queue[i].onSuccess = (response, status, headers) => {
          // 上传文件成功
          if (status === 200) { // 上传文件后获取服务器返回的数据
            console.log(i + '上传成功', JSON.parse(response));
            cb(JSON.parse(response).resultData[0].origin);
          } else { // 上传文件后获取服务器返回的数据错误
            vm.alert.error(response.errorMessage);
          }
          vm.global.loadStatus = false;
        };
        uploader.queue[i].upload(); // 开始上传
      }
    };

    vm.uploadMultiFile = function (uploader, cb) {
      const i = 0;
      if (i < uploader.queue.length) {
        vm.uploadSequence(uploader, i, cb);
      }
    };
    return vm;
  }

  uploadSequence(uploader, i, cb) {
    const vm = this;
    vm.global.loadStatus = true;
    uploader.queue[i].upload(); // 开始上传
    uploader.queue[i].onSuccess = (response, status, headers) => {
      // 上传文件成功
      if (status === 200) { // 上传文件后获取服务器返回的数据
        console.log(i + '上传成功', JSON.parse(response));
        let name = '';
        if (uploader.queue[i] && uploader.queue[i].some) {
          name = uploader.queue[i].some.name;
        }
        uploader.queue.splice(i, 1);
        cb(JSON.parse(response).resultData[0].origin, name);
        if (i < uploader.queue.length) {
          vm.uploadSequence(uploader, i, cb);
        }
      }
      vm.global.loadStatus = false;
    };
  }
}
