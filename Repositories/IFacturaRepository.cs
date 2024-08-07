using FacturasAPI.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FacturasAPI.Repositories
{
    public interface IFacturaRepository
    {
        Task<IEnumerable<Factura>> GetAllAsync();
        Task<Factura> GetByIdAsync(string id);
        Task CreateAsync(Factura factura);
        Task UpdateAsync(string id, Factura factura);
        Task DeleteAsync(string id);
    }
}
