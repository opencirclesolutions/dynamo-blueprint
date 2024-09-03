export * from './autoFill.service';
import { AutoFillService } from './autoFill.service';
export * from './cRUD.service';
import { CRUDService } from './cRUD.service';
export * from './export.service';
import { ExportService } from './export.service';
export * from './file.service';
import { FileService } from './file.service';
export * from './model.service';
import { ModelService } from './model.service';
export * from './organizationController.service';
import { OrganizationControllerService } from './organizationController.service';
export * from './pdfController.service';
import { PdfControllerService } from './pdfController.service';
export * from './status.service';
import { StatusService } from './status.service';
export const APIS = [AutoFillService, CRUDService, ExportService, FileService, ModelService, OrganizationControllerService, PdfControllerService, StatusService];
