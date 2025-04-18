import {
  DynamoConfig,
  ExportServiceInterface
} from '@open-circle-solutions/dynamo-angular'
import {
  AutoFillService,
  CRUDService,
  ExportService,
  FileService,
  ModelService,
  StatusService
} from "../../../dynamo/model";
import {inject, Injectable} from "@angular/core";
import {
  DynamoAppConfig
} from "../../../../dynamo/dynamo-angular/src/main/dynamo/dist/dynamo-angular/lib/interfaces/dynamo-config";
import {Observable, of} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AppConfigService implements DynamoConfig {
  private autofillService = inject(AutoFillService);
  private crudService = inject(CRUDService);
  private exportService: ExportService = inject(ExportService);
  private fileService: FileService = inject(FileService);
  private modelService: ModelService = inject(ModelService);
  private statusService: StatusService = inject(StatusService);

  // @ts-ignore
  get getAutoFillService() {
    return () => this.autofillService;
  }

  // @ts-ignore
  get getCRUDService() {
    return () => this.crudService;
  }

  get getExportService(): () => ExportServiceInterface {
    // @ts-ignore
    return () => this.exportService;
  }

  // @ts-ignore
  get getFileService() {
    return () => this.fileService;
  }

  // @ts-ignore
  get getModelService() {
    return () => this.modelService;
  }

  // @ts-ignore
  get getStatusService() {
    return () => this.statusService;
  }

  // @ts-ignore
  get getConfiguration(): () => Observable<DynamoAppConfig> {
    return () => of(environment as DynamoAppConfig);
  }
}
