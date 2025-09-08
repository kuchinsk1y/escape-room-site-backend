export declare class AzureStorageService {
    private blobServiceClient;
    private containerName;
    constructor();
    uploadFile(file: Express.Multer.File): Promise<string>;
}
