// Type definitions for Kendo UI

declare module kendo {
    function bind(selector: string, viewModel: any, namespace?: any): void;
    function bind(element: JQuery, viewModel: any, namespace?: any): void;
    function bind(element: Element, viewModel: any, namespace?: any): void;
    function culture(value: string): void;
    function culture(): {
        name: string;
        calendar: {
            AM: string[];
            PM: string[];
            days: {
                names: string[];
                namesAbbr: string[];
                namesShort: string[];
                firstDay: number;
            };
            months: {
                names: string[];
                namesAbbr: string[];
            };
            patterns: {
                D: string;
                F: string;
                G: string;
                M: string;
                T: string;
                Y: string;
                d: string;
                g: string;
                m: string;
                s: string;
                t: string;
                u: string;
                y: string;
            };
            twoDigitYearMax: number;
        };
        calendars: {
            standard: {
                AM: string[];
                PM: string[];
                days: {
                    names: string[];
                    namesAbbr: string[];
                    namesShort: string[];
                    firstDay: number;
                };
                months: {
                    names: string[];
                    namesAbbr: string[];
                };
                patterns: {
                    D: string;
                    F: string;
                    G: string;
                    M: string;
                    T: string;
                    Y: string;
                    d: string;
                    g: string;
                    m: string;
                    s: string;
                    t: string;
                    u: string;
                    y: string;
                };
                twoDigitYearMax: number;
            };
        };
        numberFormat: {
            currency: {
                decimals: number;
                groupSize: number[];
                pattern: string[];
                symbol: string;
            };
            decimals: number;
            groupSize: number[];
            pattern: string[];
            percent: {
                decimals: number;
                groupSize: number[];
                pattern: string[];
                symbol: string;
            };
        };
    };
    function destroy(selector: string): void;
    function destroy(element: Element): void;
    function destroy(element: JQuery): void;
    function format(format: string, ...values: any[]): string;

    function fx(selector: string): effects.Element;
    function fx(element: Element): effects.Element;
    function fx(element: JQuery): effects.Element;

    function htmlEncode(value: string): string;
    function init(selector: string, ...namespaces: any[]): void;
    function init(element: JQuery, ...namespaces: any[]): void;
    function init(element: Element, ...namespaces: any[]): void;
    function observable(data: any): kendo.data.ObservableObject;
    function observableHierarchy(array: any[]): kendo.data.ObservableArray;
    function parseDate(value: any, format?: string, culture?: string): Date;
    function parseFloat(value: any, culture?: string): number;
    function parseInt(value: any, culture?: string): number;
    function render(template:(data: any) => string, data: any[]): string;
    function stringify(value: Object): string;
    function template(template: string, options?: TemplateOptions): (data: any) => string;
    function touchScroller(selector: string): void;
    function touchScroller(element: Element): void;
    function touchScroller(element: JQuery): void;
    function toString(value: number, format: string): string;
    function toString(value: Date, format: string): string;
    function unbind(selector: string): void;
    function unbind(element: JQuery): void;
    function unbind(element: Element): void;

    var ns: string;

    var keys: {
        INSERT: number;
        DELETE: number;
        BACKSPACE: number;
        TAB: number;
        ENTER: number;
        ESC: number;
        LEFT: number;
        UP: number;
        RIGHT: number;
        DOWN: number;
        END: number;
        HOME: number;
        SPACEBAR: number;
        PAGEUP: number;
        PAGEDOWN: number;
        F2: number;
        F10: number;
        F12: number;
    }

    var support: {
        touch: boolean;
        pointers: boolean;
        scrollbar(): number;
        hasHW3D: boolean;
        hasNativeScrolling: boolean;
        devicePixelRatio: number;
        placeHolder: boolean;
        zoomLevel: number;
        mobileOS: {
            device: string;
            tablet: any;
            browser: string;
            name: string;
            majorVersion: string;
            minorVersion: string;
            flatVersion: number;
            appMode: boolean;
        };
        browser: {
            msie: boolean;
            webkit: boolean;
            safari: boolean;
            opera: boolean;
            version: string;
        };
    }

    interface TemplateOptions {
        paramName?: string;
        useWithBlock?: boolean;
    }

    class Class {
        static fn: Class;
        static extend(prototype: Object): Class;
    }

    class Observable extends Class {
        static fn: Observable;
        static extend(prototype: Object): Observable;

        bind(eventName: string, handler: Function): Observable;
        one(eventName: string, handler: Function): Observable;
        trigger(eventName: string, e?: any): boolean;
        unbind(eventName: string, handler?: any): Observable;
    }

    interface ViewOptions {
        tagName?: string;
        wrap?: boolean;
        model?: Object;
    }

    class View {
        constructor(element: Element, options?: ViewOptions);
        constructor(element: string, options?: ViewOptions);
        render(container?: any): JQuery;
        destroy(): void;
    }

    class Layout extends View {
        showIn(selector: string, view: View);
    }

    interface RouterOptions {
        init?: Function;
        routeMissing?: Function;
        change?: Function;
    }

    class Router {
        constructor(options?: RouterOptions);
        start(): void;
        destroy(): void;
        route(route: string, callback: Function): void;
        navigate(location: string, silent?: boolean);
    }

}

declare module kendo.effects {
    interface Element {
        expand(direction: string): effects.Expand;
        expandHorizontal(): effects.Expand;
        expandVertical(): effects.Expand;
        fade(direction: string): effects.Fade;
        fadeIn(): effects.Fade;
        fadeOut(): effects.Fade;
        flip(axis: string, face: JQuery, back: JQuery): effects.Flip;
        flipHorizontal(face: JQuery, back: JQuery): effects.Flip;
        flipVertical(face: JQuery, back: JQuery): effects.Flip;
        pageturn(axis: string, face: JQuery, back: JQuery): effects.PageTurn;
        pageturnHorizontal(face: JQuery, back: JQuery): effects.PageTurn;
        pageturnVertical(face: JQuery, back: JQuery): effects.PageTurn;
        slideIn(direction: string): effects.SlideIn;
        slideInDown(): effects.SlideIn;
        slideInLeft(): effects.SlideIn;
        slideInRight(): effects.SlideIn;
        slideInUp(): effects.SlideIn;
        tile(direction: string, previous: JQuery): effects.Tile;
        tileDown(previous: JQuery): effects.Tile;
        tileLeft(previous: JQuery): effects.Tile;
        tileRight(previous: JQuery): effects.Tile;
        tileUp(previous: JQuery): effects.Tile;
        transfer(target: JQuery): effects.Transfer;
        zoom(direction: string): effects.Zoom;
        zoomIn(): effects.Zoom;
        zoomOut(): effects.Zoom;
    }
    
    interface Effect {
        //play(): JQueryPromise;
        //reverse(): JQueryPromise;
        duration(value: number): Effect;
        add(effect: Effect): Effect;
        stop(): Effect;
    }

    interface Expand extends Effect {
        duration(value: number): Expand;
        direction(value: string): Expand;
        stop(): Expand;
        add(effect: Effect): Expand;
    }

    interface Fade extends Effect {
        duration(value: number): Fade;
        direction(value: string): Fade;
        stop(): Fade;
        add(effect: Effect): Fade;
        startValue(value: number): Fade;
        endValue(value: number): Fade;
    }

    interface Flip extends Effect {
        duration(value: number): Flip;
        direction(value: string): Flip;
        stop(): Flip;
        add(effect: Effect): Flip;
    }

    interface PageTurn extends Effect {
        duration(value: number): PageTurn;
        direction(value: string): PageTurn;
        stop(): PageTurn;
        add(effect: Effect): PageTurn;
    }

    interface SlideIn extends Effect {
        duration(value: number): SlideIn;
        direction(value: string): SlideIn;
        stop(): SlideIn;
        add(effect: Effect): SlideIn;
    }

    interface Tile extends Effect {
        duration(value: number): Tile;
        direction(value: string): Tile;
        stop(): Tile;
        add(effect: Effect): Tile;
    }

    interface Transfer extends Effect {
        duration(value: number): Transfer;
        stop(): Transfer;
        add(effect: Effect): Transfer;
    }

    interface Zoom extends Effect {
        duration(value: number): Zoom;
        direction(value: string): Zoom;
        stop(): Zoom;
        add(effect: Effect): Zoom;
        startValue(value: number): Zoom;
        endValue(value: number): Zoom;
    }
}

declare module kendo.data {
    interface ObservableObjectEvent {
        sender?: ObservableObject;
        field?: string;
    }

    interface ObservableObjectSetEvent extends ObservableObjectEvent {
        value?: any;
        preventDefault?: Function;
    }

    class Binding extends Observable {
        get(): any;
        set(value: any): void;
    }

    var binders: Object;

    class Binder extends Class {
        static fn: Binder;
        static extend(prototype: Object): Binder;

        element: Element;
        bindings: { [key: string]: Binding; };
        constructor(element: Element, bindings: { [key: string]: Binding; }, options?: any);
        destroy(): void;
        refresh(): void;
    }

    class ObservableObject extends Observable{
        constructor(value?: any);
        get(name: string): any;
        parent(): ObservableObject;
        set(name: string, value: any): void;
        toJSON(): { [key: string]: any; };
        uid: string;
    }

    class Model extends ObservableObject {
        idField: string;
        _defaultId: any;
        fields: DataSourceSchemaModelFields;
        defaults: any;
        constructor(data?: any);
        dirty: boolean;
        id: any;
        editable(field: string): boolean;
        isNew(): boolean;
        static define(options: DataSourceSchemaModelWithFieldsObject): {
            idField: string;
            fields: DataSourceSchemaModelFields;
            new (data?: any): Model;
        };
        static define(options: DataSourceSchemaModelWithFieldsArray): {
            idField: string;
            fields: DataSourceSchemaModelFields;
            new (data?: any): Model;
        };
    }

    class Node extends Model {
        children: HierarchicalDataSource;

        append(model: any): void;
        level(): number;
        load(id: any): void;
        loaded(value: boolean): void;
        loaded(): boolean;
        parentNode(): Node;
    }

    class HierarchicalDataSource extends DataSource {
        constructor(options?: HierarchicalDataSourceOptions);
    }

    interface HierarchicalDataSourceOptions extends DataSourceOptions {
        schema?: HierarchicalDataSourceSchema;
    }


    interface HierarchicalDataSourceSchema extends DataSourceSchemaWithOptionsModel {
        model?: HierarchicalDataSourceSchemaModel;
    }

    interface HierarchicalDataSourceSchemaModel extends DataSourceSchemaModel {
        hasChildren?: any;
        children?: any;
    }

    interface DataSourceTransport {
        parameterMap?(data: DataSourceTransportParameterMapData, type: string): any;
    }

    interface DataSourceParameterMapDataAggregate {
        field?: string;
        aggregate?: string;
    }

    interface DataSourceParameterMapDataGroup {
        aggregate?: DataSourceParameterMapDataAggregate[];
        field?: string;
        dir?: string;
    }

    interface DataSourceParameterMapDataFilter {
        field?: string;
        filters?: DataSourceParameterMapDataFilter[];
        logic?: string;
        operator?: string;
        value?: any;
    }

    interface DataSourceParameterMapDataSort {
        field?: string;
        dir?: string;
    }

    interface DataSourceTransportParameterMapData {
        aggregate?: DataSourceParameterMapDataAggregate[];
        group?: DataSourceParameterMapDataGroup[];
        filter?: DataSourceParameterMapDataFilter;
        models?: Model[];
        page?: number;
        pageSize?: number;
        skip?: number;
        sort?: DataSourceParameterMapDataSort[];
        take?: number;
    }

