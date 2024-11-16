export class IndexedDBService {
    private db!: IDBDatabase;
    private storeName: string;
    private isConnected: boolean;
  
    constructor(storeName: string) {
      this.storeName = storeName;
      this.isConnected = false;
    }
  
    async openDB(): Promise<void> {
      return new Promise((resolve, reject) => {
        const request = indexedDB.open(this.storeName, 1);
        request.onsuccess = () => {
          this.db = request.result;
          this.isConnected = true;
          resolve();
        };
        request.onerror = () => {
          reject(request.error);
        };
        request.onupgradeneeded = (event:any) => {
          const db = event.target.result;
          db.createObjectStore(this.storeName, { keyPath: 'id', autoIncrement: true });
        };
      });
    }
  
    async disconnect(): Promise<void> {
      return new Promise((resolve, reject) => {
        if (this.isConnected) {
          this.db.close();
          this.isConnected = false;
          resolve();
        } else {
          reject(new Error('Database is not connected'));
        }
      });
    }
  
    async get(id: number): Promise<any> {
      return new Promise((resolve, reject) => {
        if (this.isConnected) {
          const transaction = this.db.transaction(this.storeName, 'readonly');
          const store = transaction.objectStore(this.storeName);
          const request = store.get(id);
          request.onsuccess = () => {
            resolve(request.result);
          };
          request.onerror = () => {
            reject(request.error);
          };
        } else {
          reject(new Error('Database is not connected'));
        }
      });
    }
  
    async put(data: any): Promise<void> {
      return new Promise((resolve, reject) => {
        if (this.isConnected) {
          const transaction = this.db.transaction(this.storeName, 'readwrite');
          const store = transaction.objectStore(this.storeName);
          const request = store.put(data);
          request.onsuccess = () => {
            resolve();
          };
          request.onerror = () => {
            reject(request.error);
          };
        } else {
          reject(new Error('Database is not connected'));
        }
      });
    }
  
    async update(id: number, data: any): Promise<void> {
      return new Promise((resolve, reject) => {
        if (this.isConnected) {
          const transaction = this.db.transaction(this.storeName, 'readwrite');
          const store = transaction.objectStore(this.storeName);
          const request = store.get(id);
          request.onsuccess = () => {
            const oldData = request.result;
            Object.assign(oldData, data);
            const putRequest = store.put(oldData);
            putRequest.onsuccess = () => {
              resolve();
            };
            putRequest.onerror = () => {
              reject(putRequest.error);
            };
          };
          request.onerror = () => {
            reject(request.error);
          };
        } else {
          reject(new Error('Database is not connected'));
        }
      });
    }
  
    async delete(id: number): Promise<void> {
      return new Promise((resolve, reject) => {
        if (this.isConnected) {
          const transaction = this.db.transaction(this.storeName, 'readwrite');
          const store = transaction.objectStore(this.storeName);
          const request = store.delete(id);
          request.onsuccess = () => {
            resolve();
          };
          request.onerror = () => {
            reject(request.error);
          };
        } else {
          reject(new Error('Database is not connected'));
        }
      });
    }
  
    async getAll(): Promise<any[]> {
      return new Promise((resolve, reject) => {
        if (this.isConnected) {
          const transaction = this.db.transaction(this.storeName, 'readonly');
          const store = transaction.objectStore(this.storeName);
          const request = store.getAll();
          request.onsuccess = () => {
            resolve(request.result);
          };
          request.onerror = () => {
            reject(request.error);
          };
        } else {
          reject(new Error('Database is not connected'));
        }
      });
    }
  }