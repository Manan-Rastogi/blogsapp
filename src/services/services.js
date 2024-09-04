import { Client, Databases, Storage, Query, ID } from "appwrite";
import config from "../configs/config";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.databases = new Databases(this.client);

    this.bucket = new Storage(this.client);
  }

  async getBlog(id) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        id
      );
    } catch (error) {
      console.log("error: APPWRITE :: getBlog() -> ", error);
      return false;
    }
  }

  async getBlogs(queries = [Query.equal("status", true)]) {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("error: APPWRITE :: getBlogs() -> ", error);
      return false;
    }
  }

  async createBlog(data) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        data
      );
    } catch (error) {
      console.log("error: APPWRITE :: postBlog() -> ", error);
      return false;
    }
  }

  async updateBlog(id, data) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        id,
        data
      );
    } catch (error) {
      console.log("error: APPWRITE :: updateBlog() -> ", error);
      return false;
    }
  }

  async deleteBlog(id) {
    try {
      return await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        id
      );
    } catch (error) {
      console.log("error: APPWRITE :: deleteBlog() -> ", error);
      return false;
    }
  }

  // Storage Services
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("error: APPWRITE :: uploadFile() -> ", error);
      return false;
    }
  }

  async getFile(fileId) {
    try {
      return await this.bucket.getFile(config.appwriteBucketId, fileId);
    } catch (error) {
      console.log("error: APPWRITE :: getFile() -> ", error);
      return false;
    }
  }

  async getFilePreview(fileId) {
    try {
      return this.bucket.getFilePreview(config.appwriteBucketId, fileId).href
    } catch (error) {
      console.log("error: APPWRITE :: getFilePreview() -> ", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      return await this.bucket.deleteFile(config.appwriteBucketId, fileId);
    } catch (error) {
      console.log("error: APPWRITE :: deleteFile() -> ", error);
      return false;
    }
  }
}


const service = new Service()

export default service;