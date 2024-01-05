using Microsoft.JSInterop;
using Drawflow_Library.Models;
using Drawflow_Library.Models.Options;

namespace Drawflow_Library
{
	public class Drawflow : IAsyncDisposable
	{
		private readonly Lazy<Task<IJSObjectReference>> _module;
        private readonly Lazy<Task<IJSObjectReference>> _moduleEvents;

        public Drawflow(IJSRuntime _runtime)
        {
			_module = new(() => _runtime.InvokeAsync<IJSObjectReference>("import", "./_content/Drawflow-Library/drawflowProxy.js").AsTask());
            _moduleEvents = new(() => _runtime.InvokeAsync<IJSObjectReference>("import", "./_content/Drawflow-Library/drawflowEvents.js").AsTask());
        }
		public async ValueTask<bool> CreateDrawflow(string id, EditorOptions options)
		{
			
            var module = await _module.Value;
            var result = await module.InvokeAsync<bool>("CreateDrawflow", id, options);
			await _moduleEvents.Value;
            return result;
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
