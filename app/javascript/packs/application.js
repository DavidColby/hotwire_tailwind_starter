import Rails from "@rails/ujs"
import "@hotwired/turbo-rails"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

// This is the line we're adding
import "stylesheets/application"

Rails.start()
ActiveStorage.start()

import "controllers"
  