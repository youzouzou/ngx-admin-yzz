 /*指令动画需要压缩后放入styleNode.innerHTML中*/
.linear-show {
  animation: linear-show-func 1s linear;
}

.linear-show-hide {
  animation: linear-show-hide-func 2.5s linear;
  opacity: 0;
}

.bounce-show{
  animation: bounce-show-func 1s linear;
}

@keyframes linear-show-func {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@-webkit-keyframes linear-show-func {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes linear-hide-func {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@-webkit-keyframes linear-show-func {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes linear-show-hide-func {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-webkit-keyframes linear-show-hide-func {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes bounce-show-func {
  0% {
    transform: scale(0);
  }

  30% {
    transform: scale(1.2);
  }

  70% {
    transform: scale(0.8);
  }

  100% {
    transform: scale(1);
  }
}

@-webkit-keyframes bounce-show-func {
  0% {
    transform: scale(0);
  }

  30% {
    transform: scale(1.2);
  }

  70% {
    transform: scale(0.8);
  }

  100% {
    transform: scale(1);
  }
}

