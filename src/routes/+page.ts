import type { PageLoad } from './$types';

export const load:PageLoad = ({url}) => {
    return {
        message: url.searchParams.get('message'),
    }
}