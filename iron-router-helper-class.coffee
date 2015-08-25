class IronRouterHelper
  constructor: (@router) ->
    @currentRoute ?= {}
    @currentController ?= {}

    self = @
    @router.onAfterAction ->
      self.currentRoute = @
      self.getController()

  getController: ->
    @currentController = switch
      when @currentRoute.route.findControllerConstructor then @currentRoute.route.findControllerConstructor()
      when @currentRoute.route.findController then @currentRoute.route.findController()
      else null