    interface DataSourceSchema {
        model?: any;
    }

    interface DataSourceSchemaWithOptionsModel extends DataSourceSchema {
        model?: DataSourceSchemaModel;
    }

    interface DataSourceSchemaWithConstructorModel extends DataSourceSchema {
        model?: {
            idField: string;
            fields: DataSourceSchemaModelFields;
            new (data?: any): Model;
        };
    }

    interface DataSourceSchemaModel {
        id?: string;
        fields?: any;
    }

    interface DataSourceSchemaModelWithFieldsArray extends DataSourceSchemaModel {
        fields?: DataSourceSchemaModelField[];
    }

    interface DataSourceSchemaModelWithFieldsObject extends DataSourceSchemaModel {
        fields?: DataSourceSchemaModelFields;
    }

    interface DataSourceSchemaModelFields {
        [index: string]: DataSourceSchemaModelField;
    }

    interface DataSourceSchemaModelField {
        field?: string;
        defaultValue?: any;
        editable?: boolean;
        nullable?: boolean;
        parse?: Function;
        type?: string;
        validation?: DataSourceSchemaModelFieldValidation;
    }

    interface DataSourceSchemaModelFieldValidation {
        required?: boolean;
        min?: any;
        max?: any;
    }

    class ObservableArray extends Observable {
        constructor(array?: any[]);
        length: number;
        join(separator: string): string;
        parent(): ObservableObject;
        pop(): ObservableObject;
        push(...items: any[]): number;
        slice(begin: number, end?: number): any[];
        splice(start: number): any[];
        splice(start: number, deleteCount: number, ...items: any[]): any[];
        shift(): any;
        toJSON(): any[];
        unshift(...items: any[]): number;
    }

    class DataSource extends Observable{
        constructor(options?: DataSourceOptions);
        static create(options?: DataSourceOptions): DataSource;
        options: DataSourceOptions;
        add(model: Object): kendo.data.Model;
        add(model: kendo.data.Model): kendo.data.Model;
        aggregate(val: any): void;
        aggregate(): any;
        aggregates(): any;
        at(index: number): kendo.data.ObservableObject;
        cancelChanges(model?: kendo.data.Model): void;
        data(): kendo.data.ObservableArray;
        data(value: any): void;
        fetch(callback?: Function): void;
        filter(filters: DataSourceFilterItem): void;
        filter(filters: DataSourceFilterItem[]): void;
        filter(filters: DataSourceFilters): void;
        filter(): DataSourceFilters;
        get(id: any): kendo.data.Model;
        getByUid(uid: string): kendo.data.Model;
        group(groups: any): void;
        group(): any;
        hasChanges(): boolean;
        indexOf(value: kendo.data.ObservableObject): number;
        insert(index: number, model: kendo.data.Model): kendo.data.Model;
        insert(index: number, model: Object): kendo.data.Model;
        page(): number;
        page(page: number): void;
        pageSize(): number;
        pageSize(size: number): void;
        query(options?: any): void;
        read(data?: any): void;
        remove(model: kendo.data.Model): void;
        sort(sort: DataSourceSortItem): void;
        sort(sort: DataSourceSortItem[]): void;
        sort(): DataSourceSortItem[];
        sync(): void;
        total(): number;
        totalPages(): number;
        view(): kendo.data.ObservableArray;
    }

    interface DataSourceAggregateItem {
        field?: string;
        aggregate?: string;
    }

    interface DataSourceFilter {
    }

    interface DataSourceFilterItem extends DataSourceFilter {
        operator?: string;
        field?: string;
        value?: any;
    }

    interface DataSourceFilters extends DataSourceFilter {
        logic?: string;
        filters?: DataSourceFilter[];
    }

    interface DataSourceGroupItemAggregate {
        field?: string;
        aggregate?: string;
    }

    interface DataSourceGroupItem {
        field?: string;
        dir?: string;
        aggregates?: DataSourceGroupItemAggregate[];
    }

    interface DataSourceSchema {
        aggregates?: any;
        data?: any;
        errors?: any;
        groups?: any;
        parse?: Function;
        total?: any;
        type?: string;
    }

    interface DataSourceSortItem {
        field?: string;
        dir?: string;
    }

    interface DataSourceTransportCreate {
        cache?: boolean;
        contentType?: string;
        data?: any;
        dataType?: string;
        type?: string;
        url?: any;
    }

    interface DataSourceTransportDestroy {
        cache?: boolean;
        contentType?: string;
        data?: any;
        dataType?: string;
        type?: string;
        url?: any;
    }

    interface DataSourceTransportRead {
        cache?: boolean;
        contentType?: string;
        data?: any;
        dataType?: string;
        type?: string;
        url?: any;
    }

    interface DataSourceTransportUpdate {
        cache?: boolean;
        contentType?: string;
        data?: any;
        dataType?: string;
        type?: string;
        url?: any;
    }

    interface DataSourceTransport {
        create?: any;
        destroy?: any;
        read?: any;
        update?: any;
    }

    interface DataSourceTransportWithObjectOperations extends DataSourceTransport {
        create?: DataSourceTransportCreate;
        destroy?: DataSourceTransportDestroy;
        read?: DataSourceTransportRead;
        update?: DataSourceTransportUpdate;
    }

    interface DataSourceTransportWithFunctionOperations extends DataSourceTransport {
        create?: (options: DataSourceTransportOptions) => void;
        destroy?: (options: DataSourceTransportOptions) => void;
        read?: (options: DataSourceTransportReadOptions) => void;
        update?: (options: DataSourceTransportOptions) => void;
    }

    interface DataSourceTransportOptions {
        success: (data?: any) => void;
        error: (error?: any) => void;
        data: any;
    }

    interface DataSourceTransportReadOptionsData {
        sort?: DataSourceSortItem[];
        filter?: DataSourceFilters;
        take?: number;
        skip?: number;
    }

    interface DataSourceTransportReadOptions extends DataSourceTransportOptions {
        data: DataSourceTransportReadOptionsData;
    }

    interface DataSourceTransportBatchOptionsData {
        models: any[];
    }

    interface DataSourceTransportBatchOptions extends DataSourceTransportOptions {
        data: DataSourceTransportBatchOptionsData;
    }

    interface DataSourceOptions {
        aggregate?: DataSourceAggregateItem[];
        autoSync?: boolean;
        batch?: boolean;
        data?: any;
        filter?: any;
        group?: DataSourceGroupItem[];
        page?: number;
        pageSize?: number;
        schema?: DataSourceSchema;
        serverAggregates?: boolean;
        serverFiltering?: boolean;
        serverGrouping?: boolean;
        serverPaging?: boolean;
        serverSorting?: boolean;
        sort?: any;
        transport?: DataSourceTransport;
        type?: string;
        change? (e: DataSourceChangeEvent): void;
        error?(e: DataSourceErrorEvent): void;
        sync?(e: DataSourceEvent): void;
        requestStart?(e: DataSourceRequestStartEvent): void;
        requestEnd?(e: DataSourceRequestEndEvent): void;
    }

    interface DataSourceEvent {
        sender?: DataSource;
    }

    interface DataSourceChangeEvent extends DataSourceEvent {
        field?: string;
        value?: Model;
        action?: string;
        index?: number;
        items?: Model[];
    }

    interface DataSourceErrorEvent extends DataSourceEvent {
        xhr: JQueryXHR;
        status: string;
        errorThrown: any;
        errors?: any;
    }

    interface DataSourceRequestStartEvent extends DataSourceEvent {
    }

    interface DataSourceRequestEndEvent extends DataSourceEvent {
        response?: any;
        type?: string;
    }
}

declare module kendo.data.transports {
    var odata : DataSourceTransport;
}

declare module kendo.ui {
    function progress(container: JQuery, toggle: boolean);

    class Widget extends Observable {
        static fn: Widget;
        static extend(prototype: Object): Widget;

        constructor(element: Element, options?: any);
        constructor(element: JQuery, options?: any);

        init(element: Element, options: Object): void;
        init(selector: String, options: Object): void;
        init(object: JQuery, options: Object): void;
        destroy(): void;
    }

    function plugin(widget: kendo.ui.Widget, register?: Object, prefix?: String);

    class Draggable extends kendo.ui.Widget{
        element: JQuery;
        currentTarget: JQuery;
        constructor(element: Element, options?: DraggableOptions);
        options: DraggableOptions;
    }

    interface DraggableEvent extends JQueryEventObject {
        sender?: Draggable;
    }

    class DropTarget extends kendo.ui.Widget{
        element: JQuery;
        constructor(element: Element, options?: DropTargetOptions);
        options: DropTargetOptions;
        destroyGroup(): void;
    }

    interface DropTargetOptions {
        group?: string;
        dragenter?(e: DropTargetDragenterEvent): void;
        dragleave?(e: DropTargetDragleaveEvent): void;
        drop?(e: DropTargetDropEvent): void;
    }

    interface DropTargetEvent extends JQueryEventObject {
        sender?: DropTarget;
    }

    interface DropTargetDragenterEvent extends DropTargetEvent {
        draggable?: kendo.ui.Draggable;
    }

    interface DropTargetDragleaveEvent extends DropTargetEvent {
        draggable?: kendo.ui.Draggable;
    }

    interface DropTargetDropEvent extends DropTargetEvent {
        draggable?: kendo.ui.Draggable;
    }

    class DropTargetArea extends kendo.ui.Widget{
        element: JQuery;
        constructor(element: Element, options?: DropTargetAreaOptions);
        options: DropTargetAreaOptions;
    }

    interface DropTargetAreaOptions {
        group?: string;
        filter?: string;
        dragenter?(e: DropTargetAreaDragenterEvent): void;
        dragleave?(e: DropTargetAreaDragleaveEvent): void;
        drop?(e: DropTargetAreaDropEvent): void;
    }

    interface DropTargetAreaEvent extends JQueryEventObject {
        sender: DropTargetArea;
    }

    interface DropTargetAreaDragenterEvent extends DropTargetAreaEvent {
        draggable?: JQuery;
    }

    interface DropTargetAreaDragleaveEvent extends DropTargetAreaEvent {
        draggable?: JQuery;
    }

    interface DropTargetAreaDropEvent extends DropTargetAreaEvent {
        draggable?: kendo.ui.Draggable;
        dropTarget?: JQuery;
    }

    interface DraggableOptions {
        axis?: string;
        cursorOffset?: any;
        distance?: number;
        group?: string;
        hint?: Function;
        drag?(e: DraggableEvent): void;
        dragcancel?(e: DraggableEvent): void;
        dragend?(e: DraggableEvent): void;
        dragstart?(e: DraggableEvent): void;
    }

    interface GridColumnEditorOptions {
        field?: string;
        format?: string;
        model?: kendo.data.Model;
        values?: any[];
    }

    interface GridColumn {
        editor?(container: JQuery, options: GridColumnEditorOptions): void;
    }
}

declare module kendo.mobile {
    function init(selector: string): void;
    function init(element: JQuery): void;
    function init(element: Element): void;

    class Application extends Observable {
        constructor(element?: any, options?: ApplicationOptions);
        options: ApplicationOptions;
        hideLoading(): void;
        navigate(url: string, transition?: string): void;
        scroller(): kendo.mobile.ui.Scroller;
        showLoading(): void;
        view(): kendo.mobile.ui.View;
    }

