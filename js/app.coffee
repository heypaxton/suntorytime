class Order

	constructor: (item, description) ->
		@item = item
		@description = description

class OrderManager
	
	queueOrder: (item, description) ->
		$('ul#orders').append("<li><button class='fillOrder btn btn-warning'>
				<i class='icon icon-white icon-remove'></i> Fill Order
		 		</button>
				<span class='label label-info'>Drink: #{item}  Description: #{description}</span>
		 	</li>")

	fillOrder: (order) ->
		order.remove()


orderManager = new OrderManager()
$('#sendOrder').click () ->
	item = $('#item').val()
	description = $('#description').val()
	order = new Order(item, description)
	orderManager.queueOrder(order.item, order.description)

$('button.fillOrder').live 'click', () ->
	#$(this).parent('li').remove()
	order = $(this).parent('li')
	orderManager.fillOrder(order)

	