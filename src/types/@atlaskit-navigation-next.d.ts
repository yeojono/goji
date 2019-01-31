
export type ViewData = Array<{ [k: string]: any }>;

export interface ViewControllerInterface {
  state: {
    /** The view which is currently being rendered in the navigation. */
    activeView: {
      /** The unique ID for this view. */
      id: string,
      /** The layer of navigation this view should be rendered on. */
      type: 'container' | 'product',
      /** An array of items. */
      data: any[],
      /** Any extra analytics attributes that have been added via \`getAnalyticsAttributes\`.
       * These will be added to the payload of analytics events fired within navigation-next
       */
      analyticsAttributes?: {} | void,
    } | null,

    /** The view which will become active once it has loaded. */
    incomingView: {
      /** The unique ID for this view. */
      id: string,
      /** The layer of navigation this view should be rendered on. */
      type: 'container' | 'product',
    } | null,
  };

  /** Register a view. You must provide an \`id\`, the \`type\` of view
   * ('product' or 'container'), and a \`getItems\` function which should return
   * either an array of data, or a Promise which will resolve to an array of
   * data. */
  addView: (options: {
    /** A unique ID for this view. */
    id: string,
    /** The layer of navigation this view should be rendered on. */
    type: 'container' | 'product',
    /** A function which should return an array of items, or a Promise which
     * will resolve to an array of items. */
    getItems: () => Promise<any[]> | any[],
    /** A function which is passed the items of the active view and should return
     * an object with extra attributes to be sent for analytics events.
     * Any data here is added to navigation context under the attributes key.
     */
    getAnalyticsAttributes?: (items: ViewData) => {},
  }) => void;

  /** Un-register a view. If the view being removed is active it will remain so
   * until a different view is set. */
  removeView: (viewId: string) => void;

  /** Set the registered view with the given ID as the active view. */
  setView: (viewId: string) => void;

  /** Add a reducer to the view with the given ID. */
  addReducer: (id: string, reducer: (state: any[]) => any[]) => void;

  /** Remove a reducer from the view with the given ID. */
  removeReducer: (string, reducer: (state: any[]) => any[]) => void;

  /** Will re-resolve the active view and re-reduce its data. Accepts an
   * optional view ID to only re-resolve if the given ID matches the active
   * view. */
  updateActiveView: (viewId: string | void) => void;

  /** Set whether the view controller is in debug mode. */
  setIsDebugEnabled: (isEnabled: boolean) => void;
}

export interface NavigationProviderChildProps {
  navigationViewController: ViewControllerInterface;
}
