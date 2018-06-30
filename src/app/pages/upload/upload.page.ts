import {Component} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
@Component({
  selector: 'upload-page',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.css']
})

export class UploadPage {
  uploader: FileUploader;
  url = 'http://upload/picture';

  constructor() {
    let vm = this;
    this.uploader = new FileUploader({
      url: vm.url,
      method: "POST",
      itemAlias: "file" // 后端设定的字段名成
    });
  }

  selectedFileOnChanged() {
    // 这里是文件选择完成后的操作处理
    this.uploader.queue[0].onSuccess = (response, status, headers) => {
      // 上传文件成功
      if (status == 200) { // 上传文件后获取服务器返回的数据
        let tempRes = JSON.parse(response);
      }
      else { // 上传文件后获取服务器返回的数据错误
      }
    };
    this.uploader.queue[0].upload(); // 开始上传
  }

}