    interface ApplicationOptions {
        hideAddressBar?: boolean;
        updateDocumentTitle?: boolean;
        initial?: string;
        layout?: string;
        loading?: string;
        platform?: string;
        serverNavigation?: boolean;
        transition?: string;
    }

    interface ApplicationEvent {
        sender: Application;
    }
}

declare module kendo.mobile.ui {

    class Widget extends kendo.ui.Widget {
    }

    interface TouchAxis {
        location?: number;
        startLocation?: number;
        client?: number;
        delta?: number;
        velocity?: number;
    }

    interface TouchEventOptions {
        target?: JQuery;
        x?: TouchAxis;
        y?: TouchAxis;
    }

    interface Point {
        x?: number;
        y?: number;
    }
}

declare module kendo.mobile.ui {
    class ActionSheet extends kendo.mobile.ui.Widget {
        static fn: ActionSheet;
        static extend(proto: Object): ActionSheet;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: ActionSheetOptions);
        options: ActionSheetOptions;
        close(): void;
        destroy(): void;
        open(target: JQuery, context: any): void;
    }

    interface ActionSheetPopup {
        direction?: any;
        height?: any;
        width?: any;
    }

    interface ActionSheetOptions {
        name?: string;
        cancel?: string;
        popup?: ActionSheetPopup;
        open? (e: ActionSheetOpenEvent): void;
    }

    interface ActionSheetEvent {
        sender: ActionSheet;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface ActionSheetOpenEvent extends ActionSheetEvent {
        target?: JQuery;
        context?: JQuery;
    }


    class BackButton extends kendo.mobile.ui.Widget {
        static fn: BackButton;
        static extend(proto: Object): BackButton;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: BackButtonOptions);
        options: BackButtonOptions;
        destroy(): void;
    }

    interface BackButtonOptions {
        name?: string;
        click? (e: BackButtonClickEvent): void;
    }

    interface BackButtonEvent {
        sender: BackButton;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface BackButtonClickEvent extends BackButtonEvent {
        target?: JQuery;
        button?: JQuery;
    }


    class Button extends kendo.mobile.ui.Widget {
        static fn: Button;
        static extend(proto: Object): Button;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: ButtonOptions);
        options: ButtonOptions;
        badge(value: any): string;
        destroy(): void;
    }

    interface ButtonOptions {
        name?: string;
        badge?: string;
        icon?: string;
        click? (e: ButtonClickEvent): void;
    }

    interface ButtonEvent {
        sender: Button;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface ButtonClickEvent extends ButtonEvent {
        target?: JQuery;
        button?: JQuery;
    }


    class ButtonGroup extends kendo.mobile.ui.Widget {
        static fn: ButtonGroup;
        static extend(proto: Object): ButtonGroup;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: ButtonGroupOptions);
        options: ButtonGroupOptions;
        badge(button: any, value: any): string;
        current(): JQuery;
        destroy(): void;
        select(li: any): void;
    }

    interface ButtonGroupOptions {
        name?: string;
        index?: number;
        selectOn?: string;
        select? (e: ButtonGroupEvent): void;
    }

    interface ButtonGroupEvent {
        sender: ButtonGroup;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }


    class DetailButton extends kendo.mobile.ui.Widget {
        static fn: DetailButton;
        static extend(proto: Object): DetailButton;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: DetailButtonOptions);
        options: DetailButtonOptions;
        destroy(): void;
    }

    interface DetailButtonOptions {
        name?: string;
        click? (e: DetailButtonClickEvent): void;
    }

    interface DetailButtonEvent {
        sender: DetailButton;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface DetailButtonClickEvent extends DetailButtonEvent {
        target?: JQuery;
        button?: JQuery;
    }


    class Layout extends kendo.mobile.ui.Widget {
        static fn: Layout;
        static extend(proto: Object): Layout;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: LayoutOptions);
        options: LayoutOptions;
    }

    interface LayoutOptions {
        name?: string;
        id?: string;
        platform?: string;
        hide? (e: LayoutHideEvent): void;
        init? (e: LayoutInitEvent): void;
        show? (e: LayoutShowEvent): void;
    }

    interface LayoutEvent {
        sender: Layout;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface LayoutHideEvent extends LayoutEvent {
        layout?: JQuery;
        view?: JQuery;
    }

    interface LayoutInitEvent extends LayoutEvent {
        layout?: JQuery;
    }

    interface LayoutShowEvent extends LayoutEvent {
        layout?: JQuery;
        view?: JQuery;
    }


    class ListView extends kendo.mobile.ui.Widget {
        static fn: ListView;
        static extend(proto: Object): ListView;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: ListViewOptions);
        options: ListViewOptions;
        dataSource: kendo.data.DataSource;
        destroy(): void;
        items(): JQuery;
        refresh(): void;
        setDataSource(dataSource: kendo.data.DataSource): void;
        stopEndlessScrolling(): void;
        stopLoadMore(): void;
    }

    interface ListViewFilterable {
        placeholder?: string;
        autoFilter?: boolean;
        field?: string;
        ignoreCase?: boolean;
        operator?: string;
    }

    interface ListViewOptions {
        name?: string;
        appendOnRefresh?: boolean;
        autoBind?: boolean;
        dataSource?: any;
        endlessScroll?: boolean;
        endlessScrollParameters?: Function;
        fixedHeaders?: boolean;
        headerTemplate?: any;
        loadMore?: boolean;
        loadMoreText?: string;
        loadMoreParameters?: Function;
        pullTemplate?: any;
        pullToRefresh?: boolean;
        pullParameters?: Function;
        refreshTemplate?: any;
        releaseTemplate?: any;
        scrollThreshold?: string;
        style?: string;
        template?: any;
        type?: string;
        filterable?: ListViewFilterable;
        click? (e: ListViewClickEvent): void;
        dataBound? (e: ListViewEvent): void;
        dataBinding? (e: ListViewEvent): void;
        lastPageReached? (e: ListViewEvent): void;
    }

    interface ListViewEvent {
        sender: ListView;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface ListViewClickEvent extends ListViewEvent {
        item?: JQuery;
        target?: JQuery;
        dataItem?: any;
        button?: kendo.mobile.ui.Button;
    }


    class Loader extends kendo.mobile.ui.Widget {
        static fn: Loader;
        static extend(proto: Object): Loader;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: LoaderOptions);
        options: LoaderOptions;
        hide(): void;
        show(): void;
    }

    interface LoaderOptions {
        name?: string;
    }

    interface LoaderEvent {
        sender: Loader;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }


    class ModalView extends kendo.mobile.ui.Widget {
        static fn: ModalView;
        static extend(proto: Object): ModalView;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: ModalViewOptions);
        options: ModalViewOptions;
        close(): void;
        destroy(): void;
        open(target: JQuery): void;
    }

    interface ModalViewOptions {
        name?: string;
        height?: number;
        modal?: boolean;
        width?: number;
        close? (e: ModalViewCloseEvent): void;
        init? (e: ModalViewInitEvent): void;
        open? (e: ModalViewOpenEvent): void;
    }

    interface ModalViewEvent {
        sender: ModalView;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface ModalViewCloseEvent extends ModalViewEvent {
    }

    interface ModalViewInitEvent extends ModalViewEvent {
    }

    interface ModalViewOpenEvent extends ModalViewEvent {
        target?: JQuery;
    }


    class NavBar extends kendo.mobile.ui.Widget {
        static fn: NavBar;
        static extend(proto: Object): NavBar;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: NavBarOptions);
        options: NavBarOptions;
        destroy(): void;
        title(value: string): void;
    }

    interface NavBarOptions {
        name?: string;
    }

    interface NavBarEvent {
        sender: NavBar;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }


    class Pane extends kendo.mobile.ui.Widget {
        static fn: Pane;
        static extend(proto: Object): Pane;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: PaneOptions);
        options: PaneOptions;
        destroy(): void;
        hideLoading(): void;
        navigate(url: string, transition: string): void;
        showLoading(): void;
        view(): kendo.mobile.ui.View;
    }

    interface PaneOptions {
        name?: string;
        initial?: string;
        layout?: string;
        loading?: string;
        transition?: string;
        navigate? (e: PaneNavigateEvent): void;
        viewShow? (e: PaneViewShowEvent): void;
    }

    interface PaneEvent {
        sender: Pane;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface PaneNavigateEvent extends PaneEvent {
        url?: JQuery;
    }

    interface PaneViewShowEvent extends PaneEvent {
        view?: kendo.mobile.ui.View;
    }


    class PopOver extends kendo.mobile.ui.Widget {
        static fn: PopOver;
        static extend(proto: Object): PopOver;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: PopOverOptions);
        options: PopOverOptions;
        close(): void;
        destroy(): void;
        open(target: JQuery): void;
    }

    interface PopOverPane {
        initial?: string;
        layout?: string;
        loading?: string;
        transition?: string;
    }

    interface PopOverPopup {
        height?: any;
        width?: any;
    }

    interface PopOverOptions {
        name?: string;
        pane?: PopOverPane;
        popup?: PopOverPopup;
        close? (e: PopOverEvent): void;
        open? (e: PopOverOpenEvent): void;
    }

    interface PopOverEvent {
        sender: PopOver;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface PopOverOpenEvent extends PopOverEvent {
        target?: JQuery;
    }


    class ScrollView extends kendo.mobile.ui.Widget {
        static fn: ScrollView;
        static extend(proto: Object): ScrollView;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: ScrollViewOptions);
        options: ScrollViewOptions;
        content(content: any): void;
        destroy(): void;
        refresh(): void;
        scrollTo(page: number, instant: boolean): void;
    }

    interface ScrollViewOptions {
        name?: string;
        bounceVelocityThreshold?: number;
        duration?: number;
        page?: number;
        pageSize?: number;
        velocityThreshold?: number;
        changing? (e: ScrollViewChangingEvent): void;
        change? (e: ScrollViewChangeEvent): void;
    }

    interface ScrollViewEvent {
        sender: ScrollView;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface ScrollViewChangingEvent extends ScrollViewEvent {
        currentPage?: number;
        nextPage?: number;
    }

    interface ScrollViewChangeEvent extends ScrollViewEvent {
        page?: number;
    }


    class Scroller extends kendo.mobile.ui.Widget {
        static fn: Scroller;
        static extend(proto: Object): Scroller;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: ScrollerOptions);
        options: ScrollerOptions;
        destroy(): void;
        pullHandled(): void;
        reset(): void;
        scrollHeight(): void;
        scrollTo(x: number, y: number): void;
        scrollWidth(): void;
    }

    interface ScrollerOptions {
        name?: string;
        zoom?: boolean;
        elastic?: boolean;
        pullOffset?: number;
        pullTemplate?: string;
        pullToRefresh?: boolean;
        refreshTemplate?: string;
        releaseTemplate?: string;
        useNative?: boolean;
        pull? (e: ScrollerEvent): void;
        resize? (e: ScrollerEvent): void;
        scroll? (e: ScrollerScrollEvent): void;
    }

    interface ScrollerEvent {
        sender: Scroller;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface ScrollerScrollEvent extends ScrollerEvent {
        scrollTop?: number;
        scrollLeft?: number;
    }


    class SplitView extends kendo.mobile.ui.Widget {
        static fn: SplitView;
        static extend(proto: Object): SplitView;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: SplitViewOptions);
        options: SplitViewOptions;
        destroy(): void;
    }

    interface SplitViewOptions {
        name?: string;
        style?: string;
        init? (e: SplitViewInitEvent): void;
        show? (e: SplitViewShowEvent): void;
    }

    interface SplitViewEvent {
        sender: SplitView;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface SplitViewInitEvent extends SplitViewEvent {
        view?: JQuery;
    }

    interface SplitViewShowEvent extends SplitViewEvent {
        view?: JQuery;
    }


    class Switch extends kendo.mobile.ui.Widget {
        static fn: Switch;
        static extend(proto: Object): Switch;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: SwitchOptions);
        options: SwitchOptions;
        check(): boolean;
        check(check: boolean): void;
        destroy(): void;
        toggle(): void;
    }

    interface SwitchOptions {
        name?: string;
        checked?: boolean;
        offLabel?: string;
        onLabel?: string;
        change? (e: SwitchChangeEvent): void;
    }

    interface SwitchEvent {
        sender: Switch;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface SwitchChangeEvent extends SwitchEvent {
        checked?: any;
    }


    class TabStrip extends kendo.mobile.ui.Widget {
        static fn: TabStrip;
        static extend(proto: Object): TabStrip;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: TabStripOptions);
        options: TabStripOptions;
        badge(tab: any, value: any): string;
        currentItem(): JQuery;
        destroy(): void;
        switchTo(url: string): void;
        clear(): void;
    }

    interface TabStripOptions {
        name?: string;
        selectedIndex?: number;
        select? (e: TabStripSelectEvent): void;
    }

    interface TabStripEvent {
        sender: TabStrip;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface TabStripSelectEvent extends TabStripEvent {
        item?: JQuery;
    }


    class View extends kendo.mobile.ui.Widget {
        static fn: View;
        static extend(proto: Object): View;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: ViewOptions);
        options: ViewOptions;
        destroy(): void;
        contentElement(): void;
    }

    interface ViewOptions {
        name?: string;
        model?: string;
        reload?: boolean;
        stretch?: boolean;
        title?: string;
        useNativeScrolling?: boolean;
        zoom?: boolean;
        afterShow? (e: ViewAfterShowEvent): void;
        beforeShow? (e: ViewBeforeShowEvent): void;
        hide? (e: ViewHideEvent): void;
        init? (e: ViewInitEvent): void;
        show? (e: ViewShowEvent): void;
    }

    interface ViewEvent {
        sender: View;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface ViewAfterShowEvent extends ViewEvent {
        view?: kendo.mobile.ui.View;
    }

    interface ViewBeforeShowEvent extends ViewEvent {
        view?: kendo.mobile.ui.View;
    }

    interface ViewHideEvent extends ViewEvent {
        view?: kendo.mobile.ui.View;
    }

    interface ViewInitEvent extends ViewEvent {
        view?: kendo.mobile.ui.View;
    }

    interface ViewShowEvent extends ViewEvent {
        view?: kendo.mobile.ui.View;
    }


}

