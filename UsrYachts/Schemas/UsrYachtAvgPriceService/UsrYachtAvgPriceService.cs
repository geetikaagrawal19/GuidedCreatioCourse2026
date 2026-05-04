using System;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.ServiceModel.Activation;
using System.Runtime.Serialization;
using Terrasoft.Core;
using Terrasoft.Core.Entities;
using Terrasoft.Web.Common;

namespace Terrasoft.Configuration
{
    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class UsrYachtAvgPriceService : BaseService
    {
        [OperationContract]
        [WebInvoke(Method = "POST",
            RequestFormat = WebMessageFormat.Json,
            ResponseFormat = WebMessageFormat.Json,
            BodyStyle = WebMessageBodyStyle.Wrapped)]
        public decimal GetAveragePrice(RequestDto request)
        {
            var userConnection = UserConnection;

            // ❗ NULL / EMPTY CHECK
            if (request == null || request.DriveTypeId == Guid.Empty)
            {
                return -1;
            }

            // ✅ HARD CODE TEMP (to avoid lookup issue)
            Guid operationalStatusId = new Guid("d6dbf952-5465-47a4-883c-80b6fad88b0e");

            var esq = new EntitySchemaQuery(userConnection.EntitySchemaManager, "UsrYachts");

            esq.AddColumn("UsrPrice"); // ✅ FIXED

            esq.Filters.Add(esq.CreateFilterWithParameters(
                FilterComparisonType.Equal,
                "UsrDriveType",
                request.DriveTypeId));

            esq.Filters.Add(esq.CreateFilterWithParameters(
                FilterComparisonType.Equal,
                "UsrStatus",
                operationalStatusId));

            var entities = esq.GetEntityCollection(userConnection);

            if (entities.Count == 0)
            {
                return 0;
            }

            decimal total = 0;

            foreach (var item in entities)
            {
                total += item.GetTypedColumnValue<decimal>("UsrPrice"); // ✅ FIXED
            }

            return total / entities.Count;
        }
    }

    [DataContract]
    public class RequestDto
    {
        [DataMember]
        public Guid DriveTypeId { get; set; }
    }
}