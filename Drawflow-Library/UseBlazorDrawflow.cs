using Microsoft.Extensions.DependencyInjection;
using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Drawflow_Library
{
	public static class UseBlazorDrawflowExtension
	{
		public static IServiceCollection UseDrawflowBlazor(this IServiceCollection services)
		{
			return services.AddScoped<FlowJSMain>();
		}
    }
}
