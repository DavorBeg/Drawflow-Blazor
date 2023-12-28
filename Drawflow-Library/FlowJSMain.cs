using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Drawflow_Library
{
	public class FlowJSMain : IAsyncDisposable
	{
		private readonly Lazy<Task<IJSObjectReference>> _module;

        public FlowJSMain(IJSRuntime _runtime)
        {
			_module = new(() => _runtime.InvokeAsync<IJSObjectReference>("import", "./_content/Drawflow-Library/drawflow.min.js").AsTask());
        }
		public async ValueTask CreateDrawflow(string id)
		{
			var module = await _module.Value;
			await module.InvokeVoidAsync("Drawflow");
		}
		public async ValueTask DisposeAsync()
		{
			if(_module.IsValueCreated)
			{
				var module = await _module.Value;
				await module.DisposeAsync();
			}
		}
	}
}
