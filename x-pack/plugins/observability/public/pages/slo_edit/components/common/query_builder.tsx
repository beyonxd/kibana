/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React, { ReactNode } from 'react';
import { Control, Controller, FieldPath } from 'react-hook-form';
import { EuiFormRow } from '@elastic/eui';
import { CreateSLOInput } from '@kbn/slo-schema';
import { QueryStringInput } from '@kbn/unified-search-plugin/public';
import { useKibana } from '../../../../utils/kibana_react';
import { useCreateDataView } from '../../../../hooks/use_create_data_view';

export interface Props {
  control: Control<CreateSLOInput>;
  dataTestSubj: string;
  indexPatternString: string | undefined;
  label: string;
  name: FieldPath<CreateSLOInput>;
  placeholder: string;
  tooltip?: ReactNode;
}

export function QueryBuilder({
  control,
  dataTestSubj,
  indexPatternString,
  label,
  name,
  placeholder,
  tooltip,
}: Props) {
  const { data, dataViews, docLinks, http, notifications, storage, uiSettings, unifiedSearch } =
    useKibana().services;

  const { dataView } = useCreateDataView({ indexPatternString });

  return (
    <EuiFormRow
      label={
        !!tooltip ? (
          <span>
            {label} {tooltip}
          </span>
        ) : (
          label
        )
      }
      fullWidth
    >
      <Controller
        shouldUnregister
        defaultValue=""
        name={name}
        control={control}
        render={({ field }) => (
          <QueryStringInput
            appName="Observability"
            bubbleSubmitEvent={false}
            dataTestSubj={dataTestSubj}
            deps={{
              data,
              dataViews,
              docLinks,
              http,
              notifications,
              storage,
              uiSettings,
              unifiedSearch,
            }}
            disableAutoFocus
            disableLanguageSwitcher
            indexPatterns={dataView ? [dataView] : []}
            isDisabled={!indexPatternString}
            languageSwitcherPopoverAnchorPosition="rightDown"
            placeholder={placeholder}
            query={{ query: String(field.value), language: 'kuery' }}
            size="s"
            onChange={(value) => {
              field.onChange(value.query);
            }}
          />
        )}
      />
    </EuiFormRow>
  );
}
