import { NextRouter } from 'next/router'

export const makeAsPath = ({ pathname, query }: NextRouter) => {
    return Object.keys(query).reduce((asPath, key) => {
        const queryValue = query[key]
        const value = typeof queryValue === 'string' ? queryValue : queryValue[0]
        return asPath.replace(`[${key}]`, value)
    }, pathname)
}
