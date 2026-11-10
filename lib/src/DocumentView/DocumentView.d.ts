import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Config } from "../Config/Config";
import * as AnnotOptions from "../AnnotOptions/AnnotOptions";
export interface OutlineItem {
    indent: number;
    title: string;
    page?: number;
    children?: OutlineItem[];
}
/**
 * Object containing PropTypes types for {@link DocumentView} class.
 * Also used to generate prop types for TS users.
 *
 * To represent functions, please use {@link func}.
 * To represent "one of Config.Buttons values" or "an array of
 * Config.Buttons values", please use {@link oneOf} or {@link arrayOf}.
 */
declare const propTypes: any;
declare type DocumentViewProps = PropTypes.InferProps<typeof propTypes>;
export declare class DocumentView extends PureComponent<DocumentViewProps, any> {
    _viewerRef: any;
    static propTypes: any;
    onChange: (event: any) => void;
    getDocumentPath: () => Promise<void | string>;
    getAllFields: (pageNumber?: number) => Promise<void | Array<AnnotOptions.Field>>;
    setToolMode: (toolMode: Config.Tools) => Promise<void>;
    commitTool: () => Promise<void | boolean>;
    getPageCount: () => Promise<void | number>;
    importBookmarkJson: (bookmarkJson: string) => Promise<void>;
    openBookmarkList: () => Promise<void>;
    importAnnotationCommand: (xfdfCommand: string, initialLoad?: boolean) => Promise<void>;
    importAnnotations: (xfdf: string, replace?: boolean) => Promise<void | Array<AnnotOptions.Annotation>>;
    exportAnnotations: (options?: {
        annotList: Array<AnnotOptions.Annotation>;
    }) => Promise<void | string>;
    flattenAnnotations: (formsOnly: boolean) => Promise<void>;
    deleteAnnotations: (annotations: Array<AnnotOptions.Annotation>) => Promise<void>;
    saveDocument: () => Promise<void | string>;
    setFlagForFields: (fields: Array<string>, flag: Config.FieldFlags, value: boolean) => Promise<void>;
    getField: (fieldName: string) => Promise<void | {
        fieldName: string;
        fieldValue?: any;
        fieldType?: string | undefined;
    }>;
    openAnnotationList: () => Promise<void>;
    setStampImageData: (annotationId: string, pageNumber: number, stampImageDataUrl: string) => Promise<void>;
    setFormFieldHighlightColor: (fieldHighlightColor: AnnotOptions.ColorWithAlpha) => Promise<void>;
    /**
    * note: this function exists for supporting the old version. It simply calls setValuesForFields.
    *
    */
    setValueForFields: (fieldsMap: Record<string, string | boolean | number>) => Promise<void>;
    setValuesForFields: (fieldsMap: Record<string, string | boolean | number>) => Promise<void>;
    handleBackButton: () => Promise<void | boolean>;
    /**
    * note: this function exists for supporting the old version. It simply calls setFlagsForAnnotations.
    *
    */
    setFlagForAnnotations: (annotationFlagList: Array<AnnotOptions.AnnotationFlag>) => Promise<void>;
    setFlagsForAnnotations: (annotationFlagList: Array<AnnotOptions.AnnotationFlag>) => Promise<void>;
    selectAnnotation: (id: string, pageNumber: number) => Promise<void>;
    /**
    * note: this function exists for supporting the old version. It simply calls setPropertiesForAnnotation.
    *
    */
    setPropertyForAnnotation: (id: string, pageNumber: number, propertyMap: AnnotOptions.AnnotationProperties) => Promise<void>;
    setPropertiesForAnnotation: (id: string, pageNumber: number, propertyMap: AnnotOptions.AnnotationProperties) => Promise<void>;
    getPropertiesForAnnotation: (id: string, pageNumber: number) => Promise<void | AnnotOptions.AnnotationProperties>;
    setDrawAnnotations: (drawAnnotations: boolean) => Promise<void>;
    setVisibilityForAnnotation: (id: string, pageNumber: number, visibility: boolean) => Promise<void>;
    setHighlightFields: (highlightFields: boolean) => Promise<void>;
    getAnnotationAtPoint: (x: number, y: number, distanceThreshold: number, minimumLineWeight: number) => Promise<void | AnnotOptions.Annotation>;
    getAnnotationListAt: (x1: number, y1: number, x2: number, y2: number) => Promise<void | Array<AnnotOptions.Annotation>>;
    getAnnotationsOnPage: (pageNumber: number) => Promise<void | Array<AnnotOptions.Annotation>>;
    getCustomDataForAnnotation: (annotationID: string, pageNumber: number, key: string) => Promise<void | string>;
    setAnnotationToolbarItemEnabled: (itemId: string, enable: boolean) => Promise<void>;
    getPageCropBox: (pageNumber: number) => Promise<void | AnnotOptions.CropBox>;
    setCurrentPage: (pageNumber: number) => Promise<void | boolean>;
    getVisiblePages: () => Promise<void | Array<number>>;
    gotoPreviousPage: () => Promise<void | boolean>;
    gotoNextPage: () => Promise<void | boolean>;
    gotoFirstPage: () => Promise<void | boolean>;
    gotoLastPage: () => Promise<void | boolean>;
    showGoToPageView: () => Promise<void>;
    closeAllTabs: () => Promise<void>;
    openTabSwitcher: () => Promise<void>;
    getZoom: () => Promise<void | number>;
    setZoomLimits: (zoomLimitMode: Config.ZoomLimitMode, minimum: number, maximum: number) => Promise<void>;
    zoomWithCenter: (zoom: number, x: number, y: number) => Promise<void>;
    zoomToRect: (pageNumber: number, rect: AnnotOptions.Rect) => Promise<void>;
    smartZoom: (x: number, y: number, animated: boolean) => Promise<void>;
    getScrollPos: () => Promise<void | {
        horizontal: number;
        vertical: number;
    }>;
    getCanvasSize: () => Promise<void | {
        width: number;
        height: number;
    }>;
    getPageRotation: () => Promise<void | AnnotOptions.RotationDegree>;
    rotateClockwise: () => Promise<void>;
    rotateCounterClockwise: () => Promise<void>;
    convertScreenPointsToPagePoints: (points: Array<AnnotOptions.Point>) => Promise<void | Array<AnnotOptions.Point>>;
    convertPagePointsToScreenPoints: (points: Array<AnnotOptions.Point>) => Promise<void | Array<AnnotOptions.Point>>;
    getPageNumberFromScreenPoint: (x: number, y: number) => Promise<void | number>;
    setProgressiveRendering: (progressiveRendering: boolean, initialDelay: number, interval: number) => Promise<void>;
    setImageSmoothing: (imageSmoothing: boolean) => Promise<void>;
    setOverprint: (overprint: Config.OverprintMode) => Promise<void>;
    setColorPostProcessMode: (colorPostProcessMode: Config.ColorPostProcessMode) => Promise<void>;
    setColorPostProcessColors: (whiteColor: AnnotOptions.Color, blackColor: AnnotOptions.Color) => Promise<void>;
    startSearchMode: (searchString: string, matchCase: boolean, matchWholeWord: boolean) => Promise<void>;
    exitSearchMode: () => Promise<void>;
    findText: (searchString: string, matchCase: boolean, matchWholeWord: boolean, searchUp: boolean, regExp: boolean) => Promise<void>;
    cancelFindText: () => Promise<void>;
    openSearch: () => Promise<void>;
    getSelection: (pageNumber: number) => Promise<void | AnnotOptions.TextSelectionResult>;
    hasSelection: () => Promise<void | boolean>;
    clearSelection: () => Promise<void>;
    getSelectionPageRange: () => Promise<void | {
        begin: number;
        end: number;
    }>;
    hasSelectionOnPage: (pageNumber: number) => Promise<void | boolean>;
    selectInRect: (rect: AnnotOptions.Rect) => Promise<void | boolean>;
    isThereTextInRect: (rect: AnnotOptions.Rect) => Promise<void | boolean>;
    selectAll: () => Promise<void>;
    setPageBorderVisibility: (pageBorderVisibility: boolean) => Promise<void>;
    setPageTransparencyGrid: (pageTransparencyGrid: boolean) => Promise<void>;
    setDefaultPageColor: (defaultPageColor: AnnotOptions.Color) => Promise<void>;
    setBackgroundColor: (backgroundColor: AnnotOptions.Color) => Promise<void>;
    exportAsImage: (pageNumber: number, dpi: number, exportFormat: Config.ExportFormat, transparent?: boolean) => Promise<void | string>;
    undo: () => Promise<void>;
    redo: () => Promise<void>;
    canUndo: () => Promise<void | boolean>;
    canRedo: () => Promise<void | boolean>;
    showCrop: () => Promise<void>;
    setCurrentToolbar: (toolbar: string) => Promise<void>;
    showViewSettings: (rect: AnnotOptions.Rect) => Promise<void>;
    showRotateDialog: () => Promise<void>;
    showAddPagesView: (rect: AnnotOptions.Rect) => Promise<void>;
    isReflowMode: () => Promise<void | boolean>;
    toggleReflow: () => Promise<void>;
    shareCopy: (rect: AnnotOptions.Rect, flattening: boolean) => Promise<void>;
    openThumbnailsView: () => Promise<void>;
    openOutlineList: () => Promise<void>;
    getOutlineList: () => Promise<void | OutlineItem[]>;
    getBase64FromPageRect: (pageNumber: number, rect: AnnotOptions.Rect) => Promise<void | string>;
    openLayersList: () => Promise<void>;
    openNavigationLists: () => Promise<void>;
    getSavedSignatures: () => Promise<void | Array<string>>;
    getSavedSignatureFolder: () => Promise<void | string>;
    getSavedSignatureJpgFolder: () => Promise<void | string>;
    _setNativeRef: (ref: any) => void;
    render(): JSX.Element;
}
export {};