declare module kendo.dataviz.ui {
    function registerTheme(name: string, options: any);
}

declare module kendo.ui {
    class AutoComplete extends kendo.ui.Widget {
        static fn: AutoComplete;
        static extend(proto: Object): AutoComplete;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: AutoCompleteOptions);
        options: AutoCompleteOptions;
        dataSource: kendo.data.DataSource;
        close(): void;
        dataItem(index?: number): any;
        destroy(): void;
        enable(enable: boolean): void;
        readonly(readonly: boolean): void;
        focus(): void;
        refresh(): void;
        search(word: string): void;
        select(item: any): void;
        setDataSource(dataSource: kendo.data.DataSource): void;
        suggest(value: string): void;
        value(): string;
        value(value: string): void;
    }

    interface AutoCompleteAnimationClose {
        effects?: string;
        duration?: number;
    }

    interface AutoCompleteAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface AutoCompleteAnimation {
        close?: AutoCompleteAnimationClose;
        open?: AutoCompleteAnimationOpen;
    }

    interface AutoCompleteOptions {
        name?: string;
        animation?: AutoCompleteAnimation;
        dataSource?: any;
        dataTextField?: string;
        delay?: number;
        enable?: boolean;
        filter?: string;
        height?: number;
        highlightFirst?: boolean;
        ignoreCase?: boolean;
        minLength?: number;
        placeholder?: string;
        separator?: string;
        suggest?: boolean;
        template?: any;
        change?(e: AutoCompleteChangeEvent): void;
        close?(e: AutoCompleteCloseEvent): void;
        dataBound?(e: AutoCompleteDataBoundEvent): void;
        open?(e: AutoCompleteOpenEvent): void;
        select?(e: AutoCompleteSelectEvent): void;
    }

    interface AutoCompleteEvent {
        sender: AutoComplete;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface AutoCompleteChangeEvent extends AutoCompleteEvent {
    }

    interface AutoCompleteCloseEvent extends AutoCompleteEvent {
    }

    interface AutoCompleteDataBoundEvent extends AutoCompleteEvent {
    }

    interface AutoCompleteOpenEvent extends AutoCompleteEvent {
    }

    interface AutoCompleteSelectEvent extends AutoCompleteEvent {
        item?: JQuery;
    }


    class Calendar extends kendo.ui.Widget {
        static fn: Calendar;
        static extend(proto: Object): Calendar;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: CalendarOptions);
        options: CalendarOptions;
        destroy(): void;
        max(): Date;
        max(value: any): void;
        min(): Date;
        min(value: any): void;
        navigate(value: Date, view: string): void;
        navigateDown(value: Date): void;
        navigateToFuture(): void;
        navigateToPast(): void;
        navigateUp(): void;
        value(): Date;
        value(value: any): void;
        current(): Date;
        view(): any;
    }

    interface CalendarMonth {
        content?: string;
        empty?: string;
    }

    interface CalendarOptions {
        name?: string;
        culture?: string;
        dates?: any;
        depth?: string;
        footer?: string;
        format?: string;
        max?: Date;
        min?: Date;
        month?: CalendarMonth;
        start?: string;
        value?: Date;
        change?(e: CalendarEvent): void;
        navigate?(e: CalendarEvent): void;
    }

    interface CalendarEvent {
        sender: Calendar;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }


    class ColorPalette extends kendo.ui.Widget {
        static fn: ColorPalette;
        static extend(proto: Object): ColorPalette;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: ColorPaletteOptions);
        options: ColorPaletteOptions;
        value(): string;
        value(color: string): void;
        color(): void;
        enable(): void;
    }

    interface ColorPaletteTileSize {
        width?: number;
        height?: number;
    }

    interface ColorPaletteOptions {
        name?: string;
        palette?: any;
        columns?: number;
        tileSize?: ColorPaletteTileSize;
        value?: string;
        change?(e: ColorPaletteEvent): void;
    }

    interface ColorPaletteEvent {
        sender: ColorPalette;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }


    class ColorPicker extends kendo.ui.Widget {
        static fn: ColorPicker;
        static extend(proto: Object): ColorPicker;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: ColorPickerOptions);
        options: ColorPickerOptions;
        close(): void;
        open(): void;
        toggle(): void;
        value(): string;
        value(color: string): void;
        color(): void;
        enable(color: string): void;
    }

    interface ColorPickerTileSize {
        width?: number;
        height?: number;
    }

    interface ColorPickerOptions {
        name?: string;
        buttons?: boolean;
        columns?: number;
        tileSize?: ColorPickerTileSize;
        messages?: any;
        palette?: any;
        opacity?: boolean;
        preview?: boolean;
        toolIcon?: string;
        value?: string;
        change?(e: ColorPickerEvent): void;
        select?(e: ColorPickerEvent): void;
        open?(e: ColorPickerEvent): void;
        close?(e: ColorPickerEvent): void;
    }

    interface ColorPickerEvent {
        sender: ColorPicker;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }


    class ComboBox extends kendo.ui.Widget {
        static fn: ComboBox;
        static extend(proto: Object): ComboBox;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: ComboBoxOptions);
        options: ComboBoxOptions;
        dataSource: kendo.data.DataSource;
        close(): void;
        dataItem(index?: number): any;
        destroy(): void;
        enable(enable: boolean): void;
        readonly(readonly: boolean): void;
        focus(): void;
        open(): void;
        refresh(): void;
        search(word: string): void;
        select(li: any): number;
        setDataSource(dataSource: kendo.data.DataSource): void;
        suggest(value: string): void;
        text(): string;
        text(text: string): void;
        toggle(toggle: boolean): void;
        value(): string;
        value(value: string): void;
    }

    interface ComboBoxAnimationClose {
        effects?: string;
        duration?: number;
    }

    interface ComboBoxAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface ComboBoxAnimation {
        close?: ComboBoxAnimationClose;
        open?: ComboBoxAnimationOpen;
    }

    interface ComboBoxOptions {
        name?: string;
        animation?: ComboBoxAnimation;
        autoBind?: boolean;
        cascadeFrom?: string;
        dataSource?: any;
        dataTextField?: string;
        dataValueField?: string;
        delay?: number;
        enable?: boolean;
        filter?: string;
        height?: number;
        highlightFirst?: boolean;
        ignoreCase?: string;
        index?: number;
        minLength?: number;
        placeholder?: string;
        suggest?: boolean;
        template?: string;
        text?: string;
        value?: string;
        change?(e: ComboBoxEvent): void;
        close?(e: ComboBoxEvent): void;
        dataBound?(e: ComboBoxEvent): void;
        open?(e: ComboBoxEvent): void;
        select?(e: ComboBoxSelectEvent): void;
        cascade?(e: ComboBoxEvent): void;
    }

    interface ComboBoxEvent {
        sender: ComboBox;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface ComboBoxSelectEvent extends ComboBoxEvent {
        item?: JQuery;
    }


    class DatePicker extends kendo.ui.Widget {
        static fn: DatePicker;
        static extend(proto: Object): DatePicker;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: DatePickerOptions);
        options: DatePickerOptions;
        close(): void;
        destroy(): void;
        enable(enable: boolean): void;
        readonly(readonly: boolean): void;
        max(): Date;
        max(value: any): void;
        min(): Date;
        min(value: any): void;
        open(): void;
        value(): Date;
        value(value: any): void;
    }

    interface DatePickerAnimationClose {
        effects?: string;
        duration?: number;
    }

    interface DatePickerAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface DatePickerAnimation {
        close?: DatePickerAnimationClose;
        open?: DatePickerAnimationOpen;
    }

    interface DatePickerMonth {
        content?: string;
        empty?: string;
    }

    interface DatePickerOptions {
        name?: string;
        animation?: DatePickerAnimation;
        ARIATemplate?: string;
        culture?: string;
        dates?: any;
        depth?: string;
        footer?: string;
        format?: string;
        max?: Date;
        min?: Date;
        month?: DatePickerMonth;
        parseFormats?: any;
        start?: string;
        value?: Date;
        change?(e: DatePickerEvent): void;
        close?(e: DatePickerEvent): void;
        open?(e: DatePickerEvent): void;
    }

    interface DatePickerEvent {
        sender: DatePicker;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }


    class DateTimePicker extends kendo.ui.Widget {
        static fn: DateTimePicker;
        static extend(proto: Object): DateTimePicker;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: DateTimePickerOptions);
        options: DateTimePickerOptions;
        close(view: string): void;
        destroy(): void;
        enable(enable: boolean): void;
        readonly(readonly: boolean): void;
        max(): Date;
        max(value: any): void;
        min(): Date;
        min(value: any): void;
        open(view: string): void;
        toggle(view: string): void;
        value(): Date;
        value(value: any): void;
    }

    interface DateTimePickerAnimationClose {
        effects?: string;
        duration?: number;
    }

    interface DateTimePickerAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface DateTimePickerAnimation {
        close?: DateTimePickerAnimationClose;
        open?: DateTimePickerAnimationOpen;
    }

    interface DateTimePickerMonth {
        content?: string;
        empty?: string;
    }

    interface DateTimePickerOptions {
        name?: string;
        animation?: DateTimePickerAnimation;
        ARIATemplate?: string;
        culture?: string;
        dates?: any;
        depth?: string;
        footer?: string;
        format?: string;
        interval?: number;
        max?: Date;
        min?: Date;
        month?: DateTimePickerMonth;
        parseFormats?: any;
        start?: string;
        timeFormat?: string;
        value?: Date;
        change?(e: DateTimePickerEvent): void;
        close?(e: DateTimePickerCloseEvent): void;
        open?(e: DateTimePickerOpenEvent): void;
    }

    interface DateTimePickerEvent {
        sender: DateTimePicker;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface DateTimePickerCloseEvent extends DateTimePickerEvent {
        view?: string;
    }

    interface DateTimePickerOpenEvent extends DateTimePickerEvent {
        view?: string;
    }


    class DropDownList extends kendo.ui.Widget {
        static fn: DropDownList;
        static extend(proto: Object): DropDownList;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: DropDownListOptions);
        options: DropDownListOptions;
        dataSource: kendo.data.DataSource;
        close(): void;
        dataItem(index?: number): any;
        destroy(): void;
        enable(enable: boolean): void;
        readonly(readonly: boolean): void;
        focus(): void;
        open(): void;
        refresh(): void;
        search(word: string): void;
        select(li: any): number;
        setDataSource(dataSource: kendo.data.DataSource): void;
        text(): string;
        text(text: string): void;
        toggle(toggle: boolean): void;
        value(): string;
        value(value: string): void;
    }

    interface DropDownListAnimationClose {
        effects?: string;
        duration?: number;
    }

    interface DropDownListAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface DropDownListAnimation {
        close?: DropDownListAnimationClose;
        open?: DropDownListAnimationOpen;
    }

    interface DropDownListOptions {
        name?: string;
        animation?: DropDownListAnimation;
        autoBind?: boolean;
        cascadeFrom?: string;
        dataSource?: any;
        dataTextField?: string;
        dataValueField?: string;
        delay?: number;
        enable?: boolean;
        height?: number;
        ignoreCase?: string;
        index?: number;
        optionLabel?: any;
        template?: string;
        text?: string;
        value?: string;
        change?(e: DropDownListEvent): void;
        close?(e: DropDownListEvent): void;
        dataBound?(e: DropDownListEvent): void;
        open?(e: DropDownListEvent): void;
        select?(e: DropDownListSelectEvent): void;
        cascade?(e: DropDownListEvent): void;
    }

    interface DropDownListEvent {
        sender: DropDownList;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface DropDownListSelectEvent extends DropDownListEvent {
        item?: JQuery;
    }


    class Editor extends kendo.ui.Widget {
        static fn: Editor;
        static extend(proto: Object): Editor;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: EditorOptions);
        options: EditorOptions;
        createRange(document?: Document): Range;
        destroy(): void;
        encodedValue(): void;
        exec(name: string, params: EditorExecParams): void;
        focus(): void;
        getRange(): Range;
        getSelection(): Selection;
        paste(html: string): void;
        selectedHtml(): string;
        refresh(): void;
        selectRange(range: Range): void;
        update(): void;
        value(): string;
        value(value: string): void;
    }

    interface EditorImageBrowserMessages {
        uploadFile?: string;
        orderBy?: string;
        orderByName?: string;
        orderBySize?: string;
        directoryNotFound?: string;
        emptyFolder?: string;
        deleteFile?: string;
        invalidFileType?: string;
        overwriteFile?: string;
        search?: string;
    }

    interface EditorImageBrowserSchemaModelFieldsName {
        field?: string;
        parse?: Function;
    }

    interface EditorImageBrowserSchemaModelFieldsSize {
        field?: string;
        parse?: Function;
    }

    interface EditorImageBrowserSchemaModelFieldsType {
        parse?: Function;
        field?: string;
    }

    interface EditorImageBrowserSchemaModelFields {
        name?: EditorImageBrowserSchemaModelFieldsName;
        type?: EditorImageBrowserSchemaModelFieldsType;
        size?: EditorImageBrowserSchemaModelFieldsSize;
    }

    interface EditorImageBrowserSchemaModel {
        id?: string;
        fields?: EditorImageBrowserSchemaModelFields;
    }

    interface EditorImageBrowserSchema {
    }

    interface EditorImageBrowserTransportCreate {
        contentType?: string;
        data?: any;
        dataType?: string;
        type?: string;
        url?: any;
    }

    interface EditorImageBrowserTransportDestroy {
        contentType?: string;
        data?: any;
        dataType?: string;
        type?: string;
        url?: any;
    }

    interface EditorImageBrowserTransportRead {
        contentType?: string;
        data?: any;
        dataType?: string;
        type?: string;
        url?: any;
    }

    interface EditorImageBrowserTransport {
        read?: EditorImageBrowserTransportRead;
        thumbnailUrl?: any;
        uploadUrl?: string;
        imageUrl?: any;
        destroy?: EditorImageBrowserTransportDestroy;
        create?: EditorImageBrowserTransportCreate;
    }

    interface EditorImageBrowser {
        fileTypes?: string;
        path?: string;
        transport?: EditorImageBrowserTransport;
        schema?: EditorImageBrowserSchema;
        messages?: EditorImageBrowserMessages;
    }

    interface EditorToolItem {
        text?: string;
        value?: string;
    }

    interface EditorTool {
        name?: string;
        tooltip?: string;
        exec?: Function;
        items?: EditorToolItem[];
        template?: string;
    }

    interface EditorExecParams {
        value?: any;
    }

    interface EditorOptions {
        name?: string;
        encoded?: boolean;
        messages?: any;
        stylesheets?: any;
        tools?: EditorTool[];
        imageBrowser?: EditorImageBrowser;
        change?(e: EditorEvent): void;
        execute?(e: EditorExecuteEvent): void;
        keydown?(e: EditorEvent): void;
        keyup?(e: EditorEvent): void;
        paste?(e: EditorPasteEvent): void;
        select?(e: EditorEvent): void;
    }

    interface EditorEvent {
        sender: Editor;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface EditorExecuteEvent extends EditorEvent {
        name?: string;
        command?: any;
    }

    interface EditorPasteEvent extends EditorEvent {
        html?: any;
    }


    class FlatColorPicker extends kendo.ui.Widget {
        static fn: FlatColorPicker;
        static extend(proto: Object): FlatColorPicker;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: FlatColorPickerOptions);
        options: FlatColorPickerOptions;
        focus(): void;
        value(): string;
        value(color: string): void;
        color(): void;
        enable(): void;
    }

    interface FlatColorPickerOptions {
        name?: string;
        opacity?: boolean;
        buttons?: boolean;
        value?: string;
        preview?: boolean;
        messages?: any;
        change?(e: FlatColorPickerChangeEvent): void;
    }

    interface FlatColorPickerEvent {
        sender: FlatColorPicker;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface FlatColorPickerChangeEvent extends FlatColorPickerEvent {
        value?: string;
    }


    class Grid extends kendo.ui.Widget {
        static fn: Grid;
        static extend(proto: Object): Grid;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: GridOptions);
        options: GridOptions;
        dataSource: kendo.data.DataSource;
        addRow(): void;
        cancelChanges(): void;
        cancelRow(): void;
        cellIndex(cell: any): number;
        clearSelection(): void;
        closeCell(): void;
        collapseGroup(row: any): void;
        collapseRow(row: any): void;
        dataItem(row: any): kendo.data.ObservableObject;
        destroy(): void;
        editCell(cell: JQuery): void;
        editRow(row: JQuery): void;
        expandGroup(row: any): void;
        expandRow(row: any): void;
        hideColumn(column: any): void;
        refresh(): void;
        removeRow(row: any): void;
        reorderColumn(destIndex: number, column: any): void;
        saveChanges(): void;
        saveRow(): void;
        select(): JQuery;
        select(rows: any): void;
        setDataSource(dataSource: kendo.data.DataSource): void;
        showColumn(column: any): void;
    }

    interface GridColumnMenuMessages {
        columns?: string;
        filter?: string;
        sortAscending?: string;
        sortDescending?: string;
    }

    interface GridColumnMenu {
        columns?: boolean;
        filterable?: boolean;
        sortable?: boolean;
        messages?: GridColumnMenuMessages;
    }

    interface GridColumnCommandItem {
        name?: string;
        text?: string;
        className?: string;
        click?: Function;
    }

    interface GridColumnFilterable {
        ui?: any;
    }

    interface GridColumn {
        aggregates?: any;
        attributes?: any;
        command?: GridColumnCommandItem[];
        encoded?: boolean;
        field?: string;
        filterable?: GridColumnFilterable;
        footerTemplate?: any;
        format?: string;
        groupHeaderTemplate?: any;
        groupFooterTemplate?: any;
        headerAttributes?: any;
        headerTemplate?: any;
        hidden?: boolean;
        sortable?: boolean;
        template?: any;
        title?: string;
        width?: any;
        values?: any;
        menu?: boolean;
    }

    interface GridEditable {
        confirmation?: any;
        createAt?: string;
        destroy?: boolean;
        mode?: string;
        template?: any;
        update?: boolean;
    }

    interface GridFilterableMessages {
        and?: string;
        clear?: string;
        filter?: string;
        info?: string;
        isFalse?: string;
        isTrue?: string;
        or?: string;
        selectValue?: string;
    }

    interface GridFilterableOperatorsDate {
        eq?: string;
        neq?: string;
        gte?: string;
        gt?: string;
        lte?: string;
        lt?: string;
    }

    interface GridFilterableOperatorsEnums {
        eq?: string;
        neq?: string;
    }

    interface GridFilterableOperatorsNumber {
        eq?: string;
        neq?: string;
        gte?: string;
        gt?: string;
        lte?: string;
        lt?: string;
    }

    interface GridFilterableOperatorsString {
        eq?: string;
        neq?: string;
        startswith?: string;
        contains?: string;
        doesnotcontain?: string;
        endswith?: string;
    }

    interface GridFilterableOperators {
        string?: GridFilterableOperatorsString;
        number?: GridFilterableOperatorsNumber;
        date?: GridFilterableOperatorsDate;
        enums?: GridFilterableOperatorsEnums;
    }

    interface GridFilterable {
        extra?: boolean;
        messages?: GridFilterableMessages;
        operators?: GridFilterableOperators;
    }

    interface GridGroupableMessages {
        empty?: string;
    }

    interface GridGroupable {
        messages?: GridGroupableMessages;
    }

    interface GridPageableMessages {
        display?: string;
        empty?: string;
        page?: string;
        of?: string;
        itemsPerPage?: string;
        first?: string;
        last?: string;
        next?: string;
        previous?: string;
        refresh?: string;
    }

    interface GridPageable {
        pageSize?: number;
        previousNext?: boolean;
        numeric?: boolean;
        buttonCount?: number;
        input?: boolean;
        pageSizes?: any;
        refresh?: boolean;
        info?: boolean;
        messages?: GridPageableMessages;
    }

    interface GridScrollable {
        virtual?: boolean;
    }

    interface GridSortable {
        allowUnsort?: boolean;
        mode?: string;
    }

    interface GridToolbarItem {
        name?: string;
        template?: any;
        text?: string;
    }

    interface GridOptions {
        name?: string;
        altRowTemplate?: any;
        autoBind?: boolean;
        columns?: GridColumn[];
        columnMenu?: GridColumnMenu;
        dataSource?: any;
        detailTemplate?: any;
        editable?: GridEditable;
        filterable?: GridFilterable;
        groupable?: GridGroupable;
        height?: any;
        navigatable?: boolean;
        pageable?: GridPageable;
        reorderable?: boolean;
        resizable?: boolean;
        rowTemplate?: any;
        scrollable?: GridScrollable;
        selectable?: any;
        sortable?: GridSortable;
        toolbar?: GridToolbarItem[];
        cancel?(e: GridCancelEvent): void;
        change?(e: GridChangeEvent): void;
        columnHide?(e: GridColumnHideEvent): void;
        columnMenuInit?(e: GridColumnMenuInitEvent): void;
        columnReorder?(e: GridColumnReorderEvent): void;
        columnResize?(e: GridColumnResizeEvent): void;
        columnShow?(e: GridColumnShowEvent): void;
        dataBinding?(e: GridDataBindingEvent): void;
        dataBound?(e: GridDataBoundEvent): void;
        detailCollapse?(e: GridDetailCollapseEvent): void;
        detailExpand?(e: GridDetailExpandEvent): void;
        detailInit?(e: GridDetailInitEvent): void;
        edit?(e: GridEditEvent): void;
        filterMenuInit?(e: GridFilterMenuInitEvent): void;
        remove?(e: GridRemoveEvent): void;
        save?(e: GridSaveEvent): void;
        saveChanges?(e: GridSaveChangesEvent): void;
    }

    interface GridEvent {
        sender: Grid;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface GridCancelEvent extends GridEvent {
        container?: JQuery;
        model?: kendo.data.Model;
        preventDefault?: Function;
    }

    interface GridChangeEvent extends GridEvent {
    }

    interface GridColumnHideEvent extends GridEvent {
        column?: any;
    }

    interface GridColumnMenuInitEvent extends GridEvent {
        container?: JQuery;
        field?: string;
    }

    interface GridColumnReorderEvent extends GridEvent {
        column?: any;
        newIndex?: number;
        oldIndex?: number;
    }

    interface GridColumnResizeEvent extends GridEvent {
        column?: any;
        newWidth?: number;
        oldWidth?: number;
    }

    interface GridColumnShowEvent extends GridEvent {
        column?: any;
    }

    interface GridDataBindingEvent extends GridEvent {
    }

    interface GridDataBoundEvent extends GridEvent {
    }

    interface GridDetailCollapseEvent extends GridEvent {
        detailRow?: JQuery;
        masterRow?: JQuery;
    }

    interface GridDetailExpandEvent extends GridEvent {
        detailRow?: JQuery;
        masterRow?: JQuery;
    }

    interface GridDetailInitEvent extends GridEvent {
        data?: kendo.data.ObservableObject;
        detailCell?: JQuery;
        detailRow?: JQuery;
        masterRow?: JQuery;
    }

    interface GridEditEvent extends GridEvent {
        container?: JQuery;
        model?: kendo.data.Model;
    }

    interface GridFilterMenuInitEvent extends GridEvent {
        container?: JQuery;
        field?: string;
    }

    interface GridRemoveEvent extends GridEvent {
        model?: kendo.data.Model;
        row?: JQuery;
    }

    interface GridSaveEvent extends GridEvent {
        model?: kendo.data.Model;
        row?: JQuery;
        values?: any;
    }

    interface GridSaveChangesEvent extends GridEvent {
        preventDefault?: Function;
    }


    class ListView extends kendo.ui.Widget {
        static fn: ListView;
        static extend(proto: Object): ListView;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: ListViewOptions);
        options: ListViewOptions;
        dataSource: kendo.data.DataSource;
        add(): void;
        cancel(): void;
        clearSelection(): void;
        destroy(): void;
        edit(item: any): void;
        refresh(): void;
        remove(item: any): void;
        save(): void;
        select(): JQuery;
        select(items: any): void;
        setDataSource(dataSource: kendo.data.DataSource): void;
    }

    interface ListViewOptions {
        name?: string;
        autoBind?: boolean;
        dataSource?: any;
        editTemplate?: Function;
        navigatable?: boolean;
        selectable?: any;
        template?: Function;
        altTemplate?: Function;
        cancel?(e: ListViewCancelEvent): void;
        change?(e: ListViewEvent): void;
        dataBound?(e: ListViewEvent): void;
        dataBinding?(e: ListViewEvent): void;
        edit?(e: ListViewEditEvent): void;
        remove?(e: ListViewRemoveEvent): void;
    }

    interface ListViewEvent {
        sender: ListView;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface ListViewCancelEvent extends ListViewEvent {
        container?: JQuery;
        model?: kendo.data.Model;
        preventDefault?: Function;
    }

    interface ListViewEditEvent extends ListViewEvent {
        item?: JQuery;
        model?: kendo.data.Model;
    }

    interface ListViewRemoveEvent extends ListViewEvent {
        item?: JQuery;
        model?: kendo.data.Model;
    }


    class Menu extends kendo.ui.Widget {
        static fn: Menu;
        static extend(proto: Object): Menu;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: MenuOptions);
        options: MenuOptions;
        append(item: string, referenceItem: string): kendo.ui.Menu;
        close(element: string): kendo.ui.Menu;
        destroy(): void;
        enable(element: string, enable: boolean): kendo.ui.Menu;
        insertAfter(item: string, referenceItem: string): kendo.ui.Menu;
        insertBefore(item: string, referenceItem: string): kendo.ui.Menu;
        open(element: string): kendo.ui.Menu;
        remove(element: string): kendo.ui.Menu;
    }

    interface MenuAnimationClose {
        effects?: string;
        duration?: number;
    }

    interface MenuAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface MenuAnimation {
        close?: MenuAnimationClose;
        open?: MenuAnimationOpen;
    }

    interface MenuOptions {
        name?: string;
        animation?: MenuAnimation;
        closeOnClick?: boolean;
        direction?: string;
        hoverDelay?: number;
        openOnClick?: boolean;
        orientation?: string;
        popupCollision?: string;
        close?(e: MenuCloseEvent): void;
        open?(e: MenuOpenEvent): void;
        activate?(e: MenuActivateEvent): void;
        deactivate?(e: MenuDeactivateEvent): void;
        select?(e: MenuSelectEvent): void;
    }

    interface MenuEvent {
        sender: Menu;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface MenuCloseEvent extends MenuEvent {
        item?: Element;
    }

    interface MenuOpenEvent extends MenuEvent {
        item?: Element;
    }

    interface MenuActivateEvent extends MenuEvent {
        item?: Element;
    }

    interface MenuDeactivateEvent extends MenuEvent {
        item?: Element;
    }

    interface MenuSelectEvent extends MenuEvent {
        item?: Element;
    }


    class MultiSelect extends kendo.ui.Widget {
        static fn: MultiSelect;
        static extend(proto: Object): MultiSelect;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: MultiSelectOptions);
        options: MultiSelectOptions;
        dataSource: kendo.data.DataSource;
        close(): void;
        dataItems(): any;
        destroy(): void;
        enable(enable: boolean): void;
        readonly(readonly: boolean): void;
        focus(): void;
        open(): void;
        refresh(): void;
        search(word: string): void;
        setDataSource(dataSource: kendo.data.DataSource): void;
        toggle(toggle: boolean): void;
        value(): any;
        value(value: any): void;
    }

    interface MultiSelectAnimationClose {
        effects?: string;
        duration?: number;
    }

    interface MultiSelectAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface MultiSelectAnimation {
        close?: MultiSelectAnimationClose;
        open?: MultiSelectAnimationOpen;
    }

    interface MultiSelectOptions {
        name?: string;
        animation?: MultiSelectAnimation;
        autoBind?: boolean;
        dataSource?: any;
        dataTextField?: string;
        dataValueField?: string;
        delay?: number;
        enable?: boolean;
        filter?: string;
        height?: number;
        highlightFirst?: boolean;
        ignoreCase?: string;
        minLength?: number;
        maxSelectedItems?: number;
        placeholder?: string;
        itemTemplate?: string;
        tagTemplate?: string;
        value?: any;
        change?(e: MultiSelectEvent): void;
        close?(e: MultiSelectEvent): void;
        dataBound?(e: MultiSelectEvent): void;
        open?(e: MultiSelectEvent): void;
        select?(e: MultiSelectSelectEvent): void;
    }

    interface MultiSelectEvent {
        sender: MultiSelect;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface MultiSelectSelectEvent extends MultiSelectEvent {
        item?: JQuery;
    }


    class NumericTextBox extends kendo.ui.Widget {
        static fn: NumericTextBox;
        static extend(proto: Object): NumericTextBox;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: NumericTextBoxOptions);
        options: NumericTextBoxOptions;
        destroy(): void;
        enable(enable: boolean): void;
        readonly(readonly: boolean): void;
        focus(): void;
        max(): number;
        max(value: any): void;
        min(): number;
        min(value: any): void;
        step(): number;
        step(value: any): void;
        value(): number;
        value(value: any): void;
    }

    interface NumericTextBoxOptions {
        name?: string;
        culture?: string;
        decimals?: number;
        downArrowText?: string;
        format?: string;
        max?: number;
        min?: number;
        placeholder?: string;
        spinners?: boolean;
        step?: number;
        upArrowText?: string;
        value?: number;
        change?(e: NumericTextBoxEvent): void;
        spin?(e: NumericTextBoxEvent): void;
    }

    interface NumericTextBoxEvent {
        sender: NumericTextBox;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }


    class Pager extends kendo.ui.Widget {
        static fn: Pager;
        static extend(proto: Object): Pager;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: PagerOptions);
        options: PagerOptions;
        dataSource: kendo.data.DataSource;
        totalPages(): void;
        pageSize(): void;
        page(): void;
        refresh(): void;
        destroy(): void;
    }

    interface PagerMessages {
        display?: string;
        empty?: string;
        page?: string;
        of?: string;
        itemsPerPage?: string;
        first?: string;
        previous?: string;
        next?: string;
        last?: string;
        refresh?: string;
    }

    interface PagerOptions {
        name?: string;
        autoBind?: boolean;
        buttonCount?: number;
        dataSource?: any;
        selectTemplate?: string;
        linkTemplate?: string;
        info?: boolean;
        input?: boolean;
        numeric?: boolean;
        pageSizes?: any;
        previousNext?: boolean;
        refresh?: boolean;
        messages?: PagerMessages;
        change?(e: PagerEvent): void;
    }

    interface PagerEvent {
        sender: Pager;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }


    class PanelBar extends kendo.ui.Widget {
        static fn: PanelBar;
        static extend(proto: Object): PanelBar;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: PanelBarOptions);
        options: PanelBarOptions;
        append(item: string, referenceItem: string): kendo.ui.PanelBar;
        collapse(element: string, useAnimation: boolean): kendo.ui.PanelBar;
        destroy(): void;
        enable(element: any, enable: boolean): void;
        expand(element: string, useAnimation: boolean): kendo.ui.PanelBar;
        insertAfter(item: string, referenceItem: string): void;
        insertBefore(item: string, referenceItem: string): kendo.ui.PanelBar;
        reload(element: string): void;
        remove(element: any): void;
        select(element: any): void;
    }

    interface PanelBarAnimationCollapse {
        duration?: number;
        effects?: string;
    }

    interface PanelBarAnimationExpand {
        duration?: number;
        effects?: string;
        show?: boolean;
    }

    interface PanelBarAnimation {
        collapse?: PanelBarAnimationCollapse;
        expand?: PanelBarAnimationExpand;
    }

    interface PanelBarOptions {
        name?: string;
        animation?: PanelBarAnimation;
        expandMode?: string;
        activate?(e: PanelBarActivateEvent): void;
        collapse?(e: PanelBarCollapseEvent): void;
        contentLoad?(e: PanelBarContentLoadEvent): void;
        error?(e: PanelBarErrorEvent): void;
        expand?(e: PanelBarExpandEvent): void;
        select?(e: PanelBarSelectEvent): void;
    }

    interface PanelBarEvent {
        sender: PanelBar;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface PanelBarActivateEvent extends PanelBarEvent {
        item?: Element;
    }

    interface PanelBarCollapseEvent extends PanelBarEvent {
        item?: Element;
    }

    interface PanelBarContentLoadEvent extends PanelBarEvent {
        item?: Element;
        contentElement?: Element;
    }

    interface PanelBarErrorEvent extends PanelBarEvent {
        xhr?: JQueryXHR;
        status?: string;
    }

    interface PanelBarExpandEvent extends PanelBarEvent {
        item?: Element;
    }

    interface PanelBarSelectEvent extends PanelBarEvent {
        item?: Element;
    }


    class RangeSlider extends kendo.ui.Widget {
        static fn: RangeSlider;
        static extend(proto: Object): RangeSlider;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: RangeSliderOptions);
        options: RangeSliderOptions;
        destroy(): void;
        enable(enable: boolean): void;
        value(): void;
        value(value: number): void;
    }

    interface RangeSliderTooltip {
        enabled?: boolean;
        format?: string;
        template?: string;
    }

    interface RangeSliderOptions {
        name?: string;
        largeStep?: number;
        max?: number;
        min?: number;
        orientation?: string;
        selectionEnd?: number;
        selectionStart?: number;
        smallStep?: number;
        tickPlacement?: string;
        tooltip?: RangeSliderTooltip;
        change?(e: RangeSliderChangeEvent): void;
        slide?(e: RangeSliderSlideEvent): void;
    }

    interface RangeSliderEvent {
        sender: RangeSlider;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface RangeSliderChangeEvent extends RangeSliderEvent {
        value?: number;
    }

    interface RangeSliderSlideEvent extends RangeSliderEvent {
        value?: number;
    }


    class Slider extends kendo.ui.Widget {
        static fn: Slider;
        static extend(proto: Object): Slider;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: SliderOptions);
        options: SliderOptions;
        destroy(): void;
        enable(enable: boolean): void;
        value(): void;
        value(value: string): void;
    }

    interface SliderTooltip {
        enabled?: boolean;
        format?: string;
        template?: string;
    }

    interface SliderOptions {
        name?: string;
        decreaseButtonTitle?: string;
        increaseButtonTitle?: string;
        largeStep?: number;
        max?: number;
        min?: number;
        orientation?: string;
        showButtons?: boolean;
        smallStep?: number;
        tickPlacement?: string;
        tooltip?: SliderTooltip;
        value?: number;
        change?(e: SliderChangeEvent): void;
        slide?(e: SliderSlideEvent): void;
    }

    interface SliderEvent {
        sender: Slider;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface SliderChangeEvent extends SliderEvent {
        value?: number;
    }

    interface SliderSlideEvent extends SliderEvent {
        value?: number;
    }


    class Splitter extends kendo.ui.Widget {
        static fn: Splitter;
        static extend(proto: Object): Splitter;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: SplitterOptions);
        options: SplitterOptions;
        ajaxRequest(pane: any, url: string, data: any): void;
        collapse(pane: any): void;
        destroy(): void;
        expand(pane: any): void;
        max(pane: any, value: string): void;
        min(pane: any, value: string): void;
        size(pane: any, value: string): void;
        toggle(pane: any, expand: boolean): void;
    }

    interface SplitterPane {
        collapsed?: boolean;
        collapsible?: boolean;
        contentUrl?: string;
        max?: string;
        min?: string;
        resizable?: boolean;
        scrollable?: boolean;
        size?: string;
    }

    interface SplitterOptions {
        name?: string;
        orientation?: string;
        panes?: SplitterPane[];
        collapse?(e: SplitterCollapseEvent): void;
        contentLoad?(e: SplitterContentLoadEvent): void;
        expand?(e: SplitterExpandEvent): void;
        layoutChange?(e: SplitterEvent): void;
        resize?(e: SplitterEvent): void;
    }

    interface SplitterEvent {
        sender: Splitter;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface SplitterCollapseEvent extends SplitterEvent {
        pane?: Element;
    }

    interface SplitterContentLoadEvent extends SplitterEvent {
        pane?: Element;
    }

    interface SplitterExpandEvent extends SplitterEvent {
        pane?: Element;
    }


    class TabStrip extends kendo.ui.Widget {
        static fn: TabStrip;
        static extend(proto: Object): TabStrip;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: TabStripOptions);
        options: TabStripOptions;
        append(tab: string): kendo.ui.TabStrip;
        contentElement(itemIndex: number): Element;
        contentHolder(itemIndex: number): Element;
        deactivateTab(item: string): void;
        destroy(): void;
        disable(element: string): kendo.ui.TabStrip;
        enable(element: string, enable?: boolean): kendo.ui.TabStrip;
        insertAfter(item: string, referenceTab: string): kendo.ui.TabStrip;
        insertBefore(item: string, referenceTab: string): kendo.ui.TabStrip;
        items(): HTMLCollection;
        reload(element: string): kendo.ui.TabStrip;
        remove(element: any): kendo.ui.TabStrip;
        select(): JQuery;
        select(element: any): void;
    }

    interface TabStripAnimationClose {
        duration?: number;
        effects?: string;
    }

    interface TabStripAnimationOpen {
        duration?: number;
        effects?: string;
        show?: boolean;
    }

    interface TabStripAnimation {
        close?: TabStripAnimationClose;
        open?: TabStripAnimationOpen;
    }

    interface TabStripOptions {
        name?: string;
        animation?: TabStripAnimation;
        collapsible?: boolean;
        dataContentField?: string;
        dataContentUrlField?: string;
        dataImageUrlField?: string;
        dataSpriteCssClass?: string;
        dataTextField?: string;
        dataUrlField?: string;
        activate?(e: TabStripActivateEvent): void;
        contentLoad?(e: TabStripContentLoadEvent): void;
        error?(e: TabStripErrorEvent): void;
        select?(e: TabStripSelectEvent): void;
    }

    interface TabStripEvent {
        sender: TabStrip;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface TabStripActivateEvent extends TabStripEvent {
        item?: Element;
        contentElement?: Element;
    }

    interface TabStripContentLoadEvent extends TabStripEvent {
        item?: Element;
        contentElement?: Element;
    }

    interface TabStripErrorEvent extends TabStripEvent {
        xhr?: JQueryXHR;
        status?: string;
    }

    interface TabStripSelectEvent extends TabStripEvent {
        item?: Element;
        contentElement?: Element;
    }


    class TimePicker extends kendo.ui.Widget {
        static fn: TimePicker;
        static extend(proto: Object): TimePicker;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: TimePickerOptions);
        options: TimePickerOptions;
        close(): void;
        destroy(): void;
        enable(enable: boolean): void;
        readonly(readonly: boolean): void;
        max(): Date;
        max(value: any): void;
        min(): Date;
        min(value: any): void;
        open(): void;
        value(): Date;
        value(value: any): void;
    }

    interface TimePickerAnimationClose {
        effects?: string;
        duration?: number;
    }

    interface TimePickerAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface TimePickerAnimation {
        close?: TimePickerAnimationClose;
        open?: TimePickerAnimationOpen;
    }

    interface TimePickerOptions {
        name?: string;
        animation?: TimePickerAnimation;
        culture?: string;
        dates?: any;
        format?: string;
        interval?: number;
        max?: Date;
        min?: Date;
        parseFormats?: any;
        value?: Date;
        change?(e: TimePickerEvent): void;
        close?(e: TimePickerEvent): void;
        open?(e: TimePickerEvent): void;
    }

    interface TimePickerEvent {
        sender: TimePicker;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }


    class Tooltip extends kendo.ui.Widget {
        static fn: Tooltip;
        static extend(proto: Object): Tooltip;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: TooltipOptions);
        options: TooltipOptions;
        show(element: JQuery): void;
        hide(): void;
        target(): JQuery;
    }

    interface TooltipAnimationClose {
        effects?: string;
        duration?: number;
    }

    interface TooltipAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface TooltipAnimation {
        close?: TooltipAnimationClose;
        open?: TooltipAnimationOpen;
    }

    interface TooltipContent {
        url?: string;
    }

    interface TooltipOptions {
        name?: string;
        autoHide?: boolean;
        animation?: TooltipAnimation;
        content?: TooltipContent;
        callout?: boolean;
        filter?: string;
        iframe?: boolean;
        height?: number;
        width?: number;
        position?: string;
        showAfter?: number;
        showOn?: string;
        contentLoad?(e: TooltipEvent): void;
        show?(e: TooltipEvent): void;
        hide?(e: TooltipEvent): void;
        requestStart?(e: TooltipRequestStartEvent): void;
        error?(e: TooltipErrorEvent): void;
    }

    interface TooltipEvent {
        sender: Tooltip;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface TooltipRequestStartEvent extends TooltipEvent {
        target?: JQuery;
        options?: any;
    }

    interface TooltipErrorEvent extends TooltipEvent {
        xhr?: JQueryXHR;
        status?: string;
    }


    class TreeView extends kendo.ui.Widget {
        static fn: TreeView;
        static extend(proto: Object): TreeView;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: TreeViewOptions);
        options: TreeViewOptions;
        dataSource: kendo.data.DataSource;
        append(nodeData: any, parentNode?: JQuery): void;
        collapse(nodes: any): void;
        dataItem(node: any): kendo.data.Node;
        destroy(): void;
        detach(node: any): JQuery;
        enable(nodes: any, enable?: boolean): void;
        expand(nodes: any): void;
        findByText(text: string): JQuery;
        findByUid(text: string): JQuery;
        insertAfter(nodeData: any, referenceNode: JQuery): void;
        insertBefore(nodeData: any, referenceNode: JQuery): void;
        parent(node: any): JQuery;
        remove(node: any): void;
        select(): JQuery;
        select(node?: any): void;
        setDataSource(dataSource: kendo.data.HierarchicalDataSource): void;
        text(): string;
        text(node: string, newText: string): void;
        toggle(node: string): void;
    }

    interface TreeViewAnimationCollapse {
        duration?: number;
        effects?: string;
    }

    interface TreeViewAnimationExpand {
        duration?: number;
        effects?: string;
        show?: boolean;
    }

    interface TreeViewAnimation {
        collapse?: TreeViewAnimationCollapse;
        expand?: TreeViewAnimationExpand;
    }

    interface TreeViewCheckboxes {
        name?: string;
        checkChildren?: boolean;
        template?: any;
    }

    interface TreeViewOptions {
        name?: string;
        animation?: TreeViewAnimation;
        autoBind?: boolean;
        checkboxes?: TreeViewCheckboxes;
        dataImageUrlField?: string;
        dataSource?: any;
        dataSpriteCssClassField?: string;
        dataTextField?: any;
        dataUrlField?: string;
        dragAndDrop?: boolean;
        loadOnDemand?: boolean;
        template?: any;
        collapse?(e: TreeViewCollapseEvent): void;
        dataBound?(e: TreeViewDataBoundEvent): void;
        drag?(e: TreeViewDragEvent): void;
        dragend?(e: TreeViewDragendEvent): void;
        dragstart?(e: TreeViewDragstartEvent): void;
        drop?(e: TreeViewDropEvent): void;
        expand?(e: TreeViewExpandEvent): void;
        change?(e: TreeViewEvent): void;
        select?(e: TreeViewSelectEvent): void;
        navigate?(e: TreeViewNavigateEvent): void;
    }

    interface TreeViewEvent {
        sender: TreeView;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface TreeViewCollapseEvent extends TreeViewEvent {
        node?: Element;
    }

    interface TreeViewDataBoundEvent extends TreeViewEvent {
        node?: JQuery;
    }

    interface TreeViewDragEvent extends TreeViewEvent {
        sourceNode?: Element;
        dropTarget?: Element;
        pageX?: number;
        pageY?: number;
        statusClass?: string;
        setStatusClass?: Function;
    }

    interface TreeViewDragendEvent extends TreeViewEvent {
        sourceNode?: Element;
        destinationNode?: Element;
        dropPosition?: string;
    }

    interface TreeViewDragstartEvent extends TreeViewEvent {
        sourceNode?: Element;
    }

    interface TreeViewDropEvent extends TreeViewEvent {
        sourceNode?: Element;
        destinationNode?: Element;
        valid?: boolean;
        setValid?: Function;
        dropTarget?: Element;
        dropPosition?: string;
    }

    interface TreeViewExpandEvent extends TreeViewEvent {
        node?: Element;
    }

    interface TreeViewSelectEvent extends TreeViewEvent {
        node?: Element;
    }

    interface TreeViewNavigateEvent extends TreeViewEvent {
        node?: Element;
    }


    class Upload extends kendo.ui.Widget {
        static fn: Upload;
        static extend(proto: Object): Upload;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: UploadOptions);
        options: UploadOptions;
        destroy(): void;
        disable(): void;
        enable(enable?: boolean): void;
        toggle(enable: boolean): void;
    }

    interface UploadAsync {
        autoUpload?: boolean;
        batch?: boolean;
        removeField?: string;
        removeUrl?: string;
        removeVerb?: string;
        saveField?: string;
        saveUrl?: string;
    }

    interface UploadLocalization {
        cancel?: string;
        dropFilesHere?: string;
        remove?: string;
        retry?: string;
        select?: string;
        statusFailed?: string;
        statusUploaded?: string;
        statusUploading?: string;
        uploadSelectedFiles?: string;
    }

    interface UploadOptions {
        name?: string;
        async?: UploadAsync;
        enabled?: boolean;
        localization?: UploadLocalization;
        multiple?: boolean;
        showFileList?: boolean;
        cancel?(e: UploadCancelEvent): void;
        complete?(e: UploadEvent): void;
        error?(e: UploadErrorEvent): void;
        progress?(e: UploadProgressEvent): void;
        remove?(e: UploadRemoveEvent): void;
        select?(e: UploadSelectEvent): void;
        success?(e: UploadSuccessEvent): void;
        upload?(e: UploadUploadEvent): void;
    }

    interface UploadEvent {
        sender: Upload;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface UploadCancelEvent extends UploadEvent {
        files?: any;
    }

    interface UploadErrorEvent extends UploadEvent {
        files?: any;
        operation?: string;
        XMLHttpRequest?: any;
    }

    interface UploadProgressEvent extends UploadEvent {
        files?: any;
        percentComplete?: number;
    }

    interface UploadRemoveEvent extends UploadEvent {
        files?: any;
        data?: any;
    }

    interface UploadSelectEvent extends UploadEvent {
        e?: any;
        files?: any;
    }

    interface UploadSuccessEvent extends UploadEvent {
        files?: any;
        operation?: string;
        response?: string;
        XMLHttpRequest?: any;
    }

    interface UploadUploadEvent extends UploadEvent {
        files?: any;
        data?: any;
        XMLHttpRequest?: any;
    }


    class Validator extends kendo.ui.Widget {
        static fn: Validator;
        static extend(proto: Object): Validator;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: ValidatorOptions);
        options: ValidatorOptions;
        errors(): any;
        hideMessages(): void;
        validate(): boolean;
        validateInput(input: Element): boolean;
    }

    interface ValidatorOptions {
        name?: string;
        messages?: any;
        rules?: any;
        validateOnBlur?: boolean;
    }

    interface ValidatorEvent {
        sender: Validator;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }


    class Window extends kendo.ui.Widget {
        static fn: Window;
        static extend(proto: Object): Window;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: WindowOptions);
        options: WindowOptions;
        center(): kendo.ui.Window;
        close(): kendo.ui.Window;
        content(): kendo.ui.Window;
        content(content: string): void;
        destroy(): void;
        maximize(): kendo.ui.Window;
        minimize(): kendo.ui.Window;
        open(): kendo.ui.Window;
        refresh(options: WindowRefreshOptions): kendo.ui.Window;
        restore(): kendo.ui.Window;
        setOptions(): void;
        title(): kendo.ui.Window;
        title(text: string): void;
        toFront(): kendo.ui.Window;
        toggleMaximization(): kendo.ui.Window;
    }

    interface WindowAnimationClose {
        effects?: string;
        duration?: number;
        reverse?: boolean;
    }

    interface WindowAnimationOpen {
        effects?: string;
        duration?: number;
        reverse?: boolean;
    }

    interface WindowAnimation {
        close?: WindowAnimationClose;
        open?: WindowAnimationOpen;
    }

    interface WindowContent {
        template?: string;
    }

    interface WindowRefreshOptions {
        url?: string;
        data?: any;
        type?: string;
        template?: string;
        iframe?: boolean;
    }

    interface WindowOptions {
        name?: string;
        actions?: any;
        animation?: WindowAnimation;
        appendTo?: any;
        content?: WindowContent;
        draggable?: boolean;
        iframe?: boolean;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        modal?: boolean;
        resizable?: boolean;
        title?: any;
        visible?: boolean;
        width?: any;
        height?: any;
        activate?(e: WindowEvent): void;
        close?(e: WindowEvent): void;
        deactivate?(e: WindowEvent): void;
        dragend?(e: WindowEvent): void;
        dragstart?(e: WindowEvent): void;
        error?(e: WindowErrorEvent): void;
        open?(e: WindowEvent): void;
        refresh?(e: WindowEvent): void;
        resize?(e: WindowEvent): void;
    }

    interface WindowEvent {
        sender: Window;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface WindowErrorEvent extends WindowEvent {
        xhr?: JQueryXHR;
        status?: string;
    }


}

