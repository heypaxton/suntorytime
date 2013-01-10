(function() {
  var Order, OrderManager, orderManager;

  Order = (function() {

    function Order(item, description) {
      this.item = item;
      this.description = description;
    }

    return Order;

  })();

  OrderManager = (function() {

    function OrderManager() {}

    OrderManager.prototype.queueOrder = function(item, description) {
      return $('ul#orders').append("<li><button class='fillOrder btn btn-warning'>				<i class='icon icon-white icon-remove'></i> Fill Order		 		</button>				<span class='label label-info'>Drink: " + item + "  Description: " + description + "</span>		 	</li>");
    };

    OrderManager.prototype.fillOrder = function(order) {
      return order.remove();
    };

    return OrderManager;

  })();

  orderManager = new OrderManager();

  $('#sendOrder').click(function() {
    var description, item, order;
    item = $('#item').val();
    description = $('#description').val();
    order = new Order(item, description);
    return orderManager.queueOrder(order.item, order.description);
  });

  $('button.fillOrder').live('click', function() {
    var order;
    order = $(this).parent('li');
    return orderManager.fillOrder(order);
  });

}).call(this);
