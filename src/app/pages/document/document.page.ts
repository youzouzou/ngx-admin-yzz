import {Component} from '@angular/core';

@Component({
  selector: 'document-page',
  templateUrl: './document.page.html',
  styleUrls: ['./document.page.css']
})

export class DocumentPage {
  index = 0;
  apiList = [
    {
      title: '图表',
      checkStatus: true,
    },
    {
      title: 'tab',
      checkStatus: true,
    },
    {
      title: '富文本',
      checkStatus: true,
    },
    {
      title: '上传文件',
      checkStatus: true,
    },
    {
      title: '图片裁剪',
      checkStatus: true,
    },
    {
      title: '导航栏',
      checkStatus: true,
    },
    {
      title: '面包屑导航',
      checkStatus: true,
    },
    {
      title: '联想输入',
      checkStatus: true,
    },
    {
      title: '单/复选框',
      checkStatus: true,
    },
    {
      title: 'tooltip',
      checkStatus: true,
    },
    {
      title: 'animation',
      checkStatus: true,
    },
    {
      title: 'validate',
      checkStatus: true,
    },
    {
      title: '按钮',
      checkStatus: true,
    },
    {
      title: '搜索框',
      checkStatus: true,
    },
    {
      title: 'tag',
      checkStatus: true,
    },
    {
      title: '拖拽排序',
      checkStatus: true,
    },
    {
      title: '下拉框',
      checkStatus: true,
    },
    {
      title: '模态框',
      checkStatus: true,
    },
    {
      title: 'filter',
      checkStatus: true,
    },
    {
      title: 'http',
      checkStatus: true,
    },

    {
      title: 'loading',
      checkStatus: true,
    },
    {
      title: 'gulp压缩',
      checkStatus: true,
    }
    ,
    {
      title: '国际化',
      checkStatus: true,
    }
    ,
    {
      title: '日期选择',
      checkStatus: true,
    },
    {
      title: 'message',
      checkStatus: false,
    },
    {
      title: '单元测试',
      checkStatus: false,
    }
  ];

