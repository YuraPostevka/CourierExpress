namespace CourierExpress.Models.Constants
{
    public enum OrderStatus : byte
    {
        Pending = 1,//в очікуванні
        Accepted, //прийнятий
        Closed //закритий
    }
}