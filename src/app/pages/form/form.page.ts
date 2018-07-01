import {Component} from '@angular/core';
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

  hobbyList:any = [
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

  submitForm() {
    console.log('提交数据', this.user, this.hobbyList)
  }

  changeSex(data) {
    console.log('改变性别', data);
    this.user.sex = data.item.sex;
  }

  resetForm() {
    this.user = {
      name: '',
      sex: 'female'
    };
    this.hobbyList= [
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

  changeStatus(data, i) {
    console.log('选择兴趣', data, i);
    this.hobbyList[i].checkStatus = data;
  }

}
