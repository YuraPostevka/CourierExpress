using CourierExpress.BLL.Services.Interfaces;
using CourierExpress.Models.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CourierExpress.Controllers
{
    [Produces("application/json")]
    [Route("api/Orders")]
    [Authorize]
    public class OrdersController : Controller
    {
        private readonly IOrderService _orderService;

        public OrdersController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpGet]
        [Route("getAll")]
        public IActionResult Get()
        {
            return Json(_orderService.Get());
        }

        [HttpGet]
        [Route("getMy/{ownerId}")]
        public IActionResult GetMy(int ownerId)
        {
            return Json(_orderService.GetMy(ownerId));
        }

        [HttpGet]
        [Route("getById/{id}")]
        public IActionResult GetById(int id)
        {
            return Json(_orderService.GetById(id));
        }

        [HttpPost]
        [Route("create")]
        public IActionResult Create([FromBody]OrderModel model)
        {
            try
            {
                _orderService.Add(model);
                return Ok(new { code = 200 });

            }
            catch
            {
                return BadRequest(new { error = 412, message = "Operation failed" });
            }
        }
    }
}