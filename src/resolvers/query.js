const Query= {
    localizations: (_, args, context) => {
      const {localizations} = context
      return localizations
    },
    localization: (_, args, context) => {
      const id = args.id
      const {localizations} = context
      return localizations.filter(loc => loc.id == id)[0]
    }
}

export default Query