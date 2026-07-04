export abstract class Logger {

  static info(message: string) {
    console.log(
      `[INFO] ${message}`
    );
  }

  static error(error: unknown) {
    console.error(error);
  }

}