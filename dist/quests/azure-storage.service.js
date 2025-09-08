"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AzureStorageService = void 0;
const common_1 = require("@nestjs/common");
const storage_blob_1 = require("@azure/storage-blob");
const uuid_1 = require("uuid");
let AzureStorageService = class AzureStorageService {
    blobServiceClient;
    containerName;
    constructor() {
        this.blobServiceClient = storage_blob_1.BlobServiceClient.fromConnectionString(process.env.AZURE_STORAGE_CONNECTION_STRING);
        this.containerName = process.env.AZURE_CONTAINER_NAME;
    }
    async uploadFile(file) {
        if (!file)
            throw new Error('Файл не передан');
        const containerClient = this.blobServiceClient.getContainerClient(this.containerName);
        const blobName = `${uuid_1.v4()}-${file.originalname}`;
        const blockBlobClient = containerClient.getBlockBlobClient(blobName);
        await blockBlobClient.uploadData(file.buffer);
        return blockBlobClient.url;
    }
};
exports.AzureStorageService = AzureStorageService;
exports.AzureStorageService = AzureStorageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AzureStorageService);
//# sourceMappingURL=azure-storage.service.js.map