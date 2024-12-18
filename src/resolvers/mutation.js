import { v4 } from "uuid"

const Mutation = {
    addLocalization: (_, args, context) => {
        const {localization} = args
        localization.id = v4()
        const {localizations} = context
        localizations.push(localization)
        return localization
    },
    updateLocalization: (_, args, context) => {
        const {localization} = args
        const {localizations} = context
        for(let i = 0; i < localizations.length; i++){
            let loc = localizations[i]
            if(loc.id == localization.id){
                localizations[i] = {...loc, ...localization}
                return localizations[i]
            }
        }
        return null
    }
}

export default Mutation