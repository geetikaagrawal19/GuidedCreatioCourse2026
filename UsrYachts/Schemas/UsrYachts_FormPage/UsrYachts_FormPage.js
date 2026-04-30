define("UsrYachts_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"allowToggleClose": true
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrYachts"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "36ed67cb-cb55-42cb-834b-cfbd7499f9b3",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "ActionsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ActionsButton_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "actions-button-icon",
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CalculateAverageTicketPriceMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CalculateAverageTicketPriceMenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrCalcAverageTicketPrice",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"notificationText": "#ResourceString(CalculateAverageTicketPriceMenuItem_clicked_params_notificationText)#",
							"recordIdProcessParameterName": "YachtIdParameter"
						}
					}
				},
				"parentName": "ActionsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CallMaxPriceWebServiceMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CallMaxPriceWebServiceMenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "usr.RunMaxPriceWebServiceRequest"
					},
					"icon": "rocket-icon"
				},
				"parentName": "ActionsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PushMeButton_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default",
					"icon": "copilot-rewrite-friendly-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Number",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrNumber_gw6943l",
					"control": "$PDS_UsrNumber_gw6943l",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "auto",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					}
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_f7f75bp",
					"control": "$PDS_UsrPrice_f7f75bp",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TicketPrice",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrColumn17_8tlkhnh",
					"control": "$PDS_UsrColumn17_8tlkhnh",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DriveType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrDriveType_oibew2v",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrDriveType_oibew2v",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Status",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrStatus_5dxglf1",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrStatus_5dxglf1",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PassengersCount",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPassengersCount_axzl264",
					"control": "$PDS_UsrPassengersCount_axzl264",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_1qhvqp4",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrManager_1qhvqp4",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ListAction_e7eg05a",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "ComboBox.AddNewRecord",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Manager",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_y3rpdqg",
					"control": "$PDS_UsrComment_y3rpdqg",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Input_oh8zp4n",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.EmailInput",
					"label": "#ResourceString(Input_oh8zp4n_label)#",
					"control": "$PDS_UsrManagerEmail_umfbdmj",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "auto",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Country",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCountry_c1ta37k",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrCountry_c1ta37k",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "City",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCity_8he6sp4",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrCity_8he6sp4",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "CategoriesMultiSelect",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.MultiSelect",
					"label": "#ResourceString(CategoriesMultiSelect_label)#",
					"recordId": "$Id",
					"recordRelationColumnName": "UsrParentYacht",
					"selectSchemaName": "UsrYachtCategoryStorage",
					"selectColumnName": "UsrCategory",
					"visible": true,
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"required": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_8tqymjc",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_8tqymjc_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_4cjy9bj",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_8tqymjc",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_1tusip4",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_4cjy9bj",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_2oxqhsd",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_2oxqhsd_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrYachtRental",
							"defaultValues": [
								{
									"attributeName": "UsrParentYacht",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_1tusip4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_p0q0lt6",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_p0q0lt6_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_t4ndb12DS"
						}
					}
				},
				"parentName": "FlexContainer_1tusip4",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_tikw0kh",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_tikw0kh_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_1tusip4",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_crah48g",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_crah48g_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_t4ndb12"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_tikw0kh",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_h3tjg64",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_h3tjg64_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrYachtRental"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_tikw0kh",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_uuomeb6",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_uuomeb6_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_uuomeb6_GridDetail_t4ndb12",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_t4ndb12"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_uuomeb6_SearchValue",
							"GridDetailSearchFilter_uuomeb6_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_1tusip4",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_6wvgf6c",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_8tqymjc",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_t4ndb12",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_t4ndb12",
					"primaryColumnName": "GridDetail_t4ndb12DS_Id",
					"columns": [
						{
							"id": "1f1a21b1-6c1c-0375-81b6-c9e1d85e8306",
							"code": "GridDetail_t4ndb12DS_UsrStartDate",
							"caption": "#ResourceString(GridDetail_t4ndb12DS_UsrStartDate)#",
							"dataValueType": 8
						},
						{
							"id": "19d660a7-50c5-349e-3b27-c5907c9fdb40",
							"code": "GridDetail_t4ndb12DS_UsrEndDate",
							"caption": "#ResourceString(GridDetail_t4ndb12DS_UsrEndDate)#",
							"dataValueType": 8
						},
						{
							"id": "80ca3ca3-5fea-5a30-0a3b-51a83a44fbc6",
							"code": "GridDetail_t4ndb12DS_UsrCustomer",
							"caption": "#ResourceString(GridDetail_t4ndb12DS_UsrCustomer)#",
							"dataValueType": 10
						},
						{
							"id": "94e08b0e-ce5d-e1d7-c35d-bb12f062f31b",
							"code": "GridDetail_t4ndb12DS_UsrRentalComment",
							"caption": "#ResourceString(GridDetail_t4ndb12DS_UsrRentalComment)#",
							"dataValueType": 28
						},
						{
							"id": "a8f89df5-37ef-b18a-c653-baa7c82c1487",
							"code": "GridDetail_t4ndb12DS_CreatedOn",
							"caption": "#ResourceString(GridDetail_t4ndb12DS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_6wvgf6c",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPrice_f7f75bp": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 200,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrDriveType_oibew2v": {
						"modelConfig": {
							"path": "PDS.UsrDriveType"
						}
					},
					"PDS_UsrDriveType_oibew2v_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrStatus_5dxglf1": {
						"modelConfig": {
							"path": "PDS.UsrStatus"
						}
					},
					"PDS_UsrStatus_5dxglf1_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrPassengersCount_axzl264": {
						"modelConfig": {
							"path": "PDS.UsrPassengersCount"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 2,
									"message": "#ResourceString(PassengerCountCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrManager_1qhvqp4": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrManager_1qhvqp4_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrComment_y3rpdqg": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrNumber_gw6943l": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrCountry_c1ta37k": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"PDS_UsrCountry_c1ta37k_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrCity_8he6sp4": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"PDS_UsrCity_8he6sp4_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrColumn17_8tlkhnh": {
						"modelConfig": {
							"path": "PDS.UsrColumn17"
						}
					},
					"PDS_UsrManagerEmail_umfbdmj": {
						"modelConfig": {
							"path": "PDS.UsrManagerEmail_umfbdmj"
						}
					},
					"GridDetail_t4ndb12": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_t4ndb12DS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_uuomeb6_GridDetail_t4ndb12",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrRentalComment"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_t4ndb12DS_UsrStartDate": {
									"modelConfig": {
										"path": "GridDetail_t4ndb12DS.UsrStartDate"
									}
								},
								"GridDetail_t4ndb12DS_UsrEndDate": {
									"modelConfig": {
										"path": "GridDetail_t4ndb12DS.UsrEndDate"
									}
								},
								"GridDetail_t4ndb12DS_UsrCustomer": {
									"modelConfig": {
										"path": "GridDetail_t4ndb12DS.UsrCustomer"
									}
								},
								"GridDetail_t4ndb12DS_UsrRentalComment": {
									"modelConfig": {
										"path": "GridDetail_t4ndb12DS.UsrRentalComment"
									}
								},
								"GridDetail_t4ndb12DS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_t4ndb12DS.CreatedOn"
									}
								},
								"GridDetail_t4ndb12DS_Id": {
									"modelConfig": {
										"path": "GridDetail_t4ndb12DS.Id"
									}
								}
							}
						}
					},
					"CategoriesMultiSelect_List_Items_Predefined_Filter": {
						"value": null
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_t4ndb12DS": [
							{
								"attributePath": "UsrParentYacht",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrYachts",
							"attributes": {
								"UsrManagerEmail_umfbdmj": {
									"path": "UsrManager.Email",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_t4ndb12DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrYachtRental",
							"attributes": {
								"UsrStartDate": {
									"path": "UsrStartDate"
								},
								"UsrEndDate": {
									"path": "UsrEndDate"
								},
								"UsrCustomer": {
									"path": "UsrCustomer"
								},
								"UsrRentalComment": {
									"path": "UsrRentalComment"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{

				request: "usr.PushButtonRequest",

				/* Implementation of the custom query handler. */

				handler: async (request, next) => {

					console.log("Button works...");

					Terrasoft.showInformation("My button was pressed.");

					var price = await request.$context.PDS_UsrPrice_f7f75bp;

					console.log("Price = " + price);

					request.$context.PDS_UsrComment_y3rpdqg = "comment from JS code!";

					/* Call the next handler if it exists and return its result. */

					return next?.handle(request);

				}

			},
			{

				request: "crt.HandleViewModelAttributeChangeRequest",

				/* The custom implementation of the system query handler. */

				handler: async (request, next) => {

      				if (request.attributeName === 'PDS_UsrPrice_f7f75bp' || 		        // if price changed

					   request.attributeName === 'PDS_UsrPassengersCount_axzl264' ) { 		// or Passenger count changed

						let price = await request.$context.PDS_UsrPrice_f7f75bp;

						let passengers = await request.$context.PDS_UsrPassengersCount_axzl264;

						let ticket_price = price / passengers;

						request.$context.PDS_UsrColumn17_8tlkhnh = ticket_price;

					}

					/* Call the next handler if it exists and return its result. */

					return next?.handle(request);

				}
			},
			{

				request: "usr.RunMaxPriceWebServiceRequest",

				/* Implementation of the custom query handler. */

				handler: async (request, next) => {

					console.log("Run web service button works...");

 

					// get id from drive type lookup type object

					var typeObject = await request.$context.PDS_UsrDriveType_oibew2v;

					var selectedDriveTypeId = "";
					
					if (typeObject) {

						selectedDriveTypeId = typeObject.value;

					}

					/* Create an instance of the HTTP client from @creatio-devkit/common. */

					const httpClientService = new sdk.HttpClientService();

 

					/* Specify the URL to run web service method. */

					const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();

					const transferName = "rest";

					const serviceName = "YachtService";

					const methodName = "GetMaxPriceByDriveTypeId";

					const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);
					
//const endpoint = "http://localhost/D1_Studio/0/rest/YachtService/GetMaxPriceByDriveTypeId";

					/* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */

					var params = {

						driveTypeId: selectedDriveTypeId

					};

					const response = await httpClientService.post(endpoint, params);

					

					console.log("response max price = " + response.body.GetMaxPriceByDriveTypeIdResult);

					

					/* Call the next handler if it exists and return its result. */

					return next?.handle(request);

				}

			},
			{
	request: "crt.LoadDataRequest",
	handler: async (request, next) => {

		// apply filter only for Manager lookup
		if (request.dataSourceName === "PDS_UsrManager_1qhvqp4_List") {

			const filter = new sdk.FilterGroup();

			filter.addSchemaColumnFilterWithParameter(
				sdk.ComparisonType.Equal,
				"Type.Name",
				"Employee"
			);

			request.parameters.push({
				type: "filter",
				value: filter
			});
		}

		return next?.handle(request);
	}
}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{

			/* The validator type must contain a vendor prefix.

			Format the validator type in PascalCase. */

			"usr.DGValidator": {

				validator: function (config) {

					return function (control) {

						let value = control.value;

						let minValue = config.minValue;

						let valueIsCorrect = value >= minValue;

						var result;

						if (valueIsCorrect) {

							result = null;

						} else {

							result = {

								"usr.DGValidator": { 

									message: config.message

								}

							};

						}

						return result;

					};

				},

				params: [

					{

						name: "minValue"

					},

					{

						name: "message"

					}

				],

				async: false

			}

		}/**SCHEMA_VALIDATORS*/
	};
});