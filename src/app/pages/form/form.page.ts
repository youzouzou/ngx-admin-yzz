import {Component, Renderer2} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
@Component({
  selector: 'form-page',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.css']
})

export class FormPage {
  user: any = {
    name: '',
    age: 0,
    sex: 'female'
  };

  sexList: any = [
    {
      sex: 'female',
      title: '女'
    },
    {
      sex: 'male',
      title: '男'
    }
  ];

  hobbyList: any = [
    {
      desc: '看书'
    },
    {
      desc: '听歌'
    },
    {
      desc: '敲代码'
    }
  ];

  // 提交表单
  submitForm() {
    console.log('提交数据', this.user, this.hobbyList)
  }

  // 改变性别
  changeSex(data) {
    // 单选框需要在这里手动修改值
    console.log('改变性别', data);
    this.user.sex = data.item.sex;
  }

  // 充值表单
  resetForm() {
    this.user = {
      name: '',
      age: 0,
      sex: 'female'
    };
    this.hobbyList = [
      {
        desc: '看书'
      },
      {
        desc: '听歌'
      },
      {
        desc: '敲代码'
      }
    ];
  }

  // 选择兴趣爱好
  changeStatus(data, i) {
    // 复选框需要在这里手动修改列表状态值
    console.log('选择兴趣', data, i);
    this.hobbyList[i].checkStatus = data;
  }

  // 文件上传操作
  uploader: any;
  url = 'http://debug.mall.naildaka.com/vapi/v3/mall/upload/picture'; //'http://upload/picture';

  constructor(private renderer: Renderer2) {
    let vm = this;
    this.uploader = new FileUploader({
      url: vm.url,
      method: "POST",
      itemAlias: "file" // 后端设定的字段名成
    });
    this.resetForm();
  }

// 图片裁剪
  imageChangedEvent: any = '';
  originalImage: any = '';
  croppedImage: any = '';
  cropperReady = false;
  cropperFile: any;


  imageCropped(image: string) {
    this.croppedImage = image;
    // 将文件格式转换成file
    let formData = new FormData();   //这里连带form里的其他参数也一起提交了,如果不需要提交其他参数可以直接FormData无参数的构造函数
    //convertBase64UrlToBlob函数是将base64编码转换为Blob
    let vm = this;
    formData.append("cropper", vm.convertBase64UrlToBlob(this.croppedImage));
    //append函数的第一个参数是后台获取数据的参数名,和html标签的input的name属性功能相同
    console.log('查看这个DOM节点', formData.get('cropper'));
    vm.cropperFile = formData.get('cropper')
  }

  imageLoaded() {
    this.cropperReady = true;
  }

  imageLoadFailed() {
    console.log('Load failed');
  }

  selectedFileOnChanged(event?: any) {
    if (event) {
      this.imageChangedEvent = event; // 通知裁剪插件
    }
    // 这里是文件选择完成后的操作处理
    for (let i = 0; i < this.uploader.queue.length; i++) {
      this.uploader.queue[i].onSuccess = (response, status, headers) => {
        // 上传文件成功
        if (status == 200) { // 上传文件后获取服务器返回的数据
          console.log(i + '上传成功', JSON.parse(response));
          this.originalImage = JSON.parse(response).file.url;
          this.croppedImage = JSON.parse(response).file.url;
        }
        else { // 上传文件后获取服务器返回的数据错误
        }
      };
      this.uploader.queue[i].upload(); // 开始上传
    }
  }

  submitUpload() {
    console.log('原图', this.originalImage);
    console.log('裁剪图', this.croppedImage);
    if (this.cropperFile) {
      // 手动上传裁剪文件到服务器，todo 这里要用http服务了
    }
  }

  convertBase64UrlToBlob(urlData) { // 将文件的base64转换成file
    var bytes = window.atob(urlData.split(',')[1]); //去掉url的头，并转换为byte
    //处理异常,将ascii码小于0的转换为大于0
    var ab = new ArrayBuffer(bytes.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < bytes.length; i++) {
      ia[i] = bytes.charCodeAt(i);
    }
    return new Blob([ab], {type: 'image/png'});
  }

}