  html = {
    chart: '<chart [type]="type" [data]="data" [options]="options"></chart>',
    chartJS: `type = 'line';
data = [
labels: ["January", "February", "March", "April", "May", "June", "July"],
datasets: [
    {
      label: "My First dataset",
      data: [65, 59, 80, 81, 56, 55, 40]
    }
]
  };
options = {
   responsive: true,
   maintainAspectRatio: false
}`,
    tag: '<tag [tagList]="tagList" placeholder="添加标签"></tag>',
    tab: '<tab [curIndex]="curTabIndex" (changeTab)="getTabData($event)"></tab>',
    tabJS: `getTabData(index) {
    this.curTabIndex = index;
  }`,
    rich: `<div class="form-box">
      <jodit-editor
        (onResize)="initEditor($event)"
        (onChange)="changeEditor($event)"
        [config]="{
        zIndex:1000,
        buttons: editorConfig.buttons,
        buttonsMD: editorConfig.buttons,
        buttonsSM: editorConfig.buttons,
        buttonsXS: editorConfig.buttons,
        askBeforePasteHTML: false,
        askBeforePasteFromWord: true,
        language: 'zh_cn',
        showTooltip: false,
        width: 400,
        height: 660}"></jodit-editor>
      <div class="jodit-editor-upload">
        <input type="file" accept="image/*" id="uploader" ng2FileSelect [uploader]="uploader"
               (change)="jodiEditorUpload($event)"/>
      </div>
    </div>`,
    upload: `<div class="upload-box">
  <input type="file" accept="image/*" (change)="selectedFileOnChanged($event)"/>
    打开本地图片
</div>`,
    richJS: `richContent = '';
editor: any;
editorConfig: any = {
    buttons: '|,bold,strikethrough,underline,italic,|,superscript,subscript,|,ul,ol,|,outdent,indent,|,font,fontsize,brush,paragraph,|,table,link,|,align,undo,redo,\n,cut,hr,eraser,copyformat,|,symbol,fullsize,selectall'
};
  
jodiEditorUpload() { // 富文本的上传图片操作
    // 这里是文件选择完成后的操作处理
    let vm = this;
    for (let i = 0; i < vm.uploader.queue.length; i++) {
      vm.uploader.queue[i].onSuccess = (response, status, headers) => {
        // 上传文件成功
        if (status == 200) { // 上传文件后获取服务器返回的数据
          console.log(i + '上传成功', JSON.parse(response).file.url);
          this.editor.value += '<img style="max-width:100%;" src="' + JSON.parse(response).file.url + '">';
        }
        else { // 上传文件后获取服务器返回的数据错误
        }
      };
      this.uploader.queue[i].upload(); // 开始上传
    }
  }
`,
    crop: `<image-cropper
        [imageChangedEvent]="imageChangedEvent"
        [maintainAspectRatio]="true"
        [aspectRatio]="1/1"
        [resizeToWidth]="128"
        format="jpeg"
        (imageCropped)="imageCropped($event)"
        (imageLoaded)="imageLoaded()"
        (loadImageFailed)="imageLoadFailed()"
        style="max-height: 330px;"
        [style.display]="cropperReady ? null : 'none'"
      ></image-cropper>`,
    cropJS: `imageLoaded() {
    this.cropperReady = true;
  }

  imageLoadFailed() {
    console.log('Load failed');
  }

  selectedFileOnChanged(event?: any) {
    if (event) {
      this.imageChangedEvent = event; // 通知裁剪插件
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
  
  submitUpload() { // 将裁剪后的文件上传到后台
    console.log('裁剪图', this.croppedImage);
    console.log('cropperFile', this.cropperFile);
    let vm = this;
    if (this.cropperFile) {
      this.cropUploader = new FileUploader({
        url: vm.api.upload,
        method: "POST",
        itemAlias: "file" // 后端设定的字段名成
      });
      this.cropUploader.addToQueue([this.cropperFile]);
      this.cropUploader.uploadAll();
      for (let i = 0; i < this.cropUploader.queue.length; i++) {
        this.cropUploader.queue[i].onSuccess = (response, status, headers) => {
          // 上传文件成功
          if (status == 200) { // 上传文件后获取服务器返回的数据
            console.log(i + '上传成功', JSON.parse(response));
          }
          else { // 上传文件后获取服务器返回的数据错误
          }
        };
        this.cropUploader.queue[i].upload(); // 开始上传
      }
    }
  }`,
    selectInput: `<select-input [keyword]="user.school" [list]="schoolList" [label]="'name'" [placeholder]="'联想输入'" (getInputValue)="selectSchool($event)"></select-input>`,
    radio: `<div class="form-radio">
            <radio [radioData]="sexList" (changeRadio)="changeSex($event)" [radioColor]="'#20B2AA'"
                   [selectedValue]="user.sex" [selectedName]="'sex'" [radioLabel]="'title'"></radio>
          </div>`,
    checkbox: `<div class="form-checkbox" *ngFor="let hobby of hobbyList;let i=index">
            <checkbox (changeCheckStatus)="changeStatus($event, i)" [checkboxSize]="20"
                      [checkStatus]="hobby.checkStatus"
                      [checkLabel]="hobby.desc"
                      [checkDisabled]="false"
                      [checkboxColor]="'black'"
                      [checkboxBorderColor]="'#20B2AA'"
                      [checkboxBg]="'#fff'"></checkbox>
            <span class="form-checkbox-desc">
              {{hobby.desc}}
            </span>
          </div>`,
    animation: ` <div [animation]="linear-show"></div>`,
    validate: `<input type="text" [(ngModel)]="user.name" validate [rule]="rules.name" [validateValue]="user.name">
<button class="confirm-btn" validate [validateType]="'submit'" (submit)="submitForm($event)" [validateRules]="rules">
   确认
</button>`,
    rules: `rules: any = {
    name: [
      {
        required: true,
        message: '请输入姓名'
      },
      {
        validator: function (value) {
          if (value.length > 3) {
            return '名字不能太长哦';
          }
        }
      }
    ],
    age: [
      {
        required: true,
        message: '请输入年龄'
      },
      {
        validator: function (value) {
          if (value < 0) {
            return '虽然你年轻得像逆生长，但年龄必须是正数哦';
          }
        }
      }
    ]
  };`,
    search: `<search (search)="search($event)" [palceholder]="'请输入菜名'"></search>`,
    drag: `<tbody dragula='table-bag' [dragulaModel]="data">
    <tr *ngFor="let item of data;let i=index" class="grab">
      <td>{{i+1}}</td>
      <td [tooltip]="item.name" tooltip-type="black">{{item.name}}</td>
      <td>{{item.price | fixed:2}}</td>
      <td>{{item.address}}</td>
      <td>{{item.receiver}}</td>
      <td>{{item.remark}}</td>
      <td>
        <button (click)="alertMsg(item,i)" class="btn-default">点我</button>
        <button routerLink="/table/table_detail" class="btn-default">详情</button>
      </td>
    </tr>
    </tbody>`,
    dragJS: `constructor(private dragulaService:DragulaService) { // 依赖注入DragulaService
  }
  
  ngOnInit() {
    let vm = this;
    // 拖拽事件
    vm.dragulaService.drag.subscribe((value) => {
      vm.onDrag(value.slice(1));
    });
    vm.dragulaService.drop.subscribe((value) => {
      // console.log('当前排序', vm.data);
      vm.onDrop(value.slice(1));
    });
    vm.dragulaService.over.subscribe((value) => {
      vm.onOver(value.slice(1));
    });
    vm.dragulaService.out.subscribe((value) => {
      vm.onOut(value.slice(1));
    });
  }
  
  private onDrag(args) {
    let [e, el] = args;
    // do something
  }

  private onDrop(args) {
    let [e, el] = args;
    // do something
  }

  private onOver(args) {
    let [e, el, container] = args;
    // do something
  }

  private onOut(args) {
    let [e, el, container] = args;
    // do something
  }`,
    modal: `<modal [modalStatus]="showStatus" (close)="closeModal()" [bgClose]="true">
        这里是模态框自定义内容
        <div>
          <button (click)="closeModal()">
            close
          </button>
        </div>
      </modal>`,
    modalJS: `openModal(index) {
    this.showStatus = true;// 将显示状态值设为true即可打开模态框
  }
  closeModal(){
    this.showStatus =false;// 将显示状态值设为false即可手动关闭模态框
  }`,
    tooltip: `<div [tooltip]="data" [color]="'black'" [showAnyway]="true" [direction]="'bottom'">{{data}}</div>`,
    multiSelect: `<!--联动下拉框-->
<multi-select [data]="cityList"
                    [firstName]="'provinceName'"
                    [secondName]="'cityName'"
                    [thirdName]="'areaName'"
                    [secondChild]="'cities'"
                    [thirdChild]="'areas'"
                    [firstLabel]="'provinceCode'"
                    [secondLabel]="'cityCode'"
                    [thirdLabel]="'areaCode'"
                    (getValue)="selectCity($event)"
                    [firstValue]="'110000'"
                    [secondValue]="'110100'"
                    [thirdValue]="'110102'"
      ></multi-select>
      
<!--非联动下拉框-->
<div style="width:100px;">
       <multi-select [data]="hobbyList"
                     [firstName]="'desc'"
                     [firstLabel]="'desc'"
                     (getValue)="selectHobby($event)"
                     [firstValue]="'看书'"
                     [mouseHide]="true"
       ></multi-select>`,
    multiSelectJS: `cityList = [{
    provinceName: '北京',
    provinceCode: 110000,
    cities: [
      {
        cityName: '北京市',
        cityCode: 110100,
        areas: [
          {
            areaName: '东城区',
            areaCode: 110102
          }
        ]
      }
    ]
  }];
  
selectCity(data) {
    console.log('选择地址', data); // 选中的值，数组格式：[this.firstValue, this.secondValue, this.thirdValue]
}`
  };

  changeStatus(value, index) {
    // todo 这样还是不太方便，想办法能不能换成双向数据绑定，或者就直接能获取到值
    console.log('点击改变值，当前为', value, index);
    this.apiList[index].checkStatus = value;
  }

  select(index) {
    this.index = index;
  }

  selectRadio(data) {
    console.log('选中的值', data);
  }
}
