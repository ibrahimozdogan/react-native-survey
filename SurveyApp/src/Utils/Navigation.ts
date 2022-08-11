import { createRef } from 'react';
import { CommonActions, NavigationContainerRef } from '@react-navigation/native';

const Navigation = {
    navigationRef: createRef<NavigationContainerRef<never>>(),

    navigateAndReset ({ routeName, params }: { routeName: string; params?: Record<string, unknown> }):void {
        if (this._navigation().isReady()) {
            this._navigation().dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{
                        name: routeName,
                        params
                    }]
                }),
            );
        }
    },

    _navigation () {
        return this.navigationRef.current as NavigationContainerRef<never>;
    },
}

export default Navigation