declare module FX {
    class FX  {
        options: FXOptions;
        kendoAnimate(duration: number, reverse: boolean, complete: Function, show: boolean, hide: boolean): void;
        kendoStop(gotoEnd: boolean): void;
        kendoAddClass(classes: string, options: FXKendoAddClassOptions): void;
        kendoRemoveClass(classes: string, options: FXKendoRemoveClassOptions): void;
        kendoToggleClass(classes: string, options: FXKendoToggleClassOptions, toggle: boolean): void;
    }

    interface FXKendoAddClassOptions {
        duration?: number;
        exclusive?: string;
        ease?: string;
    }

    interface FXKendoRemoveClassOptions {
        duration?: number;
        exclusive?: string;
        ease?: string;
    }

    interface FXKendoToggleClassOptions {
        duration?: number;
        exclusive?: string;
        ease?: string;
    }

    interface FXOptions {
        name?: string;
    }

    interface FXEvent {
        sender: FX;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }


}

interface JQueryXHR {
}

interface JQueryEventObject {
}
/*
interface JQueryPromise {
}*/

interface JQuery {

    kendoDraggable(): JQuery;
    kendoDraggable(options: kendo.ui.DraggableOptions): JQuery;

    kendoDropTarget(): JQuery;
    kendoDropTarget(options: kendo.ui.DropTargetOptions): JQuery;

