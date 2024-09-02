class SimplybookWidget {
  constructor(options) {
    this.options = {
      // common options
      'container_id': null,
      'widget_type': 'iframe',
      'widget_user_class': '',
      'theme': 'default',
      'theme_settings': {},
      'app_config': {},
      'timeline': null,
      'datepicker': null,
      'url': '',
      // iframe widget options
      'iframe_postpone': false,
      // button widget options
      'button_position': 'right',
      'button_position_offset': 'auto',
      'button_background_color': '#06acee',
      'button_text_color': '#ffffff',
      'button_title': 'Book Now',
      'button_preload': true,
      'button_custom_id': null,
      'navigate': 'book'
    };
    this.modalsPositions = {};
    this.name = 'widget_' + Math.random();
    this.frame = null;

    for (var name in options) {
      if (!options.hasOwnProperty(name)) {
        continue;
      }
      this.options[name] = options[name];
    }

    this.init();
  }
  init() {
    document.cookie = 'sb_widget=1';

    if (!this.options.postpone) {
      switch (this.options.widget_type) {
        case 'iframe':
          this.displayIframe();
          break;

        case 'reviews':
          this.options.navigate = 'reviews';
          this.displayIframe();
          break;

        case 'button':
          this.addButton();
          break;

        case 'contact-button':
          this.addContactButton();
          break;

        case 'gift-card':
          this.options.navigate = 'gift-card';
          this.displayIframe();
          break;

        case 'packages':
          this.options.navigate = 'packages';
          this.displayIframe();
          break;

        case 'membership':
          this.options.navigate = 'membership';
          this.displayIframe();
          break;
      }
    }
  }
  onReceiveMessage(message) {
    if (typeof message.data === 'object') {
      if (!this.frame || message.source !== this.frame.contentWindow) {
        return;
      }
      switch (message.data.event) {
        case 'appReady':
          this.setSettings(message.data);
          break;
        case 'updateWidgetSize':
          this.updateWidgetSize(message.data);
          break;
        case 'closeWidget':
          this.closePopup();
          break;
        case 'modalShown':
          if (this.options.widget_type === 'iframe' || this.options.widget_type === 'gift-card' || this.options.widget_type === 'packages' || this.options.widget_type === 'membership') {
            this.changeModalPosition(message.data.listener_id);
          }
          break;
        case 'modalShow':
          if (this.options.widget_type === 'iframe' || this.options.widget_type === 'gift-card' || this.options.widget_type === 'packages' || this.options.widget_type === 'membership') {
            this.saveModalPosition(message.data.listener_id);
          }
          break;
        case 'modalHidden':
          if (this.options.widget_type === 'iframe' || this.options.widget_type === 'gift-card' || this.options.widget_type === 'packages' || this.options.widget_type === 'membership') {
            this.updatePositionAfterModal(message.data.listener_id);
          }
          break;
        case 'stepChanged':
        case 'scrollTo':
          if (this.options.widget_type === 'iframe' || this.options.widget_type === 'gift-card' || this.options.widget_type === 'packages' || this.options.widget_type === 'membership') {
            this.scrollToContent(message.data.content_position);
          }
          break;
      }
    }
  }
  setSettings() {
    var win = this.frame.contentWindow || this.frame;

    var postData = {
      'update_config': true,
      'update_theme_vars': true,
      'rerender': this.options.navigate === null,
      'theme_vars': this.options.theme_settings,
      'config_vars': this.options.app_config,
      'hostname': window.location.hostname,
      'url': window.location.href,
    };

    if (this.options.navigate) {
      postData['navigate'] = this.options.navigate;
      this.options.navigate = null;
    }

    if (this.options.reviews_count || this.options.hide_add_reviews) {
      postData['reviews_vars'] = {
        "reviews_count": this.options.reviews_count,
        "hide_add_reviews": parseInt(this.options.hide_add_reviews)
      };
    }

    win.postMessage(postData, '*');
  }
  navigate(to) {
    var win = this.frame.contentWindow || this.frame;

    win.postMessage({
      'navigate': to
    }, '*');
  }
  scrollToContent(contentPos) {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var iframePosition = this.frame.getBoundingClientRect();

    var top = scrollTop + iframePosition.top + contentPos;

    if (scrollTop > top) {
      window.scrollTo(0, top);
    }
  }
  changeModalPosition(listenerId) {
    if (this.modalsPositions[listenerId]) {
      window.scrollTo(0, this.modalsPositions[listenerId]);
    }

    var win = this.frame.contentWindow || this.frame;

    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var iframePosition = this.frame.getBoundingClientRect();

    var top = scrollTop + iframePosition.top;
    var scrollTo = scrollTop - top;

    win.postMessage({
      'update_modal_position': true,
      'listener_id': listenerId,
      'top': Math.max(scrollTo, 0)
    }, '*');
  }
  saveModalPosition(listenerId) {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    this.modalsPositions[listenerId] = scrollTop;
  }
  updatePositionAfterModal(listenerId) {
    if (this.modalsPositions[listenerId]) {
      window.scrollTo(0, this.modalsPositions[listenerId]);
    }
  }
  getUrl() {
    var widget_type = this.options.widget_type;
    if (widget_type == 'contact-button') {
      widget_type = 'button';
    }

    var getCookie = function (name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    };

    var url = this.options.url + '/v2/?widget-type=' + widget_type + '&theme=' + this.options.theme;
    if (this.options.theme) {
      url += '&theme=' + this.options.theme;
    }
    if (this.options.theme_id) {
      url += '&theme_id=' + this.options.theme_id;
    }
    if (this.options.timeline) {
      url += '&timeline=' + this.options.timeline;
    }
    if (this.options.datepicker) {
      url += '&datepicker=' + this.options.datepicker;
    }
    if (this.options.is_rtl) {
      url += '&is_rtl=1';
    }
    if (this.options.widget_user_class) {
      url += '&class=' + this.options.widget_user_class;
    }

    if (getCookie('_ga')) {
      url += '&_ga=' + getCookie('_ga');
    }
    return url;
  }
  subscribeMessages() {
    var instance = this;
    window.addEventListener("message", function (data) {
      instance.onReceiveMessage(data);
    }, false);
  }
  // iframe widget methods
  updateWidgetSize(data) {
    if (this.options.widget_type !== 'iframe' && this.options.widget_type !== 'gift-card' && this.options.widget_type !== 'packages' && this.options.widget_type !== 'membership' && this.options.widget_type !== 'reviews') {
      return;
    }
    // if(['iframe', 'reviews', 'gift-card', 'package'].indexOf(this.options.widget_type) >= 0){
    //     return;
    // }
    this.frame.height = data.height;
  }
  displayIframe() {
    var containerId = this.options.container_id;
    var iframeHtml = '<iframe scrolling="no" class="sb-widget-iframe" width="100%" border="0" frameborder="0" src="' + this.getUrl() + '" name="' + this.name + '" id="' + this.name + '" title="Booking widget"></iframe>';

    if (containerId) {
      if (typeof containerId === 'object') {
        this.container = containerId;
      } else {
        this.container = document.getElementById(containerId);
        if (!this.container) {
          this.container = document.createElement('div');
          this.container.id = containerId;
          document.body.appendChild(this.container);
        }
      }
      this.container.innerHTML = iframeHtml;
    } else {
      document.write(iframeHtml);
    }
    this.frame = document.getElementById(this.name);
    this.subscribeMessages();
  }
  // button widget methods
  addButton() {
    this.addButtonWidgetStyles();

    var btn;
    if (this.options.button_custom_id) {
      btn = document.getElementById(this.options.button_custom_id);
    } else {
      btn = this.getButtonNode();
    }

    var instance = this;
    btn.addEventListener('click', function () {
      instance.showPopupFrame('book');
    });

    if (!this.options.button_custom_id) {
      if (!document.body) {
        document.getElementsByTagName('html')[0].appendChild(document.createElement('body'));
      }
      document.body.appendChild(btn);
    }
  }
  addContactButton() {
    this.addButtonWidgetStyles();

    var btn;
    if (this.options.button_custom_id) {
      btn = document.getElementById(this.options.button_custom_id);
    } else {
      btn = this.getButtonNode();
    }

    var instance = this;
    btn.addEventListener('click', function () {
      instance.showPopupFrame('contact-widget');
    });

    if (!this.options.button_custom_id) {
      if (!document.body) {
        document.getElementsByTagName('html')[0].appendChild(document.createElement('body'));
      }
      document.body.appendChild(btn);
    }
  }
  getButtonNode() {
    this.btn = document.createElement('div');
    this.btnLabel = document.createElement('div');
    this.btnLabel.innerText = this.options.button_title;

    this.btn.appendChild(this.btnLabel);

    this.updateButtonStyles();

    return this.btn;
  }
  updateButtonStyles(options) {
    if (!this.btn) {
      return;
    }
    if (options) {
      this.options.button_position = options.button_position;
      this.options.button_background_color = options.button_background_color;
      this.options.button_text_color = options.button_text_color;
      this.options.button_position_offset = options.button_position_offset;
      this.options.button_title = options.button_title;
    }

    this.btn.className = 'simplybook-widget-button ' + this.options.button_position;
    this.btn.style.backgroundColor = this.options.button_background_color;
    this.btn.style.color = this.options.button_text_color;
    if (this.options.button_position === 'top' || this.options.button_position === 'bottom') {
      this.btn.style.right = this.options.button_position_offset;
      this.btn.style.bottom = '';
    } else {
      this.btn.style.bottom = this.options.button_position_offset;
      this.btn.style.right = '';
    }
    this.btnLabel.innerText = this.options.button_title;
  }
  resetWidget(options) {
    this.options = options;

    this.updateButtonStyles(options);

    this.container = null;
    this.frame = null;
  }
  showPopupFrame(navigateTo) {
    if (navigateTo === undefined) {
      navigateTo = 'book';
    }

    if (!this.container) {
      this.container = document.createElement('div');
      this.container.className = 'simplybook-widget-container active';

      this.options.navigate = navigateTo;
      this.container.appendChild(this.getIframeNode());

      document.body.appendChild(this.container);
    } else {
      this.container.className = 'simplybook-widget-container active';
      this.navigate(navigateTo);
    }

    this.showOverlay();
  }
  closePopup() {
    this.hideOverlay();
    this.container.className = 'simplybook-widget-container';
  }
  showOverlay() {
    if (!this.overlay) {
      this.overlay = document.createElement('div');
      this.overlay.className = 'simplybook-widget-overlay';

      var instance = this;
      this.overlay.addEventListener('click', function () {
        instance.closePopup();
      });
    }

    document.body.appendChild(this.overlay);

    var instance = this;
    // to show animated appear
    setTimeout(function () {
      instance.overlay.className = instance.overlay.className + ' active';
    }, 10);
  }
  hideOverlay() {
    if (this.overlay) {
      this.overlay.className = 'simplybook-widget-overlay';

      var instance = this;
      setTimeout(function () {
        document.body.removeChild(instance.overlay);
      }, 300);
    }
  }
  addButtonWidgetStyles() {
    var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', this.options.url + '/v2/widget/widget.css');

    document.getElementsByTagName('head')[0].appendChild(link);
  }
  getIframeNode() {
    if (!this.frame) {
      this.frame = document.createElement('iframe');
      this.frame.border = '0';
      this.frame.frameBorder = '0';
      if (this.options.widget_type == 'iframe') {
        this.frame.scrolling = 'no';
      }
      this.frame.name = this.name;
      this.frame.id = this.name;
      this.frame.src = this.getUrl();

      this.subscribeMessages();
    }

    return this.frame;
  }
}
