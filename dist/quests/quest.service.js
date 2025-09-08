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
exports.QuestService = void 0;
const common_1 = require("@nestjs/common");
const quest_data_service_1 = require("./quest.data-service");
const azure_storage_service_1 = require("./azure-storage.service");
let QuestService = class QuestService {
    questData;
    azureStorage;
    constructor(questData, azureStorage) {
        this.questData = questData;
        this.azureStorage = azureStorage;
    }
    findAll() {
        return this.questData.findAll();
    }
    async createWithImage(data, file) {
        let imageUrl;
        if (file) {
            imageUrl = await this.azureStorage.uploadFile(file);
        }
        return this.questData.create({
            ...data,
            duration: Number(data.duration),
            players: Number(data.players),
            image: imageUrl ?? '',
        });
    }
};
exports.QuestService = QuestService;
exports.QuestService = QuestService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [quest_data_service_1.QuestDataService,
        azure_storage_service_1.AzureStorageService])
], QuestService);
//# sourceMappingURL=quest.service.js.map