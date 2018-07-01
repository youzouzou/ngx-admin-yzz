import {Component} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
@Component({
  selector: 'form-page',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.css']
})

export class FormPage {
  user = {
    name: '',
    sex: 'female'
  };

  sexList = [
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
    for (let i = 0; i < this.uploader.queue.length; i++) {
      this.uploader.queue[i].onSuccess = (response, status, headers) => {
        // 上传文件成功
        if (status == 200) { // 上传文件后获取服务器返回的数据
          console.log(i + '上传成功', JSON.parse(response));
        }
        else { // 上传文件后获取服务器返回的数据错误
        }
      };
      this.uploader.queue[i].upload(); // 开始上传
    }
  }

}
