namespace Terrasoft.Core.Process
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Drawing;
	using System.Globalization;
	using System.Text;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;
	using Terrasoft.Core.Process.Configuration;

	#region Class: UsrAutoAddYachtRentalsProcess_594e4b9MethodsWrapper

	/// <exclude/>
	public class UsrAutoAddYachtRentalsProcess_594e4b9MethodsWrapper : ProcessModel
	{

		public UsrAutoAddYachtRentalsProcess_594e4b9MethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
			AddScriptTaskMethod("ScriptTask2Execute", ScriptTask2Execute);
			AddScriptTaskMethod("ScriptTask3Execute", ScriptTask3Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			Set("CounterParameter", 1);
			Set("CurrentDateParameter", DateTime.Now.AddDays(10));
			return true;
		}

		private bool ScriptTask2Execute(ProcessExecutingContext context) {
			var prev = Get<DateTime>("CurrentDateParameter");
			Set("CurrentDateParameter", prev.AddDays(1));
			return true;
		}

		private bool ScriptTask3Execute(ProcessExecutingContext context) {
			var c = Get<int>("CounterParameter");
			Set("CounterParameter", c + 1);
			return true;
		}

		#endregion

	}

	#endregion

}