    kendoDropTargetArea(): JQuery;
    kendoDropTargetArea(options: kendo.ui.DropTargetAreaOptions): JQuery;

    kendoAutoComplete(): JQuery;
    kendoAutoComplete(options: kendo.ui.AutoCompleteOptions): JQuery;

    kendoCalendar(): JQuery;
    kendoCalendar(options: kendo.ui.CalendarOptions): JQuery;

    kendoColorPalette(): JQuery;
    kendoColorPalette(options: kendo.ui.ColorPaletteOptions): JQuery;

    kendoColorPicker(): JQuery;
    kendoColorPicker(options: kendo.ui.ColorPickerOptions): JQuery;

    kendoComboBox(): JQuery;
    kendoComboBox(options: kendo.ui.ComboBoxOptions): JQuery;

    kendoDatePicker(): JQuery;
    kendoDatePicker(options: kendo.ui.DatePickerOptions): JQuery;

    kendoDateTimePicker(): JQuery;
    kendoDateTimePicker(options: kendo.ui.DateTimePickerOptions): JQuery;

    kendoDropDownList(): JQuery;
    kendoDropDownList(options: kendo.ui.DropDownListOptions): JQuery;

    kendoEditor(): JQuery;
    kendoEditor(options: kendo.ui.EditorOptions): JQuery;

