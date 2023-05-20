// 画布
let canvas = document.querySelector("canvas") as HTMLCanvasElement;
let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
canvas.width = screen.availWidth;
canvas.height = screen.height;

let str: string[] = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
let rainArr: number[] = Array(Math.ceil(canvas.width / 20)).fill(0); //获取宽度例如1920 / 10 192

const rain = (): void => {
  ctx.fillStyle = "rgba(0,0,0,0.05)"; //填充背景颜色
  ctx.fillRect(0, 0, canvas.width, canvas.height); //背景
  ctx.fillStyle = "#0f0"; //文字颜色
  rainArr.forEach((item, index) => {
    ctx.fillText(
      str[Math.floor(Math.random() * str.length)],
      index * 20,
      item + 10
    );
    // rainArr[index] =
    //   item >= canvas.height || item > 10000 * Math.random() ? 0 : item + 10;
    rainArr[index] =
      item >= canvas.height || item > canvas.height * 10 * Math.random()
        ? 0
        : item + 10; //添加随机数让字符随机出现不至于那么平整
  });
};
setInterval(rain, 20);
