using CourierExpress.BLL.Services.Interfaces;
using CourierExpress.Models.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;

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
            try
            {
                return Json(_orderService.Get());
            }
            catch (Exception ex)
            {
                return BadRequest(new { code = 500, message = ex.Message });
            }
        }

        [HttpGet]
        [Route("getMy/{ownerId}")]
        public IActionResult GetMy(int ownerId)
        {
            try
            {
                return Json(_orderService.GetMy(ownerId));
            }
            catch (Exception ex)
            {
                return BadRequest(new { code = 500, message = ex.Message });
            }
        }

        [HttpGet]
        [Route("getById/{id}")]
        public IActionResult GetById(int id)
        {
            try
            {
                return Json(_orderService.GetById(id));
            }
            catch (Exception ex)
            {
                return BadRequest(new { code = 500, message = ex.Message });
            }
        }

        [HttpGet]
        [Route("getCourierActive/{userId}")]
        public IActionResult GetCourierActive(int userId)
        {
            try
            {
                return Json(_orderService.GetCourierActive(userId));
            }
            catch (Exception ex)
            {
                return BadRequest(new { code = 500, message = ex.Message });
            }
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
                return BadRequest(new { code = 500, message = "Operation failed" });
            }
        }

        [HttpPost]
        [Route("accept/{orderId}/{courierId}")]
        public IActionResult Accept(int orderId, int courierId)
        {
            try
            {
                _orderService.Accept(orderId, courierId);
                return Ok(new { code = 200 });

            }
            catch
            {
                return BadRequest(new { code = 500, message = "Operation failed" });
            }
        }

        [HttpPost]
        [Route("close/{orderId}")]
        public IActionResult Close(int orderId)
        {
            try
            {
                _orderService.Close(orderId);
                return Ok(new { code = 200 });

            }
            catch
            {
                return BadRequest(new { code = 500, message = "Operation failed" });
            }
        }

        [HttpPost]
        [Route("remove")]
        public IActionResult Remove([FromBody]int orderId)
        {
            try
            {
                _orderService.Remove(orderId);
                return Ok(new { code = 200 });

            }
            catch
            {
                return BadRequest(new { code = 500, message = "Operation failed" });
            }
        }
    }
}