    kendoFlatColorPicker(): JQuery;
    kendoFlatColorPicker(options: kendo.ui.FlatColorPickerOptions): JQuery;

    kendoGrid(): JQuery;
    kendoGrid(options: kendo.ui.GridOptions): JQuery;

    kendoListView(): JQuery;
    kendoListView(options: kendo.ui.ListViewOptions): JQuery;

    kendoMenu(): JQuery;
    kendoMenu(options: kendo.ui.MenuOptions): JQuery;

    kendoMultiSelect(): JQuery;
    kendoMultiSelect(options: kendo.ui.MultiSelectOptions): JQuery;

    kendoNumericTextBox(): JQuery;
    kendoNumericTextBox(options: kendo.ui.NumericTextBoxOptions): JQuery;

    kendoPager(): JQuery;
    kendoPager(options: kendo.ui.PagerOptions): JQuery;

    kendoPanelBar(): JQuery;
    kendoPanelBar(options: kendo.ui.PanelBarOptions): JQuery;

    kendoRangeSlider(): JQuery;
    kendoRangeSlider(options: kendo.ui.RangeSliderOptions): JQuery;

    kendoSlider(): JQuery;
    kendoSlider(options: kendo.ui.SliderOptions): JQuery;

    kendoSplitter(): JQuery;
    kendoSplitter(options: kendo.ui.SplitterOptions): JQuery;

    kendoTabStrip(): JQuery;
    kendoTabStrip(options: kendo.ui.TabStripOptions): JQuery;

    kendoTimePicker(): JQuery;
    kendoTimePicker(options: kendo.ui.TimePickerOptions): JQuery;

    kendoTooltip(): JQuery;
    kendoTooltip(options: kendo.ui.TooltipOptions): JQuery;

    kendoTreeView(): JQuery;
    kendoTreeView(options: kendo.ui.TreeViewOptions): JQuery;

    kendoUpload(): JQuery;
    kendoUpload(options: kendo.ui.UploadOptions): JQuery;

    kendoValidator(): JQuery;
    kendoValidator(options: kendo.ui.ValidatorOptions): JQuery;

    kendoWindow(): JQuery;
    kendoWindow(options: kendo.ui.WindowOptions): JQuery;

}
