/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { Asset, AssetWithoutTimestamp } from '../../common/types_api';

// Provide a list of asset EAN values to remove, to simulate disappearing or
// appearing assets over time.
export function getSampleAssetDocs({
  baseDateTime = new Date(),
  excludeEans = [],
}: {
  baseDateTime?: Date;
  excludeEans?: string[];
}): Asset[] {
  const timestamp = baseDateTime.toISOString();
  return sampleAssets
    .filter((asset) => !excludeEans.includes(asset['asset.ean']))
    .map((asset) => {
      return {
        '@timestamp': timestamp,
        ...asset,
      };
    });
}

const sampleK8sClusters: AssetWithoutTimestamp[] = [
  {
    'asset.type': 'k8s.cluster',
    'asset.id': 'cluster-001',
    'asset.name': 'Cluster 001 (AWS EKS)',
    'asset.ean': 'k8s.cluster:cluster-001',
    'orchestrator.type': 'kubernetes',
    'orchestrator.cluster.name': 'Cluster 001 (AWS EKS)',
    'orchestrator.cluster.id': 'cluster-001',
    'cloud.provider': 'aws',
    'cloud.region': 'us-east-1',
    'cloud.service.name': 'eks',
  },
  {
    'asset.type': 'k8s.cluster',
    'asset.id': 'cluster-002',
    'asset.name': 'Cluster 002 (Azure AKS)',
    'asset.ean': 'k8s.cluster:cluster-002',
    'orchestrator.type': 'kubernetes',
    'orchestrator.cluster.name': 'Cluster 002 (Azure AKS)',
    'orchestrator.cluster.id': 'cluster-002',
    'cloud.provider': 'azure',
    'cloud.region': 'eu-west',
    'cloud.service.name': 'aks',
  },
];

const sampleK8sNodes: AssetWithoutTimestamp[] = [
  {
    'asset.type': 'k8s.node',
    'asset.id': 'node-101',
    'asset.name': 'k8s-node-101-aws',
    'asset.ean': 'k8s.node:node-101',
    'asset.parents': ['k8s.cluster:cluster-001'],
    'orchestrator.type': 'kubernetes',
    'orchestrator.cluster.name': 'Cluster 001 (AWS EKS)',
    'orchestrator.cluster.id': 'cluster-001',
    'cloud.provider': 'aws',
    'cloud.region': 'us-east-1',
    'cloud.service.name': 'eks',
  },
  {
    'asset.type': 'k8s.node',
    'asset.id': 'node-102',
    'asset.name': 'k8s-node-102-aws',
    'asset.ean': 'k8s.node:node-102',
    'asset.parents': ['k8s.cluster:cluster-001'],
    'orchestrator.type': 'kubernetes',
    'orchestrator.cluster.name': 'Cluster 001 (AWS EKS)',
    'orchestrator.cluster.id': 'cluster-001',
    'cloud.provider': 'aws',
    'cloud.region': 'us-east-1',
    'cloud.service.name': 'eks',
  },
  {
    'asset.type': 'k8s.node',
    'asset.id': 'node-103',
    'asset.name': 'k8s-node-103-aws',
    'asset.ean': 'k8s.node:node-103',
    'asset.parents': ['k8s.cluster:cluster-001'],
    'orchestrator.type': 'kubernetes',
    'orchestrator.cluster.name': 'Cluster 001 (AWS EKS)',
    'orchestrator.cluster.id': 'cluster-001',
    'cloud.provider': 'aws',
    'cloud.region': 'us-east-1',
    'cloud.service.name': 'eks',
  },
];

const sampleK8sPods: AssetWithoutTimestamp[] = [
  {
    'asset.type': 'k8s.pod',
    'asset.id': 'pod-200xrg1',
    'asset.name': 'k8s-pod-200xrg1-aws',
    'asset.ean': 'k8s.pod:pod-200xrg1',
    'asset.parents': ['k8s.node:node-101'],
  },
  {
    'asset.type': 'k8s.pod',
    'asset.id': 'pod-200dfp2',
    'asset.name': 'k8s-pod-200dfp2-aws',
    'asset.ean': 'k8s.pod:pod-200dfp2',
    'asset.parents': ['k8s.node:node-101'],
  },
  {
    'asset.type': 'k8s.pod',
    'asset.id': 'pod-200wwc3',
    'asset.name': 'k8s-pod-200wwc3-aws',
    'asset.ean': 'k8s.pod:pod-200wwc3',
    'asset.parents': ['k8s.node:node-101'],
  },
  {
    'asset.type': 'k8s.pod',
    'asset.id': 'pod-200naq4',
    'asset.name': 'k8s-pod-200naq4-aws',
    'asset.ean': 'k8s.pod:pod-200naq4',
    'asset.parents': ['k8s.node:node-102'],
  },
  {
    'asset.type': 'k8s.pod',
    'asset.id': 'pod-200ohr5',
    'asset.name': 'k8s-pod-200ohr5-aws',
    'asset.ean': 'k8s.pod:pod-200ohr5',
    'asset.parents': ['k8s.node:node-102'],
  },
  {
    'asset.type': 'k8s.pod',
    'asset.id': 'pod-200yyx6',
    'asset.name': 'k8s-pod-200yyx6-aws',
    'asset.ean': 'k8s.pod:pod-200yyx6',
    'asset.parents': ['k8s.node:node-103'],
  },
  {
    'asset.type': 'k8s.pod',
    'asset.id': 'pod-200psd7',
    'asset.name': 'k8s-pod-200psd7-aws',
    'asset.ean': 'k8s.pod:pod-200psd7',
    'asset.parents': ['k8s.node:node-103'],
  },
  {
    'asset.type': 'k8s.pod',
    'asset.id': 'pod-200wmc8',
    'asset.name': 'k8s-pod-200wmc8-aws',
    'asset.ean': 'k8s.pod:pod-200wmc8',
    'asset.parents': ['k8s.node:node-103'],
  },
  {
    'asset.type': 'k8s.pod',
    'asset.id': 'pod-200ugg9',
    'asset.name': 'k8s-pod-200ugg9-aws',
    'asset.ean': 'k8s.pod:pod-200ugg9',
    'asset.parents': ['k8s.node:node-103'],
  },
];

export const sampleAssets: AssetWithoutTimestamp[] = [
  ...sampleK8sClusters,
  ...sampleK8sNodes,
  ...sampleK8sPods,
];
