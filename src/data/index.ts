class Database<T = any> {

	public static getInstance<T>(): Database<T> {
		if (!Database.instance) {
			Database.instance = new Database<T>();
		}
		return Database.instance;
	}
	private static instance: Database;
	private data: T[];

	private constructor() {
		this.data = [];
	}

	public setData(key: number, data: T): void {
		this.data[key] = data;
	}

	public getData(key: number): T {
		return this.data[key];
	}
}

export { Database };
