import { NativeModules } from 'react-native';
import { PDFViewCtrl } from './PDFViewCtrl/PDFViewCtrl';
import { DocumentView } from './DocumentView/DocumentView';
import { Config } from './Config/Config';
import * as AnnotOptions from './AnnotOptions/AnnotOptions';
const RNPdftron = NativeModules.RNPdftron;
export { RNPdftron, PDFViewCtrl, DocumentView, Config, AnnotOptions, };
