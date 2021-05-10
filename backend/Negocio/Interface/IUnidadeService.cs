﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio.Interface
{
    public interface IUnidadeService<T>: IConsultaService<T>, IPersistir<T>
    {
    }
}
