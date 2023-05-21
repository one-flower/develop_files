// express_cs _cs应该删除

declare module '@node/express' {
  interface Router {
    get(path: string, cb: (req: any, res: any) => void): void
  }
  interface App {
    use(path: string, router: any): void
    listen(port: number, cb?: () => void)
  }
  // interface listen
  interface Express {
    (): App
    Router(): Router
  }

  const express: Express

  export default express
}

// declare var varA: number
declare function fnA(param: number): number {
  return param++
}
// declare class vue {}
// declare enum C {
//   a = 1,
// }
