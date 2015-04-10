class mySingletonMod {

  private static _instance:mySingletonMod = null;

  constructor() {
    if(mySingletonMod._instance){
      throw new Error("Error: Instantiation failed. Singleton module! Use .getInstance() instead of new.");
    }
    mySingletonMod._instance = this;
  }

  public static getInstance():mySingletonMod {
     if(mySingletonMod._instance === null) {
       mySingletonMod._instance = new mySingletonMod();
     }
     return mySingletonMod._instance;
   }
}
export = mySingletonMod;
