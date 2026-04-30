namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrYachtEventsSchema

	/// <exclude/>
	public class UsrYachtEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrYachtEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrYachtEventsSchema(UsrYachtEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("8300e122-4643-4886-8c68-8465c1db9d5f");
			Name = "UsrYachtEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("20056216-c5cc-4ea0-b351-4ac2af279c34");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,219,106,219,64,16,125,15,228,31,6,61,73,96,150,230,53,105,3,177,113,75,32,180,37,150,11,33,244,97,189,26,203,27,246,34,118,86,78,221,146,127,239,94,98,215,177,68,201,128,196,238,204,153,51,115,102,7,12,215,72,29,23,8,53,58,199,201,174,61,155,89,179,150,109,239,184,151,214,156,159,157,159,253,137,63,8,214,147,52,45,44,118,228,81,95,189,117,30,167,107,109,205,127,194,14,217,220,120,233,37,210,251,80,108,190,69,227,255,129,31,83,96,151,188,119,50,52,99,208,149,11,177,65,205,191,6,61,240,9,138,37,185,7,46,54,158,138,234,231,62,173,235,87,74,10,16,138,19,65,138,142,240,192,37,76,57,225,72,100,79,115,152,198,17,167,221,134,206,101,131,176,181,178,129,111,102,193,183,65,79,105,87,79,40,60,16,154,6,221,4,50,233,20,215,65,92,162,190,113,45,1,86,199,132,111,216,163,173,66,55,236,192,184,167,194,234,234,20,152,217,97,23,133,133,17,148,249,94,229,140,1,186,65,33,53,87,208,57,41,226,196,82,26,251,130,190,222,117,216,204,172,234,181,249,193,85,143,31,95,145,215,101,28,234,247,8,47,134,197,229,26,202,76,117,13,23,31,146,85,167,152,129,180,104,200,110,105,198,141,64,133,77,104,195,187,30,51,249,24,152,188,139,107,18,86,150,120,139,53,234,78,113,31,187,55,248,12,119,86,112,37,127,243,149,194,69,194,149,89,211,146,208,133,149,54,225,37,194,62,179,123,36,219,59,17,48,214,5,146,201,104,161,104,135,29,202,219,87,76,160,24,148,32,150,102,116,75,181,181,83,217,230,91,81,177,218,190,182,80,189,87,76,16,145,29,236,179,117,154,251,242,68,100,168,126,1,97,170,233,155,47,239,71,222,32,154,223,56,251,156,198,49,255,37,176,139,138,247,76,195,132,151,99,199,225,146,14,47,127,1,166,94,21,169,26,4,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("23e66529-9963-cdf1-aec9-0004e1f8a899"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("20056216-c5cc-4ea0-b351-4ac2af279c34"),
				CreatedInSchemaUId = new Guid("8300e122-4643-4886-8c68-8465c1db9d5f"),
				ModifiedInSchemaUId = new Guid("8300e122-4643-4886-8c68-8465c1db9d5f")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("8300e122-4643-4886-8c68-8465c1db9d5f"));
		}

		#endregion

	}

	#endregion

}

