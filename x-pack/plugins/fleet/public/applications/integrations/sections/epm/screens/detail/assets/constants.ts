/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { ElasticsearchAssetType, KibanaAssetType } from '../../../../../types';

import type { AllowedAssetTypes } from './types';

export const allowedAssetTypes: AllowedAssetTypes = [
  KibanaAssetType.dashboard,
  KibanaAssetType.search,
  KibanaAssetType.visualization,
  ElasticsearchAssetType.transform,
];
